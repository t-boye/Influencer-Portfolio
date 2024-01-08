import React, { useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Define stripePromise
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const Payment = () => {
  const [success, setSuccess] = useState(false);
  const [totalAmount, setTotalAmount] = useState(50);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Send the payment method ID to your server to complete the transaction
      const paymentData = {
        payment_method_id: paymentMethod.id,
        amount: totalAmount * 100,
        currency: "usd",
        description: "Payment for my product",
      };
      // You can send the payment data to your server using fetch or Axios
      // await fetch('/your-server', { method: 'POST', body: JSON.stringify(paymentData) });
      setSuccess(true);
    }
  };

  const handleAmountChange = (event) => {
    setTotalAmount(Number(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h2 style={styles.heading}>Make a Payment</h2>
      <div style={styles.infoContainer}>
        <h3 style={styles.infoHeading}>Why Pay $50?</h3>
        <p style={styles.infoText}>
          Our product is designed to save you time and money. By paying $50, you
          will gain access to exclusive features and benefits that will help you
          achieve your goals faster and more efficiently.
        </p>
        <h3 style={styles.infoHeading}>What's Included?</h3>
        <ul style={styles.infoList}>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="card-element" style={styles.label}>
          Credit or Debit Card
        </label>
        <CardElement
          id="card-element"
          options={{ hidePostalCode: true }}
          style={styles.input}
        />
      </div>
      <button type="submit" disabled={!stripe} style={styles.button}>
        Pay ${totalAmount}
      </button>
      {success && <div style={styles.success}>Payment Successful!</div>}
    </form>
  );
};

const styles = {
  container: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 20,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    maxWidth: 400,
    margin: "0 auto",
    marginTop: 50,
    fontFamily: "'Helvetica Neue', sans-serif",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#ff69b4",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    display: "block",
    marginBottom: 10,
    fontSize: 16,
    color: "#555",
    fontFamily: "Georgia, serif",
  },
  input: {
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 4,
    fontSize: 16,
    color: "#555",
    fontFamily: "Georgia, serif",
  },
  button: {
    backgroundColor: "#e91e63",
    color: "#fff",
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "bold",
    border: "none",
    width: "100%",
    marginTop: 20,
    cursor: "pointer",
    fontFamily: "Montserrat, sans-serif",
  },
  success: {
    backgroundColor: "#FCE4EC",
    color: "#E91E63",
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    fontWeight: "bold",
    border: "1px solid #f8bbd0",
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
  },
  infoHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#E91E63",
    fontFamily: "Georgia, serif",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
    fontFamily: "Georgia, serif",
  },
  infoList: {
    listStyleType: "circle",
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
    fontFamily: "Georgia, serif",
  },
  infoContainer: {
    backgroundColor: "#FCE4EC",
    borderRadius: 10,
    padding: 20,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    maxWidth: 400,
    margin: "0 auto",
    marginTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#e91e63",
    fontFamily: "Georgia, serif",
  },
  inputContainer: {
    marginBottom: 20,
  },
};

const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default StripePayment;
