"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(342494),
    l = n(985018),
    a = n(374313);
function r(e) {
    let { onDismiss: t, onCTAClick: n, targetElementRef: r } = e;
    return (0, i.jsx)(s.AM, {
        actions: [{ text: l.intl.string(l.t["8+TMEJ"]), variant: "primary", onClick: n }],
        body: l.intl.string(l.t.tP7w6c),
        caretConfig: { align: "start" },
        graphic: { type: "image", src: a.A },
        onRequestClose: t,
        position: "bottom",
        size: "lg",
        targetElementRef: r,
        title: l.intl.string(l.t.y0cRrO),
    });
}
