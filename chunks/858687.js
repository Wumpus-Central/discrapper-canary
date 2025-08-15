n.d(t, { Z: () => f });
var i = n(255367),
    r = n(73800),
    a = n(481060),
    l = n(493683),
    o = n(489618),
    d = n(699516),
    u = n(594174),
    c = n(933557),
    s = n(388032);
function f(e, t) {
    let { rearrangeContextMenu: f } = o.Z.useExperiment({ location: "useChannelLeaveItem" }),
        v = r.useCallback(() => {
            let r = (0, c.F6)(e, u.default, d.Z),
                o = s.intl.formatToPlainString(s.t.hJ5Ap6, { name: r }),
                f = s.intl.format(s.t.SSIVOj, { name: r });
            e.isManaged() &&
                ((o = s.intl.formatToPlainString(s.t.hVGjER, { name: r })),
                (f = s.intl.format(s.t.IK1Qvr, { name: r })));
            let v = function (n) {
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                l.Z.closePrivateChannel(e.id, t, i);
            };
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e("14604").then(n.bind(n, 960670));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                header: o,
                                body: f,
                                onSubmit: v,
                            },
                            t,
                        ),
                    );
            });
        }, [e, t]);
    return (0, i.jsx)(a.sNh, {
        id: "leave-channel",
        label: s.intl.string(s.t["26C4oq"]),
        action: v,
        color: "danger",
        subtext: f ? s.intl.string(s.t["2HOk0t"]) : void 0,
    });
}
