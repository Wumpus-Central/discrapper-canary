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
        position: _ = "right",
        align: h = "top",
        caretConfig: p = { align: "start" },
        graphicSource: g,
        title: m,
        body: A,
        actionLabel: f,
    } = e;
    l.useEffect(() => {
        n?.();
    }, [n]);
    let E = l.useMemo(() => {
        if (null == g)
            return {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/e0c51f00bb5a665b9048ff1b45d37dc0009e7a893bf08c2212471b44c9818d41.png",
                aspectRatio: "6/4",
            };
        switch (g.type) {
            case "asset":
                return { type: "image", src: g.src, aspectRatio: "6/4" };
            case "sku":
                return (0, r.e)({
                    imageUrl: g.imageUrl,
                    backgroundImageUrl: g.backgroundImageUrl,
                    altText: a.intl.string(a.t["ulQB+t"]),
                    customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                });
        }
    }, [g]);
    return (0, i.jsx)(s.A, {
        size: "lg",
        shouldShow: !0,
        position: _,
        caretConfig: p,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: h,
        badge: { type: "new", variant: "default" },
        onRequestClose: d,
        actions: [{ text: f ?? a.intl.string(a.t.RzWDqY), variant: "primary", onClick: c, onMouseDown: u }],
        targetElementRef: t,
        title: m ?? a.intl.string(a.t.Ylu2JM),
        body: A ?? a.intl.string(a.t.vgylLQ),
        graphic: E,
    });
}
