n.d(t, {
    PG: () => b,
    Vf: () => C,
    YX: () => y,
    ZP: () => I,
    l9: () => Z,
}),
    n(388685),
    n(415506);
var r = n(951288);
n(647438);
var i = n(268146),
    l = n(481060),
    s = n(100527),
    o = n(650958),
    a = n(594174),
    c = n(992817),
    d = n(451467),
    u = n(672811),
    f = n(891180),
    m = n(544753),
    h = n(615161),
    p = n(156582),
    x = n(396678),
    g = n(37113),
    _ = n(65154),
    v = n(637824),
    j = n(388032),
    S = n(355669);
let b = [
        {
            value: g.tI.PRESET_VIDEO,
            canUse: (e) => !0,
        },
        {
            value: g.tI.PRESET_DOCUMENTS,
            canUse: (e) => e !== i.vA.CAMERA,
        },
        {
            value: g.tI.PRESET_CUSTOM,
            canUse: (e) => !0,
        },
    ],
    C = [
        {
            value: g.LY.RESOLUTION_720,
            canUse: (e) => !0,
        },
        {
            value: g.LY.RESOLUTION_1080,
            canUse: (e) => !0,
        },
        {
            value: g.LY.RESOLUTION_1440,
            canUse: (e) => !0,
        },
        {
            value: g.LY.RESOLUTION_SOURCE,
            canUse: (e) => e !== i.vA.CAMERA,
        },
    ],
    y = [g.ws.FPS_15, g.ws.FPS_30, g.ws.FPS_60];
