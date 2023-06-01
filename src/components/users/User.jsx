import { Card, Col } from 'react-bootstrap';
import { FaMale, FaFemale } from "react-icons/fa";


const User = ({user}) => {
    // {console.log(user)}
    return (        
        <Card className="h-100">
        <div className='position-absolute status-wrapper'>{user.status === 'active'?<div className="user-active-inactive active rounded-circle"></div>:<div className="user-active-inactive inactive rounded-circle"></div>}</div>
        <Card.Body>
        <Card.Title> { user.name}</Card.Title>
        <Card.Text>
        {user.email}
        </Card.Text>
        <Card.Text>
        {user.gender === 'female'?<><FaFemale /> Female</>:<><FaMale />Male</>}
        </Card.Text>
        </Card.Body>
        </Card>                
        )
    }
    
    export default User