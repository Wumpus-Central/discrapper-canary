"use strict";
n.d(t, { C: () => h, D: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(116833),
    a = n(342494),
    r = n(522055),
    o = n(294726),
    c = n(985018),
    d = n(66883);
function u(e) {
    let { title: t, body: n, ctaText: o, runningGameId: c, targetElementRef: u, onClick: h, onClose: A } = e,
        p = (0, s.bG)([r.A], () => null != c && r.A.getGlobalCatalogGame(c)?.can_market === !0, [c]);
    return (0, i.jsx)(a.AM, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            p && null != c
                ? {
                      type: "dynamic",
                      component: l.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: c },
                      aspectRatio: "6/4",
                  }
                : { type: "image", src: d.A, aspectRatio: "6/4" },
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
        title: c.intl.formatToPlainString(o.default.lKzVNu, { gameName: t }),
        body: c.intl.string(o.default.qqjm8O),
        ctaText: c.intl.string(o.default["eJg+Zm"]),
        ...n,
    });
}
function A(e) {
    let { gameName: t, ...n } = e;
    return (0, i.jsx)(u, {
        title: c.intl.formatToPlainString(o.default.lwwiHE, { gameName: t }),
        body: c.intl.string(o.default.B33GXN),
        ctaText: c.intl.string(o.default["968/QC"]),
        ...n,
    });
}
