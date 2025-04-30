n.d(t, { Z: () => A }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    u = n(592125),
    d = n(430824),
    m = n(496675),
    x = n(699516),
    g = n(594174),
    h = n(924301),
    v = n(518756),
    f = n(545165),
    p = n(884746),
    j = n(274311),
    b = n(230900),
    y = n(366815),
    O = n(765305),
    N = n(981631),
    E = n(388032),
    C = n(230384);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let S = (e) => e === O.WX.EXTERNAL,
    T = (e, t) => {
        let n = u.Z.getChannel(e);
        if (null == n) return null;
        let r = n.type === N.d4z.GUILD_STAGE_VOICE,
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
            u = n === N.d4z.GUILD_STAGE_VOICE,
            d = (0, j.Q)(r, s),
            m = (0, f.sR)(t, n);
        return (0, l.jsxs)(o.xJW, {
            title: u ? E.intl.string(E.t.S7GjDw) : E.intl.string(E.t['7RYWCA']),
            className: C.options,
            disabled: a,
            required: !0,
            children: [
                (0, l.jsx)(o.VcW, {
                    value: null == r ? void 0 : r.id,
                    options: m.map((e) => ({
                        value: e.id,
                        label: (0, c.F6)(e, g.default, x.Z, !0)
                    })),
                    onChange: (e) => {
                        let t = m.find((t) => t.id === e);
                        i(null != t ? t : void 0);
                    },
                    renderOptionPrefix: (e) => T(null == e ? void 0 : e.value, s),
                    isDisabled: a
                }),
                !d &&
                    (0, l.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: C.channelPrivate,
                        variant: 'text-sm/normal',
                        children: E.intl.string(E.t.F3bDaW)
                    })
            ]
        });
    };
function w(e, t, n, l) {
    return t
        ? {
              disabled: !0,
              tooltipText: E.intl.string(E.t.yutP5e)
          }
        : n
          ? 0 === l && e !== O.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: E.intl.string(E.t['DkY+cH'])
                }
              : {
                    disabled: !1,
                    tooltipText: null
                }
          : {
                disabled: !0,
                tooltipText: E.intl.string(E.t.HeF1kZ)
            };
}
let Z = (e) => (t) => {
        e({ entityMetadata: { location: t } });
    },
    k = (e) => (t) => {
        var n;
        e({ channelId: null != (n = null == t ? void 0 : t.id) ? n : null });
    },
    _ = (e, t) => (n) => {
        let { value: l } = n,
            r = {
                entityType: l,
                scheduledEndTime: void 0
            };
        if (S(l)) {
            var i;
            r.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, 'hour').toISOString();
        }
        e(r);
    };
function D(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: c, channelId: d } = n,
        m = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]),
        x = r.useRef(null);
    r.useEffect(() => {
        if (a && S(c)) {
            var e;
            null == (e = x.current) || e.focus();
        }
    }, [a, c]);
    let g = Z(i),
        v = k(i),
        f = (0, b.xV)(n),
        p = (0, b.xC)(c),
        j = (0, h.xt)(n);
    return null == c || c === O.WX.NONE
        ? null
        : S(c)
          ? (0, l.jsx)(o.xJW, {
                title: E.intl.string(E.t.yx785O),
                className: C.options,
                required: !0,
                children: (0, l.jsx)(o.oil, {
                    className: C.__invalid_textInput,
                    onChange: g,
                    placeholder: E.intl.string(E.t.mkCMiY),
                    maxLength: O.gG,
                    value: null != f ? f : '',
                    inputRef: x
                })
            })
          : null == p
            ? null
            : (0, l.jsx)(P, {
                  guildId: t,
                  channelType: p,
                  onSelectChannel: v,
                  channel: m,
                  entityType: c,
                  disabled: j
              });
}
function R(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        c = (0, v.Z)(t, void 0),
        u = (0, v.Z)(t, N.d4z.GUILD_VOICE),
        m = (0, v.Z)(t, N.d4z.GUILD_STAGE_VOICE),
        x = (0, f.sR)(t, N.d4z.GUILD_VOICE),
        g = (0, p.q)(a),
        j = null == a ? void 0 : a.hasFeature(N.oNc.COMMUNITY),
        b = (0, h.xt)(n),
        y = _(i, n),
        S = r.useMemo(() => {
            let e = [
                I(
                    {
                        name: E.intl.string(E.t.BVZqJi),
                        value: O.WX.VOICE,
                        desc: E.intl.string(E.t['EV//4e']),
                        icon: o.gj8
                    },
                    w(O.WX.VOICE, b, u, x.length)
                ),
                I(
                    {
                        name: E.intl.string(E.t.w7ipb2),
                        value: O.WX.EXTERNAL,
                        desc: E.intl.string(E.t.DYxrHh),
                        icon: o._tJ
                    },
                    w(O.WX.EXTERNAL, b, c, 0)
                )
            ];
            return j
                ? [
                      I(
                          {
                              name: E.intl.string(E.t.EErMzM),
                              value: O.WX.STAGE_INSTANCE,
                              desc: E.intl.string(E.t.LgALpq),
                              icon: o.ewx
                          },
                          w(O.WX.STAGE_INSTANCE, b, m, g.length)
                      ),
                      ...e
                  ]
                : e;
        }, [c, u, m, j, x.length, g.length, b]);
    return (0, l.jsx)(o.FXm, {
        value: n.entityType,
        options: S,
        onChange: y,
        className: C.options
    });
}
function A(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: u } = r,
        x = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        g = (0, p.q)(x),
        h = (0, s.e7)([m.Z], () => m.Z.can(N.Plq.MANAGE_CHANNELS, x)),
        v = null == x ? void 0 : x.hasFeature(N.oNc.COMMUNITY),
        f = _(a, r),
        j = v && !S(u) && 0 === g.length && h && null != u;
    return (0, l.jsxs)('div', {
        className: C.container,
        children: [
            (0, l.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                className: C.header,
                children: E.intl.string(E.t['DC+Qm5'])
            }),
            (0, l.jsx)(o.Text, {
                color: 'header-secondary',
                className: C.text,
                variant: 'text-sm/normal',
                children: E.intl.string(E.t.IwmXLC)
            }),
            (0, l.jsx)(R, {
                guildId: t,
                guildEvent: r,
                onChange: a
            }),
            (0, l.jsx)(D, {
                guildId: t,
                guildEvent: r,
                isFocusReady: c,
                onChange: a
            }),
            j
                ? (0, l.jsx)(y.Z, {
                      onClick: () => {
                          f({
                              value: O.WX.STAGE_INSTANCE,
                              name: E.intl.string(E.t.EErMzM)
                          }),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('80284'), n.e('7590'), n.e('45094'), n.e('76916')]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var r, i;
                                      return (0, l.jsx)(
                                          e,
                                          ((r = I({}, n)),
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
                              });
                      }
                  })
                : null
        ]
    });
}
