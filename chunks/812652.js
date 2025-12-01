n.d(t, { ZP: () => Z }), n(388685), n(415506);
var r = n(54381);
n(473749);
var i = n(268146),
    l = n(481060),
    s = n(100527),
    o = n(650958),
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
    j = n(718629),
    S = n(388032),
    b = n(355669);
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
        className: b.premiumOptionContainer,
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
    let { onClose: c, onSelect: b } = e,
        [
            {
                audioSourceId: Z,
                notifyFriends: P,
                hidePreview: I,
                muteStreamAudio: E,
                preset: T,
                resolution: N,
                fps: A,
                sourceType: R,
                selectedChannel: M,
            },
            k,
        ] = (0, m.E_)(),
        D = !(0, d.$s)(M, "StreamOptionsMenu"),
        L = (0, h.Z)(),
        [B, G] =
            null != (t = (0, g.Z)(x.ApplicationStreamPresets.PRESET_VIDEO))
                ? t
                : [x.ApplicationStreamResolutions.RESOLUTION_720, x.ApplicationStreamFPS.FPS_30],
        [U, F] =
            null != (n = (0, g.Z)(x.ApplicationStreamPresets.PRESET_DOCUMENTS))
                ? n
                : [x.ApplicationStreamResolutions.RESOLUTION_SOURCE, x.ApplicationStreamFPS.FPS_15],
        H = (0, o.M)({
            deviceType: v.h7.AUDIO_INPUT,
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
                label: S.intl.string(j.default.YSdHVw),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: "device-audio-input-".concat(e),
            }),
        });
    return (0, r.jsxs)(l.v2r, {
        "aria-label": S.intl.string(S.t["+1H47t"]),
        navId: "stream-options",
        onClose: c,
        onSelect: b,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: S.intl.string(j.default.P2pjmy),
                children: y
                    .filter((e) => {
                        let { canUse: t } = e;
                        return t(R);
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
                                        case x.ApplicationStreamPresets.PRESET_VIDEO:
                                            return S.intl.format(j.default.G5O1Mz, {
                                                resolution: (0, p.M)(B),
                                                frameRate: G,
                                            });
                                        case x.ApplicationStreamPresets.PRESET_DOCUMENTS:
                                            return S.intl.format(j.default["8tcFL5"], {
                                                resolution: (0, p.M)(U),
                                                frameRate: F,
                                            });
                                        case x.ApplicationStreamPresets.PRESET_AUTO:
                                            return S.intl.string(j.default.m4jtlc);
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
            T === x.ApplicationStreamPresets.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Clw, {}),
                        (0, r.jsx)(l.sNh, {
                            id: "resolution",
                            label: S.intl.string(j.default.IG5n0X),
                            children: C.filter((e) => {
                                let { canUse: t } = e;
                                return t(R);
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
                                                if (!(0, u.Z)(T, e, A, a.default.getCurrentUser(), L))
                                                    return (
                                                        c(),
                                                        (0, _.E)({
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
                            label: S.intl.string(S.t.SkkeIt),
                            children: O.map((e) =>
                                (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: "frame-rate",
                                        id: "stream-option-frame-rate-".concat(e),
                                        checked: A === e,
                                        label:
                                            e === x.ApplicationStreamFPS.FPS_60
                                                ? (0, r.jsx)(w, { label: "".concat(e, "fps") })
                                                : "".concat(e, "fps"),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(T, N, e, a.default.getCurrentUser(), L))
                                                    return (
                                                        c(),
                                                        (0, _.E)({
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
                checked: E,
                label: S.intl.string(j.default["b0+Irf"]),
                action: () =>
                    k({
                        type: "set_mute_audio",
                        value: !E,
                    }),
            }),
            R === i.vA.CAMERA && H,
            (0, r.jsxs)(l.sNh, {
                id: "advanced-items",
                label: S.intl.string(j.default.eYyK1v),
                children: [
                    (0, r.jsx)(l.S89, {
                        id: "stream-option-share-preview",
                        checked: I,
                        label: S.intl.string(j.default.H3QjqX),
                        action: () =>
                            k({
                                type: "set_hide_preview",
                                hidePreview: !I,
                            }),
                    }),
                    D &&
                        (0, r.jsx)(l.S89, {
                            id: "stream-option-notify",
                            checked: P,
                            label: S.intl.string(j.default.SiHtXy),
                            action: () =>
                                k({
                                    type: "set_notify_friends",
                                    value: !P,
                                }),
                        }),
                ],
            }),
        ],
    });
}
