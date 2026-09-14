n.d(t, { PR: () => g, PS: () => d, Q_: () => p, _w: () => c, dy: () => h, fA: () => m, nI: () => u, zz: () => f });
var l = n(582128);
n(29692);
let a = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    r = new Map(),
    i = new Set();
function s(e) {
    return r.get(e) ?? a;
}
function o(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? r.set(e, t) : r.delete(e), [...i]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function u(e) {
    let t = s(e);
    t.active || o(e, { ...t, active: !0 });
}
function d(e) {
    r.has(e) && o(e, a);
}
function c(e, t) {
    let n = s(e);
    n.active && o(e, { ...n, context: t });
}
function m(e, t) {
    let n = s(e);
    n.active &&
        0 !== t.size &&
        o(e, {
            ...n,
            annotations: n.annotations.map((e) => {
                let n = t.get(e.id);
                return null == n ? e : { ...e, target: n };
            }),
        });
}
function f(e, t) {
    return null != t && e.authorId === t;
}
function h(e, t, n, l) {
    let a = s(e),
        r = a.annotations.find((e) => e.id === n);
    null != r &&
        f(r, t) &&
        o(e, { ...a, annotations: a.annotations.map((e) => (e.id === n ? { ...e, comment: l } : e)) });
}
function g(e, t, n) {
    let l = s(e),
        a = l.annotations.find((e) => e.id === n);
    null != a && f(a, t) && o(e, { ...l, annotations: l.annotations.filter((e) => e.id !== n) });
}
function x(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
function p(e) {
    let t = l.useCallback(() => (null == e ? a : s(e)), [e]);
    return l.useSyncExternalStore(x, t, t);
}
