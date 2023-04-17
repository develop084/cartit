import React, {useState, useEffect} from 'react'
import axios from 'axios'



function PaymentPage() {

   const [isLoading, setIsLoading ] = useState(false) 
   const [product, setProduct] = useState([])


const paymentHandler = async (id) => {

   setIsLoading(true)
 
   const  {data} = await axios.post('http://localhost:8000/api/v1/payment', {id})

   

   var options = {
     key: data.key, // Enter the Key ID generated from the Dashboard
     amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
     currency: 'INR',
     name: 'Cart It Inc.',
     description: data.name,
     image: 'https://res.cloudinary.com/dts8hnbex/image/upload/v1681328390/Group_1_1_zquczc_3_-cropped_ikcsit.svg',
     order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     handler: function (response) {
       alert('Your payment is success')
     },
     prefill: {
       name: 'New User',
       email: 'newuser@example.com',
       contact: '9999999999',
     },
     notes: {
       address: 'new plance',
     },
     theme: {
       color: '#48BB78',
     },
   }
   var rzp1 = new window.Razorpay(options)
   rzp1.on('payment.failed', function (response) {
     alert(response.error.code)
   })
   rzp1.open()
   setIsLoading(false)

}


  return (
    <div>
     <button onClick={() => paymentHandler('643925ce4df22a05060c767f')}>'click'</button>
    </div>
  )
}

export default PaymentPage