import React from "react";
import Footer from "./Foorer";

export default class Black extends React.Component  {

constructor(props) {
    super(props)
    this.state = {
        
    }
    
}

    render() {
        return(
            <div className="first" onClick={this.promena}>
                <div className='flex flex-col text-3xl core'>
                    <div className='flex items-center'>
                        <img src="./nesto1.png" alt="" className='w-16 mr-3 mb-3' />
                        <h1>Income tax calculator</h1>
                    </div>
                    
                <h2>What is your total income?</h2>
                <Footer kreiraj={ this.props.ispis}  />
                <h1 className='mt-4'>Please chose the income type</h1>
                <div>
                    <button className=''></button>
                    <button className=''></button>
                </div>
                <button className="calculate" onClick={this.props.change}>CALCULATE</button>
                
                
                
                </div>
                
                
                
            </div>
        )
    }
}