function O(e) {
    let { label: t } = e;
    return (0, r.jsxs)("div", {
        className: S.premiumOptionContainer,
        children: [
            t,
            (0, r.jsx)(l.SrA, {
                size: "xs",
                color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            }),
        ],
    });
}
function I(e) {
    var t, n;
    let { onClose: S, onSelect: I } = e,
        [
            {
                audioSourceId: Z,
                notifyFriends: w,
                hidePreview: N,
                muteStreamAudio: T,
                preset: E,
                resolution: P,
                fps: R,
                sourceType: A,
                selectedChannel: M,
            },
            k,
        ] = (0, h.E_)(),
        L = !(0, c.$s)(M, "StreamOptionsMenu"),
        D = (0, m.Z)(),
        [B, U] = null != (t = (0, x.Z)(g.tI.PRESET_VIDEO)) ? t : [g.LY.RESOLUTION_720, g.ws.FPS_30],
        [G, W] = null != (n = (0, x.Z)(g.tI.PRESET_DOCUMENTS)) ? n : [g.LY.RESOLUTION_SOURCE, g.ws.FPS_15],
        F = (0, o.M)({
            deviceType: _.h7.AUDIO_INPUT,
            selectedDeviceId: Z,
            analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (
                k({
                    type: "set_audio_source",
                    audioSourceId: e,
                }),
                !1
            ),
            menuItemOverrideProps: {
                id: "device-audio-input",
                label: j.intl.string(v.default.YSdHV1),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: "device-audio-input-".concat(e),
            }),
        });
    return (0, r.jsxs)(l.v2r, {
        "aria-label": j.intl.string(j.t["+1H47u"]),
        navId: "stream-options",
        onClose: S,
        onSelect: I,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: j.intl.string(v.default.P2pjm5),
                children: b
                    .filter((e) => {
                        let { canUse: t } = e;
                        return t(A);
                    })
                    .map((e) => {
                        let { value: t } = e;
                        return (0, r.jsx)(
                            l.k5B,
                            {
                                group: "preset",
                                id: "stream-preset-".concat(t),
                                checked: E === t,
                                label: (0, u.L)(t),
                                subtext: (function (e) {
                                    switch (e) {
                                        case g.tI.PRESET_VIDEO:
                                            return j.intl.format(v.default.G5O1Mz, {
                                                resolution: (0, f.M)(B),
                                                frameRate: U,
                                            });
                                        case g.tI.PRESET_DOCUMENTS:
                                            return j.intl.format(v.default["8tcFLy"], {
                                                resolution: (0, f.M)(G),
                                                frameRate: W,
                                            });
                                        case g.tI.PRESET_CUSTOM:
                                            return;
                                        default:
                                            throw Error("No case implemented for ".concat(e));
                                    }
                                })(t),
                                action: () =>
                                    k({
                                        type: "set_preset",
                                        preset: t,
                                    }),
                            },
                            t,
                        );
                    }),
            }),
            E === g.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Clw, {}),
                        (0, r.jsx)(l.sNh, {
                            id: "resolution",
                            label: j.intl.string(v.default.IG5n0d),
                            children: C.filter((e) => {
                                let { canUse: t } = e;
                                return t(A);
                            }).map((e) => {
                                let { value: t } = e;
                                return (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: "resolution",
                                        id: "stream-option-resolution-".concat(t),
                                        checked: P === t,
                                        label:
                                            t !== g.LY.RESOLUTION_720
                                                ? (0, r.jsx)(O, { label: (0, f.M)(t) })
                                                : (0, f.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, d.Z)(E, e, R, a.default.getCurrentUser(), D))
                                                    return (
                                                        S(),
                                                        (0, p.E)({
                                                            analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                k({
                                                    type: "set_resolution",
                                                    resolution: e,
                                                });
                                            })(t),
                                    },
                                    t,
                                );
                            }),
                        }),
                        (0, r.jsx)(l.sNh, {
                            id: "frame-rate",
                            label: j.intl.string(j.t.SkkeIi),
                            children: y.map((e) =>
                                (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: "frame-rate",
                                        id: "stream-option-frame-rate-".concat(e),
                                        checked: R === e,
                                        label:
                                            e === g.ws.FPS_60
                                                ? (0, r.jsx)(O, { label: "".concat(e, "fps") })
                                                : "".concat(e, "fps"),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, d.Z)(E, P, e, a.default.getCurrentUser(), D))
                                                    return (
                                                        S(),
                                                        (0, p.E)({
                                                            analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                k({
                                                    type: "set_fps",
                                                    fps: e,
                                                });
                                            })(e),
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, r.jsx)(l.Clw, {}),
            (0, r.jsx)(l.S89, {
                id: "stream-option-mute",
                checked: T,
                label: j.intl.string(v.default["b0+Ira"]),
                action: () =>
                    k({
                        type: "set_mute_audio",
                        value: !T,
                    }),
            }),
            A === i.vA.CAMERA && F,
            (0, r.jsxs)(l.sNh, {
                id: "advanced-items",
                label: j.intl.string(v.default.eYyK1t),
                children: [
                    (0, r.jsx)(l.S89, {
                        id: "stream-option-share-preview",
                        checked: N,
                        label: j.intl.string(v.default.H3Qjqa),
                        action: () =>
                            k({
                                type: "set_hide_preview",
                                hidePreview: !N,
                            }),
                    }),
                    L &&
                        (0, r.jsx)(l.S89, {
                            id: "stream-option-notify",
                            checked: w,
                            label: j.intl.string(v.default.SiHtX1),
                            action: () =>
                                k({
                                    type: "set_notify_friends",
                                    value: !w,
                                }),
                        }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { onClose: t, onSelect: n } = e,
        [
            {
                audioSourceId: a,
                notifyFriends: d,
                hidePreview: u,
                muteStreamAudio: f,
                sourceType: m,
                selectedChannel: p,
            },
            x,
        ] = (0, h.E_)(),
        g = !(0, c.$s)(p, "SimplifiedStreamOptionsMenu"),
        S = (0, o.M)({
            deviceType: _.h7.AUDIO_INPUT,
            selectedDeviceId: a,
            analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (
                x({
                    type: "set_audio_source",
                    audioSourceId: e,
                }),
                !1
            ),
            menuItemOverrideProps: {
                id: "device-audio-input",
                label: j.intl.string(v.default.YSdHV1),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: "device-audio-input-".concat(e),
            }),
        });
    return (0, r.jsxs)(l.v2r, {
        "aria-label": j.intl.string(j.t["+1H47u"]),
        navId: "stream-options",
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(l.S89, {
                id: "stream-option-mute",
                checked: f,
                label: j.intl.string(v.default["b0+Ira"]),
                action: () =>
                    x({
                        type: "set_mute_audio",
                        value: !f,
                    }),
            }),
            (0, r.jsx)(l.S89, {
                id: "stream-option-share-preview",
                checked: u,
                label: j.intl.string(v.default.H3Qjqa),
                action: () =>
                    x({
                        type: "set_hide_preview",
                        hidePreview: !u,
                    }),
            }),
            g &&
                (0, r.jsx)(l.S89, {
                    id: "stream-option-notify",
                    checked: d,
                    label: j.intl.string(v.default.SiHtX1),
                    action: () =>
                        x({
                            type: "set_notify_friends",
                            value: !d,
                        }),
                }),
            m === i.vA.CAMERA && S,
        ],
    });
}
