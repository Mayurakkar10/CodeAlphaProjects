// JavaScript for managing issue tracker functionality

const issueForm = document.getElementById('newIssueForm');
const issuesList = document.getElementById('issues');

issueForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const issueName = document.getElementById('issueName').value;
    const issueDescription = document.getElementById('issueDescription').value;

    createIssue(issueName, issueDescription);
    issueForm.reset();
});

function createIssue(name, description) {
    const issueItem = document.createElement('li');
    issueItem.innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
    `;
    issuesList.appendChild(issueItem);
}
