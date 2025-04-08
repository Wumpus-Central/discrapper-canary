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
        _ = r.useRef(new o.V7()),
        p = s === l.m.SELF_STREAM || s === l.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        r.useEffect(() => {
            if (d) return;
            let e = _.current;
            return (
                e.start(c, () => {
                    (0, a.K)(t, n, p, u);
                }),
                () => {
                    e.stop();
                }
            );
        }, [d, t, p, u, n]),
        {
            onReady: r.useCallback(() => {
                _.current.stop(), (0, a.w)(p, n);
            }, [n, p])
        }
    );
}
