i.d(n, {
    c: () => a,
    v: () => d
});
var t = i(200651);
i(192379);
var l = i(481060),
    o = i(493683),
    s = i(475413),
    r = i(388032);
function a(e) {
    let { userId: n, onClose: i, ...a } = e;
    return (0, t.jsx)(s.tG, {
        action: 'SEND_MESSAGE',
        icon: l.kBi,
        text: r.intl.string(r.t.zROXER),
        onClick: () => {
            o.Z.openPrivateChannel(n), null == i || i();
        },
        ...a
    });
}
function d(e) {
    let { userId: n, onClose: i, ...a } = e;
    return (0, t.jsx)(s.ef, {
        action: 'SEND_MESSAGE',
        icon: l.kBi,
        tooltipText: r.intl.string(r.t.zROXER),
        onClick: () => {
            o.Z.openPrivateChannel(n), null == i || i();
        },
        ...a
    });
}
