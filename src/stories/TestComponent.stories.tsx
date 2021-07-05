/**
 * Storybook
 * @see https://storybook.js.org/docs/react/get-started/introduction
 */
import { Story, Meta } from "@storybook/react";

/**
 * Component Imports
 */
import { TestComponent, TestComponentProps } from "../TestComponent";

export default {
  title: "Atoms/LoginPage",
  component: TestComponent
} as Meta;

/**
 * Defines the Template
 * @returns
 */
const Template: Story<TestComponentProps> = (args) => (
  <TestComponent {...args} />
);

/**
 * Default case
 */
export const Default = Template.bind({});

/**
 * Put your component props in here
 *
 * Example:
 * Default.args = {
 *  text: "Hello World"
 * }
 *
 * Assuming that the component expects a prop text that is a string.
 */
Default.args = {};
