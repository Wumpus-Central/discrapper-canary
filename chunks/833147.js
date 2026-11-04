var t = r(477900);
r(582128);
var n = r(536246),
    o = r(358415),
    s = r(355361);
r.d(
    a,
    {},
    {
        A: function (e) {
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
        },
    },
);
