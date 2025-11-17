n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(493683),
    o = n(489618),
    c = n(699516),
    s = n(594174),
    u = n(933557),
    d = n(388032);
function f(e, t) {
    let { rearrangeContextMenu: f } = o.Z.useExperiment({ location: "useChannelLeaveItem" }),
        b = i.useCallback(() => {
            let i = (0, u.F6)(e, s.default, c.Z),
                o = d.intl.formatToPlainString(d.t.hJ5Ap4, { name: i }),
                f = d.intl.format(d.t.SSIVOu, { name: i });
            e.isManaged() &&
                ((o = d.intl.formatToPlainString(d.t.hVGjEW, { name: i })),
                (f = d.intl.format(d.t.IK1Qvs, { name: i })));
            let b = function (n) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                a.Z.closePrivateChannel(e.id, t, r);
            };
            (0, l.ZDy)(async () => {
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
                                body: f,
                                onSubmit: b,
                            },
                            t,
                        ),
                    );
            });
        }, [e, t]);
    return (0, r.jsx)(l.sNh, {
        id: "leave-channel",
        label: d.intl.string(d.t["26C4oi"]),
        action: b,
        color: "danger",
        subtext: f ? d.intl.string(d.t["2HOk0k"]) : void 0,
    });
}
