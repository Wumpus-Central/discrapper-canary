a.d(r, { A: () => c });
var t = a(477900);
a(582128);
var n = a(536246),
    o = a(597396),
    u = a(355361);
let s = { background: "transparent", colorScheme: "normal" };
function c(e) {
    let {
        application: r,
        queryParams: a,
        url: c,
        contextSource: l,
        onIframeMount: i,
        onIframeUnmount: d,
        onGuestReload: m,
        transparent: p = !1,
    } = e;
    return (0, t.jsx)(o.o, {
        allowPopups: (0, n.b)(r),
        referrerPolicy: "origin",
        url: c,
        onIframeMount: i,
        onIframeUnmount: d,
        onGuestReload: m,
        contextSource: l,
        queryParams: a,
        className: u.p,
        style: p ? s : void 0,
        transparentWhileLoading: p,
        shouldRefocus: !1,
    });
}
