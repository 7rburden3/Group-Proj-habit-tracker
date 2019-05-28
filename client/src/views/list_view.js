const PubSub = require('../helpers/pub_sub.js');
const EntryView = require('./entry_view.js');
const ChartIntakeView = require('./charts/chart_intake_view.js')
const ChartAllowanceView = require('./charts/chart_allowance_view.js')
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);


const ListView = function (element) {
  this.element = element;
  this.calorieAllowance = 0;
}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('GoalModel:goal', (event)=> {
    this.calorieAllowance = event.detail[0].goal
  })
  PubSub.subscribe("FoodModel:all-data", (event) => {
    const allData = event.detail
    this.populate(allData)
    this.makeIntakeChart(allData)
    this.makeAllowanceChart(allData)
  })
};

ListView.prototype.populate = function (allData) {
  this.element.innerHTML = ''
  allData.forEach( (data, index) => {
    const tile = new EntryView(this.element)
    tile.render(data, index)
  })
  this.makeIntakeChart(allData)

};

ListView.prototype.makeIntakeChart = function (allData) {
  //take allData from bind events and render chart in ChartIntakeViews
  const chartData = []
  allData.forEach( (data) => {
     chartData.push({name: data.foodName, y:parseInt(data.calories)})


  })
  new ChartIntakeView(chartData)
};

ListView.prototype.makeAllowanceChart = function (allData) {
  const allowanceData = []
  let calorieCount = 0
  allData.forEach( (data) => {
    calorieCount += data.calories;
  })
  allowanceData.push({name:"Calories left", y:this.calorieAllowance - calorieCount});
  allowanceData.push({name:"Calories consumed", y:calorieCount})
  new ChartAllowanceView(allowanceData);

};

module.exports = ListView;
