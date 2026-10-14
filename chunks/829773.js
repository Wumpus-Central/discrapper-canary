n.d(t, { A: () => O });
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
    C = n(833473),
    A = n(844981),
    p = n(486487),
    m = n(110027),
    I = n(298242),
    E = n(192820),
    S = n(763827),
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
var M = n(819027),
    v = n(652215),
    y = n(621380),
    L = n(731854),
    x = n(660183),
    D = n(943679),
    R = n(788066);
function O(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: l,
            onClose: N,
            maybeRenderPTTCheckbox: O = !1,
            renderDeafenCheckbox: w = !1,
            renderInputProfiles: U = !1,
            renderOutputDevices: P = !1,
            renderOutputVolume: b = !1,
            renderInputDevices: V = !1,
            renderInputVolume: j = !1,
            maybeRenderInputMeter: F = !1,
            renderSettingsButton: G = !1,
            maybeRenderSpatialAudioCheckbox: H = !1,
        } = e,
        { analyticsLocations: k } = (0, h.Ay)();
    (0, f.A)({
        type: r.ImpressionTypes.MENU,
        name: r.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k },
    });
    let Z = (0, M.A)(t),
        B = (0, g.H)({ deviceType: L.oh.AUDIO_INPUT, analyticsLocations: k, asSubmenu: !0 }),
        W = (0, g.H)({ deviceType: L.oh.AUDIO_OUTPUT, analyticsLocations: k, asSubmenu: !0 }),
        Y = (0, s.bG)([E.Ay], () => E.Ay.getActiveInputProfile()),
        z = (0, m.A)(k),
        J = (0, p.A)(k),
        K = (0, I.A)(k),
        $ = a.x.DEFAULT,
        q = E.Ay.isSelfDeaf($),
        X = (0, A.Ay)("AudioDeviceMenu"),
        Q = (0, s.bG)([C.A], () => C.A.isSpatialAudioEnabled()),
        ee = (0, s.bG)([E.Ay], () => E.Ay.getMode()),
        et = ee === v.TBI.VOICE_ACTIVITY ? v.TBI.PUSH_TO_TALK : v.TBI.VOICE_ACTIVITY,
        en = (0, s.bG)([E.Ay, _.Ay], () => {
            let e = E.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        ei = (0, s.bG)([S.A], () => null != S.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: v.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: l,
            onInteraction: n,
            onClose: N,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": x.intl.string(x.t.ZR1Ss6),
            className: R.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [V && B, U && z, P && W] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        j && J,
                        F &&
                            ei &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: x.intl.string(x.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(T, {
                                        ...e,
                                        ref: t,
                                        "aria-label": x.intl.string(x.t["ye+BAy"]),
                                        location: { section: v.JJy.CONTEXT_MENU },
                                        containerClassName: R.Eq,
                                        notchClassName: R.CO,
                                    }),
                            }),
                        b && K,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        O &&
                            en &&
                            (0, i.jsx)(u.sL, {
                                checked: ee === v.TBI.PUSH_TO_TALK,
                                id: "input-mode",
                                label: x.intl.string(x.t.Q8gkVL),
                                action: () => d.default.setMode(et, void 0, void 0, { analyticsLocations: k }),
                                disabled: Y === y.m.STUDIO,
                            }),
                        w &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: x.intl.string(x.t.wjcRFX),
                                    action: () => d.default.toggleSelfDeaf({ context: $, location: "AudioDeviceMenu" }),
                                    checked: q,
                                },
                                "self-deafen",
                            ),
                        H &&
                            X !== A.L3.HIDDEN &&
                            (0, i.jsx)(u.sL, {
                                id: "spatial-audio",
                                label: x.intl.string(D.default.EWQJcc),
                                checked: Q,
                                disabled: (0, A.Xt)(X),
                                subtext: (function (e) {
                                    if ((0, A.Xt)(e))
                                        return x.intl.format(
                                            e === A.L3.BLOCKED_MONO_OUTPUT ? D.default.rOXfEw : D.default.O7Aa3Y,
                                            {},
                                        );
                                })(X),
                                action: () => d.default.setSpatialAudio(!Q, k),
                            }),
                        G && Z,
                    ],
                }),
            ],
        }),
    });
}
