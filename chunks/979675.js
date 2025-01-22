r.d(n, {
    $: function () {
        return i;
    }
});
let i = (e, n) =>
    function (r, i, a) {
        return new Promise((o) => {
            var s;
            e.dispatch({
                type: n,
                event: r,
                properties: i,
                flush: null !== (s = null == a ? void 0 : a.flush) && void 0 !== s && s,
                fingerprint: null == a ? void 0 : a.fingerprint,
                resolve: o
            });
        });
    };
