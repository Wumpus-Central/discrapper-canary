n.d(t, { Z: () => b });
var i = n(570140),
    l = n(846027),
    r = n(13245),
    a = n(287734),
    s = n(872810),
    o = n(223245),
    d = n(317770),
    c = n(924557),
    u = n(39604),
    h = n(569545),
    m = n(722835),
    p = n(703656),
    g = n(641015),
    _ = n(183584),
    f = n(199902),
    E = n(131951),
    I = n(246946),
    C = n(808506),
    N = n(237997),
    v = n(626135),
    T = n(554174),
    S = n(981631),
    A = n(65154);
let Z = {
    [S.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [S.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [S.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            E.Z.getMode(t.context) === S.pM4.PUSH_TO_TALK && ((Z[S.kg4.PUSH_TO_TALK].isPressed = e), E.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !1), t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [S.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            E.Z.getMode() === S.pM4.PUSH_TO_TALK && ((Z[S.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), E.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !0), A.Yn.DEFAULT));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [S.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            E.Z.getMode() === S.pM4.VOICE_ACTIVITY && ((Z[S.kg4.PUSH_TO_MUTE].isPressed = e), l.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [S.kg4.TOGGLE_MUTE]: {
        onTrigger: () =>
            l.Z.toggleSelfMute({
                usedKeybind: !0,
                location: 'Custom Keybind'
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_DEAFEN]: {
        onTrigger: () =>
            l.Z.toggleSelfDeaf({
                usedKeybind: !0,
                location: 'Custom Keybind'
            }),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = E.Z.getMode() === S.pM4.PUSH_TO_TALK ? S.pM4.VOICE_ACTIVITY : S.pM4.PUSH_TO_TALK;
            l.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {
            let e = C.Z.enabled;
            r.Z.setEnabled(!e, !e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, T.Z)();
            null != e && r.Z.setInputLocked(!N.Z.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = C.Z.getFocusedPID(),
                t = null != e;
            null != e && t && N.Z.isPinned(S.Odu.TEXT) && N.Z.isLocked(e) && C.Z.isReady(e) && r.Z.activateRegion(S.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = f.Z.getCurrentUserActiveStream();
            if (null != e) return (0, s.g)((0, h.V9)(e));
            (0, m.Z)();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            o.Z.setEnabled(!I.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, p.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [S.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, p.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [S.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            if (!(0, g.D)()) return;
            let e = (0, T.Z)();
            null != e && (N.Z.isLocked(e) ? (0, _.IN)(!0, e) : (0, _.oZ)(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            if (!(0, g.D)()) return;
            let t = (0, T.Z)();
            if (null != t) {
                e ? (0, _.IN)(!1, t) : (0, _.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [S.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, c.ln)() && (v.default.track(S.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, u.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [S.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
    [S.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
class x extends d.Z {
    _initialize() {
        i.Z.wait(() =>
            i.Z.dispatch({
                type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
                keybinds: Z
            })
        );
    }
    _terminate() {}
}
let b = new x();
