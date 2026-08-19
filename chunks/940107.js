"use strict";
n.d(t, { W: () => r, f: () => i }), n(323874), n(14289), n(35956);
class i extends Error {
    constructor(e, t) {
        super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout");
    }
}
function r(e, t, n, r) {
    let s = e.contentWindow;
    if (null == s) return Promise.reject(Error("preview frame not ready"));
    let l = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == l) return Promise.reject(Error("preview frame has no resolvable origin"));
    let o = `vibegrations-${t}`,
        d = `${o}-result`,
        c = r.sourceMatch ?? "window",
        u = r.id ?? `${t}-${++a}-${Date.now()}`;
    return new Promise((a, _) => {
        let E = 0,
            A = window.setTimeout(() => {
                I(), _(new i(t, r.timeoutMs));
            }, r.timeoutMs),
            h = null != r.retryMs ? window.setInterval(f, r.retryMs) : null;
        function I() {
            window.clearTimeout(A), null != h && window.clearInterval(h), window.removeEventListener("message", p);
        }
        function f() {
            (E += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: u,
                    attempt: E,
                });
            let i = { type: o, id: u, ...n };
            e.contentWindow?.postMessage(i, l);
        }
        function p(e) {
            var t;
            ("window" === c ? e.source === s : e.origin === l) &&
                ((t = e.data), "object" == typeof t && null != t && t.type === d && t.id === u && (I(), a(e.data)));
        }
        window.addEventListener("message", p), f();
    });
}
let a = 0;
