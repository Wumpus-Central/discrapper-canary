n.d(t, {
    Q: () => o,
    t: () => s
});
var r = n(780570),
    i = n(358085),
    a = n(998502);
function o() {
    return ((0, i.isWindows)() && 'arm64' !== a.ZP.architecture) || (0, i.isMac)();
}
function s(e) {
    let { LibraryApplicationStore: t, LaunchableGameStore: n, DispatchApplicationStore: i, ConnectedAppsStore: a, applicationId: o, branchId: s } = e;
    if (a.isConnected(o) || (null == s && (s = o), i.isLaunchable(o, s))) return !0;
    let l = t.getLibraryApplication(o, s);
    return !(null != l && (0, r.Je)(l)) && n.isLaunchable(o);
}
