"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(710195),
    s = n(965957),
    a = n(312671),
    o = n(458640),
    l = n(417146),
    d = n(552122),
    _ = n(235079);
class u extends i.A {
    stores = new Map().set(r.A, () => this.handleExperimentUpdated());
    actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: this.updateRingtone };
    handleExperimentUpdated = () => {
        this.updateSoundpack(), this.updateRingtone();
    };
    updateSoundpack() {
        let e = a.A.getSoundpack(),
            t = a.A.getLastSoundpackExperimentId(),
            n = l.A.experiment?.definition.name,
            i = d.A.isEligible();
        i || (null == t && e === _.i.CLASSIC)
            ? i && null != l.A.soundpack && n !== t && e !== l.A.soundpack && (0, s.p)(l.A.soundpack, n)
            : (0, s.p)(_.i.CLASSIC, null);
    }
    updateRingtone() {
        if (d.A.isEligible()) {
            let e = (0, o.A)(a.A.getSoundpack());
            null != e.call_ringing && e.call_ringing;
        }
    }
}
let c = new u();
