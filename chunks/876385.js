r.d(t, { r: () => a });
var n = r(343573);
let a = (0, r(688560)._I)(() => {
    let e = 1000 * (0, n.ph)();
    return {
        name: "SessionTiming",
        processEvent(t) {
            let r = 1000 * (0, n.ph)();
            return {
                ...t,
                extra: {
                    ...t.extra,
                    "session:start": e,
                    "session:duration": r - e,
                    "session:end": r,
                },
            };
        },
    };
});
