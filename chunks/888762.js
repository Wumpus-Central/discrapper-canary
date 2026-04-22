n.d(e, { default: () => y });
var a = n(627968),
    i = n(64700),
    s = n(189213),
    d = n(192308),
    l = n(834730),
    c = n(475358),
    o = n(349288),
    r = n(450510),
    h = n(350535),
    u = n(927421),
    k = n(985018),
    p = n(999267);
function y(t) {
    let { guildId: e, channel: y, keybind: x, transitionState: _, onClose: j } = t,
        C = i.useCallback(async () => {
            (0, r.sF)(r._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await j();
        }, [j]),
        b = i.useCallback(async () => {
            await C(),
                (0, d.openModalLazy)(async () => {
                    let { default: t } = await n.e("12618").then(n.bind(n, 29681));
                    return (e) => (0, a.jsx)(t, { ...e });
                });
        }, [C]),
        m = i.useMemo(
            () => [
                { variant: "secondary", text: k.intl.string(k.t.TJ0N99), onClick: b },
                { text: k.intl.string(k.t.ZwRzIH), onClick: C, variant: "primary" },
            ],
            [b, C],
        );
    return (0, a.jsxs)(s.Modal, {
        onClose: C,
        actions: m,
        transitionState: _,
        title: k.intl.string(k.t.yJeV51),
        children: [
            (0, a.jsx)(l.E, {
                variant: "text-md/normal",
                children: k.intl.format(k.t.fq3Swz, {
                    keybind: (0, h.dI)(x.shortcut, !0).split(" + "),
                    keybindHook: (t, e) =>
                        (0, a.jsx)(
                            "span",
                            {
                                className: p.EY,
                                children: (0, a.jsx)(c.e, { className: p.d4, shortcut: (0, h.dI)(x.shortcut, !1) }),
                            },
                            e,
                        ),
                    openSettingsHook: (t, e) => (0, a.jsx)(o.Anchor, { onClick: b, children: t }, e),
                }),
            }),
            (0, a.jsx)("div", {
                className: p.Rj,
                children: (0, a.jsx)(u.A, {
                    width: 372,
                    height: 316,
                    guildId: e,
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
