n.d(t, {
    A: () => a,
    W: () => i,
});
var r = n(64700);
function i(e) {
    let { topEmojis: t, newlyAddedEmojis: n, rowSize: r = 9 } = e,
        i = t.slice(0, r - n.length);
    return {
        visibleTopEmojis: i,
        visibleNewlyAddedEmojis: n,
        allEmojis: i.concat(n),
    };
}
function a(e) {
    return r.useMemo(() => i(e), [e]);
}
n(732139);
