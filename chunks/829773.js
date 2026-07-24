n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(562708),
    r = n(17928),
    a = n(459838),
    o = n(980707),
    u = n(477782),
    d = n(827343),
    c = n(820284),
    h = n(688810),
    g = n(139286),
    f = n(270816),
    A = n(957658),
    E = n(486487),
    I = n(110027),
    p = n(298242),
    S = n(283540),
    m = n(763827),
    _ = n(532624),
    C = n(152567);
let N = l.forwardRef(function (e, t) {
    let { "aria-label": n, location: s, containerClassName: r, notchClassName: a } = e,
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
            children: (0, i.jsx)(C.A, {
                notchBackground: C.V.BLACK,
                location: s,
                meterOnly: !0,
                containerClassName: r,
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
    R = n(329139),
    O = n(447589);
function x(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: l,
            onClose: C,
            maybeRenderPTTCheckbox: x = !1,
            renderDeafenCheckbox: U = !1,
            renderInputProfiles: w = !1,
            renderOutputDevices: L = !1,
            renderOutputVolume: P = !1,
            renderInputDevices: G = !1,
            renderInputVolume: b = !1,
            maybeRenderInputMeter: F = !1,
            renderSettingsButton: j = !1,
            maybeRenderSpatialAudioCheckbox: V = !1,
        } = e,
        { analyticsLocations: k } = (0, h.Ay)();
    (0, g.A)({
        type: s.ImpressionTypes.MENU,
        name: s.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k },
    });
    let H = (0, T.A)(t),
        B = (0, f.H)({ deviceType: y.oh.AUDIO_INPUT, analyticsLocations: k, asSubmenu: !0 }),
        Y = (0, f.H)({ deviceType: y.oh.AUDIO_OUTPUT, analyticsLocations: k, asSubmenu: !0 }),
        W = (0, r.bG)([S.Ay], () => S.Ay.getActiveInputProfile()),
        z = (0, I.A)(k),
        J = (0, E.A)(k),
        Z = (0, p.A)(k),
        $ = a.x.DEFAULT,
        K = S.Ay.isSelfDeaf($),
        X = (0, A.A)("AudioDeviceMenu"),
        q = (0, r.bG)([S.Ay], () => S.Ay.isSpatialAudioEnabled()),
        Q = (0, r.bG)([S.Ay], () => S.Ay.getMode()),
        ee = Q === v.TBI.VOICE_ACTIVITY ? v.TBI.PUSH_TO_TALK : v.TBI.VOICE_ACTIVITY,
        et = (0, r.bG)([S.Ay, _.Ay], () => {
            let e = S.Ay.getModeOptions().shortcut?.length > 0,
                t = null != _.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK, !1, !0),
                n = null != _.Ay.getKeybindForAction(v.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        en = (0, r.bG)([m.A], () => null != m.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: v.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: l,
            onInteraction: n,
            onClose: C,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": D.intl.string(D.t.ZR1Ss6),
            className: O.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [G && B, w && z, L && Y] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        b && J,
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
                                        containerClassName: O.Eq,
                                        notchClassName: O.CO,
                                    }),
                            }),
                        P && Z,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        x &&
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
                            X &&
                            (0, i.jsx)(u.sL, {
                                id: "spatial-audio",
                                label: D.intl.string(R.default.EWQJcc),
                                checked: q,
                                action: () => d.A.setSpatialAudio(!q, k),
                            }),
                        j && H,
                    ],
                }),
            ],
        }),
    });
}
