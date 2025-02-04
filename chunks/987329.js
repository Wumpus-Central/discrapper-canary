n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(408534),
    r = n(390322),
    s = n(871499),
    o = n(388032);
let c = (e) => {
    let { channel: t } = e;
    return (0, i.jsx)(l.yRy, {
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(r.Z, {
                children: (0, i.jsx)(a.Z, {
                    onClose: n,
                    channel: t
                })
            });
        },
        align: 'right',
        position: 'top',
        animation: l.yRy.Animation.FADE,
        spacing: 16,
        children: (e, t) => {
            let { onClick: n } = e,
                { isShown: a } = t;
            return (0, i.jsx)(s.d, {
                onClick: n,
                label: o.intl.string(o.t.PdRCRk),
                iconComponent: l.xhG,
                color: 'primaryDark',
                isActive: a
            });
        }
    });
};
