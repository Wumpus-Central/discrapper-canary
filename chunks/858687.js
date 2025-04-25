n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(493683),
    o = n(699516),
    s = n(594174),
    c = n(933557),
    d = n(388032);
function u(e, t) {
    let u = i.useCallback(() => {
        let i = (0, c.F6)(e, s.default, o.Z),
            u = d.intl.formatToPlainString(d.t.hJ5Ap6, { name: i }),
            f = d.intl.format(d.t.SSIVOj, { name: i });
        e.isManaged() && ((u = d.intl.formatToPlainString(d.t.hVGjER, { name: i })), (f = d.intl.format(d.t.IK1Qvr, { name: i })));
        let p = function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            l.Z.closePrivateChannel(e.id, t, r);
        };
        (0, a.ZDy)(async () => {
            let { default: e } = await n.e('14604').then(n.bind(n, 960670));
            return (t) =>
                (0, r.jsx)(
                    e,
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
                    })(
                        {
                            header: u,
                            body: f,
                            onSubmit: p
                        },
                        t
                    )
                );
        });
    }, [e, t]);
    return (0, r.jsx)(a.sNh, {
        id: 'leave-channel',
        label: d.intl.string(d.t['26C4oq']),
        action: u,
        color: 'danger'
    });
}
