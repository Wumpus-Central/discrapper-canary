n.d(t, { c: () => a });
var r = n(473749),
    i = n(464281);
function a(e) {
    let t = r.useRef(null);
    return {
        triggerRef: r.useCallback(
            (n) => {
                (t.current = n), null != e && (0, i.k$)(e, n);
            },
            [e],
        ),
        targetElementRef: t,
    };
}
