import 'normalize.css/normalize.css';
import 'styles/App.scss';

import React from 'react';
import ReactDOM from 'react-dom';

//传入navbar\content中的数据
let liItemDatas = require('../data/liItemDatas.json');
let contentDatas = require('../data/contentDatas.json');

//nav中的li组件
class NavClass extends React.Component{
	constructor(props){
		super(props);
	}

	static defaultProps = {};

	render(){
		return (
			<ul>
				{
					liItemDatas.map( (value, index) => {
						return (
							<li><a key={index} onClick={this.props.clk.bind(this, index)} className={this.props.activeindex === index ? 'is-active' : ''}>{value.name}</a></li>
						);
					})
				}
			</ul>
		);
	}
}

class ContentClass extends React.Component{
	constructor(props){
		super(props);
	}
	static defaultProps = {};

	render(){
		return (
			<h2>{contentDatas[this.props.activeindex].content}</h2>
		);
		
	}
}


export default class TabComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			activeIndex: 0     //父组件管理点击item的索引
		};

		this.handleClick = this.handleClick.bind(this);
	}

	static defaultProps = {

	};
	
	handleClick(index){
		this.setState({
			activeIndex: index
		});
	}

	render() {
	    return (
	    	<div className="main">
	    		<div className="main-nav">
	    			<NavClass clk={this.handleClick} activeindex={this.state.activeIndex}/>
	    		</div>
	    		
	    		<div className="main-content">
	    			<ContentClass activeindex={this.state.activeIndex}/>
	    		</div>
	    	</div>
	    );
  	}
}
ReactDOM.render(<TabComponent/>, document.getElementById('app'));
