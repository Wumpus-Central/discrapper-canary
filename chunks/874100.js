"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(342494),
    r = n(985018),
    a = n(996150),
    o = n(393007);
function c(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: c,
        onActionClick: d,
        onActionMouseDown: u,
        position: h = "right",
        align: A = "top",
        caretConfig: p = { align: "start" },
    } = e;
    s.useEffect(() => {
        n?.();
    }, [n]);
    let g = { type: "image", src: o.A, aspectRatio: "6/4" };
    return (0, i.jsx)(l.AM, {
        size: "lg",
        shouldShow: !0,
        position: h,
        caretConfig: p,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: A,
        badge: { type: "new", variant: "default" },
        onRequestClose: c,
        actions: [{ text: r.intl.string(r.t.RzWDqY), variant: "primary", onClick: d, onMouseDown: u }],
        targetElementRef: t,
        title: (0, i.jsx)("span", { className: a.V, children: r.intl.format(r.t.tSDb6p, {}) }),
        body: r.intl.string(r.t.wLwMmO),
        graphic: g,
    });
}
