n.d(t, { Z: () => d });
var r = n(647438),
    i = n(46973),
    l = n(846519),
    o = n(763520),
    a = n(798681),
    s = n(70956),
    c = n(878001);
let u = 20 * s.Z.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: s, streamKey: d, loading: p, paused: f = !1 } = e,
        h = r.useRef(new l.V7()),
        g = s === o.m.SELF_STREAM || s === o.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (!p || f || !a.w.isIncomingVideoEnabled()) return;
            let e = h.current;
            return (
                e.start(u, () => {
                    (0, c.K)(t, n, g, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [f, t, p, g, d, n]),
        {
            onReady: r.useCallback(() => {
                h.current.stop(), (0, c.w)(g, n);
            }, [n, g]),
        }
    );
}
