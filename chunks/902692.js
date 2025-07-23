t.d(l, { P: () => r });
let r = Object.freeze({
    EMBED: (e, l, t) =>
        'https://embed.music.apple.com/'
            .concat(e, '?theme=')
            .concat(l, '&i=')
            .concat(null != t ? encodeURIComponent(t) : '')
});
