var n = r(63451),
    i = r(467159);
t.exports = function (t, e, r, o, a) {
    var u = i(t.getSelection()),
        s = n.decode(e),
        c = s.blockKey,
        l = t.getBlockTree(c),
        f = l && l.getIn([s.decoratorKey, 'leaves', s.leafKey]),
        p = n.decode(o),
        h = p.blockKey,
        d = t.getBlockTree(h),
        g = d && d.getIn([p.decoratorKey, 'leaves', p.leafKey]);
    if (!f || !g) return u;
    var y = f.get('start'),
        v = g.get('start'),
        m = f ? y + r : null,
        _ = g ? v + a : null;
    if (u.getAnchorKey() === c && u.getAnchorOffset() === m && u.getFocusKey() === h && u.getFocusOffset() === _) return u;
    var b = !1;
    if (c === h) {
        var S = f.get('end'),
            w = g.get('end');
        b = v === y && w === S ? a < r : v < y;
    } else
        b =
            t
                .getCurrentContent()
                .getBlockMap()
                .keySeq()
                .skipUntil(function (t) {
                    return t === c || t === h;
                })
                .first() === h;
    return u.merge({
        anchorKey: c,
        anchorOffset: m,
        focusKey: h,
        focusOffset: _,
        isBackward: b
    });
};
