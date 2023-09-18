const YOUTUBE_API_KEY = "AIzaSyAtcI399zRTFZdggXC8fHfVeMls-w9yemA";

 export const YOUTUBE_API_URL =
   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
   YOUTUBE_API_KEY;