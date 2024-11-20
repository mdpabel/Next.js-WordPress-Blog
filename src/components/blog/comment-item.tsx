'use client';
import Link from 'next/link';
import { WP_REST_API_Comment, WP_REST_API_Comments } from 'wp-types';
import CommentForm from './comment-form';
import { formatDate } from '@/lib/utils';

type CommentItemProps = {
  comment: WP_REST_API_Comment;
  comments: WP_REST_API_Comments;
  postId: number;
};

const CommentItem = ({ comment, comments, postId }: CommentItemProps) => {
  const childComments = comments.filter((c) => c.parent === comment.id);

  return (
    <li className='space-y-4'>
      <div className='flex items-center gap-5'>
        <img
          src={comment.author_avatar_urls?.[48]}
          alt={comment.author_name}
          className='rounded-full'
        />
        <div>
          <h4 className='font-semibold text-neutral-900 dark:text-white'>
            <Link target='_blank' href={comment.author_url}>
              {comment.author_name}
            </Link>
          </h4>
          <h5 className='text-neutral-700 text-sm dark:text-white'>
            {formatDate(comment.date, true)}
          </h5>
        </div>
      </div>

      <div>
        <p
          className='pb-10 border-b border-b-neutral-400 max-w-full dark:prose-invert prose'
          dangerouslySetInnerHTML={{
            __html: comment.content.rendered!,
          }}></p>

        <CommentForm postId={postId} parentId={comment.id} />
      </div>

      <hr />

      {childComments.map((childComment) => (
        <ul className='space-y-4 mt-4 pl-6'>
          <CommentItem
            key={childComment.id}
            comment={childComment}
            comments={comments}
            postId={postId}
          />
        </ul>
      ))}
    </li>
  );
};

export default CommentItem;
