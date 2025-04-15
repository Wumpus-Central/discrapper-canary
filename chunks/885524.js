n.d(t, { Z: () => d });
var r = n(192379),
    i = n(46973),
    l = n(846519),
    o = n(763520),
    s = n(798681),
    a = n(70956),
    c = n(878001);
let u = 20 * a.Z.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: a, streamKey: d, loading: h, paused: p = !1 } = e,
        f = r.useRef(new l.V7()),
        g = a === o.m.SELF_STREAM || a === o.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (!h || p || !s.w.isIncomingVideoEnabled()) return;
            let e = f.current;
            return (
                e.start(u, () => {
                    (0, c.K)(t, n, g, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [p, t, h, g, d, n]),
        {
            onReady: r.useCallback(() => {
                f.current.stop(), (0, c.w)(g, n);
            }, [n, g])
        }
    );
}
