if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/DemoSu/sw.js', { scope: '/DemoSu/' })})}