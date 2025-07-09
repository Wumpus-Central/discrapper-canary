n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921944),
    a = n(388032),
    l = n(619169);
function o(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsxs)(r.P3F, {
        className: l.container,
        onClick: () => {
            t(s.L.USER_DISMISS);
        },
        children: [
            (0, i.jsx)(r.X6q, {
                color: 'always-white',
                variant: 'heading-sm/semibold',
                children: a.intl.string(a.t.ALB9np)
            }),
            (0, i.jsx)(r.Text, {
                color: 'always-white',
                variant: 'text-xs/normal',
                children: a.intl.string(a.t.rYAs7O)
            }),
            (0, i.jsx)('div', { className: l.pointer })
        ]
    });
}
function c(e) {
    let { children: t, markAsDismissed: n, targetElementRef: a } = e;
    return (0, i.jsx)(r.yRy, {
        targetElementRef: a,
        onRequestClose: () => n(s.L.INDIRECT_ACTION),
        position: 'top',
        align: 'left',
        shouldShow: !0,
        animation: r.yRy.Animation.TRANSLATE,
        renderPopout: () => (0, i.jsx)(o, { markAsDismissed: n }),
        children: t
    });
}
