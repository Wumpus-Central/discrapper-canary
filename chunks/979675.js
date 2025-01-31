n.d(t, { $: () => i });
let i = (e, t) =>
    function (n, i, r) {
        return new Promise((a) => {
            var s;
            e.dispatch({
                type: t,
                event: n,
                properties: i,
                flush: null !== (s = null == r ? void 0 : r.flush) && void 0 !== s && s,
                fingerprint: null == r ? void 0 : r.fingerprint,
                resolve: a
            });
        });
    };
