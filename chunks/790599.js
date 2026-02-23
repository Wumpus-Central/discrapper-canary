"use strict";
var r = n(823598),
    i = n(626584),
    s = n(723702),
    a = n(837921);
(0, r.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (s.isPlatformEmbedded) {
                let e = (0, r.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new i.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => a.Ay.supportsFeature(e),
    setProcessPriority(e) {
        a.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => a.Ay.getVoiceEngine(),
    getVoiceFilters: () => a.Ay.getVoiceFilters(),
    getOpenH264LibraryPath: () => a.Ay.getOpenH264LibraryPath(),
});
