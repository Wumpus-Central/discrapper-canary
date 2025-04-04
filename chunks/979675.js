n.d(t, { $: () => r });
let r = (e, t) =>
    function (n, r, i) {
        return new Promise((o) => {
            var a;
            e.dispatch({
                type: t,
                event: n,
                properties: r,
                flush: null != (a = null == i ? void 0 : i.flush) && a,
                fingerprint: null == i ? void 0 : i.fingerprint,
                resolve: o
            });
        });
    };
