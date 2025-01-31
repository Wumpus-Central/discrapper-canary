n.d(e, {
    j: () => o,
    r: () => s
});
var i = n(981631);
function o(t, e) {
    return e === i.ABu.MASTODON && /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(t), /^.+\.[^.@]{2,}$/.test(t);
}
function s(t) {
    return t === i.ABu.MASTODON ? '@example@mastodon.social' : t === i.ABu.BLUESKY ? 'example.bsky.social' : 'clyde@example.com';
}
