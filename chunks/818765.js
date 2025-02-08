n.d(t, { Z: () => O }), n(47120), n(653041);
var i = n(570140),
    l = n(317770),
    r = n(460181),
    s = n(474873),
    a = n(314897),
    o = n(19780),
    c = n(944486),
    d = n(111583),
    u = n(351780),
    _ = n(843693),
    E = n(981631);
let h = (0, r.uk)('poggermode_applause', s.Z.getSoundpack()),
    p = !1,
    I = !1,
    m = [],
    C = null,
    T = () => {
        !p && (h.loop(), (p = !0));
    },
    N = () => {
        h.stop(), (p = !1);
    },
    g = () => {
        let e = u.Z.isEnabled(),
            t = u.Z.comboSoundsEnabled;
        return !!e && !!t && null != c.Z.getChannelId();
    },
    S = () => {
        if (0 === m.length || !g() || I) return;
        I = !0;
        let [e, t] = m[m.length - 1];
        (0, r.GN)(e, t), (C = setTimeout(R, 1000));
    },
    R = () => {
        m.pop(), (I = !1), S();
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = o.Z.isConnected();
        m.push([e, t * (n ? 0.1 : 1)]), S();
    };
class A extends l.Z {
    _initialize() {
        _.ZP.addChangeListener(this.startAudio), i.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), i.Z.subscribe('TYPING_STOP', this.stopAudio), i.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), i.Z.subscribe('CHANNEL_SELECT', this.stopAudio), i.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        _.ZP.removeChangeListener(this.startAudio), i.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), i.Z.unsubscribe('TYPING_STOP', this.stopAudio), i.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), i.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), i.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(C);
    }
    setVolume(e) {
        let { state: t } = e;
        t === E.hes.RTC_CONNECTED ? (h.volume = 0.1) : (h.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && N();
    }
    stopAudio() {
        N();
    }
    startAudio() {
        var e;
        if (!g()) return;
        let t = c.Z.getChannelId();
        if (null == t) return;
        let n = a.default.getId(),
            i = d.Z.isTyping(t, n),
            l = _.ZP.getUserCombo(n, t),
            r = null !== (e = null == l ? void 0 : l.multiplier) && void 0 !== e ? e : 1;
        i && r >= 7 ? T() : N();
    }
    playAchievementUnlockSound() {
        g() && f('poggermode_achievement_unlock');
    }
}
let O = new A();
