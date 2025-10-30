n.d(t, { Z: () => U }), n(388685);
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
    f = n(39604),
    m = n(891304),
    h = n(569545),
    g = n(722835),
    _ = n(352527),
    b = n(641015),
    E = n(183584),
    O = n(383451),
    I = n(199902),
    y = n(131951),
    v = n(246946),
    C = n(556296),
    S = n(808506),
    T = n(237997),
    N = n(626135),
    j = n(554174),
    P = n(577153),
    x = n(981631),
    A = n(345655),
    Z = n(65154);
let w = new Map();
function L(e, t, n) {
    var r;
    let i = performance.now(),
        l = null != (r = n.context) ? r : Z.Yn.DEFAULT;
    if (e) n.pressedTime = i;
    else if (
        null != n.pressedTime &&
        (0, O.f)({
            location: "doPTT",
            autoTrackExposure: !1,
        }).enableLatching
    ) {
        let e = A._M,
            { pttLatchingEnabled: t = !1 } = y.Z.getModeOptions(l);
        if (!n.latched && !0 === t && i < n.pressedTime + e) {
            n.latched = !0;
            return;
        }
        n.latched = !1;
    }
    let a = w.get(l);
    null == a && ((a = new Map()), w.set(l, a));
    let s = a.get(t);
    null == s && ((s = new Set()), a.set(t, s)), e ? s.add(n.id) : s.delete(n.id);
    let o = s.size > 0;
    y.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(o, t), l);
}
let R = {
        [x.kg4.TOGGLE_PRIORITY_SPEAKER]: {
            onTrigger() {},
            keyEvents: {},
        },
        [x.kg4.UNASSIGNED]: {
            onTrigger() {},
            keyEvents: {},
        },
        [x.kg4.PUSH_TO_TALK]: {
            onTrigger(e, t) {
                y.Z.getMode(t.context) === x.pM4.PUSH_TO_TALK && ((R[x.kg4.PUSH_TO_TALK].isPressed = e), L(e, !1, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [x.kg4.PUSH_TO_TALK_PRIORITY]: {
            onTrigger(e, t) {
                (y.Z.getMode() === x.pM4.PUSH_TO_TALK || P.Z.getCurrentConfig({ location: "keybinds" }).onPTTKeybind) &&
                    ((R[x.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), L(e, !0, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [x.kg4.VAD_PRIORITY]: {
            onTrigger(e, t) {
                y.Z.getMode() === x.pM4.VOICE_ACTIVITY &&
                    P.Z.getCurrentConfig({ location: "keybinds" }).separateKeybind &&
                    ((R[x.kg4.VAD_PRIORITY].isPressed = e), L(e, !0, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [x.kg4.PUSH_TO_MUTE]: {
            onTrigger(e) {
                y.Z.getMode() === x.pM4.VOICE_ACTIVITY &&
                    ((R[x.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [x.kg4.TOGGLE_MUTE]: {
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
        [x.kg4.TOGGLE_DEAFEN]: {
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
        [x.kg4.TOGGLE_CAMERA]: {
            onTrigger: () => (0, c.r)(),
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.TOGGLE_VOICE_MODE]: {
            onTrigger() {
                let e = y.Z.getMode() === x.pM4.PUSH_TO_TALK ? x.pM4.VOICE_ACTIVITY : x.pM4.PUSH_TO_TALK;
                i.Z.setMode(e);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.TOGGLE_OVERLAY]: {
            onTrigger() {},
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
            onTrigger(e, t) {
                if (!(0, C.I1)(t.shortcut)) return;
                let n = (0, j.Z)();
                null != n && l.Z.setInputLocked(!T.default.isLocked(n), n);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
            onTrigger() {
                let e = S.default.getFocusedPID(),
                    t = null != e;
                null != e &&
                    t &&
                    T.default.isPinned(x.Odu.TEXT) &&
                    T.default.isLocked(e) &&
                    S.default.isReady(e) &&
                    l.Z.activateRegion(x.O0n.TEXT_WIDGET);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.TOGGLE_GO_LIVE_STREAMING]: {
            onTrigger() {
                let e = I.Z.getCurrentUserActiveStream();
                if (null != e) return (0, s.g)((0, h.V9)(e));
                (0, g.Z)(!0, [d.Z.GO_LIVE_KEYBIND]);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.TOGGLE_STREAMER_MODE]: {
            onTrigger() {
                o.Z.setEnabled(!v.Z.enabled);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.NAVIGATE_BACK]: {
            onTrigger: () => (0, m.Hm)("global_keybind"),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [x.kg4.NAVIGATE_FORWARD]: {
            onTrigger: () => (0, m.TL)("global_keybind"),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [x.kg4.SOUNDBOARD]: {
            onTrigger: () => {
                let e = (0, j.Z)();
                if (null != e)
                    if (_.Z.enabled) (0, E.oZ)(e);
                    else {
                        if (!(0, b.D)()) return;
                        (0, E.IN)(!0, e);
                    }
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.SOUNDBOARD_HOLD]: {
            onTrigger: (e) => {
                let t = (0, j.Z)();
                if (null != t) {
                    if (e) {
                        if (!(0, b.D)()) return;
                        (0, E.IN)(!1, t);
                    } else (0, E.oZ)(t);
                    return;
                }
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
        },
        [x.kg4.SAVE_CLIP]: {
            onTrigger: () => {
                (0, p.ln)() && (N.default.track(x.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, f.br)());
            },
            keyEvents: {
                keyup: !1,
                keydown: !0,
            },
        },
        [x.kg4.SAVE_SCREENSHOT]: {
            onTrigger: () => {
                (0, p.ln)() && (0, p.iL)() && (N.default.track(x.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, f.ZW)());
            },
            keyEvents: {
                keyup: !1,
                keydown: !0,
            },
        },
        [x.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
        [x.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
    },
    D = null;
function M() {
    w.clear(),
        y.Z.getMediaEngine().eachConnection((e) => {
            e.setForceAudioInput(!1, !1), e.setForceAudioInput(!1, !0);
        }, Z.Yn.DEFAULT);
}
class k extends u.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
                keybinds: R,
            }),
        ),
            r.Z.subscribe("AUDIO_SET_MODE", M),
            r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        r.Z.unsubscribe("AUDIO_SET_MODE", M), r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t } = e;
        t !== D && M(), (D = t);
    }
}
let U = new k();
