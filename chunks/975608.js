n(411104);
var i = n(192379),
    l = n(960048);
t.Z = (e, t, n, a, r) => {
    let o = (0, i.useRef)(!1),
        u = {
            componentName: e,
            sentryErrorOptions: r,
            stateToCapture: a
        },
        s = (0, i.useRef)(u);
    (0, i.useEffect)(() => {
        s.current = u;
    }),
        (0, i.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: a } = s.current;
            if (t && !o.current) {
                o.current = !0;
                let t = setTimeout(() => {
                    let t = Error(''.concat(e, ' is taking too long to load.'));
                    l.Z.setExtra({
                        loadingState: a,
                        loadingTimeSeconds: n
                    }),
                        l.Z.captureException(t, {
                            ...i,
                            tags: { ...(null == i ? void 0 : i.tags) }
                        });
                }, 1000 * n);
                return () => {
                    clearTimeout(t);
                };
            }
        }, [t, n]);
};
