n.d(t, { Z: () => d });
var r = n(192379),
    i = n(46973),
    o = n(846519),
    l = n(763520),
    s = n(798681),
    a = n(70956),
    c = n(878001);
let u = 20 * a.Z.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: a, streamKey: d, loading: p, paused: _ = !1 } = e,
        h = r.useRef(new o.V7()),
        f = a === l.m.SELF_STREAM || a === l.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (!p || _ || !s.w.isIncomingVideoEnabled()) return;
            let e = h.current;
            return (
                e.start(u, () => {
                    (0, c.K)(t, n, f, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [_, t, p, f, d, n]),
        {
            onReady: r.useCallback(() => {
                h.current.stop(), (0, c.w)(f, n);
            }, [n, f])
        }
    );
}
