import Button from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Danger = Template.bind({})
Danger.args = {
  backgroundColor: "#d9534f",
  label: "Press Me",
  size: "md",
}

export const Success = Template.bind({})
Success.args = {
  backgroundColor: "#5cb85c",
  label: "Press Me",
  size: "md",
}

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: "#0275d8",
  label: "Press Me",
  size: "md",
}

export const Info = Template.bind({})
Info.args = {
  backgroundColor: "#5bc0de",
  label: "Press Me",
  size: "md",
}

export const Warning = Template.bind({})
Warning.args = {
  backgroundColor: "#ffcc00",
  label: "Press Me",
  size: "md",
}

export const Default = Template.bind({})
Default.args = {
  backgroundColor: "#aaaaaa",
  label: "Press Me",
  size: "md",
}

export const Outline = Template.bind({})
Outline.args = {
  backgroundColor: "white",
  label: "Press Me",
  size: "md",
  color: "black",
  border: "0.5px solid #aaaaaa",
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  backgroundColor: "#d9534f",
  label: "Press Me",
  size: "xs",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "#d9534f",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "#d9534f",
  label: "Press Me",
  size: "lg",
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  backgroundColor: "#d9534f",
  label: "Press Me",
  size: "xl",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "#d9534f",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
}
