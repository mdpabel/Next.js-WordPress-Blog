'use client';

import { saveComment } from '@/actions/save-comment';
import { cn } from '@/lib/utils';
import React, { act, useState, useTransition } from 'react';
import { useFormState } from 'react-dom';

type CommentFormProps = {
  postId: number; // The ID of the post to which the comment belongs
  parentId?: number; // Optional parent comment ID for replies
};

const CommentForm = ({ postId, parentId }: CommentFormProps) => {
  const [pending, startTransition] = useTransition();
  const [state, action] = useFormState(saveComment, {
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

  const [showForm, setShowForm] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='mt-4'>
      <button
        className='font-semibold text-sm text-teal-600 hover:text-teal-800 transition'
        onClick={() => setShowForm((prev) => !prev)}>
        {showForm ? 'Cancel' : 'Reply'}
      </button>

      {showForm && (
        <form
          action={() => {
            const data = new FormData();

            // Add data to FormData
            data.append('postId', String(postId));
            data.append('parentId', parentId ? String(parentId) : '0');
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('website', formData.website || '');
            data.append('comment', formData.comment);

            startTransition(() => action(data)); // Call the action with FormData
          }}
          className='space-y-4 mt-4'>
          {/* Name */}

          {/* Comment */}
          <textarea
            name='comment'
            placeholder='Write your comment...'
            value={formData.comment}
            onChange={handleChange}
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
              onChange={handleChange}
              className='p-2 border rounded focus:ring focus:ring-blue-200 w-full'
              required
            />

            {/* Email */}
            <input
              type='email'
              name='email'
              placeholder='Email *'
              value={formData.email}
              onChange={handleChange}
              className='p-2 border rounded focus:ring focus:ring-blue-200 w-full'
              required
            />

            {/* Website */}
            <input
              type='url'
              name='website'
              placeholder='Website (Optional)'
              value={formData.website}
              onChange={handleChange}
              className='p-2 border rounded focus:ring focus:ring-blue-200 w-full'
            />
          </div>

          {/* Submit Button */}
          <div className='flex lg:flex-row flex-col lg:items-center gap-5'>
            <button
              type='submit'
              className='bg-teal-600 hover:bg-teal-700 mt-2 px-4 py-1.5 rounded text-white transition'
              disabled={pending}>
              {pending ? 'Submitting...' : 'Post Reply'}
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
