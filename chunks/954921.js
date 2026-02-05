"use strict";
n.d(t, { L: () => o, Te: () => s });
var r = n(627968);
n(64700);
var i = n(397927);
n(515718);
var a = n(398094);
function s(e) {
    return "number" != typeof e ? (0, i.FT9)(e) * a.Xq : e * a.Xq;
}
let o = (e) => {
    let { analyticsLocations: t, initialSelectedDecoration: a, guild: s, onClose: o } = e;
    (0, i.mMO)(async () => {
        let { default: e } = await n.e("68406").then(n.bind(n, 130453));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                onCloseModal: n.onClose,
                onClose: o,
                analyticsLocations: t,
                initialSelectedDecoration: a,
                guild: s,
            });
    }, {});
};
