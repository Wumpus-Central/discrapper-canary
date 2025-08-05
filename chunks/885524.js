n.d(t, { Z: () => d });
var r = n(73800),
    i = n(46973),
    a = n(846519),
    o = n(763520),
    s = n(798681),
    l = n(70956),
    c = n(878001);
let u = 20 * l.Z.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: l, streamKey: d, loading: f, paused: _ = !1 } = e,
        p = r.useRef(new a.V7()),
        h = l === o.m.SELF_STREAM || l === o.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (!f || _ || !s.w.isIncomingVideoEnabled()) return;
            let e = p.current;
            return (
                e.start(u, () => {
                    (0, c.K)(t, n, h, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [_, t, f, h, d, n]),
        {
            onReady: r.useCallback(() => {
                (p.current.stop(), (0, c.w)(h, n));
            }, [n, h])
        }
    );
}
