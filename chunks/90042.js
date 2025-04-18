n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(921944),
    a = n(388032),
    l = n(619169);
function o(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsxs)(i.P3F, {
        className: l.container,
        onClick: () => {
            t(s.L.USER_DISMISS);
        },
        children: [
            (0, r.jsx)(i.X6q, {
                color: 'always-white',
                variant: 'heading-sm/semibold',
                children: a.NW.string(a.t.ALB9np)
            }),
            (0, r.jsx)(i.Text, {
                color: 'always-white',
                variant: 'text-xs/normal',
                children: a.NW.string(a.t.rYAs7O)
            }),
            (0, r.jsx)('div', { className: l.pointer })
        ]
    });
}
function c(e) {
    let { children: t, markAsDismissed: n } = e;
    return (0, r.jsx)(i.yRy, {
        onRequestClose: () => n(s.L.INDIRECT_ACTION),
        position: 'top',
        align: 'left',
        shouldShow: !0,
        animation: i.yRy.Animation.TRANSLATE,
        renderPopout: () => (0, r.jsx)(o, { markAsDismissed: n }),
        children: t
    });
}
