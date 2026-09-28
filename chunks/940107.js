(n.d(t, { W: () => i }), n(323874), n(14289), n(35956));
var r = n(762399);
function i(e, t, n, i) {
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
        c = i.sourceMatch ?? "window",
        f = i.id ?? `${t}-${++l}-${Date.now()}`;
    return new Promise((l, h) => {
        let p = 0,
            _ = o,
            g = window.setTimeout(() => {
                (m(), h(new r.fq(t, i.timeoutMs)));
            }, i.timeoutMs),
            w = null != i.retryMs ? window.setInterval(T, i.retryMs) : null;
        function E() {
            null != w && window.clearInterval(w);
        }
        function m() {
            (window.clearTimeout(g), E(), window.removeEventListener("message", I));
        }
        function T() {
            (p += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: i.label ?? t,
                    id: f,
                    attempt: p,
                });
            let r = { type: u, id: f, ...n };
            ((_ = e.contentWindow), e.contentWindow?.postMessage(r, s));
        }
        function I(e) {
            ("window" === c ? e.source !== _ : e.origin !== s) ||
                ((0, r.YX)(e.data, d, f) ? E() : (0, r.YX)(e.data, a, f) && (m(), l(e.data)));
        }
        (window.addEventListener("message", I), T());
    });
}
let l = 0;
