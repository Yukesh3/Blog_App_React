import {Link} from 'react-router-dom'

const Navbar=(props)=>{

    return(<>
    <div className='The'>THE</div>
    <Link to='/'><div className='Siren' style={props.style}>Siren</div></Link>
    
    <div className='navbar' style={props.style}>

       <Link to="/"><button>Home</button></Link>
       <Link to='kollywood'><button>Kollywood</button></Link>
       <Link to='hollywood'><button>Hollywood</button></Link>
       <Link to='technology'><button>Technology</button></Link>
       <Link to='food'><button>Food</button></Link> 
       <Link to='fitness'><button>Fitness</button></Link>
     
    </div>
    </>)
}

export default Navbar