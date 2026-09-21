(n.d(t, { W: () => r }), n(323874), n(14289), n(35956));
var i = n(762399);
function r(e, t, n, r) {
    let o = e.contentWindow;
    if (null == o) return Promise.reject(Error("preview frame not ready"));
    let s = (function (e) {
        try {
            return new URL(e.src, window.location.href).origin;
        } catch {
            return null;
        }
    })(e);
    if (null == s) return Promise.reject(Error("preview frame has no resolvable origin"));
    let u = `vibegrations-${t}`,
        a = `${u}-result`,
        d = `${u}-ack`,
        c = r.sourceMatch ?? "window",
        f = r.id ?? `${t}-${++l}-${Date.now()}`;
    return new Promise((l, h) => {
        let p = 0,
            _ = o,
            g = window.setTimeout(() => {
                (E(), h(new i.fq(t, r.timeoutMs)));
            }, r.timeoutMs),
            w = null != r.retryMs ? window.setInterval(I, r.retryMs) : null;
        function m() {
            null != w && window.clearInterval(w);
        }
        function E() {
            (window.clearTimeout(g), m(), window.removeEventListener("message", T));
        }
        function I() {
            (p += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: f,
                    attempt: p,
                });
            let i = { type: u, id: f, ...n };
            ((_ = e.contentWindow), e.contentWindow?.postMessage(i, s));
        }
        function T(e) {
            ("window" === c ? e.source !== _ : e.origin !== s) ||
                ((0, i.YX)(e.data, d, f) ? m() : (0, i.YX)(e.data, a, f) && (E(), l(e.data)));
        }
        (window.addEventListener("message", T), I());
    });
}
let l = 0;
