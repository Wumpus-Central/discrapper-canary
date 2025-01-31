n.d(t, { Z: () => c });
var i = n(570140),
    r = n(317770),
    a = n(358085),
    s = n(374023),
    o = n(761274),
    l = n(981631);
class u extends r.Z {
    isEnabled() {
        return (0, a.isDesktop)() && (0, a.isMac)() && !s.s.isDiscordTestSet();
    }
    _initialize() {
        this.isEnabled() && i.Z.subscribe('AUDIO_SET_MODE', this.handleAudioSetMode);
    }
    _terminate() {
        this.isEnabled() && i.Z.unsubscribe('AUDIO_SET_MODE', this.handleAudioSetMode);
    }
    handleAudioSetMode(e) {
        let { mode: t } = e;
        t === l.pM4.PUSH_TO_TALK && n(751571).Z.requestPermission(o.Eu.INPUT_MONITORING);
    }
}
let c = new u();
