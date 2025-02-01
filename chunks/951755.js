n.d(t, { Z: () => _ }), n(47120);
var i = n(147913),
    r = n(716364),
    a = n(474873),
    s = n(135906),
    o = n(378364),
    l = n(197344),
    u = n(860973),
    c = n(871465);
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
class f extends i.Z {
    _initialize() {
        this.subscription = l.Z.subscribe(this.handleExperimentUpdated);
    }
    _terminate() {
        var e, t;
        null === (e = (t = this).subscription) || void 0 === e || e.call(t), (this.subscription = void 0);
    }
    updateSoundpack() {
        let e = a.Z.getSoundpack(),
            t = a.Z.getLastSoundpackExperimentId(),
            n = o.Z.experiment.definition.id,
            i = l.Z.isEligible();
        i || (null == t && e === c.YC.CLASSIC) ? i && null != o.Z.soundpack && n !== t && e !== o.Z.soundpack && (0, r.c)(o.Z.soundpack, n) : (0, r.c)(c.YC.CLASSIC, null);
    }
    updateRingtone() {
        if (l.Z.isEligible()) {
            let e = (0, s.Z)(a.Z.getSoundpack());
            null != e.call_ringing && (0, u._)('call_ringing', e.call_ringing + '.mp3');
        } else (0, u._)('call_ringing', 'call_ringing.mp3');
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
let _ = new f();
