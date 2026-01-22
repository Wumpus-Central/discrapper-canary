var r = n(116740),
    i = n(885578),
    a = n(797686),
    s = r.Repeat;
e.exports = function (e, t, n, r) {
    t.isCollapsed() || a(!1);
    var o = null;
    if ((null != n && (o = n.length), null == o || 0 === o)) return e;
    var l = e.getBlockMap(),
        c = t.getStartKey(),
        u = t.getStartOffset(),
        d = l.get(c),
        f = d.getText(),
        p = d.merge({
            text: f.slice(0, u) + n + f.slice(u, d.getLength()),
            characterList: i(d.getCharacterList(), s(r, o).toList(), u),
        }),
        _ = u + o;
    return e.merge({
        blockMap: l.set(c, p),
        selectionAfter: t.merge({
            anchorOffset: _,
            focusOffset: _,
        }),
    });
};
