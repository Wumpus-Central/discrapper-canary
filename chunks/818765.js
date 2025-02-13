i.d(e, { Z: () => R }), i(47120), i(653041);
var n = i(570140),
    r = i(317770),
    s = i(460181),
    o = i(474873),
    l = i(314897),
    a = i(19780),
    c = i(944486),
    d = i(111583),
    h = i(351780),
    u = i(843693),
    E = i(981631);
let g = (0, s.uk)('poggermode_applause', o.Z.getSoundpack()),
    _ = !1,
    L = !1,
    C = [],
    m = null,
    p = () => {
        !_ && (g.loop(), (_ = !0));
    },
    O = () => {
        g.stop(), (_ = !1);
    },
    T = () => {
        let t = h.Z.isEnabled(),
            e = h.Z.comboSoundsEnabled;
        return !!t && !!e && null != c.Z.getChannelId();
    },
    k = () => {
        if (0 === C.length || !T() || L) return;
        L = !0;
        let [t, e] = C[C.length - 1];
        (0, s.GN)(t, e), (m = setTimeout(U, 1000));
    },
    U = () => {
        C.pop(), (L = !1), k();
    },
    f = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = a.Z.isConnected();
        C.push([t, e * (i ? 0.1 : 1)]), k();
    };
class v extends r.Z {
    _initialize() {
        u.ZP.addChangeListener(this.startAudio), n.Z.subscribe('RTC_CONNECTION_STATE', this.setVolume), n.Z.subscribe('TYPING_STOP', this.stopAudio), n.Z.subscribe('TYPING_STOP_LOCAL', this.stopAudio), n.Z.subscribe('CHANNEL_SELECT', this.stopAudio), n.Z.subscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio);
    }
    _terminate() {
        u.ZP.removeChangeListener(this.startAudio), n.Z.unsubscribe('RTC_CONNECTION_STATE', this.setVolume), n.Z.unsubscribe('TYPING_STOP', this.stopAudio), n.Z.unsubscribe('TYPING_STOP_LOCAL', this.stopAudio), n.Z.unsubscribe('CHANNEL_SELECT', this.stopAudio), n.Z.unsubscribe('POGGERMODE_SETTINGS_UPDATE', this.stopAudio), clearTimeout(m);
    }
    setVolume(t) {
        let { state: e } = t;
        e === E.hes.RTC_CONNECTED ? (g.volume = 0.1) : (g.volume = 1);
    }
    handleTypingStop(t) {
        let { userId: e } = t;
        l.default.getId() === e && O();
    }
    stopAudio() {
        O();
    }
    startAudio() {
        var t;
        if (!T()) return;
        let e = c.Z.getChannelId();
        if (null == e) return;
        let i = l.default.getId(),
            n = d.Z.isTyping(e, i),
            r = u.ZP.getUserCombo(i, e),
            s = null !== (t = null == r ? void 0 : r.multiplier) && void 0 !== t ? t : 1;
        n && s >= 7 ? p() : O();
    }
    playAchievementUnlockSound() {
        T() && f('poggermode_achievement_unlock');
    }
}
let R = new v();
