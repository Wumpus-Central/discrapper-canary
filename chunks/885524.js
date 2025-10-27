n.d(t, { Z: () => d });
var r = n(647438),
    i = n(46973),
    l = n(846519),
    a = n(763520),
    o = n(798681),
    c = n(70956),
    s = n(878001);
let u = 20 * c.Z.Millis.SECOND;
function d(e) {
    let { streamId: t, userId: n, videoSpinnerContext: c, streamKey: d, loading: f, paused: p = !1 } = e,
        _ = r.useRef(new l.V7()),
        m = c === a.m.SELF_STREAM || c === a.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (!f || p || !o.w.isIncomingVideoEnabled()) return;
            let e = _.current;
            return (
                e.start(u, () => {
                    (0, s.K)(t, n, m, d);
                }),
                () => {
                    e.stop();
                }
            );
        }, [p, t, f, m, d, n]),
        {
            onReady: r.useCallback(() => {
                _.current.stop(), (0, s.w)(m, n);
            }, [n, m]),
        }
    );
}
