n.d(t, { Z: () => u });
var r = n(570140),
    i = n(317770),
    a = n(358085),
    o = n(374023),
    s = n(761274),
    l = n(981631);
class c extends i.Z {
    isEnabled() {
        return (0, a.isDesktop)() && (0, a.isMac)() && !o.s.isDiscordTestSet();
    }
    _initialize() {
        this.isEnabled() && r.Z.subscribe('AUDIO_SET_MODE', this.handleAudioSetMode);
    }
    _terminate() {
        this.isEnabled() && r.Z.unsubscribe('AUDIO_SET_MODE', this.handleAudioSetMode);
    }
    handleAudioSetMode(e) {
        let { mode: t } = e;
        t === l.pM4.PUSH_TO_TALK && n(751571).Z.requestPermission(s.Eu.INPUT_MONITORING);
    }
}
let u = new c();
