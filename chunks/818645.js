var i = n(582128);
function r(e) {
    let { topEmojis: t, newlyAddedEmojis: n, rowSize: i = 9 } = e,
        r = t.slice(0, i - n.length);
    return { visibleTopEmojis: r, visibleNewlyAddedEmojis: n, allEmojis: r.concat(n) };
}
(n(732139),
    n.d(
        t,
        {},
        {
            A: function (e) {
                return i.useMemo(() => r(e), [e]);
            },
            W: r,
        },
    ));
