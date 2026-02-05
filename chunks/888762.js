n.d(e, { default: () => u });
var i = n(627968),
    a = n(64700),
    s = n(158954),
    d = n(397927),
    l = n(450510),
    c = n(350535),
    r = n(927421),
    o = n(985018),
    h = n(290844);
function u(t) {
    let { guildId: e, channel: u, keybind: k, transitionState: p, onClose: x } = t,
        y = a.useCallback(async () => {
            (0, l.sF)(l._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await x();
        }, [x]),
        _ = a.useCallback(async () => {
            await y(),
                (0, d.mMO)(async () => {
                    let { default: t } = await n.e("90237").then(n.bind(n, 29681));
                    return (e) => (0, i.jsx)(t, { ...e });
                });
        }, [y]),
        j = a.useMemo(
            () => [
                { variant: "secondary", text: o.intl.string(o.t.TJ0N99), onClick: _ },
                { text: o.intl.string(o.t.ZwRzIH), onClick: y, variant: "primary" },
            ],
            [_, y],
        );
    return (0, i.jsxs)(s.Modal, {
        onClose: y,
        actions: j,
        transitionState: p,
        title: o.intl.string(o.t.yJeV51),
        children: [
            (0, i.jsx)(d.Text, {
                variant: "text-md/normal",
                children: o.intl.format(o.t.fq3Swz, {
                    keybind: (0, c.dI)(k.shortcut, !0).split(" + "),
                    keybindHook: (t, e) =>
                        (0, i.jsx)(
                            "span",
                            {
                                className: h.EY,
                                children: (0, i.jsx)(d.e7I, { className: h.d4, shortcut: (0, c.dI)(k.shortcut, !1) }),
                            },
                            e,
                        ),
                    openSettingsHook: (t, e) => (0, i.jsx)(d.MzZ, { onClick: _, children: t }, e),
                }),
            }),
            (0, i.jsx)("div", {
                className: h.Rj,
                children: (0, i.jsx)(r.A, {
                    width: 372,
                    height: 316,
                    guildId: e,
                    channel: u,
                    interactive: !1,
                    keepOpen: !0,
                    onClose: () => {},
                    analyticsSource: "education modal",
                }),
            }),
        ],
    });
}
