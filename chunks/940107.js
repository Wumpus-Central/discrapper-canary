n.d(t, { W: () => r, f: () => l }), n(323874), n(14289), n(35956);
class l extends Error {
    constructor(e, t) {
        super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout");
    }
}
function i(e, t, n) {
    return "object" == typeof e && null != e && e.type === t && e.id === n;
}
function r(e, t, n, r) {
    let o = e.contentWindow;
    if (null == o) return Promise.reject(Error("preview frame not ready"));
    let u = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == u) return Promise.reject(Error("preview frame has no resolvable origin"));
    let a = `vibegrations-${t}`,
        d = `${a}-result`,
        c = `${a}-ack`,
        f = r.sourceMatch ?? "window",
        p = r.id ?? `${t}-${++s}-${Date.now()}`;
    return new Promise((s, g) => {
        let h = 0,
            m = o,
            w = window.setTimeout(() => {
                v(), g(new l(t, r.timeoutMs));
            }, r.timeoutMs),
            _ = null != r.retryMs ? window.setInterval(I, r.retryMs) : null;
        function A() {
            null != _ && window.clearInterval(_);
        }
        function v() {
            window.clearTimeout(w), A(), window.removeEventListener("message", T);
        }
        function I() {
            (h += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: p,
                    attempt: h,
                });
            let l = { type: a, id: p, ...n };
            (m = e.contentWindow), e.contentWindow?.postMessage(l, u);
        }
        function T(e) {
            ("window" === f ? e.source !== m : e.origin !== u) ||
                (i(e.data, c, p) ? A() : i(e.data, d, p) && (v(), s(e.data)));
        }
        window.addEventListener("message", T), I();
    });
}
let s = 0;
