n.d(t, { Z: () => s }), n(388685);
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(699516),
    a = n(388032);
function s(e) {
    let { user: t, onAction: s, appContext: u } = e,
        d = t.id,
        [c, f] = (0, l.Wu)(
            [o.Z],
            () => {
                var e;
                return [o.Z.isFriend(d), null != (e = o.Z.getNickname(d)) ? e : null];
            },
            [d]
        );
    if (!c) return null;
    let Z = null == f ? a.NW.string(a.t.BGYkaG) : a.NW.string(a.t['8pOYUF']);
    return (0, i.jsx)(r.sNh, {
        id: null == f ? 'add-friend-nickname' : 'edit-friend-nickname',
        label: Z,
        action: () => {
            null == s || s(),
                (0, r.ZDy)(
                    async () => {
                        let { default: e } = await n.e('25070').then(n.bind(n, 670794));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            i = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (i = i.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            i.forEach(function (t) {
                                                var i;
                                                (i = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = i);
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
