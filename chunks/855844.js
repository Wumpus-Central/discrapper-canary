n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(990547),
    o = n(442837),
    l = n(46973),
    a = n(481060),
    s = n(846027),
    c = n(284056),
    u = n(410575),
    d = n(906732),
    p = n(213609),
    m = n(650958),
    f = n(453925),
    b = n(967003),
    g = n(632304),
    v = n(131951),
    y = n(19780),
    j = n(556296),
    O = n(358085),
    h = n(822556),
    x = n(981631),
    _ = n(345655),
    P = n(65154),
    w = n(388032),
    C = n(895634);
function E(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: E,
            onClose: I,
            maybeRenderPTTCheckbox: T = !1,
            renderDeafenCheckbox: S = !1,
            renderInputProfiles: N = !1,
            renderOutputDevices: Z = !1,
            renderOutputVolume: D = !1,
            renderInputDevices: k = !1,
            renderInputVolume: M = !1,
            maybeRenderInputMeter: A = !1,
            renderSettingsButton: R = !1,
        } = e,
        { analyticsLocations: L } = (0, d.ZP)();
    (0, p.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: L },
    });
    let V = (0, h.Z)(t),
        F = (0, m.M)({
            deviceType: P.h7.AUDIO_INPUT,
            analyticsLocations: L,
            asSubmenu: !0,
        }),
        U = (0, m.M)({
            deviceType: P.h7.AUDIO_OUTPUT,
            analyticsLocations: L,
            asSubmenu: !0,
        }),
        Y = (0, o.e7)([v.Z], () => v.Z.getActiveInputProfile()),
        H = (0, b.Z)(L),
        z = (0, f.Z)(L),
        B = (0, g.Z)(L),
        q = l.Yn.DEFAULT,
        W = v.Z.isSelfDeaf(q),
        X = (0, o.e7)([v.Z], () => v.Z.getMode()),
        G = X === x.pM4.VOICE_ACTIVITY ? x.pM4.PUSH_TO_TALK : x.pM4.VOICE_ACTIVITY,
        K = (0, o.e7)([v.Z, j.ZP], () => {
            var e;
            let t = (null == (e = v.Z.getModeOptions().shortcut) ? void 0 : e.length) > 0,
                n = null != j.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK, !1, !0),
                r = null != j.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK_PRIORITY, !1, !0);
            return t || n || r;
        }),
        Q = (0, o.e7)([y.Z], () => null != y.Z.getChannelId());
    return (0, r.jsx)(u.Z, {
        object: x.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: E,
            onInteraction: n,
            onClose: I,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": w.intl.string(w.t.ZR1Ss6),
            className: C.menu,
            children: [
                (0, r.jsxs)(a.kSQ, {
                    children: [k && F, N && H, Z && U],
                }),
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        M && z,
                        A &&
                            Q &&
                            (0, r.jsx)(a.II_, {
                                id: "input-device-meter",
                                control: () =>
                                    (0, r.jsx)(c.Z, {
                                        notchBackground: c._.BLACK,
                                        location: { section: x.jXE.CONTEXT_MENU },
                                        meterOnly: !0,
                                        containerClassName: C.customMenuItem,
                                        notchClassName: C.customNotches,
                                    }),
                            }),
                        D && B,
                    ],
                }),
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        T && O.isPlatformEmbedded && K
                            ? (0, r.jsx)(a.S89, {
                                  checked: X === x.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: w.intl.string(w.t.Q8gkVL),
                                  action: () => s.Z.setMode(G, void 0, void 0, { analyticsLocations: L }),
                                  disabled: Y === _._.STUDIO,
                              })
                            : null,
                        S &&
                            (0, r.jsx)(
                                a.S89,
                                {
                                    id: "deafen",
                                    label: w.intl.string(w.t.wjcRFX),
                                    action: () =>
                                        s.Z.toggleSelfDeaf({
                                            context: q,
                                            location: "AudioDeviceMenu",
                                        }),
                                    checked: W,
                                },
                                "self-deafen",
                            ),
                        R && V,
                    ],
                }),
            ],
        }),
    });
}
