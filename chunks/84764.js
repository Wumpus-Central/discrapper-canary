n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(43105),
    r = n(486318),
    a = n(985018),
    o = n(469611);
function d(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: d,
        onActionClick: c,
        onActionMouseDown: u,
        position: h = "right",
        align: A = "top",
        caretConfig: _ = { align: "start" },
        skuImageDetails: g,
        title: m,
        body: p,
        overlayImageUrl: f,
    } = e;
    l.useEffect(() => {
        n?.();
    }, [n]);
    let E = l.useMemo(
        () =>
            g?.imageUrl == null
                ? {
                      type: "image",
                      src: "https://cdn.discordapp.com/assets/content/e0c51f00bb5a665b9048ff1b45d37dc0009e7a893bf08c2212471b44c9818d41.png",
                      aspectRatio: "6/4",
                  }
                : (0, r.e)({
                      imageUrl: g?.imageUrl,
                      backgroundImageUrl: g?.backgroundImageUrl,
                      altText: a.intl.string(a.t["ulQB+t"]),
                      overlayImageUrl: f,
                      customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                  }),
        [g?.imageUrl, g?.backgroundImageUrl, f],
    );
    return (0, i.jsx)(s.A, {
        size: "lg",
        shouldShow: !0,
        position: h,
        caretConfig: _,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: A,
        badge: { type: "new", variant: "default" },
        onRequestClose: d,
        actions: [{ text: a.intl.string(a.t.RzWDqY), variant: "primary", onClick: c, onMouseDown: u }],
        targetElementRef: t,
        title: m ?? a.intl.string(a.t.Ylu2JM),
        body: p ?? a.intl.string(a.t.vgylLQ),
        graphic: E,
    });
}
