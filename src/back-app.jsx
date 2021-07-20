import React, { Component, Suspense } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import './App.css';
//import Seoform from './components/seoform.js';
import {useTranslation, withTranslation} from "react-i18next";
import { Button, Form, Header } from 'semantic-ui-react';


function HeaderComponent()
{
  const [t, i18n] = useTranslation('common');

  
    return <Container fluid className="container">
              
        <Grid>
          
          <Grid.Row>
            <div>
              <button onClick={() => i18n.changeLanguage('es')}>es</button>
              <button onClick={() => i18n.changeLanguage('en')}>en</button>
            </div>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column>
              <Image centered src='https://terrariamexico.com/wp-content/uploads/2021/02/terrariamxlogo-green.png' width="250px" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Container fluid className="container">
                <Header as='h2'>Pre-SEO Analysis</Header>
                  <Form className="form">
                    <Form.Field>
                      <label>{t('welcome.label')}</label>
                      <textarea style={{height: '50px'}} placeholder='' value = {expectation} onChange={this.changeHandler} />
                    </Form.Field>

                    <Form.Field>
                      <label>{t('welcome.customer')}</label>
                      <textarea style={{height: '50px'}} placeholder='' value = {customer} onChange={this.changeHandler} />
                    </Form.Field>

                    <Form.Field>
                      <label>{t('welcome.points')}</label>
                      <input placeholder='' value = {points} onChange={this.changeHandler} />
                    </Form.Field>
          
                    <Form.Field>
                      <label>Who are your top 3 competitors?</label>
                      <input placeholder='' value = {competitors} onChange={this.changeHandler} />
                    </Form.Field>
          
                    <Form.Field>
                      <label>What are the keywords your prospects should type into a search engine when they’re looking for your business?</label>
                      <input placeholder='' value = {keywords} onChange={this.changeHandler} />
                    </Form.Field>

                    <Form.Field>
                      <label >What are the 3 Main Topics of your brand/website?</label>
                      <input placeholder='' value = {maintopics} onChange={this.changeHandler} />
                    </Form.Field>
          
                    <Form.Field>
                      <label>What are some of the Sub-topics?</label>
                      <input placeholder='' value = {subtopics} onChange={this.changeHandler} />
                    </Form.Field>

                    <Form.Field>
                      <label>What markets(locations) do you want to cover?</label>
                      <input placeholder='' value = {markets} onChange={this.changeHandler} />
                    </Form.Field>
          
                    <Form.Field>
                      <label>Have you ever had any SEO done on your website, or is this your first time?</label>
                      <input placeholder='' value = {past} onChange={this.changeHandler} />
                    </Form.Field>
          
                    <Button color="blue" type='submit'>Submit</Button>
                  </Form>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Container>
  }

class HighOrderComponent extends Component {
  render() {
      const { t } = this.props;

      return (
          <h1>{t('welcome.title')}</h1>
      )
  }
}
const HighOrderComponentTranslated = withTranslation('common')(HighOrderComponent)

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       expectation: '',
       customer: '',
       points: '',
       competitors: '',
       keywords: '',
       maintopics: '',
       subtopics: '',
       markets: '',
       past: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    const { expectation, customer, points, competitors, keywords, maintopics, subtopics, markets, past } = this.state;  
    return (
      <Suspense fallback="loading">
           <HeaderComponent />    
      </Suspense>
    );
  }
}
