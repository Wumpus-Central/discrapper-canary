n(321073);
let i = new Map();
function r(e) {
    let t = i.get(e);
    if (null == t) return null;
    for (let n = t.length - 1; n >= 0; n--)
        try {
            let e = t[n]();
            if (null != e && null != e.contentWindow) return e;
        } catch (t) {
            console.debug("[conjure] preview frame lookup threw", { projectId: e, err: t });
        }
    return null;
}
function a(e) {
    return i.has(e);
}
n.d(
    t,
    {},
    {
        Ng: function (e, t) {
            let n = i.get(e) ?? [];
            return (
                n.push(t),
                i.set(e, n),
                () => {
                    let n = i.get(e);
                    if (null == n) return;
                    let r = n.indexOf(t);
                    (-1 !== r && n.splice(r, 1), 0 === n.length && i.delete(e));
                }
            );
        },
        UJ: r,
        o$: function (e, t, n) {
            let i = r(e);
            return null != i
                ? Promise.resolve(i)
                : a(e) && n?.aborted !== !0
                  ? (console.debug("[conjure] preview frame not ready, waiting", { projectId: e, timeoutMs: t }),
                    new Promise((i) => {
                        let s = Date.now(),
                            l = s + t;
                        function o(t) {
                            (window.clearInterval(c),
                                n?.removeEventListener("abort", d),
                                console.debug("[conjure] preview frame wait finished", {
                                    projectId: e,
                                    found: null != t,
                                    ms: Date.now() - s,
                                }),
                                i(t));
                        }
                        function d() {
                            o(null);
                        }
                        let c = window.setInterval(() => {
                            let t = r(e);
                            (null != t || Date.now() >= l || !a(e)) && o(t);
                        }, 100);
                        n?.addEventListener("abort", d, { once: !0 });
                    }))
                  : Promise.resolve(null);
        },
        rQ: a,
    },
);
