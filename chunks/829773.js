n.d(t, { A: () => R });
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
    A = n(486487),
    E = n(110027),
    I = n(298242),
    S = n(186295),
    p = n(763827),
    m = n(532624),
    _ = n(152567);
let C = l.forwardRef(function (e, t) {
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
            children: (0, i.jsx)(_.A, {
                notchBackground: _.V.BLACK,
                location: s,
                meterOnly: !0,
                containerClassName: r,
                notchClassName: a,
            }),
        })
    );
});
var N = n(819027),
    T = n(652215),
    v = n(621380),
    M = n(731854),
    y = n(375708),
    D = n(347933);
function R(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: l,
            onClose: _,
            maybeRenderPTTCheckbox: R = !1,
            renderDeafenCheckbox: x = !1,
            renderInputProfiles: O = !1,
            renderOutputDevices: U = !1,
            renderOutputVolume: w = !1,
            renderInputDevices: L = !1,
            renderInputVolume: P = !1,
            maybeRenderInputMeter: G = !1,
            renderSettingsButton: F = !1,
        } = e,
        { analyticsLocations: b } = (0, h.Ay)();
    (0, g.A)({
        type: s.ImpressionTypes.MENU,
        name: s.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: b },
    });
    let j = (0, N.A)(t),
        V = (0, f.H)({ deviceType: M.oh.AUDIO_INPUT, analyticsLocations: b, asSubmenu: !0 }),
        k = (0, f.H)({ deviceType: M.oh.AUDIO_OUTPUT, analyticsLocations: b, asSubmenu: !0 }),
        H = (0, r.bG)([S.Ay], () => S.Ay.getActiveInputProfile()),
        B = (0, E.A)(b),
        Y = (0, A.A)(b),
        W = (0, I.A)(b),
        z = a.x.DEFAULT,
        J = S.Ay.isSelfDeaf(z),
        Z = (0, r.bG)([S.Ay], () => S.Ay.getMode()),
        $ = Z === T.TBI.VOICE_ACTIVITY ? T.TBI.PUSH_TO_TALK : T.TBI.VOICE_ACTIVITY,
        K = (0, r.bG)([S.Ay, m.Ay], () => {
            let e = S.Ay.getModeOptions().shortcut?.length > 0,
                t = null != m.Ay.getKeybindForAction(T.hCu.PUSH_TO_TALK, !1, !0),
                n = null != m.Ay.getKeybindForAction(T.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        X = (0, r.bG)([p.A], () => null != p.A.getChannelId());
    return (0, i.jsx)(c.A, {
        object: T.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: l,
            onInteraction: n,
            onClose: _,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": y.intl.string(y.t.ZR1Ss6),
            className: D.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [L && V, O && B, U && k] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        P && Y,
                        G &&
                            X &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: y.intl.string(y.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(C, {
                                        ...e,
                                        ref: t,
                                        "aria-label": y.intl.string(y.t["ye+BAy"]),
                                        location: { section: T.JJy.CONTEXT_MENU },
                                        containerClassName: D.Eq,
                                        notchClassName: D.CO,
                                    }),
                            }),
                        w && W,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        R && K
                            ? (0, i.jsx)(u.sL, {
                                  checked: Z === T.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: y.intl.string(y.t.Q8gkVL),
                                  action: () => d.A.setMode($, void 0, void 0, { analyticsLocations: b }),
                                  disabled: H === v.m.STUDIO,
                              })
                            : null,
                        x &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: y.intl.string(y.t.wjcRFX),
                                    action: () => d.A.toggleSelfDeaf({ context: z, location: "AudioDeviceMenu" }),
                                    checked: J,
                                },
                                "self-deafen",
                            ),
                        F && j,
                    ],
                }),
            ],
        }),
    });
}
