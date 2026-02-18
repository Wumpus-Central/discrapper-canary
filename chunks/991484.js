n.d(t, { A: () => l });
var r = n(64700);
function l(e) {
    let {
            getCurrentVideoTime: t,
            isPlaying: n,
            isMetadataLoaded: l,
            isInitialSeekComplete: i,
            onAnalytics: s,
            emitIntervalMs: a,
            minSegmentDurationMs: o,
        } = e,
        [u, c] = r.useState(null),
        d = (0, r.useRef)(null),
        m = (0, r.useRef)(Date.now()),
        p = (0, r.useRef)(!1),
        E = (0, r.useCallback)(
            (e) => {
                e.segmentEndSec < e.segmentStartSec ||
                    s({
                        start_time: e.startTime,
                        end_time: e.endTime,
                        duration: e.endTime - e.startTime,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                    });
            },
            [s],
        ),
        f = (0, r.useCallback)(() => {
            let e = t();
            if (null != e && l && i) {
                let t = Date.now();
                c({ startTime: t, endTime: t, segmentStartSec: e, segmentEndSec: e }), (p.current = !0);
            }
        }, [t, l, i]),
        v = (0, r.useCallback)(() => {
            let e = t();
            if (null == e || null == u) return;
            let n = Date.now();
            n - m.current < a ||
                e - u.segmentStartSec < o / 1e3 ||
                (E({ ...u, endTime: n, segmentEndSec: e }),
                c({ startTime: n, endTime: n, segmentStartSec: e, segmentEndSec: e }),
                (m.current = n));
        }, [u, E, a, o, t]);
    return (
        (0, r.useEffect)(() => {
            (l && i) || (c(null), (p.current = !1));
        }, [l, i]),
        (0, r.useEffect)(() => {
            if (n && l && i)
                p.current || f(),
                    (d.current = window.setInterval(() => {
                        v();
                    }, 200));
            else {
                let e = t();
                if (null != u && null != e) {
                    let t = Date.now();
                    e - u.segmentStartSec > 0.2 && E({ ...u, endTime: t, segmentEndSec: e });
                }
                c(null), (p.current = !1), null != d.current && (clearInterval(d.current), (d.current = null));
            }
            return () => {
                null != d.current && (clearInterval(d.current), (d.current = null));
            };
        }, [n, l, i, u, v, E, f, t]),
        {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
                let e = t();
                if (null != u && null != e) {
                    let t = Date.now();
                    e - u.segmentStartSec > 0.2 && E({ ...u, endTime: t, segmentEndSec: e }), c(null), (p.current = !1);
                }
            }, [u, E, t]),
            isInitialized: p.current,
        }
    );
}
