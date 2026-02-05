"use strict";
t.exports = function (t, e, r, n) {
    var i = e.getStartKey(),
        o = e.getEndKey(),
        a = t.getBlockMap(),
        s = a
            .toSeq()
            .skipUntil(function (t, e) {
                return e === i;
            })
            .takeUntil(function (t, e) {
                return e === o;
            })
            .concat([[o, a.get(o)]])
            .map(function (t) {
                var e = t.getDepth() + r;
                return (e = Math.max(0, Math.min(e, n))), t.set("depth", e);
            });
    return (a = a.merge(s)), t.merge({ blockMap: a, selectionBefore: e, selectionAfter: e });
};
