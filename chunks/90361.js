"use strict";
n.d(t, { A: () => u });
var r = n(574381),
    i = n(118356),
    s = n(73153),
    a = n(954571),
    o = n(652215);
let l = new i.Vy("AudioEffects");
async function u(e, t, n) {
    if (!(0, r.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let r = await n.getDeviceAudioEffects(e);
        return (
            s.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...r }),
            a.default.track(o.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: r.active,
                available_effects: r.available,
            }),
            r
        );
    } catch (e) {
        l.error("Failed to probe audio effects for device", e),
            a.default.track(o.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
