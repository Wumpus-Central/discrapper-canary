t.d(n, { Z: () => o }), t(388685);
var l = t(951288);
t(647438);
var i = t(442837),
    r = t(481060),
    a = t(699516),
    u = t(388032);
function o(e) {
    let { user: n, onAction: o, appContext: s } = e,
        d = n.id,
        [c, g] = (0, i.Wu)([a.Z], () => {
            var e;
            return [a.Z.isFriend(d), null != (e = a.Z.getNickname(d)) ? e : null];
        }, [d]);
    if (!c) return null;
    let Z = null == g ? u.intl.string(u.t.BGYkaH) : u.intl.string(u.t["8pOYUE"]);
    return (0, l.jsx)(r.sNh, {
        id: null == g ? "add-friend-nickname" : "edit-friend-nickname",
        label: Z,
        action: () => {
            null == o || o(),
                (0, r.ZDy)(
                    async () => {
                        let { default: e } = await t.e("25070").then(t.bind(t, 670794));
                        return (t) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {},
                                            l = Object.keys(t);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                }),
                                            )),
                                            l.forEach(function (n) {
                                                var l;
                                                (l = t[n]),
                                                    n in e
                                                        ? Object.defineProperty(e, n, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[n] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        user: n,
                                        nickname: g,
                                    },
                                    t,
                                ),
                            );
                    },
                    { contextKey: null != s ? (0, r.VnL)(s) : void 0 },
                );
        },
    });
}
