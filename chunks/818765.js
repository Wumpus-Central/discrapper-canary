n(47120), n(653041);
var i = n(570140),
    r = n(317770),
    s = n(474873),
    a = n(314897),
    l = n(19780),
    o = n(944486),
    c = n(111583),
    d = n(557177),
    u = n(351780),
    m = n(843693),
    g = n(981631);
let h = (0, d.uk)('poggermode_applause', s.Z.getSoundpack()),
    p = !1,
    x = !1,
    f = [],
    _ = null,
    E = () => {
        if (!p) h.loop(), (p = !0);
    },
    C = () => {
        h.stop(), (p = !1);
    },
    T = () => {
        let e = u.Z.isEnabled(),
            t = u.Z.comboSoundsEnabled;
        return (!!e && !!t && null != o.Z.getChannelId()) || !1;
    },
    S = () => {
        if (0 === f.length || !T() || x) return;
        x = !0;
        let [e, t] = f[f.length - 1];
        (0, d.GN)(e, t), (_ = setTimeout(b, 1000));
    },
    b = () => {
        f.pop(), (x = !1), S();
    },
    I = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = l.Z.isConnected();
        f.push([e, t * (n ? 0.1 : 1)]), S();
    };
class N extends r.Z {
    _initialize() {
        m.ZP.addChangeListener(this.startAudio), i.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), i.Z.subscribe('TYPING_STOP', this.stopAudio), i.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), i.Z.subscribe('CHANNEL_SELECT', this.stopAudio), i.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        m.ZP.removeChangeListener(this.startAudio), i.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), i.Z.unsubscribe('TYPING_STOP', this.stopAudio), i.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), i.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), i.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(_);
    }
    setVolume(e) {
        let { state: t } = e;
        t === g.hes.RTC_CONNECTED ? (h.volume = 0.1) : (h.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && C();
    }
    stopAudio() {
        C();
    }
    startAudio() {
        var e;
        if (!T()) return;
        let t = o.Z.getChannelId();
        if (null == t) return;
        let n = a.default.getId(),
            i = c.Z.isTyping(t, n),
            r = m.ZP.getUserCombo(n, t),
            s = null !== (e = null == r ? void 0 : r.multiplier) && void 0 !== e ? e : 1;
        i && s >= 7 ? E() : C();
    }
    playAchievementUnlockSound() {
        if (!!T()) I('poggermode_achievement_unlock');
    }
}
t.Z = new N();
