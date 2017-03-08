import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({

  layout: hbs`<div class="container">
    <h2>{{title}}</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Last Updated</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {{#each model as |project|}}
          <tr>
            <td>{{project.id}}</td>
            <td>{{project.lastUpdated}}</td>
            <td>{{project.description}}</td>
            <td>{{project.projectType}}</td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  </div>`
});
