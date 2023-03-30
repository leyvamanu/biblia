window.addEventListener('load', function () {
    const copyButtons = document.getElementsByClassName('copy-button');
    for (let copyButton of copyButtons) {
        copyButton.addEventListener('click', function () {
            const copyText = copyButton.previousElementSibling;
            navigator.clipboard.writeText(copyText.innerHTML);

            const copyMessage = copyButton.nextElementSibling;
            copyMessage.classList.remove('hidden');
            hideElement(copyMessage, 2000);
        });
    }
    
    function hideElement(element, time) {
        setTimeout(function () {
            element.classList.add('hidden');
        }, time);
    }
});