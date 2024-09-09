# Image Slider Project

This project is an image slider web application designed to showcase a collection of images with smooth transitions between them. The slider includes navigation buttons, a thumbnail preview section, and a title for each image.

## Features

- **Image Slider**: Automatically cycles through a collection of images with previous/next navigation buttons.
- **Thumbnails**: Displays a list of image thumbnails below the main slider for easy access to specific images.
- **Responsive Design**: The layout adjusts to different screen sizes, ensuring it works well on both desktop and mobile devices.
- **Titles and Descriptions**: Each image is accompanied by a title and description that adds context to the displayed image.
- **Onload Timer**: The image slider initializes automatically when the page loads.

## Technologies Used

- **HTML5**: Provides the structure of the web page.
- **CSS3**: Styles the image slider, including layout, transitions, and responsiveness.
- **JavaScript**: Implements the functionality for the slider, including navigation buttons and automatic transitions.

## How to Use

1. **Clone the repository**:
   git clone https://github.com/yourusername/image-slider.git

2. **Open the project:**
    Navigate to the project directory.
    Open index.html in your web browser to view the image slider.

3. **Customizing the images:**
    Place your images in the /img directory.
    Update the src attribute of the <img> tags in the index.html file to point to your images.

4. **JavaScript Functions:**
    The slider is controlled by two buttons: "Previous" (left()) and "Next" (right()).
    The starttimer() function is executed when the page loads to initiate the slider.

## How to Customize

1. To Add New Images:
    Add the images in the img folder.
    Update the image source paths in the index.html to reflect the new image names.

2. Modify Titles and Descriptions:
    Update the titles and descriptions in the index.html file by editing the <div class="title"> and <div class="type"> elements.

## Live Demo
[You can view a live demo of this project online.](http://127.0.0.1:5500/index.html)