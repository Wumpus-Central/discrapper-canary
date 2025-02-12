t.d(n, { Z: () => P }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(913527),
    s = t.n(r),
    a = t(442837),
    o = t(481060),
    d = t(933557),
    c = t(592125),
    u = t(430824),
    x = t(496675),
    h = t(699516),
    m = t(594174),
    v = t(924301),
    g = t(518756),
    j = t(545165),
    N = t(77810),
    p = t(274311),
    f = t(230900),
    C = t(366815),
    E = t(765305),
    I = t(981631),
    S = t(388032),
    T = t(725200);
let Z = (e) => e === E.WX.EXTERNAL,
    y = (e, n) => {
        let t = c.Z.getChannel(e);
        if (null == t) return null;
        let i = t.type === I.d4z.GUILD_STAGE_VOICE,
            r = (0, p.Q)(t, n),
            s = r ? o.gj8 : o.gjC,
            a = r ? o.ewx : o.pki;
        return (0, l.jsx)(i ? a : s, {
            color: 'currentColor',
            size: 'md',
            className: T.channelOptionIcon
        });
    },
    b = (e) => {
        let { guildId: n, channelType: t, channel: i, onSelectChannel: r, disabled: s, entityType: a } = e,
            c = t === I.d4z.GUILD_STAGE_VOICE,
            u = (0, p.Q)(i, a),
            x = (0, j.sR)(n, t);
        return (0, l.jsxs)(o.xJW, {
            title: c ? S.intl.string(S.t.S7GjDw) : S.intl.string(S.t['7RYWCA']),
            className: T.options,
            disabled: s,
            required: !0,
            children: [
                (0, l.jsx)(o.VcW, {
                    value: null == i ? void 0 : i.id,
                    options: x.map((e) => ({
                        value: e.id,
                        label: (0, d.F6)(e, m.default, h.Z, !0)
                    })),
                    onChange: (e) => {
                        let n = x.find((n) => n.id === e);
                        r(null != n ? n : void 0);
                    },
                    renderOptionPrefix: (e) => y(null == e ? void 0 : e.value, a),
                    isDisabled: s
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
function k(e, n, t, l) {
    return n
        ? {
              disabled: !0,
              tooltipText: S.intl.string(S.t.yutP5e)
          }
        : t
          ? 0 === l && e !== E.WX.EXTERNAL
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
    R = (e) => (n) => {
        var t;
        e({ channelId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null });
    },
    z = (e, n) => (t) => {
        let { value: l } = t,
            i = {
                entityType: l,
                scheduledEndTime: void 0
            };
        if (Z(l)) {
            var r;
            let e = (null !== (r = s()(n.scheduledStartTime)) && void 0 !== r ? r : s()()).add(2, 'hour');
            i.scheduledEndTime = e.toISOString();
        }
        e(i);
    };
function A(e) {
    let { guildId: n, guildEvent: t, onChange: r, isFocusReady: s } = e,
        { entityType: d, channelId: u } = t,
        x = (0, a.e7)([c.Z], () => c.Z.getChannel(u), [u]),
        h = i.useRef(null);
    i.useEffect(() => {
        if (s && Z(d)) {
            var e;
            null === (e = h.current) || void 0 === e || e.focus();
        }
    }, [s, d]);
    let m = _(r),
        g = R(r),
        j = (0, f.xV)(t),
        N = (0, f.xC)(d),
        p = (0, v.xt)(t);
    return null == d || d === E.WX.NONE
        ? null
        : Z(d)
          ? (0, l.jsx)(o.xJW, {
                title: S.intl.string(S.t.yx785O),
                className: T.options,
                required: !0,
                children: (0, l.jsx)(o.oil, {
                    className: T.__invalid_textInput,
                    onChange: m,
                    placeholder: S.intl.string(S.t.mkCMiY),
                    maxLength: E.gG,
                    value: null != j ? j : '',
                    inputRef: h
                })
            })
          : null == N
            ? null
            : (0, l.jsx)(b, {
                  guildId: n,
                  channelType: N,
                  onSelectChannel: g,
                  channel: x,
                  entityType: d,
                  disabled: p
              });
}
function D(e) {
    let { guildId: n, guildEvent: t, onChange: r } = e,
        s = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        d = (0, g.Z)(n, void 0),
        c = (0, g.Z)(n, I.d4z.GUILD_VOICE),
        x = (0, g.Z)(n, I.d4z.GUILD_STAGE_VOICE),
        h = (0, j.sR)(n, I.d4z.GUILD_VOICE),
        m = (0, N.q)(s),
        p = null == s ? void 0 : s.hasFeature(I.oNc.COMMUNITY),
        f = (0, v.xt)(t),
        C = z(r, t),
        Z = i.useMemo(() => {
            let e = [
                {
                    name: S.intl.string(S.t.BVZqJi),
                    value: E.WX.VOICE,
                    desc: S.intl.string(S.t['EV//4e']),
                    icon: o.gj8,
                    ...k(E.WX.VOICE, f, c, h.length)
                },
                {
                    name: S.intl.string(S.t.w7ipb2),
                    value: E.WX.EXTERNAL,
                    desc: S.intl.string(S.t.DYxrHh),
                    icon: o._tJ,
                    ...k(E.WX.EXTERNAL, f, d, 0)
                }
            ];
            return p
                ? [
                      {
                          name: S.intl.string(S.t.EErMzM),
                          value: E.WX.STAGE_INSTANCE,
                          desc: S.intl.string(S.t.LgALpq),
                          icon: o.ewx,
                          ...k(E.WX.STAGE_INSTANCE, f, x, m.length)
                      },
                      ...e
                  ]
                : e;
        }, [d, c, x, p, h.length, m.length, f]);
    return (0, l.jsx)(o.FXm, {
        value: t.entityType,
        options: Z,
        onChange: C,
        className: T.options
    });
}
function P(e) {
    let { guildId: n, guildEvent: i, validationErrorMessage: r, onChange: s, isSlideReady: d = !1 } = e,
        { entityType: c } = i,
        h = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        m = (0, N.q)(h),
        v = (0, a.e7)([x.Z], () => x.Z.can(I.Plq.MANAGE_CHANNELS, h)),
        g = null == h ? void 0 : h.hasFeature(I.oNc.COMMUNITY),
        j = z(s, i),
        p = g && !Z(c) && 0 === m.length && v && null != c;
    return (0, l.jsxs)('div', {
        className: T.container,
        children: [
            (0, l.jsx)(o.X6q, {
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
            (0, l.jsx)(D, {
                guildId: n,
                guildEvent: i,
                onChange: s
            }),
            (0, l.jsx)(A, {
                guildId: n,
                guildEvent: i,
                isFocusReady: d,
                onChange: s
            }),
            p
                ? (0, l.jsx)(C.Z, {
                      onClick: () => {
                          j({
                              value: E.WX.STAGE_INSTANCE,
                              name: S.intl.string(S.t.EErMzM)
                          }),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([t.e('25292'), t.e('90508'), t.e('80284'), t.e('7590'), t.e('45094'), t.e('9149')]).then(t.bind(t, 218613));
                                  return (t) =>
                                      (0, l.jsx)(e, {
                                          ...t,
                                          channelType: I.d4z.GUILD_STAGE_VOICE,
                                          guildId: n
                                      });
                              });
                      }
                  })
                : null
        ]
    });
}
