import React, { useEffect, useState } from 'react';
import { fetchVideoData } from './api/youtubeApi'; // Import the API function

function VideoInfo({ videoId }) {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // Call the API function with the videoId
    fetchVideoData(videoId)
      .then((data) => {
        // Handle the response data
        setVideoData(data.items[0]); // Assuming the first item in the response contains video details
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  // Render the video data
  return (
    <div>
      <h2>{videoData.snippet.title}</h2>
      <p>{videoData.snippet.description}</p>
      <p>Views: {videoData.statistics.viewCount}</p>
      <p>Likes: {videoData.statistics.likeCount}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default VideoInfo;
