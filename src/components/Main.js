require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//nav中的li组件
export class navItem extends React.Component{
	constructor(props){
		super(props);
	}

	static defaultProps = {

	};

	render(){
		return (
			<div>
				<li></li>
			</div>
		);
	}
}

export default class AppComponent extends React.Component {
	constructor(props){
		super(props);
	}

	static defaultProps = {

	};

	render() {
		var navItems = [];

	    return (
	    	<div className="main">
	    		<div className="main-nav">
	    			<ul>
		    			{navItems}
	    			</ul>
	    		</div>
	    		
	    		<div className="main-content">

	    		</div>
	    	</div>
	    );
  	}
}

