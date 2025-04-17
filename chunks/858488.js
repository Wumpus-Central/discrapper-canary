n.d(t, { Z: () => s }), n(388685);
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    o = n(699516),
    a = n(388032);
function s(e) {
    let { user: t, onAction: s, appContext: u } = e,
        d = t.id,
        [c, f] = (0, i.Wu)(
            [o.Z],
            () => {
                var e;
                return [o.Z.isFriend(d), null != (e = o.Z.getNickname(d)) ? e : null];
            },
            [d]
        );
    if (!c) return null;
    let g = null == f ? a.NW.string(a.t.BGYkaG) : a.NW.string(a.t['8pOYUF']);
    return (0, l.jsx)(r.sNh, {
        id: null == f ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: g,
        action: () => {
            null == s || s(),
                (0, r.ZDy)(
                    async () => {
                        let { default: e } = await n.e('25070').then(n.bind(n, 670794));
                        return (n) =>
                            (0, l.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            l = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (l = l.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            l.forEach(function (t) {
                                                var l;
                                                (l = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: l,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = l);
                                            });
                                    }
                                    return e;
                                })(
                                    {
                                        user: t,
                                        nickname: f
                                    },
                                    n
                                )
                            );
                    },
                    { contextKey: null != u ? (0, r.VnL)(u) : void 0 }
                );
        }
    });
}
