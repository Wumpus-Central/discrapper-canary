function i(e) {
    return new Date(e.expiresAt).valueOf() <= Date.now();
}
n.d(
    t,
    {},
    {
        Ic: function (e) {
            return i(e.config);
        },
        kd: i,
        v1: function (e) {
            let t = null,
                n = Date.now();
            for (let i of e) {
                let e = new Date(i.config.expiresAt).valueOf();
                !(e <= n) && (null == t || e < t) && (t = e);
            }
            return t;
        },
    },
);
