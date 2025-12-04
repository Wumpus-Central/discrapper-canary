r.d(t, { N: () => n });
let n = (e, t, r) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            let n = new PerformanceObserver((e) => {
                Promise.resolve().then(() => {
                    t(e.getEntries());
                });
            });
            return (
                n.observe(
                    Object.assign(
                        {
                            type: e,
                            buffered: !0,
                        },
                        r || {},
                    ),
                ),
                n
            );
        }
    } catch (e) {}
};
