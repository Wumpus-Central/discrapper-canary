n.d(t, { A: () => L });
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
    A = n(833473),
    p = n(844981),
    m = n(486487),
    E = n(110027),
    I = n(298242),
    S = n(360906),
    C = n(763827),
    _ = n(532624),
    N = n(152567);
function T(e) {
    let { ref: t, ...n } = e,
        { "aria-label": r, location: s, containerClassName: a, notchClassName: o } = n,
        u = l.useRef(null);
    return (
        l.useImperativeHandle(
            t,
            () => ({ focus: () => u.current?.focus(), blur: () => u.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            ref: u,
            tabIndex: -1,
            role: "img",
            "aria-label": r,
            children: (0, i.jsx)(N.A, {
                notchBackground: N.V.BLACK,
                location: s,
                meterOnly: !0,
                containerClassName: a,
                notchClassName: o,
            }),
        })
    );
}
var v = n(819027),
    y = n(652215),
    M = n(621380),
    D = n(731854),
    R = n(105292),
    O = n(943679),
    x = n(788066);
function L(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: l,
            onClose: N,
            maybeRenderPTTCheckbox: L = !1,
            renderDeafenCheckbox: w = !1,
            renderInputProfiles: U = !1,
            renderOutputDevices: P = !1,
            renderOutputVolume: b = !1,
            renderInputDevices: G = !1,
            renderInputVolume: F = !1,
            maybeRenderInputMeter: j = !1,
            renderSettingsButton: k = !1,
            maybeRenderSpatialAudioCheckbox: V = !1,
        } = e,
        { analyticsLocations: H } = (0, h.Ay)();
    (0, f.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: H },
    });
    let B = (0, v.A)(t),
        W = (0, g.H)({ deviceType: D.oh.AUDIO_INPUT, analyticsLocations: H, asSubmenu: !0 }),
        Y = (0, g.H)({ deviceType: D.oh.AUDIO_OUTPUT, analyticsLocations: H, asSubmenu: !0 }),
        z = (0, s.bG)([S.Ay], () => S.Ay.getActiveInputProfile()),
        J = (0, E.A)(H),
        K = (0, m.A)(H),
        $ = (0, I.A)(H),
        Z = a.x.DEFAULT,
        q = S.Ay.isSelfDeaf(Z),
        X = (0, p.Ay)("AudioDeviceMenu"),
        Q = (0, s.bG)([A.A], () => A.A.isSpatialAudioEnabled()),
        ee = (0, s.bG)([S.Ay], () => S.Ay.getMode()),
        et = ee === y.TBI.VOICE_ACTIVITY ? y.TBI.PUSH_TO_TALK : y.TBI.VOICE_ACTIVITY,
        en = (0, s.bG)([S.Ay, _.Ay], () => {
            let e = S.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(y.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(y.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        ei = (0, s.bG)([C.A], () => null != C.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: y.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: l,
            onInteraction: n,
            onClose: N,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": R.intl.string(R.t.ZR1Ss6),
            className: x.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [G && W, U && J, P && Y] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        F && K,
                        j &&
                            ei &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: R.intl.string(R.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(T, {
                                        ...e,
                                        ref: t,
                                        "aria-label": R.intl.string(R.t["ye+BAy"]),
                                        location: { section: y.JJy.CONTEXT_MENU },
                                        containerClassName: x.Eq,
                                        notchClassName: x.CO,
                                    }),
                            }),
                        b && $,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        L &&
                            en &&
                            (0, i.jsx)(u.sL, {
                                checked: ee === y.TBI.PUSH_TO_TALK,
                                id: "input-mode",
                                label: R.intl.string(R.t.Q8gkVL),
                                action: () => d.default.setMode(et, void 0, void 0, { analyticsLocations: H }),
                                disabled: z === M.m.STUDIO,
                            }),
                        w &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: R.intl.string(R.t.wjcRFX),
                                    action: () => d.default.toggleSelfDeaf({ context: Z, location: "AudioDeviceMenu" }),
                                    checked: q,
                                },
                                "self-deafen",
                            ),
                        V &&
                            X !== p.L3.HIDDEN &&
                            (0, i.jsx)(u.sL, {
                                id: "spatial-audio",
                                label: R.intl.string(O.default.EWQJcc),
                                checked: Q,
                                disabled: (0, p.Xt)(X),
                                subtext: (function (e) {
                                    if ((0, p.Xt)(e))
                                        return R.intl.format(
                                            e === p.L3.BLOCKED_MONO_OUTPUT ? O.default.rOXfEw : O.default.O7Aa3Y,
                                            {},
                                        );
                                })(X),
                                action: () => d.default.setSpatialAudio(!Q, H),
                            }),
                        k && B,
                    ],
                }),
            ],
        }),
    });
}
