var r = n(159063),
    i = n(65183);
e.exports = function (e, t, n) {
    var o = e.getBlockMap(),
        a = t.getStartKey(),
        s = t.getStartOffset(),
        l = t.getEndKey(),
        c = t.getEndOffset(),
        u = o
            .skipUntil(function (e, t) {
                return t === a;
            })
            .takeUntil(function (e, t) {
                return t === l;
            })
            .toOrderedMap()
            .merge(i.OrderedMap([[l, o.get(l)]]))
            .map(function (e, t) {
                var i = t === a ? s : 0,
                    o = t === l ? c : e.getLength();
                return r(e, i, o, n);
            });
    return e.merge({
        blockMap: o.merge(u),
        selectionBefore: t,
        selectionAfter: t,
    });
};
