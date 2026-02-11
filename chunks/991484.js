"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i(e) {
    let {
            getCurrentVideoTime: t,
            isPlaying: n,
            isMetadataLoaded: i,
            isInitialSeekComplete: a,
            onAnalytics: s,
            emitIntervalMs: o,
            minSegmentDurationMs: l,
        } = e,
        [u, c] = r.useState(null),
        d = (0, r.useRef)(null),
        _ = (0, r.useRef)(Date.now()),
        f = (0, r.useRef)(!1),
        h = (0, r.useCallback)(
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
        p = (0, r.useCallback)(() => {
            let e = t();
            if (null != e && i && a) {
                let t = Date.now();
                c({ startTime: t, endTime: t, segmentStartSec: e, segmentEndSec: e }), (f.current = !0);
            }
        }, [t, i, a]),
        g = (0, r.useCallback)(() => {
            let e = t();
            if (null == e || null == u) return;
            let n = Date.now();
            n - _.current < o ||
                e - u.segmentStartSec < l / 1e3 ||
                (h({ ...u, endTime: n, segmentEndSec: e }),
                c({ startTime: n, endTime: n, segmentStartSec: e, segmentEndSec: e }),
                (_.current = n));
        }, [u, h, o, l, t]);
    return (
        (0, r.useEffect)(() => {
            (i && a) || (c(null), (f.current = !1));
        }, [i, a]),
        (0, r.useEffect)(() => {
            if (n && i && a)
                f.current || p(),
                    (d.current = window.setInterval(() => {
                        g();
                    }, 200));
            else {
                let e = t();
                if (null != u && null != e) {
                    let t = Date.now();
                    e - u.segmentStartSec > 0.2 && h({ ...u, endTime: t, segmentEndSec: e });
                }
                c(null), (f.current = !1), null != d.current && (clearInterval(d.current), (d.current = null));
            }
            return () => {
                null != d.current && (clearInterval(d.current), (d.current = null));
            };
        }, [n, i, a, u, g, h, p, t]),
        {
            forceSendCurrentSegment: (0, r.useCallback)(() => {
                let e = t();
                if (null != u && null != e) {
                    let t = Date.now();
                    e - u.segmentStartSec > 0.2 && h({ ...u, endTime: t, segmentEndSec: e }), c(null), (f.current = !1);
                }
            }, [u, h, t]),
            isInitialized: f.current,
        }
    );
}
