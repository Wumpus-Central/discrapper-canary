n.d(t, { Z: () => V }), n(388685);
var r = n(570140),
    i = n(846027),
    l = n(13245),
    a = n(287734),
    s = n(872810),
    o = n(223245),
    c = n(479837),
    u = n(317770),
    d = n(100527),
    p = n(924557),
    f = n(341569),
    g = n(39604),
    h = n(891304),
    m = n(569545),
    _ = n(722835),
    b = n(837968),
    E = n(352527),
    O = n(641015),
    v = n(183584),
    y = n(383451),
    I = n(199902),
    C = n(131951),
    S = n(19780),
    T = n(246946),
    N = n(556296),
    j = n(808506),
    P = n(237997),
    x = n(626135),
    A = n(554174),
    Z = n(577153),
    w = n(981631),
    L = n(345655),
    R = n(65154);
let D = !0,
    M = new Map();
function k(e, t, n, r) {
    var i;
    let l = performance.now();
    if (!S.Z.isConnected()) return;
    let a = null != (i = r.context) ? i : R.Yn.DEFAULT,
        s = M.get(a);
    null == s &&
        ((s = {
            held: new Set(),
            latched: new Set(),
            vadPriorityLatched: new Set(),
            priorityHeldOrLatched: new Set(),
        }),
        M.set(a, s)),
        n || (e ? s.held.add(r.id) : s.held.delete(r.id));
    let o = !1;
    if (e) r.pressedTime = l;
    else if (
        null != r.pressedTime &&
        (0, y.f)({
            location: "doPTT",
            autoTrackExposure: !1,
        }).enableLatching
    ) {
        let e = L._M,
            { pttLatchingEnabled: t = !1 } = C.Z.getModeOptions(a),
            i = n ? s.vadPriorityLatched : s.latched;
        (o = i.has(r.id)) || !0 !== t || !(l < r.pressedTime + e) || !D
            ? (i.delete(r.id), (o = !1))
            : (i.add(r.id), (o = !0));
    }
    t && (e || o ? s.priorityHeldOrLatched.add(r.id) : s.priorityHeldOrLatched.delete(r.id));
    let c = s.held.size > 0,
        u = s.latched.size > 0,
        d = c || u,
        p = s.priorityHeldOrLatched.size > 0;
    (0, b.I)(c, p, d);
}
let U = {
    [w.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {},
    },
    [w.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {},
    },
    [w.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            C.Z.getMode(t.context) === w.pM4.PUSH_TO_TALK && ((U[w.kg4.PUSH_TO_TALK].isPressed = e), k(e, !1, !1, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [w.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            (C.Z.getMode() === w.pM4.PUSH_TO_TALK || Z.Z.getCurrentConfig({ location: "keybinds" }).onPTTKeybind) &&
                ((U[w.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), k(e, !0, !1, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [w.kg4.VAD_PRIORITY]: {
        onTrigger(e, t) {
            C.Z.getMode() === w.pM4.VOICE_ACTIVITY &&
                Z.Z.getCurrentConfig({ location: "keybinds" }).separateKeybind &&
                ((U[w.kg4.VAD_PRIORITY].isPressed = e), k(e, !0, !0, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [w.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            C.Z.getMode() === w.pM4.VOICE_ACTIVITY &&
                ((U[w.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
        isPressed: !1,
    },
    [w.kg4.TOGGLE_MUTE]: {
        onTrigger: () =>
            i.Z.toggleSelfMute({
                usedKeybind: !0,
                location: "Custom Keybind",
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.TOGGLE_DEAFEN]: {
        onTrigger: () =>
            i.Z.toggleSelfDeaf({
                usedKeybind: !0,
                location: "Custom Keybind",
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.TOGGLE_CAMERA]: {
        onTrigger: () => (0, c.r)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = C.Z.getMode() === w.pM4.PUSH_TO_TALK ? w.pM4.VOICE_ACTIVITY : w.pM4.PUSH_TO_TALK;
            i.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, N.I1)(t.shortcut)) return;
            let n = (0, A.Z)();
            null != n && l.Z.setInputLocked(!P.default.isLocked(n), n);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = j.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                P.default.isPinned(w.Odu.TEXT) &&
                P.default.isLocked(e) &&
                j.default.isReady(e) &&
                l.Z.activateRegion(w.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = I.Z.getCurrentUserActiveStream();
            if (null != e) return (0, s.g)((0, m.V9)(e));
            (0, _.Z)(!0, [d.Z.GO_LIVE_KEYBIND]);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.Z.setEnabled(!T.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, h.Hm)("global_keybind"),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1,
        },
    },
    [w.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, h.TL)("global_keybind"),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1,
        },
    },
    [w.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, A.Z)();
            if (null != e)
                if (E.Z.enabled) (0, v.oZ)(e);
                else {
                    if (!(0, O.D)()) return;
                    (0, v.IN)(!0, e);
                }
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
        },
    },
    [w.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, A.Z)();
            if (null != t) {
                if (e) {
                    if (!(0, O.D)()) return;
                    (0, v.IN)(!1, t);
                } else (0, v.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0,
        },
    },
    [w.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, f.LI)() && (x.default.track(w.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, g.br)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0,
        },
    },
    [w.kg4.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            (0, f.LI)() && (0, p.iL)() && (x.default.track(w.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, g.ZW)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0,
        },
    },
    [w.kg4.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && a.default.selectVoiceChannel(n);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0,
        },
    },
    [w.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            a.default.selectVoiceChannel(null);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0,
        },
    },
};
function G() {
    M.clear(), (0, b.I)(!1, !1, !1);
}
function B(e) {
    let { hasLatchPermission: t } = e;
    if (t === D) return !1;
    (D = t) || G();
}
class H extends u.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
                keybinds: U,
            }),
        ),
            r.Z.subscribe("AUDIO_SET_MODE", G),
            r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.Z.subscribe("SET_VAD_PERMISSION", B);
    }
    _terminate() {
        r.Z.unsubscribe("AUDIO_SET_MODE", G),
            r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.Z.unsubscribe("SET_VAD_PERMISSION", B);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && G();
    }
}
let V = new H();
