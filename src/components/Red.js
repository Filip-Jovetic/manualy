import React from "react";

export default class Red extends React.Component {

    render() {
        if(this.props.isVisible) {
          return (
            <div className='second'>

               <header className='flex justify-between items-center  w-65 mt-5 ml-8 mr-8 text-3xl'>
                <div className='flex items-center'>
                          <img src="./nesto1.png" alt="" className='w-16 mr-3 mb-3' />
                          <h1>Income tax calculator</h1>
                      </div>
                <button className='calculate text-2xl'>Download</button>
                </header>

                <section className='section '>
                    <div className=' net'>
                        <button className='calculate text-3xl'>${this.props.tab2}</button>
                        <h3 className='text-purple-300'>your net fortnighty worth income</h3>
                    </div>
                    <div className="tabela   ">
                    <h3 className='bord'>frequenct</h3>
                    <h3 className='bord'>Gross Income</h3>
                    <h3 className='bord'>Tax</h3>
                    <h3 className='bord'>Net Income</h3>

                    <h3 className='bord'>weekly</h3>
                    <p className='bord'>{this.props.tab}</p>
                    <p className='bord'> {this.props.tax1}</p>
                    <p className='bord'> {this.props.sum1}</p>

                    <h3 className='bord'>fortnighty</h3>
                    <p className='bord'>{this.props.tab2}</p>
                    <p className='bord'> {this.props.tax2}</p>
                    <p className='bord'> {this.props.sum2}</p>

                    <h3 className='bord'>monthly</h3>
                    <p className='bord'>{this.props.tab3}</p>
                    <p className='bord'> {this.props.tax3}</p>
                    <p className='bord'> {this.props.sum3}</p>

                    <h3 className='bord'>annually</h3>
                    <p className='bord'> {this.props.tab4}</p>
                    <p className='bord'> {this.props.tax4}</p>
                    <p className='bord'> {this.props.sum4}</p>
                </div>
                </section>
                <footer className='footer pl-5'>
                    <div className='flex justify-between ml-5 ml-5 items-center mt-5 mr-5'>
                        <h4 className='text-purple-300'>Compare lenders and get your finance</h4>
               <button className='calculate text-2xl ' onClick={this.props.change}>back to calculate</button>
                        </div>
                
                </footer>
               
            </div>
        )  
        }else{
            return (
              <template></template>  
            )
            
        }
        
    }
}