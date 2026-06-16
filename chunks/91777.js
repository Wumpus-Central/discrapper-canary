"use strict";
let i;
n.d(t, { A: () => _ });
var r = n(723702),
    s = n(536194),
    a = n(228366),
    o = n(272355),
    l = n(765682),
    u = n(652215);
class c extends o.A {
    isEnabled() {
        return (0, r.isDesktop)() && (0, r.isMac)() && !s.P.isDiscordTestSet();
    }
    _initialize() {
        this.isEnabled() && a.h.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
    _terminate() {
        this.isEnabled() && a.h.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
    handleAudioSetMode(e) {
        let { mode: t } = e;
        t === u.TBI.PUSH_TO_TALK && n(91777).A.requestPermission(l.iL.INPUT_MONITORING);
    }
}
let d = new c();
(n(187522), d.initialize(), s.P.isDiscordTestSet())
    ? (i = n(368049).A)
    : (i = (0, r.isDesktop)() ? n(626539).A : n(368049).A);
let _ = i;
