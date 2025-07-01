let r;
(n.d(t, { Z: () => f }), n(388685));
var i = n(46973),
    a = n(846027),
    o = n(147913),
    s = n(358085),
    l = n(994234),
    c = n(981631);
function u(e, t, n) {
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
class d extends o.Z {
    constructor(...e) {
        (super(...e),
            u(this, 'handlePostConnectionOpen', () => {
                (null == r || r(),
                    (0, s.isWeb)() ||
                        (r = l.z.subscribe({ location: 'KrispExperimentManager handlePostConnectionOpen' }, (e) => {
                            var t, n;
                            let { forceModel: r, krispSuppressionLevel: i } = e;
                            (null == (t = a.Z.setKrispModelOverride) || t.call(a.Z, null != r ? r : ''), null == (n = a.Z.setKrispSuppressionLevel) || n.call(a.Z, null != i ? i : 100));
                        })));
            }),
            u(this, 'handleRtcConnectionState', (e) => {
                let { state: t, context: n } = e;
                (0, s.isWeb)() || (n === i.Yn.DEFAULT && t !== c.hes.DISCONNECTED && l.z.trackExposure({ location: 'KrispExperimentManager' }));
            }),
            u(this, 'actions', {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RTC_CONNECTION_STATE: this.handleRtcConnectionState
            }));
    }
}
let f = new d();
