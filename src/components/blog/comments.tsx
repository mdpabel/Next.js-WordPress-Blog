import { fetchComments } from '@/lib/wordpress/comments';
import CommentItem from './comment-item';
import CommentForm from './comment-form';

type Props = {
  postId: number;
};

const Comments = async ({ postId }: Props) => {
  const comments = await fetchComments(postId);

  return (
    <div>
      {/* Main Comment Form */}
      <div className='mb-10'>
        <h3 className='mb-4 font-semibold text-lg'>Leave a Comment</h3>
        <CommentForm postId={postId} parentId={0} alwaysVisible={true} />
      </div>

      {/* Comments Section */}
      <h3 className='mb-4 font-semibold text-lg'>
        Comments{' '}
        <span className='font-semibold text-teal-600'>
          ({comments.length ?? 0})
        </span>
      </h3>

      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul className='space-y-4'>
          {comments
            .filter((comment) => comment.parent === 0) // Only top-level comments
            .map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                comments={comments}
                postId={postId}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
