import React from 'react';

import Layout from '../components/Layout';

import '../styles/styles.css';
import utilStyles from '../styles/utilStyles.module.css';

const Homepage = () => {
  return (
    <Layout>
      <div className={utilStyles.wrapper}>
        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <h1>Hieeee</h1>
        </div>

        <div className={`${utilStyles.stripey} ${utilStyles.padded}`}>
          <div className={utilStyles.subtitle}>
            <h2>Welcome to my site!</h2>
          </div>
        </div>

        <div className={utilStyles.padded}>
          <p>Snackwave cliche gentrify squid. Shoreditch tumeric bicycle rights cold-pressed normcore cloud bread meditation unicorn next level chartreuse ugh. Adaptogen master cleanse direct trade helvetica leggings austin kale chips semiotics, chicharrones umami. Fingerstache YOLO tumeric lomo prism church-key. Semiotics brunch chia letterpress vaporware everyday carry kickstarter pitchfork plaid franzen YOLO organic tacos craft beer mumblecore.</p>

          <p>Gochujang biodiesel ennui man braid. Pok pok air plant vice wayfarers. Fingerstache PBR&B kale chips typewriter, vinyl disrupt succulents. Shaman asymmetrical poutine master cleanse swag health goth. Tbh distillery ennui cold-pressed dreamcatcher kale chips venmo truffaut tattooed disrupt neutra enamel pin YOLO mustache fixie. Adaptogen vinyl pop-up shoreditch kogi scenester offal etsy gluten-free 90's microdosing shaman. Live-edge migas bicycle rights intelligentsia succulents iceland.</p>
        </div>

      </div>
    </Layout>
  );
}

export default Homepage;
