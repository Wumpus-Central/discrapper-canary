n.d(t, { Z: () => d });
var r = n(473749),
    i = n(46973),
    l = n(846519),
    a = n(763520),
    o = n(798681),
    c = n(70956),
    s = n(878001);
let u = 20 * c.Z.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: c, streamKey: d, loading: f, paused: p = !1 } = e,
        m = r.useRef(new l.V7()),
        _ = c === a.m.SELF_STREAM || c === a.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (!f || p || !o.w.isIncomingVideoEnabled()) return;
            let e = m.current;
            return (
                e.start(u, () => {
                    (0, s.K)(t, n, _, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [p, t, f, _, d, n]),
        {
            onReady: r.useCallback(() => {
                m.current.stop(), (0, s.w)(_, n);
            }, [n, _]),
        }
    );
}
