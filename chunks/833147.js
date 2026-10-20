r.d(e, { A: () => c });
var n = r(477900);
r(582128);
var t = r(536246),
    o = r(838265),
    u = r(355361);
let s = { background: "transparent", colorScheme: "normal" };
function c(a) {
    let {
        application: e,
        queryParams: r,
        url: c,
        contextSource: l,
        onIframeMount: d,
        onIframeUnmount: i,
        onGuestReload: m,
        transparent: p = !1,
    } = a;
    return (0, n.jsx)(o.o, {
        allowPopups: (0, t.b)(e),
        referrerPolicy: "origin",
        url: c,
        onIframeMount: d,
        onIframeUnmount: i,
        onGuestReload: m,
        contextSource: l,
        queryParams: r,
        className: u.p,
        style: p ? s : void 0,
        transparentWhileLoading: p,
        shouldRefocus: !1,
    });
}
