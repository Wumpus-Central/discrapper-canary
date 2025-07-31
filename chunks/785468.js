(n.d(t, { Z: () => L }), n(388685));
var l = n(255367),
    r = n(73800),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(933557),
    d = n(592125),
    x = n(430824),
    m = n(496675),
    g = n(699516),
    v = n(594174),
    h = n(924301),
    f = n(518756),
    p = n(545165),
    j = n(884746),
    y = n(274311),
    b = n(230900),
    E = n(366815),
    O = n(765305),
    N = n(981631),
    C = n(388032),
    T = n(230384);
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
let I = (e) => e === O.WX.EXTERNAL,
    Z = (e, t) => {
        let n = d.Z.getChannel(e);
        if (null == n) return null;
        let r = n.type === N.d4z.GUILD_STAGE_VOICE,
            i = (0, y.Q)(n, t),
            a = i ? c.gj8 : c.gjC,
            s = i ? c.ewx : c.pki;
        return (0, l.jsx)(r ? s : a, {
            color: 'currentColor',
            size: 'md',
            className: T.channelOptionIcon
        });
    },
    P = (e) => {
        let { guildId: t, channelType: n, channel: r, onSelectChannel: i, disabled: a, entityType: s } = e,
            o = n === N.d4z.GUILD_STAGE_VOICE,
            d = (0, y.Q)(r, s),
            x = (0, p.sR)(t, n);
        return (0, l.jsxs)(c.xJW, {
            title: o ? C.intl.string(C.t.S7GjDw) : C.intl.string(C.t['7RYWCA']),
            className: T.options,
            disabled: a,
            required: !0,
            children: [
                (0, l.jsx)(c.VcW, {
                    value: null == r ? void 0 : r.id,
                    options: x.map((e) => ({
                        value: e.id,
                        label: (0, u.F6)(e, v.default, g.Z, !0)
                    })),
                    onChange: (e) => {
                        let t = x.find((t) => t.id === e);
                        i(null != t ? t : void 0);
                    },
                    renderOptionPrefix: (e) => Z(null == e ? void 0 : e.value, s),
                    isDisabled: a
                }),
                !d &&
                    (0, l.jsx)(c.Text, {
                        color: 'header-secondary',
                        className: T.channelPrivate,
                        variant: 'text-sm/normal',
                        children: C.intl.string(C.t.F3bDaW)
                    })
            ]
        });
    };
function w(e, t, n, l) {
    return t
        ? {
              disabled: !0,
              tooltipText: C.intl.string(C.t.yutP5e)
          }
        : n
          ? 0 === l && e !== O.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: C.intl.string(C.t['DkY+cH'])
                }
              : {
                    disabled: !1,
                    tooltipText: null
                }
          : {
                disabled: !0,
                tooltipText: C.intl.string(C.t.HeF1kZ)
            };
}
let D = (e) => (t) => {
        e({ entityMetadata: { location: t } });
    },
    _ = (e) => (t) => {
        var n;
        e({ channelId: null != (n = null == t ? void 0 : t.id) ? n : null });
    },
    R = (e, t) => (n) => {
        let { value: l } = n,
            r = {
                entityType: l,
                scheduledEndTime: void 0
            };
        if (I(l)) {
            var i;
            r.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, 'hour').toISOString();
        }
        e(r);
    };
