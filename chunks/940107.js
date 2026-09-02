n.d(t, { W: () => l, f: () => i }), n(323874), n(14289), n(35956);
class i extends Error {
    constructor(e, t) {
        super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout");
    }
}
function r(e, t, n) {
    return "object" == typeof e && null != e && e.type === t && e.id === n;
}
function l(e, t, n, l) {
    let o = e.contentWindow;
    if (null == o) return Promise.reject(Error("preview frame not ready"));
    let a = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == a) return Promise.reject(Error("preview frame has no resolvable origin"));
    let u = `vibegrations-${t}`,
        d = `${u}-result`,
        c = `${u}-ack`,
        f = l.sourceMatch ?? "window",
        h = l.id ?? `${t}-${++s}-${Date.now()}`;
    return new Promise((s, p) => {
        let g = 0,
            w = o,
            m = window.setTimeout(() => {
                b(), p(new i(t, l.timeoutMs));
            }, l.timeoutMs),
            _ = null != l.retryMs ? window.setInterval(A, l.retryMs) : null;
        function v() {
            null != _ && window.clearInterval(_);
        }
        function b() {
            window.clearTimeout(m), v(), window.removeEventListener("message", I);
        }
        function A() {
            (g += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: l.label ?? t,
                    id: h,
                    attempt: g,
                });
            let i = { type: u, id: h, ...n };
            (w = e.contentWindow), e.contentWindow?.postMessage(i, a);
        }
        function I(e) {
            ("window" === f ? e.source !== w : e.origin !== a) ||
                (r(e.data, c, h) ? v() : r(e.data, d, h) && (b(), s(e.data)));
        }
        window.addEventListener("message", I), A();
    });
}
let s = 0;
