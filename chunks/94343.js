var n = r(582128),
    i = r(855986),
    o = r(775602);
r.d(
    t,
    {},
    {
        A: function (e, t) {
            let r = (0, i.bG)([o.Ay], () => o.Ay.useReducedMotion);
            n.useEffect(() => {
                if (!t) return;
                let n = e.current;
                if (null == n) return;
                let i = requestAnimationFrame(() => {
                    n.scrollIntoView({ behavior: r ? "auto" : "smooth" });
                });
                return () => cancelAnimationFrame(i);
            }, [e, t, r]);
        },
    },
);
