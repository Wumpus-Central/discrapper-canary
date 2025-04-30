n.d(t, { Z: () => o });
var l = n(200651),
    i = n(192379),
    r = n(780384),
    s = n(481060),
    a = n(388032);
function o(e) {
    let { onConfirm: t, onDismiss: n, theme: o } = e;
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsx)(s.zxk, {
                onClick: t,
                children: a.intl.string(a.t.pz1lRE)
            }),
            (0, l.jsx)(s.zxk, {
                look: s.zxk.Looks.LINK,
                color: (0, r.ap)(o) ? s.zxk.Colors.PRIMARY : s.zxk.Colors.WHITE,
                onClick: n,
                children: a.intl.string(a.t['ETE/oK'])
            })
        ]
    });
}
