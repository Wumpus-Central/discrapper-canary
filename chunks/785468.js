l.d(n, { Z: () => P }), l(47120);
var t = l(200651),
    i = l(192379),
    a = l(913527),
    r = l.n(a),
    s = l(442837),
    o = l(481060),
    d = l(933557),
    c = l(592125),
    u = l(430824),
    x = l(496675),
    m = l(699516),
    h = l(594174),
    v = l(924301),
    g = l(518756),
    j = l(545165),
    N = l(77810),
    f = l(274311),
    p = l(230900),
    E = l(366815),
    C = l(765305),
    I = l(981631),
    T = l(388032),
    Z = l(49862);
let S = (e) => e === C.WX.EXTERNAL,
    b = (e, n) => {
        let l = c.Z.getChannel(e);
        if (null == l) return null;
        let i = l.type === I.d4z.GUILD_STAGE_VOICE,
            a = (0, f.Q)(l, n),
            r = a ? o.gj8 : o.gjC,
            s = a ? o.ewx : o.pki;
        return (0, t.jsx)(i ? s : r, {
            color: 'currentColor',
            size: 'md',
            className: Z.channelOptionIcon
        });
    },
    y = (e) => {
        let { guildId: n, channelType: l, channel: i, onSelectChannel: a, disabled: r, entityType: s } = e,
            c = l === I.d4z.GUILD_STAGE_VOICE,
            u = (0, f.Q)(i, s),
            x = (0, j.sR)(n, l);
        return (0, t.jsxs)(o.xJW, {
            title: c ? T.intl.string(T.t.S7GjDw) : T.intl.string(T.t['7RYWCA']),
            className: Z.options,
            disabled: r,
            required: !0,
            children: [
                (0, t.jsx)(o.VcW, {
                    value: null == i ? void 0 : i.id,
                    options: x.map((e) => ({
                        value: e.id,
                        label: (0, d.F6)(e, h.default, m.Z, !0)
                    })),
                    onChange: (e) => {
                        let n = x.find((n) => n.id === e);
                        a(null != n ? n : void 0);
                    },
                    renderOptionPrefix: (e) => b(null == e ? void 0 : e.value, s),
                    isDisabled: r
                }),
                !u &&
                    (0, t.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: Z.channelPrivate,
                        variant: 'text-sm/normal',
                        children: T.intl.string(T.t.F3bDaW)
                    })
            ]
        });
    };
