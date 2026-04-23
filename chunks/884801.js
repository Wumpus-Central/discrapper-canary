n.d(t, { N: () => i });
var a = n(64700);
function i(e, t, n) {
    let i = a.useRef(null),
        s = a.useRef(new Map()),
        l = a.useRef(new Set()),
        r = a.useRef(t),
        d = a.useRef(e);
    return (
        a.useEffect(() => {
            (r.current = t), (d.current = e);
        }, [t, e]),
        a.useEffect(
            () => (
                (i.current = new IntersectionObserver(
                    (e) => {
                        let t = !1;
                        if (
                            (e.forEach((e) => {
                                let n = e.target.getAttribute("data-item-id");
                                null != n &&
                                    (e.isIntersecting && e.intersectionRatio >= 0.5
                                        ? l.current.has(n) || (l.current.add(n), (t = !0))
                                        : l.current.has(n) && (l.current.delete(n), (t = !0)));
                            }),
                            t)
                        ) {
                            let e = d.current,
                                t = Array.from(l.current)
                                    .map((t) => {
                                        let n = e.findIndex((e) => e.id === t);
                                        return n >= 0 ? { index: n, item: e[n] } : null;
                                    })
                                    .filter((e) => null !== e)
                                    .sort((e, t) => e.index - t.index);
                            r.current({ viewableItems: t });
                        }
                    },
                    { root: n?.current ?? null, threshold: [0, 0.5, 1], rootMargin: "0px" },
                )),
                () => {
                    i.current?.disconnect();
                }
            ),
            [n],
        ),
        {
            registerItemRef: a.useCallback((e, t) => {
                if (null != t) s.current.set(e, t), null != i.current && i.current.observe(t);
                else {
                    let t = s.current.get(e);
                    null != t && (i.current?.unobserve(t), s.current.delete(e));
                }
            }, []),
        }
    );
}
