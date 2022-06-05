import React, { Fragment } from 'react';

import carrousel from './themes/images/carousel/1.png'

const index = () => {
    return (
    	<Fragment>
    		<div id="carouselBlk">
				<div id="myCarousel" className="carousel slide">
					<div className="carousel-inner">
					  <div className="item active">
					  <div className="container">
						<a href="/signUp"><img src={carrousel} alt="special offers"/></a>
						
					  </div>
					  </div>	
					  <div className="item active">
					  <div className="container">
						<a href="/signUp"><img src={carrousel} alt="special offers"/></a>
						
					  </div>
					  </div>	
					  <div className="item active">
					  <div className="container">
						<a href="/signUp"><img src={carrousel} alt="special offers"/></a>
						
					  </div>
					  </div>					  
					</div>
					<a className="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
					<a className="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
				  </div> 
			</div>
    	</Fragment>
        
    );
};



export default index;
