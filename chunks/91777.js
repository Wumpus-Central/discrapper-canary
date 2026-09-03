let i;
n.d(t, { A: () => _ });
var r = n(723702),
    a = n(536194),
    s = n(228366),
    l = n(272355),
    o = n(765682),
    d = n(652215);
class c extends l.A {
    isEnabled() {
        return (0, r.isDesktop)() && (0, r.isMac)() && !a.P.isDiscordTestSet();
    }
    _initialize() {
        this.isEnabled() && s.h.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
    _terminate() {
        this.isEnabled() && s.h.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
    handleAudioSetMode(e) {
        let { mode: t } = e;
        t === d.TBI.PUSH_TO_TALK && n(91777).A.requestPermission(o.iL.INPUT_MONITORING);
    }
}
let u = new c();
(n(187522), u.initialize(), a.P.isDiscordTestSet())
    ? (i = n(368049).A)
    : (i = (0, r.isDesktop)() ? n(626539).A : n(368049).A);
let _ = i;
