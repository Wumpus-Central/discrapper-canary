function i(e) {
    let t = Promise.resolve(null),
        n = [],
        i = !1,
        { onContention: r, onContentionResolved: a, onTimeout: s, timeoutMs: o } = e,
        l = function (e, l) {
            n.length > 0 ? (r(l, n), (i = !0)) : i && (a(), (i = !1)), n.push(l);
            let u = null == o || null == s ? null : setTimeout(() => s(l, n), o);
            return new Promise((i, r) => {
                (t = t
                    .then(e)
                    .then(i, r)
                    .then(() => n.splice(0, 1))),
                    null != u && (t = t.then(() => clearTimeout(u)));
            });
        };
    return (l.isMutexHeld = () => n.length > 0), (l.getLockHolders = () => n), l;
}
n.d(t, { H: () => i }), n(653041);
