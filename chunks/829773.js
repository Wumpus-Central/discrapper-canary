"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    r = n(64700),
    s = n(562708),
    a = n(17928),
    o = n(459838),
    l = n(980707),
    u = n(477782),
    c = n(827343),
    d = n(820284),
    _ = n(688810),
    h = n(139286),
    f = n(270816),
    E = n(486487),
    p = n(110027),
    m = n(298242),
    g = n(451409),
    A = n(763827),
    I = n(532624),
    T = n(152567);
let S = r.forwardRef(function (e, t) {
    let { "aria-label": n, location: s, containerClassName: a, notchClassName: o } = e,
        l = r.useRef(null);
    return (
        r.useImperativeHandle(
            t,
            () => ({ focus: () => l.current?.focus(), blur: () => l.current?.blur(), activate: () => !1 }),
            [],
        ),
        (0, i.jsx)("div", {
            ref: l,
            tabIndex: -1,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(T.A, {
                notchBackground: T.V.BLACK,
                location: s,
                meterOnly: !0,
                containerClassName: a,
                notchClassName: o,
            }),
        })
    );
});
var N = n(819027),
    C = n(652215),
    y = n(621380),
    O = n(731854),
    R = n(375708),
    v = n(347933);
function b(e) {
    let {
            appContext: t,
            onInteraction: n,
            onSelect: r,
            onClose: T,
            maybeRenderPTTCheckbox: b = !1,
            renderDeafenCheckbox: L = !1,
            renderInputProfiles: D = !1,
            renderOutputDevices: w = !1,
            renderOutputVolume: P = !1,
            renderInputDevices: M = !1,
            renderInputVolume: x = !1,
            maybeRenderInputMeter: U = !1,
            renderSettingsButton: k = !1,
        } = e,
        { analyticsLocations: G } = (0, _.Ay)();
    (0, h.A)({
        type: s.ImpressionTypes.MENU,
        name: s.ImpressionNames.AUDIO_DEVICE_MENU,
        properties: { location_stack: G },
    });
    let V = (0, N.A)(t),
        F = (0, f.H)({ deviceType: O.oh.AUDIO_INPUT, analyticsLocations: G, asSubmenu: !0 }),
        B = (0, f.H)({ deviceType: O.oh.AUDIO_OUTPUT, analyticsLocations: G, asSubmenu: !0 }),
        H = (0, a.bG)([g.Ay], () => g.Ay.getActiveInputProfile()),
        j = (0, p.A)(G),
        W = (0, E.A)(G),
        Y = (0, m.A)(G),
        K = o.x.DEFAULT,
        $ = g.Ay.isSelfDeaf(K),
        z = (0, a.bG)([g.Ay], () => g.Ay.getMode()),
        q = z === C.TBI.VOICE_ACTIVITY ? C.TBI.PUSH_TO_TALK : C.TBI.VOICE_ACTIVITY,
        Z = (0, a.bG)([g.Ay, I.Ay], () => {
            let e = g.Ay.getModeOptions().shortcut?.length > 0,
                t = null != I.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK, !1, !0),
                n = null != I.Ay.getKeybindForAction(C.hCu.PUSH_TO_TALK_PRIORITY, !1, !0);
            return e || t || n;
        }),
        X = (0, a.bG)([A.A], () => null != A.A.getChannelId());
    return (0, i.jsx)(d.A, {
        object: C.ZSU.CONTEXT_MENU,
        children: (0, i.jsxs)(l.W, {
            "data-menu-migrated": !0,
            onSelect: r,
            onInteraction: n,
            onClose: T,
            navId: "audio-device-context",
            variant: "fixed",
            "aria-label": R.intl.string(R.t.ZR1Ss6),
            className: v.MK,
            children: [
                (0, i.jsxs)(u.rX, { children: [M && F, D && j, w && B] }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        x && W,
                        U &&
                            X &&
                            (0, i.jsx)(u.aK, {
                                id: "input-device-meter",
                                interactive: !1,
                                label: R.intl.string(R.t["ye+BAy"]),
                                control: (e, t) =>
                                    (0, i.jsx)(S, {
                                        ...e,
                                        ref: t,
                                        "aria-label": R.intl.string(R.t["ye+BAy"]),
                                        location: { section: C.JJy.CONTEXT_MENU },
                                        containerClassName: v.Eq,
                                        notchClassName: v.CO,
                                    }),
                            }),
                        P && Y,
                    ],
                }),
                (0, i.jsxs)(u.rX, {
                    children: [
                        b && Z
                            ? (0, i.jsx)(u.sL, {
                                  checked: z === C.TBI.PUSH_TO_TALK,
                                  id: "input-mode",
                                  label: R.intl.string(R.t.Q8gkVL),
                                  action: () => c.A.setMode(q, void 0, void 0, { analyticsLocations: G }),
                                  disabled: H === y.m.STUDIO,
                              })
                            : null,
                        L &&
                            (0, i.jsx)(
                                u.sL,
                                {
                                    id: "deafen",
                                    label: R.intl.string(R.t.wjcRFX),
                                    action: () => c.A.toggleSelfDeaf({ context: K, location: "AudioDeviceMenu" }),
                                    checked: $,
                                },
                                "self-deafen",
                            ),
                        k && V,
                    ],
                }),
            ],
        }),
    });
}
