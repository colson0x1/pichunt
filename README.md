# Pichunt

Pichunt is a React app that allows users to search for specific images using keywords. It leverages a third-party API to retrieve a curated collection of images based on the user's search query. Pichunt offers a user-friendly interface where users can enter their desired search term and view a list of relevant images.

## Features

- Search images: Users can enter a search term in the search bar and retrieve a list of images related to their query.
- Image display: The app presents the retrieved images in a visually appealing manner, providing a seamless browsing experience.
- Third-party API integration: Pichunt integrates with the Unsplash API to fetch high-quality and diverse images based on user searches.

## Installation

To run Pichunt locally, follow these steps:

1. Clone the repository: `git clone https://github.com/colson0x1/pichunt.git`
2. Navigate to the project directory: `cd pichunt`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000`

## Usage

1. Enter a search term in the search bar.
2. Press Enter or click the search button to initiate the search.
3. Pichunt will retrieve images related to your search query and display them in a grid format.
4. Scroll through the images and enjoy the visual content.
5. Repeat the process with different search terms to explore various images.

## API Key

Pichunt uses the Unsplash API to fetch images. To ensure the app works properly, make sure to provide your own API key in the `api.js` file. Update the `Authorization` header in the API request with your Unsplash API access key.

```javascript
headers: {
  Authorization: 'Client-ID YOUR_API_ACCESS_KEY',
},
```

---

**Note:** The Unsplash API allows limited requests per hour for free usage. Make sure to review and comply with the API usage guidelines and any applicable restrictions. 

---

## Screenshots

### pichunt
![pichunt](https://i.imgur.com/f5KjlsY.png)

### pichunt searching cars
![pichunt searching cars](https://i.imgur.com/HxUjcm5.png)

### pichunt searching private jet
![pichunt searching private jet](https://i.imgur.com/V96AYmF.png)