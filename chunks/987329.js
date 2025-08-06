n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(906732),
    s = n(408534),
    l = n(522651),
    c = n(795318),
    u = n(390322),
    d = n(871499),
    f = n(354459),
    _ = n(388032);
let p = (e) => {
    let { channel: t, remoteMode: n = !1 } = e,
        { parentAnalyticsLocation: p } = (0, a.ZP)(),
        h = i.useRef(null);
    return (0, r.jsx)(o.yRy, {
        targetElementRef: h,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(u.Z, {
                children: (0, r.jsx)(s.Z, {
                    onClose: i,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, c.u)("MoreSettingsMenu", p, { entrypoint: f.A5.THREE_DOT }),
                }),
            });
        },
        align: "right",
        position: "top",
        animation: o.yRy.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: i } = t;
            return (0, r.jsx)(d.d, {
                ref: h,
                isTrayButton: !0,
                onClick: (e) => {
                    (0, l.v)(p, l.d.MORE), n(e);
                },
                label: _.intl.string(_.t.PdRCRk),
                iconComponent: o.xhG,
                color: "primaryDark",
                isActive: i,
            });
        },
    });
};
