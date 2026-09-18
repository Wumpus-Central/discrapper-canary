(n.d(t, { W: () => r }), n(323874), n(14289), n(35956));
var i = n(762399);
function r(e, t, n, r) {
    let s = e.contentWindow;
    if (null == s) return Promise.reject(Error("preview frame not ready"));
    let o = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == o) return Promise.reject(Error("preview frame has no resolvable origin"));
    let a = `vibegrations-${t}`,
        u = `${a}-result`,
        d = `${a}-ack`,
        c = r.sourceMatch ?? "window",
        f = r.id ?? `${t}-${++l}-${Date.now()}`;
    return new Promise((l, h) => {
        let p = 0,
            g = s,
            w = window.setTimeout(() => {
                (_(), h(new i.fq(t, r.timeoutMs)));
            }, r.timeoutMs),
            m = null != r.retryMs ? window.setInterval(b, r.retryMs) : null;
        function v() {
            null != m && window.clearInterval(m);
        }
        function _() {
            (window.clearTimeout(w), v(), window.removeEventListener("message", A));
        }
        function b() {
            (p += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: f,
                    attempt: p,
                });
            let i = { type: a, id: f, ...n };
            ((g = e.contentWindow), e.contentWindow?.postMessage(i, o));
        }
        function A(e) {
            ("window" === c ? e.source !== g : e.origin !== o) ||
                ((0, i.YX)(e.data, d, f) ? v() : (0, i.YX)(e.data, u, f) && (_(), l(e.data)));
        }
        (window.addEventListener("message", A), b());
    });
}
let l = 0;
