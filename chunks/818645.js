n.d(t, { A: () => a, W: () => r });
var i = n(582128);
function r(e) {
    let { topEmojis: t, newlyAddedEmojis: n, rowSize: i = 9 } = e,
        r = t.slice(0, i - n.length);
    return { visibleTopEmojis: r, visibleNewlyAddedEmojis: n, allEmojis: r.concat(n) };
}
function a(e) {
    return i.useMemo(() => r(e), [e]);
}
n(732139);
