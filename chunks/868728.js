n.d(t, { Z: () => o });
var l = n(200651),
    i = n(192379),
    s = n(780384),
    a = n(481060),
    r = n(388032);
function o(e) {
    let { onConfirm: t, onDismiss: n, theme: o } = e;
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsx)(a.zxk, {
                onClick: t,
                children: r.intl.string(r.t.pz1lRE)
            }),
            (0, l.jsx)(a.zxk, {
                look: a.zxk.Looks.LINK,
                color: (0, s.ap)(o) ? a.zxk.Colors.PRIMARY : a.zxk.Colors.WHITE,
                onClick: n,
                children: r.intl.string(r.t['ETE/oK'])
            })
        ]
    });
}
