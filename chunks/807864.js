r.d(n, {
    H: function () {
        return a;
    }
});
var i = r(653041);
function a(e) {
    let n = Promise.resolve(null),
        r = [],
        i = !1,
        { onContention: a, onContentionResolved: o, onTimeout: s, timeoutMs: l } = e,
        u = function (e, u) {
            r.length > 0 ? (a(u, r), (i = !0)) : i && (o(), (i = !1)), r.push(u);
            let c = null == l || null == s ? null : setTimeout(() => s(u, r), l);
            return new Promise((i, a) => {
                (n = n
                    .then(e)
                    .then(i, a)
                    .then(() => r.splice(0, 1))),
                    null != c && (n = n.then(() => clearTimeout(c)));
            });
        };
    return (u.isMutexHeld = () => r.length > 0), (u.getLockHolders = () => r), u;
}
