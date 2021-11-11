'user strict';

window.onload = function() {
    document.body.className += " loaded";
}

const socials = [
    {name: 'Github', keyword: 'github', username: 'keylperez', link: 'https://github.com/keylperez', column: 1},
    {name: 'Twitch', keyword: 'twitch', username: 'keyl_perez',  link: 'https://twitch.tv/keyl_perez', column: 2},
    {name: 'Twitter', keyword: 'twitter', username: 'keyl_perez', link: 'https://twitter.com/keyl_perez', column: 3},
    {name: 'Discord', keyword: 'discord', username: 'The SpiderVerse', link: 'https://discord.gg/6EJYv5Y', column: 1},
    {name: 'Instagram', keyword: 'instagram', username: 'keyl_perez', link: 'https://instagram.com/keyl_perez', column: 2},
    {name: 'LinkedIn', keyword: 'linkedin', username: 'keylperez', link: 'https://www.linkedin.com/in/keylperez', column: 3},
    {name: 'Buy me a coffee', keyword: 'buymeacoffee', username: 'yuutaro', link: 'https://www.linkedin.com/in/yuutaro', column: 1}
];

console.log(socials);

const socialContainer = document.querySelector('.social-links');
const aboutContainer = document.querySelector('.about');

socials.forEach(e => {
    socialContainer.insertAdjacentHTML('beforeend', `
        <div class="social-links-item social-links-item-${e.keyword} social-links-item-column-${e.column}">
            <svg class="icon icon-${e.keyword}">
                <use xlink:href="src/icon/sprite.svg#icon-${e.keyword}"></use>
            </svg>
            <span class="social-title social-title-${e.keyword}"><strong>${e.name}</strong></span>            
            <a href="${e.link}" class="social-links-link" target="_blank"><button class="social-btn social-btn-${e.keyword}">${e.username}</button>
            </a>
        </div>
    `);
    
    // </button>
    // <button class="social-btn">${e.username}</button>
});

// aboutContainer.insertAdjacentHTML('beforeend', `
//     <h2>What is this?</h2>
// `);

{/* <p>loremmmmmm</p> */}