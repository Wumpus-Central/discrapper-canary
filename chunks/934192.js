n.d(t, { Z: () => N }), n(47120);
var l = n(200651),
    r = n(192379),
    s = n(268146),
    i = n(442837),
    a = n(481060),
    o = n(100527),
    c = n(592125),
    u = n(430824),
    d = n(944486),
    m = n(594174),
    g = n(451467),
    h = n(537413),
    x = n(615161),
    p = n(156582),
    v = n(37113),
    f = n(388032),
    j = n(23661);
function S(e) {
    let { label: t } = e;
    return (0, l.jsxs)('div', {
        className: j.premiumOptionContainer,
        children: [
            t,
            (0, l.jsx)(a.SrA, {
                size: 'xs',
                color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        ]
    });
}
function N(e) {
    var t;
    let { onClose: n } = e,
        [{ preset: N, resolution: Z, fps: b, sourceType: O }, C] = (0, x.E_)(),
        E = (0, i.e7)([m.default], () => m.default.getCurrentUser()),
        P = (0, i.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getVoiceChannelId())),
        y = null == P ? void 0 : P.getGuildId(),
        T = (0, i.e7)([u.Z], () => {
            var e;
            return null != y ? (null === (e = u.Z.getGuild(y)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [I, _] = null !== (t = (0, h.Z)(N, E, T)) && void 0 !== t ? t : [v.LY.RESOLUTION_720, v.ws.FPS_30],
        R = [
            {
                value: v.tI.PRESET_VIDEO,
                label: f.NW.string(f.t.HcwHc3)
            },
            ...(O === s.vA.CAMERA
                ? []
                : [
                      {
                          value: v.tI.PRESET_DOCUMENTS,
                          label: f.NW.string(f.t['rCa/jI'])
                      }
                  ]),
            {
                value: v.tI.PRESET_CUSTOM,
                label: f.NW.string(f.t['+eOtrK'])
            }
        ],
        w = [
            {
                value: v.LY.RESOLUTION_720,
                label: ''.concat(v.LY.RESOLUTION_720, 'p')
            },
            {
                value: v.LY.RESOLUTION_1080,
                label: ''.concat(v.LY.RESOLUTION_1080, 'p')
            },
            {
                value: v.LY.RESOLUTION_1440,
                label: ''.concat(v.LY.RESOLUTION_1440, 'p')
            },
            ...(O === s.vA.CAMERA
                ? []
                : [
                      {
                          value: v.LY.RESOLUTION_SOURCE,
                          label: f.NW.string(f.t.XjXqzs)
                      }
                  ])
        ],
        W = [
            {
                value: v.ws.FPS_15,
                label: ''.concat(v.ws.FPS_15, 'fps')
            },
            {
                value: v.ws.FPS_30,
                label: ''.concat(v.ws.FPS_30, 'fps')
            },
            {
                value: v.ws.FPS_60,
                label: ''.concat(v.ws.FPS_60, 'fps')
            }
        ];
    return (
        r.useEffect(() => {
            (0, g.Z)(N, Z, b, E, T) ||
                (C({
                    type: 'set_resolution',
                    resolution: I
                }),
                C({
                    type: 'set_fps',
                    fps: _
                }));
        }, [N, C, Z, b, E, T, I, _]),
        (0, l.jsxs)('div', {
            className: j.root,
            children: [
                (0, l.jsx)(a.PhF, {
                    popoutPosition: 'top',
                    className: j.presetSelect,
                    select: (e) =>
                        C({
                            type: 'set_preset',
                            preset: e
                        }),
                    isSelected: (e) => e === N,
                    serialize: String,
                    options: R
                }),
                N !== v.tI.PRESET_CUSTOM &&
                    (0, l.jsxs)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: [I === v.LY.RESOLUTION_SOURCE ? f.NW.string(f.t.XjXqzs) : ''.concat(I, 'p'), ', ', _, 'fps']
                    }),
                N === v.tI.PRESET_CUSTOM &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(a.PhF, {
                                popoutWidth: 'auto',
                                popoutPosition: 'top',
                                className: j.select,
                                renderOptionLabel: (e) => (e.value !== v.LY.RESOLUTION_720 ? (0, l.jsx)(S, { label: e.label }) : e.label),
                                select: (e) => {
                                    (0, g.Z)(N, e, b, E, T)
                                        ? C({
                                              type: 'set_resolution',
                                              resolution: e
                                          })
                                        : (0, p.E)({
                                              analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                              onClose: n
                                          });
                                },
                                isSelected: (e) => e === Z,
                                serialize: String,
                                options: w
                            }),
                            (0, l.jsx)(a.PhF, {
                                popoutPosition: 'top',
                                popoutWidth: 'auto',
                                className: j.select,
                                renderOptionLabel: (e) => (e.value === v.ws.FPS_60 ? (0, l.jsx)(S, { label: e.label }) : e.label),
                                select: (e) => {
                                    (0, g.Z)(N, Z, e, E, T)
                                        ? C({
                                              type: 'set_fps',
                                              fps: e
                                          })
                                        : (0, p.E)({
                                              analyticsLocation: o.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                              onClose: n
                                          });
                                },
                                isSelected: (e) => e === b,
                                serialize: String,
                                options: W
                            })
                        ]
                    })
            ]
        })
    );
}
