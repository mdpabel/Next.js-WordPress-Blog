'use client';

import { saveComment } from '@/actions/save-comment';
import { cn } from '@/lib/utils';
import React, { useState, useTransition, useActionState } from 'react';
import Spinner from '../common/spinner';

type CommentFormProps = {
  postId: number; // The ID of the post to which the comment belongs
  parentId?: number; // Optional parent comment ID for replies
  alwaysVisible?: boolean; // If true, the form is always visible
};

const CommentForm = ({
  postId,
  parentId,
  alwaysVisible = false,
}: CommentFormProps) => {
  const [pending, startTransition] = useTransition();
  const [state, action] = useActionState(saveComment, {
    success: false,
    message: '',
    data: undefined,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(alwaysVisible);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const data = new FormData();

    // Add data to FormData
    data.append('postId', String(postId));
    data.append('parentId', parentId ? String(parentId) : '0');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('website', formData.website || '');
    data.append('comment', formData.comment);

    startTransition(() => action(data)); // Call the action with FormData
  };

  return (
    <div className='mt-4'>
      {/* Toggle button only if the form is not always visible */}
      {!alwaysVisible && (
        <button
          className='font-semibold text-sm text-teal-600 hover:text-teal-800 transition'
          onClick={() => setIsFormVisible((prev) => !prev)}>
          {isFormVisible ? 'Cancel' : 'Reply'}
        </button>
      )}

      {/* Show the form if always visible or toggled */}
      {isFormVisible && (
        <form action={handleSubmit} className='space-y-4 mt-4'>
          <textarea
            name='comment'
            placeholder='Write your comment...'
            value={formData.comment}
            onChange={handleInputChange}
            rows={3}
            className='p-2 border rounded focus:ring focus:ring-blue-200 w-full'
            required
          />

          <div className='flex lg:flex-row flex-col lg:justify-between gap-4'>
            <input
              type='text'
              name='name'
              placeholder='Name *'
              value={formData.name}
              onChange={handleInputChange}
              className='p-2 border rounded focus:ring focus:ring-blue-200 w-full'
              required
            />

            <input
              type='email'
              name='email'
              placeholder='Email *'
              value={formData.email}
              onChange={handleInputChange}
              className='p-2 border rounded focus:ring focus:ring-blue-200 w-full'
              required
            />

            <input
              type='url'
              name='website'
              placeholder='Website (Optional)'
              value={formData.website}
              onChange={handleInputChange}
              className='p-2 border rounded focus:ring focus:ring-blue-200 w-full'
            />
          </div>

          <div className='flex lg:flex-row flex-col lg:items-center gap-5'>
            <button
              type='submit'
              className='bg-teal-600 hover:bg-teal-700 mt-2 py-1.5 rounded w-36 text-white transition'
              disabled={pending}>
              {pending ? <Spinner /> : parentId ? 'Post Reply' : 'Post Comment'}
            </button>

            {state.message && (
              <p
                className={cn(
                  state.success && 'text-teal-600',
                  !state.success && 'text-red-600',
                )}>
                {state.message}
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default CommentForm;
