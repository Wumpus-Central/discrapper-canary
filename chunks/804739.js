n.d(t, {
    Q: () => a,
    t: () => o
});
var r = n(780570),
    i = n(358085);
function a() {
    return (0, i.isWindows)() || (0, i.isMac)();
}
function o(e) {
    let { LibraryApplicationStore: t, LaunchableGameStore: n, DispatchApplicationStore: i, ConnectedAppsStore: a, applicationId: o, branchId: s } = e;
    if (a.isConnected(o) || (null == s && (s = o), i.isLaunchable(o, s))) return !0;
    let l = t.getLibraryApplication(o, s);
    return !(null != l && (0, r.Je)(l)) && n.isLaunchable(o);
}
