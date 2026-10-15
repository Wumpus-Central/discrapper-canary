a.d(t, { A: () => c });
var s = a(477900),
    r = a(582128),
    n = a(206248),
    i = a(43105),
    o = a(486318),
    l = a(105292),
    g = a(848834);
function c(e) {
    let {
        targetElementRef: t,
        onRender: a,
        onRequestClose: c,
        onActionClick: u,
        onActionMouseDown: d,
        position: p = "right",
        align: m = "top",
        caretConfig: h = { align: "start" },
        graphicSource: y,
        title: C,
        body: b,
        actionLabel: f,
    } = e;
    r.useEffect(() => {
        a?.();
    }, [a]);
    let k = r.useMemo(() => {
            switch (y.type) {
                case "asset":
                    return { type: "image", src: y.src, aspectRatio: "6/4" };
                case "video":
                    return;
                case "sku":
                    return (0, o.e)({
                        imageUrl: y.imageUrl,
                        backgroundImageUrl: y.backgroundImageUrl,
                        altText: l.intl.string(l.t["ulQB+t"]),
                        customClassNames: { containerClassName: g.z, foregroundImageClassName: g._ },
                    });
            }
        }, [y]),
        w = { text: f ?? l.intl.string(l.t.RzWDqY), variant: "primary", onClick: u, onMouseDown: d };
    return "video" === y.type
        ? (0, s.jsx)(n.H, {
              shouldShow: !0,
              position: p,
              alignmentStrategy: "edge",
              align: m,
              caretConfig: h,
              badge: { type: "new", variant: "secondary" },
              onRequestClose: c,
              action: w,
              targetElementRef: t,
              title: C,
              body: b,
              assetUrl: y.src,
          })
        : (0, s.jsx)(i.A, {
              size: "lg",
              shouldShow: !0,
              position: p,
              caretConfig: h,
              gradientColor: "purple",
              alignmentStrategy: "edge",
              align: m,
              badge: { type: "new", variant: "secondary" },
              onRequestClose: c,
              actions: [w],
              targetElementRef: t,
              title: C,
              body: b,
              graphic: k,
          });
}
