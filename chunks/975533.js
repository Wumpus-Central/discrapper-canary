n.d(t, { Z: () => P });
var r = n(570140),
    i = n(846027),
    l = n(13245),
    o = n(287734),
    a = n(872810),
    s = n(223245),
    c = n(317770),
    u = n(924557),
    d = n(39604),
    p = n(569545),
    h = n(722835),
    f = n(703656),
    g = n(641015),
    m = n(183584),
    b = n(199902),
    _ = n(131951),
    E = n(246946),
    O = n(808506),
    N = n(237997),
    v = n(626135),
    y = n(554174),
    I = n(981631),
    C = n(65154);
let S = {
    [I.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [I.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [I.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            _.Z.getMode(t.context) === I.pM4.PUSH_TO_TALK && ((S[I.kg4.PUSH_TO_TALK].isPressed = e), _.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !1), t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [I.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            _.Z.getMode() === I.pM4.PUSH_TO_TALK && ((S[I.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), _.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !0), C.Yn.DEFAULT));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [I.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            _.Z.getMode() === I.pM4.VOICE_ACTIVITY && ((S[I.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [I.kg4.TOGGLE_MUTE]: {
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
    [I.kg4.TOGGLE_DEAFEN]: {
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
    [I.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = _.Z.getMode() === I.pM4.PUSH_TO_TALK ? I.pM4.VOICE_ACTIVITY : I.pM4.PUSH_TO_TALK;
            i.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [I.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [I.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, y.Z)();
            null != e && l.Z.setInputLocked(!N.Z.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [I.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = O.Z.getFocusedPID(),
                t = null != e;
            null != e && t && N.Z.isPinned(I.Odu.TEXT) && N.Z.isLocked(e) && O.Z.isReady(e) && l.Z.activateRegion(I.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [I.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = b.Z.getCurrentUserActiveStream();
            if (null != e) return (0, a.g)((0, p.V9)(e));
            (0, h.Z)();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [I.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            s.Z.setEnabled(!E.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [I.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, f.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [I.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, f.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [I.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            if (!(0, g.D)()) return;
            let e = (0, y.Z)();
            null != e && (N.Z.isLocked(e) ? (0, m.IN)(!0, e) : (0, m.oZ)(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [I.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            if (!(0, g.D)()) return;
            let t = (0, y.Z)();
            if (null != t) {
                e ? (0, m.IN)(!1, t) : (0, m.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [I.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, u.ln)() && (v.default.track(I.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, d.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [I.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
    [I.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
class T extends c.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
                keybinds: S
            })
        );
    }
    _terminate() {}
}
let P = new T();
