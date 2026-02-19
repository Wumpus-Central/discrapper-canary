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
        align: p = "top",
        caretConfig: g = { align: "start" },
        skuImageDetails: m,
        title: _,
        body: f,
    } = e;
    s.useEffect(() => {
        n?.();
    }, [n]);
    let x = s.useMemo(
        () =>
            m?.imageUrl == null
                ? { type: "image", src: c.A, aspectRatio: "6/4" }
                : (0, r.e)({
                      imageUrl: m?.imageUrl,
                      backgroundImageUrl: m?.backgroundImageUrl,
                      altText: a.intl.string(a.t["ulQB+t"]),
                      customClassNames: { containerClassName: o.z, foregroundImageClassName: o._ },
                  }),
        [m?.imageUrl, m?.backgroundImageUrl],
    );
    return (0, i.jsx)(l.AM, {
        size: "lg",
        shouldShow: !0,
        position: A,
        caretConfig: g,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: p,
        badge: { type: "new", variant: "default" },
        onRequestClose: d,
        actions: [{ text: a.intl.string(a.t.RzWDqY), variant: "primary", onClick: u, onMouseDown: h }],
        targetElementRef: t,
        title: _ ?? a.intl.string(a.t.Ylu2JM),
        body: f ?? a.intl.string(a.t.vgylLQ),
        graphic: x,
    });
}
