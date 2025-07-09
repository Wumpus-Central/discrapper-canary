let r, i;
(n.d(t, { Z: () => h }), n(388685));
var a = n(46973),
    o = n(846027),
    s = n(147913),
    l = n(131951),
    c = n(358085),
    u = n(994234),
    d = n(375538),
    f = n(981631);
function _(e, t, n) {
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
class p extends s.Z {
    constructor(...e) {
        (super(...e),
            _(this, 'handlePostConnectionOpen', () => {
                (null == r || r(),
                    null == i || i(),
                    (0, c.isWeb)() ||
                        ((r = u.z.subscribe({ location: 'KrispExperimentManager handlePostConnectionOpen' }, (e) => {
                            var t, n;
                            let { forceModel: r, krispSuppressionLevel: i } = e;
                            (null == (t = o.Z.setKrispModelOverride) || t.call(o.Z, null != r ? r : ''), null == (n = o.Z.setKrispSuppressionLevel) || n.call(o.Z, null != i ? i : 100));
                        })),
                        (i = d.g.subscribe({ location: 'KrispExperimentManager handlePostConnectionOpen' }, (e) => {
                            var t;
                            let { enableStats: n } = e;
                            null == (t = o.Z.setNoiseCancellationEnableStats) || t.call(o.Z, n);
                        }))));
            }),
            _(this, 'handleRtcConnectionState', (e) => {
                let { state: t, context: n } = e;
                (0, c.isWeb)() || (n === a.Yn.DEFAULT && t !== f.hes.DISCONNECTED && (t === f.hes.RTC_CONNECTED && l.Z.getKrispEnableStats() && l.Z.getNoiseCancellation() && (o.Z.setNoiseCancellation(!1), o.Z.setNoiseCancellation(!0)), u.z.trackExposure({ location: 'KrispExperimentManager' })));
            }),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RTC_CONNECTION_STATE: this.handleRtcConnectionState
            }));
    }
}
let h = new p();
