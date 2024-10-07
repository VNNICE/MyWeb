function showTab(tabId)
{
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function showModal(detailsId)
{
    const modal = document.getElementById('modal');
    const description = document.getElementById('modal-description');

    description.innerHTML = document.getElementById(detailsId).innerHTML; 
    
    modal.classList.remove('hidden');
}

function closeModal() 
{
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => showTab('Unity'));