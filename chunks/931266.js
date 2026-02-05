"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(118356),
    l = n(823598);
let u = new o.Vy("DirectVideo");
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
            paused: a = !1,
            onReady: o,
            onResize: l,
            reportContainerResized: c = !0,
            className: d,
            ...p
        } = e,
        h = i.useRef(null),
        m = i.useRef(null),
        g = i.useRef({ width: 0, height: 0 }),
        E = i.useRef({ streamId: n, paused: a, onReady: o, onResize: l, onContainerResized: t });
    return (
        i.useLayoutEffect(() => {
            let { current: e } = h;
            function t() {
                let { width: e, height: t } = g.current,
                    n = m.current?.videoWidth ?? 0,
                    r = m.current?.videoHeight ?? 0;
                if (e !== n || t !== r) {
                    let e = { width: n, height: r };
                    E.current.onResize?.(e), (g.current = e);
                }
            }
            function n() {
                u.info(`handleReady for ${E.current.streamId}, have onReady callback = ${null != E.current.onReady}`),
                    E.current.onReady?.();
            }
            function r() {
                E.current.paused || m.current?.play();
            }
            let i = new ResizeObserver((e) => {
                if (c)
                    for (let t of e) {
                        if (t.target !== m.current) continue;
                        let e = window.devicePixelRatio * t.target.clientWidth,
                            n = window.devicePixelRatio * t.target.clientHeight;
                        E.current.onContainerResized?.(E.current.streamId, e, n);
                    }
            });
            if (null != e) {
                let a = document.createElement("video");
                (a.style.display = "block"),
                    (a.style.width = "100%"),
                    (a.style.height = "100%"),
                    (a.autoplay = !0),
                    (a.muted = !0),
                    a.addEventListener("pause", r),
                    a.addEventListener("resize", t),
                    a.addEventListener("canplaythrough", n),
                    u.info(`create video element for ${E.current.streamId}, readyState=${a.readyState}`),
                    a.readyState > 3 && u.error(`video element for ${E.current.streamId} was ready before attached`),
                    e.appendChild(a),
                    i.disconnect(),
                    i.observe(a),
                    (m.current = a);
            }
        }, [c]),
        i.useEffect(() => {
            (E.current.streamId = n), (E.current.paused = a), (E.current.onReady = o), (E.current.onResize = l);
        }),
        i.useEffect(() => {
            let e = m.current;
            if (null != e)
                if (!a)
                    return (
                        u.info(`attaching srcObject for ${n}`),
                        (e.srcObject = _(n)),
                        () => {
                            f(n), (e.srcObject = null);
                        }
                    );
                else null != e.srcObject && ((e.srcObject = null), f(n));
        }, [a, n]),
        (0, r.jsx)("div", { className: s()("media-engine-video", d), ref: h, ...p })
    );
}
