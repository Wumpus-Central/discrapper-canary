n.d(t, { Z: () => A });
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
    E = n(199902),
    O = n(131951),
    N = n(246946),
    y = n(808506),
    I = n(237997),
    v = n(626135),
    C = n(554174),
    S = n(981631),
    T = n(65154);
let P = {
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
            O.Z.getMode(t.context) === S.pM4.PUSH_TO_TALK && ((P[S.kg4.PUSH_TO_TALK].isPressed = e), O.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !1), t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [S.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            O.Z.getMode() === S.pM4.PUSH_TO_TALK && ((P[S.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), O.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !0), T.Yn.DEFAULT));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [S.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            O.Z.getMode() === S.pM4.VOICE_ACTIVITY && ((P[S.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [S.kg4.TOGGLE_MUTE]: {
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
    [S.kg4.TOGGLE_DEAFEN]: {
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
    [S.kg4.TOGGLE_CAMERA]: {
        onTrigger: () => (0, c.r)(),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = O.Z.getMode() === S.pM4.PUSH_TO_TALK ? S.pM4.VOICE_ACTIVITY : S.pM4.PUSH_TO_TALK;
            i.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, C.Z)();
            null != e && l.Z.setInputLocked(!I.default.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = y.default.getFocusedPID(),
                t = null != e;
            null != e && t && I.default.isPinned(S.Odu.TEXT) && I.default.isLocked(e) && y.default.isReady(e) && l.Z.activateRegion(S.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.TOGGLE_GO_LIVE_STREAMING]: {
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
    [S.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            s.Z.setEnabled(!N.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [S.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, g.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [S.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, g.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [S.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, C.Z)();
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
    [S.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, C.Z)();
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
    [S.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, d.ln)() && (v.default.track(S.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, p.C1)());
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
class j extends u.Z {
    _initialize() {
        r.Z.wait(() =>
            r.Z.dispatch({
                type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
                keybinds: P
            })
        );
    }
    _terminate() {}
}
let A = new j();
