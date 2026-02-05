n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(342494),
    a = n(985018),
    r = n(996150),
    o = n(393007);
function d(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: d,
        onActionClick: c,
        onActionMouseDown: u,
        position: h = "right",
        align: A = "top",
        caretConfig: g = { align: "start" },
    } = e;
    l.useEffect(() => {
        n?.();
    }, [n]);
    let m = { type: "image", src: o.A, aspectRatio: "6/4" };
    return (0, i.jsx)(s.AM, {
        size: "lg",
        shouldShow: !0,
        position: h,
        caretConfig: g,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: A,
        badge: { type: "new", variant: "default" },
        onRequestClose: d,
        actions: [{ text: a.intl.string(a.t.RzWDqY), variant: "primary", onClick: c, onMouseDown: u }],
        targetElementRef: t,
        title: (0, i.jsx)("span", { className: r.V, children: a.intl.format(a.t.tSDb6p, {}) }),
        body: a.intl.string(a.t.wLwMmO),
        graphic: m,
    });
}
