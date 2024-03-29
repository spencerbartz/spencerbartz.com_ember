import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get("store").query("project", { filter: { project_type: "front_end" } }).
      then((projects) => {
        return projects;
      });
  }
});
