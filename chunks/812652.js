n.d(t, { ZP: () => Z }), n(388685), n(415506);
var r = n(951288);
n(647438);
var i = n(268146),
    l = n(481060),
    s = n(100527),
    o = n(650958),
    a = n(594174),
    c = n(580991),
    d = n(992817),
    u = n(451467),
    f = n(672811),
    h = n(891180),
    m = n(544753),
    p = n(615161),
    g = n(156582),
    x = n(396678),
    _ = n(37113),
    v = n(65154),
    j = n(637824),
    b = n(388032),
    S = n(355669);
let y = [
        {
            value: _.tI.PRESET_AUTO,
            canUse: (e) => e !== i.vA.CAMERA && (0, c.I)({ location: "StreamOptionsMenu" }).allowAutoQuality,
        },
        {
            value: _.tI.PRESET_VIDEO,
            canUse: (e) => !0,
        },
        {
            value: _.tI.PRESET_DOCUMENTS,
            canUse: (e) => e !== i.vA.CAMERA,
        },
        {
            value: _.tI.PRESET_CUSTOM,
            canUse: (e) => !0,
        },
    ],
    C = [
        {
            value: _.LY.RESOLUTION_720,
            canUse: (e) => !0,
        },
        {
            value: _.LY.RESOLUTION_1080,
            canUse: (e) => !0,
        },
        {
            value: _.LY.RESOLUTION_1440,
            canUse: (e) => !0,
        },
        {
            value: _.LY.RESOLUTION_SOURCE,
            canUse: (e) => e !== i.vA.CAMERA,
        },
    ],
    O = [_.ws.FPS_15, _.ws.FPS_30, _.ws.FPS_60];
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
function Z(e) {
    var t, n;
    let { onClose: c, onSelect: S } = e,
        [
            {
                audioSourceId: Z,
                notifyFriends: I,
                hidePreview: P,
                muteStreamAudio: N,
                preset: T,
                resolution: E,
                fps: R,
                sourceType: A,
                selectedChannel: k,
            },
            M,
        ] = (0, p.E_)(),
        D = !(0, d.$s)(k, "StreamOptionsMenu"),
        L = (0, m.Z)(),
        [B, U] = null != (t = (0, x.Z)(_.tI.PRESET_VIDEO)) ? t : [_.LY.RESOLUTION_720, _.ws.FPS_30],
        [G, W] = null != (n = (0, x.Z)(_.tI.PRESET_DOCUMENTS)) ? n : [_.LY.RESOLUTION_SOURCE, _.ws.FPS_15],
        z = (0, o.M)({
            deviceType: v.h7.AUDIO_INPUT,
            selectedDeviceId: Z,
            analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (
                M({
                    type: "set_audio_source",
                    audioSourceId: e,
                }),
                !1
            ),
            menuItemOverrideProps: {
                id: "device-audio-input",
                label: b.intl.string(j.default.YSdHV1),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: "device-audio-input-".concat(e),
            }),
        });
    return (0, r.jsxs)(l.v2r, {
        "aria-label": b.intl.string(b.t["+1H47u"]),
        navId: "stream-options",
        onClose: c,
        onSelect: S,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: b.intl.string(j.default.P2pjm5),
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
                                checked: T === t,
                                label: (0, f.L)(t),
                                subtext: (function (e) {
                                    switch (e) {
                                        case _.tI.PRESET_VIDEO:
                                            return b.intl.format(j.default.G5O1Mz, {
                                                resolution: (0, h.M)(B),
                                                frameRate: U,
                                            });
                                        case _.tI.PRESET_DOCUMENTS:
                                            return b.intl.format(j.default["8tcFLy"], {
                                                resolution: (0, h.M)(G),
                                                frameRate: W,
                                            });
                                        case _.tI.PRESET_AUTO:
                                            return b.intl.string(j.default.m4jtlZ);
                                        case _.tI.PRESET_CUSTOM:
                                            return;
                                        default:
                                            throw Error("No case implemented for ".concat(e));
                                    }
                                })(t),
                                action: () =>
                                    M({
                                        type: "set_preset",
                                        preset: t,
                                    }),
                            },
                            t,
                        );
                    }),
            }),
            T === _.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Clw, {}),
                        (0, r.jsx)(l.sNh, {
                            id: "resolution",
                            label: b.intl.string(j.default.IG5n0d),
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
                                        checked: E === t,
                                        label:
                                            t !== _.LY.RESOLUTION_720
                                                ? (0, r.jsx)(w, { label: (0, h.M)(t) })
                                                : (0, h.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(T, e, R, a.default.getCurrentUser(), L))
                                                    return (
                                                        c(),
                                                        (0, g.E)({
                                                            analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                M({
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
                            label: b.intl.string(b.t.SkkeIi),
                            children: O.map((e) =>
                                (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: "frame-rate",
                                        id: "stream-option-frame-rate-".concat(e),
                                        checked: R === e,
                                        label:
                                            e === _.ws.FPS_60
                                                ? (0, r.jsx)(w, { label: "".concat(e, "fps") })
                                                : "".concat(e, "fps"),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(T, E, e, a.default.getCurrentUser(), L))
                                                    return (
                                                        c(),
                                                        (0, g.E)({
                                                            analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                M({
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
                checked: N,
                label: b.intl.string(j.default["b0+Ira"]),
                action: () =>
                    M({
                        type: "set_mute_audio",
                        value: !N,
                    }),
            }),
            A === i.vA.CAMERA && z,
            (0, r.jsxs)(l.sNh, {
                id: "advanced-items",
                label: b.intl.string(j.default.eYyK1t),
                children: [
                    (0, r.jsx)(l.S89, {
                        id: "stream-option-share-preview",
                        checked: P,
                        label: b.intl.string(j.default.H3Qjqa),
                        action: () =>
                            M({
                                type: "set_hide_preview",
                                hidePreview: !P,
                            }),
                    }),
                    D &&
                        (0, r.jsx)(l.S89, {
                            id: "stream-option-notify",
                            checked: I,
                            label: b.intl.string(j.default.SiHtX1),
                            action: () =>
                                M({
                                    type: "set_notify_friends",
                                    value: !I,
                                }),
                        }),
                ],
            }),
        ],
    });
}
