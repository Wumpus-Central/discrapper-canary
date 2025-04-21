n.d(t, { Z: () => E }), n(388685), n(539854);
var r = n(570140),
    i = n(317770),
    l = n(460181),
    o = n(474873),
    s = n(314897),
    a = n(19780),
    c = n(944486),
    u = n(111583),
    d = n(351780),
    h = n(843693),
    p = n(981631);
let f = (0, l.uk)('poggermode_applause', o.Z.getSoundpack()),
    g = !1,
    m = !1,
    b = [],
    y = null,
    _ = () => {
        g || (f.loop(), (g = !0));
    },
    O = () => {
        f.stop(), (g = !1);
    },
    v = () => {
        let e = d.Z.isEnabled(),
            t = d.Z.comboSoundsEnabled;
        return !!e && !!t && null != c.Z.getChannelId();
    },
    C = () => {
        if (0 === b.length || !v() || m) return;
        m = !0;
        let [e, t] = b[b.length - 1];
        (0, l.GN)(e, t), (y = setTimeout(j, 1000));
    },
    j = () => {
        b.pop(), (m = !1), C();
    },
    x = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = a.Z.isConnected();
        b.push([e, t * (n ? 0.1 : 1)]), C();
    };
class S extends i.Z {
    _initialize() {
        h.ZP.addChangeListener(this.startAudio), r.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), r.Z.subscribe('TYPING_STOP', this.stopAudio), r.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), r.Z.subscribe('CHANNEL_SELECT', this.stopAudio), r.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        h.ZP.removeChangeListener(this.startAudio), r.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), r.Z.unsubscribe('TYPING_STOP', this.stopAudio), r.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), r.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), r.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(y);
    }
    setVolume(e) {
        let { state: t } = e;
        t === p.hes.RTC_CONNECTED ? (f.volume = 0.1) : (f.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        s.default.getId() === t && O();
    }
    stopAudio() {
        O();
    }
    startAudio() {
        var e;
        if (!v()) return;
        let t = c.Z.getChannelId();
        if (null == t) return;
        let n = s.default.getId(),
            r = u.Z.isTyping(t, n),
            i = h.ZP.getUserCombo(n, t),
            l = null != (e = null == i ? void 0 : i.multiplier) ? e : 1;
        r && l >= 7 ? _() : O();
    }
    playAchievementUnlockSound() {
        v() && x('poggermode_achievement_unlock');
    }
}
let E = new S();
