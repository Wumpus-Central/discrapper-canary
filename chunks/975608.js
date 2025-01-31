n.d(t, { Z: () => a }), n(411104);
var i = n(192379),
    r = n(960048);
let a = (e, t, n, a, s) => {
    let o = (0, i.useRef)(!1),
        l = {
            componentName: e,
            sentryErrorOptions: s,
            stateToCapture: a
        },
        u = (0, i.useRef)(l);
    (0, i.useEffect)(() => {
        u.current = l;
    }),
        (0, i.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: a } = u.current;
            if (t && !o.current) {
                o.current = !0;
                let t = setTimeout(() => {
                    let t = Error(''.concat(e, ' is taking too long to load.'));
                    r.Z.setExtra({
                        loadingState: a,
                        loadingTimeSeconds: n
                    }),
                        r.Z.captureException(t, {
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
