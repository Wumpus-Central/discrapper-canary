let r;
(n.d(t, { Z: () => f }), n(388685));
var i = n(46973),
    a = n(846027),
    o = n(147913),
    s = n(131951),
    l = n(358085),
    c = n(375538),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class _ extends o.Z {
    constructor(...e) {
        (super(...e),
            d(this, 'handlePostConnectionOpen', () => {
                (null == r || r(),
                    (0, l.isWeb)() ||
                        (r = c.g.subscribe({ location: 'KrispExperimentManager handlePostConnectionOpen' }, (e) => {
                            var t;
                            let { enableStats: n } = e;
                            null == (t = a.Z.setNoiseCancellationEnableStats) || t.call(a.Z, n);
                        })));
            }),
            d(this, 'handleRtcConnectionState', (e) => {
                let { state: t, context: n } = e;
                !(0, l.isWeb)() && n === i.Yn.DEFAULT && t !== u.hes.DISCONNECTED && t === u.hes.RTC_CONNECTED && s.Z.getKrispEnableStats() && s.Z.getNoiseCancellation() && (a.Z.setNoiseCancellation(!1), a.Z.setNoiseCancellation(!0));
            }),
            d(this, 'actions', {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RTC_CONNECTION_STATE: this.handleRtcConnectionState
            }));
    }
}
let f = new _();
