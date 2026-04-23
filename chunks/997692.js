n.d(t, { C: () => h, D: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(116833),
    a = n(265486),
    r = n(522055),
    o = n(576709),
    d = n(985018),
    c = n(66883);
function u(e) {
    let { title: t, body: n, ctaText: o, runningGameId: d, targetElementRef: u, onClick: h, onClose: A } = e,
        _ = (0, l.bG)([r.A], () => null != d && r.A.getGlobalCatalogGame(d)?.can_market === !0, [d]);
    return (0, i.jsx)(a.A, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            _ && null != d
                ? {
                      type: "dynamic",
                      component: s.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: d },
                      aspectRatio: "6/4",
                  }
                : { type: "image", src: c.A, aspectRatio: "6/4" },
        actions: [{ text: o, variant: "primary", onClick: h }],
        targetElementRef: u,
        shouldShow: !0,
        position: "top",
        onRequestClose: A,
    });
}
function h(e) {
    let { gameName: t, ...n } = e;
    return (0, i.jsx)(u, {
        title: d.intl.formatToPlainString(o.default.lKzVNu, { gameName: t }),
        body: d.intl.string(o.default.qqjm8O),
        ctaText: d.intl.string(o.default["eJg+Zm"]),
        ...n,
    });
}
function A(e) {
    let { gameName: t, ...n } = e;
    return (0, i.jsx)(u, {
        title: d.intl.formatToPlainString(o.default.lwwiHE, { gameName: t }),
        body: d.intl.string(o.default.B33GXN),
        ctaText: d.intl.string(o.default["968/QC"]),
        ...n,
    });
}
