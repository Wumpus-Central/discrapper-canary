n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    l = n(205693),
    a = n(451988),
    s = n(430452),
    o = n(383501),
    c = n(485296),
    u = n(927813),
    d = n(340913),
    p = n(731854);
let f = 3 * u.A.Millis.SECOND;

function h() {
    let { showPTTSpeakingIndicator: e } = d.A.useConfig({
            location: "useSpeakingWhilePTT",
        }),
        [t, n] = r.useState(!1),
        u = (0, i.bG)([s.A], () => s.A.getMode() === p.TB.PUSH_TO_TALK),
        h = (0, i.bG)([o.A], () => o.A.getRTCConnectionId()),
        A = r.useRef(new a.Ep());
    return (
        r.useEffect(() => {
            n(!1);
        }, [h]),
        r.useEffect(() => {
            let t = 0,
                r = A.current;

            function i(e, i) {
                let l = (i & p.ME.VOICE) === p.ME.VOICE,
                    a = c.A.isCurrentUserPTTActive();
                l && !a
                    ? ++t >= 5 &&
                      (n(!0),
                      r.start(f, () => {
                          n(!1);
                      }))
                    : (t = 0);
            }
            return (
                e && u && null != h && s.A.getMediaEngine().on(l.bg.VoiceActivity, i),
                () => {
                    s.A.getMediaEngine().removeListener(l.bg.VoiceActivity, i), r.stop();
                }
            );
        }, [e, u, h]),
        t
    );
}
