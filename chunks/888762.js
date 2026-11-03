e.d(a, { default: () => y });
var n = e(477900),
    i = e(582128),
    s = e(189213),
    l = e(192308),
    c = e(834730),
    o = e(475358),
    r = e(28863),
    d = e(450510),
    h = e(350535),
    u = e(317084),
    k = e(105292),
    p = e(922518);
function y(t) {
    let { guildId: a, channel: y, keybind: m, transitionState: x, onClose: C } = t,
        j = i.useCallback(async () => {
            ((0, d.sF)(d._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await C());
        }, [C]),
        b = i.useCallback(async () => {
            (await j(),
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        e.e("161411"),
                        e.e("498640"),
                        e.e("846327"),
                        e.e("912618"),
                    ]).then(e.bind(e, 29681));
                    return (a) => (0, n.jsx)(t, { ...a });
                }));
        }, [j]),
        w = i.useMemo(
            () => [
                { variant: "secondary", text: k.intl.string(k.t.TJ0N99), onClick: b },
                { text: k.intl.string(k.t.ZwRzIH), onClick: j, variant: "primary" },
            ],
            [b, j],
        );
    return (0, n.jsxs)(s.a, {
        onClose: j,
        actions: w,
        transitionState: x,
        title: k.intl.string(k.t.yJeV51),
        children: [
            (0, n.jsx)(c.E, {
                variant: "body-md/normal",
                children: k.intl.format(k.t.fq3Swz, {
                    keybind: (0, h.dI)(m.shortcut, !0).split(" + "),
                    keybindHook: (t, a) =>
                        (0, n.jsx)(
                            "span",
                            {
                                className: p.EY,
                                children: (0, n.jsx)(o.e, { className: p.d4, shortcut: (0, h.dI)(m.shortcut, !1) }),
                            },
                            a,
                        ),
                    openSettingsHook: (t, a) => (0, n.jsx)(r.Anchor, { onClick: b, children: t }, a),
                }),
            }),
            (0, n.jsx)("div", {
                className: p.Rj,
                children: (0, n.jsx)(u.A, {
                    width: 372,
                    height: 316,
                    guildId: a,
                    channel: y,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                }),
            }),
        ],
    });
}
