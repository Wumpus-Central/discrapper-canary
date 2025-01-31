n.d(t, { Z: () => l }), n(47120);
var r = n(192379);
function l(e) {
    let { videoRef: t, isPlaying: n, isMetadataLoaded: l, isInitialSeekComplete: i, onAnalytics: s, emitIntervalMs: o, minSegmentDurationMs: a } = e,
        [u, c] = r.useState(null),
        d = (0, r.useRef)(null),
        m = (0, r.useRef)(Date.now()),
        v = (0, r.useRef)(!1),
        E = (0, r.useCallback)(
            (e) => {
                !(e.segmentEndSec < e.segmentStartSec) &&
                    s({
                        start_time: e.startTime,
                        end_time: e.endTime,
                        duration: e.endTime - e.startTime,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec
                    });
            },
            [s]
        ),
        C = (0, r.useCallback)(() => {
            if (null != t.current && l && i) {
                let e = Date.now(),
                    n = t.current.currentTime;
                c({
                    startTime: e,
                    endTime: e,
                    segmentStartSec: n,
                    segmentEndSec: n
                }),
                    (v.current = !0);
            }
        }, [t, l, i]),
        p = (0, r.useCallback)(() => {
            if (null == t.current || null == u) return;
            let e = Date.now();
            if (e - m.current < o) return;
            let n = t.current.currentTime;
            !(n - u.segmentStartSec < a / 1000) &&
                (E({
                    ...u,
                    endTime: e,
                    segmentEndSec: n
                }),
                c({
                    startTime: e,
                    endTime: e,
                    segmentStartSec: n,
                    segmentEndSec: n
                }),
                (m.current = e));
        }, [u, E, o, t, a]);
    return (
        (0, r.useEffect)(() => {
            (l && i) || (c(null), (v.current = !1));
        }, [l, i]),
        (0, r.useEffect)(() => {
            if (n && l && i)
                v.current || C(),
                    (d.current = window.setInterval(() => {
                        p();
                    }, 200));
            else {
                if (null != u && null != t.current) {
                    let e = Date.now(),
                        n = t.current.currentTime;
                    n - u.segmentStartSec > 0.2 &&
                        E({
                            ...u,
                            endTime: e,
                            segmentEndSec: n
                        });
                }
                c(null), (v.current = !1), null != d.current && (clearInterval(d.current), (d.current = null));
            }
            return () => {
                null != d.current && (clearInterval(d.current), (d.current = null));
            };
        }, [n, l, i, u, p, E, t, C]),
        {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
                if (null != u && null != t.current) {
                    let e = Date.now(),
                        n = t.current.currentTime;
                    n - u.segmentStartSec > 0.2 &&
                        E({
                            ...u,
                            endTime: e,
                            segmentEndSec: n
                        }),
                        c(null),
                        (v.current = !1);
                }
            }, [u, E, t]),
            isInitialized: v.current
        }
    );
}
