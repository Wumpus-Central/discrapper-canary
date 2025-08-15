n.d(t, { Z: () => x }), n(388685), n(539854);
var r = n(570140),
    i = n(317770),
    l = n(460181),
    o = n(474873),
    a = n(314897),
    s = n(19780),
    c = n(944486),
    u = n(111583),
    d = n(351780),
    p = n(843693),
    f = n(981631);
let h = (0, l.uk)("poggermode_applause", o.Z.getSoundpack()),
    g = !1,
    m = !1,
    b = [],
    _ = null,
    O = () => {
        h.stop(), (g = !1);
    },
    y = () => {
        let e = d.Z.isEnabled(),
            t = d.Z.comboSoundsEnabled;
        return !!e && !!t && null != c.Z.getChannelId();
    },
    v = () => {
        if (0 === b.length || !y() || m) return;
        m = !0;
        let [e, t] = b[b.length - 1];
        (0, l.GN)(e, t), (_ = setTimeout(j, 1000));
    },
    j = () => {
        b.pop(), (m = !1), v();
    },
    C = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = s.Z.isConnected();
        b.push([e, t * (n ? 0.1 : 1)]), v();
    };
class E extends i.Z {
    _initialize() {
        p.ZP.addChangeListener(this.startAudio),
            r.Z.subscribe("RTC_CONNECTION_STATE", this.setVolume),
            r.Z.subscribe("TYPING_STOP", this.stopAudio),
            r.Z.subscribe("TYPING_STOP_LOCAL", this.stopAudio),
            r.Z.subscribe("CHANNEL_SELECT", this.stopAudio),
            r.Z.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio);
    }
    _terminate() {
        p.ZP.removeChangeListener(this.startAudio),
            r.Z.unsubscribe("RTC_CONNECTION_STATE", this.setVolume),
            r.Z.unsubscribe("TYPING_STOP", this.stopAudio),
            r.Z.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio),
            r.Z.unsubscribe("CHANNEL_SELECT", this.stopAudio),
            r.Z.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio),
            clearTimeout(_);
    }
    setVolume(e) {
        let { state: t } = e;
        t === f.hes.RTC_CONNECTED ? (h.volume = 0.1) : (h.volume = 1);
    }
    handleTypingStop(e) {
        let { userId: t } = e;
        a.default.getId() === t && O();
    }
    stopAudio() {
        O();
    }
    startAudio() {
        var e;
        if (!y()) return;
        let t = c.Z.getChannelId();
        if (null == t) return;
        let n = a.default.getId(),
            r = u.Z.isTyping(t, n),
            i = p.ZP.getUserCombo(n, t),
            l = null != (e = null == i ? void 0 : i.multiplier) ? e : 1;
        r && l >= 7 ? g || (h.loop(), (g = !0)) : O();
    }
    playAchievementUnlockSound() {
        y() && C("poggermode_achievement_unlock");
    }
}
let x = new E();
