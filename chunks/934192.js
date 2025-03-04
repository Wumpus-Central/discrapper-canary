n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(268146),
    s = n(442837),
    o = n(481060),
    a = n(100527),
    c = n(592125),
    d = n(430824),
    u = n(944486),
    f = n(594174),
    h = n(451467),
    m = n(537413),
    p = n(615161),
    x = n(156582),
    g = n(37113),
    _ = n(388032),
    v = n(929929);
function j(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: v.premiumOptionContainer,
        children: [
            t,
            (0, r.jsx)(o.SrA, {
                size: 'xs',
                color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
            })
        ]
    });
}
function b(e) {
    var t;
    let { onClose: n } = e,
        [{ preset: b, resolution: C, fps: S, sourceType: N }, y] = (0, p.E_)(),
        Z = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        w = (0, s.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getVoiceChannelId())),
        O = null == w ? void 0 : w.getGuildId(),
        I = (0, s.e7)([d.Z], () => {
            var e;
            return null != O ? (null === (e = d.Z.getGuild(O)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [P, T] = null !== (t = (0, m.Z)(b, Z, I)) && void 0 !== t ? t : [g.LY.RESOLUTION_720, g.ws.FPS_30],
        E = [
            {
                value: g.tI.PRESET_VIDEO,
                label: _.NW.string(_.t.HcwHc3)
            },
            ...(N === i.vA.CAMERA
                ? []
                : [
                      {
                          value: g.tI.PRESET_DOCUMENTS,
                          label: _.NW.string(_.t['rCa/jI'])
                      }
                  ]),
            {
                value: g.tI.PRESET_CUSTOM,
                label: _.NW.string(_.t['+eOtrK'])
            }
        ],
        R = [
            {
                value: g.LY.RESOLUTION_720,
                label: ''.concat(g.LY.RESOLUTION_720, 'p')
            },
            {
                value: g.LY.RESOLUTION_1080,
                label: ''.concat(g.LY.RESOLUTION_1080, 'p')
            },
            {
                value: g.LY.RESOLUTION_1440,
                label: ''.concat(g.LY.RESOLUTION_1440, 'p')
            },
            ...(N === i.vA.CAMERA
                ? []
                : [
                      {
                          value: g.LY.RESOLUTION_SOURCE,
                          label: _.NW.string(_.t.XjXqzs)
                      }
                  ])
        ],
        W = [
            {
                value: g.ws.FPS_15,
                label: ''.concat(g.ws.FPS_15, 'fps')
            },
            {
                value: g.ws.FPS_30,
                label: ''.concat(g.ws.FPS_30, 'fps')
            },
            {
                value: g.ws.FPS_60,
                label: ''.concat(g.ws.FPS_60, 'fps')
            }
        ];
    return (
        l.useEffect(() => {
            (0, h.Z)(b, C, S, Z, I) ||
                (y({
                    type: 'set_resolution',
                    resolution: P
                }),
                y({
                    type: 'set_fps',
                    fps: T
                }));
        }, [b, y, C, S, Z, I, P, T]),
        (0, r.jsxs)('div', {
            className: v.root,
            children: [
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'text-muted',
                    children: _.NW.string(_.t['7eHfrq'])
                }),
                (0, r.jsx)(o.PhF, {
                    popoutPosition: 'top',
                    className: v.presetSelect,
                    select: (e) =>
                        y({
                            type: 'set_preset',
                            preset: e
                        }),
                    isSelected: (e) => e === b,
                    serialize: String,
                    options: E
                }),
                b === g.tI.PRESET_CUSTOM &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(o.Fbu, {
                                size: 'xs',
                                color: o.TVs.colors.BG_MOD_STRONG
                            }),
                            (0, r.jsx)(o.PhF, {
                                popoutWidth: 'auto',
                                popoutPosition: 'top',
                                className: v.select,
                                renderOptionLabel: (e) => (e.value !== g.LY.RESOLUTION_720 ? (0, r.jsx)(j, { label: e.label }) : e.label),
                                select: (e) => {
                                    (0, h.Z)(b, e, S, Z, I)
                                        ? y({
                                              type: 'set_resolution',
                                              resolution: e
                                          })
                                        : (0, x.E)({
                                              analyticsLocation: a.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                              onClose: n
                                          });
                                },
                                isSelected: (e) => e === C,
                                serialize: String,
                                options: R
                            }),
                            (0, r.jsx)(o.PhF, {
                                popoutPosition: 'top',
                                popoutWidth: 'auto',
                                className: v.select,
                                renderOptionLabel: (e) => (e.value === g.ws.FPS_60 ? (0, r.jsx)(j, { label: e.label }) : e.label),
                                select: (e) => {
                                    (0, h.Z)(b, C, e, Z, I)
                                        ? y({
                                              type: 'set_fps',
                                              fps: e
                                          })
                                        : (0, x.E)({
                                              analyticsLocation: a.Z.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                              onClose: n
                                          });
                                },
                                isSelected: (e) => e === S,
                                serialize: String,
                                options: W
                            })
                        ]
                    })
            ]
        })
    );
}
