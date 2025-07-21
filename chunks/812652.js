(n.d(t, {
    PG: () => S,
    Vf: () => b,
    YX: () => C,
    ZP: () => O,
    l9: () => I
}),
    n(388685),
    n(415506));
var r = n(255367);
n(73800);
var i = n(268146),
    l = n(481060),
    s = n(100527),
    o = n(650958),
    a = n(594174),
    c = n(451467),
    d = n(672811),
    u = n(891180),
    f = n(544753),
    m = n(615161),
    h = n(156582),
    p = n(396678),
    x = n(37113),
    g = n(65154),
    _ = n(676462),
    v = n(388032),
    j = n(864443);
let S = [
        {
            value: x.tI.PRESET_VIDEO,
            canUse: (e) => !0
        },
        {
            value: x.tI.PRESET_DOCUMENTS,
            canUse: (e) => e !== i.vA.CAMERA
        },
        {
            value: x.tI.PRESET_CUSTOM,
            canUse: (e) => !0
        }
    ],
    b = [
        {
            value: x.LY.RESOLUTION_720,
            canUse: (e) => !0
        },
        {
            value: x.LY.RESOLUTION_1080,
            canUse: (e) => !0
        },
        {
            value: x.LY.RESOLUTION_1440,
            canUse: (e) => !0
        },
        {
            value: x.LY.RESOLUTION_SOURCE,
            canUse: (e) => e !== i.vA.CAMERA
        }
    ],
    C = [x.ws.FPS_15, x.ws.FPS_30, x.ws.FPS_60];
