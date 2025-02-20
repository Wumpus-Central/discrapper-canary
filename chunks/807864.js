function r(e) {
    let t = Promise.resolve(null),
        n = [],
        r = !1,
        { onContention: i, onContentionResolved: o, onTimeout: a, timeoutMs: s } = e,
        l = function (e, l) {
            n.length > 0 ? (i(l, n), (r = !0)) : r && (o(), (r = !1)), n.push(l);
            let c = null == s || null == a ? null : setTimeout(() => a(l, n), s);
            return new Promise((r, i) => {
                (t = t
                    .then(e)
                    .then(r, i)
                    .then(() => n.splice(0, 1))),
                    null != c && (t = t.then(() => clearTimeout(c)));
            });
        };
    return (l.isMutexHeld = () => n.length > 0), (l.getLockHolders = () => n), l;
}
n.d(t, { H: () => r }), n(653041);
