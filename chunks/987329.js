n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(408534),
    o = n(390322),
    a = n(871499),
    s = n(388032);
let c = (e) => {
    let { channel: t, remoteMode: n = !1 } = e;
    return (0, r.jsx)(i.yRy, {
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(o.Z, {
                children: (0, r.jsx)(l.Z, {
                    onClose: i,
                    channel: t,
                    remoteMode: n
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
            return (0, r.jsx)(a.d, {
                onClick: n,
                label: s.NW.string(s.t.PdRCRk),
                iconComponent: i.xhG,
                color: 'primaryDark',
                isActive: l
            });
        }
    });
};
