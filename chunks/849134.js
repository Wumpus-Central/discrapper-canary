"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(342494),
    r = n(486318),
    a = n(985018),
    o = n(549724),
    c = n(585048);
function d(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: d,
        onActionClick: u,
        onActionMouseDown: h,
        position: A = "right",
        align: m = "top",
        caretConfig: p = { align: "start" },
        skuImageDetails: g,
        title: _,
        body: f,
        overlayImageUrl: x,
    } = e;
    s.useEffect(() => {
        n?.();
    }, [n]);
    let C = s.useMemo(
        () =>
            g?.imageUrl == null
                ? { type: "image", src: c.A, aspectRatio: "6/4" }
                : (0, r.e)({
                      imageUrl: g?.imageUrl,
                      backgroundImageUrl: g?.backgroundImageUrl,
                      altText: a.intl.string(a.t["ulQB+t"]),
                      overlayImageUrl: x,
                      customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                  }),
        [g?.imageUrl, g?.backgroundImageUrl, x],
    );
    return (0, i.jsx)(l.AM, {
        size: "lg",
        shouldShow: !0,
        position: A,
        caretConfig: p,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: m,
        badge: { type: "new", variant: "default" },
        onRequestClose: d,
        actions: [{ text: a.intl.string(a.t.RzWDqY), variant: "primary", onClick: u, onMouseDown: h }],
        targetElementRef: t,
        title: _ ?? a.intl.string(a.t.Ylu2JM),
        body: f ?? a.intl.string(a.t.vgylLQ),
        graphic: C,
    });
}
