import React, {useEffect} from 'react'

const CheckoutSuccess = () => {
  useEffect(() => {
    sessionStorage.setItem("PaymentFlag", "true");
    const timer = setTimeout(() => {
      window.location.href = '/cartdetails'; 
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <p>Yay! Your payment is successful!</p>
      <p>Redirecting you to Carts page in 2 seconds...</p>
    </div>
  )
}

export default CheckoutSuccess;
