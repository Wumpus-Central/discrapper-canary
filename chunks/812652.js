(n.d(t, {
    PG: () => j,
    Vf: () => b,
    YX: () => S,
    ZP: () => y,
    l9: () => O
}),
    n(388685),
    n(415506));
var r = n(255367);
n(73800);
var i = n(268146),
    l = n(481060),
    s = n(100527),
    o = n(72897),
    a = n(594174),
    c = n(451467),
    d = n(672811),
    u = n(891180),
    f = n(544753),
    m = n(615161),
    h = n(156582),
    p = n(396678),
    x = n(37113),
    g = n(676462),
    _ = n(388032),
    v = n(864443);
let j = [
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
    S = [x.ws.FPS_15, x.ws.FPS_30, x.ws.FPS_60];
function C(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: v.premiumOptionContainer,
        children: [
            t,
            (0, r.jsx)(l.SrA, {
                size: 'xs',
                color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        ]
    });
}
function y(e) {
    var t, n, v;
    let { onClose: y, onSelect: O } = e,
        [{ notifyFriends: Z, hidePreview: w, muteStreamAudio: I, preset: N, resolution: E, fps: T, sourceType: P, audioSourceId: R }, A] = (0, m.E_)(),
        k = (0, o.zX)({ location: 'StreamOptionsMenu' }),
        M = (0, f.Z)(),
        [L, D] = null != (n = (0, p.Z)(x.tI.PRESET_VIDEO)) ? n : [x.LY.RESOLUTION_720, x.ws.FPS_30],
        [B, G] = null != (v = (0, p.Z)(x.tI.PRESET_DOCUMENTS)) ? v : [x.LY.RESOLUTION_SOURCE, x.ws.FPS_15];
    return (0, r.jsxs)(l.v2r, {
        'aria-label': _.intl.string(_.t['+1H47u']),
        navId: 'stream-options',
        onClose: y,
        onSelect: O,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: _.intl.string(g.default.P2pjm5),
                children: j
                    .filter((e) => {
                        let { canUse: t } = e;
                        return t(P);
                    })
                    .map((e) => {
                        let { value: t } = e;
                        return (0, r.jsx)(
                            l.k5B,
                            {
                                group: 'preset',
                                id: 'stream-preset-'.concat(t),
                                checked: N === t,
                                label: (0, d.L)(t),
                                subtext: (function (e) {
                                    switch (e) {
                                        case x.tI.PRESET_VIDEO:
                                            return _.intl.format(g.default.G5O1Mz, {
                                                resolution: (0, u.M)(L),
                                                frameRate: D
                                            });
                                        case x.tI.PRESET_DOCUMENTS:
                                            return _.intl.format(g.default['8tcFLy'], {
                                                resolution: (0, u.M)(B),
                                                frameRate: G
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
            N === x.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Clw, {}),
                        (0, r.jsx)(l.sNh, {
                            id: 'resolution',
                            label: _.intl.string(g.default.IG5n0d),
                            children: b
                                .filter((e) => {
                                    let { canUse: t } = e;
                                    return t(P);
                                })
                                .map((e) => {
                                    let { value: t } = e;
                                    return (0, r.jsx)(
                                        l.k5B,
                                        {
                                            group: 'resolution',
                                            id: 'stream-option-resolution-'.concat(t),
                                            checked: E === t,
                                            label: t !== x.LY.RESOLUTION_720 ? (0, r.jsx)(C, { label: (0, u.M)(t) }) : (0, u.M)(t),
                                            action: () =>
                                                (function (e) {
                                                    if (!(0, c.Z)(N, e, T, a.default.getCurrentUser(), M)) return (y(), (0, h.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION }));
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
                            label: _.intl.string(_.t.SkkeIi),
                            children: S.map((e) =>
                                (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: 'frame-rate',
                                        id: 'stream-option-frame-rate-'.concat(e),
                                        checked: T === e,
                                        label: e === x.ws.FPS_60 ? (0, r.jsx)(C, { label: ''.concat(e, 'fps') }) : ''.concat(e, 'fps'),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, c.Z)(N, E, e, a.default.getCurrentUser(), M)) return (y(), (0, h.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION }));
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
                checked: I,
                label: _.intl.string(g.default['b0+Ira']),
                action: () =>
                    A({
                        type: 'set_mute_audio',
                        value: !I
                    })
            }),
            P === i.vA.CAMERA &&
                (0, r.jsx)(l.sNh, {
                    id: 'device-audio-input',
                    label: _.intl.string(g.default.YSdHV1),
                    subtext:
                        null ==
                        (t = k.find((e) => {
                            let { id: t } = e;
                            return R === t;
                        }))
                            ? void 0
                            : t.name,
                    subtextLineClamp: 1,
                    children: k.map((e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            l.k5B,
                            {
                                group: 'device-audio-input-group',
                                id: 'device-audio-input-'.concat(t),
                                checked: R === t,
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
            (0, r.jsxs)(l.sNh, {
                id: 'advanced-items',
                label: _.intl.string(g.default.eYyK1t),
                children: [
                    (0, r.jsx)(l.S89, {
                        id: 'stream-option-share-preview',
                        checked: w,
                        label: _.intl.string(g.default.H3Qjqa),
                        action: () =>
                            A({
                                type: 'set_hide_preview',
                                hidePreview: !w
                            })
                    }),
                    (0, r.jsx)(l.S89, {
                        id: 'stream-option-notify',
                        checked: Z,
                        label: _.intl.string(g.default.SiHtX1),
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
function O(e) {
    var t;
    let { onClose: n, onSelect: s } = e,
        [{ notifyFriends: a, hidePreview: c, muteStreamAudio: d, sourceType: u, audioSourceId: f }, h] = (0, m.E_)(),
        p = (0, o.zX)({ location: 'SimplifiedStreamOptionsMenu' });
    return (0, r.jsxs)(l.v2r, {
        'aria-label': _.intl.string(_.t['+1H47u']),
        navId: 'stream-options',
        onClose: n,
        onSelect: s,
        children: [
            (0, r.jsx)(l.S89, {
                id: 'stream-option-mute',
                checked: d,
                label: _.intl.string(g.default['b0+Ira']),
                action: () =>
                    h({
                        type: 'set_mute_audio',
                        value: !d
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-share-preview',
                checked: c,
                label: _.intl.string(g.default.H3Qjqa),
                action: () =>
                    h({
                        type: 'set_hide_preview',
                        hidePreview: !c
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-notify',
                checked: a,
                label: _.intl.string(g.default.SiHtX1),
                action: () =>
                    h({
                        type: 'set_notify_friends',
                        value: !a
                    })
            }),
            u === i.vA.CAMERA &&
                (0, r.jsx)(l.sNh, {
                    id: 'device-audio-input',
                    label: _.intl.string(g.default.YSdHV1),
                    subtext:
                        null ==
                        (t = p.find((e) => {
                            let { id: t } = e;
                            return f === t;
                        }))
                            ? void 0
                            : t.name,
                    subtextLineClamp: 1,
                    children: p.map((e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            l.k5B,
                            {
                                group: 'device-audio-input-group',
                                id: 'device-audio-input-'.concat(t),
                                checked: f === t,
                                label: n,
                                action: () =>
                                    h({
                                        type: 'set_audio_source',
                                        audioSourceId: t
                                    })
                            },
                            t
                        );
                    })
                })
        ]
    });
}
