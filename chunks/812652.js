n.d(t, {
    PG: () => b,
    Vf: () => S,
    YX: () => C,
    ZP: () => O,
    l9: () => Z
}),
    n(388685),
    n(415506);
var r = n(255367),
    i = n(268146),
    l = n(481060),
    s = n(100527),
    o = n(679613),
    a = n(72897),
    c = n(594174),
    d = n(451467),
    u = n(672811),
    f = n(891180),
    m = n(544753),
    h = n(615161),
    p = n(156582),
    x = n(396678),
    g = n(37113),
    _ = n(676462),
    v = n(388032),
    j = n(864443);
let b = [
        {
            value: g.tI.PRESET_VIDEO,
            canUse: (e) => !0
        },
        {
            value: g.tI.PRESET_DOCUMENTS,
            canUse: (e) => e !== i.vA.CAMERA
        },
        {
            value: g.tI.PRESET_CUSTOM,
            canUse: (e) => !0
        }
    ],
    S = [
        {
            value: g.LY.RESOLUTION_720,
            canUse: (e) => !0
        },
        {
            value: g.LY.RESOLUTION_1080,
            canUse: (e) => !0
        },
        {
            value: g.LY.RESOLUTION_1440,
            canUse: (e) => !0
        },
        {
            value: g.LY.RESOLUTION_SOURCE,
            canUse: (e) => e !== i.vA.CAMERA
        }
    ],
    C = [g.ws.FPS_15, g.ws.FPS_30, g.ws.FPS_60];
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
    var t, n, j;
    let { onClose: O, onSelect: Z } = e,
        [{ notifyFriends: I, hidePreview: w, muteStreamAudio: N, preset: T, resolution: E, fps: P, sourceType: R, audioSourceId: k }, A] = (0, h.E_)(),
        { sortDevicesByFrecency: M } = (0, o._)({ location: 'StreamOptionsMenu' }),
        L = (0, a.zX)({ sortDevicesByFrecency: M }),
        D = (0, m.Z)(),
        [B, G] = null != (n = (0, x.Z)(g.tI.PRESET_VIDEO)) ? n : [g.LY.RESOLUTION_720, g.ws.FPS_30],
        [U, W] = null != (j = (0, x.Z)(g.tI.PRESET_DOCUMENTS)) ? j : [g.LY.RESOLUTION_SOURCE, g.ws.FPS_15];
    return (0, r.jsxs)(l.v2r, {
        'aria-label': v.intl.string(v.t['+1H47u']),
        navId: 'stream-options',
        onClose: O,
        onSelect: Z,
        children: [
            (0, r.jsx)(l.kSQ, {
                label: v.intl.string(_.default.P2pjm5),
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
                                group: 'preset',
                                id: 'stream-preset-'.concat(t),
                                checked: T === t,
                                label: (0, u.L)(t),
                                subtext: (function (e) {
                                    switch (e) {
                                        case g.tI.PRESET_VIDEO:
                                            return v.intl.format(_.default.G5O1Mz, {
                                                resolution: (0, f.M)(B),
                                                frameRate: G
                                            });
                                        case g.tI.PRESET_DOCUMENTS:
                                            return v.intl.format(_.default['8tcFLy'], {
                                                resolution: (0, f.M)(U),
                                                frameRate: W
                                            });
                                        case g.tI.PRESET_CUSTOM:
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
            T === g.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Clw, {}),
                        (0, r.jsx)(l.sNh, {
                            id: 'resolution',
                            label: v.intl.string(_.default.IG5n0d),
                            children: S.filter((e) => {
                                let { canUse: t } = e;
                                return t(R);
                            }).map((e) => {
                                let { value: t } = e;
                                return (0, r.jsx)(
                                    l.k5B,
                                    {
                                        group: 'resolution',
                                        id: 'stream-option-resolution-'.concat(t),
                                        checked: E === t,
                                        label: t !== g.LY.RESOLUTION_720 ? (0, r.jsx)(y, { label: (0, f.M)(t) }) : (0, f.M)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, d.Z)(T, e, P, c.default.getCurrentUser(), D)) return O(), (0, p.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
                                        label: e === g.ws.FPS_60 ? (0, r.jsx)(y, { label: ''.concat(e, 'fps') }) : ''.concat(e, 'fps'),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, d.Z)(T, E, e, c.default.getCurrentUser(), D)) return O(), (0, p.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
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
            R === i.vA.CAMERA &&
                (0, r.jsx)(l.sNh, {
                    id: 'device-audio-input',
                    label: v.intl.string(_.default.YSdHV1),
                    subtext:
                        null ==
                        (t = L.find((e) => {
                            let { id: t } = e;
                            return k === t;
                        }))
                            ? void 0
                            : t.name,
                    subtextLineClamp: 1,
                    children: L.map((e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            l.k5B,
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
                        checked: I,
                        label: v.intl.string(_.default.SiHtX1),
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
function Z(e) {
    var t;
    let { onClose: n, onSelect: s } = e,
        [{ notifyFriends: c, hidePreview: d, muteStreamAudio: u, sourceType: f, audioSourceId: m }, p] = (0, h.E_)(),
        { sortDevicesByFrecency: x } = (0, o._)({ location: 'SimplifiedStreamOptionsMenu' }),
        g = (0, a.zX)({ sortDevicesByFrecency: x });
    return (0, r.jsxs)(l.v2r, {
        'aria-label': v.intl.string(v.t['+1H47u']),
        navId: 'stream-options',
        onClose: n,
        onSelect: s,
        children: [
            (0, r.jsx)(l.S89, {
                id: 'stream-option-mute',
                checked: u,
                label: v.intl.string(_.default['b0+Ira']),
                action: () =>
                    p({
                        type: 'set_mute_audio',
                        value: !u
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-share-preview',
                checked: d,
                label: v.intl.string(_.default.H3Qjqa),
                action: () =>
                    p({
                        type: 'set_hide_preview',
                        hidePreview: !d
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-notify',
                checked: c,
                label: v.intl.string(_.default.SiHtX1),
                action: () =>
                    p({
                        type: 'set_notify_friends',
                        value: !c
                    })
            }),
            f === i.vA.CAMERA &&
                (0, r.jsx)(l.sNh, {
                    id: 'device-audio-input',
                    label: v.intl.string(_.default.YSdHV1),
                    subtext:
                        null ==
                        (t = g.find((e) => {
                            let { id: t } = e;
                            return m === t;
                        }))
                            ? void 0
                            : t.name,
                    subtextLineClamp: 1,
                    children: g.map((e) => {
                        let { id: t, name: n } = e;
                        return (0, r.jsx)(
                            l.k5B,
                            {
                                group: 'device-audio-input-group',
                                id: 'device-audio-input-'.concat(t),
                                checked: m === t,
                                label: n,
                                action: () =>
                                    p({
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
