n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(342494),
    a = n(486318),
    r = n(985018),
    o = n(549724),
    d = n(585048);
function c(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: c,
        onActionClick: u,
        onActionMouseDown: h,
        position: A = "right",
        align: g = "top",
        caretConfig: m = { align: "start" },
        skuImageDetails: p,
        title: _,
        body: x,
    } = e;
    l.useEffect(() => {
        n?.();
    }, [n]);
    let f = l.useMemo(
        () =>
            p?.imageUrl == null
                ? { type: "image", src: d.A, aspectRatio: "6/4" }
                : (0, a.e)({
                      imageUrl: p?.imageUrl,
                      backgroundImageUrl: p?.backgroundImageUrl,
                      altText: r.intl.string(r.t["ulQB+t"]),
                      customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                  }),
        [p?.imageUrl, p?.backgroundImageUrl],
    );
    return (0, i.jsx)(s.AM, {
        size: "lg",
        shouldShow: !0,
        position: A,
        caretConfig: m,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: g,
        badge: { type: "new", variant: "default" },
        onRequestClose: c,
        actions: [{ text: r.intl.string(r.t.RzWDqY), variant: "primary", onClick: u, onMouseDown: h }],
        targetElementRef: t,
        title: _ ?? r.intl.string(r.t.Ylu2JM),
        body: x ?? r.intl.string(r.t.vgylLQ),
        graphic: f,
    });
}
