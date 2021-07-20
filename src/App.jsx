import React, { useState } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';
//import Seoform from './components/seoform.js';
import { Button, Form, Header } from 'semantic-ui-react';



function App () {

  const [company, setCompany] = useState('');
  const [expectation, setExpectation] = useState('');
	const [customer, setCustomer] = useState('');
	const [points, setPoints] = useState('');
	const [competitors, setCompetitors] = useState('');
  const [keywords, setKeywords] = useState('');
	const [maintopics, setMaintopics] = useState('');
	const [subtopics, setSubtopics] = useState('');
	const [markets, setMarkets] = useState('');
  const [past, setPast] = useState('');

  

  const handleSubmit = (e) => {
		e.preventDefault();
    

		const objt = { company, expectation, customer, points, competitors, keywords, maintopics, subtopics, markets, past };

		axios
			.post(
				'https://sheet.best/api/sheets/894b2ff2-3432-471b-8bf1-93857606b367',
				objt
			)
			.then((response) => {
				console.log(response);
			});
      
	};

  return (
      <Container fluid className="container">
              
      <Grid>
        
        <Grid.Row>
          <Grid.Column>
            <Image centered src='https://terrariamexico.com/wp-content/uploads/2021/02/terrariamxlogo-green.png' width="250px" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Container fluid className="container">
              <Header as='h2'>Pre-SEO Analysis.</Header>
                <p>- The process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines.</p>
                <p>- Getting higher rankings on search engines which in turn creates a larger target audience.</p>
                <Form className="form">

                  <Form.Field>
                    <label>What is your company's name?</label>
                    <input placeholder='' onChange={(e) => setCompany(e.target.value)} />
                  </Form.Field>

                  <Form.Field>
                    <label>What do you expect to get out of SEO?</label>
                    <textarea style={{height: '50px'}} placeholder='' onChange={(e) => setExpectation(e.target.value)} />
                  </Form.Field>

                  <Form.Field>
                    <label>Who is your ideal customer?</label>
                    <textarea style={{height: '50px'}} placeholder='' onChange={(e) => setCustomer(e.target.value)} />
                  </Form.Field>

                  <Form.Field>
                    <label>What are your customer's biggest pain points related to your type of product/service?</label>
                    <textarea style={{height: '50px'}} placeholder='' onChange={(e) => setPoints(e.target.value)} />
                  </Form.Field>
        
                  <Form.Field>
                    <label>Who are your top 3 competitors?</label>
                    <textarea style={{height: '20px'}} placeholder='' onChange={(e) => setCompetitors(e.target.value)} />
                  </Form.Field>
        
                  <Form.Field>
                    <label>What are the keywords your prospects should type into a search engine when they’re looking for your business?</label>
                    <input placeholder='' onChange={(e) => setKeywords(e.target.value)} />
                  </Form.Field>

                  <Form.Field>
                    <label >What are the 3 Main Topics of your brand/website?</label>
                    <input placeholder='' onChange={(e) => setMaintopics(e.target.value)} />
                  </Form.Field>
        
                  <Form.Field>
                    <label>What are some of the Sub-topics?</label>
                    <input placeholder='' onChange={(e) => setSubtopics(e.target.value)} />
                  </Form.Field>

                  <Form.Field>
                    <label>What markets(locations) do you want to cover?</label>
                    <input placeholder='' onChange={(e) => setMarkets(e.target.value)} />
                  </Form.Field>
        
                  <Form.Field>
                    <label>Have you ever had any SEO done on your website, or is this your first time?</label>
                    <input placeholder='' onChange={(e) => setPast(e.target.value)} />
                  </Form.Field>
        
                  <Button color="blue" type='submit' onClick={handleSubmit}>Submit</Button>
                </Form>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>

</Container>
    );

}

export default App;
