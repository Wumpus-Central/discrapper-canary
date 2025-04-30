var n = r(7298),
    i = r(806998),
    o = r(148760),
    a = r(605882),
    u = r(380217),
    s = r(581079),
    c = function (t, e) {
        return {
            key: t.getKey(),
            text: t.getText(),
            type: t.getType(),
            depth: t.getDepth(),
            inlineStyleRanges: u(t),
            entityRanges: a(t, e),
            data: t.getData().toObject()
        };
    },
    l = function (t, e, r, o) {
        if (t instanceof n) return void r.push(c(t, e));
        t instanceof i || s(!1);
        var a = t.getParentKey(),
            u = (o[t.getKey()] = (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable;
                            })
                        )),
                        n.forEach(function (e) {
                            var n, i, o;
                            (n = t),
                                (i = e),
                                (o = r[e]),
                                i in n
                                    ? Object.defineProperty(n, i, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (n[i] = o);
                        });
                }
                return t;
            })({}, c(t, e), { children: [] }));
        if (a) return void o[a].children.push(u);
        r.push(u);
    },
    f = function (t, e) {
        var r = e.entityMap,
            n = [],
            i = {},
            a = {},
            u = 0;
        return (
            t.getBlockMap().forEach(function (t) {
                t.findEntityRanges(
                    function (t) {
                        return null !== t.getEntity();
                    },
                    function (e) {
                        var n = t.getEntityAt(e),
                            i = o.stringify(n);
                        !a[i] && ((a[i] = n), (r[i] = ''.concat(u)), u++);
                    }
                ),
                    l(t, r, n, i);
            }),
            {
                blocks: n,
                entityMap: r
            }
        );
    },
    p = function (t, e) {
        var r = e.blocks,
            n = e.entityMap,
            i = {};
        return (
            Object.keys(n).forEach(function (e, r) {
                var n = t.getEntity(o.unstringify(e));
                i[r] = {
                    type: n.getType(),
                    mutability: n.getMutability(),
                    data: n.getData()
                };
            }),
            {
                blocks: r,
                entityMap: i
            }
        );
    };
t.exports = function (t) {
    var e = {
        entityMap: {},
        blocks: []
    };
    return (e = f(t, e)), (e = p(t, e));
};
