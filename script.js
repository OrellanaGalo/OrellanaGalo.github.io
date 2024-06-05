// Cambiar la foto de perfil
document.getElementById('change-profile-btn').addEventListener('click', function() {
    // Trigger the file input when the button is clicked.
    document.getElementById('profile-input').click();
});

document.getElementById('profile-input').addEventListener('change', function(event) {
    event.preventDefault(); // Prevent form submission.
    var profileInput = this;

    if (profileInput.files && profileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var profileImage = document.getElementById('profile-image');
            profileImage.src = e.target.result;
        };
        // Read selected file as data URL.
        reader.readAsDataURL(profileInput.files[0]);
    }
});

// Subir imágenes a la grilla
document.getElementById('add-image-btn').addEventListener('click', function() {
    // Trigger the file input when the button is clicked.
    document.getElementById('image-input').click();
});

document.getElementById('image-input').addEventListener('change', function(event) {
    event.preventDefault(); // Prevent form submission.
    var imageInput = this;
    var imageContainer = document.querySelector('.gallery-items');
    var rowCount = Math.ceil(imageContainer.children.length / 3); // Calculate the current row count

    // Loop through selected files.
    for (var i = 0; i < imageInput.files.length; i++) {
        var file = imageInput.files[i];
        var reader = new FileReader();

        reader.onload = function(e) {
            // Create gallery item element.
            var galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            // Create image element.
            var image = new Image();
            image.onload = function() {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = 255;
                canvas.height = 255;
                ctx.drawImage(image, 0, 0, 255, 255);
                image.src = canvas.toDataURL();
            };
            image.src = e.target.result;
            image.alt = 'Uploaded Image';
            image.classList.add('gallery-image');

            // Append image to gallery item.
            galleryItem.appendChild(image);

            // Determine the position to insert the gallery item.
            var rowIndex = rowCount;
            var columnIndex = imageContainer.children.length % 3;

            // Check if we need to start a new row
            if (columnIndex === 0 && imageContainer.children.length !== 0) {
                rowIndex++;
            }

            // Set the order style to ensure proper positioning.
            galleryItem.style.order = (rowIndex * 3) + columnIndex;

            // Append gallery item to gallery items.
            imageContainer.appendChild(galleryItem);
        };

        // Read selected file as data URL.
        reader.readAsDataURL(file);
    }
});