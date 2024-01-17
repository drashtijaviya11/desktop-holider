// payment-detail 

let selectedSection = '';  

    function toggleSection(section) {
        if (selectedSection === section) {
            return;
        }

        if (selectedSection === 'card') {
            document.querySelector('.card-d').style.display = 'none';
            document.querySelector('.cr-c').style.backgroundColor = '#ECECEC';
            document.querySelector('.cr-c').style.color = '#121212e6';  
        } else if (selectedSection === 'paypal') {
            document.querySelector('.pay-d').style.display = 'none';    
            document.querySelector('.pay-c').style.backgroundColor = '#ECECEC';
            document.querySelector('.pay-c').style.color = '#121212e6';  
        }

        selectedSection = section;

        if (section === 'card') {
            document.querySelector('.card-d').style.display = 'block';
            document.querySelector('.cr-c').style.backgroundColor = '#FF9A00';
            document.querySelector('.cr-c').style.color = '#fff';  
        } else if (section === 'paypal') {
            document.querySelector('.pay-d').style.display = 'block';
            document.querySelector('.pay-c').style.backgroundColor = '#FF9A00';
            document.querySelector('.pay-c').style.color = '#fff';  
        }
    }
