n(47120), n(653041);
var i = n(570140),
    r = n(317770),
    a = n(474873),
    s = n(314897),
    l = n(19780),
    o = n(944486),
    c = n(111583),
    d = n(557177),
    u = n(351780),
    g = n(843693),
    m = n(981631);
let f = (0, d.uk)('poggermode_applause', a.Z.getSoundpack()),
    p = !1,
    _ = !1,
    h = [],
    x = null,
    E = () => {
        if (!p) f.loop(), (p = !0);
    },
    b = () => {
        f.stop(), (p = !1);
    },
    C = () => {
        let e = u.Z.isEnabled(),
            t = u.Z.comboSoundsEnabled;
        return (!!e && !!t && null != o.Z.getChannelId()) || !1;
    },
    v = () => {
        if (0 === h.length || !C() || _) return;
        _ = !0;
        let [e, t] = h[h.length - 1];
        (0, d.GN)(e, t), (x = setTimeout(T, 1000));
    },
    T = () => {
        h.pop(), (_ = !1), v();
    },
    N = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = l.Z.isConnected();
        h.push([e, t * (n ? 0.1 : 1)]), v();
    };
class I extends r.Z {
    _initialize() {
        g.ZP.addChangeListener(this.startAudio), i.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), i.Z.subscribe('TYPING_STOP', this.stopAudio), i.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), i.Z.subscribe('CHANNEL_SELECT', this.stopAudio), i.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        g.ZP.removeChangeListener(this.startAudio), i.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), i.Z.unsubscribe('TYPING_STOP', this.stopAudio), i.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), i.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), i.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(x);
    }
    setVolume(e) {
        let { state: t } = e;
        t === m.hes.RTC_CONNECTED ? (f.volume = 0.1) : (f.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        s.default.getId() === t && b();
    }
    stopAudio() {
        b();
    }
    startAudio() {
        var e;
        if (!C()) return;
        let t = o.Z.getChannelId();
        if (null == t) return;
        let n = s.default.getId(),
            i = c.Z.isTyping(t, n),
            r = g.ZP.getUserCombo(n, t),
            a = null !== (e = null == r ? void 0 : r.multiplier) && void 0 !== e ? e : 1;
        i && a >= 7 ? E() : b();
    }
    playAchievementUnlockSound() {
        if (!!C()) N('poggermode_achievement_unlock');
    }
}
t.Z = new I();
