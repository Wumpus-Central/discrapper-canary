n.d(t, { Z: () => p }), n(47120);
var r = n(147913),
    i = n(716364),
    o = n(474873),
    a = n(135906),
    s = n(378364),
    l = n(197344),
    c = n(860973),
    u = n(871465);
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
class f extends r.Z {
    _initialize() {
        this.subscription = l.Z.subscribe(this.handleExperimentUpdated);
    }
    _terminate() {
        var e, t;
        null === (e = (t = this).subscription) || void 0 === e || e.call(t), (this.subscription = void 0);
    }
    updateSoundpack() {
        let e = o.Z.getSoundpack(),
            t = o.Z.getLastSoundpackExperimentId(),
            n = s.Z.experiment.definition.id,
            r = l.Z.isEligible();
        r || (null == t && e === u.YC.CLASSIC) ? r && null != s.Z.soundpack && n !== t && e !== s.Z.soundpack && (0, i.c)(s.Z.soundpack, n) : (0, i.c)(u.YC.CLASSIC, null);
    }
    updateRingtone() {
        if (l.Z.isEligible()) {
            let e = (0, a.Z)(o.Z.getSoundpack());
            null != e.call_ringing && (0, c._)('call_ringing', e.call_ringing + '.mp3');
        } else (0, c._)('call_ringing', 'call_ringing.mp3');
    }
    constructor(...e) {
        super(...e),
            d(this, 'actions', { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone }),
            d(this, 'subscription', void 0),
            d(this, 'handleExperimentUpdated', () => {
                this.updateSoundpack(), this.updateRingtone();
            });
    }
}
let p = new f();
