n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    u = n(592125),
    d = n(430824),
    m = n(496675),
    h = n(699516),
    x = n(594174),
    g = n(924301),
    p = n(518756),
    f = n(545165),
    v = n(884746),
    b = n(274311),
    j = n(230900),
    y = n(366815),
    N = n(765305),
    O = n(981631),
    E = n(388032),
    S = n(230384);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let P = (e) => e === N.WX.EXTERNAL,
    I = (e, t) => {
        let n = u.Z.getChannel(e);
        if (null == n) return null;
        let l = n.type === O.d4z.GUILD_STAGE_VOICE,
            i = (0, b.Q)(n, t),
            a = i ? o.gj8 : o.gjC,
            s = i ? o.ewx : o.pki;
        return (0, r.jsx)(l ? s : a, {
            color: 'currentColor',
            size: 'md',
            className: S.channelOptionIcon
        });
    },
    T = (e) => {
        let { guildId: t, channelType: n, channel: l, onSelectChannel: i, disabled: a, entityType: s } = e,
            u = n === O.d4z.GUILD_STAGE_VOICE,
            d = (0, b.Q)(l, s),
            m = (0, f.sR)(t, n);
        return (0, r.jsxs)(o.xJW, {
            title: u ? E.NW.string(E.t.S7GjDw) : E.NW.string(E.t['7RYWCA']),
            className: S.options,
            disabled: a,
            required: !0,
            children: [
                (0, r.jsx)(o.VcW, {
                    value: null == l ? void 0 : l.id,
                    options: m.map((e) => ({
                        value: e.id,
                        label: (0, c.F6)(e, x.default, h.Z, !0)
                    })),
                    onChange: (e) => {
                        let t = m.find((t) => t.id === e);
                        i(null != t ? t : void 0);
                    },
                    renderOptionPrefix: (e) => I(null == e ? void 0 : e.value, s),
                    isDisabled: a
                }),
                !d &&
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: S.channelPrivate,
                        variant: 'text-sm/normal',
                        children: E.NW.string(E.t.F3bDaW)
                    })
            ]
        });
    };
function w(e, t, n, r) {
    return t
        ? {
              disabled: !0,
              tooltipText: E.NW.string(E.t.yutP5e)
          }
        : n
          ? 0 === r && e !== N.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: E.NW.string(E.t['DkY+cH'])
                }
              : {
                    disabled: !1,
                    tooltipText: null
                }
          : {
                disabled: !0,
                tooltipText: E.NW.string(E.t.HeF1kZ)
            };
}
let W = (e) => (t) => {
        e({ entityMetadata: { location: t } });
    },
    Z = (e) => (t) => {
        var n;
        e({ channelId: null != (n = null == t ? void 0 : t.id) ? n : null });
    },
    k = (e, t) => (n) => {
        let { value: r } = n,
            l = {
                entityType: r,
                scheduledEndTime: void 0
            };
        if (P(r)) {
            var i;
            l.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, 'hour').toISOString();
        }
        e(l);
    };
function D(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: c, channelId: d } = n,
        m = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]),
        h = l.useRef(null);
    l.useEffect(() => {
        if (a && P(c)) {
            var e;
            null == (e = h.current) || e.focus();
        }
    }, [a, c]);
    let x = W(i),
        p = Z(i),
        f = (0, j.xV)(n),
        v = (0, j.xC)(c),
        b = (0, g.xt)(n);
    return null == c || c === N.WX.NONE
        ? null
        : P(c)
          ? (0, r.jsx)(o.xJW, {
                title: E.NW.string(E.t.yx785O),
                className: S.options,
                required: !0,
                children: (0, r.jsx)(o.oil, {
                    className: S.__invalid_textInput,
                    onChange: x,
                    placeholder: E.NW.string(E.t.mkCMiY),
                    maxLength: N.gG,
                    value: null != f ? f : '',
                    inputRef: h
                })
            })
          : null == v
            ? null
            : (0, r.jsx)(T, {
                  guildId: t,
                  channelType: v,
                  onSelectChannel: p,
                  channel: m,
                  entityType: c,
                  disabled: b
              });
}
function R(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        c = (0, p.Z)(t, void 0),
        u = (0, p.Z)(t, O.d4z.GUILD_VOICE),
        m = (0, p.Z)(t, O.d4z.GUILD_STAGE_VOICE),
        h = (0, f.sR)(t, O.d4z.GUILD_VOICE),
        x = (0, v.q)(a),
        b = null == a ? void 0 : a.hasFeature(O.oNc.COMMUNITY),
        j = (0, g.xt)(n),
        y = k(i, n),
        P = l.useMemo(() => {
            let e = [
                C(
                    {
                        name: E.NW.string(E.t.BVZqJi),
                        value: N.WX.VOICE,
                        desc: E.NW.string(E.t['EV//4e']),
                        icon: o.gj8
                    },
                    w(N.WX.VOICE, j, u, h.length)
                ),
                C(
                    {
                        name: E.NW.string(E.t.w7ipb2),
                        value: N.WX.EXTERNAL,
                        desc: E.NW.string(E.t.DYxrHh),
                        icon: o._tJ
                    },
                    w(N.WX.EXTERNAL, j, c, 0)
                )
            ];
            return b
                ? [
                      C(
                          {
                              name: E.NW.string(E.t.EErMzM),
                              value: N.WX.STAGE_INSTANCE,
                              desc: E.NW.string(E.t.LgALpq),
                              icon: o.ewx
                          },
                          w(N.WX.STAGE_INSTANCE, j, m, x.length)
                      ),
                      ...e
                  ]
                : e;
        }, [c, u, m, b, h.length, x.length, j]);
    return (0, r.jsx)(o.FXm, {
        value: n.entityType,
        options: P,
        onChange: y,
        className: S.options
    });
}
function _(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: i, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: u } = l,
        h = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        x = (0, v.q)(h),
        g = (0, s.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_CHANNELS, h)),
        p = null == h ? void 0 : h.hasFeature(O.oNc.COMMUNITY),
        f = k(a, l),
        b = p && !P(u) && 0 === x.length && g && null != u;
    return (0, r.jsxs)('div', {
        className: S.container,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                className: S.header,
                children: E.NW.string(E.t['DC+Qm5'])
            }),
            (0, r.jsx)(o.Text, {
                color: 'header-secondary',
                className: S.text,
                variant: 'text-sm/normal',
                children: E.NW.string(E.t.IwmXLC)
            }),
            (0, r.jsx)(R, {
                guildId: t,
                guildEvent: l,
                onChange: a
            }),
            (0, r.jsx)(D, {
                guildId: t,
                guildEvent: l,
                isFocusReady: c,
                onChange: a
            }),
            b
                ? (0, r.jsx)(y.Z, {
                      onClick: () => {
                          f({
                              value: N.WX.STAGE_INSTANCE,
                              name: E.NW.string(E.t.EErMzM)
                          }),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('80284'), n.e('7590'), n.e('45094'), n.e('76916')]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var l, i;
                                      return (0, r.jsx)(
                                          e,
                                          ((l = C({}, n)),
                                          (i = i =
                                              {
                                                  channelType: O.d4z.GUILD_STAGE_VOICE,
                                                  guildId: t
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var r = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, r);
                                                    }
                                                    return n;
                                                })(Object(i)).forEach(function (e) {
                                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                                }),
                                          l)
                                      );
                                  };
                              });
                      }
                  })
                : null
        ]
    });
}
