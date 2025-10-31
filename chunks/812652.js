n.d(t, { ZP: () => P }), n(388685), n(415506);
var r = n(951288);
n(647438);
var i = n(268146),
    l = n(481060),
    o = n(100527),
    s = n(650958),
    a = n(594174),
    c = n(580991),
    d = n(992817),
    u = n(451467),
    f = n(672811),
    p = n(891180),
    h = n(544753),
    m = n(615161),
    _ = n(156582),
    g = n(396678),
    x = n(37113),
    v = n(65154),
    j = n(529822),
    b = n(388032),
    S = n(355669);
let y = [
        {
            value: x.ApplicationStreamPresets.PRESET_AUTO,
            canUse: (e) => e !== i.vA.CAMERA && (0, c.IK)({ location: "StreamOptionsMenu" }).allowAutoQuality,
        },
        {
            value: x.ApplicationStreamPresets.PRESET_VIDEO,
            canUse: (e) => !0,
        },
        {
            value: x.ApplicationStreamPresets.PRESET_DOCUMENTS,
            canUse: (e) => e !== i.vA.CAMERA,
        },
        {
            value: x.ApplicationStreamPresets.PRESET_CUSTOM,
            canUse: (e) => !0,
        },
    ],
    C = [
        {
            value: x.ApplicationStreamResolutions.RESOLUTION_720,
            canUse: (e) => !0,
        },
        {
            value: x.ApplicationStreamResolutions.RESOLUTION_1080,
            canUse: (e) => !0,
        },
        {
            value: x.ApplicationStreamResolutions.RESOLUTION_1440,
            canUse: (e) => !0,
        },
        {
            value: x.ApplicationStreamResolutions.RESOLUTION_SOURCE,
            canUse: (e) => e !== i.vA.CAMERA,
        },
    ],
    O = [x.ApplicationStreamFPS.FPS_15, x.ApplicationStreamFPS.FPS_30, x.ApplicationStreamFPS.FPS_60];
function w(e) {
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
function P(e) {
    var t, n;
    let { onClose: c, onSelect: S } = e,
        [
            {
                audioSourceId: P,
                notifyFriends: T,
                hidePreview: Z,
                muteStreamAudio: I,
                preset: E,
                resolution: N,
                fps: R,
                sourceType: A,
                selectedChannel: M,
            },
            k,
        ] = (0, m.E_)(),
        D = !(0, d.$s)(M, "StreamOptionsMenu"),
        B = (0, h.Z)(),
        [L, G] =
            null != (t = (0, g.Z)(x.ApplicationStreamPresets.PRESET_VIDEO))
                ? t
                : [x.ApplicationStreamResolutions.RESOLUTION_720, x.ApplicationStreamFPS.FPS_30],
        [U, F] =
            null != (n = (0, g.Z)(x.ApplicationStreamPresets.PRESET_DOCUMENTS))
                ? n
                : [x.ApplicationStreamResolutions.RESOLUTION_SOURCE, x.ApplicationStreamFPS.FPS_15],
        H = (0, s.M)({
            deviceType: v.h7.AUDIO_INPUT,
            selectedDeviceId: P,
            analyticsLocations: [o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
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
                label: b.intl.string(j.default.YSdHVw),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: "device-audio-input-".concat(e),
            }),
        });
    return (0, r.jsxs)(l.v2r, {
        "aria-label": b.intl.string(b.t["+1H47t"]),
        navId: "stream-options",
        onClose: c,
        onSelect: S,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: b.intl.string(j.default.P2pjmy),
                children: y
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
                                label: (0, f.L)(t),
                                subtext: (function (e) {
                                    switch (e) {
                                        case x.ApplicationStreamPresets.PRESET_VIDEO:
                                            return b.intl.format(j.default.G5O1Mz, {
                                                resolution: (0, p.M)(L),
                                                frameRate: G,
                                            });
                                        case x.ApplicationStreamPresets.PRESET_DOCUMENTS:
                                            return b.intl.format(j.default["8tcFL5"], {
                                                resolution: (0, p.M)(U),
                                                frameRate: F,
                                            });
                                        case x.ApplicationStreamPresets.PRESET_AUTO:
                                            return b.intl.string(j.default.m4jtlc);
                                        case x.ApplicationStreamPresets.PRESET_CUSTOM:
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
            E === x.ApplicationStreamPresets.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Clw, {}),
                        (0, r.jsx)(l.sNh, {
                            id: "resolution",
                            label: b.intl.string(j.default.IG5n0X),
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
                                        checked: N === t,
                                        label:
                                            t !== x.ApplicationStreamResolutions.RESOLUTION_720
                                                ? (0, r.jsx)(w, { label: (0, p.M)(t) })
                                                : (0, p.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(E, e, R, a.default.getCurrentUser(), B))
                                                    return (
                                                        c(),
                                                        (0, _.E)({
                                                            analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
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
                            label: b.intl.string(b.t.SkkeIt),
                            children: O.map((e) =>
                                (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: "frame-rate",
                                        id: "stream-option-frame-rate-".concat(e),
                                        checked: R === e,
                                        label:
                                            e === x.ApplicationStreamFPS.FPS_60
                                                ? (0, r.jsx)(w, { label: "".concat(e, "fps") })
                                                : "".concat(e, "fps"),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(E, N, e, a.default.getCurrentUser(), B))
                                                    return (
                                                        c(),
                                                        (0, _.E)({
                                                            analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
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
                checked: I,
                label: b.intl.string(j.default["b0+Irf"]),
                action: () =>
                    k({
                        type: "set_mute_audio",
                        value: !I,
                    }),
            }),
            A === i.vA.CAMERA && H,
            (0, r.jsxs)(l.sNh, {
                id: "advanced-items",
                label: b.intl.string(j.default.eYyK1v),
                children: [
                    (0, r.jsx)(l.S89, {
                        id: "stream-option-share-preview",
                        checked: Z,
                        label: b.intl.string(j.default.H3QjqX),
                        action: () =>
                            k({
                                type: "set_hide_preview",
                                hidePreview: !Z,
                            }),
                    }),
                    D &&
                        (0, r.jsx)(l.S89, {
                            id: "stream-option-notify",
                            checked: T,
                            label: b.intl.string(j.default.SiHtXy),
                            action: () =>
                                k({
                                    type: "set_notify_friends",
                                    value: !T,
                                }),
                        }),
                ],
            }),
        ],
    });
}
