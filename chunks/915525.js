(n.d(t, { Z: () => f }), n(388685), n(539854));
var r,
    i = n(843991),
    a = n(442837),
    o = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new Map(),
    c = new Map();
function u(e, t) {
    return e.type === t;
}
class d extends (r = a.ZP.Store) {
    hasActiveErrorOfType(e) {
        var t;
        return (null != (t = c.get(e)) ? t : []).length > 0;
    }
    getActiveErrors() {
        return (l instanceof Map || (l = new Map()), l);
    }
    getActiveErrorsOfType(e) {
        let t = [],
            n = c.get(e);
        if (null == n) return t;
        for (let r of n) {
            let n = l.get(r);
            null != n && u(n, e) && t.push(n);
        }
        return t;
    }
}
function _(e) {
    let { activeErrors: t } = e;
    if (__OVERLAY__ || !(t instanceof Map)) return;
    l instanceof Map || (l = new Map());
    let n = new Set(t.keys()),
        r = new Set(l.keys());
    if (!(0, i.O)(n, r))
        for (let [e, n] of ((l = t), (c = new Map()), l.entries())) {
            var a;
            let t = null != (a = c.get(n.type)) ? a : [];
            (t.push(e), c.set(n.type, t));
        }
}
s(d, 'displayName', 'AVErrorStore');
let f = new d(o.Z, { ACTIVE_AV_ERRORS_CHANGED: _ });
