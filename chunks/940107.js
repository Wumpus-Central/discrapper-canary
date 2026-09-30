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
        let _ = 0,
            p = o,
            g = window.setTimeout(() => {
                (T(), h(new i.fq(t, r.timeoutMs)));
            }, r.timeoutMs),
            w = null != r.retryMs ? window.setInterval(I, r.retryMs) : null;
        function E() {
            null != w && window.clearInterval(w);
        }
        function T() {
            (window.clearTimeout(g), E(), window.removeEventListener("message", m));
        }
        function I() {
            (_ += 1) > 1 &&
                console.debug("[vibegrations] re-offering call to the preview frame", {
                    call: r.label ?? t,
                    id: f,
                    attempt: _,
                });
            let i = { type: u, id: f, ...n };
            ((p = e.contentWindow), e.contentWindow?.postMessage(i, s));
        }
        function m(e) {
            ("window" === c ? e.source !== p : e.origin !== s) ||
                ((0, i.YX)(e.data, d, f) ? E() : (0, i.YX)(e.data, a, f) && (T(), l(e.data)));
        }
        (window.addEventListener("message", m), I());
    });
}
let l = 0;
