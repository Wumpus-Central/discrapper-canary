n.d(t, { Z: () => U }), n(388685);
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
    h = n(569545),
    g = n(722835),
    m = n(703656),
    b = n(352527),
    _ = n(641015),
    O = n(183584),
    E = n(383451),
    y = n(199902),
    v = n(131951),
    I = n(246946),
    C = n(556296),
    S = n(808506),
    N = n(237997),
    T = n(626135),
    P = n(554174),
    j = n(577153),
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
        (0, E.f)({
            location: "doPTT",
            autoTrackExposure: !1,
        }).enableLatching
    ) {
        let e = A._M,
            { pttLatchingEnabled: t = !1 } = v.Z.getModeOptions(l);
        if (!n.latched && !0 === t && i < n.pressedTime + e) {
            n.latched = !0;
            return;
        }
        n.latched = !1;
    }
    let a = w.get(l);
    null == a && ((a = new Map()), w.set(l, a));
    let o = a.get(t);
    null == o && ((o = new Set()), a.set(t, o)), e ? o.add(n.id) : o.delete(n.id);
    let s = o.size > 0;
    v.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(s, t), l);
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
                v.Z.getMode(t.context) === x.pM4.PUSH_TO_TALK && ((R[x.kg4.PUSH_TO_TALK].isPressed = e), L(e, !1, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [x.kg4.PUSH_TO_TALK_PRIORITY]: {
            onTrigger(e, t) {
                (v.Z.getMode() === x.pM4.PUSH_TO_TALK || j.Z.getCurrentConfig({ location: "keybinds" }).onPTTKeybind) &&
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
                v.Z.getMode() === x.pM4.VOICE_ACTIVITY &&
                    j.Z.getCurrentConfig({ location: "keybinds" }).separateKeybind &&
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
                v.Z.getMode() === x.pM4.VOICE_ACTIVITY &&
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
                let e = v.Z.getMode() === x.pM4.PUSH_TO_TALK ? x.pM4.VOICE_ACTIVITY : x.pM4.PUSH_TO_TALK;
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
                let n = (0, P.Z)();
                null != n && l.Z.setInputLocked(!N.default.isLocked(n), n);
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
                    N.default.isPinned(x.Odu.TEXT) &&
                    N.default.isLocked(e) &&
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
                let e = y.Z.getCurrentUserActiveStream();
                if (null != e) return (0, o.g)((0, h.V9)(e));
                (0, g.Z)(!0, [d.Z.GO_LIVE_KEYBIND]);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.TOGGLE_STREAMER_MODE]: {
            onTrigger() {
                s.Z.setEnabled(!I.Z.enabled);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.NAVIGATE_BACK]: {
            onTrigger: () => (0, m.op)(),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [x.kg4.NAVIGATE_FORWARD]: {
            onTrigger: () => (0, m.eH)(),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [x.kg4.SOUNDBOARD]: {
            onTrigger: () => {
                let e = (0, P.Z)();
                if (null != e)
                    if (b.Z.enabled) (0, O.oZ)(e);
                    else {
                        if (!(0, _.D)()) return;
                        (0, O.IN)(!0, e);
                    }
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [x.kg4.SOUNDBOARD_HOLD]: {
            onTrigger: (e) => {
                let t = (0, P.Z)();
                if (null != t) {
                    if (e) {
                        if (!(0, _.D)()) return;
                        (0, O.IN)(!1, t);
                    } else (0, O.oZ)(t);
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
                (0, p.ln)() && (T.default.track(x.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, f.C1)());
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
function k() {
    w.clear(),
        v.Z.getMediaEngine().eachConnection((e) => {
            e.setForceAudioInput(!1, !1), e.setForceAudioInput(!1, !0);
        }, Z.Yn.DEFAULT);
}
class M extends u.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
                keybinds: R,
            }),
        ),
            r.Z.subscribe("AUDIO_SET_MODE", k),
            r.Z.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        r.Z.unsubscribe("AUDIO_SET_MODE", k), r.Z.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t } = e;
        t !== D && k(), (D = t);
    }
}
let U = new M();
