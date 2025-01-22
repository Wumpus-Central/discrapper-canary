var i = r(411104);
var a = r(192379),
    o = r(960048);
let s = (e, n, r, i, s) => {
    let l = (0, a.useRef)(!1),
        u = {
            componentName: e,
            sentryErrorOptions: s,
            stateToCapture: i
        },
        c = (0, a.useRef)(u);
    (0, a.useEffect)(() => {
        c.current = u;
    }),
        (0, a.useEffect)(() => {
            let { componentName: e, sentryErrorOptions: i, stateToCapture: a } = c.current;
            if (n && !l.current) {
                l.current = !0;
                let n = setTimeout(() => {
                    let n = Error(''.concat(e, ' is taking too long to load.'));
                    o.Z.setExtra({
                        loadingState: a,
                        loadingTimeSeconds: r
                    }),
                        o.Z.captureException(n, {
                            ...i,
                            tags: { ...(null == i ? void 0 : i.tags) }
                        });
                }, 1000 * r);
                return () => {
                    clearTimeout(n);
                };
            }
        }, [n, r]);
};
n.Z = s;
