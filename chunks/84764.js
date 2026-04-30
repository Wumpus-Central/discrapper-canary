"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    s = n(43105),
    a = n(486318),
    o = n(375708),
    l = n(469611);
function u(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: u,
        onActionClick: c,
        onActionMouseDown: d,
        position: _ = "right",
        align: f = "top",
        caretConfig: h = { align: "start" },
        graphicSource: p,
        title: E,
        body: m,
        actionLabel: g,
    } = e;
    r.useEffect(() => {
        n?.();
    }, [n]);
    let A = r.useMemo(() => {
        if (null == p)
            return {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/e0c51f00bb5a665b9048ff1b45d37dc0009e7a893bf08c2212471b44c9818d41.png",
                aspectRatio: "6/4",
            };
        switch (p.type) {
            case "asset":
                return { type: "image", src: p.src, aspectRatio: "6/4" };
            case "sku":
                return (0, a.e)({
                    imageUrl: p.imageUrl,
                    backgroundImageUrl: p.backgroundImageUrl,
                    altText: o.intl.string(o.t["ulQB+t"]),
                    customClassNames: { containerClassName: l.z, foregroundImageClassName: l._ },
                });
        }
    }, [p]);
    return (0, i.jsx)(s.A, {
        size: "lg",
        shouldShow: !0,
        position: _,
        caretConfig: h,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: f,
        badge: { type: "new", variant: "default" },
        onRequestClose: u,
        actions: [{ text: g ?? o.intl.string(o.t.RzWDqY), variant: "primary", onClick: c, onMouseDown: d }],
        targetElementRef: t,
        title: E,
        body: m,
        graphic: A,
    });
}
