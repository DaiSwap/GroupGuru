import { Faq } from ".";

export default {
  title: "Components/Faq",
  component: Faq,
  argTypes: {
    stateProp: {
      options: ["closed", "open"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "closed",
    className: {},
    divider: "https://c.animaapp.com/8De8XXjR/img/divider-13.png",
  },
};
