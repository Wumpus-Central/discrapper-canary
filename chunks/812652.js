n.d(t, { Z: () => y }), n(47120), n(411104);
var r = n(200651),
    l = n(442837),
    i = n(481060),
    s = n(100527),
    o = n(592125),
    a = n(430824),
    c = n(944486),
    d = n(594174),
    u = n(451467),
    f = n(672811),
    h = n(891180),
    m = n(615161),
    x = n(156582),
    p = n(396678),
    g = n(37113),
    _ = n(889150),
    v = n(388032),
    j = n(423719);
let b = [g.tI.PRESET_VIDEO, g.tI.PRESET_DOCUMENTS, g.tI.PRESET_CUSTOM],
    C = [g.LY.RESOLUTION_720, g.LY.RESOLUTION_1080, g.LY.RESOLUTION_1440, g.LY.RESOLUTION_SOURCE],
    S = [g.ws.FPS_15, g.ws.FPS_30, g.ws.FPS_60];
function N(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: j.premiumOptionContainer,
        children: [
            t,
            (0, r.jsx)(i.SrA, {
                size: 'xs',
                color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        ]
    });
}
function y(e) {
    var t, n;
    let { onClose: j, onSelect: y } = e,
        [{ notifyFriends: Z, hidePreview: w, muteStreamAudio: O, preset: I, resolution: P, fps: T }, E] = (0, m.E_)(),
        R = (0, l.e7)([c.Z, o.Z], () => o.Z.getChannel(c.Z.getVoiceChannelId())),
        W = null == R ? void 0 : R.getGuildId(),
        k = (0, l.e7)([a.Z], () => {
            var e;
            return null != W ? (null === (e = a.Z.getGuild(W)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [A, M] = null !== (t = (0, p.Z)(g.tI.PRESET_VIDEO)) && void 0 !== t ? t : [g.LY.RESOLUTION_720, g.ws.FPS_30],
        [L, D] = null !== (n = (0, p.Z)(g.tI.PRESET_DOCUMENTS)) && void 0 !== n ? n : [g.LY.RESOLUTION_SOURCE, g.ws.FPS_15];
    return (0, r.jsxs)(i.v2r, {
        'aria-label': v.NW.string(v.t['+1H47u']),
        navId: 'stream-options',
        onClose: j,
        onSelect: y,
        children: [
            (0, r.jsx)(i.kSQ, {
                label: v.NW.string(_.Z.P2pjm5),
                children: b.map((e) =>
                    (0, r.jsx)(
                        i.k5B,
                        {
                            group: 'preset',
                            id: 'stream-preset-'.concat(e),
                            checked: I === e,
                            label: (0, f.L)(e),
                            subtext: (function (e) {
                                switch (e) {
                                    case g.tI.PRESET_VIDEO:
                                        return v.NW.format(_.Z.G5O1Mz, {
                                            resolution: (0, h.M)(A),
                                            frameRate: M
                                        });
                                    case g.tI.PRESET_DOCUMENTS:
                                        return v.NW.format(_.Z['8tcFLy'], {
                                            resolution: (0, h.M)(L),
                                            frameRate: D
                                        });
                                    case g.tI.PRESET_CUSTOM:
                                        return;
                                    default:
                                        throw Error('No case implemented for '.concat(e));
                                }
                            })(e),
                            action: () =>
                                E({
                                    type: 'set_preset',
                                    preset: e
                                })
                        },
                        e
                    )
                )
            }),
            I === g.tI.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(i.Clw, {}),
                        (0, r.jsx)(i.sNh, {
                            id: 'resolution',
                            label: v.NW.string(_.Z.IG5n0d),
                            children: C.map((e) =>
                                (0, r.jsx)(
                                    i.k5B,
                                    {
                                        group: 'resolution',
                                        id: 'stream-option-resolution-'.concat(e),
                                        checked: P === e,
                                        label: e !== g.LY.RESOLUTION_720 ? (0, r.jsx)(N, { label: (0, h.M)(e) }) : (0, h.M)(e),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(I, e, T, d.default.getCurrentUser(), k)) return j(), (0, x.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
                                                E({
                                                    type: 'set_resolution',
                                                    resolution: e
                                                });
                                            })(e)
                                    },
                                    e
                                )
                            )
                        }),
                        (0, r.jsx)(i.sNh, {
                            id: 'frame-rate',
                            label: v.NW.string(v.t.SkkeIi),
                            children: S.map((e) =>
                                (0, r.jsx)(
                                    i.k5B,
                                    {
                                        group: 'frame-rate',
                                        id: 'stream-option-frame-rate-'.concat(e),
                                        checked: T === e,
                                        label: e === g.ws.FPS_60 ? (0, r.jsx)(N, { label: ''.concat(e, 'fps') }) : ''.concat(e, 'fps'),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.Z)(I, P, e, d.default.getCurrentUser(), k)) return j(), (0, x.E)({ analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION });
                                                E({
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
            (0, r.jsx)(i.Clw, {}),
            (0, r.jsx)(i.S89, {
                id: 'stream-option-mute',
                checked: O,
                label: v.NW.string(_.Z['b0+Ira']),
                action: () =>
                    E({
                        type: 'set_mute_audio',
                        value: !O
                    })
            }),
            (0, r.jsxs)(i.sNh, {
                id: 'advanced-items',
                label: v.NW.string(_.Z.eYyK1t),
                children: [
                    (0, r.jsx)(i.S89, {
                        id: 'stream-option-share-preview',
                        checked: w,
                        label: v.NW.string(_.Z.H3Qjqa),
                        action: () =>
                            E({
                                type: 'set_hide_preview',
                                hidePreview: !w
                            })
                    }),
                    (0, r.jsx)(i.S89, {
                        id: 'stream-option-notify',
                        checked: Z,
                        label: v.NW.string(_.Z.SiHtX1),
                        action: () =>
                            E({
                                type: 'set_notify_friends',
                                value: !Z
                            })
                    })
                ]
            })
        ]
    });
}
