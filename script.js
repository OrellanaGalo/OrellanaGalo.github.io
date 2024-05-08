document.getElementById('change-profile-btn').addEventListener('click', function() {
	// Trigger the file input when the button is clicked.
	document.getElementById('profile-input').click();
});

document.getElementById('profile-input').addEventListener('change', function(event) {
	event.preventDefault(); // Prevent form submission.
	var profileInput = this;
	var profileImage = document.getElementById('profile-image');
	
	if (profileInput.files && profileInput.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			profileImage.src = e.target.result;
		};
		// Read selected file as data URL.
		reader.readAsDataURL(profileInput.files[0]);
	}
});

document.getElementById('add-image-btn').addEventListener('click', function() {
    // Trigger the file input when the button is clicked.
    document.getElementById('image-input').click();
});

document.getElementById('image-input').addEventListener('change', function(event) {
    event.preventDefault(); // Prevent form submission.
    var imageInput = this;
    var imageGrid = document.querySelector('.image-grid');

    // Loop through selected files.
    for (var i = 0; i < imageInput.files.length; i++) {
        var file = imageInput.files[i];
        var reader = new FileReader();

        reader.onload = function(e) {
            // Create image element.
            var image = document.createElement('img');
            image.src = e.target.result;
            image.alt = 'Uploaded Image';
            image.style.borderRadius = '2px';
            image.style.marginBottom = '1px';
			
			// Set the width of the image.
			image.style.width = '235px';
			image.style.height = '235px';
			image.style.objectFit = 'cover';
			
            // Append image to grid.
            imageGrid.appendChild(image);
        };

        // Read selected file as data URL.
        reader.readAsDataURL(file);
    }
});
