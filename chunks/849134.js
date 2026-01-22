n.d(t, {
    A: () => u,
});
var r = n(627968),
    l = n(64700),
    i = n(342494),
    a = n(486318),
    s = n(985018),
    o = n(549724),
    c = n(585048);

function u(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: u,
        onActionClick: d,
        onActionMouseDown: f,
        position: p = "right",
        align: h = "top",
        caretConfig: b = {
            align: "start",
        },
        skuImageDetails: g,
        title: m,
        body: A,
    } = e;
    l.useEffect(() => {
        null == n || n();
    }, [n]);
    let y = l.useMemo(
        () =>
            (null == g ? void 0 : g.imageUrl) == null
                ? {
                      type: "image",
                      src: c.A,
                      aspectRatio: "6/4",
                  }
                : (0, a.e)({
                      imageUrl: null == g ? void 0 : g.imageUrl,
                      backgroundImageUrl: null == g ? void 0 : g.backgroundImageUrl,
                      altText: s.intl.string(s.t["ulQB+t"]),
                      customClassNames: {
                          containerClassName: o.z,
                          foregroundImageClassName: o._,
                      },
                  }),
        [null == g ? void 0 : g.imageUrl, null == g ? void 0 : g.backgroundImageUrl],
    );
    return (0, r.jsx)(i.AM, {
        size: "lg",
        shouldShow: !0,
        position: p,
        caretConfig: b,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: h,
        badge: {
            type: "new",
            variant: "default",
        },
        onRequestClose: u,
        actions: [
            {
                text: s.intl.string(s.t.RzWDqY),
                variant: "primary",
                onClick: d,
                onMouseDown: f,
            },
        ],
        targetElementRef: t,
        title: null != m ? m : s.intl.string(s.t.Ylu2JM),
        body: null != A ? A : s.intl.string(s.t.vgylLQ),
        graphic: y,
    });
}
