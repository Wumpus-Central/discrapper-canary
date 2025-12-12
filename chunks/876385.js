n.d(t, { r: () => i });
var r = n(343573);
let i = (0, n(688560)._I)(() => {
    let e = 1000 * (0, r.ph)();
    return {
        name: "SessionTiming",
        processEvent(t) {
            let n = 1000 * (0, r.ph)();
            return {
                ...t,
                extra: {
                    ...t.extra,
                    "session:start": e,
                    "session:duration": n - e,
                    "session:end": n,
                },
            };
        },
    };
});
