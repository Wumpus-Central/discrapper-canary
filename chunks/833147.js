r.d(e, { A: () => s });
var n = r(477900);
r(582128);
var t = r(536246),
    o = r(156954),
    u = r(355361);
function s(a) {
    let {
        application: e,
        queryParams: r,
        url: s,
        contextSource: c,
        onIframeMount: l,
        onIframeUnmount: i,
        onGuestReload: d,
        transparent: p = !1,
    } = a;
    return (0, n.jsx)(o.oI, {
        allowPopups: (0, t.b)(e),
        referrerPolicy: "origin",
        url: s,
        onIframeMount: l,
        onIframeUnmount: i,
        onGuestReload: d,
        contextSource: c,
        queryParams: r,
        className: u.p,
        style: p ? o.cT : void 0,
        transparentWhileLoading: p,
        shouldRefocus: !1,
    });
}
