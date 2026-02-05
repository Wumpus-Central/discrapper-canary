r.d(t, { A: () => o });
var n = r(627968);
r(64700);
var a = r(311907),
    i = r(412780),
    s = r(828904),
    l = r(985018);
let o = a.Ay.connectStores([i.Ay], (e) => {
    let { context: t, index: r } = e,
        n = i.Ay.getAllStats(t)[r];
    return { outbound: null != n ? n.rtp.outbound : null };
})(function (e) {
    let { outbound: t, context: r, index: a } = e;
    return (0, n.jsx)(s.HI, {
        streams: t,
        context: r,
        index: a,
        title: l.intl.string(l.t["3u0gII"]),
        showUserInfo: !1,
        showSimulcastOverride: !1,
    });
});
