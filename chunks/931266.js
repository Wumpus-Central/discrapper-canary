"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(118356),
    l = n(823598);
let u = new o.Vy("DirectVideo");
u.enableNativeLogger(!0);
class c {
    refcount;
    stream;
    constructor(e) {
        (this.refcount = 1), (this.stream = window.createDiscordStream(e));
    }
    addref() {
        this.refcount++;
    }
    release() {
        return this.refcount--, 0 === this.refcount;
    }
}
let d = new Map();
function _(e) {
    let t = d.get(e);
    return null == t ? ((t = new c(e)), (0, l.lE)().addDirectVideoOutputSink(e), d.set(e, t)) : t.addref(), t.stream;
}
function f(e) {
    let t = d.get(e);
    null != t && t.release() && ((0, l.lE)().removeDirectVideoOutputSink(e), d.delete(e));
}
function p(e, t) {
    let {
            streamId: n,
            paused: s = !1,
            onReady: o,
            onResize: l,
            reportContainerResized: c = !0,
            className: d,
            ...p
        } = e,
        h = i.useRef(null),
        m = i.useRef(null),
        E = i.useRef({ width: 0, height: 0 }),
        g = i.useRef({ streamId: n, paused: s, onReady: o, onResize: l, onContainerResized: t });
    return (
        i.useLayoutEffect(() => {
            let { current: e } = h;
            function t() {
                let { width: e, height: t } = E.current,
                    n = m.current?.videoWidth ?? 0,
                    r = m.current?.videoHeight ?? 0;
                if (e !== n || t !== r) {
                    let e = { width: n, height: r };
                    g.current.onResize?.(e), (E.current = e);
                }
            }
            function n() {
                u.info(`handleReady for ${g.current.streamId}, have onReady callback = ${null != g.current.onReady}`),
                    g.current.onReady?.();
            }
            function r() {
                g.current.paused || m.current?.play();
            }
            let i = new ResizeObserver((e) => {
                if (c)
                    for (let t of e) {
                        if (t.target !== m.current) continue;
                        let e = window.devicePixelRatio * t.target.clientWidth,
                            n = window.devicePixelRatio * t.target.clientHeight;
                        g.current.onContainerResized?.(g.current.streamId, e, n);
                    }
            });
            if (null != e) {
                let s = document.createElement("video");
                (s.style.display = "block"),
                    (s.style.width = "100%"),
                    (s.style.height = "100%"),
                    (s.autoplay = !0),
                    (s.muted = !0),
                    s.addEventListener("pause", r),
                    s.addEventListener("resize", t),
                    s.addEventListener("canplaythrough", n),
                    u.info(`create video element for ${g.current.streamId}, readyState=${s.readyState}`),
                    s.readyState > 3 && u.error(`video element for ${g.current.streamId} was ready before attached`),
                    e.appendChild(s),
                    i.disconnect(),
                    i.observe(s),
                    (m.current = s);
            }
        }, [c]),
        i.useEffect(() => {
            (g.current.streamId = n), (g.current.paused = s), (g.current.onReady = o), (g.current.onResize = l);
        }),
        i.useEffect(() => {
            let e = m.current;
            if (null != e)
                if (!s)
                    return (
                        u.info(`attaching srcObject for ${n}`),
                        (e.srcObject = _(n)),
                        () => {
                            f(n), (e.srcObject = null);
                        }
                    );
                else null != e.srcObject && ((e.srcObject = null), f(n));
        }, [s, n]),
        (0, r.jsx)("div", { className: a()("media-engine-video", d), ref: h, ...p })
    );
}
