n.d(t, { A: () => m });
var i = n(64700),
    r = n(311907),
    a = n(205693),
    l = n(451988),
    s = n(430452),
    o = n(383501),
    d = n(485296),
    c = n(927813),
    u = n(340913),
    A = n(731854);
let h = 3 * c.A.Millis.SECOND,
    _ = +c.A.Millis.DAY;
function m() {
    let { showPTTSpeakingIndicator: e } = u.A.useConfig({ location: "useSpeakingWhilePTT" }),
        [t, n] = i.useState(!1),
        c = (0, r.bG)([s.A], () => s.A.getMode() === A.TB.PUSH_TO_TALK),
        m = (0, r.bG)([o.A], () => o.A.getRTCConnectionId()),
        p = (0, r.bG)([s.A], () => {
            let e = s.A.getModeOptions().updatedAt;
            return null != e && Date.now() - e < _;
        }),
        g = i.useRef(new l.Ep());
    return (
        i.useEffect(() => {
            n(!1);
        }, [m]),
        i.useEffect(() => {
            let t = 0,
                i = g.current;
            function r(e, r) {
                let a = (r & A.ME.VOICE) === A.ME.VOICE,
                    l = d.A.isCurrentUserPTTActive();
                a && !l
                    ? ++t >= 6 &&
                      (n(!0),
                      i.start(h, () => {
                          n(!1);
                      }))
                    : (t = 0);
            }
            return (
                p && e && c && null != m && s.A.getMediaEngine().on(a.bg.VoiceActivity, r),
                () => {
                    s.A.getMediaEngine().removeListener(a.bg.VoiceActivity, r), i.stop();
                }
            );
        }, [e, c, p, m]),
        t
    );
}
