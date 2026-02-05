n.d(t, { A: () => s });
var r = n(64700);
function s(e) {
    let {
            getCurrentVideoTime: t,
            isPlaying: n,
            isMetadataLoaded: s,
            isInitialSeekComplete: i,
            onAnalytics: l,
            emitIntervalMs: a,
            minSegmentDurationMs: o,
        } = e,
        [u, c] = r.useState(null),
        d = (0, r.useRef)(null),
        m = (0, r.useRef)(Date.now()),
        E = (0, r.useRef)(!1),
        f = (0, r.useCallback)(
            (e) => {
                e.segmentEndSec < e.segmentStartSec ||
                    l({
                        start_time: e.startTime,
                        end_time: e.endTime,
                        duration: e.endTime - e.startTime,
                        segment_start_sec: e.segmentStartSec,
                        segment_end_sec: e.segmentEndSec,
                        segment_duration_sec: e.segmentEndSec - e.segmentStartSec,
                    });
            },
            [l],
        ),
        p = (0, r.useCallback)(() => {
            let e = t();
            if (null != e && s && i) {
                let t = Date.now();
                c({ startTime: t, endTime: t, segmentStartSec: e, segmentEndSec: e }), (E.current = !0);
            }
        }, [t, s, i]),
        v = (0, r.useCallback)(() => {
            let e = t();
            if (null == e || null == u) return;
            let n = Date.now();
            n - m.current < a ||
                e - u.segmentStartSec < o / 1e3 ||
                (f({ ...u, endTime: n, segmentEndSec: e }),
                c({ startTime: n, endTime: n, segmentStartSec: e, segmentEndSec: e }),
                (m.current = n));
        }, [u, f, a, o, t]);
    return (
        (0, r.useEffect)(() => {
            (s && i) || (c(null), (E.current = !1));
        }, [s, i]),
        (0, r.useEffect)(() => {
            if (n && s && i)
                E.current || p(),
                    (d.current = window.setInterval(() => {
                        v();
                    }, 200));
            else {
                let e = t();
                if (null != u && null != e) {
                    let t = Date.now();
                    e - u.segmentStartSec > 0.2 && f({ ...u, endTime: t, segmentEndSec: e });
                }
                c(null), (E.current = !1), null != d.current && (clearInterval(d.current), (d.current = null));
            }
            return () => {
                null != d.current && (clearInterval(d.current), (d.current = null));
            };
        }, [n, s, i, u, v, f, p, t]),
        {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
                let e = t();
                if (null != u && null != e) {
                    let t = Date.now();
                    e - u.segmentStartSec > 0.2 && f({ ...u, endTime: t, segmentEndSec: e }), c(null), (E.current = !1);
                }
            }, [u, f, t]),
            isInitialized: E.current,
        }
    );
}
