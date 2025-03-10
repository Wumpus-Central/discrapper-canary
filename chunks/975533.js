n.d(t, { Z: () => j });
var r = n(570140),
    i = n(846027),
    l = n(13245),
    o = n(287734),
    a = n(872810),
    s = n(223245),
    c = n(479837),
    u = n(317770),
    d = n(924557),
    p = n(39604),
    h = n(569545),
    f = n(722835),
    g = n(703656),
    m = n(641015),
    b = n(183584),
    _ = n(199902),
    E = n(131951),
    O = n(246946),
    N = n(808506),
    v = n(237997),
    y = n(626135),
    I = n(554174),
    C = n(981631),
    S = n(65154);
let T = {
    [C.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [C.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [C.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            E.Z.getMode(t.context) === C.pM4.PUSH_TO_TALK && ((T[C.kg4.PUSH_TO_TALK].isPressed = e), E.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !1), t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [C.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            E.Z.getMode() === C.pM4.PUSH_TO_TALK && ((T[C.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), E.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !0), S.Yn.DEFAULT));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [C.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            E.Z.getMode() === C.pM4.VOICE_ACTIVITY && ((T[C.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [C.kg4.TOGGLE_MUTE]: {
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
    [C.kg4.TOGGLE_DEAFEN]: {
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
    [C.kg4.TOGGLE_CAMERA]: {
        onTrigger: () => (0, c.r)(),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = E.Z.getMode() === C.pM4.PUSH_TO_TALK ? C.pM4.VOICE_ACTIVITY : C.pM4.PUSH_TO_TALK;
            i.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, I.Z)();
            null != e && l.Z.setInputLocked(!v.default.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = N.default.getFocusedPID(),
                t = null != e;
            null != e && t && v.default.isPinned(C.Odu.TEXT) && v.default.isLocked(e) && N.default.isReady(e) && l.Z.activateRegion(C.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = _.Z.getCurrentUserActiveStream();
            if (null != e) return (0, a.g)((0, h.V9)(e));
            (0, f.Z)();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            s.Z.setEnabled(!O.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, g.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [C.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, g.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [C.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            if (!(0, m.D)()) return;
            let e = (0, I.Z)();
            null != e && (v.default.isLocked(e) ? (0, b.IN)(!0, e) : (0, b.oZ)(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [C.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            if (!(0, m.D)()) return;
            let t = (0, I.Z)();
            if (null != t) {
                e ? (0, b.IN)(!1, t) : (0, b.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [C.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, d.ln)() && (y.default.track(C.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, p.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [C.kg4.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n }
            } = t;
            null != n && o.default.selectVoiceChannel(n);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    },
    [C.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            o.default.selectVoiceChannel(null);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1,
            blurred: !0,
            focused: !0
        }
    }
};
class P extends u.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
                keybinds: T
            })
        );
    }
    _terminate() {}
}
let j = new P();
