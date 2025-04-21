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
    y = n(246946),
    I = n(808506),
    v = n(237997),
    C = n(626135),
    S = n(554174),
    N = n(981631),
    T = n(65154);
let P = {
    [N.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [N.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [N.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            O.Z.getMode(t.context) === N.pM4.PUSH_TO_TALK && ((P[N.kg4.PUSH_TO_TALK].isPressed = e), O.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !1), t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [N.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            O.Z.getMode() === N.pM4.PUSH_TO_TALK && ((P[N.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), O.Z.getMediaEngine().eachConnection((t) => t.setForceAudioInput(e, !0), T.Yn.DEFAULT));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [N.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            O.Z.getMode() === N.pM4.VOICE_ACTIVITY && ((P[N.kg4.PUSH_TO_MUTE].isPressed = e), i.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [N.kg4.TOGGLE_MUTE]: {
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
    [N.kg4.TOGGLE_DEAFEN]: {
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
    [N.kg4.TOGGLE_CAMERA]: {
        onTrigger: () => (0, c.r)(),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [N.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = O.Z.getMode() === N.pM4.PUSH_TO_TALK ? N.pM4.VOICE_ACTIVITY : N.pM4.PUSH_TO_TALK;
            i.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [N.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [N.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, S.Z)();
            null != e && l.Z.setInputLocked(!v.default.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [N.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = I.default.getFocusedPID(),
                t = null != e;
            null != e && t && v.default.isPinned(N.Odu.TEXT) && v.default.isLocked(e) && I.default.isReady(e) && l.Z.activateRegion(N.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [N.kg4.TOGGLE_GO_LIVE_STREAMING]: {
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
    [N.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            s.Z.setEnabled(!y.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [N.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, g.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [N.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, g.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [N.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, S.Z)();
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
    [N.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, S.Z)();
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
    [N.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, d.ln)() && (C.default.track(N.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, p.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [N.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
    [N.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
