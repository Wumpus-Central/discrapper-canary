n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(342494),
    a = n(486318),
    r = n(985018),
    o = n(762683),
    c = n(585048);
function d(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: d,
        onActionClick: u,
        onActionMouseDown: h,
        position: A = "right",
        align: _ = "top",
        caretConfig: m = { align: "start" },
        skuImageDetails: g,
        title: p,
        body: f,
        overlayImageUrl: x,
    } = e;
    l.useEffect(() => {
        n?.();
    }, [n]);
    let E = l.useMemo(
        () =>
            g?.imageUrl == null
                ? { type: "image", src: c.A, aspectRatio: "6/4" }
                : (0, a.e)({
                      imageUrl: g?.imageUrl,
                      backgroundImageUrl: g?.backgroundImageUrl,
                      altText: r.intl.string(r.t["ulQB+t"]),
                      overlayImageUrl: x,
                      customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                  }),
        [g?.imageUrl, g?.backgroundImageUrl, x],
    );
    return (0, i.jsx)(s.AM, {
        size: "lg",
        shouldShow: !0,
        position: A,
        caretConfig: m,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: _,
        badge: { type: "new", variant: "default" },
        onRequestClose: d,
        actions: [{ text: r.intl.string(r.t.RzWDqY), variant: "primary", onClick: u, onMouseDown: h }],
        targetElementRef: t,
        title: p ?? r.intl.string(r.t.Ylu2JM),
        body: f ?? r.intl.string(r.t.vgylLQ),
        graphic: E,
    });
}
