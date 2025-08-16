// Sample deals array (replace with real affiliate links)
const deals = [
    {name: "1₹ Deal", link: "https://affiliate-link.com/deal1"},
    {name: "90% Off", link: "https://affiliate-link.com/deal2"},
    {name: "App Download & Earn", link: "https://affiliate-link.com/app"}
];

// Display deals
const container = document.getElementById('deals-container');
deals.forEach(deal => {
    const btn = document.createElement('button');
    btn.innerText = deal.name;
    btn.onclick = () => {
        // Set/update affiliate cookie for 24 hours
        document.cookie = `aff=YOURID; max-age=${24*60*60}; path=/`;
        window.open(deal.link, '_blank');
    };
    container.appendChild(btn);
});

// Open app button
document.getElementById('open-app-btn').onclick = () => {
    document.cookie = `aff=YOURID; max-age=${24*60*60}; path=/`;
    window.open("https://affiliate-link.com/app", "_blank");
};

// Auto cookie refresh every 24 hours
setInterval(() => {
    document.cookie = `aff=YOURID; max-age=${24*60*60}; path=/`;
}, 24*60*60*1000);
