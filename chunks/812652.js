n.d(t, { Z: () => Z }), n(47120), n(411104);
var r = n(200651),
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
    x = n(615161),
    p = n(156582),
    g = n(396678),
    _ = n(37113),
    v = n(889150),
    j = n(388032),
    b = n(423719);
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
    N = [_.ws.FPS_15, _.ws.FPS_30, _.ws.FPS_60];
function y(e) {
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
        [{ notifyFriends: w, hidePreview: I, muteStreamAudio: O, preset: T, resolution: E, fps: P, sourceType: R, audioSourceId: W }, A] = (0, x.E_)(),
        k = (0, c.Z)(),
        M = (0, h.Z)(),
        [L, D] = null !== (n = (0, g.Z)(_.tI.PRESET_VIDEO)) && void 0 !== n ? n : [_.LY.RESOLUTION_720, _.ws.FPS_30],
        [G, U] = null !== (l = (0, g.Z)(_.tI.PRESET_DOCUMENTS)) && void 0 !== l ? l : [_.LY.RESOLUTION_SOURCE, _.ws.FPS_15];
    return (0, r.jsxs)(o.v2r, {
        'aria-label': j.NW.string(j.t['+1H47u']),
        navId: 'stream-options',
        onClose: b,
        onSelect: Z,
        children: [
            (0, r.jsx)(o.kSQ, {
                label: j.NW.string(v.Z.P2pjm5),
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
                            checked: T === t,
                            label: (0, f.L)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case _.tI.PRESET_VIDEO:
                                        return j.NW.format(v.Z.G5O1Mz, {
                                            resolution: (0, m.M)(L),
                                            frameRate: D
                                        });
                                    case _.tI.PRESET_DOCUMENTS:
                                        return j.NW.format(v.Z['8tcFLy'], {
                                            resolution: (0, m.M)(G),
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
                        (0, r.jsx)(o.Clw, {}),
                        (0, r.jsx)(o.sNh, {
                            id: 'resolution',
                            label: j.NW.string(v.Z.IG5n0d),
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
                                        checked: E === t,
                                        label: t !== _.LY.RESOLUTION_720 ? (0, r.jsx)(y, { label: (0, m.M)(t) }) : (0, m.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(T, e, P, d.default.getCurrentUser(), M)) return b(), (0, p.E)({ analyticsLocation: a.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
                            label: j.NW.string(j.t.SkkeIi),
                            children: N.map((e) =>
                                (0, r.jsx)(
                                    o.k5B,
                                    {
                                        group: 'frame-rate',
                                        id: 'stream-option-frame-rate-'.concat(e),
                                        checked: P === e,
                                        label: e === _.ws.FPS_60 ? (0, r.jsx)(y, { label: ''.concat(e, 'fps') }) : ''.concat(e, 'fps'),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(T, E, e, d.default.getCurrentUser(), M)) return b(), (0, p.E)({ analyticsLocation: a.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
                checked: O,
                label: j.NW.string(v.Z['b0+Ira']),
                action: () =>
                    A({
                        type: 'set_mute_audio',
                        value: !O
                    })
            }),
            R === s.vA.CAMERA &&
                (0, r.jsx)(o.sNh, {
                    id: 'device-audio-input',
                    label: j.NW.string(v.Z.YSdHV1),
                    subtext: null === (t = k[null != W ? W : '']) || void 0 === t ? void 0 : t.name,
                    subtextLineClamp: 1,
                    children: i().map(k, (e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            o.k5B,
                            {
                                group: 'device-audio-input-group',
                                id: 'device-audio-input-'.concat(t),
                                checked: W === t,
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
                label: j.NW.string(v.Z.eYyK1t),
                children: [
                    (0, r.jsx)(o.S89, {
                        id: 'stream-option-share-preview',
                        checked: I,
                        label: j.NW.string(v.Z.H3Qjqa),
                        action: () =>
                            A({
                                type: 'set_hide_preview',
                                hidePreview: !I
                            })
                    }),
                    (0, r.jsx)(o.S89, {
                        id: 'stream-option-notify',
                        checked: w,
                        label: j.NW.string(v.Z.SiHtX1),
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
