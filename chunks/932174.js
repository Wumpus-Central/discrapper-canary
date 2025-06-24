t.d(n, { Z: () => a });
var r = t(73800),
    o = t(442837),
    i = t(522474),
    l = t(981631);
function a() {
    let e = (0, o.e7)([i.Z], () => i.Z.getWindow(l.KJ3.ACTIVITY_POPOUT)),
        n = r.useMemo(() => (null == e ? void 0 : e.window.document), [e]),
        t = r.useMemo(() => (null == n ? void 0 : n.getElementById('app-mount')), [n]);
    return {
        popoutWindow: e,
        currentDocument: n,
        rootNode: t
    };
}
