function keyMapper(callbackList, options) {
    const delay = hasProperty('keystrokeDelay', options) && options.keystrokeDelay >= 300 && options.keystrokeDelay;
    const keystrokeDelay = delay || 1000;
    const eventType = hasProperty('eventType', options) && options.eventType || 'keydown';

    let state = {
        buffer: [],
        lastKeyTime:Date.now()
    };

    document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
        const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const key = event.key.toLowerCase();
        //console.log("key");

        if (charList.indexOf(key) === -1) return;

        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 1000) {
            buffer = [];
        }
        buffer.push(key);
        lastKeyTime = currentTime;
        
        console.log(buffer);
    });
});