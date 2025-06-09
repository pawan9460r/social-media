// Function to fetch GitHub repositories
async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/pawan9460r/repos?sort=updated&direction=desc');
        const repos = await response.json();
        
        let reposHTML = '';
        repos.slice(0, 5).forEach(repo => {
            reposHTML += `
                <div class="repo-item">
                    <a href="${repo.html_url}" class="repo-link" target="_blank">${repo.name}</a>
                    <span>${repo.stargazers_count} <i class="fas fa-star"></i></span>
                </div>
            `;
        });
        
        document.getElementById('repositories').innerHTML = reposHTML;
    } catch (error) {
        document.getElementById('repositories').innerHTML = 'Unable to load repositories. <a href="https://github.com/pawan9460r" target="_blank">Visit GitHub directly</a>';
    }
}

// Call the function when page loads
window.onload = fetchGitHubRepos;
