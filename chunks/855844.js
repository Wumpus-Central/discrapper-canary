n.d(t, { Z: () => C });
var r = n(951288);
n(647438);
var i = n(990547),
    o = n(442837),
    l = n(46973),
    a = n(481060),
    s = n(846027),
    c = n(410575),
    u = n(906732),
    d = n(213609),
    p = n(650958),
    m = n(453925),
    f = n(967003),
    b = n(632304),
    v = n(131951),
    g = n(19780),
    y = n(556296),
    j = n(358085),
    O = n(130067),
    h = n(822556),
    x = n(981631),
    E = n(345655),
    P = n(65154),
    _ = n(388032),
    w = n(895634);
function C(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: C,
            onClose: S,
            maybeRenderPTTCheckbox: I = !1,
            renderDeafenCheckbox: N = !1,
            renderInputProfiles: T = !1,
            renderOutputDevices: D = !1,
            renderOutputVolume: Z = !1,
            renderInputDevices: k = !1,
            renderInputVolume: M = !1,
            maybeRenderInputMeter: A = !1,
            renderSettingsButton: L = !1,
        } = e,
        { analyticsLocations: R } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: R },
    });
    let V = (0, h.Z)(t),
        F = (0, p.M)({
            deviceType: P.h7.AUDIO_INPUT,
            analyticsLocations: R,
            asSubmenu: !0,
        }),
        U = (0, p.M)({
            deviceType: P.h7.AUDIO_OUTPUT,
            analyticsLocations: R,
            asSubmenu: !0,
        }),
        Y = (0, o.e7)([v.Z], () => v.Z.getActiveInputProfile()),
        H = (0, f.Z)(R),
        z = (0, m.Z)(R),
        B = (0, b.Z)(R),
        G = l.Yn.DEFAULT,
        W = v.Z.isSelfDeaf(G),
        q = (0, o.e7)([v.Z], () => v.Z.getMode()),
        K = q === x.pM4.VOICE_ACTIVITY ? x.pM4.PUSH_TO_TALK : x.pM4.VOICE_ACTIVITY,
        X = (0, o.e7)([v.Z, y.ZP], () => {
            var e;
            let t = (null == (e = v.Z.getModeOptions().shortcut) ? void 0 : e.length) > 0,
                n = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK, !1, !0),
                r = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK_PRIORITY, !1, !0);
            return t || n || r;
        }),
        Q = (0, o.e7)([g.Z], () => null != g.Z.getChannelId());
    return (0, r.jsx)(c.Z, {
        object: x.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: C,
            onInteraction: n,
            onClose: S,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": _.intl.string(_.t.ZR1Ss6),
            className: w.menu,
            children: [
                (0, r.jsxs)(a.kSQ, {
                    children: [k && F, T && H, D && U],
                }),
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        M && z,
                        A &&
                            Q &&
                            (0, r.jsx)(a.II_, {
                                id: "input-device-meter",
                                control: () =>
                                    (0, r.jsx)(O.Z, {
                                        notchBackground: O._.BLACK,
                                        location: { section: x.jXE.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: w.customMenuItem,
                                        notchClassName: w.customNotches,
                                    }),
                            }),
                        Z && B,
                    ],
                }),
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        I && j.isPlatformEmbedded && X
                            ? (0, r.jsx)(a.S89, {
                                  checked: q === x.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: _.intl.string(_.t.Q8gkVL),
                                  action: () => s.Z.setMode(K, void 0, void 0, { analyticsLocations: R }),
                                  disabled: Y === E._.STUDIO,
                              })
                            : null,
                        N &&
                            (0, r.jsx)(
                                a.S89,
                                {
                                    id: "deafen",
                                    label: _.intl.string(_.t.wjcRFX),
                                    action: () =>
                                        s.Z.toggleSelfDeaf({
                                            context: G,
                                            location: "AudioDeviceMenu",
                                        }),
                                    checked: W,
                                },
                                "self-deafen",
                            ),
                        L && V,
                    ],
                }),
            ],
        }),
    });
}
