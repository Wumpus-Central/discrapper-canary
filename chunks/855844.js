n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var i = n(990547),
    a = n(442837),
    o = n(46973),
    s = n(481060),
    l = n(846027),
    c = n(284056),
    u = n(410575),
    d = n(906732),
    f = n(213609),
    _ = n(650958),
    p = n(453925),
    h = n(967003),
    m = n(632304),
    g = n(131951),
    E = n(19780),
    b = n(556296),
    y = n(358085),
    O = n(822556),
    v = n(981631),
    I = n(345655),
    T = n(65154),
    S = n(388032),
    A = n(895634);
function C(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: C,
            onClose: N,
            maybeRenderPTTCheckbox: R = !1,
            renderDeafenCheckbox: P = !1,
            renderInputProfiles: w = !1,
            renderOutputDevices: D = !1,
            renderOutputVolume: x = !1,
            renderInputDevices: L = !1,
            renderInputVolume: j = !1,
            maybeRenderInputMeter: M = !1,
            renderSettingsButton: k = !1,
        } = e,
        { analyticsLocations: U } = (0, d.ZP)();
    (0, f.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: U },
    });
    let G = (0, O.Z)(t),
        B = (0, _.M)({
            deviceType: T.h7.AUDIO_INPUT,
            analyticsLocations: U,
            asSubmenu: !0,
        }),
        Z = (0, _.M)({
            deviceType: T.h7.AUDIO_OUTPUT,
            analyticsLocations: U,
            asSubmenu: !0,
        }),
        V = (0, a.e7)([g.Z], () => g.Z.getActiveInputProfile()),
        F = (0, h.Z)(U),
        H = (0, p.Z)(U),
        Y = (0, m.Z)(U),
        W = o.Yn.DEFAULT,
        K = g.Z.isSelfDeaf(W),
        z = (0, a.e7)([g.Z], () => g.Z.getMode()),
        q = z === v.pM4.VOICE_ACTIVITY ? v.pM4.PUSH_TO_TALK : v.pM4.VOICE_ACTIVITY,
        X = (0, a.e7)([g.Z, b.ZP], () => {
            var e;
            let t = (null == (e = g.Z.getModeOptions().shortcut) ? void 0 : e.length) > 0,
                n = null != b.ZP.getKeybindForAction(v.kg4.PUSH_TO_TALK, !1, !0),
                r = null != b.ZP.getKeybindForAction(v.kg4.PUSH_TO_TALK_PRIORITY, !1, !0);
            return t || n || r;
        }),
        Q = (0, a.e7)([E.Z], () => null != E.Z.getChannelId());
    return (0, r.jsx)(u.Z, {
        object: v.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(s.v2r, {
            onSelect: C,
            onInteraction: n,
            onClose: N,
            navId: "audio-device-context",
            "aria-label": S.intl.string(S.t.ZR1Ss7),
            className: A.menu,
            children: [
                (0, r.jsxs)(s.kSQ, {
                    children: [L && B, w && F, D && Z],
                }),
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        j && H,
                        M &&
                            Q &&
                            (0, r.jsx)(s.II_, {
                                id: "input-device-meter",
                                control: () =>
                                    (0, r.jsx)(c.Z, {
                                        notchBackground: c._.BLACK,
                                        location: { section: v.jXE.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: A.customMenuItem,
                                    }),
                            }),
                        x && Y,
                    ],
                }),
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        R && y.isPlatformEmbedded && X
                            ? (0, r.jsx)(s.S89, {
                                  checked: z === v.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: S.intl.string(S.t.Q8gkVF),
                                  action: () => l.Z.setMode(q, void 0, void 0, { analyticsLocations: U }),
                                  disabled: V === I._.STUDIO,
                              })
                            : null,
                        P &&
                            (0, r.jsx)(
                                s.S89,
                                {
                                    id: "deafen",
                                    label: S.intl.string(S.t.wjcRFR),
                                    action: () =>
                                        l.Z.toggleSelfDeaf({
                                            context: W,
                                            location: "AudioDeviceMenu",
                                        }),
                                    checked: K,
                                },
                                "self-deafen",
                            ),
                        k && G,
                    ],
                }),
            ],
        }),
    });
}
