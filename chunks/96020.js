n.d(t, { A: () => L });
var i = n(477900),
    r = n(582128),
    l = n(613412),
    s = n(855986),
    a = n(205693),
    o = n(165862),
    u = n(477782),
    d = n(827343),
    c = n(820284),
    h = n(688810),
    f = n(139286),
    g = n(270816),
    A = n(833473),
    p = n(844981),
    I = n(486487),
    m = n(110027),
    E = n(298242),
    S = n(988468),
    C = n(495867),
    _ = n(532624),
    N = n(782600);
function T(e) {
    let { ref: t, ...n } = e,
        { "aria-label": l, location: s, containerClassName: a, notchClassName: o } = n,
        u = r.useRef(null);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => u.current?.focus(), blur: () => u.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            ref: u,
            tabIndex: -1,
            role: "img",
            "aria-label": l,
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
var y = n(819027),
    v = n(652215),
    M = n(621380),
    R = n(731854),
    D = n(792996),
    O = n(610234),
    x = n(788066);
function L(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: r,
            onClose: N,
            maybeRenderPTTCheckbox: L = !1,
            renderDeafenCheckbox: U = !1,
            renderInputProfiles: w = !1,
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
        type: l.ImpressionTypes.MENU,
        name: l.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: H },
    });
    let B = (0, y.A)(t),
        W = (0, g.H)({ deviceType: R.oh.AUDIO_INPUT, analyticsLocations: H, asSubmenu: !0 }),
        Y = (0, g.H)({ deviceType: R.oh.AUDIO_OUTPUT, analyticsLocations: H, asSubmenu: !0 }),
        z = (0, s.bG)([S.Ay], () => S.Ay.getActiveInputProfile()),
        K = (0, m.A)(H),
        $ = (0, I.A)(H),
        q = (0, E.A)(H),
        J = a.x.DEFAULT,
        Z = S.Ay.isSelfDeaf(J),
        X = (0, p.Ay)("AudioDeviceMenu"),
        Q = (0, s.bG)([A.A], () => A.A.isSpatialAudioEnabled()),
        ee = (0, s.bG)([S.Ay], () => S.Ay.getMode()),
        et = ee === v.TBI.VOICE_ACTIVITY ? v.TBI.PUSH_TO_TALK : v.TBI.VOICE_ACTIVITY,
        en = (0, s.bG)([S.Ay, _.Ay], () => {
            let e = S.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        ei = (0, s.bG)([C.A], () => null != C.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: v.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: r,
            onInteraction: n,
            onClose: N,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": D.intl.string(D.t.ZR1Ss6),
            className: x.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [G && W, w && K, P && Y] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        F && $,
                        j &&
                            ei &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: D.intl.string(D.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(T, {
                                        ...e,
                                        ref: t,
                                        "aria-label": D.intl.string(D.t["ye+BAy"]),
                                        location: { section: v.JJy.CONTEXT_MENU },
                                        containerClassName: x.Eq,
                                        notchClassName: x.CO,
                                    }),
                            }),
                        b && q,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        L &&
                            en &&
                            (0, i.jsx)(u.sL, {
                                checked: ee === v.TBI.PUSH_TO_TALK,
                                id: "input-mode",
                                label: D.intl.string(D.t.Q8gkVL),
                                action: () => d.default.setMode(et, void 0, void 0, { analyticsLocations: H }),
                                disabled: z === M.m.STUDIO,
                            }),
                        U &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: D.intl.string(D.t.wjcRFX),
                                    action: () => d.default.toggleSelfDeaf({ context: J, location: "AudioDeviceMenu" }),
                                    checked: Z,
                                },
                                "self-deafen",
                            ),
                        V &&
                            X !== p.L3.HIDDEN &&
                            (0, i.jsx)(u.sL, {
                                id: "spatial-audio",
                                label: D.intl.string(O.default.EWQJcc),
                                checked: Q,
                                disabled: (0, p.Xt)(X),
                                subtext: (function (e) {
                                    if ((0, p.Xt)(e))
                                        return D.intl.format(
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
