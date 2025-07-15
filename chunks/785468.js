(n.d(t, { Z: () => A }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    u = n(592125),
    d = n(430824),
    x = n(496675),
    m = n(699516),
    g = n(594174),
    v = n(924301),
    h = n(518756),
    f = n(545165),
    p = n(884746),
    j = n(274311),
    y = n(230900),
    b = n(366815),
    E = n(765305),
    O = n(981631),
    N = n(388032),
    C = n(230384);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
let T = (e) => e === E.WX.EXTERNAL,
    I = (e, t) => {
        let n = u.Z.getChannel(e);
        if (null == n) return null;
        let r = n.type === O.d4z.GUILD_STAGE_VOICE,
            i = (0, j.Q)(n, t),
            a = i ? o.gj8 : o.gjC,
            s = i ? o.ewx : o.pki;
        return (0, l.jsx)(r ? s : a, {
            color: 'currentColor',
            size: 'md',
            className: C.channelOptionIcon
        });
    },
    P = (e) => {
        let { guildId: t, channelType: n, channel: r, onSelectChannel: i, disabled: a, entityType: s } = e,
            u = n === O.d4z.GUILD_STAGE_VOICE,
            d = (0, j.Q)(r, s),
            x = (0, f.sR)(t, n);
        return (0, l.jsxs)(o.xJW, {
            title: u ? N.intl.string(N.t.S7GjDw) : N.intl.string(N.t['7RYWCA']),
            className: C.options,
            disabled: a,
            required: !0,
            children: [
                (0, l.jsx)(o.VcW, {
                    value: null == r ? void 0 : r.id,
                    options: x.map((e) => ({
                        value: e.id,
                        label: (0, c.F6)(e, g.default, m.Z, !0)
                    })),
                    onChange: (e) => {
                        let t = x.find((t) => t.id === e);
                        i(null != t ? t : void 0);
                    },
                    renderOptionPrefix: (e) => I(null == e ? void 0 : e.value, s),
                    isDisabled: a
                }),
                !d &&
                    (0, l.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: C.channelPrivate,
                        variant: 'text-sm/normal',
                        children: N.intl.string(N.t.F3bDaW)
                    })
            ]
        });
    };
function Z(e, t, n, l) {
    return t
        ? {
              disabled: !0,
              tooltipText: N.intl.string(N.t.yutP5e)
          }
        : n
          ? 0 === l && e !== E.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: N.intl.string(N.t['DkY+cH'])
                }
              : {
                    disabled: !1,
                    tooltipText: null
                }
          : {
                disabled: !0,
                tooltipText: N.intl.string(N.t.HeF1kZ)
            };
}
let w = (e) => (t) => {
        e({ entityMetadata: { location: t } });
    },
    D = (e) => (t) => {
        var n;
        e({ channelId: null != (n = null == t ? void 0 : t.id) ? n : null });
    },
    _ = (e, t) => (n) => {
        let { value: l } = n,
            r = {
                entityType: l,
                scheduledEndTime: void 0
            };
        if (T(l)) {
            var i;
            r.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, 'hour').toISOString();
        }
        e(r);
    };
function R(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: c, channelId: d } = n,
        x = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]),
        m = r.useRef(null);
    r.useEffect(() => {
        if (a && T(c)) {
            var e;
            null == (e = m.current) || e.focus();
        }
    }, [a, c]);
    let g = w(i),
        h = D(i),
        f = (0, y.xV)(n),
        p = (0, y.xC)(c),
        j = (0, v.xt)(n);
    return null == c || c === E.WX.NONE
        ? null
        : T(c)
          ? (0, l.jsx)(o.xJW, {
                title: N.intl.string(N.t.yx785O),
                className: C.options,
                required: !0,
                children: (0, l.jsx)(o.oil, {
                    className: C.__invalid_textInput,
                    onChange: g,
                    placeholder: N.intl.string(N.t.mkCMiY),
                    maxLength: E.gG,
                    value: null != f ? f : '',
                    inputRef: m
                })
            })
          : null == p
            ? null
            : (0, l.jsx)(P, {
                  guildId: t,
                  channelType: p,
                  onSelectChannel: h,
                  channel: x,
                  entityType: c,
                  disabled: j
              });
}
function L(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        c = (0, h.Z)(t, void 0),
        u = (0, h.Z)(t, O.d4z.GUILD_VOICE),
        x = (0, h.Z)(t, O.d4z.GUILD_STAGE_VOICE),
        m = (0, f.sR)(t, O.d4z.GUILD_VOICE),
        g = (0, p.q)(a),
        j = null == a ? void 0 : a.features.has(O.oNc.COMMUNITY),
        y = (0, v.xt)(n),
        b = _(i, n),
        T = r.useMemo(() => {
            let e = [
                S(
                    {
                        name: N.intl.string(N.t.BVZqJi),
                        value: E.WX.VOICE,
                        desc: N.intl.string(N.t['EV//4e']),
                        icon: o.gj8
                    },
                    Z(E.WX.VOICE, y, u, m.length)
                ),
                S(
                    {
                        name: N.intl.string(N.t.w7ipb2),
                        value: E.WX.EXTERNAL,
                        desc: N.intl.string(N.t.DYxrHh),
                        icon: o._tJ
                    },
                    Z(E.WX.EXTERNAL, y, c, 0)
                )
            ];
            return j
                ? [
                      S(
                          {
                              name: N.intl.string(N.t.EErMzM),
                              value: E.WX.STAGE_INSTANCE,
                              desc: N.intl.string(N.t.LgALpq),
                              icon: o.ewx
                          },
                          Z(E.WX.STAGE_INSTANCE, y, x, g.length)
                      ),
                      ...e
                  ]
                : e;
        }, [c, u, x, j, m.length, g.length, y]);
    return (0, l.jsx)(o.FXm, {
        value: n.entityType,
        options: T,
        onChange: b,
        className: C.options
    });
}
function A(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: u } = r,
        m = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        g = (0, p.q)(m),
        v = (0, s.e7)([x.Z], () => x.Z.can(O.Plq.MANAGE_CHANNELS, m)),
        h = null == m ? void 0 : m.features.has(O.oNc.COMMUNITY),
        f = _(a, r),
        j = h && !T(u) && 0 === g.length && v && null != u;
    return (0, l.jsxs)('div', {
        className: C.container,
        children: [
            (0, l.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                className: C.header,
                children: N.intl.string(N.t['DC+Qm5'])
            }),
            (0, l.jsx)(o.Text, {
                color: 'header-secondary',
                className: C.text,
                variant: 'text-sm/normal',
                children: N.intl.string(N.t.IwmXLC)
            }),
            (0, l.jsx)(L, {
                guildId: t,
                guildEvent: r,
                onChange: a
            }),
            (0, l.jsx)(R, {
                guildId: t,
                guildEvent: r,
                isFocusReady: c,
                onChange: a
            }),
            j
                ? (0, l.jsx)(b.Z, {
                      onClick: () => {
                          (f({
                              value: E.WX.STAGE_INSTANCE,
                              name: N.intl.string(N.t.EErMzM)
                          }),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('7590'), n.e('91398'), n.e('45094'), n.e('5307')]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var r, i;
                                      return (0, l.jsx)(
                                          e,
                                          ((r = S({}, n)),
                                          (i = i =
                                              {
                                                  channelType: O.d4z.GUILD_STAGE_VOICE,
                                                  guildId: t
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var l = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, l);
                                                    }
                                                    return n;
                                                })(Object(i)).forEach(function (e) {
                                                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                                }),
                                          r)
                                      );
                                  };
                              }));
                      }
                  })
                : null
        ]
    });
}
