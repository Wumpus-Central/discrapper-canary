(n.d(t, { Ng: () => i, UJ: () => l, o$: () => a, rQ: () => o }), n(321073));
let r = new Map();
function i(e, t) {
    let n = r.get(e) ?? [];
    return (
        n.push(t),
        r.set(e, n),
        () => {
            let n = r.get(e);
            if (null == n) return;
            let i = n.indexOf(t);
            (-1 !== i && n.splice(i, 1), 0 === n.length && r.delete(e));
        }
    );
}
function l(e) {
    let t = r.get(e);
    if (null == t) return null;
    for (let n = t.length - 1; n >= 0; n--)
        try {
            let e = t[n]();
            if (null != e && null != e.contentWindow) return e;
        } catch (t) {
            console.debug("[vibegrations] preview frame lookup threw", { projectId: e, err: t });
        }
    return null;
}
function o(e) {
    return r.has(e);
}
function a(e, t, n) {
    let r = l(e);
    return null != r
        ? Promise.resolve(r)
        : o(e) && n?.aborted !== !0
          ? (console.debug("[vibegrations] preview frame not ready, waiting", { projectId: e, timeoutMs: t }),
            new Promise((r) => {
                let i = Date.now(),
                    a = i + t;
                function u(t) {
                    (window.clearInterval(d),
                        n?.removeEventListener("abort", s),
                        console.debug("[vibegrations] preview frame wait finished", {
                            projectId: e,
                            found: null != t,
                            ms: Date.now() - i,
                        }),
                        r(t));
                }
                function s() {
                    u(null);
                }
                let d = window.setInterval(() => {
                    let t = l(e);
                    (null != t || Date.now() >= a || !o(e)) && u(t);
                }, 100);
                n?.addEventListener("abort", s, { once: !0 });
            }))
          : Promise.resolve(null);
}
