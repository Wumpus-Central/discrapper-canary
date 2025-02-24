n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(408534),
    o = n(795318),
    a = n(390322),
    s = n(871499),
    c = n(354459),
    u = n(388032);
let d = (e) => {
    let { channel: t, remoteMode: n = !1 } = e;
    return (0, r.jsx)(i.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(a.Z, {
                children: (0, r.jsx)(l.Z, {
                    onClose: i,
                    channel: t,
                    remoteMode: n,
                    onInteraction: (0, o.u)('MoreSettingsMenu', 'CenterControlTray', { entrypoint: c.A5.THREE_DOT })
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
            return (0, r.jsx)(s.d, {
                onClick: n,
                label: u.NW.string(u.t.PdRCRk),
                iconComponent: i.xhG,
                color: 'primaryDark',
                isActive: l
            });
        }
    });
};
