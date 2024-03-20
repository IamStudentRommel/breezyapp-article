import Title from "../components/title";
import FormInput from "../components/forminput";
import BtnContact from "../components/btnfeedback";
import React, { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formData.message.length > 3) {
      try {
        const subjContent = `Amazing Crime App - Article - ${formData.name}`;
        const bodyContent = `${formData.message} <br><br> Thank you for taking the time to share your thoughts with us!<br> If you have any more inquiries, please don't hesitate to contact us again in our page: <a href="https://breezyapp-article.vercel.app/?page=contact">Amazing Crime App</a>`;

        //localhost:3000/api/send-email?from=test%40gmail.com&subject=Your%20Subject&text=Your%20Email%20Body
        const response = await fetch(
          `https://breezy-app-be.vercel.app/api/send-email?from=${encodeURIComponent(
            formData.email
          )}&subject=${encodeURIComponent(
            subjContent
          )}&text=${encodeURIComponent(bodyContent)}`,
          {
            method: "GET", // Assuming your API uses a GET request. Change if needed.
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log("shit");
        // console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);

        if (result.result === "Success") {
          alert("Thank you for reaching me, your inquiry sent successfully!");
          window.location.reload();
        } else {
          alert("Inquiry sending failed.");
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please input your valid text message.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main className="fade-in opacity-0">
      <Title />

      {/* <h2 className="text-2xl md:text-2xl font-bold mb-4 text-center">
        Not yet done still in progress..
      </h2> */}
      <div className="flex justify-center ">
        <div className="max-w-3xl w-full">
          <div className="leading-loose">
            <form
              onSubmit={handleSubmit}
              onChange={handleInputChange}
              className="max-w-3xl sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-2xl text-left"
            >
              <p className="font-general-medium text-primary-dark dark:text-primary-light text-xl mb-8 text-center italic">
                &quot;We value your feedback greatly as it helps us improve our
                application further. Thank you for taking the time to share your
                thoughts with us!&quot;
              </p>

              <FormInput
                inputLabel="Full Name"
                labelFor="name"
                inputType="text"
                inputId="name"
                inputName="name"
                placeholderText="Your Name"
                ariaLabelName="Name"
              />
              <FormInput
                inputLabel="Email"
                labelFor="email"
                inputType="email"
                inputId="email"
                inputName="email"
                placeholderText="Your email"
                ariaLabelName="Email"
              />
              {/* <FormInput
                inputLabel="Subject"
                labelFor="subject"
                inputType="text"
                inputId="subject"
                inputName="subject"
                placeholderText="Subject"
                ariaLabelName="Subject"
              /> */}

              <div className="mt-6">
                <label
                  className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-5 py-2 border border-gray-300 border-primary-dark border-opacity-50 text-black  bg-ternary-dark rounded-md shadow-sm text-md"
                  id="message"
                  name="message"
                  cols="14"
                  rows="6"
                  aria-label="Message"
                ></textarea>
              </div>

              <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-green-500 hover:bg-green-700 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 mb-10 duration-500 mx-auto">
                <BtnContact
                  title={isLoading ? "Sending..." : "Send Message"}
                  type="submit"
                  aria-label="Send Message"
                  disabled={isLoading}
                >
                  {isLoading ? <div className="spinner"></div> : "Send Message"}
                </BtnContact>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
