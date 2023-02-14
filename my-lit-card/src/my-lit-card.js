import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyLitCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      .button{
        padding: 5px;
        color: blue;
     }
     
     .button:hover{
       background-color: orange;
     }
     
     .button:focus {
       background-color: orange; 
     }
     
     
     .all{
       border-width: 5px;
       width: 400px;
       max-width: 500px;
       margin: auto;
       margin-top: 10px;
     }
     
     .title{
       text-align: center;
       font-size: 40px;
     }
     
     .name{
       text-align: center;
     }
     .content{
        text-align: center;
     }
     img {
       width: 300px;
     }
     
     p {
     /*   text-align: left;  */
       text-indent: 5%;
       font-size: 18px;
     }
     
     .detailsButton {
       margin: 12px;
       position: center; 
       color: blue;
     }
     
       @media (min-width: 500px) and (max-width: 800px) {
         
         .detailsButton {
           display: none;
         }
     }
     
     @media (max-width: 500px) {
       .all{
         transform: scale(0.8);
       }
     }
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <button id="duplicate" class="button">Duplicate</button>

    <button id="toggleBackGroundColor" class="button">Change Background Color</button>
    
    <button id="changeTitle" class="button">Change Title</button>
    
    <button id="deleteButton" class="button">Delete</button>
    
    <section class="card">
      <header class="name">
        <h1 id="title" class="title"> Coffee </h1>
        </header>
      <p>
        "Good morning, I like coffeeeeee" </p>
      <section class="content">
        <img src="https://thumbor.bigedition.com/husky-good-morning-meme/pH3EqF8t0ug2q1rb8xQUIfy_TIM=/800x739/filters:format(webp):quality(80)/granite-web-prod/48/f0/48f096f394fe421fa43128fa65a1f2a1.jpeg"
    alt="https://www.workandmoney.com/s/good-morning-memes-19ec5c5d8885431a" width=200px>
        <button id = "detailBtn" class="detailsButton">Detail </button>
    </section>
    </section>
    `;
  }
}

customElements.define('my-lit-card', MyLitCard);