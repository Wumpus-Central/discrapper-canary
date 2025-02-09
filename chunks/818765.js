n.d(t, { Z: () => I }), n(47120), n(653041);
var e = n(570140),
    r = n(317770),
    l = n(460181),
    s = n(474873),
    o = n(314897),
    c = n(19780),
    a = n(944486),
    d = n(111583),
    E = n(351780),
    _ = n(843693),
    h = n(981631);
let L = (0, l.uk)('poggermode_applause', s.Z.getSoundpack()),
    u = !1,
    O = !1,
    p = [],
    T = null,
    U = () => {
        !u && (L.loop(), (u = !0));
    },
    g = () => {
        L.stop(), (u = !1);
    },
    m = () => {
        let i = E.Z.isEnabled(),
            t = E.Z.comboSoundsEnabled;
        return !!i && !!t && null != a.Z.getChannelId();
    },
    k = () => {
        if (0 === p.length || !m() || O) return;
        O = !0;
        let [i, t] = p[p.length - 1];
        (0, l.GN)(i, t), (T = setTimeout(C, 1000));
    },
    C = () => {
        p.pop(), (O = !1), k();
    },
    A = function (i) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            n = c.Z.isConnected();
        p.push([i, t * (n ? 0.1 : 1)]), k();
    };
class N extends r.Z {
    _initialize() {
        _.ZP.addChangeListener(this.startAudio), e.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), e.Z.subscribe('TYPING_STOP', this.stopAudio), e.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), e.Z.subscribe('CHANNEL_SELECT', this.stopAudio), e.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        _.ZP.removeChangeListener(this.startAudio), e.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), e.Z.unsubscribe('TYPING_STOP', this.stopAudio), e.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), e.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), e.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(T);
    }
    setVolume(i) {
        let { state: t } = i;
        t === h.hes.RTC_CONNECTED ? (L.volume = 0.1) : (L.volume = 1);
    }
    handleTypingStop(i) {
        let { userId: t } = i;
        o.default.getId() === t && g();
    }
    stopAudio() {
        g();
    }
    startAudio() {
        var i;
        if (!m()) return;
        let t = a.Z.getChannelId();
        if (null == t) return;
        let n = o.default.getId(),
            e = d.Z.isTyping(t, n),
            r = _.ZP.getUserCombo(n, t),
            l = null !== (i = null == r ? void 0 : r.multiplier) && void 0 !== i ? i : 1;
        e && l >= 7 ? U() : g();
    }
    playAchievementUnlockSound() {
        m() && A('poggermode_achievement_unlock');
    }
}
let I = new N();
