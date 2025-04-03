t.d(l, { P: () => n });
let n = Object.freeze({
    EMBED: (e, l, t) =>
        'https://embed.music.apple.com/'
            .concat(e, '?theme=')
            .concat(l, '&i=')
            .concat(null != t ? encodeURIComponent(t) : '')
});
