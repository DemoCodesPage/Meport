var animation = bodymovin.loadAnimation({
    container: document.getElementById('home-img'),

    // Set your ID to something that you'll associate with the animation you're using //
    renderer: 'svg',
    loop: true,
    autoplay: true,
    // path: 'javascript/json/Blogging/BloggingAnimation.json'
    path: 'javascript/json/BloggingAnimation.json'

    // Make sure your path has the same filename as your animated     SVG's JSON file //
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('about-img'),

    // Set your ID to something that you'll associate with the animation you're using //
    renderer: 'svg',
    loop: true,
    autoplay: true,
    // path: 'javascript/json/Growth/GrowthAnimation.json'
    path: 'javascript/json/GrowthAnimation.json'

    // Make sure your path has the same filename as your animated     SVG's JSON file //
})