n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    l = n(493683),
    o = n(489618),
    d = n(699516),
    c = n(594174),
    s = n(933557),
    u = n(388032);
function b(e, t) {
    let { rearrangeContextMenu: b } = o.Z.useExperiment({ location: "useChannelLeaveItem" }),
        f = i.useCallback(() => {
            let i = (0, s.F6)(e, c.default, d.Z),
                o = u.intl.formatToPlainString(u.t.hJ5Ap6, { name: i }),
                b = u.intl.format(u.t.SSIVOj, { name: i });
            e.isManaged() &&
                ((o = u.intl.formatToPlainString(u.t.hVGjER, { name: i })),
                (b = u.intl.format(u.t.IK1Qvr, { name: i })));
            let f = function (n) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                l.Z.closePrivateChannel(e.id, t, r);
            };
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                return (t) =>
                    (0, r.jsx)(
                        e,
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
                                header: o,
                                body: b,
                                onSubmit: f,
                            },
                            t,
                        ),
                    );
            });
        }, [e, t]);
    return (0, r.jsx)(a.sNh, {
        id: "leave-channel",
        label: u.intl.string(u.t["26C4oq"]),
        action: f,
        color: "danger",
        subtext: b ? u.intl.string(u.t["2HOk0t"]) : void 0,
    });
}
