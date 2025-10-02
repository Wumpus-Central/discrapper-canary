n.d(t, { L: () => d });
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(507274),
    s = n(930295),
    l = n(231338),
    c = n(772425);
let u = l.Vq;
function d(e) {
    let { children: t, height: n, width: l, targetElementRef: d, isOpen: f, onRequestClose: _, dialog: p = !0 } = e,
        h = i.useRef(null);
    function m() {
        let e = (0, r.jsx)("div", {
            ref: h,
            className: c.dropdownContainer,
            style: {
                width: l,
                height: n,
            },
            children: (0, r.jsx)("div", {
                className: c.dropdown,
                children: (0, r.jsx)(a.w0Z, {
                    className: c.scroller,
                    children: t,
                }),
            }),
        });
        return p ? (0, r.jsx)(o.V, { children: e }) : e;
    }
    return (0, r.jsx)(s.H, {
        targetElementRef: d,
        shouldShow: f,
        position: "bottom",
        align: "left",
        autoInvert: !0,
        scrollBehavior: "close",
        renderPopout: m,
        onRequestClose: _,
        children: u,
    });
}
