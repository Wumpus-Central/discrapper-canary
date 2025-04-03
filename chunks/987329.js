n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(906732),
    o = n(408534),
    a = n(522651),
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
                children: (0, r.jsx)(o.Z, {
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
                onClick: (e) => {
                    (0, a.v)(h, a.d.MORE), n(e);
                },
                label: p.NW.string(p.t.PdRCRk),
                iconComponent: i.xhG,
                color: 'primaryDark',
                isActive: l
            });
        }
    });
};
