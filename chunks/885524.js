n.d(t, { Z: () => u });
var r = n(192379),
    i = n(46973),
    o = n(846519),
    l = n(763520),
    s = n(70956),
    a = n(878001);
let c = 20 * s.Z.Millis.SECOND;
function u(e) {
    let { streamId: t, userId: n, videoSpinnerContext: s, streamKey: u, paused: d = !1 } = e,
        p = r.useRef(new o.V7()),
        _ = s === l.m.SELF_STREAM || s === l.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (d || null == t) return;
            let e = p.current;
            return (
                e.start(c, () => {
                    (0, a.K)(t, n, _, u);
                }),
                () => {
                    e.stop();
                }
            );
        }, [d, t, _, u, n]),
        {
            onReady: r.useCallback(() => {
                p.current.stop(), (0, a.w)(_, n);
            }, [n, _])
        }
    );
}
