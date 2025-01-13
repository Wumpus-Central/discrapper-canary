var i = n(570140),
    r = n(846027),
    l = n(13245),
    a = n(287734),
    s = n(872810),
    o = n(223245),
    c = n(317770),
    d = n(924557),
    u = n(39604),
    h = n(569545),
    m = n(722835),
    p = n(703656),
    g = n(641015),
    f = n(183584),
    _ = n(199902),
    E = n(131951),
    I = n(246946),
    C = n(808506),
    N = n(237997),
    v = n(626135),
    S = n(554174),
    T = n(981631),
    A = n(65154);
let b = {
    [T.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [T.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [T.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            E.Z.getMode(t.context) === T.pM4.PUSH_TO_TALK && ((b[T.kg4.PUSH_TO_TALK].isPressed = e), E.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !1), t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [T.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            E.Z.getMode() === T.pM4.PUSH_TO_TALK && ((b[T.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), E.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !0), A.Yn.DEFAULT));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [T.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            if (E.Z.getMode() === T.pM4.VOICE_ACTIVITY) (b[T.kg4.PUSH_TO_MUTE].isPressed = e), r.Z.setTemporarySelfMute(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [T.kg4.TOGGLE_MUTE]: {
        onTrigger: () =>
            r.Z.toggleSelfMute({
                usedKeybind: !0,
                location: 'Custom Keybind'
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.TOGGLE_DEAFEN]: {
        onTrigger: () =>
            r.Z.toggleSelfDeaf({
                usedKeybind: !0,
                location: 'Custom Keybind'
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = E.Z.getMode() === T.pM4.PUSH_TO_TALK ? T.pM4.VOICE_ACTIVITY : T.pM4.PUSH_TO_TALK;
            r.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {
            let e = C.Z.enabled;
            l.Z.setEnabled(!e, C.Z.legacyEnabled, !1);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, S.Z)();
            if (null != e) l.Z.setInputLocked(!N.Z.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = C.Z.getFocusedPID(),
                t = null != e;
            null != e && t && N.Z.isPinned(T.Odu.TEXT) && N.Z.isLocked(e) && C.Z.isReady(e) && l.Z.activateRegion(T.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = _.Z.getCurrentUserActiveStream();
            if (null != e) return (0, s.g)((0, h.V9)(e));
            (0, m.Z)();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.Z.setEnabled(!I.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, p.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [T.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, p.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [T.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            if (!(0, g.D)()) return;
            let e = (0, S.Z)();
            null != e && (N.Z.isLocked(e) ? (0, f.IN)(!0, e) : (0, f.oZ)(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [T.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            if (!(0, g.D)()) return;
            let t = (0, S.Z)();
            if (null != t) {
                e ? (0, f.IN)(!1, t) : (0, f.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [T.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, d.ln)() && (v.default.track(T.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, u.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [T.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
    [T.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
class Z extends c.Z {
    _initialize() {
        i.Z.wait(() =>
            i.Z.dispatch({
                type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
                keybinds: b
            })
        );
    }
    _terminate() {}
}
t.Z = new Z();
