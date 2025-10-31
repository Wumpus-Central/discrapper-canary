n.d(t, { Z: () => d });
var r = n(647438),
    i = n(46973),
    l = n(846519),
    a = n(763520),
    o = n(798681),
    s = n(70956),
    c = n(878001);
let u = 20 * s.Z.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: s, streamKey: d, loading: p, paused: f = !1 } = e,
        h = r.useRef(new l.V7()),
        m = s === a.m.SELF_STREAM || s === a.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (!p || f || !o.w.isIncomingVideoEnabled()) return;
            let e = h.current;
            return (
                e.start(u, () => {
                    (0, c.K)(t, n, m, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [f, t, p, m, d, n]),
        {
            onReady: r.useCallback(() => {
                h.current.stop(), (0, c.w)(m, n);
            }, [n, m]),
        }
    );
}
