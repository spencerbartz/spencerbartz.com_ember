import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('/');

  this.route('projects', function() {
    this.route('web-applications');
    this.route('desktop-applications');
    this.route('tools-and-libraries');
    this.route('full-stack');
  });
});

export default Router;
