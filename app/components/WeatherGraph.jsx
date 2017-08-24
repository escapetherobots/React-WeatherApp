import React from 'react';
import * as d3 from 'd3'; // get all d3 methods
import ReactFauxDOM from 'react-faux-dom';

class WeatherGraph extends React.Component {
  constructor(props){
    super(props)

    this.setYScale = this.setYScale.bind(this);
    this.setXScale = this.setXScale.bind(this);

    this.state = {
      //myData: [100,400,232,200,233,120,78,162,390,20,70,94,361,15,264,387,322],
      myData: this.props.data,
      xScale: '',
      yScale: ''
    }

  }

  static defaultProps = {
    width: 500,
    height: (500/2),
    chartBg: '#f4f4f4',
    barColor: 'steelBlue',
    barWidth: 12,
    barOffset: 2
  }

  setYScale() {
    let y = d3.scaleLinear()
      .domain( [0, d3.max(this.state.myData)] )
      .range( [0, this.props.height] );

    this.setState({
      yScale: y
    });
  }

  setXScale() {
    let x = d3.scaleBand()
      .domain( d3.range(0, this.state.myData.length) ) //domain based on items in array
      .range([0, this.props.width]);

    this.setState({
      xScale: x
    });
  }

  componentWillMount(){
    this.setYScale();
    this.setXScale();
  }

  render(){
    const chart = ReactFauxDOM.createElement('div');

    let tooltip = d3.select('body').append('div')
      .style('position', 'absolute')
      .style('background', '#cccccc')
      .style('opacity', '0')
      .style('padding', '10px')
      .style('border', '1px solid #000000')
      .style('border-radius', '5px');

    // pass in the chart component
    d3.select(chart).append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .style('background', this.props.chartBg)
      .selectAll('rect')
      .data(this.state.myData)
      .enter().append('rect')
        .style('fill', this.props.barColor)
        .attr('width', this.props.barWidth)
        .attr('height', (d) => {
          // attribute accessor with state?
          // console.log(d);
          // return d;

          // this prop on the state is now a function
          return this.state.yScale(d);

        })
        .attr('x', (d, i) => {
          //return i * (this.props.barWidth + this.props.barOffset);
          // attribute accessor with state?

          // this prop on the state is now a function
          return this.state.xScale(i);
        })
        .attr('y', (d) => {
          //return this.props.height - d;
          return this.props.height - this.state.yScale(d);
        })
        .on('mouseover', (d) => {
          tooltip.style('opacity', .6);
          tooltip.html(d)
            .style('left', (d3.event.pageX) + 'px')
            .style('top', (d3.event.pageY) + 'px');
        })
        .on('mouseout', (d) => {
          tooltip.style('opacity', 0);
        });

    return chart.toReact();

    // return (
    //   <div>
    //
    //     {this.renderList()}
    //
    //   </div>
    // );
  }
};

export default WeatherGraph;
