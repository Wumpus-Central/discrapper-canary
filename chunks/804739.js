n.d(t, {
    Q: () => a,
    t: () => s
});
var i = n(780570),
    r = n(358085);
function a() {
    return (0, r.isWindows)() || (0, r.isMac)();
}
function s(e) {
    let { LibraryApplicationStore: t, LaunchableGameStore: n, DispatchApplicationStore: r, ConnectedAppsStore: a, applicationId: s, branchId: o } = e;
    if (a.isConnected(s) || (null == o && (o = s), r.isLaunchable(s, o))) return !0;
    let l = t.getLibraryApplication(s, o);
    return !(null != l && (0, i.Je)(l)) && n.isLaunchable(s);
}
