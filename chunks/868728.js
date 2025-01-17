n.d(t, {
    Z: function () {
        return o;
    }
});
var l = n(200651),
    i = n(192379),
    s = n(780384),
    r = n(481060),
    a = n(388032);
function o(e) {
    let { onConfirm: t, onDismiss: n, theme: o } = e;
    return (0, l.jsxs)(i.Fragment, {
        children: [
            (0, l.jsx)(r.Button, {
                onClick: t,
                children: a.intl.string(a.t.pz1lRE)
            }),
            (0, l.jsx)(r.Button, {
                look: r.Button.Looks.LINK,
                color: (0, s.ap)(o) ? r.Button.Colors.PRIMARY : r.Button.Colors.WHITE,
                onClick: n,
                children: a.intl.string(a.t['ETE/oK'])
            })
        ]
    });
}
