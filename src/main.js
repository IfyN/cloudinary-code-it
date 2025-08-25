import { CloudinaryImage, Actions } from "@cloudinary/url-gen";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { text as clText } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";

class CloudinaryApp {
  constructor() {
    this.currentImageUrl =
      "https://res.cloudinary.com/demo/image/upload/sample.jpg";
    this.init();
  }

  // Initialize the Cloudinary SDK
  init() {
    this.setupEventListeners();
  }

  // Setup button event listeners
  setupEventListeners() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const transformation = e.target.dataset.transformation;
        this.applyTransformation(transformation);
        this.updateActiveButton(e.target);
      });
    });
  }

  applyTransformation(transformation) {
    try {
      let transformedUrl;

      switch (transformation) {
        case "original":
          transformedUrl = this.currentImageUrl;
          break;

        default:
          transformedUrl = this.currentImageUrl;
      }

      // Update the image
      this.updateImage(transformedUrl);
    } catch (error) {
      console.error(`Error applying ${transformation} transformation:`, error);
    }
  }

  // Update the displayed image
  updateImage(url) {
    const image = document.getElementById("mainImage");
    if (image) {
      image.src = url;
    }
  }

  // Update active button state
  updateActiveButton(clickedButton) {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    clickedButton.classList.add("active");
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new CloudinaryApp();
});
