"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    a = n(562708),
    s = n(17928),
    l = n(459838),
    o = n(980707),
    d = n(477782),
    c = n(827343),
    u = n(820284),
    _ = n(688810),
    E = n(139286),
    A = n(270816),
    h = n(957658),
    I = n(486487),
    f = n(110027),
    p = n(298242),
    T = n(954035),
    m = n(763827),
    g = n(532624),
    S = n(152567);
let N = r.forwardRef(function (e, t) {
    let { "aria-label": n, location: a, containerClassName: s, notchClassName: l } = e,
        o = r.useRef(null);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => o.current?.focus(), blur: () => o.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            ref: o,
            tabIndex: -1,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(S.A, {
                notchBackground: S.V.BLACK,
                location: a,
                meterOnly: !0,
                containerClassName: s,
                notchClassName: l,
            }),
        })
    );
});
var C = n(819027),
    O = n(652215),
    R = n(621380),
    L = n(731854),
    y = n(375708),
    D = n(329139),
    v = n(447589);
function b(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: r,
            onClose: S,
            maybeRenderPTTCheckbox: b = !1,
            renderDeafenCheckbox: M = !1,
            renderInputProfiles: P = !1,
            renderOutputDevices: U = !1,
            renderOutputVolume: w = !1,
            renderInputDevices: G = !1,
            renderInputVolume: x = !1,
            maybeRenderInputMeter: k = !1,
            renderSettingsButton: F = !1,
            maybeRenderSpatialAudioCheckbox: V = !1,
        } = e,
        { analyticsLocations: B } = (0, _.Ay)();
    (0, E.A)({
        type: a.ImpressionTypes.MENU,
        name: a.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: B },
    });
    let H = (0, C.A)(t),
        j = (0, A.H)({ deviceType: L.oh.AUDIO_INPUT, analyticsLocations: B, asSubmenu: !0 }),
        W = (0, A.H)({ deviceType: L.oh.AUDIO_OUTPUT, analyticsLocations: B, asSubmenu: !0 }),
        Y = (0, s.bG)([T.Ay], () => T.Ay.getActiveInputProfile()),
        K = (0, f.A)(B),
        $ = (0, I.A)(B),
        z = (0, p.A)(B),
        q = l.x.DEFAULT,
        Z = T.Ay.isSelfDeaf(q),
        X = (0, h.A)("AudioDeviceMenu"),
        Q = (0, s.bG)([T.Ay], () => T.Ay.isSpatialAudioEnabled()),
        J = (0, s.bG)([T.Ay], () => T.Ay.getMode()),
        ee = J === O.TBI.VOICE_ACTIVITY ? O.TBI.PUSH_TO_TALK : O.TBI.VOICE_ACTIVITY,
        et = (0, s.bG)([T.Ay, g.Ay], () => {
            let e = T.Ay.getModeOptions().shortcut?.length > 0,
                t = null != g.Ay.getKeybindForAction(O.hCu.PUSH_TO_TALK, !1, !0),
                n = null != g.Ay.getKeybindForAction(O.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        en = (0, s.bG)([m.A], () => null != m.A.getChannelId());
    return (0, i.jsx)(u.A, {
        object: O.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: r,
            onInteraction: n,
            onClose: S,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": y.intl.string(y.t.ZR1Ss6),
            className: v.MK,
            children: [
                (0, i.jsxs)(d.rX, { children: [G && j, P && K, U && W] }),
                (0, i.jsxs)(d.rX, {
                    children: [
                        x && $,
                        k &&
                            en &&
                            (0, i.jsx)(d.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: y.intl.string(y.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(N, {
                                        ...e,
                                        ref: t,
                                        "aria-label": y.intl.string(y.t["ye+BAy"]),
                                        location: { section: O.JJy.CONTEXT_MENU },
                                        containerClassName: v.Eq,
                                        notchClassName: v.CO,
                                    }),
                            }),
                        w && z,
                    ],
                }),
                (0, i.jsxs)(d.rX, {
                    children: [
                        b &&
                            et &&
                            (0, i.jsx)(d.sL, {
                                checked: J === O.TBI.PUSH_TO_TALK,
                                id: "input-mode",
                                label: y.intl.string(y.t.Q8gkVL),
                                action: () => c.A.setMode(ee, void 0, void 0, { analyticsLocations: B }),
                                disabled: Y === R.m.STUDIO,
                            }),
                        M &&
                            (0, i.jsx)(
                                d.sL,
                                {
                                    id: "deafen",
                                    label: y.intl.string(y.t.wjcRFX),
                                    action: () => c.A.toggleSelfDeaf({ context: q, location: "AudioDeviceMenu" }),
                                    checked: Z,
                                },
                                "self-deafen",
                            ),
                        V &&
                            X &&
                            (0, i.jsx)(d.sL, {
                                id: "spatial-audio",
                                label: y.intl.string(D.default.EWQJcc),
                                checked: Q,
                                action: () => c.A.setSpatialAudio(!Q, B),
                            }),
                        F && H,
                    ],
                }),
            ],
        }),
    });
}
