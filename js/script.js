let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

var swiper = new Swiper(".home-slider", {
   loop:true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".gallery-slider", {
   loop:true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});

document.querySelector('.reservation form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission

   // Gather form data
   const formData = new FormData(event.target);
   const data = {};
   formData.forEach((value, key) => {
       data[key] = value;
   });

   // Get the selected room type text
   const roomTypeSelect = event.target.querySelector('select[name="room_type"]');
   const selectedRoomType = roomTypeSelect.options[roomTypeSelect.selectedIndex].text;

   // Construct the WhatsApp message
   const message = `Reservation Details:\n\n` +
                   `Check in: ${data.check_in}\n` +
                   `Check out: ${data.check_out}\n` +
                   `Adults: ${data.adults}\n` +
                   `Children: ${data.childs}\n` +
                   `Rooms: ${data.rooms}\n` +
                   `Room type: ${selectedRoomType}\n`;

   // Encode the message and open WhatsApp with the specified number
   const whatsappNumber = '+919007062180'; // Your WhatsApp number
   const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
   window.open(whatsappURL, '_blank');
});


document.querySelector('.contact form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission

   // Gather form data
   const formData = new FormData(event.target);
   const data = {};
   formData.forEach((value, key) => {
       data[key] = value;
   });

   // Construct the WhatsApp message
   const message = `Name: ${data.name}\n` +
                   `Email: ${data.email}\n` +
                   `Number: ${data.number}\n` +
                   `Message: ${data.msg}`;

   // Encode the message for URL
   const encodedMessage = encodeURIComponent(message).replace(/%0A/g, '%0A'); // Ensure newlines are preserved

   // Display the message to the user for confirmation
   const userConfirmed = confirm(`Please review your message:\n\n${message}\n\nDo you want to send this message?`);

   // If the user confirms, open WhatsApp with the message
   if (userConfirmed) {
       const whatsappNumber = '+919007062180'; // The phone number to send the message to
       const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
       window.open(whatsappURL, '_blank'); // Open in a new tab
   }
});

