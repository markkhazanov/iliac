import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/login';


class LandingPage extends Component {
	componentWillMount() {
		const script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/scrollreveal.js/3.2.0/scrollreveal.min.js";
    script.async = true;

    document.body.appendChild(script);

	}

	componentDidMount(){
		window.sr = ScrollReveal();
    sr.reveal('p', {duration: 3000});
	}

	render(){
		return(
			<div className="landingPage">

				<div id="info" className="row">
					<div id="logo">{'{iliac}'}</div>

					<p>
						We’re in the business of breaking down barriers 
						within the adult entertainment industry. Connect 
						with directors, production studios and other performers 
						so you can focus on creating content, not planning it.
					</p>

				</div>

				<div id="mockups" className="row">
					<img src="../../../style/img/3-screens.png"/>
					<p> We break down barriers and create greater 
					efficiencies within the industry.</p>
				</div>


				<div id="education" className="row">
					<p>
						Not in the industry? We provide education and 
						training tools to help you decide whether entering 
						is right for you. Our education suite was created 
						with the help of APAC, the FSC, and Kink.com so you 
						can be sure the information your getting is accurate 
						and informative.
					</p>
				</div>

				<div id="features" className="row"> 
					<div id="box1" className="feature col-md-4">
						<p>
							Creating your own content? You can use our 
							projects feature to book talent directly, 
							publicize open positions, and sync the 
							details of a shoot to everyone’s account.
						</p>
					</div>

					<div id="box2" className="feature col-md-4">
						<p>
							When there’s work available we’ll see if 
							you match up based on your yes/no list and 
							personal characteristics. The posting will 
							appear on your job feed and so you’ll always 
							have a shoot waiting for you.
						</p>
					</div>
					
					<div id="box3" className="feature col-md-4">
						<p>
							We work with PayPal so you can transfer payments 
							and focus on the more important things.
						</p>
					</div>
				</div>



				<div id="safety" className="row">
					<h2>How do we keep you safe?</h2>
					<div className="col-md-3">
						<p>
							We will never force you to input information
							 that you are uncomfortable sharing. Even your 
							 email is optional. Just sign up with Twitter and 
							 we’ll take care of the rest.
						</p>
					</div>
					
					<div className="col-md-3">
						<p>
							If there’s ever a problem on or off set you 
							can file an anonymous claim that will be forwarded 
							to a board consisting of APAC, FSC, and Kink.com members. 
							Our mission revolves around keeping you safe and that 
							means making sure your voice is heard.
						</p>
					</div>
					
					<div className="col-md-3">
						<p>
							We provide you with studio terms and conditions 
							before you step on set. Greater transparency means 
							performers can make decisions that are right for them.
							No casting couch without your request!
						</p>
					</div>
					
					<div className="col-md-3">
						<p>
							Our resources information will guide you in 
							finding doctors, lawyers, and even financial 
							services that will respect your rights as a performer. 
							No more closed bank accounts or creepy gynecologists.
						</p>
					</div>
				</div>

				<Login />
				<hr/>
				<div id="l-footer">Footer</div>
			</div>
		);
	}

}

export default LandingPage;
