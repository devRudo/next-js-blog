import Link from 'next/link';
import React from 'react';

const FirstPost = () => {
  return (
    <div>
      <h1>First Post</h1>
      <Link href={'/'}>Back to home</Link>
    </div>
  );
};

export default FirstPost;
