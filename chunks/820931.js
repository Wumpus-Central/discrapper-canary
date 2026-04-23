r.d(t, { A: () => s });
var n = r(627968);
r(64700);
var i = r(311907),
    a = r(412780),
    o = r(828904),
    l = r(985018);
let s = i.Ay.connectStores([a.Ay], (e) => {
    let { context: t, index: r } = e,
        n = a.Ay.getAllStats(t)[r];
    return { outbound: null != n ? n.rtp.outbound : null };
})(function (e) {
    let { outbound: t, context: r, index: i } = e;
    return (0, n.jsx)(o.HI, {
        streams: t,
        context: r,
        index: i,
        title: l.intl.string(l.t["3u0gII"]),
        showUserInfo: !1,
        showSimulcastOverride: !1,
    });
});
