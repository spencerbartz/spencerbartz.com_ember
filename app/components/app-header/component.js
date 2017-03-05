import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Spencer Bartz Portfolio Website</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active">{{link-to "Home" "/"}}</li>
          <li>{{link-to "Web Applications" "projects.web-applications"}}</li>
          <li>{{link-to "Desktop Applications" "projects.desktop-applications"}}</li>
          <li>{{link-to "Tools and Libraries" "projects.tools-and-libraries"}}</li>
        </ul>
      </div>
    </nav>
    `
});
