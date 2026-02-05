"use strict";
function r(e) {
    let t = Promise.resolve(null),
        n = [],
        r = !1,
        { onContention: i, onContentionResolved: a, onTimeout: s, timeoutMs: o } = e,
        l = function (e, l) {
            n.length > 0 ? (i(l, n), (r = !0)) : r && (a(), (r = !1)), n.push(l);
            let u = null == o || null == s ? null : setTimeout(() => s(l, n), o);
            return new Promise((r, i) => {
                (t = t
                    .then(e)
                    .then(r, i)
                    .then(() => n.splice(0, 1))),
                    null != u && (t = t.then(() => clearTimeout(u)));
            });
        };
    return (l.isMutexHeld = () => n.length > 0), (l.getLockHolders = () => n), l;
}
n.d(t, { n: () => r }), n(321073);
