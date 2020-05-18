/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_ziFXjh1Jz3KQ7HwbjuHNxH0h00DkE0kWRy');

export const bookTour = async tourId => {
    try {
    //1) Get checkout session from api
    const session = await axios(
        `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);

    // 2) Create checkout form + chance credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    });

    } catch(err) {
        console.log(err);
        showAlert('error', err);
    }
};
