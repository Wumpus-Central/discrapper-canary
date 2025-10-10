n.d(t, { Z: () => u });
var l = n(951288),
    i = n(647438),
    s = n(780384),
    r = n(755721),
    a = n(481060),
    o = n(388032);
function u(e) {
    let { onConfirm: t, onDismiss: n, theme: u } = e;
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsx)(a.zxk, {
                variant: "primary",
                text: o.intl.string(o.t.pz1lRE),
                onClick: t,
            }),
            (0, l.jsx)(r.zx, {
                look: r.zx.Looks.LINK,
                color: (0, s.ap)(u) ? r.zx.Colors.PRIMARY : r.zx.Colors.WHITE,
                onClick: n,
                children: o.intl.string(o.t["ETE/oK"]),
            }),
        ],
    });
}
