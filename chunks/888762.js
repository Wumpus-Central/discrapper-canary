a.d(e, { default: () => x });
var n = a(627968),
    i = a(64700),
    s = a(189213),
    l = a(192308),
    c = a(834730),
    o = a(475358),
    r = a(349288),
    d = a(450510),
    h = a(350535),
    u = a(317084),
    k = a(375708),
    p = a(999267);
function x(t) {
    let { guildId: e, channel: x, keybind: m, transitionState: y, onClose: C } = t,
        j = i.useCallback(async () => {
            (0, d.sF)(d._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await C();
        }, [C]),
        w = i.useCallback(async () => {
            await j(),
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await Promise.all([
                        a.e("3633"),
                        a.e("72425"),
                        a.e("46327"),
                        a.e("12618"),
                    ]).then(a.bind(a, 29681));
                    return (e) => (0, n.jsx)(t, { ...e });
                });
        }, [j]),
        b = i.useMemo(
            () => [
                { variant: "secondary", text: k.intl.string(k.t.TJ0N99), onClick: w },
                { text: k.intl.string(k.t.ZwRzIH), onClick: j, variant: "primary" },
            ],
            [w, j],
        );
    return (0, n.jsxs)(s.Modal, {
        onClose: j,
        actions: b,
        transitionState: y,
        title: k.intl.string(k.t.yJeV51),
        children: [
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                children: k.intl.format(k.t.fq3Swz, {
                    keybind: (0, h.dI)(m.shortcut, !0).split(" + "),
                    keybindHook: (t, e) =>
                        (0, n.jsx)(
                            "span",
                            {
                                className: p.EY,
                                children: (0, n.jsx)(o.e, { className: p.d4, shortcut: (0, h.dI)(m.shortcut, !1) }),
                            },
                            e,
                        ),
                    openSettingsHook: (t, e) => (0, n.jsx)(r.Anchor, { onClick: w, children: t }, e),
                }),
            }),
            (0, n.jsx)("div", {
                className: p.Rj,
                children: (0, n.jsx)(u.A, {
                    width: 372,
                    height: 316,
                    guildId: e,
                    channel: x,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                }),
            }),
        ],
    });
}
