"use strict";
var n = r(116740),
    i = r(885578),
    o = r(797686),
    a = n.Repeat;
t.exports = function (t, e, r, n) {
    e.isCollapsed() || o(!1);
    var s = null;
    if ((null != r && (s = r.length), null == s || 0 === s)) return t;
    var u = t.getBlockMap(),
        c = e.getStartKey(),
        l = e.getStartOffset(),
        f = u.get(c),
        p = f.getText(),
        h = f.merge({
            text: p.slice(0, l) + r + p.slice(l, f.getLength()),
            characterList: i(f.getCharacterList(), a(n, s).toList(), l),
        }),
        d = l + s;
    return t.merge({ blockMap: u.set(c, h), selectionAfter: e.merge({ anchorOffset: d, focusOffset: d }) });
};
