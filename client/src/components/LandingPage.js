import React, { useState } from 'react';

function LandingPage() {
  const [videoLink, setVideoLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send videoLink to the backend for analysis
    try {
      const response = await fetch('/api/video/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ videoLink }),
      });

      if (response.ok) {
        // Redirect to the result page
        window.location.href = '/result';
      } else {
        // Handle error
        console.error('Error analyzing video');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Video Analysis</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Video Link"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <button type="submit">Analyze</button>
      </form>
    </div>
  );
}

export default LandingPage;
