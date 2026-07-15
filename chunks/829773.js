"use strict";
n.d(t, { A: () => y });
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
    h = n(486487),
    I = n(110027),
    f = n(298242),
    p = n(186295),
    T = n(763827),
    m = n(532624),
    g = n(152567);
let S = r.forwardRef(function (e, t) {
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
            children: (0, i.jsx)(g.A, {
                notchBackground: g.V.BLACK,
                location: a,
                meterOnly: !0,
                containerClassName: s,
                notchClassName: l,
            }),
        })
    );
});
var N = n(819027),
    C = n(652215),
    R = n(621380),
    O = n(731854),
    L = n(375708),
    D = n(347933);
function y(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: r,
            onClose: g,
            maybeRenderPTTCheckbox: y = !1,
            renderDeafenCheckbox: v = !1,
            renderInputProfiles: b = !1,
            renderOutputDevices: M = !1,
            renderOutputVolume: P = !1,
            renderInputDevices: U = !1,
            renderInputVolume: w = !1,
            maybeRenderInputMeter: G = !1,
            renderSettingsButton: x = !1,
        } = e,
        { analyticsLocations: k } = (0, _.Ay)();
    (0, E.A)({
        type: a.ImpressionTypes.MENU,
        name: a.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: k },
    });
    let F = (0, N.A)(t),
        V = (0, A.H)({ deviceType: O.oh.AUDIO_INPUT, analyticsLocations: k, asSubmenu: !0 }),
        B = (0, A.H)({ deviceType: O.oh.AUDIO_OUTPUT, analyticsLocations: k, asSubmenu: !0 }),
        H = (0, s.bG)([p.Ay], () => p.Ay.getActiveInputProfile()),
        j = (0, I.A)(k),
        W = (0, h.A)(k),
        Y = (0, f.A)(k),
        K = l.x.DEFAULT,
        $ = p.Ay.isSelfDeaf(K),
        z = (0, s.bG)([p.Ay], () => p.Ay.getMode()),
        q = z === C.TBI.VOICE_ACTIVITY ? C.TBI.PUSH_TO_TALK : C.TBI.VOICE_ACTIVITY,
        Z = (0, s.bG)([p.Ay, m.Ay], () => {
            let e = p.Ay.getModeOptions().shortcut?.length > 0,
                t = null != m.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK, !1, !0),
                n = null != m.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        X = (0, s.bG)([T.A], () => null != T.A.getChannelId());
    return (0, i.jsx)(u.A, {
        object: C.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(o.W, {
            "data-menu-migrated": !0,
            onSelect: r,
            onInteraction: n,
            onClose: g,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": L.intl.string(L.t.ZR1Ss6),
            className: D.MK,
            children: [
                (0, i.jsxs)(d.rX, { children: [U && V, b && j, M && B] }),
                (0, i.jsxs)(d.rX, {
                    children: [
                        w && W,
                        G &&
                            X &&
                            (0, i.jsx)(d.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: L.intl.string(L.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(S, {
                                        ...e,
                                        ref: t,
                                        "aria-label": L.intl.string(L.t["ye+BAy"]),
                                        location: { section: C.JJy.CONTEXT_MENU },
                                        containerClassName: D.Eq,
                                        notchClassName: D.CO,
                                    }),
                            }),
                        P && Y,
                    ],
                }),
                (0, i.jsxs)(d.rX, {
                    children: [
                        y && Z
                            ? (0, i.jsx)(d.sL, {
                                  checked: z === C.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: L.intl.string(L.t.Q8gkVL),
                                  action: () => c.A.setMode(q, void 0, void 0, { analyticsLocations: k }),
                                  disabled: H === R.m.STUDIO,
                              })
                            : null,
                        v &&
                            (0, i.jsx)(
                                d.sL,
                                {
                                    id: "deafen",
                                    label: L.intl.string(L.t.wjcRFX),
                                    action: () => c.A.toggleSelfDeaf({ context: K, location: "AudioDeviceMenu" }),
                                    checked: $,
                                },
                                "self-deafen",
                            ),
                        x && F,
                    ],
                }),
            ],
        }),
    });
}
