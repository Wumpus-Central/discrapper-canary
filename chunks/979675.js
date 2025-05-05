n.d(t, { $: () => r });
let r = (e, t) =>
    function (n, r, i) {
        return new Promise((a) => {
            var o;
            e.dispatch({
                type: t,
                event: n,
                properties: r,
                flush: null != (o = null == i ? void 0 : i.flush) && o,
                fingerprint: null == i ? void 0 : i.fingerprint,
                resolve: a
            });
        });
    };
