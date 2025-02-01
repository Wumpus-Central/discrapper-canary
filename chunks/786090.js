r(42547),
    (t.exports = {
        isValidBlock: function (t, e) {
            var r = t.getKey(),
                n = t.getParentKey();
            if (
                (null != n && !e.get(n).getChildKeys().includes(r)) ||
                !t
                    .getChildKeys()
                    .map(function (t) {
                        return e.get(t);
                    })
                    .every(function (t) {
                        return t.getParentKey() === r;
                    })
            )
                return !1;
            var i = t.getPrevSiblingKey();
            if (null != i && e.get(i).getNextSiblingKey() !== r) return !1;
            var o = t.getNextSiblingKey();
            return (null == o || e.get(o).getPrevSiblingKey() === r) && (null === o || null === i || i !== o) && ('' == t.text || !(t.getChildKeys().size > 0));
        },
        isConnectedTree: function (t) {
            var e = t.toArray().filter(function (t) {
                return null == t.getParentKey() && null == t.getPrevSiblingKey();
            });
            if (1 !== e.length) return !1;
            for (var r = e.shift(), n = 0, i = r.getKey(), o = []; null != i; ) {
                var a = t.get(i),
                    u = a.getChildKeys(),
                    s = a.getNextSiblingKey();
                if (u.size > 0) {
                    null != s && o.unshift(s);
                    var c = u
                        .map(function (e) {
                            return t.get(e);
                        })
                        .find(function (t) {
                            return null == t.getPrevSiblingKey();
                        });
                    if (null == c) return !1;
                    i = c.getKey();
                } else i = null != a.getNextSiblingKey() ? a.getNextSiblingKey() : o.shift();
                n++;
            }
            return n === t.size;
        },
        isValidTree: function (t) {
            var e = this;
            return (
                !!t.toArray().every(function (r) {
                    return e.isValidBlock(r, t);
                }) && this.isConnectedTree(t)
            );
        }
    });
