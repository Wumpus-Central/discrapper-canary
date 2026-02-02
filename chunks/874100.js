n.d(t, {
    A: () => c,
});
var r = n(627968),
    l = n(64700),
    i = n(342494),
    s = n(985018),
    a = n(996150),
    o = n(393007);

function c(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: c,
        onActionClick: u,
        onActionMouseDown: d,
        position: p = "right",
        align: h = "top",
        caretConfig: g = {
            align: "start",
        },
    } = e;
    l.useEffect(() => {
        null == n || n();
    }, [n]);
    let f = {
        type: "image",
        src: o.A,
        aspectRatio: "6/4",
    };
    return (0, r.jsx)(i.AM, {
        size: "lg",
        shouldShow: !0,
        position: p,
        caretConfig: g,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: h,
        badge: {
            type: "new",
            variant: "default",
        },
        onRequestClose: c,
        actions: [
            {
                text: s.intl.string(s.t.RzWDqY),
                variant: "primary",
                onClick: u,
                onMouseDown: d,
            },
        ],
        targetElementRef: t,
        title: (0, r.jsx)("span", {
            className: a.V,
            children: s.intl.format(s.t.tSDb6p, {}),
        }),
        body: s.intl.string(s.t.wLwMmO),
        graphic: f,
    });
}
