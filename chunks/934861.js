t.d(n, {
    c: () => a,
    v: () => c
});
var i = t(200651);
t(192379);
var l = t(481060),
    o = t(493683),
    s = t(475413),
    r = t(388032);
function a(e) {
    let { userId: n, onClose: t, ...a } = e;
    return (0, i.jsx)(s.tG, {
        action: 'SEND_MESSAGE',
        icon: l.kBi,
        text: r.intl.string(r.t.zROXER),
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...a
    });
}
function c(e) {
    let { userId: n, onClose: t, ...a } = e;
    return (0, i.jsx)(s.ef, {
        action: 'SEND_MESSAGE',
        icon: l.kBi,
        tooltipText: r.intl.string(r.t.zROXER),
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...a
    });
}
