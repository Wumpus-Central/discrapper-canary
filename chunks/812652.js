n.d(t, { ZP: () => w }), n(388685), n(415506);
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
    g = n(396678),
    x = n(37113),
    _ = n(65154),
    v = n(137349),
    j = n(388032),
    b = n(246238);
let S = [
        {
            value: x.tI.PRESET_VIDEO,
            canUse: (e) => !0,
        },
        {
            value: x.tI.PRESET_DOCUMENTS,
            canUse: (e) => e !== i.vA.CAMERA,
        },
        {
            value: x.tI.PRESET_CUSTOM,
            canUse: (e) => !0,
        },
    ],
    C = [
        {
            value: x.LY.RESOLUTION_720,
            canUse: (e) => !0,
        },
        {
            value: x.LY.RESOLUTION_1080,
            canUse: (e) => !0,
        },
        {
            value: x.LY.RESOLUTION_1440,
            canUse: (e) => !0,
        },
        {
            value: x.LY.RESOLUTION_SOURCE,
            canUse: (e) => e !== i.vA.CAMERA,
        },
    ],
    y = [x.ws.FPS_15, x.ws.FPS_30, x.ws.FPS_60];
function O(e) {
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
function w(e) {
    var t, n;
    let { onClose: b, onSelect: w } = e,
        [
            {
                audioSourceId: Z,
                notifyFriends: I,
                hidePreview: N,
                muteStreamAudio: P,
                preset: T,
                resolution: E,
                fps: R,
                sourceType: A,
                selectedChannel: k,
            },
            M,
        ] = (0, h.E_)(),
        D = !(0, c.$s)(k, "StreamOptionsMenu"),
        L = (0, m.Z)(),
        [B, G] = null != (t = (0, g.Z)(x.tI.PRESET_VIDEO)) ? t : [x.LY.RESOLUTION_720, x.ws.FPS_30],
        [U, W] = null != (n = (0, g.Z)(x.tI.PRESET_DOCUMENTS)) ? n : [x.LY.RESOLUTION_SOURCE, x.ws.FPS_15],
        z = (0, o.M)({
            deviceType: _.h7.AUDIO_INPUT,
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
        onClose: b,
        onSelect: w,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: j.intl.string(v.default.P2pjm5),
                children: S.filter((e) => {
                    let { canUse: t } = e;
                    return t(A);
                }).map((e) => {
                    let { value: t } = e;
                    return (0, r.jsx)(
                        l.k5B,
                        {
                            group: "preset",
                            id: "stream-preset-".concat(t),
                            checked: T === t,
                            label: (0, u.L)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case x.tI.PRESET_VIDEO:
                                        return j.intl.format(v.default.G5O1Mz, {
                                            resolution: (0, f.M)(B),
                                            frameRate: G,
                                        });
                                    case x.tI.PRESET_DOCUMENTS:
                                        return j.intl.format(v.default["8tcFLy"], {
                                            resolution: (0, f.M)(U),
                                            frameRate: W,
                                        });
                                    case x.tI.PRESET_CUSTOM:
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
            T === x.tI.PRESET_CUSTOM &&
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
                                        checked: E === t,
                                        label:
                                            t !== x.LY.RESOLUTION_720
                                                ? (0, r.jsx)(O, { label: (0, f.M)(t) })
                                                : (0, f.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, d.Z)(T, e, R, a.default.getCurrentUser(), L))
                                                    return (
                                                        b(),
                                                        (0, p.E)({
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
                            label: j.intl.string(j.t.SkkeIi),
                            children: y.map((e) =>
                                (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: "frame-rate",
                                        id: "stream-option-frame-rate-".concat(e),
                                        checked: R === e,
                                        label:
                                            e === x.ws.FPS_60
                                                ? (0, r.jsx)(O, { label: "".concat(e, "fps") })
                                                : "".concat(e, "fps"),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, d.Z)(T, E, e, a.default.getCurrentUser(), L))
                                                    return (
                                                        b(),
                                                        (0, p.E)({
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
                checked: P,
                label: j.intl.string(v.default["b0+Ira"]),
                action: () =>
                    M({
                        type: "set_mute_audio",
                        value: !P,
                    }),
            }),
            A === i.vA.CAMERA && z,
            (0, r.jsxs)(l.sNh, {
                id: "advanced-items",
                label: j.intl.string(v.default.eYyK1t),
                children: [
                    (0, r.jsx)(l.S89, {
                        id: "stream-option-share-preview",
                        checked: N,
                        label: j.intl.string(v.default.H3Qjqa),
                        action: () =>
                            M({
                                type: "set_hide_preview",
                                hidePreview: !N,
                            }),
                    }),
                    D &&
                        (0, r.jsx)(l.S89, {
                            id: "stream-option-notify",
                            checked: I,
                            label: j.intl.string(v.default.SiHtX1),
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
