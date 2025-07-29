n.d(t, { Z: () => s });
var i = n(255367),
    r = n(73800),
    a = n(481060),
    l = n(493683),
    o = n(699516),
    d = n(594174),
    u = n(933557),
    c = n(388032);
function s(e, t) {
    let s = r.useCallback(() => {
        let r = (0, u.F6)(e, d.default, o.Z),
            s = c.intl.formatToPlainString(c.t.hJ5Ap6, { name: r }),
            f = c.intl.format(c.t.SSIVOj, { name: r });
        e.isManaged() && ((s = c.intl.formatToPlainString(c.t.hVGjER, { name: r })), (f = c.intl.format(c.t.IK1Qvr, { name: r })));
        let b = function (n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            l.Z.closePrivateChannel(e.id, t, i);
        };
        (0, a.ZDy)(async () => {
            let { default: e } = await n.e('14604').then(n.bind(n, 960670));
            return (t) =>
                (0, i.jsx)(
                    e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })(
                        {
                            header: s,
                            body: f,
                            onSubmit: b
                        },
                        t
                    )
                );
        });
    }, [e, t]);
    return (0, i.jsx)(a.sNh, {
        id: 'leave-channel',
        label: c.intl.string(c.t['26C4oq']),
        action: s,
        color: 'danger'
    });
}