function y(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: j.premiumOptionContainer,
        children: [
            t,
            (0, r.jsx)(l.SrA, {
                size: 'xs',
                color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        ]
    });
}
function O(e) {
    var t, n;
    let { onClose: j, onSelect: O } = e,
        [{ audioSourceId: I, notifyFriends: Z, hidePreview: w, muteStreamAudio: N, preset: T, resolution: E, fps: P, sourceType: R }, A] = (0, m.E_)(),
        M = (0, f.Z)(),
        [k, L] = null != (t = (0, p.Z)(x.tI.PRESET_VIDEO)) ? t : [x.LY.RESOLUTION_720, x.ws.FPS_30],
        [D, B] = null != (n = (0, p.Z)(x.tI.PRESET_DOCUMENTS)) ? n : [x.LY.RESOLUTION_SOURCE, x.ws.FPS_15],
        U = (0, o.M)({
            deviceType: g.h7.AUDIO_INPUT,
            selectedDeviceId: I,
            analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (
                A({
                    type: 'set_audio_source',
                    audioSourceId: e
                }),
                !1
            ),
            menuItemOverrideProps: {
                id: 'device-audio-input',
                label: v.intl.string(_.default.YSdHV1),
                subtextLineClamp: 1
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: 'device-audio-input-group',
                id: 'device-audio-input-'.concat(e)
            })
        });
    return (0, r.jsxs)(l.v2r, {
        'aria-label': v.intl.string(v.t['+1H47u']),
        navId: 'stream-options',
        onClose: j,
        onSelect: O,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: v.intl.string(_.default.P2pjm5),
                children: S.filter((e) => {
                    let { canUse: t } = e;
                    return t(R);
                }).map((e) => {
                    let { value: t } = e;
                    return (0, r.jsx)(
                        l.k5B,
                        {
                            group: 'preset',
                            id: 'stream-preset-'.concat(t),
                            checked: T === t,
                            label: (0, d.L)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case x.tI.PRESET_VIDEO:
                                        return v.intl.format(_.default.G5O1Mz, {
                                            resolution: (0, u.M)(k),
                                            frameRate: L
                                        });
                                    case x.tI.PRESET_DOCUMENTS:
                                        return v.intl.format(_.default['8tcFLy'], {
                                            resolution: (0, u.M)(D),
                                            frameRate: B
                                        });
                                    case x.tI.PRESET_CUSTOM:
                                        return;
                                    default:
                                        throw Error('No case implemented for '.concat(e));
                                }
                            })(t),
                            action: () =>
                                A({
                                    type: 'set_preset',
                                    preset: t
                                })
                        },
                        t
                    );
                })
            }),
            T === x.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Clw, {}),
                        (0, r.jsx)(l.sNh, {
                            id: 'resolution',
                            label: v.intl.string(_.default.IG5n0d),
                            children: b
                                .filter((e) => {
                                    let { canUse: t } = e;
                                    return t(R);
                                })
                                .map((e) => {
                                    let { value: t } = e;
                                    return (0, r.jsx)(
                                        l.k5B,
                                        {
                                            group: 'resolution',
                                            id: 'stream-option-resolution-'.concat(t),
                                            checked: E === t,
                                            label: t !== x.LY.RESOLUTION_720 ? (0, r.jsx)(y, { label: (0, u.M)(t) }) : (0, u.M)(t),
                                            action: () =>
                                                (function (e) {
                                                    if (!(0, c.Z)(T, e, P, a.default.getCurrentUser(), M)) return (j(), (0, h.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION }));
                                                    A({
                                                        type: 'set_resolution',
                                                        resolution: e
                                                    });
                                                })(t)
                                        },
                                        t
                                    );
                                })
                        }),
                        (0, r.jsx)(l.sNh, {
                            id: 'frame-rate',
                            label: v.intl.string(v.t.SkkeIi),
                            children: C.map((e) =>
                                (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: 'frame-rate',
                                        id: 'stream-option-frame-rate-'.concat(e),
                                        checked: P === e,
                                        label: e === x.ws.FPS_60 ? (0, r.jsx)(y, { label: ''.concat(e, 'fps') }) : ''.concat(e, 'fps'),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, c.Z)(T, E, e, a.default.getCurrentUser(), M)) return (j(), (0, h.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION }));
                                                A({
                                                    type: 'set_fps',
                                                    fps: e
                                                });
                                            })(e)
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
            (0, r.jsx)(l.Clw, {}),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-mute',
                checked: N,
                label: v.intl.string(_.default['b0+Ira']),
                action: () =>
                    A({
                        type: 'set_mute_audio',
                        value: !N
                    })
            }),
            R === i.vA.CAMERA && U,
            (0, r.jsxs)(l.sNh, {
                id: 'advanced-items',
                label: v.intl.string(_.default.eYyK1t),
                children: [
                    (0, r.jsx)(l.S89, {
                        id: 'stream-option-share-preview',
                        checked: w,
                        label: v.intl.string(_.default.H3Qjqa),
                        action: () =>
                            A({
                                type: 'set_hide_preview',
                                hidePreview: !w
                            })
                    }),
                    (0, r.jsx)(l.S89, {
                        id: 'stream-option-notify',
                        checked: Z,
                        label: v.intl.string(_.default.SiHtX1),
                        action: () =>
                            A({
                                type: 'set_notify_friends',
                                value: !Z
                            })
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { onClose: t, onSelect: n } = e,
        [{ audioSourceId: a, notifyFriends: c, hidePreview: d, muteStreamAudio: u, sourceType: f }, h] = (0, m.E_)(),
        p = (0, o.M)({
            deviceType: g.h7.AUDIO_INPUT,
            selectedDeviceId: a,
            analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (
                h({
                    type: 'set_audio_source',
                    audioSourceId: e
                }),
                !1
            ),
            menuItemOverrideProps: {
                id: 'device-audio-input',
                label: v.intl.string(_.default.YSdHV1),
                subtextLineClamp: 1
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: 'device-audio-input-group',
                id: 'device-audio-input-'.concat(e)
            })
        });
    return (0, r.jsxs)(l.v2r, {
        'aria-label': v.intl.string(v.t['+1H47u']),
        navId: 'stream-options',
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(l.S89, {
                id: 'stream-option-mute',
                checked: u,
                label: v.intl.string(_.default['b0+Ira']),
                action: () =>
                    h({
                        type: 'set_mute_audio',
                        value: !u
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-share-preview',
                checked: d,
                label: v.intl.string(_.default.H3Qjqa),
                action: () =>
                    h({
                        type: 'set_hide_preview',
                        hidePreview: !d
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-notify',
                checked: c,
                label: v.intl.string(_.default.SiHtX1),
                action: () =>
                    h({
                        type: 'set_notify_friends',
                        value: !c
                    })
            }),
            f === i.vA.CAMERA && p
        ]
    });
}
