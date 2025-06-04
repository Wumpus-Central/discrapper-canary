let r;
n.d(t, { Z: () => D });
var i = n(570140),
    l = n(846027),
    a = n(13245),
    o = n(287734),
    s = n(872810),
    c = n(223245),
    u = n(479837),
    d = n(317770),
    p = n(924557),
    h = n(39604),
    f = n(569545),
    g = n(722835),
    m = n(703656),
    b = n(352527),
    _ = n(641015),
    E = n(183584),
    O = n(383451),
    I = n(199902),
    y = n(131951),
    v = n(246946),
    C = n(808506),
    S = n(237997),
    N = n(626135),
    T = n(554174),
    P = n(577153),
    j = n(981631),
    A = n(345655),
    Z = n(65154);
let x = !1;
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Z.Yn.DEFAULT,
        i = performance.now();
    if (!x && e) r = i;
    else if (
        null != r &&
        (0, O.f)({
            location: 'doPTT',
            autoTrackExposure: !1
        }).enableLatching
    ) {
        let e = A._M,
            { pttLatchingEnabled: t = !1 } = y.Z.getModeOptions(n);
        if (!0 === t && i < r + e) {
            x = !0;
            return;
        }
        x = !1;
    }
    y.Z.getMediaEngine().eachConnection((n) => n.setForceAudioInput(e, t), n);
}
let w = {
    [j.kg4.TOGGLE_PRIORITY_SPEAKER]: {
        onTrigger() {},
        keyEvents: {}
    },
    [j.kg4.UNASSIGNED]: {
        onTrigger() {},
        keyEvents: {}
    },
    [j.kg4.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            y.Z.getMode(t.context) === j.pM4.PUSH_TO_TALK && ((w[j.kg4.PUSH_TO_TALK].isPressed = e), L(e, !1, t.context));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [j.kg4.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e) {
            (y.Z.getMode() === j.pM4.PUSH_TO_TALK || P.Z.getCurrentConfig({ location: 'keybinds' }).onPTTKeybind) && ((w[j.kg4.PUSH_TO_TALK_PRIORITY].isPressed = e), L(e, !0));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [j.kg4.VAD_PRIORITY]: {
        onTrigger(e) {
            y.Z.getMode() === j.pM4.VOICE_ACTIVITY && P.Z.getCurrentConfig({ location: 'keybinds' }).separateKeybind && ((w[j.kg4.VAD_PRIORITY].isPressed = e), L(e, !0));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [j.kg4.PUSH_TO_MUTE]: {
        onTrigger(e) {
            y.Z.getMode() === j.pM4.VOICE_ACTIVITY && ((w[j.kg4.PUSH_TO_MUTE].isPressed = e), l.Z.setTemporarySelfMute(e));
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        },
        isPressed: !1
    },
    [j.kg4.TOGGLE_MUTE]: {
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
    [j.kg4.TOGGLE_DEAFEN]: {
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
    [j.kg4.TOGGLE_CAMERA]: {
        onTrigger: () => (0, u.r)(),
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = y.Z.getMode() === j.pM4.PUSH_TO_TALK ? j.pM4.VOICE_ACTIVITY : j.pM4.PUSH_TO_TALK;
            l.Z.setMode(e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.TOGGLE_OVERLAY]: {
        onTrigger() {},
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger() {
            let e = (0, T.Z)();
            null != e && a.Z.setInputLocked(!S.default.isLocked(e), e);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = C.default.getFocusedPID(),
                t = null != e;
            null != e && t && S.default.isPinned(j.Odu.TEXT) && S.default.isLocked(e) && C.default.isReady(e) && a.Z.activateRegion(j.O0n.TEXT_WIDGET);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = I.Z.getCurrentUserActiveStream();
            if (null != e) return (0, s.g)((0, f.V9)(e));
            (0, g.Z)();
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            c.Z.setEnabled(!v.Z.enabled);
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.NAVIGATE_BACK]: {
        onTrigger: () => (0, m.op)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [j.kg4.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, m.eH)(),
        keyEvents: {
            keyup: !0,
            keydown: !1,
            focused: !0,
            blurred: !1
        }
    },
    [j.kg4.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, T.Z)();
            if (null != e)
                if (b.Z.enabled) (0, E.oZ)(e);
                else {
                    if (!(0, _.D)()) return;
                    (0, E.IN)(!0, e);
                }
        },
        keyEvents: {
            keyup: !0,
            keydown: !1
        }
    },
    [j.kg4.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, T.Z)();
            if (null != t) {
                if (e) {
                    if (!(0, _.D)()) return;
                    (0, E.IN)(!1, t);
                } else (0, E.oZ)(t);
                return;
            }
        },
        keyEvents: {
            keyup: !0,
            keydown: !0
        }
    },
    [j.kg4.SAVE_CLIP]: {
        onTrigger: () => {
            (0, p.ln)() && (N.default.track(j.rMx.CLIP_SAVE_KEYBIND_PRESSED), (0, h.C1)());
        },
        keyEvents: {
            keyup: !1,
            keydown: !0
        }
    },
    [j.kg4.SWITCH_TO_VOICE_CHANNEL]: {
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
    [j.kg4.DISCONNECT_FROM_VOICE_CHANNEL]: {
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
class R extends d.Z {
    _initialize() {
        i.Z.wait(() =>
            i.Z.dispatch({
                type: 'KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS',
                keybinds: w
            })
        );
    }
    _terminate() {}
}
let D = new R();
