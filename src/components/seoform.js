import React from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import '../App.css';


function seoform() {
    return (
        <Container fluid className="container">
        <Header as='h2'>Pre-SEO Analysis</Header>
        <Form className="form">
          
          <Form.Field>
            <label>What do you expect to get out of SEO?</label>
            <textarea style={{height: '50px'}} placeholder='' />
          </Form.Field>
          
          <Form.Field>
            <label>Who is your ideal customer?</label>
            <textarea style={{height: '50px'}} placeholder='' />
          </Form.Field>

          <Form.Field>
            <label>What are your customer's biggest pain points related to your type of product/service?</label>
            <input placeholder='' />
          </Form.Field>
          
          <Form.Field>
            <label>Who are your top 3 competitors?</label>
            <input placeholder='' />
          </Form.Field>
          
          <Form.Field>
            <label>What are the keywords your prospects should type into a search engine when they’re looking for your business?</label>
            <input placeholder='' />
          </Form.Field>

          <Form.Field>
            <label >What are the 3 Main Topics of your brand/website?</label>
            <input placeholder='' />
          </Form.Field>
          
          <Form.Field>
            <label>What are some of the Sub-topics?</label>
            <input placeholder='' />
          </Form.Field>

          <Form.Field>
            <label>What markets(locations) do you want to cover?</label>
            <input placeholder='' />
          </Form.Field>
          
          <Form.Field>
            <label>Have you ever had any SEO done on your website, or is this your first time?</label>
            <input placeholder='' />
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
        </Container>
    );
  }
  
  export default seoform;

