n.d(t, { A: () => _ });
var i = n(64700),
    s = n(311907),
    l = n(205693),
    a = n(451988),
    r = n(430452),
    o = n(383501),
    d = n(485296),
    c = n(927813),
    u = n(499156),
    p = n(731854);
let h = 3 * c.A.Millis.SECOND,
    m = +c.A.Millis.DAY;
function _() {
    let { showPTTSpeakingIndicator: e } = u.A.useConfig({ location: "useSpeakingWhilePTT" }),
        [t, n] = i.useState(!1),
        c = (0, s.bG)([r.Ay], () => r.Ay.getMode() === p.TB.PUSH_TO_TALK),
        _ = (0, s.bG)([o.A], () => o.A.getRTCConnectionId()),
        A = (0, s.bG)([r.Ay], () => {
            let e = r.Ay.getModeOptions().updatedAt;
            return null != e && Date.now() - e < m;
        }),
        f = i.useRef(new a.Ep());
    return (
        i.useEffect(() => {
            n(!1);
        }, [_]),
        i.useEffect(() => {
            let t = 0,
                i = f.current;
            function s(e, s) {
                let l = (s & p.ME.VOICE) === p.ME.VOICE,
                    a = d.A.isCurrentUserPTTActive();
                l && !a
                    ? ++t >= 6 &&
                      (n(!0),
                      i.start(h, () => {
                          n(!1);
                      }))
                    : (t = 0);
            }
            return (
                A && e && c && null != _ && r.Ay.getMediaEngine().on(l.bg.VoiceActivity, s),
                () => {
                    r.Ay.getMediaEngine().removeListener(l.bg.VoiceActivity, s), i.stop();
                }
            );
        }, [e, c, A, _]),
        t
    );
}
