import React from 'react';
import Red from './components/Red';
import Black from './components/Black';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            code: 1,
            drugi: 2,
            treci: 1,
            cetvrti: 1,
            tax1: 0,
            tax2: 0,
            tax3: 0,
            tax4: 0,
            sum1: 0,
            sum2: 0,
            sum3: 0,
            sum4: 0,
        }
        this.change = this.change.bind(this)
        this.ispis = this.ispis.bind(this)
        this.proba = this.proba.bind(this)

        this.firstPage = this.firstPage.bind(this)
        this.secondPage = this.secondPage.bind(this)
        
    }
    change() {
        this.setState({isVisible: !this.state.isVisible})
        console.log("nes")
    }
    firstPage() {
        this.setState({
            isVisible: false
        })
    }
    secondPage() {
        this.setState({
            isVisible: true
        })
    }
    ispis(e) {
  this.setState({code: Number(e)/2,
drugi: Number(e)/2*2,
treci: Number(e)/2*4,
cetvrti: Number(e)/2*4*12,
tax1: Number(e)/2 *0.15,
tax2: Number(e)/2*2 *0.15,
tax3: Number(e)/2*4 *0.15,
tax4: Number(e)/2*4*12 *0.15,
sum1: Number(e)/2 *0.85,
sum2: Number(e)/2*2 *0.85,
sum3: Number(e)/2*4 *0.85,
sum4: Number(e)/2*4*12 *0.85,
})
}
proba() {
    this.setState({
        code: Number(this.state.code)*33
    })
}
    
    render() {
        return(
            <div className="app">
                <Black change={this.change} ispis={this.ispis} tab={this.state.code} tab2={this.state.drugi} duplo={this.duplo} />
                
                <Red change={this.change} isVisible={this.state.isVisible} tab={this.state.code} tab2={this.state.drugi} tab3={this.state.treci} tab4={this.state.cetvrti}
                tax1={this.state.tax1} tax2={this.state.tax2} tax3={this.state.tax3} tax4={this.state.tax4} sum1={this.state.sum1} sum2={this.state.sum2} sum3={this.state.sum3} sum4={this.state.sum4}/> 
                <button className='firstBtn' onClick={this.firstPage}>first page</button>
                <button className='secondBtn ' onClick={this.secondPage}>second page</button>
                
                

            </div>
        )
    }
}