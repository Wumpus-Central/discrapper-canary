n.d(t, {
    Z: function () {
        return i;
    }
}),
    n(47120);
var r = n(192379);
function i(e) {
    let { videoRef: t, isPlaying: n, isMetadataLoaded: i, isInitialSeekComplete: l, onAnalytics: o, emitIntervalMs: s, minSegmentDurationMs: a } = e,
        [u, c] = r.useState(null),
        d = (0, r.useRef)(null),
        m = (0, r.useRef)(Date.now()),
        v = (0, r.useRef)(!1),
        E = (0, r.useCallback)(
            (e) => {
                if (!(e.segmentEndSec < e.segmentStartSec))
                    o({
                        start_time: e.startTime,
                        end_time: e.endTime,
                        duration: e.endTime - e.startTime,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec
                    });
            },
            [o]
        ),
        p = (0, r.useCallback)(() => {
            if (null != t.current && i && l) {
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
        }, [t, i, l]),
        C = (0, r.useCallback)(() => {
            if (null == t.current || null == u) return;
            let e = Date.now();
            if (e - m.current < s) return;
            let n = t.current.currentTime;
            if (!(n - u.segmentStartSec < a / 1000))
                E({
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
                    (m.current = e);
        }, [u, E, s, t, a]);
    return (
        (0, r.useEffect)(() => {
            (!i || !l) && (c(null), (v.current = !1));
        }, [i, l]),
        (0, r.useEffect)(() => {
            if (n && i && l)
                !v.current && p(),
                    (d.current = window.setInterval(() => {
                        C();
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
        }, [n, i, l, u, C, E, t, p]),
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
