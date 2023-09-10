//AIzaSyCjAboQ19k9XlqVTjBq4X4w_Wozk2cJXjc
const API_KEY = 'AIzaSyCjAboQ19k9XlqVTjBq4X4w_Wozk2cJXjc';
const VIDEO_ID = 'VIDEO_ID_TO_FETCH';

// Construct the URL for the YouTube Data API request
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${VIDEO_ID}&part=snippet,statistics`;

// Make an HTTP GET request to the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data here (data.items will contain video details)
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching video data:', error);
  });
