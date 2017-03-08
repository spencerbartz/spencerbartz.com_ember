  import DS from 'ember-data';

export default DS.Model.extend({
  lastUpdated: DS.attr('date'),
  description: DS.attr('string'),
  projectType: DS.attr('string')
});
