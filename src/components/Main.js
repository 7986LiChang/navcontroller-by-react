import 'normalize.css/normalize.css';
import 'styles/App.scss';

import React from 'react';

let liItemDatas = require('../data/liItemDatas.json');

//nav中的li组件
class NavItem extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}

	static defaultProps = {

	};

	点击某个item
	handleClick(e){
		//active该item
		
		this.props.itemActive();

		e.stopPropagation();
		e.preventDefault();
	}

	render(){
		let aClassName = (this.props.isactive.isActive) ? 'is-active' : 'is-noactive';

		return (
			<div>
				<li><a className={aClassName} onClick={this.handleClick}>{this.props.data.content}</a></li>
			</div>
		);
	}
}

export default class AppComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			navItemStateArr: [
				// {
				// 		isActive: false
				// }
			]
		};

	}

	static defaultProps = {

	};
	

	render() {
		let navItems = [];
		let navItemStateArr = this.state.navItemStateArr;

		liItemDatas.forEach( function(value, index){
			//初始化isActive
			if(!navItemStateArr[index]){
				navItemStateArr[index] = {
					isActive: false
				};
			}

			navItems.push(<NavItem key={index} data={value} isactive={navItemStateArr[index]} itemActive={this.itemActive(index)}/>);
		}.bind(this));

	    return (
	    	<div className="main">
	    		<div className="main-nav">
	    			<ul>
		    			{navItems}
	    			</ul>
	    		</div>
	    		
	    		<div className="main-content">
	    			<p>hihi<br/>hihih</p>
	    		</div>
	    	</div>
	    );
  	}

  	itemActive(index){
  		return function(){
			let navItemStateArr = this.state.navItemStateArr;

			navItemStateArr[index].isActive = true;
  			this.setState({
  				navItemStateArr: navItemStateArr
  			});
  		}.bind(this);
  	}

}

