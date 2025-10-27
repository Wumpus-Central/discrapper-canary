n.d(t, { Z: () => d });
var i = n(951288),
    l = n(647438),
    s = n(780384),
    r = n(755721),
    a = n(481060),
    o = n(388032);
function d(e) {
    let { onConfirm: t, onDismiss: n, theme: d } = e;
    return (0, i.jsxs)(l.Fragment, {
        children: [
            (0, i.jsx)(a.Button, {
                variant: "primary",
                text: o.intl.string(o.t.pz1lRG),
                onClick: t,
            }),
            (0, i.jsx)(r.zx, {
                look: r.zx.Looks.LINK,
                color: (0, s.ap)(d) ? r.zx.Colors.PRIMARY : r.zx.Colors.WHITE,
                onClick: n,
                children: o.intl.string(o.t["ETE/oC"]),
            }),
        ],
    });
}
