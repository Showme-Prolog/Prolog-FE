import React, { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, UserDetailPage, UserCreatePage, WriteQuestionPage } from '@pages';
import DefaultTemplate from '../templates/DefaultTemplate';

const Router = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/user/create" component={UserCreatePage} exact />
          <Route path="/test" component={WriteQuestionPage} exact />
          <Route path="/user/:id" component={UserDetailPage} exact />
        </Switch>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
