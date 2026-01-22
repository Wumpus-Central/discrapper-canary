n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var a = n(311907),
    i = n(412780),
    l = n(828904),
    s = n(985018);
let o = a.Ay.connectStores([i.Ay], (e) => {
    let { context: t, index: n } = e,
        r = i.Ay.getAllStats(t)[n];
    return {
        outbound: null != r ? r.rtp.outbound : null,
    };
})(function (e) {
    let { outbound: t, context: n, index: a } = e;
    return (0, r.jsx)(l.HI, {
        streams: t,
        context: n,
        index: a,
        title: s.intl.string(s.t["3u0gII"]),
        showUserInfo: !1,
        showSimulcastOverride: !1,
    });
});
