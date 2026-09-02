n.d(t, { BP: () => u, FQ: () => p, RW: () => f, Rh: () => d, k: () => h, o4: () => g, t_: () => o, xm: () => c });
var i = n(582128);
let r = new Map(),
    l = new Set();
function s() {
    for (let e of [...l])
        try {
            e();
        } catch (e) {
            console.error("[vibegrations] control lease subscriber threw", e);
        }
}
function o(e) {
    let t = r.get(e) ?? { holders: 0, timers: new Set() };
    (t.holders += 1), r.set(e, t);
    let n = !1,
        i = setTimeout(() => {
            console.warn("[vibegrations] control lease expired without release", { projectId: e }), l();
        }, 35e3);
    function l() {
        n ||
            ((n = !0),
            clearTimeout(i),
            r.get(e) === t && (t.timers.delete(i), (t.holders -= 1), t.holders <= 0 && r.delete(e), s()));
    }
    return t.timers.add(i), s(), l;
}
let a = new Map();
function u(e) {
    let t = a.get(e),
        n = setTimeout(() => d(e), 2e4);
    if (null != t) {
        clearTimeout(t.timer);
        let i = o(e);
        t.release(), a.set(e, { release: i, timer: n });
        return;
    }
    a.set(e, { release: o(e), timer: n });
}
function d(e) {
    let t = a.get(e);
    null != t && (a.delete(e), clearTimeout(t.timer), t.release());
}
function c(e) {
    let t = a.get(e);
    null != t && (a.delete(e), clearTimeout(t.timer));
    let n = r.get(e);
    if (null != n) {
        for (let e of n.timers) clearTimeout(e);
        r.delete(e), s();
    }
}
function f(e) {
    return (r.get(e)?.holders ?? 0) > 0;
}
function h() {
    return [...r.keys()];
}
function p(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
function g(e) {
    let t = i.useCallback(() => null != e && f(e), [e]);
    return i.useSyncExternalStore(p, t, t);
}
