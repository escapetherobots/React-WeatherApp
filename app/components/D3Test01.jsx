import React from 'react';
import * as d3 from 'd3'; // get all d3 methods
import ReactFauxDOM from 'react-faux-dom';

class D3Test01 extends React.Component {
  constructor(props){
    super(props)



    this.state = {
      //myData: [100,400,232,200,233,120,78,162,390,20,70,94,361,15,264,387,322],
      data: [5,10,15,20,25],
      xScale: '',
      yScale: ''
    }

  }

  static defaultProps = {
    width: 500,
    height: 500,
    padding: 2,
    chartBg: "#c4c4c4",
  }

  setYScale() {
    // console.log('yScale');
    // let y = d3.scaleLinear()
    //   .domain( [0, d3.max(this.state.data)] )
    //   .range( [0, this.props.height] );
    //
    // this.setState({
    //   yScale: y
    // });
  }

  setXScale() {
    // console.log('xScale');
    // console.log('myDATA length', this.state.data.length);
    // let x = d3.scaleBand()
    //   .domain( d3.range(0, this.state.data.length) ) //domain based on items in array
    //   .range([0, this.props.width]);
    //
    // this.setState({
    //   xScale: x
    // });
  }

  componentWillMount(){
    // modify the scales before the component mounts
    // this.setYScale();
    // this.setXScale();
  }

  render(){
    console.log(this.props.chartBg);
    const chart = ReactFauxDOM.createElement('div');

    // let tooltip = d3.select('body').append('div')
    //   .style('position', 'absolute')
    //   .style('background', '#cccccc')
    //   .style('opacity', '0')
    //   .style('padding', '10px')
    //   .style('border', '1px solid #000000')
    //   .style('border-radius', '5px');

    // pass in the chart component
    // d3.select(chart).append('svg')
    //   .append("rect")
    //     .attr("width", 50)
    //     .attr("height", 200)
    //     .style("fill", "orange");

    // d3.select(chart)
    //   .append('svg')
    //     .attr("width", 300)
    //     .attr("height", 300)
    //     .style("border", "1px solid green")
    //   .append('circle')
    //     .attr("cx", 25)
    //     .attr("cy", 25)
    //     .attr("r", 25)
    //     .style("fill", "orange")
    //   .append("rect")
    //     .attr("x", 100)
    //     .attr("y", 100)
    //     .attr("width", 50)
    //     .attr("height", 50)
    //     .style("fill", "red")
    //   .append("text")
    //       .text("easy peasy");

    let svg = d3.select(chart)
      .append("svg")
        .attr("width", this.props.width)
        .attr("height", this.props.height)
        .style("border", "1px solid" + this.props.chartBg);

    svg.selectAll("rect")
      .data(this.state.data)
      .enter()
        .append("rect")
          .attr("x", (d, i) => {
            // d =  data, i = iterator;
            // return i * 21; // 21 is space between columns
            return i * (this.props.width / this.state.data.length);
          })
          .attr("y", (d) => {
            return this.props.height - (d * 4);
          })
          .attr("width", this.props.width / this.state.data.length - this.props.padding)
          .attr("height", (d) => {
            return d * 4;
          })




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

export default D3Test01;
