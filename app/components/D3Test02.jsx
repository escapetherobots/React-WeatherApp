import React from 'react';
import * as d3 from 'd3'; // get all d3 methods
import ReactFauxDOM from 'react-faux-dom';

class D3Test02 extends React.Component {
  constructor(props){
    super(props)



    this.state = {
      //myData: [100,400,232,200,233,120,78,162,390,20,70,94,361,15,264,387,322],
      data: [5,10,15,20,25,11,24,18,7,9,14],
      dataText: ["marty", "bart", "doc", "lisa", "homer", "marge", "logan", "charles", "peter", "bobby", "maggie"],
      xScale: '',
      yScale: ''
    }

  }

  static defaultProps = {
    width: 300,
    height: 150,
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
    const chart = ReactFauxDOM.createElement('div');

    // let tooltip = d3.select('body').append('div')
    //   .style('position', 'absolute')
    //   .style('background', '#cccccc')
    //   .style('opacity', '0')
    //   .style('padding', '10px')
    //   .style('border', '1px solid #000000')
    //   .style('border-radius', '5px');

    const svg = d3.select(chart)
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
          .attr("fill", (d) => {
            let myColor = d * 20;
            if(d > 10) {
              return `rgb(10,200,200)`;
            } else {
              return `rgb(${myColor}, 0, 0)`;
            }
          });
          // .on('mouseover', (d) => {
          //   tooltip.style('opacity', 1);
          //   tooltip.html(d)
          //     .style('left', (d3.event.pageX) + 'px')
          //     .style('top', (d3.event.pageY) + 'px');
          // })
          // .on('mouseout', (d) => {
          //   tooltip.style('opacity', 0);
          // });

          svg.selectAll(".bartext")
            .data(this.state.dataText)
            .enter()
            .append("text")
            .attr("class", "bartext")
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("x", function(d,i) {
                return i * 29;
            })
            .attr("y", function(d,i) {
                return 140;
            })
            .text(function(d){
                 return d;
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

export default D3Test02;
