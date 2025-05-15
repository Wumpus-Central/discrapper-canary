n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(906732),
    a = n(408534),
    o = n(522651),
    s = n(795318),
    c = n(390322),
    u = n(871499),
    d = n(354459),
    p = n(388032);
let h = (e) => {
    let { channel: t, remoteMode: n = !1 } = e,
        { parentAnalyticsLocation: h } = (0, l.ZP)();
    return (0, r.jsx)(i.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(c.Z, {
                children: (0, r.jsx)(a.Z, {
                    onClose: i,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, s.u)('MoreSettingsMenu', h, { entrypoint: d.A5.THREE_DOT })
                })
            });
        },
        align: 'right',
        position: 'top',
        animation: i.yRy.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: l } = t;
            return (0, r.jsx)(u.d, {
                isTrayButton: !0,
                onClick: (e) => {
                    (0, o.v)(h, o.d.MORE), n(e);
                },
                label: p.intl.string(p.t.PdRCRk),
                iconComponent: i.xhG,
                color: 'primaryDark',
                isActive: l
            });
        }
    });
};
