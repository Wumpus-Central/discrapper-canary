a.d(r, { A: () => s });
var t = a(477900),
    n = a(536246),
    o = a(597396),
    u = a(355361);
function s(e) {
    let {
        application: r,
        queryParams: a,
        url: s,
        contextSource: c,
        onIframeMount: i,
        onIframeUnmount: l,
        onGuestReload: m,
    } = e;
    return (0, t.jsx)(o.o, {
        allowPopups: (0, n.b)(r),
        referrerPolicy: "origin",
        url: s,
        onIframeMount: i,
        onIframeUnmount: l,
        onGuestReload: m,
        contextSource: c,
        queryParams: a,
        className: u.p,
        shouldRefocus: !1,
    });
}
