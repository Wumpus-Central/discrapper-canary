n.d(t, { c: () => a });
var r = n(473749);
function i(e, t) {
    if ("function" == typeof e) return void e(t);
    null != e && "object" == typeof e && "current" in e && (e.current = t);
}
function a(e) {
    let t = r.useRef(null);
    return {
        triggerRef: r.useCallback(
            (n) => {
                (t.current = n), null != e && i(e, n);
            },
            [e],
        ),
        targetElementRef: t,
    };
}
