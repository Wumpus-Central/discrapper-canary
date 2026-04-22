n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    s = n(265486),
    a = n(486318),
    r = n(985018),
    o = n(469611),
    d = n(585048);
function c(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: c,
        onActionClick: u,
        onActionMouseDown: h,
        position: A = "right",
        align: _ = "top",
        caretConfig: m = { align: "start" },
        skuImageDetails: g,
        title: p,
        body: f,
        overlayImageUrl: E,
    } = e;
    l.useEffect(() => {
        n?.();
    }, [n]);
    let x = l.useMemo(
        () =>
            g?.imageUrl == null
                ? { type: "image", src: d.A, aspectRatio: "6/4" }
                : (0, a.e)({
                      imageUrl: g?.imageUrl,
                      backgroundImageUrl: g?.backgroundImageUrl,
                      altText: r.intl.string(r.t["ulQB+t"]),
                      overlayImageUrl: E,
                      customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                  }),
        [g?.imageUrl, g?.backgroundImageUrl, E],
    );
    return (0, i.jsx)(s.A, {
        size: "lg",
        shouldShow: !0,
        position: A,
        caretConfig: m,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: _,
        badge: { type: "new", variant: "default" },
        onRequestClose: c,
        actions: [{ text: r.intl.string(r.t.RzWDqY), variant: "primary", onClick: u, onMouseDown: h }],
        targetElementRef: t,
        title: p ?? r.intl.string(r.t.Ylu2JM),
        body: f ?? r.intl.string(r.t.vgylLQ),
        graphic: x,
    });
}
