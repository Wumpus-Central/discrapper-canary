r.d(n, {
    Q: function () {
        return o;
    },
    t: function () {
        return s;
    }
});
var i = r(780570),
    a = r(358085);
function o() {
    return (0, a.isWindows)() || (0, a.isMac)();
}
function s(e) {
    let { LibraryApplicationStore: n, LaunchableGameStore: r, DispatchApplicationStore: a, ConnectedAppsStore: o, applicationId: s, branchId: l } = e;
    if (o.isConnected(s)) return !0;
    if ((null == l && (l = s), a.isLaunchable(s, l))) return !0;
    let u = n.getLibraryApplication(s, l);
    return !(null != u && (0, i.Je)(u)) && r.isLaunchable(s);
}