function A(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: u, channelId: x } = n,
        m = (0, s.e7)([d.Z], () => d.Z.getChannel(x), [x]),
        g = r.useRef(null);
    r.useEffect(() => {
        if (a && I(u)) {
            var e;
            null == (e = g.current) || e.focus();
        }
    }, [a, u]);
    let v = D(i),
        f = _(i),
        p = (0, b.xV)(n),
        j = (0, b.xC)(u),
        y = (0, h.xt)(n);
    return null == u || u === O.WX.NONE
        ? null
        : I(u)
          ? (0, l.jsx)(c.xJW, {
                title: C.intl.string(C.t.yx785O),
                className: T.options,
                required: !0,
                children: (0, l.jsx)(o.Is, {
                    className: T.__invalid_textInput,
                    onChange: v,
                    placeholder: C.intl.string(C.t.mkCMiY),
                    maxLength: O.gG,
                    value: null != p ? p : '',
                    inputRef: g
                })
            })
          : null == j
            ? null
            : (0, l.jsx)(P, {
                  guildId: t,
                  channelType: j,
                  onSelectChannel: f,
                  channel: m,
                  entityType: u,
                  disabled: y
              });
}
function k(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]),
        o = (0, f.Z)(t, void 0),
        u = (0, f.Z)(t, N.d4z.GUILD_VOICE),
        d = (0, f.Z)(t, N.d4z.GUILD_STAGE_VOICE),
        m = (0, p.sR)(t, N.d4z.GUILD_VOICE),
        g = (0, j.q)(a),
        v = null == a ? void 0 : a.features.has(N.oNc.COMMUNITY),
        y = (0, h.xt)(n),
        b = R(i, n),
        E = r.useMemo(() => {
            let e = [
                S(
                    {
                        name: C.intl.string(C.t.BVZqJi),
                        value: O.WX.VOICE,
                        desc: C.intl.string(C.t['EV//4e']),
                        icon: c.gj8
                    },
                    w(O.WX.VOICE, y, u, m.length)
                ),
                S(
                    {
                        name: C.intl.string(C.t.w7ipb2),
                        value: O.WX.EXTERNAL,
                        desc: C.intl.string(C.t.DYxrHh),
                        icon: c._tJ
                    },
                    w(O.WX.EXTERNAL, y, o, 0)
                )
            ];
            return v
                ? [
                      S(
                          {
                              name: C.intl.string(C.t.EErMzM),
                              value: O.WX.STAGE_INSTANCE,
                              desc: C.intl.string(C.t.LgALpq),
                              icon: c.ewx
                          },
                          w(O.WX.STAGE_INSTANCE, y, d, g.length)
                      ),
                      ...e
                  ]
                : e;
        }, [o, u, d, v, m.length, g.length, y]);
    return (0, l.jsx)(c.FXm, {
        value: n.entityType,
        options: E,
        onChange: b,
        className: T.options
    });
}
function L(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: a, isSlideReady: o = !1 } = e,
        { entityType: u } = r,
        d = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]),
        g = (0, j.q)(d),
        v = (0, s.e7)([m.Z], () => m.Z.can(N.Plq.MANAGE_CHANNELS, d)),
        h = null == d ? void 0 : d.features.has(N.oNc.COMMUNITY),
        f = R(a, r),
        p = h && !I(u) && 0 === g.length && v && null != u;
    return (0, l.jsxs)('div', {
        className: T.container,
        children: [
            (0, l.jsx)(c.X6q, {
                variant: 'heading-xl/semibold',
                className: T.header,
                children: C.intl.string(C.t['DC+Qm5'])
            }),
            (0, l.jsx)(c.Text, {
                color: 'header-secondary',
                className: T.text,
                variant: 'text-sm/normal',
                children: C.intl.string(C.t.IwmXLC)
            }),
            (0, l.jsx)(k, {
                guildId: t,
                guildEvent: r,
                onChange: a
            }),
            (0, l.jsx)(A, {
                guildId: t,
                guildEvent: r,
                isFocusReady: o,
                onChange: a
            }),
            p
                ? (0, l.jsx)(E.Z, {
                      onClick: () => {
                          (f({
                              value: O.WX.STAGE_INSTANCE,
                              name: C.intl.string(C.t.EErMzM)
                          }),
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e('7590'), n.e('38697'), n.e('96812'), n.e('45094'), n.e('97167')]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var r, i;
                                      return (0, l.jsx)(
                                          e,
                                          ((r = S({}, n)),
                                          (i = i =
                                              {
                                                  channelType: N.d4z.GUILD_STAGE_VOICE,
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