function k(e, n, l, t) {
    return n
        ? {
              disabled: !0,
              tooltipText: T.intl.string(T.t.yutP5e)
          }
        : l
          ? 0 === t && e !== C.WX.EXTERNAL
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
let _ = (e) => (n) => {
        e({ entityMetadata: { location: n } });
    },
    z = (e) => (n) => {
        var l;
        e({ channelId: null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : null });
    },
    R = (e, n) => (l) => {
        let { value: t } = l,
            i = {
                entityType: t,
                scheduledEndTime: void 0
            };
        if (S(t)) {
            var a;
            let e = (null !== (a = r()(n.scheduledStartTime)) && void 0 !== a ? a : r()()).add(2, 'hour');
            i.scheduledEndTime = e.toISOString();
        }
        e(i);
    };
function A(e) {
    let { guildId: n, guildEvent: l, onChange: a, isFocusReady: r } = e,
        { entityType: d, channelId: u } = l,
        x = (0, s.e7)([c.Z], () => c.Z.getChannel(u), [u]),
        m = i.useRef(null);
    i.useEffect(() => {
        if (r && S(d)) {
            var e;
            null === (e = m.current) || void 0 === e || e.focus();
        }
    }, [r, d]);
    let h = _(a),
        g = z(a),
        j = (0, p.xV)(l),
        N = (0, p.xC)(d),
        f = (0, v.xt)(l);
    return null == d || d === C.WX.NONE
        ? null
        : S(d)
          ? (0, t.jsx)(o.xJW, {
                title: T.intl.string(T.t.yx785O),
                className: Z.options,
                required: !0,
                children: (0, t.jsx)(o.oil, {
                    className: Z.__invalid_textInput,
                    onChange: h,
                    placeholder: T.intl.string(T.t.mkCMiY),
                    maxLength: C.gG,
                    value: null != j ? j : '',
                    inputRef: m
                })
            })
          : null == N
            ? null
            : (0, t.jsx)(y, {
                  guildId: n,
                  channelType: N,
                  onSelectChannel: g,
                  channel: x,
                  entityType: d,
                  disabled: f
              });
}
function D(e) {
    let { guildId: n, guildEvent: l, onChange: a } = e,
        r = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        d = (0, g.Z)(n, void 0),
        c = (0, g.Z)(n, I.d4z.GUILD_VOICE),
        x = (0, g.Z)(n, I.d4z.GUILD_STAGE_VOICE),
        m = (0, j.sR)(n, I.d4z.GUILD_VOICE),
        h = (0, N.q)(r),
        f = null == r ? void 0 : r.hasFeature(I.oNc.COMMUNITY),
        p = (0, v.xt)(l),
        E = R(a, l),
        S = i.useMemo(() => {
            let e = [
                {
                    name: T.intl.string(T.t.BVZqJi),
                    value: C.WX.VOICE,
                    desc: T.intl.string(T.t['EV//4e']),
                    icon: o.gj8,
                    ...k(C.WX.VOICE, p, c, m.length)
                },
                {
                    name: T.intl.string(T.t.w7ipb2),
                    value: C.WX.EXTERNAL,
                    desc: T.intl.string(T.t.DYxrHh),
                    icon: o._tJ,
                    ...k(C.WX.EXTERNAL, p, d, 0)
                }
            ];
            return f
                ? [
                      {
                          name: T.intl.string(T.t.EErMzM),
                          value: C.WX.STAGE_INSTANCE,
                          desc: T.intl.string(T.t.LgALpq),
                          icon: o.ewx,
                          ...k(C.WX.STAGE_INSTANCE, p, x, h.length)
                      },
                      ...e
                  ]
                : e;
        }, [d, c, x, f, m.length, h.length, p]);
    return (0, t.jsx)(o.FXm, {
        value: l.entityType,
        options: S,
        onChange: E,
        className: Z.options
    });
}
function P(e) {
    let { guildId: n, guildEvent: i, validationErrorMessage: a, onChange: r, isSlideReady: d = !1 } = e,
        { entityType: c } = i,
        m = (0, s.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        h = (0, N.q)(m),
        v = (0, s.e7)([x.Z], () => x.Z.can(I.Plq.MANAGE_CHANNELS, m)),
        g = null == m ? void 0 : m.hasFeature(I.oNc.COMMUNITY),
        j = R(r, i),
        f = g && !S(c) && 0 === h.length && v && null != c;
    return (0, t.jsxs)('div', {
        className: Z.container,
        children: [
            (0, t.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                className: Z.header,
                children: T.intl.string(T.t['DC+Qm5'])
            }),
            (0, t.jsx)(o.Text, {
                color: 'header-secondary',
                className: Z.text,
                variant: 'text-sm/normal',
                children: T.intl.string(T.t.IwmXLC)
            }),
            (0, t.jsx)(D, {
                guildId: n,
                guildEvent: i,
                onChange: r
            }),
            (0, t.jsx)(A, {
                guildId: n,
                guildEvent: i,
                isFocusReady: d,
                onChange: r
            }),
            f
                ? (0, t.jsx)(E.Z, {
                      onClick: () => {
                          j({
                              value: C.WX.STAGE_INSTANCE,
                              name: T.intl.string(T.t.EErMzM)
                          }),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([l.e('25292'), l.e('90508'), l.e('80284'), l.e('7590'), l.e('45094'), l.e('12914')]).then(l.bind(l, 218613));
                                  return (l) =>
                                      (0, t.jsx)(e, {
                                          ...l,
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
