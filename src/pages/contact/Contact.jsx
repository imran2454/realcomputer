import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import GoogleMapEmbed from './GoogleMapEmbed'
import OfficeHours from './OfficeHours'

const Contact = () => {
  return (
    <div>
       
         <ContactDetails/>
        <GoogleMapEmbed/>
      
        <ContactForm/>
        <OfficeHours/>
      
    </div>
  )
}

export default Contact
