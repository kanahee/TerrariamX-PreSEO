import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import '../App.css';


function prospectform() {
    return (
        <Container fluid className="container">
        
        <Form className="form">
          <Form.Field>
            <label >What do you expect to get out of SEO?</label>
            <input placeholder='Main Topics' />
          </Form.Field>
          <Form.Field>
            <label>Who is your ideal customer and what are their biggest pain points related to your product/service?</label>
            <input placeholder='Sub-topics' />
          </Form.Field>
          <Form.Field>
            <label>Who are your top 3 competitors?</label>
            <input placeholder='Enter your salary' />
          </Form.Field>
          <Form.Field>
            <label>What are the keywords your prospects should type into a search engine when they’re looking for your business?</label>
            <input placeholder='Enter your hobby' />
          </Form.Field>
          <Form.Field>
            <label>Have you ever had any SEO done on your website, or is this your first time?</label>
            <input placeholder='Enter your hobby' />
          </Form.Field>

          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
        </Container>
    );
  }
  
  export default prospectform;

