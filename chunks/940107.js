"use strict";
n.d(t, { W: () => a, f: () => i }), n(323874), n(14289), n(35956);
class i extends Error {
    constructor(e, t) {
        super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout");
    }
}
function r(e, t, n) {
    return "object" == typeof e && null != e && e.type === t && e.id === n;
}
function a(e, t, n, a) {
    let l = e.contentWindow;
    if (null == l) return Promise.reject(Error("preview frame not ready"));
    let o = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == o) return Promise.reject(Error("preview frame has no resolvable origin"));
    let d = `vibegrations-${t}`,
        c = `${d}-result`,
        u = `${d}-ack`,
        _ = a.sourceMatch ?? "window",
        E = a.id ?? `${t}-${++s}-${Date.now()}`;
    return new Promise((s, A) => {
        let h = 0,
            I = l,
            f = window.setTimeout(() => {
                m(), A(new i(t, a.timeoutMs));
            }, a.timeoutMs),
            p = null != a.retryMs ? window.setInterval(g, a.retryMs) : null;
        function T() {
            null != p && window.clearInterval(p);
        }
        function m() {
            window.clearTimeout(f), T(), window.removeEventListener("message", S);
        }
        function g() {
            (h += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: a.label ?? t,
                    id: E,
                    attempt: h,
                });
            let i = { type: d, id: E, ...n };
            (I = e.contentWindow), e.contentWindow?.postMessage(i, o);
        }
        function S(e) {
            ("window" === _ ? e.source !== I : e.origin !== o) ||
                (r(e.data, u, E) ? T() : r(e.data, c, E) && (m(), s(e.data)));
        }
        window.addEventListener("message", S), g();
    });
}
let s = 0;
