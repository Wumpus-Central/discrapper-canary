t.d(n, {
    Ft: () => s.default,
    nY: () => a.nY,
    zj: () => a.zj,
    lx: () => a.lx,
    OH: () => a.OH,
    KP: () => a.KP,
    pK: () => a.pK,
    Kb: () => a.Kb,
    KI: () => 4e3,
    _4: () => 2e3,
    bq: () => 2,
    rB: () => m.rB,
    B8: () => l.B8,
    xx: () => l.xx,
    P8: () => i.A,
    Yr: () => u,
});
var s = t(955368);
(t(530567), t(40705), t(894413));
var l = t(565164);
(t(408121), t(931853), t(246047), t(91034), t(710434), t(634156));
var r = t(876230),
    a = t(831056),
    c = t(582128);
function u(e) {
    let { getCurrentVideoTime: n, onAnalytics: t, emitIntervalMs: s, minSegmentDurationMs: l } = e,
        [a, u] = c.useState(null),
        [i, m] = c.useState(!1),
        [d, o] = c.useState(!1),
        [S, f] = c.useState(!1),
        x = (0, c.useRef)(null),
        g = (0, c.useRef)(Date.now()),
        h = (0, c.useRef)(!1),
        j = (0, c.useCallback)(
            (e) => {
                e.segmentEndSec < e.segmentStartSec ||
                    t({
                        start_time: e.startTimeMs,
                        end_time: e.endTimeMs,
                        duration: e.endTimeMs - e.startTimeMs,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                    });
            },
            [t],
        ),
        v = (0, c.useCallback)(() => {
            let e = n();
            if (null != e && d && S) {
                let n = Date.now();
                (u({ startTimeMs: n, endTimeMs: n, segmentStartSec: e, segmentEndSec: e }), (h.current = !0));
            }
        }, [n, d, S]),
        b = (0, c.useCallback)(() => {
            let e = n();
            if (null == e || null == a) return;
            let t = Date.now();
            t - g.current < s ||
                e - a.segmentStartSec < l / 1e3 ||
                (j({ ...a, endTimeMs: t, segmentEndSec: e }),
                u({ startTimeMs: t, endTimeMs: t, segmentStartSec: e, segmentEndSec: e }),
                (g.current = t));
        }, [a, j, s, l, n]);
    ((0, c.useEffect)(() => {
        (d && S) || (u(null), (h.current = !1));
    }, [d, S]),
        (0, c.useEffect)(() => {
            if (i && d && S)
                (h.current || v(),
                    (x.current = window.setInterval(() => {
                        b();
                    }, 200)));
            else {
                let e = n();
                if (null != a && null != e) {
                    let n = Date.now();
                    e - a.segmentStartSec > 0.2 && j({ ...a, endTimeMs: n, segmentEndSec: e });
                }
                (u(null), (h.current = !1), null != x.current && (clearInterval(x.current), (x.current = null)));
            }
            return () => {
                null != x.current && (clearInterval(x.current), (x.current = null));
            };
        }, [i, d, S, a, b, j, v, n]));
    let M = (0, c.useCallback)(
            (e) => {
                let t = e ?? n();
                if (null != a && null != t) {
                    let e = Date.now();
                    (t - a.segmentStartSec > 0.2 && j({ ...a, endTimeMs: e, segmentEndSec: t }),
                        u(null),
                        (h.current = !1));
                }
            },
            [a, j, n],
        ),
        N = (0, c.useRef)(M);
    N.current = M;
    let k = (0, c.useCallback)((e, n) => {
            switch (e) {
                case r.Q6.PLAYING:
                    m(!0);
                    break;
                case r.Q6.PAUSED:
                case r.Q6.ENDED:
                    (N.current(), m(!1));
            }
        }, []),
        p = (0, c.useCallback)((e) => {
            o(!0);
        }, []);
    return {
        handlePlayerStateChange: k,
        handleLoadEnd: p,
        handleFirstFrame: (0, c.useCallback)((e) => {
            f(!0);
        }, []),
        handleSeek: (0, c.useCallback)((e) => {
            N.current(e);
        }, []),
    };
}
var i = t(23590);
(t(984212), t(739416), t(920228));
var m = t(61491);
t(645577);
