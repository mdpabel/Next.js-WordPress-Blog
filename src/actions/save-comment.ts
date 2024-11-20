'use server';

export const saveComment = async (_: any, formData: FormData) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Extracting fields from formData
  const postId = formData.get('postId') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const website = formData.get('website') as string | null;
  const comment = formData.get('comment') as string;
  const parentId = formData.get('parentId')
    ? Number(formData.get('parentId'))
    : 0;

  try {
    // Input validation
    if (!postId || !name.trim() || !email.trim() || !comment.trim()) {
      return {
        success: false,
        message: 'Post ID, Name, Email, and Comment are required.',
      };
    }

    // API request payload
    const payload = {
      post: Number(postId),
      author_name: name,
      author_email: email,
      author_url: website || '',
      content: comment,
      parent: parentId,
    };

    // API call to WordPress to save the comment
    const response = await fetch(`${API_URL}/wp-json/wp/v2/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || 'Failed to save the comment.',
      };
    }

    // Parse the response
    const data = await response.json();

    return {
      success: true,
      message: 'Comment submitted successfully!',
      data, // Optional: Include the created comment object
    };
  } catch (error) {
    console.error('Error saving comment:', error);

    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
};
