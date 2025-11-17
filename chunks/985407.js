var r = n(65183),
    i = n(357415),
    a = n(581079),
    o = r.Repeat;
e.exports = function (e, t, n, r) {
    t.isCollapsed() || a(!1);
    var s = null;
    if ((null != n && (s = n.length), null == s || 0 === s)) return e;
    var l = e.getBlockMap(),
        c = t.getStartKey(),
        u = t.getStartOffset(),
        d = l.get(c),
        f = d.getText(),
        _ = d.merge({
            text: f.slice(0, u) + n + f.slice(u, d.getLength()),
            characterList: i(d.getCharacterList(), o(r, s).toList(), u),
        }),
        p = u + s;
    return e.merge({
        blockMap: l.set(c, _),
        selectionAfter: t.merge({
            anchorOffset: p,
            focusOffset: p,
        }),
    });
};
