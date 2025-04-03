n.d(t, { Z: () => f });
var r = n(200651),
    a = n(192379),
    i = n(481060),
    o = n(493683),
    l = n(699516),
    c = n(594174),
    d = n(933557),
    u = n(388032);
function f(e, t) {
    let f = a.useCallback(() => {
        let a = (0, d.F6)(e, c.default, l.Z),
            f = u.NW.formatToPlainString(u.t.hJ5Ap6, { name: a }),
            s = u.NW.format(u.t.SSIVOj, { name: a });
        e.isManaged() && ((f = u.NW.formatToPlainString(u.t.hVGjER, { name: a })), (s = u.NW.format(u.t.IK1Qvr, { name: a })));
        let p = function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            o.Z.closePrivateChannel(e.id, t, r);
        };
        (0, i.ZDy)(async () => {
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
                            header: f,
                            body: s,
                            onSubmit: p
                        },
                        t
                    )
                );
        });
    }, [e, t]);
    return (0, r.jsx)(i.sNh, {
        id: 'leave-channel',
        label: u.NW.string(u.t['26C4oq']),
        action: f,
        color: 'danger'
    });
}
