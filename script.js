// Sample deals array (replace with real affiliate links)
const deals = [
    {name: "1₹ Deal", link: "https://affiliate-link.com/deal1"},
    {name: "90% Off", link: "https://affiliate-link.com/deal2"},
    {name: "App Download & Earn", link: "https://affiliate-link.com/app"}
];

// Function to set cookie for 30 days
function setAffiliateCookie() {
    const days = 30;
    const maxAge = days * 24 * 60 * 60; // seconds
    document.cookie = `aff=YOURID; max-age=${maxAge}; path=/`;
}

// Display deals
const container = document.getElementById('deals-container');
deals.forEach(deal => {
    const btn = document.createElement('button');
    btn.innerText = deal.name;
    btn.onclick = () => {
        setAffiliateCookie(); // Set / refresh cookie
        window.open(deal.link, '_blank'); // Open affiliate link
    };
    container.appendChild(btn);
});

// Open app button
document.getElementById('open-app-btn').onclick = () => {
    setAffiliateCookie(); // Set / refresh cookie
    window.open("https://affiliate-link.com/app", "_blank");
};

// Auto cookie refresh every time user opens page
setAffiliateCookie();
