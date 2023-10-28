import NodeMailJet from "node-mailjet";

const mailjet = NodeMailJet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

class Mail {
  async sendForgotPasswordMail(email, name, token) {
    try {
      const result = await mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: "eduardosantiago_@hotmail.com",
              Name: "Eduardo",
            },
            To: [
              {
                Email: email,
                Name: name,
              },
            ],
            Subject: "Greetings from Mailjet.",
            TextPart: "My first Mailjet email",
            HTMLPart:
              "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
            CustomID: "AppGettingStartedTest",
          },
        ],
      });
      return result;
    } catch (error) {
      return { error };
    }
  }
}

export default new Mail();
