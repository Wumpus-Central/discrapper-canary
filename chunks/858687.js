n.d(t, { Z: () => u });
var i = n(255367),
    r = n(73800),
    o = n(481060),
    a = n(493683),
    l = n(699516),
    c = n(594174),
    s = n(933557),
    f = n(388032);
function u(e, t) {
    let u = r.useCallback(() => {
        let r = (0, s.F6)(e, c.default, l.Z),
            u = f.intl.formatToPlainString(f.t.hJ5Ap6, { name: r }),
            d = f.intl.format(f.t.SSIVOj, { name: r });
        e.isManaged() && ((u = f.intl.formatToPlainString(f.t.hVGjER, { name: r })), (d = f.intl.format(f.t.IK1Qvr, { name: r })));
        let b = function (n) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            a.Z.closePrivateChannel(e.id, t, i);
        };
        (0, o.ZDy)(async () => {
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
                            header: u,
                            body: d,
                            onSubmit: b
                        },
                        t
                    )
                );
        });
    }, [e, t]);
    return (0, i.jsx)(o.sNh, {
        id: 'leave-channel',
        label: f.intl.string(f.t['26C4oq']),
        action: u,
        color: 'danger'
    });
}
