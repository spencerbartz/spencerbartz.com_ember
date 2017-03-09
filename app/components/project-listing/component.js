import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({

  layout: hbs`<div class="container">
    <h2>{{title}}</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as |project|}}
          <tr>
            <td>{{#link-to "projects.testpage"}}{{project.name}}{{/link-to}}</td>
            <td>{{project.description}}</td>
            <td>{{project.lastUpdated}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  </div>`
});
