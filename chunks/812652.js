n.d(t, {
    PG: () => S,
    Vf: () => C,
    YX: () => y,
    ZP: () => Z,
    l9: () => I
}),
    n(388685),
    n(415506);
var r = n(255367),
    l = n(392711),
    i = n.n(l),
    s = n(268146),
    o = n(481060),
    a = n(100527),
    c = n(687058),
    d = n(594174),
    u = n(451467),
    f = n(672811),
    m = n(891180),
    h = n(544753),
    p = n(615161),
    x = n(156582),
    g = n(396678),
    _ = n(37113),
    v = n(825107),
    j = n(388032),
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
function O(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: b.premiumOptionContainer,
        children: [
            t,
            (0, r.jsx)(o.SrA, {
                size: 'xs',
                color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        ]
    });
}
function Z(e) {
    var t, n, l;
    let { onClose: b, onSelect: Z } = e,
        [{ notifyFriends: I, hidePreview: w, muteStreamAudio: N, preset: E, resolution: T, fps: P, sourceType: R, audioSourceId: k }, A] = (0, p.E_)(),
        M = (0, c.Z)(),
        L = (0, h.Z)(),
        [D, B] = null != (n = (0, g.Z)(_.tI.PRESET_VIDEO)) ? n : [_.LY.RESOLUTION_720, _.ws.FPS_30],
        [U, G] = null != (l = (0, g.Z)(_.tI.PRESET_DOCUMENTS)) ? l : [_.LY.RESOLUTION_SOURCE, _.ws.FPS_15];
    return (0, r.jsxs)(o.v2r, {
        'aria-label': j.intl.string(j.t['+1H47u']),
        navId: 'stream-options',
        onClose: b,
        onSelect: Z,
        children: [
            (0, r.jsx)(o.kSQ, {
                label: j.intl.string(v.default.P2pjm5),
                children: S.filter((e) => {
                    let { canUse: t } = e;
                    return t(R);
                }).map((e) => {
                    let { value: t } = e;
                    return (0, r.jsx)(
                        o.k5B,
                        {
                            group: 'preset',
                            id: 'stream-preset-'.concat(t),
                            checked: E === t,
                            label: (0, f.L)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case _.tI.PRESET_VIDEO:
                                        return j.intl.format(v.default.G5O1Mz, {
                                            resolution: (0, m.M)(D),
                                            frameRate: B
                                        });
                                    case _.tI.PRESET_DOCUMENTS:
                                        return j.intl.format(v.default['8tcFLy'], {
                                            resolution: (0, m.M)(U),
                                            frameRate: G
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
            E === _.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.Clw, {}),
                        (0, r.jsx)(o.sNh, {
                            id: 'resolution',
                            label: j.intl.string(v.default.IG5n0d),
                            children: C.filter((e) => {
                                let { canUse: t } = e;
                                return t(R);
                            }).map((e) => {
                                let { value: t } = e;
                                return (0, r.jsx)(
                                    o.k5B,
                                    {
                                        group: 'resolution',
                                        id: 'stream-option-resolution-'.concat(t),
                                        checked: T === t,
                                        label: t !== _.LY.RESOLUTION_720 ? (0, r.jsx)(O, { label: (0, m.M)(t) }) : (0, m.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(E, e, P, d.default.getCurrentUser(), L)) return b(), (0, x.E)({ analyticsLocation: a.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
                        (0, r.jsx)(o.sNh, {
                            id: 'frame-rate',
                            label: j.intl.string(j.t.SkkeIi),
                            children: y.map((e) =>
                                (0, r.jsx)(
                                    o.k5B,
                                    {
                                        group: 'frame-rate',
                                        id: 'stream-option-frame-rate-'.concat(e),
                                        checked: P === e,
                                        label: e === _.ws.FPS_60 ? (0, r.jsx)(O, { label: ''.concat(e, 'fps') }) : ''.concat(e, 'fps'),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(E, T, e, d.default.getCurrentUser(), L)) return b(), (0, x.E)({ analyticsLocation: a.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
            (0, r.jsx)(o.Clw, {}),
            (0, r.jsx)(o.S89, {
                id: 'stream-option-mute',
                checked: N,
                label: j.intl.string(v.default['b0+Ira']),
                action: () =>
                    A({
                        type: 'set_mute_audio',
                        value: !N
                    })
            }),
            R === s.vA.CAMERA &&
                (0, r.jsx)(o.sNh, {
                    id: 'device-audio-input',
                    label: j.intl.string(v.default.YSdHV1),
                    subtext: null == (t = M[null != k ? k : '']) ? void 0 : t.name,
                    subtextLineClamp: 1,
                    children: i().map(M, (e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            o.k5B,
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
            (0, r.jsxs)(o.sNh, {
                id: 'advanced-items',
                label: j.intl.string(v.default.eYyK1t),
                children: [
                    (0, r.jsx)(o.S89, {
                        id: 'stream-option-share-preview',
                        checked: w,
                        label: j.intl.string(v.default.H3Qjqa),
                        action: () =>
                            A({
                                type: 'set_hide_preview',
                                hidePreview: !w
                            })
                    }),
                    (0, r.jsx)(o.S89, {
                        id: 'stream-option-notify',
                        checked: I,
                        label: j.intl.string(v.default.SiHtX1),
                        action: () =>
                            A({
                                type: 'set_notify_friends',
                                value: !I
                            })
                    })
                ]
            })
        ]
    });
}
function I(e) {
    var t;
    let { onClose: n, onSelect: l } = e,
        [{ notifyFriends: a, hidePreview: d, muteStreamAudio: u, sourceType: f, audioSourceId: m }, h] = (0, p.E_)(),
        x = (0, c.Z)();
    return (0, r.jsxs)(o.v2r, {
        'aria-label': j.intl.string(j.t['+1H47u']),
        navId: 'stream-options',
        onClose: n,
        onSelect: l,
        children: [
            (0, r.jsx)(o.S89, {
                id: 'stream-option-mute',
                checked: u,
                label: j.intl.string(v.default['b0+Ira']),
                action: () =>
                    h({
                        type: 'set_mute_audio',
                        value: !u
                    })
            }),
            (0, r.jsx)(o.S89, {
                id: 'stream-option-share-preview',
                checked: d,
                label: j.intl.string(v.default.H3Qjqa),
                action: () =>
                    h({
                        type: 'set_hide_preview',
                        hidePreview: !d
                    })
            }),
            (0, r.jsx)(o.S89, {
                id: 'stream-option-notify',
                checked: a,
                label: j.intl.string(v.default.SiHtX1),
                action: () =>
                    h({
                        type: 'set_notify_friends',
                        value: !a
                    })
            }),
            f === s.vA.CAMERA &&
                (0, r.jsx)(o.sNh, {
                    id: 'device-audio-input',
                    label: j.intl.string(v.default.YSdHV1),
                    subtext: null == (t = x[null != m ? m : '']) ? void 0 : t.name,
                    subtextLineClamp: 1,
                    children: i().map(x, (e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            o.k5B,
                            {
                                group: 'device-audio-input-group',
                                id: 'device-audio-input-'.concat(t),
                                checked: m === t,
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
