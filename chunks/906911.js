n.d(t, { Z: () => h });
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(45792),
    o = n(699516),
    s = n(594174),
    c = n(823379),
    u = n(914946),
    d = n(186901),
    p = n(981631);
let h = {
    [p.Etm.GET_RELATIONSHIPS]: (0, a.S)(p.Etm.GET_RELATIONSHIPS, {
        scope: { [d.Gp.ANY]: [l.x.RELATIONSHIPS_READ] },
        handler(e) {
            let t = i().pickBy(
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, o.Z.getRelationships()),
                (e) => e !== p.OGo.NONE
            );
            return {
                relationships: i()
                    .map(t, (t, n) => {
                        let r = s.default.getUser(n);
                        if (null == r) return null;
                        let i = (0, u._J)(t, r);
                        return (0, u.kb)(i, e.socket.application.id);
                    })
                    .filter(c.lm)
            };
        }
    })
};
