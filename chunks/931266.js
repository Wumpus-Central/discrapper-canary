"use strict";
n.d(t, { A: () => f });
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
    null != t && t.release() && ((0, l.lE)().removeDirectVideoOutputSink(e), d.delete(e));
}
function f(e, t) {
    let {
            streamId: n,
            paused: s = !1,
            onReady: o,
            onResize: f,
            reportContainerResized: p = !0,
            className: h,
            ...E
        } = e,
        m = i.useRef(null),
        g = i.useRef(null),
        A = i.useRef({ width: 0, height: 0 }),
        I = i.useRef({ streamId: n, paused: s, onReady: o, onResize: f, onContainerResized: t });
    return (
        i.useLayoutEffect(() => {
            let { current: e } = m,
                t = new ResizeObserver((e) => {
                    if (p)
                        for (let t of e) {
                            if (t.target !== g.current) continue;
                            let e = window.devicePixelRatio * t.target.clientWidth,
                                n = window.devicePixelRatio * t.target.clientHeight;
                            I.current.onContainerResized?.(I.current.streamId, e, n);
                        }
                });
            if (null != e) {
                let n = document.createElement("video");
                (n.style.display = "block"),
                    (n.style.width = "100%"),
                    (n.style.height = "100%"),
                    (n.autoplay = !0),
                    (n.muted = !0),
                    n.addEventListener("pause", function () {
                        I.current.paused || g.current?.play();
                    }),
                    n.addEventListener("resize", function () {
                        let { width: e, height: t } = A.current,
                            n = g.current?.videoWidth ?? 0,
                            r = g.current?.videoHeight ?? 0;
                        if (e !== n || t !== r) {
                            let e = { width: n, height: r };
                            I.current.onResize?.(e), (A.current = e);
                        }
                    }),
                    n.addEventListener("canplaythrough", function () {
                        u.info(
                            `handleReady for ${I.current.streamId}, have onReady callback = ${null != I.current.onReady}`,
                        ),
                            I.current.onReady?.();
                    }),
                    u.info(`create video element for ${I.current.streamId}, readyState=${n.readyState}`),
                    n.readyState > 3 && u.error(`video element for ${I.current.streamId} was ready before attached`),
                    e.appendChild(n),
                    t.disconnect(),
                    t.observe(n),
                    (g.current = n);
            }
        }, [p]),
        i.useEffect(() => {
            (I.current.streamId = n), (I.current.paused = s), (I.current.onReady = o), (I.current.onResize = f);
        }),
        i.useEffect(() => {
            let e = g.current;
            if (null != e)
                if (s) null != e.srcObject && ((e.srcObject = null), _(n));
                else {
                    let t;
                    return (
                        u.info(`attaching srcObject for ${n}`),
                        null == (t = d.get(n))
                            ? ((t = new c(n)), (0, l.lE)().addDirectVideoOutputSink(n), d.set(n, t))
                            : t.addref(),
                        (e.srcObject = t.stream),
                        () => {
                            _(n), (e.srcObject = null);
                        }
                    );
                }
        }, [s, n]),
        (0, r.jsx)("div", { className: a()("media-engine-video", h), ref: m, ...E })
    );
}
