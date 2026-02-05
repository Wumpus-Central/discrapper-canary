n.d(t, { A: () => _ });
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
let h = 3 * c.A.Millis.SECOND;
function _() {
    let { showPTTSpeakingIndicator: e } = u.A.useConfig({ location: "useSpeakingWhilePTT" }),
        [t, n] = i.useState(!1),
        c = (0, r.bG)([s.A], () => s.A.getMode() === A.TB.PUSH_TO_TALK),
        _ = (0, r.bG)([o.A], () => o.A.getRTCConnectionId()),
        m = i.useRef(new l.Ep());
    return (
        i.useEffect(() => {
            n(!1);
        }, [_]),
        i.useEffect(() => {
            let t = 0,
                i = m.current;
            function r(e, r) {
                let a = (r & A.ME.VOICE) === A.ME.VOICE,
                    l = d.A.isCurrentUserPTTActive();
                a && !l
                    ? ++t >= 5 &&
                      (n(!0),
                      i.start(h, () => {
                          n(!1);
                      }))
                    : (t = 0);
            }
            return (
                e && c && null != _ && s.A.getMediaEngine().on(a.bg.VoiceActivity, r),
                () => {
                    s.A.getMediaEngine().removeListener(a.bg.VoiceActivity, r), i.stop();
                }
            );
        }, [e, c, _]),
        t
    );
}
