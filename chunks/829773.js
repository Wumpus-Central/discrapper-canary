n.d(t, { A: () => O });
var i = n(477900),
    l = n(582128),
    r = n(562708),
    s = n(17928),
    a = n(459838),
    o = n(980707),
    u = n(477782),
    d = n(827343),
    c = n(820284),
    h = n(688810),
    g = n(139286),
    f = n(270816),
    A = n(844981),
    E = n(486487),
    p = n(110027),
    m = n(298242),
    I = n(916546),
    S = n(763827),
    C = n(532624),
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
    v = n(652215),
    M = n(621380),
    y = n(731854),
    D = n(375708),
    R = n(943679),
    x = n(788066);
function O(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: l,
            onClose: _,
            maybeRenderPTTCheckbox: O = !1,
            renderDeafenCheckbox: U = !1,
            renderInputProfiles: w = !1,
            renderOutputDevices: P = !1,
            renderOutputVolume: L = !1,
            renderInputDevices: b = !1,
            renderInputVolume: G = !1,
            maybeRenderInputMeter: F = !1,
            renderSettingsButton: j = !1,
            maybeRenderSpatialAudioCheckbox: V = !1,
        } = e,
        { analyticsLocations: k } = (0, h.Ay)();
    (0, g.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k },
    });
    let H = (0, T.A)(t),
        B = (0, f.H)({ deviceType: y.oh.AUDIO_INPUT, analyticsLocations: k, asSubmenu: !0 }),
        Y = (0, f.H)({ deviceType: y.oh.AUDIO_OUTPUT, analyticsLocations: k, asSubmenu: !0 }),
        W = (0, s.bG)([I.Ay], () => I.Ay.getActiveInputProfile()),
        z = (0, p.A)(k),
        J = (0, E.A)(k),
        Z = (0, m.A)(k),
        $ = a.x.DEFAULT,
        K = I.Ay.isSelfDeaf($),
        q = (0, A.Ay)("AudioDeviceMenu"),
        X = (0, s.bG)([I.Ay], () => I.Ay.isSpatialAudioEnabled()),
        Q = (0, s.bG)([I.Ay], () => I.Ay.getMode()),
        ee = Q === v.TBI.VOICE_ACTIVITY ? v.TBI.PUSH_TO_TALK : v.TBI.VOICE_ACTIVITY,
        et = (0, s.bG)([I.Ay, C.Ay], () => {
            let e = I.Ay.getModeOptions().shortcut?.length > 0,
                t = null != C.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK, !1, !0),
                n = null != C.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        en = (0, s.bG)([S.A], () => null != S.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: v.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: l,
            onInteraction: n,
            onClose: _,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": D.intl.string(D.t.ZR1Ss6),
            className: x.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [b && B, w && z, P && Y] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        G && J,
                        F &&
                            en &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: D.intl.string(D.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(N, {
                                        ...e,
                                        ref: t,
                                        "aria-label": D.intl.string(D.t["ye+BAy"]),
                                        location: { section: v.JJy.CONTEXT_MENU },
                                        containerClassName: x.Eq,
                                        notchClassName: x.CO,
                                    }),
                            }),
                        L && Z,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        O &&
                            et &&
                            (0, i.jsx)(u.sL, {
                                checked: Q === v.TBI.PUSH_TO_TALK,
                                id: "input-mode",
                                label: D.intl.string(D.t.Q8gkVL),
                                action: () => d.A.setMode(ee, void 0, void 0, { analyticsLocations: k }),
                                disabled: W === M.m.STUDIO,
                            }),
                        U &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: D.intl.string(D.t.wjcRFX),
                                    action: () => d.A.toggleSelfDeaf({ context: $, location: "AudioDeviceMenu" }),
                                    checked: K,
                                },
                                "self-deafen",
                            ),
                        V &&
                            q !== A.L3.HIDDEN &&
                            (0, i.jsx)(u.sL, {
                                id: "spatial-audio",
                                label: D.intl.string(R.default.EWQJcc),
                                checked: X,
                                disabled: (0, A.Xt)(q),
                                subtext: (function (e) {
                                    if ((0, A.Xt)(e))
                                        return D.intl.format(
                                            e === A.L3.BLOCKED_MONO_OUTPUT ? R.default.rOXfEw : R.default.O7Aa3Y,
                                            {},
                                        );
                                })(q),
                                action: () => d.A.setSpatialAudio(!X, k),
                            }),
                        j && H,
                    ],
                }),
            ],
        }),
    });
}
