import emailjs from "emailjs-com";
export const sendEmail = (e) => {
  emailjs
    .sendForm(
      "Root_12345*Ayoub",
      "template_xh40k59",
      e.target,
      "SHcLeIItzujmro-sU"
    )
    .then(
      (result) => {
        console.log(result.text);
        // Optionally, you can show a success message or redirect the user to a thank you page
      },
      (error) => {
        console.log(error.text);
        // Optionally, you can show an error message to the user
      }
    );
};
