n.d(t, { Z: () => R }), n(388685), n(539854);
var r = n(570140),
    i = n(317770),
    a = n(460181),
    o = n(474873),
    s = n(314897),
    l = n(19780),
    c = n(944486),
    u = n(111583),
    d = n(351780),
    f = n(843693),
    p = n(981631);
let _ = (0, a.uk)("poggermode_applause", o.Z.getSoundpack()),
    m = 7,
    h = 1,
    g = 0.1,
    E = 1000,
    b = !1,
    y = !1,
    O = [],
    v = null,
    S = () => {
        b || (_.loop(), (b = !0));
    },
    I = () => {
        _.stop(), (b = !1);
    },
    T = () => {
        let e = d.Z.isEnabled(),
            t = d.Z.comboSoundsEnabled;
        return !!e && !!t && null != c.Z.getChannelId();
    },
    A = () => {
        if (0 === O.length || !T() || y) return;
        y = !0;
        let [e, t] = O[O.length - 1];
        (0, a.GN)(e, t), (v = setTimeout(C, E));
    },
    C = () => {
        O.pop(), (y = !1), A();
    },
    N = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = l.Z.isConnected() ? g : h;
        O.push([e, t * n]), A();
    };
class P extends i.Z {
    _initialize() {
        f.ZP.addChangeListener(this.startAudio),
            r.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            r.Z.subscribe("TYPING_STOP", this.stopAudio),
            r.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            r.Z.subscribe("CHANNEL_SELECT", this.stopAudio),
            r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio);
    }
    _terminate() {
        f.ZP.removeChangeListener(this.startAudio),
            r.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            r.Z.unsubscribe("TYPING_STOP", this.stopAudio),
            r.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            r.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(v);
    }
    setVolume(e) {
        let { state: t } = e;
        t === p.hes.RTC_CONNECTED ? (_.volume = g) : (_.volume = h);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        s.default.getId() === t && I();
    }
    stopAudio() {
        I();
    }
    startAudio() {
        var e;
        if (!T()) return;
        let t = c.Z.getChannelId();
        if (null == t) return;
        let n = s.default.getId(),
            r = u.Z.isTyping(t, n),
            i = f.ZP.getUserCombo(n, t),
            a = null != (e = null == i ? void 0 : i.multiplier) ? e : 1;
        r && a >= m ? S() : I();
    }
    playAchievementUnlockSound() {
        T() && N("poggermode_achievement_unlock");
    }
}
let R = new P();
