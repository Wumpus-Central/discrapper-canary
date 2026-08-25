n.d(t, { BP: () => a, FQ: () => g, RW: () => f, Rh: () => d, k: () => p, o4: () => h, t_: () => o, xm: () => c });
var l = n(582128);
let i = new Map(),
    r = new Set();
function s() {
    for (let e of [...r])
        try {
            e();
        } catch (e) {
            console.error("[vibegrations] control lease subscriber threw", e);
        }
}
function o(e) {
    let t = i.get(e) ?? { holders: 0, timers: new Set() };
    (t.holders += 1), i.set(e, t);
    let n = !1,
        l = setTimeout(() => {
            console.warn("[vibegrations] control lease expired without release", { projectId: e }), r();
        }, 35e3);
    function r() {
        n ||
            ((n = !0),
            clearTimeout(l),
            i.get(e) === t && (t.timers.delete(l), (t.holders -= 1), t.holders <= 0 && i.delete(e), s()));
    }
    return t.timers.add(l), s(), r;
}
let u = new Map();
function a(e) {
    let t = u.get(e),
        n = setTimeout(() => d(e), 2e4);
    if (null != t) {
        clearTimeout(t.timer);
        let l = o(e);
        t.release(), u.set(e, { release: l, timer: n });
        return;
    }
    u.set(e, { release: o(e), timer: n });
}
function d(e) {
    let t = u.get(e);
    null != t && (u.delete(e), clearTimeout(t.timer), t.release());
}
function c(e) {
    let t = u.get(e);
    null != t && (u.delete(e), clearTimeout(t.timer));
    let n = i.get(e);
    if (null != n) {
        for (let e of n.timers) clearTimeout(e);
        i.delete(e), s();
    }
}
function f(e) {
    return (i.get(e)?.holders ?? 0) > 0;
}
function p() {
    return [...i.keys()];
}
function g(e) {
    return (
        r.add(e),
        () => {
            r.delete(e);
        }
    );
}
function h(e) {
    let t = l.useCallback(() => null != e && f(e), [e]);
    return l.useSyncExternalStore(g, t, t);
}
