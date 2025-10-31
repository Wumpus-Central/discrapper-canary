n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(28664),
    l = n(481060);
function a(e) {
    let { text: t, icon: n, onClick: a, disabled: o, submitting: s } = e;
    return (0, r.jsx)(i.u, {
        __unsupportedReactNodeAsText: null != t ? t : void 0,
        children: (0, r.jsx)(l.hU, {
            icon: n,
            variant: "secondary",
            onClick: a,
            disabled: o,
            loading: s,
            "aria-label": t,
            size: "sm",
        }),
    });
}
