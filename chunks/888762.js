n.d(e, { default: () => b }), n(747238);
var a = n(627968),
    i = n(64700),
    r = n(158954),
    s = n(397927),
    c = n(450510),
    o = n(350535),
    l = n(927421),
    d = n(985018),
    u = n(290844);
function b(t) {
    let { guildId: e, channel: b, keybind: h, transitionState: p, onClose: f } = t,
        y = i.useCallback(async () => {
            (0, c.sF)(c._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await f();
        }, [f]),
        j = i.useCallback(async () => {
            await y(),
                (0, s.mMO)(async () => {
                    let { default: t } = await n.e("12618").then(n.bind(n, 29681));
                    return (e) =>
                        (0, a.jsx)(
                            t,
                            (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {},
                                        a = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (a = a.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                            }),
                                        )),
                                        a.forEach(function (e) {
                                            var a;
                                            (a = n[e]),
                                                e in t
                                                    ? Object.defineProperty(t, e, {
                                                          value: a,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (t[e] = a);
                                        });
                                }
                                return t;
                            })({}, e),
                        );
                });
        }, [y]),
        k = i.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: d.intl.string(d.t.TJ0N99),
                    onClick: j,
                },
                {
                    text: d.intl.string(d.t.ZwRzIH),
                    onClick: y,
                    variant: "primary",
                },
            ],
            [j, y],
        );
    return (0, a.jsxs)(r.Modal, {
        onClose: y,
        actions: k,
        transitionState: p,
        title: d.intl.string(d.t.yJeV51),
        children: [
            (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: d.intl.format(d.t.fq3Swz, {
                    keybind: (0, o.dI)(h.shortcut, !0).split(" + "),
                    keybindHook: (t, e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: u.EY,
                                children: (0, a.jsx)(s.e7I, {
                                    className: u.d4,
                                    shortcut: (0, o.dI)(h.shortcut, !1),
                                }),
                            },
                            e,
                        ),
                    openSettingsHook: (t, e) =>
                        (0, a.jsx)(
                            s.MzZ,
                            {
                                onClick: j,
                                children: t,
                            },
                            e,
                        ),
                }),
            }),
            (0, a.jsx)("div", {
                className: u.Rj,
                children: (0, a.jsx)(l.A, {
                    width: 372,
                    height: 316,
                    guildId: e,
                    channel: b,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                }),
            }),
        ],
    });
}
