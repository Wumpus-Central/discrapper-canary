n.d(t, { Z: () => u });
var l = n(255367),
    i = n(73800),
    r = n(780384),
    s = n(755721),
    a = n(481060),
    o = n(388032);
function u(e) {
    let { onConfirm: t, onDismiss: n, theme: u } = e;
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsx)(a.zxk, {
                variant: 'primary',
                text: o.intl.string(o.t.pz1lRE),
                onClick: t
            }),
            (0, l.jsx)(s.zx, {
                look: s.zx.Looks.LINK,
                color: (0, r.ap)(u) ? s.zx.Colors.PRIMARY : s.zx.Colors.WHITE,
                onClick: n,
                children: o.intl.string(o.t['ETE/oK'])
            })
        ]
    });
}
