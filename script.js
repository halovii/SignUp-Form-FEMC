// dom elements
const formCard = document.getElementById('form-card');
const successCard = document.getElementById('success-card');
const errorMsg = document.getElementById('error-msg');
const emailInput = document.getElementById('email-input');
const subBtn = document.getElementById('sub-btn');
const dismissBtn = document.getElementById('dismiss-btn');


// toggle success card display off
successCard.classList.add('toggle-display'); // add display none

// toggle error msg display
errorMsg.classList.add('toggle-display'); // add display none

// toggle error state on input field
// emailInput.classList.remove('input-error'); // remove error


// check if email is valid
function isValid() {
    let emailVal = emailInput.value.trim();

    if (/@./.test(emailVal)) {
        errorMsg.classList.remove('toggle-display'); // show error msg
        errorMsg.textContent = "Must include '.com'";
        if (/\.com/.test(emailVal)) {
            console.log(":) valid email :)")
            errorMsg.classList.add('toggle-display'); // remove error msg
            emailInput.classList.remove('input-error'); // remove error state
            return true;
        }
        else {
            return false;
        }
    } 
    else {
        errorMsg.classList.remove('toggle-display'); // toggle error msg
        emailInput.classList.add('input-error'); // toggle error state
        return false;
    };
}

function close() {
    setTimeout(() => {
        successCard.classList.add('toggle-display'); // toggle success card off
        formCard.classList.remove('toggle-display'); // toggle form card on
        emailInput.focus();
    }, 100);
}

function onSubmit() {
    if (isValid()) {
        successCard.classList.remove('toggle-display'); // toggle success card on
        formCard.classList.add('toggle-display'); // toggle form card off 
        emailInput.value = "";
    } else {
        return;
    }

}

// submit btn event listener 
subBtn.addEventListener('click', onSubmit);

// dismiss btn event listner
dismissBtn.addEventListener('click', close);





// js to do:
// trigger invalid/error states when an invalid email has been entered, possibly make button disabled until email is fixed?