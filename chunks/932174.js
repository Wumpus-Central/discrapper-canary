n.d(t, { Z: () => l });
var r = n(192379),
    o = n(442837),
    a = n(522474),
    i = n(981631);
function l() {
    let e = (0, o.e7)([a.Z], () => a.Z.getWindow(i.KJ3.ACTIVITY_POPOUT)),
        t = r.useMemo(() => (null == e ? void 0 : e.window.document), [e]),
        n = r.useMemo(() => (null == t ? void 0 : t.getElementById('app-mount')), [t]);
    return {
        popoutWindow: e,
        currentDocument: t,
        rootNode: n
    };
}
