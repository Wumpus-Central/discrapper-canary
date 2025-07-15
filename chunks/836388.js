n.d(t, { x: () => r });
var i = n(73800);
function r() {
    let e = (0, i.useRef)(new Map()),
        t = (0, i.useCallback)((t, n, i, r) => {
            let o = (null == r ? void 0 : r.once)
                ? (...t) => {
                      (e.current.delete(i), i(...t));
                  }
                : i;
            (e.current.set(i, {
                type: n,
                eventTarget: t,
                fn: o,
                options: r
            }),
                t.addEventListener(n, o, r));
        }, []),
        n = (0, i.useCallback)((t, n, i, r) => {
            var o;
            let s = (null == (o = e.current.get(i)) ? void 0 : o.fn) || i;
            (t.removeEventListener(n, s, r), e.current.delete(i));
        }, []),
        r = (0, i.useCallback)(() => {
            e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options);
            });
        }, [n]);
    return (
        (0, i.useEffect)(() => r, [r]),
        {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
        }
    );
}
