function openModal() {
    document.getElementById("customizationModal").style.display = "block";
}

function closeModal() {
    document.getElementById("customizationModal").style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById("customizationModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Update phone model options based on the selected cover design
function updatePhoneModelOptions() {
    const coverDesign = document.getElementById("coverDesign").value;
    const phoneModelSelect = document.getElementById("phoneModel");

    // Clear existing options
    phoneModelSelect.innerHTML = '<option value="">Select a Phone Model</option>';

    if (coverDesign) {
        // Enable the phone model selection based on the cover design
        const models = {
            design1: ['iphone-11', 'iphone-12', 'iphone-13'],
            design2: ['iphone-14', 'iphone-15', 'samsung-galaxy-s21'],
            design3: ['samsung-galaxy-s22', 'samsung-galaxy-s23'],
        };

        models[coverDesign].forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            phoneModelSelect.appendChild(option);
        });
    }
}

// Function to update the displayed phone image based on the selected model
function updateImage() {
    const coverDesign = document.getElementById("coverDesign").value;
    const phoneModel = document.getElementById("phoneModel").value;
    const phoneImage = document.getElementById("phoneImage");

    if (coverDesign && phoneModel) {
        phoneImage.src = `https://example.com/path-to-${coverDesign}-${phoneModel}-image.jpg`; // Replace with actual image URL
        phoneImage.style.display = 'block'; // Show the image
    } else {
        phoneImage.src = '';
        phoneImage.style.display = 'none'; // Hide the image if no selection is made
    }
}
