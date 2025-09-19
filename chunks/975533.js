n.d(t, { Z: () => G }), n(388685);
var r = n(570140),
    i = n(846027),
    l = n(13245),
    a = n(287734),
    o = n(872810),
    s = n(223245),
    c = n(479837),
    u = n(317770),
    d = n(100527),
    p = n(924557),
    f = n(39604),
    h = n(891304),
    g = n(569545),
    m = n(722835),
    b = n(32300),
    _ = n(352527),
    O = n(641015),
    E = n(183584),
    y = n(383451),
    v = n(199902),
    I = n(131951),
    C = n(246946),
    S = n(556296),
    T = n(808506),
    N = n(237997),
    P = n(626135),
    j = n(554174),
    x = n(577153),
    A = n(981631),
    Z = n(345655),
    w = n(65154);
let L = new Map();
function R(e, t, n) {
    var r;
    let i = performance.now(),
        l = null != (r = n.context) ? r : w.Yn.DEFAULT;
    if (e) n.pressedTime = i;
    else if (
        null != n.pressedTime &&
        (0, y.f)({
            location: "doPTT",
            autoTrackExposure: !1,
        }).enableLatching
    ) {
        let e = Z._M,
            { pttLatchingEnabled: t = !1 } = I.Z.getModeOptions(l);
        if (!n.latched && !0 === t && i < n.pressedTime + e) {
            n.latched = !0;
            return;
        }
        n.latched = !1;
    }
    let a = L.get(l);
    null == a && ((a = new Map()), L.set(l, a));
    let o = a.get(t);
    null == o && ((o = new Set()), a.set(t, o)), e ? o.add(n.id) : o.delete(n.id);
    let s = o.size > 0;
    I.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(s, t), l);
}
let D = {
        [A.kg4.TOGGLE_PRIORITY_SPEAKER]: {
            onTrigger() {},
            keyEvents: {},
        },
        [A.kg4.UNASSIGNED]: {
            onTrigger() {},
            keyEvents: {},
        },
        [A.kg4.PUSH_TO_TALK]: {
            onTrigger(e, t) {
                I.Z.getMode(t.context) === A.pM4.PUSH_TO_TALK && ((D[A.kg4.PUSH_TO_TALK].isPressed = e), R(e, !1, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [A.kg4.PUSH_TO_TALK_PRIORITY]: {
            onTrigger(e, t) {
                (I.Z.getMode() === A.pM4.PUSH_TO_TALK || x.Z.getCurrentConfig({ location: "keybinds" }).onPTTKeybind) &&
                    ((D[A.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), R(e, !0, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [A.kg4.VAD_PRIORITY]: {
            onTrigger(e, t) {
                I.Z.getMode() === A.pM4.VOICE_ACTIVITY &&
                    x.Z.getCurrentConfig({ location: "keybinds" }).separateKeybind &&
                    ((D[A.kg4.VAD_PRIORITY].isPressed = e), R(e, !0, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [A.kg4.PUSH_TO_MUTE]: {
            onTrigger(e) {
                I.Z.getMode() === A.pM4.VOICE_ACTIVITY &&
                    ((D[A.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [A.kg4.TOGGLE_MUTE]: {
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
        [A.kg4.TOGGLE_DEAFEN]: {
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
        [A.kg4.TOGGLE_CAMERA]: {
            onTrigger: () => (0, c.r)(),
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.TOGGLE_VOICE_MODE]: {
            onTrigger() {
                let e = I.Z.getMode() === A.pM4.PUSH_TO_TALK ? A.pM4.VOICE_ACTIVITY : A.pM4.PUSH_TO_TALK;
                i.Z.setMode(e);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.TOGGLE_OVERLAY]: {
            onTrigger() {},
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
            onTrigger(e, t) {
                if (!(0, S.I1)(t.shortcut)) return;
                let { renderInvisibleOverlay: n } = (0, b.fn)("KeyboardShortcutManager");
                if (n) return;
                let r = (0, j.Z)();
                null != r && l.Z.setInputLocked(!N.default.isLocked(r), r);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
            onTrigger() {
                let e = T.default.getFocusedPID(),
                    t = null != e;
                null != e &&
                    t &&
                    N.default.isPinned(A.Odu.TEXT) &&
                    N.default.isLocked(e) &&
                    T.default.isReady(e) &&
                    l.Z.activateRegion(A.O0n.TEXT_WIDGET);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.TOGGLE_GO_LIVE_STREAMING]: {
            onTrigger() {
                let e = v.Z.getCurrentUserActiveStream();
                if (null != e) return (0, o.g)((0, g.V9)(e));
                (0, m.Z)(!0, [d.Z.GO_LIVE_KEYBIND]);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.TOGGLE_STREAMER_MODE]: {
            onTrigger() {
                s.Z.setEnabled(!C.Z.enabled);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.NAVIGATE_BACK]: {
            onTrigger: () => (0, h.Hm)("global_keybind"),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [A.kg4.NAVIGATE_FORWARD]: {
            onTrigger: () => (0, h.TL)("global_keybind"),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [A.kg4.SOUNDBOARD]: {
            onTrigger: () => {
                let e = (0, j.Z)();
                if (null != e)
                    if (_.Z.enabled) (0, E.oZ)(e);
                    else {
                        if (!(0, O.D)()) return;
                        (0, E.IN)(!0, e);
                    }
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [A.kg4.SOUNDBOARD_HOLD]: {
            onTrigger: (e) => {
                let t = (0, j.Z)();
                if (null != t) {
                    if (e) {
                        if (!(0, O.D)()) return;
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
        [A.kg4.SAVE_CLIP]: {
            onTrigger: () => {
                (0, p.ln)() && (P.default.track(A.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, f.C1)());
            },
            keyEvents: {
                keyup: !1,
                keydown: !0,
            },
        },
        [A.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
        [A.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
    k = null;
function M() {
    L.clear(),
        I.Z.getMediaEngine().eachConnection((e) => {
            e.setForceAudioInput(!1, !1), e.setForceAudioInput(!1, !0);
        }, w.Yn.DEFAULT);
}
class U extends u.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
                keybinds: D,
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
        t !== k && M(), (k = t);
    }
}
let G = new U();
