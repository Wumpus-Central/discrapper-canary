n.d(t, { N: () => r });
let r = (e, t, n) => {
    try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            let r = new PerformanceObserver((e) => {
                Promise.resolve().then(() => {
                    t(e.getEntries());
                });
            });
            return (
                r.observe(
                    Object.assign(
                        {
                            type: e,
                            buffered: !0,
                        },
                        n || {},
                    ),
                ),
                r
            );
        }
    } catch (e) {}
};
