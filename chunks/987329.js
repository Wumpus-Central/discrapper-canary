n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(906732),
    o = n(408534),
    s = n(522651),
    c = n(795318),
    u = n(390322),
    d = n(871499),
    p = n(354459),
    f = n(388032);
let h = (e) => {
    let { channel: t, remoteMode: n = !1 } = e,
        { parentAnalyticsLocation: h } = (0, a.ZP)(),
        m = i.useRef(null);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: m,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.Z, {
                children: (0, r.jsx)(o.Z, {
                    onClose: i,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, c.u)("MoreSettingsMenu", h, { entrypoint: p.A5.THREE_DOT }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: l.yRy.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(d.d, {
                ref: m,
                isTrayButton: !0,
                onClick: (e) => {
                    (0, s.v)(h, s.d.MORE), n(e);
                },
                label: f.intl.string(f.t.PdRCRg),
                iconComponent: l.xhG,
                color: "primaryDark",
                isActive: i,
            });
        },
    });
};
