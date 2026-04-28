n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    s = n(43105),
    r = n(486318),
    a = n(985018),
    o = n(469611);
function u(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: u,
        onActionClick: d,
        onActionMouseDown: c,
        position: h = "right",
        align: A = "top",
        caretConfig: m = { align: "start" },
        graphicSource: g,
        title: p,
        body: f,
        actionLabel: E,
    } = e;
    i.useEffect(() => {
        n?.();
    }, [n]);
    let I = i.useMemo(() => {
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
    return (0, l.jsx)(s.A, {
        size: "lg",
        shouldShow: !0,
        position: h,
        caretConfig: m,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: A,
        badge: { type: "new", variant: "default" },
        onRequestClose: u,
        actions: [{ text: E ?? a.intl.string(a.t.RzWDqY), variant: "primary", onClick: d, onMouseDown: c }],
        targetElementRef: t,
        title: p,
        body: f,
        graphic: I,
    });
}
