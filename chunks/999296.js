var r = n(359282),
    i = n(720379),
    o = n(581079);
function a(e, t, n) {
    var r;
    return (
        i(
            e,
            function (e, t) {
                return e.getEntity() === t.getEntity();
            },
            function (e) {
                return e.getEntity() === t;
            },
            function (e, t) {
                e <= n &&
                    t >= n &&
                    (r = {
                        start: e,
                        end: t
                    });
            }
        ),
        'object' != typeof r && o(!1),
        r
    );
}
function s(e, t, n) {
    var i = t.getCharacterList(),
        o = n > 0 ? i.get(n - 1) : void 0,
        s = n < i.count() ? i.get(n) : void 0,
        l = o ? o.getEntity() : void 0,
        c = s ? s.getEntity() : void 0;
    if (c && c === l && 'MUTABLE' !== e.__get(c).getMutability()) {
        for (var u, d = a(i, c, n), f = d.start, _ = d.end; f < _; ) ((u = i.get(f)), (i = i.set(f, r.applyEntity(u, null))), f++);
        return t.set('characterList', i);
    }
    return t;
}
e.exports = function (e, t) {
    var n = e.getBlockMap(),
        r = e.getEntityMap(),
        i = {},
        o = t.getStartKey(),
        a = t.getStartOffset(),
        l = n.get(o),
        c = s(r, l, a);
    c !== l && (i[o] = c);
    var u = t.getEndKey(),
        d = t.getEndOffset(),
        f = n.get(u);
    o === u && (f = c);
    var _ = s(r, f, d);
    return (_ !== f && (i[u] = _), Object.keys(i).length)
        ? e.merge({
              blockMap: n.merge(i),
              selectionAfter: t
          })
        : e.set('selectionAfter', t);
};
