import React, { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  MainPage,
  UserDetailPage,
  UserCreatePage,
  WriteQuestionPage,
  WriteQuestionPageDetail,
} from '@pages';
import DefaultTemplate from '../templates/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/user/create" component={UserCreatePage} exact />
          <Route path="/question" component={WriteQuestionPage} exact />
          <Route path="/questiondetail" component={WriteQuestionPageDetail} exact />
          <Route path="/user/:id" component={UserDetailPage} exact />
          <Route path="*">
            <div>404 Not Found</div>
          </Route>
        </Switch>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
