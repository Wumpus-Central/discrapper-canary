n.d(t, { Z: () => s }), n(388685);
var l = n(951288);
n(647438);
var i = n(442837),
    r = n(481060),
    a = n(699516),
    o = n(388032);
function s(e) {
    let { user: t, onAction: s, appContext: u } = e,
        d = t.id,
        [c, g] = (0, i.Wu)([a.Z], () => {
            var e;
            return [a.Z.isFriend(d), null != (e = a.Z.getNickname(d)) ? e : null];
        }, [d]);
    if (!c) return null;
    let f = null == g ? o.intl.string(o.t.BGYkaH) : o.intl.string(o.t["8pOYUE"]);
    return (0, l.jsx)(r.sNh, {
        id: null == g ? "add-friend-nickname" : "edit-friend-nickname",
        label: f,
        action: () => {
            null == s || s(),
                (0, r.ZDy)(
                    async () => {
                        let { default: e } = await n.e("25070").then(n.bind(n, 670794));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        user: t,
                                        nickname: g,
                                    },
                                    n,
                                ),
                            );
                    },
                    { contextKey: null != u ? (0, r.VnL)(u) : void 0 },
                );
        },
    });
}
