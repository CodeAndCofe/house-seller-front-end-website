import Header from "../Component/Header";
import chatf from "../assets/chat.png";
import ContactCard from "../Component/contact_card";
import phone from "../assets/phone.png"
import email from "../assets/email.png"
const Contact = () => {
  return (
    <div className='bg-gray-100 w-full min-h-screen flex flex-col justify-center items-center gap-12'>
      <Header />

      <div className="min-w-70 max-sm:mt-30 max-sm:ml-5">
        <h1 className="text-gray-900 font-extrabold text-5xl max-w-200">
          We are here any time, Contact us soon as 
          <span className="text-amber-500"> possible</span>
        </h1>
      </div>

      <div className="min-w-70">
        <div className="flex max-sm:flex-col flex-row gap-9">
          <ContactCard
            Title="Message"
            image={chatf}
            text="you can reach me on whatsapp on this number (fake) 06 22 33 55 88"
          />
           <ContactCard
            Title="Email"
            image={email}
            text="you can email us at seller@gmail.com"
          />
           <ContactCard
            Title="phone call"
            image={phone}
            text="or you can make a phone call : 05 55 55 55 42"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
