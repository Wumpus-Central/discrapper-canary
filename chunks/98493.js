n.d(t, {
    m: () => d,
    p: () => u,
}),
    n(388685);
var r = n(473749),
    i = n(913527),
    l = n.n(i),
    a = n(881052),
    o = n(709054),
    s = n(693546),
    c = n(246364);
let u = c.tB * c.hW;
function d(e) {
    let { guildId: t, guildJoinRequests: n } = e,
        i = r.useRef(!1),
        [d, f] = r.useState(null),
        h = r.useRef(null),
        p = r.useRef(!1);
    return {
        fetchNextPage: r.useCallback(
            async (e, r) => {
                if (i.current) return;
                let g = "".concat(e, "-").concat(r),
                    b = !1;
                if ((g !== h.current && ((h.current = g), (p.current = !1), (b = !0)), p.current)) return;
                null != d && f(null);
                let m = (function (e, t, n, r) {
                    let i = n === c.wB.SUBMITTED;
                    if (t === c.Nw.TIMESTAMP_DESC)
                        if (r) return { before: o.default.fromTimestamp(new Date().getTime()) };
                        else {
                            let t = e[e.length - 1];
                            return { before: i ? t.joinRequestId : t.actionedAt };
                        }
                    if (r) return { after: o.default.fromTimestamp(l()().subtract(180, "days").valueOf()) };
                    {
                        let t = e[e.length - 1];
                        return { after: i ? t.joinRequestId : t.actionedAt };
                    }
                })(n, e, r, b);
                try {
                    i.current = !0;
                    let e = await s.Z.fetchGuildJoinRequests(
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                guildId: t,
                                status: r,
                                limit: u,
                                force: !0,
                            },
                            m,
                        ),
                    );
                    if (null != e) {
                        let { guild_join_requests: t } = e.body;
                        t.length < u && (p.current = !0);
                    }
                } catch (e) {
                    f(new a.Hx(e).getAnyErrorMessage());
                } finally {
                    i.current = !1;
                }
            },
            [d, t, n],
        ),
        error: d,
    };
}
