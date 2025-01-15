t.d(n, {
    Z: function () {
        return z;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(913527),
    a = t.n(r),
    s = t(442837),
    o = t(481060),
    c = t(933557),
    d = t(592125),
    u = t(430824),
    x = t(496675),
    m = t(699516),
    h = t(594174),
    g = t(924301),
    v = t(518756),
    j = t(545165),
    f = t(77810),
    N = t(274311),
    I = t(230900),
    p = t(366815),
    C = t(765305),
    E = t(981631),
    T = t(388032),
    S = t(601335);
let Z = (e) => e === C.WX.EXTERNAL,
    b = (e, n) => {
        let t = d.Z.getChannel(e);
        if (null == t) return null;
        let i = t.type === E.d4z.GUILD_STAGE_VOICE,
            r = (0, N.Q)(t, n),
            a = r ? o.VoiceNormalIcon : o.VoiceLockIcon,
            s = r ? o.StageIcon : o.StageLockIcon;
        return (0, l.jsx)(i ? s : a, {
            color: 'currentColor',
            size: 'md',
            className: S.channelOptionIcon
        });
    },
    y = (e) => {
        let { guildId: n, channelType: t, channel: i, onSelectChannel: r, disabled: a, entityType: s } = e,
            d = t === E.d4z.GUILD_STAGE_VOICE,
            u = (0, N.Q)(i, s),
            x = (0, j.sR)(n, t);
        return (0, l.jsxs)(o.FormItem, {
            title: d ? T.intl.string(T.t.S7GjDw) : T.intl.string(T.t['7RYWCA']),
            className: S.options,
            disabled: a,
            required: !0,
            children: [
                (0, l.jsx)(o.SearchableSelect, {
                    value: null == i ? void 0 : i.id,
                    options: x.map((e) => ({
                        value: e.id,
                        label: (0, c.F6)(e, h.default, m.Z, !0)
                    })),
                    onChange: (e) => {
                        let n = x.find((n) => n.id === e);
                        r(null != n ? n : void 0);
                    },
                    renderOptionPrefix: (e) => b(null == e ? void 0 : e.value, s),
                    isDisabled: a
                }),
                !u &&
                    (0, l.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: S.channelPrivate,
                        variant: 'text-sm/normal',
                        children: T.intl.string(T.t.F3bDaW)
                    })
            ]
        });
    };
function _(e, n, t, l) {
    return n
        ? {
              disabled: !0,
              tooltipText: T.intl.string(T.t.yutP5e)
          }
        : t
          ? 0 === l && e !== C.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: T.intl.string(T.t['DkY+cH'])
                }
              : {
                    disabled: !1,
                    tooltipText: null
                }
          : {
                disabled: !0,
                tooltipText: T.intl.string(T.t.HeF1kZ)
            };
}
let R = (e) => (n) => {
        e({ entityMetadata: { location: n } });
    },
    k = (e) => (n) => {
        var t;
        e({ channelId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null });
    },
    A = (e, n) => (t) => {
        let { value: l } = t,
            i = {
                entityType: l,
                scheduledEndTime: void 0
            };
        if (Z(l)) {
            var r;
            let e = (null !== (r = a()(n.scheduledStartTime)) && void 0 !== r ? r : a()()).add(2, 'hour');
            i.scheduledEndTime = e.toISOString();
        }
        e(i);
    };
function D(e) {
    let { guildId: n, guildEvent: t, onChange: r, isFocusReady: a } = e,
        { entityType: c, channelId: u } = t,
        x = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]),
        m = i.useRef(null);
    i.useEffect(() => {
        if (a && Z(c)) {
            var e;
            null === (e = m.current) || void 0 === e || e.focus();
        }
    }, [a, c]);
    let h = R(r),
        v = k(r),
        j = (0, I.xV)(t),
        f = (0, I.xC)(c),
        N = (0, g.xt)(t);
    return null == c || c === C.WX.NONE
        ? null
        : Z(c)
          ? (0, l.jsx)(o.FormItem, {
                title: T.intl.string(T.t.yx785O),
                className: S.options,
                required: !0,
                children: (0, l.jsx)(o.TextInput, {
                    className: S.__invalid_textInput,
                    onChange: h,
                    placeholder: T.intl.string(T.t.mkCMiY),
                    maxLength: C.gG,
                    value: null != j ? j : '',
                    inputRef: m
                })
            })
          : null == f
            ? null
            : (0, l.jsx)(y, {
                  guildId: n,
                  channelType: f,
                  onSelectChannel: v,
                  channel: x,
                  entityType: c,
                  disabled: N
              });
}
function L(e) {
    let { guildId: n, guildEvent: t, onChange: r } = e,
        a = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        c = (0, v.Z)(n, void 0),
        d = (0, v.Z)(n, E.d4z.GUILD_VOICE),
        x = (0, v.Z)(n, E.d4z.GUILD_STAGE_VOICE),
        m = (0, j.sR)(n, E.d4z.GUILD_VOICE),
        h = (0, f.q)(a),
        N = null == a ? void 0 : a.hasFeature(E.oNc.COMMUNITY),
        I = (0, g.xt)(t),
        p = A(r, t),
        Z = i.useMemo(() => {
            let e = [
                {
                    name: T.intl.string(T.t.BVZqJi),
                    value: C.WX.VOICE,
                    desc: T.intl.string(T.t['EV//4e']),
                    icon: o.VoiceNormalIcon,
                    ..._(C.WX.VOICE, I, d, m.length)
                },
                {
                    name: T.intl.string(T.t.w7ipb2),
                    value: C.WX.EXTERNAL,
                    desc: T.intl.string(T.t.DYxrHh),
                    icon: o.LocationIcon,
                    ..._(C.WX.EXTERNAL, I, c, 0)
                }
            ];
            return N
                ? [
                      {
                          name: T.intl.string(T.t.EErMzM),
                          value: C.WX.STAGE_INSTANCE,
                          desc: T.intl.string(T.t.LgALpq),
                          icon: o.StageIcon,
                          ..._(C.WX.STAGE_INSTANCE, I, x, h.length)
                      },
                      ...e
                  ]
                : e;
        }, [c, d, x, N, m.length, h.length, I]);
    return (0, l.jsx)(o.RadioGroup, {
        value: t.entityType,
        options: Z,
        onChange: p,
        className: S.options
    });
}
function z(e) {
    let { guildId: n, guildEvent: i, validationErrorMessage: r, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: d } = i,
        m = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        h = (0, f.q)(m),
        g = (0, s.e7)([x.Z], () => x.Z.can(E.Plq.MANAGE_CHANNELS, m)),
        v = null == m ? void 0 : m.hasFeature(E.oNc.COMMUNITY),
        j = A(a, i),
        N = v && !Z(d) && 0 === h.length && g && null != d;
    return (0, l.jsxs)('div', {
        className: S.container,
        children: [
            (0, l.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                className: S.header,
                children: T.intl.string(T.t['DC+Qm5'])
            }),
            (0, l.jsx)(o.Text, {
                color: 'header-secondary',
                className: S.text,
                variant: 'text-sm/normal',
                children: T.intl.string(T.t.IwmXLC)
            }),
            (0, l.jsx)(L, {
                guildId: n,
                guildEvent: i,
                onChange: a
            }),
            (0, l.jsx)(D, {
                guildId: n,
                guildEvent: i,
                isFocusReady: c,
                onChange: a
            }),
            N
                ? (0, l.jsx)(p.Z, {
                      onClick: () => {
                          j({
                              value: C.WX.STAGE_INSTANCE,
                              name: T.intl.string(T.t.EErMzM)
                          }),
                              (0, o.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([t.e('90508'), t.e('80284'), t.e('7590'), t.e('45094'), t.e('2958')]).then(t.bind(t, 218613));
                                  return (t) =>
                                      (0, l.jsx)(e, {
                                          ...t,
                                          channelType: E.d4z.GUILD_STAGE_VOICE,
                                          guildId: n
                                      });
                              });
                      }
                  })
                : null
        ]
    });
}
