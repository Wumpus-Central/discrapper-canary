n(65821);
var r = n(823598),
    i = n(626584),
    a = n(723702),
    s = n(837921);
(0, r.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (a.isPlatformEmbedded) {
                let e = (0, r.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new i.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => s.Ay.supportsFeature(e),
    setProcessPriority(e) {
        s.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => s.Ay.getVoiceEngine(),
    getVoiceFilters: () => s.Ay.getVoiceFilters(),
});
