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
    f = n(39604),
    m = n(891304),
    h = n(569545),
    g = n(722835),
    _ = n(837968),
    b = n(352527),
    E = n(641015),
    O = n(183584),
    I = n(383451),
    y = n(199902),
    v = n(131951),
    C = n(19780),
    S = n(246946),
    T = n(556296),
    N = n(808506),
    j = n(237997),
    P = n(626135),
    x = n(554174),
    A = n(577153),
    Z = n(981631),
    w = n(345655),
    L = n(65154);
let R = !0,
    D = new Map();
function M(e, t, n, r) {
    var i;
    let l = performance.now();
    if (!C.Z.isConnected()) return;
    let a = null != (i = r.context) ? i : L.Yn.DEFAULT,
        s = D.get(a);
    null == s &&
        ((s = {
            held: new Set(),
            latched: new Set(),
            vadPriorityLatched: new Set(),
            priorityHeldOrLatched: new Set(),
        }),
        D.set(a, s)),
        n || (e ? s.held.add(r.id) : s.held.delete(r.id));
    let o = !1;
    if (e) r.pressedTime = l;
    else if (
        null != r.pressedTime &&
        (0, I.f)({
            location: "doPTT",
            autoTrackExposure: !1,
        }).enableLatching
    ) {
        let e = w._M,
            { pttLatchingEnabled: t = !1 } = v.Z.getModeOptions(a),
            i = n ? s.vadPriorityLatched : s.latched;
        (o = i.has(r.id)) || !0 !== t || !(l < r.pressedTime + e) || !R
            ? (i.delete(r.id), (o = !1))
            : (i.add(r.id), (o = !0));
    }
    t && (e || o ? s.priorityHeldOrLatched.add(r.id) : s.priorityHeldOrLatched.delete(r.id));
    let c = s.held.size > 0,
        u = s.latched.size > 0,
        d = c || u,
        p = s.priorityHeldOrLatched.size > 0;
    (0, _.I)(c, p, d);
}
let k = {
        [Z.kg4.TOGGLE_PRIORITY_SPEAKER]: {
            onTrigger() {},
            keyEvents: {},
        },
        [Z.kg4.UNASSIGNED]: {
            onTrigger() {},
            keyEvents: {},
        },
        [Z.kg4.PUSH_TO_TALK]: {
            onTrigger(e, t) {
                v.Z.getMode(t.context) === Z.pM4.PUSH_TO_TALK &&
                    ((k[Z.kg4.PUSH_TO_TALK].isPressed = e), M(e, !1, !1, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [Z.kg4.PUSH_TO_TALK_PRIORITY]: {
            onTrigger(e, t) {
                (v.Z.getMode() === Z.pM4.PUSH_TO_TALK || A.Z.getCurrentConfig({ location: "keybinds" }).onPTTKeybind) &&
                    ((k[Z.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), M(e, !0, !1, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [Z.kg4.VAD_PRIORITY]: {
            onTrigger(e, t) {
                v.Z.getMode() === Z.pM4.VOICE_ACTIVITY &&
                    A.Z.getCurrentConfig({ location: "keybinds" }).separateKeybind &&
                    ((k[Z.kg4.VAD_PRIORITY].isPressed = e), M(e, !0, !0, t));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [Z.kg4.PUSH_TO_MUTE]: {
            onTrigger(e) {
                v.Z.getMode() === Z.pM4.VOICE_ACTIVITY &&
                    ((k[Z.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
            },
            keyEvents: {
                keyup: !0,
                keydown: !0,
            },
            isPressed: !1,
        },
        [Z.kg4.TOGGLE_MUTE]: {
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
        [Z.kg4.TOGGLE_DEAFEN]: {
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
        [Z.kg4.TOGGLE_CAMERA]: {
            onTrigger: () => (0, c.r)(),
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.TOGGLE_VOICE_MODE]: {
            onTrigger() {
                let e = v.Z.getMode() === Z.pM4.PUSH_TO_TALK ? Z.pM4.VOICE_ACTIVITY : Z.pM4.PUSH_TO_TALK;
                i.Z.setMode(e);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.TOGGLE_OVERLAY]: {
            onTrigger() {},
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
            onTrigger(e, t) {
                if (!(0, T.I1)(t.shortcut)) return;
                let n = (0, x.Z)();
                null != n && l.Z.setInputLocked(!j.default.isLocked(n), n);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
            onTrigger() {
                let e = N.default.getFocusedPID(),
                    t = null != e;
                null != e &&
                    t &&
                    j.default.isPinned(Z.Odu.TEXT) &&
                    j.default.isLocked(e) &&
                    N.default.isReady(e) &&
                    l.Z.activateRegion(Z.O0n.TEXT_WIDGET);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.TOGGLE_GO_LIVE_STREAMING]: {
            onTrigger() {
                let e = y.Z.getCurrentUserActiveStream();
                if (null != e) return (0, s.g)((0, h.V9)(e));
                (0, g.Z)(!0, [d.Z.GO_LIVE_KEYBIND]);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.TOGGLE_STREAMER_MODE]: {
            onTrigger() {
                o.Z.setEnabled(!S.Z.enabled);
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.NAVIGATE_BACK]: {
            onTrigger: () => (0, m.Hm)("global_keybind"),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [Z.kg4.NAVIGATE_FORWARD]: {
            onTrigger: () => (0, m.TL)("global_keybind"),
            keyEvents: {
                keyup: !0,
                keydown: !1,
                focused: !0,
                blurred: !1,
            },
        },
        [Z.kg4.SOUNDBOARD]: {
            onTrigger: () => {
                let e = (0, x.Z)();
                if (null != e)
                    if (b.Z.enabled) (0, O.oZ)(e);
                    else {
                        if (!(0, E.D)()) return;
                        (0, O.IN)(!0, e);
                    }
            },
            keyEvents: {
                keyup: !0,
                keydown: !1,
            },
        },
        [Z.kg4.SOUNDBOARD_HOLD]: {
            onTrigger: (e) => {
                let t = (0, x.Z)();
                if (null != t) {
                    if (e) {
                        if (!(0, E.D)()) return;
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
        [Z.kg4.SAVE_CLIP]: {
            onTrigger: () => {
                (0, p.ln)() && (P.default.track(Z.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, f.br)());
            },
            keyEvents: {
                keyup: !1,
                keydown: !0,
            },
        },
        [Z.kg4.SAVE_SCREENSHOT]: {
            onTrigger: () => {
                (0, p.ln)() && (0, p.iL)() && (P.default.track(Z.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, f.ZW)());
            },
            keyEvents: {
                keyup: !1,
                keydown: !0,
            },
        },
        [Z.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
        [Z.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
    U = null;
function G() {
    D.clear(), (0, _.I)(!1, !1, !1);
}
function B(e) {
    let { hasLatchPermission: t } = e;
    if (t === R) return !1;
    (R = t) || G();
}
class H extends u.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS",
                keybinds: k,
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
        let { currentVoiceChannelId: t } = e;
        t !== U && G(), (U = t);
    }
}
let V = new H();
