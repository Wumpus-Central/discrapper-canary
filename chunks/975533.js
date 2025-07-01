(n.d(t, { Z: () => R }), n(388685));
var r = n(570140),
    i = n(846027),
    l = n(13245),
    a = n(287734),
    o = n(872810),
    s = n(223245),
    c = n(479837),
    u = n(317770),
    d = n(924557),
    p = n(39604),
    h = n(569545),
    f = n(722835),
    g = n(703656),
    m = n(352527),
    b = n(641015),
    _ = n(183584),
    O = n(383451),
    E = n(199902),
    y = n(131951),
    I = n(246946),
    v = n(808506),
    C = n(237997),
    S = n(626135),
    N = n(554174),
    T = n(577153),
    P = n(981631),
    j = n(345655),
    A = n(65154);
let Z = new Map();
function x(e, t, n) {
    var r;
    let i = performance.now(),
        l = null != (r = n.context) ? r : A.Yn.DEFAULT;
    if (!0 !== n.latched && e) n.pressedTime = i;
    else if (
        null != n.pressedTime &&
        (0, O.f)({
            location: 'doPTT',
            autoTrackExposure: !1
        }).enableLatching
    ) {
        let e = j._M,
            { pttLatchingEnabled: t = !1 } = y.Z.getModeOptions(l);
        if (!0 === t && i < n.pressedTime + e) {
            n.latched = !0;
            return;
        }
        n.latched = !1;
    }
    let a = Z.get(l);
    null == a && ((a = new Map()), Z.set(l, a));
    let o = a.get(t);
    (null == o && ((o = new Set()), a.set(t, o)), e ? o.add(n.id) : o.delete(n.id));
    let s = o.size > 0;
    y.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(s, t), l);
}
let L = {
    [P.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [P.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [P.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            y.Z.getMode(t.context) === P.pM4.PUSH_TO_TALK && ((L[P.kg4.PUSH_TO_TALK].isPressed = e), x(e, !1, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [P.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            (y.Z.getMode() === P.pM4.PUSH_TO_TALK || T.Z.getCurrentConfig({ location: 'keybinds' }).onPTTKeybind) && ((L[P.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), x(e, !0, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [P.kg4.VAD_PRIORITY]: {
        onTrigger(e, t) {
            y.Z.getMode() === P.pM4.VOICE_ACTIVITY && T.Z.getCurrentConfig({ location: 'keybinds' }).separateKeybind && ((L[P.kg4.VAD_PRIORITY].isPressed = e), x(e, !0, t));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [P.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            y.Z.getMode() === P.pM4.VOICE_ACTIVITY && ((L[P.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [P.kg4.TOGGLE_MUTE]: {
        onTrigger: () =>
            i.Z.toggleSelfMute({
                usedKeybind: !0,
                location: 'Custom Keybind'
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.TOGGLE_DEAFEN]: {
        onTrigger: () =>
            i.Z.toggleSelfDeaf({
                usedKeybind: !0,
                location: 'Custom Keybind'
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.TOGGLE_CAMERA]: {
        onTrigger: () => (0, c.r)(),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = y.Z.getMode() === P.pM4.PUSH_TO_TALK ? P.pM4.VOICE_ACTIVITY : P.pM4.PUSH_TO_TALK;
            i.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, N.Z)();
            null != e && l.Z.setInputLocked(!C.default.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = v.default.getFocusedPID(),
                t = null != e;
            null != e && t && C.default.isPinned(P.Odu.TEXT) && C.default.isLocked(e) && v.default.isReady(e) && l.Z.activateRegion(P.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = E.Z.getCurrentUserActiveStream();
            if (null != e) return (0, o.g)((0, h.V9)(e));
            (0, f.Z)();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            s.Z.setEnabled(!I.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, g.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [P.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, g.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [P.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, N.Z)();
            if (null != e)
                if (m.Z.enabled) (0, _.oZ)(e);
                else {
                    if (!(0, b.D)()) return;
                    (0, _.IN)(!0, e);
                }
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [P.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, N.Z)();
            if (null != t) {
                if (e) {
                    if (!(0, b.D)()) return;
                    (0, _.IN)(!1, t);
                } else (0, _.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [P.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, d.ln)() && (S.default.track(P.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, p.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [P.kg4.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n }
            } = t;
            null != n && a.default.selectVoiceChannel(n);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    },
    [P.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            a.default.selectVoiceChannel(null);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    }
};
class w extends u.Z {
    _initialize() {
        (r.Z.wait(() =>
            r.Z.dispatch({
                type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
                keybinds: L
            })
        ),
            r.Z.subscribe('AUDIO_SET_MODE', this.resetPTTState),
            r.Z.subscribe('VOICE_CHANNEL_SELECT', this.resetPTTState));
    }
    _terminate() {
        (r.Z.unsubscribe('AUDIO_SET_MODE', this.resetPTTState), r.Z.unsubscribe('VOICE_CHANNEL_SELECT', this.resetPTTState));
    }
    resetPTTState() {
        (Z.clear(),
            y.Z.getMediaEngine().eachConnection((e) => {
                (e.setForceAudioInput(!1, !1), e.setForceAudioInput(!1, !0));
            }, A.Yn.DEFAULT));
    }
}
let R = new w();
