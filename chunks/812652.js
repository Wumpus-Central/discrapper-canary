n.d(t, { Z: () => I }), n(388685), n(415506);
var r = n(200651),
    l = n(392711),
    i = n.n(l),
    s = n(268146),
    a = n(481060),
    o = n(100527),
    c = n(687058),
    d = n(594174),
    u = n(451467),
    f = n(672811),
    m = n(891180),
    h = n(544753),
    x = n(615161),
    p = n(156582),
    g = n(396678),
    _ = n(37113),
    j = n(843874),
    v = n(388032),
    b = n(864443);
let S = [
        {
            value: _.tI.PRESET_VIDEO,
            canUse: (e) => !0
        },
        {
            value: _.tI.PRESET_DOCUMENTS,
            canUse: (e) => e !== s.vA.CAMERA
        },
        {
            value: _.tI.PRESET_CUSTOM,
            canUse: (e) => !0
        }
    ],
    C = [
        {
            value: _.LY.RESOLUTION_720,
            canUse: (e) => !0
        },
        {
            value: _.LY.RESOLUTION_1080,
            canUse: (e) => !0
        },
        {
            value: _.LY.RESOLUTION_1440,
            canUse: (e) => !0
        },
        {
            value: _.LY.RESOLUTION_SOURCE,
            canUse: (e) => e !== s.vA.CAMERA
        }
    ],
    y = [_.ws.FPS_15, _.ws.FPS_30, _.ws.FPS_60];
function Z(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: b.premiumOptionContainer,
        children: [
            t,
            (0, r.jsx)(a.SrA, {
                size: 'xs',
                color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        ]
    });
}
function I(e) {
    var t, n, l;
    let { onClose: b, onSelect: I } = e,
        [{ notifyFriends: w, hidePreview: O, muteStreamAudio: N, preset: T, resolution: E, fps: P, sourceType: R, audioSourceId: k }, A] = (0, x.E_)(),
        M = (0, c.Z)(),
        L = (0, h.Z)(),
        [D, G] = null != (n = (0, g.Z)(_.tI.PRESET_VIDEO)) ? n : [_.LY.RESOLUTION_720, _.ws.FPS_30],
        [B, U] = null != (l = (0, g.Z)(_.tI.PRESET_DOCUMENTS)) ? l : [_.LY.RESOLUTION_SOURCE, _.ws.FPS_15];
    return (0, r.jsxs)(a.v2r, {
        'aria-label': v.intl.string(v.t['+1H47u']),
        navId: 'stream-options',
        onClose: b,
        onSelect: I,
        children: [
            (0, r.jsx)(a.kSQ, {
                label: v.intl.string(j.default.P2pjm5),
                children: S.filter((e) => {
                    let { canUse: t } = e;
                    return t(R);
                }).map((e) => {
                    let { value: t } = e;
                    return (0, r.jsx)(
                        a.k5B,
                        {
                            group: 'preset',
                            id: 'stream-preset-'.concat(t),
                            checked: T === t,
                            label: (0, f.L)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case _.tI.PRESET_VIDEO:
                                        return v.intl.format(j.default.G5O1Mz, {
                                            resolution: (0, m.M)(D),
                                            frameRate: G
                                        });
                                    case _.tI.PRESET_DOCUMENTS:
                                        return v.intl.format(j.default['8tcFLy'], {
                                            resolution: (0, m.M)(B),
                                            frameRate: U
                                        });
                                    case _.tI.PRESET_CUSTOM:
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
            T === _.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(a.Clw, {}),
                        (0, r.jsx)(a.sNh, {
                            id: 'resolution',
                            label: v.intl.string(j.default.IG5n0d),
                            children: C.filter((e) => {
                                let { canUse: t } = e;
                                return t(R);
                            }).map((e) => {
                                let { value: t } = e;
                                return (0, r.jsx)(
                                    a.k5B,
                                    {
                                        group: 'resolution',
                                        id: 'stream-option-resolution-'.concat(t),
                                        checked: E === t,
                                        label: t !== _.LY.RESOLUTION_720 ? (0, r.jsx)(Z, { label: (0, m.M)(t) }) : (0, m.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(T, e, P, d.default.getCurrentUser(), L)) return b(), (0, p.E)({ analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
                        (0, r.jsx)(a.sNh, {
                            id: 'frame-rate',
                            label: v.intl.string(v.t.SkkeIi),
                            children: y.map((e) =>
                                (0, r.jsx)(
                                    a.k5B,
                                    {
                                        group: 'frame-rate',
                                        id: 'stream-option-frame-rate-'.concat(e),
                                        checked: P === e,
                                        label: e === _.ws.FPS_60 ? (0, r.jsx)(Z, { label: ''.concat(e, 'fps') }) : ''.concat(e, 'fps'),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(T, E, e, d.default.getCurrentUser(), L)) return b(), (0, p.E)({ analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
            (0, r.jsx)(a.Clw, {}),
            (0, r.jsx)(a.S89, {
                id: 'stream-option-mute',
                checked: N,
                label: v.intl.string(j.default['b0+Ira']),
                action: () =>
                    A({
                        type: 'set_mute_audio',
                        value: !N
                    })
            }),
            R === s.vA.CAMERA &&
                (0, r.jsx)(a.sNh, {
                    id: 'device-audio-input',
                    label: v.intl.string(j.default.YSdHV1),
                    subtext: null == (t = M[null != k ? k : '']) ? void 0 : t.name,
                    subtextLineClamp: 1,
                    children: i().map(M, (e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            a.k5B,
                            {
                                group: 'device-audio-input-group',
                                id: 'device-audio-input-'.concat(t),
                                checked: k === t,
                                label: n,
                                action: () =>
                                    A({
                                        type: 'set_audio_source',
                                        audioSourceId: t
                                    })
                            },
                            t
                        );
                    })
                }),
            (0, r.jsxs)(a.sNh, {
                id: 'advanced-items',
                label: v.intl.string(j.default.eYyK1t),
                children: [
                    (0, r.jsx)(a.S89, {
                        id: 'stream-option-share-preview',
                        checked: O,
                        label: v.intl.string(j.default.H3Qjqa),
                        action: () =>
                            A({
                                type: 'set_hide_preview',
                                hidePreview: !O
                            })
                    }),
                    (0, r.jsx)(a.S89, {
                        id: 'stream-option-notify',
                        checked: w,
                        label: v.intl.string(j.default.SiHtX1),
                        action: () =>
                            A({
                                type: 'set_notify_friends',
                                value: !w
                            })
                    })
                ]
            })
        ]
    });
}
