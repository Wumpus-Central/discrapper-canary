t.d(n, {
    Z: function () {
        return B;
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
    m = t(496675),
    x = t(699516),
    h = t(594174),
    g = t(924301),
    v = t(518756),
    j = t(545165),
    f = t(77810),
    p = t(274311),
    I = t(230900),
    N = t(366815),
    C = t(765305),
    E = t(981631),
    S = t(388032),
    T = t(601335);
let y = (e) => e === C.WX.EXTERNAL,
    b = (e, n) => {
        let t = d.Z.getChannel(e);
        if (null == t) return null;
        let i = t.type === E.d4z.GUILD_STAGE_VOICE,
            r = (0, p.Q)(t, n),
            a = r ? o.VoiceNormalIcon : o.VoiceLockIcon,
            s = r ? o.StageIcon : o.StageLockIcon;
        return (0, l.jsx)(i ? s : a, {
            color: 'currentColor',
            size: 'md',
            className: T.channelOptionIcon
        });
    },
    Z = (e) => {
        let { guildId: n, channelType: t, channel: i, onSelectChannel: r, disabled: a, entityType: s } = e,
            d = t === E.d4z.GUILD_STAGE_VOICE,
            u = (0, p.Q)(i, s),
            m = (0, j.sR)(n, t);
        return (0, l.jsxs)(o.FormItem, {
            title: d ? S.intl.string(S.t.S7GjDw) : S.intl.string(S.t['7RYWCA']),
            className: T.options,
            disabled: a,
            required: !0,
            children: [
                (0, l.jsx)(o.SearchableSelect, {
                    value: null == i ? void 0 : i.id,
                    options: m.map((e) => ({
                        value: e.id,
                        label: (0, c.F6)(e, h.default, x.Z, !0)
                    })),
                    onChange: (e) => {
                        let n = m.find((n) => n.id === e);
                        r(null != n ? n : void 0);
                    },
                    renderOptionPrefix: (e) => b(null == e ? void 0 : e.value, s),
                    isDisabled: a
                }),
                !u &&
                    (0, l.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: T.channelPrivate,
                        variant: 'text-sm/normal',
                        children: S.intl.string(S.t.F3bDaW)
                    })
            ]
        });
    };
function R(e, n, t, l) {
    return n
        ? {
              disabled: !0,
              tooltipText: S.intl.string(S.t.yutP5e)
          }
        : t
          ? 0 === l && e !== C.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: S.intl.string(S.t['DkY+cH'])
                }
              : {
                    disabled: !1,
                    tooltipText: null
                }
          : {
                disabled: !0,
                tooltipText: S.intl.string(S.t.HeF1kZ)
            };
}
let _ = (e) => (n) => {
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
        if (y(l)) {
            var r;
            let e = (null !== (r = a()(n.scheduledStartTime)) && void 0 !== r ? r : a()()).add(2, 'hour');
            i.scheduledEndTime = e.toISOString();
        }
        e(i);
    };
function D(e) {
    let { guildId: n, guildEvent: t, onChange: r, isFocusReady: a } = e,
        { entityType: c, channelId: u } = t,
        m = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]),
        x = i.useRef(null);
    i.useEffect(() => {
        if (a && y(c)) {
            var e;
            null === (e = x.current) || void 0 === e || e.focus();
        }
    }, [a, c]);
    let h = _(r),
        v = k(r),
        j = (0, I.xV)(t),
        f = (0, I.xC)(c),
        p = (0, g.xt)(t);
    return null == c || c === C.WX.NONE
        ? null
        : y(c)
          ? (0, l.jsx)(o.FormItem, {
                title: S.intl.string(S.t.yx785O),
                className: T.options,
                required: !0,
                children: (0, l.jsx)(o.TextInput, {
                    className: T.__invalid_textInput,
                    onChange: h,
                    placeholder: S.intl.string(S.t.mkCMiY),
                    maxLength: C.gG,
                    value: null != j ? j : '',
                    inputRef: x
                })
            })
          : null == f
            ? null
            : (0, l.jsx)(Z, {
                  guildId: n,
                  channelType: f,
                  onSelectChannel: v,
                  channel: m,
                  entityType: c,
                  disabled: p
              });
}
function L(e) {
    let { guildId: n, guildEvent: t, onChange: r } = e,
        a = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        c = (0, v.Z)(n, void 0),
        d = (0, v.Z)(n, E.d4z.GUILD_VOICE),
        m = (0, v.Z)(n, E.d4z.GUILD_STAGE_VOICE),
        x = (0, j.sR)(n, E.d4z.GUILD_VOICE),
        h = (0, f.q)(a),
        p = null == a ? void 0 : a.hasFeature(E.oNc.COMMUNITY),
        I = (0, g.xt)(t),
        N = A(r, t),
        y = i.useMemo(() => {
            let e = [
                {
                    name: S.intl.string(S.t.BVZqJi),
                    value: C.WX.VOICE,
                    desc: S.intl.string(S.t['EV//4e']),
                    icon: o.VoiceNormalIcon,
                    ...R(C.WX.VOICE, I, d, x.length)
                },
                {
                    name: S.intl.string(S.t.w7ipb2),
                    value: C.WX.EXTERNAL,
                    desc: S.intl.string(S.t.DYxrHh),
                    icon: o.LocationIcon,
                    ...R(C.WX.EXTERNAL, I, c, 0)
                }
            ];
            return p
                ? [
                      {
                          name: S.intl.string(S.t.EErMzM),
                          value: C.WX.STAGE_INSTANCE,
                          desc: S.intl.string(S.t.LgALpq),
                          icon: o.StageIcon,
                          ...R(C.WX.STAGE_INSTANCE, I, m, h.length)
                      },
                      ...e
                  ]
                : e;
        }, [c, d, m, p, x.length, h.length, I]);
    return (0, l.jsx)(o.RadioGroup, {
        value: t.entityType,
        options: y,
        onChange: N,
        className: T.options
    });
}
function B(e) {
    let { guildId: n, guildEvent: i, validationErrorMessage: r, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: d } = i,
        x = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        h = (0, f.q)(x),
        g = (0, s.e7)([m.Z], () => m.Z.can(E.Plq.MANAGE_CHANNELS, x)),
        v = null == x ? void 0 : x.hasFeature(E.oNc.COMMUNITY),
        j = A(a, i),
        p = v && !y(d) && 0 === h.length && g && null != d;
    return (0, l.jsxs)('div', {
        className: T.container,
        children: [
            (0, l.jsx)(o.Heading, {
                variant: 'heading-xl/semibold',
                className: T.header,
                children: S.intl.string(S.t['DC+Qm5'])
            }),
            (0, l.jsx)(o.Text, {
                color: 'header-secondary',
                className: T.text,
                variant: 'text-sm/normal',
                children: S.intl.string(S.t.IwmXLC)
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
            p
                ? (0, l.jsx)(N.Z, {
                      onClick: () => {
                          j({
                              value: C.WX.STAGE_INSTANCE,
                              name: S.intl.string(S.t.EErMzM)
                          }),
                              (0, o.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([t.e('90508'), t.e('7590'), t.e('80284'), t.e('45094'), t.e('2958')]).then(t.bind(t, 218613));
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
