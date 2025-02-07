n.d(t, { i: () => l });
var a = n(192379),
    r = n(846519);
function l(e) {
    let { elementRef: t, onDOMRectPositionChange: n, pollInterval: l = 60 } = e,
        i = a.useRef(null),
        o = a.useRef(new r.Xp()),
        s = a.useCallback(() => {
            let e = t.current;
            if (null === e) return;
            let n = e.getBoundingClientRect();
            i.current = n;
        }, [t]);
    return (
        a.useEffect(() => {
            null !== t.current && s();
        }, [t, s]),
        a.useEffect(() => {
            let e = t.current;
            if (null === e) return;
            let a = o.current;
            return (
                a.start(l, () => {
                    let t = i.current,
                        a = e.getBoundingClientRect();
                    if (null === t) {
                        s();
                        return;
                    }
                    (a.top !== t.top || a.bottom !== t.bottom || a.left !== t.left || a.right !== t.right) && (void 0 !== n && n(t, a), s());
                }),
                () => {
                    a.stop();
                }
            );
        }, [t, l, s, n]),
        { elementBoundingRectRef: i }
    );
}
