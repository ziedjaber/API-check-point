import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../JS/action/actions';
import { Link, useParams } from 'react-router-dom';
import logo from '../logo.png';
import { Card } from 'react-bootstrap';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.users[id-1]);
  useEffect(() => {
    dispatch(getPosts(id));
  }, [dispatch, id]);

  return (<>
  <div style={{display:"flex", justifyContent:"space-around"}}>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Address</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.address.street}</Card.Subtitle>
        <Card.Text>
        
    <p>{user.address.suite}</p>
      <p>{user.address.city}</p>
      <p>{user.address.zipcode}</p>
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
   <Card.Body>
      <Card.Title>Company</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.company.name}</Card.Subtitle>
        <Card.Text>
        
    <p>{user.company.catchPhrase}</p>
      <p>{user.company.bs}</p>
      
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
   
    
    <div>
     
      <Link to="/">Back to Home</Link>
      {posts.map((post, index) => (
        <div key={index}>
          
          <Card style={{ width: '100%' }}>
          <Card.Body>
          <Link to={`/post/${post.id}`}><Card.Title>{post.title}</Card.Title></Link>
        
        <Card.Text >
        {post.body}
        </Card.Text>
      
      </Card.Body>
    </Card>
        </div>
      ))}
    </div>
    </>
  );
};

export default Profile;