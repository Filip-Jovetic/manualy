

export default class Footer extends React.Component {

constructor(props) {
    super(props)

    this.state = {
        content: ""
    }
   
    this.ispis = this.ispis.bind(this)
     
}
ispis(e) {
    this.setState({content: e.target.value})
}


render() {
    return(

        <footer>
            <div className='w-96'>
                <input className='inputStyle ' type="text" value={this.state.content} onChange={this.ispis}  placeholder="income"/>
                </div>
            
            
            <span className='income mr-5 ' onClick={() => this.props.kreiraj(this.state.content, this.state.content2)}>GROSS INCOME </span>
            <span className='income'>NET INCOME</span>
            
        </footer>
    )
}
}