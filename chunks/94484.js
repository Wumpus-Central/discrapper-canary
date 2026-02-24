"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(342494),
    r = n(985018),
    a = n(282222);
function o(e) {
    let {
        targetElementRef: t,
        onRender: n,
        onRequestClose: o,
        onActionClick: c,
        onActionMouseDown: d,
        position: u = "right",
        align: h = "top",
        caretConfig: A = { align: "start" },
        applicationName: p,
    } = e;
    s.useEffect(() => {
        n?.();
    }, [n]);
    let g = { type: "image", src: a.A, aspectRatio: "16/9" };
    return (0, i.jsx)(l.AM, {
        size: "lg",
        shouldShow: !0,
        position: u,
        caretConfig: A,
        gradientColor: "purple",
        alignmentStrategy: "edge",
        align: h,
        onRequestClose: o,
        actions: [{ text: r.intl.string(r.t.RzWDqY), variant: "primary", onClick: c, onMouseDown: d }],
        targetElementRef: t,
        title: r.intl.format(r.t.TpuAkN, { applicationName: p }),
        body: r.intl.format(r.t.TlwPZw, { applicationName: p }),
        graphic: g,
    });
}
