n.d(t, { Z: () => w });
var r = n(54381);
n(473749);
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
    g = n(131951),
    v = n(19780),
    y = n(556296),
    j = n(358085),
    O = n(130067),
    h = n(822556),
    x = n(981631),
    _ = n(345655),
    P = n(65154),
    C = n(388032),
    E = n(898742);
function w(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: w,
            onClose: I,
            maybeRenderPTTCheckbox: T = !1,
            renderDeafenCheckbox: S = !1,
            renderInputProfiles: N = !1,
            renderOutputDevices: Z = !1,
            renderOutputVolume: k = !1,
            renderInputDevices: D = !1,
            renderInputVolume: M = !1,
            maybeRenderInputMeter: A = !1,
            renderSettingsButton: R = !1,
        } = e,
        { analyticsLocations: V } = (0, u.ZP)();
    (0, d.Z)({
        type: i.ImpressionTypes.MENU,
        name: i.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: V },
    });
    let L = (0, h.Z)(t),
        F = (0, p.M)({
            deviceType: P.h7.AUDIO_INPUT,
            analyticsLocations: V,
            asSubmenu: !0,
        }),
        U = (0, p.M)({
            deviceType: P.h7.AUDIO_OUTPUT,
            analyticsLocations: V,
            asSubmenu: !0,
        }),
        Y = (0, o.e7)([g.Z], () => g.Z.getActiveInputProfile()),
        H = (0, f.Z)(V),
        z = (0, m.Z)(V),
        B = (0, b.Z)(V),
        q = l.Yn.DEFAULT,
        W = g.Z.isSelfDeaf(q),
        X = (0, o.e7)([g.Z], () => g.Z.getMode()),
        G = X === x.pM4.VOICE_ACTIVITY ? x.pM4.PUSH_TO_TALK : x.pM4.VOICE_ACTIVITY,
        K = (0, o.e7)([g.Z, y.ZP], () => {
            var e;
            let t = (null == (e = g.Z.getModeOptions().shortcut) ? void 0 : e.length) > 0,
                n = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK, !1, !0),
                r = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK_PRIORITY, !1, !0);
            return t || n || r;
        }),
        Q = (0, o.e7)([v.Z], () => null != v.Z.getChannelId());
    return (0, r.jsx)(c.Z, {
        object: x.qAy.CONTEXT_MENU,
        children: (0, r.jsxs)(a.v2r, {
            onSelect: w,
            onInteraction: n,
            onClose: I,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": C.intl.string(C.t.ZR1Ss6),
            className: E.menu,
            children: [
                (0, r.jsxs)(a.kSQ, {
                    children: [D && F, N && H, Z && U],
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
                                        containerClassName: E.customMenuItem,
                                        notchClassName: E.customNotches,
                                    }),
                            }),
                        k && B,
                    ],
                }),
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        T && j.isPlatformEmbedded && K
                            ? (0, r.jsx)(a.S89, {
                                  checked: X === x.pM4.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: C.intl.string(C.t.Q8gkVL),
                                  action: () => s.Z.setMode(G, void 0, void 0, { analyticsLocations: V }),
                                  disabled: Y === _._.STUDIO,
                              })
                            : null,
                        S &&
                            (0, r.jsx)(
                                a.S89,
                                {
                                    id: "deafen",
                                    label: C.intl.string(C.t.wjcRFX),
                                    action: () =>
                                        s.Z.toggleSelfDeaf({
                                            context: q,
                                            location: "AudioDeviceMenu",
                                        }),
                                    checked: W,
                                },
                                "self-deafen",
                            ),
                        R && L,
                    ],
                }),
            ],
        }),
    });
}
