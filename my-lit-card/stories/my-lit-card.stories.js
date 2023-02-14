import { html } from 'lit';
import '../src/my-lit-card.js';

export default {
  title: 'MyLitCard',
  component: 'my-lit-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <my-lit-card
      style="--my-lit-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </my-lit-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
