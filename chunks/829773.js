n.d(t, { A: () => D });
var i = n(477900),
    l = n(582128),
    r = n(562708),
    s = n(17928),
    a = n(205693),
    o = n(980707),
    u = n(477782),
    d = n(827343),
    c = n(820284),
    h = n(688810),
    f = n(139286),
    g = n(270816),
    C = n(844981),
    A = n(486487),
    p = n(110027),
    m = n(298242),
    E = n(25578),
    I = n(763827),
    S = n(532624),
    _ = n(152567);
let N = l.forwardRef(function (e, t) {
    let { "aria-label": n, location: r, containerClassName: s, notchClassName: a } = e,
        o = l.useRef(null);
    return (
        l.useImperativeHandle(
            t,
            () => ({ focus: () => o.current?.focus(), blur: () => o.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            ref: o,
            tabIndex: -1,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(_.A, {
                notchBackground: _.V.BLACK,
                location: r,
                meterOnly: !0,
                containerClassName: s,
                notchClassName: a,
            }),
        })
    );
});
var T = n(819027),
    M = n(652215),
    v = n(621380),
    y = n(731854),
    L = n(375708),
    x = n(943679),
    R = n(788066);
function D(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: l,
            onClose: _,
            maybeRenderPTTCheckbox: D = !1,
            renderDeafenCheckbox: O = !1,
            renderInputProfiles: w = !1,
            renderOutputDevices: U = !1,
            renderOutputVolume: P = !1,
            renderInputDevices: b = !1,
            renderInputVolume: j = !1,
            maybeRenderInputMeter: V = !1,
            renderSettingsButton: F = !1,
            maybeRenderSpatialAudioCheckbox: G = !1,
        } = e,
        { analyticsLocations: H } = (0, h.Ay)();
    (0, f.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: H },
    });
    let k = (0, T.A)(t),
        Z = (0, g.H)({ deviceType: y.oh.AUDIO_INPUT, analyticsLocations: H, asSubmenu: !0 }),
        B = (0, g.H)({ deviceType: y.oh.AUDIO_OUTPUT, analyticsLocations: H, asSubmenu: !0 }),
        W = (0, s.bG)([E.Ay], () => E.Ay.getActiveInputProfile()),
        Y = (0, p.A)(H),
        z = (0, A.A)(H),
        J = (0, m.A)(H),
        $ = a.x.DEFAULT,
        K = E.Ay.isSelfDeaf($),
        q = (0, C.Ay)("AudioDeviceMenu"),
        X = (0, s.bG)([E.Ay], () => E.Ay.isSpatialAudioEnabled()),
        Q = (0, s.bG)([E.Ay], () => E.Ay.getMode()),
        ee = Q === M.TBI.VOICE_ACTIVITY ? M.TBI.PUSH_TO_TALK : M.TBI.VOICE_ACTIVITY,
        et = (0, s.bG)([E.Ay, S.Ay], () => {
            let e = E.Ay.getModeOptions().shortcut?.length > 0,
                t = null != S.Ay.getKeybindForAction(M.hCu.PUSH_TO_TALK, !1, !0),
                n = null != S.Ay.getKeybindForAction(M.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        en = (0, s.bG)([I.A], () => null != I.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: M.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: l,
            onInteraction: n,
            onClose: _,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": L.intl.string(L.t.ZR1Ss6),
            className: R.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [b && Z, w && Y, U && B] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        j && z,
                        V &&
                            en &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: L.intl.string(L.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(N, {
                                        ...e,
                                        ref: t,
                                        "aria-label": L.intl.string(L.t["ye+BAy"]),
                                        location: { section: M.JJy.CONTEXT_MENU },
                                        containerClassName: R.Eq,
                                        notchClassName: R.CO,
                                    }),
                            }),
                        P && J,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        D &&
                            et &&
                            (0, i.jsx)(u.sL, {
                                checked: Q === M.TBI.PUSH_TO_TALK,
                                id: "input-mode",
                                label: L.intl.string(L.t.Q8gkVL),
                                action: () => d.A.setMode(ee, void 0, void 0, { analyticsLocations: H }),
                                disabled: W === v.m.STUDIO,
                            }),
                        O &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: L.intl.string(L.t.wjcRFX),
                                    action: () => d.A.toggleSelfDeaf({ context: $, location: "AudioDeviceMenu" }),
                                    checked: K,
                                },
                                "self-deafen",
                            ),
                        G &&
                            q !== C.L3.HIDDEN &&
                            (0, i.jsx)(u.sL, {
                                id: "spatial-audio",
                                label: L.intl.string(x.default.EWQJcc),
                                checked: X,
                                disabled: (0, C.Xt)(q),
                                subtext: (function (e) {
                                    if ((0, C.Xt)(e))
                                        return L.intl.format(
                                            e === C.L3.BLOCKED_MONO_OUTPUT ? x.default.rOXfEw : x.default.O7Aa3Y,
                                            {},
                                        );
                                })(q),
                                action: () => d.A.setSpatialAudio(!X, H),
                            }),
                        F && k,
                    ],
                }),
            ],
        }),
    });
}
