n.d(t, { c: () => o });
var r = n(73800);
function i(e, t) {
    if ("function" == typeof e) return void e(t);
    null != e && "object" == typeof e && "current" in e && (e.current = t);
}
function o(e) {
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
