r.d(a, { A: () => u });
var t = r(477900);
r(582128);
var n = r(536246),
    o = r(156954),
    s = r(355361);
function u(e) {
    let {
        application: a,
        queryParams: r,
        url: u,
        contextSource: c,
        onIframeMount: l,
        onIframeUnmount: i,
        onGuestReload: d,
        transparent: m = !1,
    } = e;
    return (0, t.jsx)(o.oI, {
        allowPopups: (0, n.b)(a),
        referrerPolicy: "origin",
        url: u,
        onIframeMount: l,
        onIframeUnmount: i,
        onGuestReload: d,
        contextSource: c,
        queryParams: r,
        className: s.p,
        style: m ? o.cT : void 0,
        transparentWhileLoading: m,
        shouldRefocus: !1,
    });
}
