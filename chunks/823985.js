i.d(n, {
    j: () => e,
    r: () => l,
}),
    i(35282);
var a = i(981631);
function e(t, n) {
    return (
        n === a.ABu.MASTODON && /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i.test(t), /^.+\.[^.@]{2,}$/.test(t)
    );
}
function l(t) {
    return t === a.ABu.MASTODON
        ? "@example@mastodon.social"
        : t === a.ABu.BLUESKY
          ? "example.bsky.social"
          : "clyde@example.com";
}
