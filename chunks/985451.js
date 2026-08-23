"use strict";
n.d(t, { BP: () => d, Rh: () => c, o4: () => E, t_: () => l, xm: () => u });
var i = n(582128);
let r = new Map(),
    a = new Set();
function s() {
    for (let e of [...a])
        try {
            e();
        } catch (e) {
            console.error("[vibegrations] control lease subscriber threw", e);
        }
}
function l(e) {
    let t = r.get(e) ?? { holders: 0, timers: new Set() };
    (t.holders += 1), r.set(e, t);
    let n = !1,
        i = setTimeout(() => {
            console.warn("[vibegrations] control lease expired without release", { projectId: e }), a();
        }, 35e3);
    function a() {
        n ||
            ((n = !0),
            clearTimeout(i),
            r.get(e) === t && (t.timers.delete(i), (t.holders -= 1), t.holders <= 0 && r.delete(e), s()));
    }
    return t.timers.add(i), s(), a;
}
let o = new Map();
function d(e) {
    let t = o.get(e),
        n = setTimeout(() => c(e), 2e4);
    if (null != t) {
        clearTimeout(t.timer);
        let i = l(e);
        t.release(), o.set(e, { release: i, timer: n });
        return;
    }
    o.set(e, { release: l(e), timer: n });
}
function c(e) {
    let t = o.get(e);
    null != t && (o.delete(e), clearTimeout(t.timer), t.release());
}
function u(e) {
    let t = o.get(e);
    null != t && (o.delete(e), clearTimeout(t.timer));
    let n = r.get(e);
    if (null != n) {
        for (let e of n.timers) clearTimeout(e);
        r.delete(e), s();
    }
}
function _(e) {
    return (
        a.add(e),
        () => {
            a.delete(e);
        }
    );
}
function E(e) {
    let t = i.useCallback(() => null != e && (r.get(e)?.holders ?? 0) > 0, [e]);
    return i.useSyncExternalStore(_, t, t);
}
