n.d(t, { x: () => i });
var r = n(73800);
function i() {
    let e = (0, r.useRef)(new Map()),
        t = (0, r.useCallback)((t, n, r, i) => {
            let o = (null == i ? void 0 : i.once)
                ? (...t) => {
                      (e.current.delete(r), r(...t));
                  }
                : r;
            (e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: o,
                options: i
            }),
                t.addEventListener(n, o, i));
        }, []),
        n = (0, r.useCallback)((t, n, r, i) => {
            var o;
            let u = (null == (o = e.current.get(r)) ? void 0 : o.fn) || r;
            (t.removeEventListener(n, u, i), e.current.delete(r));
        }, []),
        i = (0, r.useCallback)(() => {
            e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options);
            });
        }, [n]);
    return (
        (0, r.useEffect)(() => i, [i]),
        {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: i
        }
    );
}
