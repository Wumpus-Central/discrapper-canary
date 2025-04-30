n.d(t, { Z: () => a });
var r = n(192379),
    o = n(442837),
    i = n(522474),
    l = n(981631);
function a() {
    let e = (0, o.e7)([i.Z], () => i.Z.getWindow(l.KJ3.ACTIVITY_POPOUT)),
        t = r.useMemo(() => (null == e ? void 0 : e.window.document), [e]),
        n = r.useMemo(() => (null == t ? void 0 : t.getElementById('app-mount')), [t]);
    return {
        popoutWindow: e,
        currentDocument: t,
        rootNode: n
    };
}
