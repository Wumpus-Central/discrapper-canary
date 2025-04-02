t.d(l, { Z: () => u });
var n = t(192379),
    i = t(46973),
    s = t(846519),
    r = t(763520),
    a = t(70956),
    o = t(878001);
let c = 20 * a.Z.Millis.SECOND;
function u(e) {
    let { streamId: l, userId: t, videoSpinnerContext: a, streamKey: u, paused: d = !1 } = e,
        m = n.useRef(new s.V7()),
        p = a === r.m.SELF_STREAM || a === r.m.REMOTE_STREAM ? i.Yn.STREAM : i.Yn.DEFAULT;
    return (
        n.useEffect(() => {
            if (d || null == l) return;
            let e = m.current;
            return (
                e.start(c, () => {
                    (0, o.K)(l, t, p, u);
                }),
                () => {
                    e.stop();
                }
            );
        }, [d, l, p, u, t]),
        {
            onReady: n.useCallback(() => {
                m.current.stop(), (0, o.w)(p, t);
            }, [t, p])
        }
    );
}
