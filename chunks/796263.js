n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(139021);
function a(e) {
    let { text: t, icon: n, onClick: a, disabled: o, color: s = i.zxk.Colors.PRIMARY, submitting: c } = e;
    return (0, r.jsxs)(i.zxk, {
        look: i.zxk.Looks.FILLED,
        size: i.zxk.Sizes.SMALL,
        color: s,
        onClick: a,
        innerClassName: l.actionButton,
        submitting: c,
        disabled: o,
        children: [
            (0, r.jsx)(n, {
                size: 'custom',
                color: 'currentColor',
                width: 16,
                height: 16
            }),
            t
        ]
    });
}
