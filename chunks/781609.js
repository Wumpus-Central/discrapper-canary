n.d(t, { A: () => E });
var i = n(439372),
    r = n(710195),
    a = n(965957),
    s = n(312671),
    l = n(458640),
    o = n(280450),
    d = n(771527),
    c = n(552122),
    u = n(235079);
class _ extends i.A {
    stores = new Map().set(r.A, () => this.handleExperimentUpdated());
    actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone };
    handleExperimentUpdated = () => {
        null != o.default.getId() && (this.updateSoundpack(), this.updateRingtone());
    };
    updateSoundpack() {
        let e = s.A.getSoundpack(),
            t = s.A.getLastSoundpackExperimentId(),
            n = d.A.experiment?.definition.name,
            i = c.A.isEligible();
        i || e === u.i.CLASSIC
            ? i && null != d.A.soundpack && n !== t && e !== d.A.soundpack && (0, a.p)(d.A.soundpack, n)
            : (0, a.p)(u.i.CLASSIC, null);
    }
    updateRingtone() {
        if (c.A.isEligible()) {
            let e = (0, l.A)(s.A.getSoundpack());
            null != e.call_ringing && e.call_ringing;
        }
    }
}
let E = new _();
