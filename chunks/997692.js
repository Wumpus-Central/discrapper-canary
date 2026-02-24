"use strict";
n.d(t, { C: () => c, D: () => d });
var i = n(627968);
n(64700);
var s = n(116833),
    l = n(342494),
    r = n(294726),
    a = n(985018);
function o(e) {
    let { title: t, body: n, ctaText: r, runningGameId: a, targetElementRef: o, onClick: c, onClose: d } = e;
    return (0, i.jsx)(l.AM, {
        size: "lg",
        title: t,
        body: n,
        graphic:
            null != a
                ? {
                      type: "dynamic",
                      component: s.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                      props: { gameId: a },
                      aspectRatio: "6/4",
                  }
                : void 0,
        actions: [{ text: r, variant: "primary", onClick: c }],
        targetElementRef: o,
        shouldShow: !0,
        position: "top",
        onRequestClose: d,
    });
}
function c(e) {
    let { gameName: t, ...n } = e;
    return (0, i.jsx)(o, {
        title: a.intl.formatToPlainString(r.default.lKzVNu, { gameName: t }),
        body: a.intl.string(r.default.qqjm8O),
        ctaText: a.intl.string(r.default["eJg+Zm"]),
        ...n,
    });
}
function d(e) {
    let { gameName: t, ...n } = e;
    return (0, i.jsx)(o, {
        title: a.intl.formatToPlainString(r.default.lwwiHE, { gameName: t }),
        body: a.intl.string(r.default.B33GXN),
        ctaText: a.intl.string(r.default["968/QC"]),
        ...n,
    });
}
