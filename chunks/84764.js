n.d(t, { A: () => d });
var i = n(627968),
    a = n(64700),
    r = n(43105),
    s = n(486318),
    l = n(985018),
    o = n(469611);
function d(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: d,
        onActionClick: c,
        onActionMouseDown: _,
        position: E = "right",
        align: u = "top",
        caretConfig: A = { align: "start" },
        graphicSource: I,
        title: T,
        body: h,
        actionLabel: S,
    } = e;
    a.useEffect(() => {
        n?.();
    }, [n]);
    let N = a.useMemo(() => {
        if (null == I)
            return {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/e0c51f00bb5a665b9048ff1b45d37dc0009e7a893bf08c2212471b44c9818d41.png",
                aspectRatio: "6/4",
            };
        switch (I.type) {
            case "asset":
                return { type: "image", src: I.src, aspectRatio: "6/4" };
            case "sku":
                return (0, s.e)({
                    imageUrl: I.imageUrl,
                    backgroundImageUrl: I.backgroundImageUrl,
                    altText: l.intl.string(l.t["ulQB+t"]),
                    customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                });
        }
    }, [I]);
    return (0, i.jsx)(r.A, {
        size: "lg",
        shouldShow: !0,
        position: E,
        caretConfig: A,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: u,
        badge: { type: "new", variant: "default" },
        onRequestClose: d,
        actions: [{ text: S ?? l.intl.string(l.t.RzWDqY), variant: "primary", onClick: c, onMouseDown: _ }],
        targetElementRef: t,
        title: T,
        body: h,
        graphic: N,
    });
}
