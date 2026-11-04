var i = n(582128);
let r = 0,
    a = 0,
    s = new Set();
function l(e) {
    return (s.add(e), () => s.delete(e));
}
n.d(
    t,
    {},
    {
        f: function () {
            ((r += 1), s.forEach((e) => e()));
        },
        p: function (e) {
            let t = i.useSyncExternalStore(l, () => r);
            i.useEffect(() => {
                if (t <= a) return;
                let n = window.setTimeout(() => {
                    ((a = t), e.current?.focus());
                }, 100);
                return () => window.clearTimeout(n);
            }, [t, e]);
        },
    },
);
