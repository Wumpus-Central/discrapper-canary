n.d(t, { Z: () => x }), n(388685), n(539854);
var r = n(570140),
    i = n(317770),
    o = n(460181),
    l = n(474873),
    s = n(314897),
    a = n(19780),
    c = n(944486),
    u = n(111583),
    d = n(351780),
    p = n(843693),
    _ = n(981631);
let h = (0, o.uk)('poggermode_applause', l.Z.getSoundpack()),
    f = !1,
    m = !1,
    g = [],
    b = null,
    E = () => {
        f || (h.loop(), (f = !0));
    },
    C = () => {
        h.stop(), (f = !1);
    },
    O = () => {
        let e = d.Z.isEnabled(),
            t = d.Z.comboSoundsEnabled;
        return !!e && !!t && null != c.Z.getChannelId();
    },
    y = () => {
        if (0 === g.length || !O() || m) return;
        m = !0;
        let [e, t] = g[g.length - 1];
        (0, o.GN)(e, t), (b = setTimeout(v, 1000));
    },
    v = () => {
        g.pop(), (m = !1), y();
    },
    N = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = a.ZP.isConnected();
        g.push([e, t * (n ? 0.1 : 1)]), y();
    };
class S extends i.Z {
    _initialize() {
        p.ZP.addChangeListener(this.startAudio), r.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), r.Z.subscribe('TYPING_STOP', this.stopAudio), r.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), r.Z.subscribe('CHANNEL_SELECT', this.stopAudio), r.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        p.ZP.removeChangeListener(this.startAudio), r.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), r.Z.unsubscribe('TYPING_STOP', this.stopAudio), r.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), r.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), r.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(b);
    }
    setVolume(e) {
        let { state: t } = e;
        t === _.hes.RTC_CONNECTED ? (h.volume = 0.1) : (h.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        s.default.getId() === t && C();
    }
    stopAudio() {
        C();
    }
    startAudio() {
        var e;
        if (!O()) return;
        let t = c.Z.getChannelId();
        if (null == t) return;
        let n = s.default.getId(),
            r = u.Z.isTyping(t, n),
            i = p.ZP.getUserCombo(n, t),
            o = null != (e = null == i ? void 0 : i.multiplier) ? e : 1;
        r && o >= 7 ? E() : C();
    }
    playAchievementUnlockSound() {
        O() && N('poggermode_achievement_unlock');
    }
}
let x = new S();
