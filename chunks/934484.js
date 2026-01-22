function r(e) {
    if (e.applications.length > 0) return e.applications[0].id;
    if (e.windows.length > 0) {
        var t, n;
        return null != (t = null == (n = e.windows[0].owningApplication) ? void 0 : n.id) ? t : null;
    }
    return null;
}
n.d(t, { A: () => r });
