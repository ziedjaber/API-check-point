import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../JS/action/actions';
import { Link ,useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
const Post=()=>{
  const { id } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);
    
   
    useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);
    return(
        <div>
          <Link to="/">Back to Home</Link>
 <h1>Comments List</h1>
      {comments.map((comment,index) => (
        <div key={index}>
        
        <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
        <Card.Text>
        {comment.body}
        </Card.Text>
     
      </Card.Body>
    </Card>
        </div>
      ))}
        </div>

    );
}
export default Post;