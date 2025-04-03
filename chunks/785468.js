n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(913527),
    i = n.n(a),
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
    N = n(230900),
    b = n(366815),
    y = n(765305),
    O = n(981631),
    E = n(388032),
    C = n(230384);
function I(e) {
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
let S = (e) => e === y.WX.EXTERNAL,
    T = (e, t) => {
        let n = u.Z.getChannel(e);
        if (null == n) return null;
        let l = n.type === O.d4z.GUILD_STAGE_VOICE,
            a = (0, j.Q)(n, t),
            i = a ? o.gj8 : o.gjC,
            s = a ? o.ewx : o.pki;
        return (0, r.jsx)(l ? s : i, {
            color: 'currentColor',
            size: 'md',
            className: C.channelOptionIcon
        });
    },
    P = (e) => {
        let { guildId: t, channelType: n, channel: l, onSelectChannel: a, disabled: i, entityType: s } = e,
            u = n === O.d4z.GUILD_STAGE_VOICE,
            d = (0, j.Q)(l, s),
            m = (0, f.sR)(t, n);
        return (0, r.jsxs)(o.xJW, {
            title: u ? E.NW.string(E.t.S7GjDw) : E.NW.string(E.t['7RYWCA']),
            className: C.options,
            disabled: i,
            required: !0,
            children: [
                (0, r.jsx)(o.VcW, {
                    value: null == l ? void 0 : l.id,
                    options: m.map((e) => ({
                        value: e.id,
                        label: (0, c.F6)(e, g.default, x.Z, !0)
                    })),
                    onChange: (e) => {
                        let t = m.find((t) => t.id === e);
                        a(null != t ? t : void 0);
                    },
                    renderOptionPrefix: (e) => T(null == e ? void 0 : e.value, s),
                    isDisabled: i
                }),
                !d &&
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        className: C.channelPrivate,
                        variant: 'text-sm/normal',
                        children: E.NW.string(E.t.F3bDaW)
                    })
            ]
        });
    };
function W(e, t, n, r) {
    return t
        ? {
              disabled: !0,
              tooltipText: E.NW.string(E.t.yutP5e)
          }
        : n
          ? 0 === r && e !== y.WX.EXTERNAL
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
let w = (e) => (t) => {
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
        if (S(r)) {
            var a;
            l.scheduledEndTime = (null != (a = i()(t.scheduledStartTime)) ? a : i()()).add(2, 'hour').toISOString();
        }
        e(l);
    };
function _(e) {
    let { guildId: t, guildEvent: n, onChange: a, isFocusReady: i } = e,
        { entityType: c, channelId: d } = n,
        m = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]),
        x = l.useRef(null);
    l.useEffect(() => {
        if (i && S(c)) {
            var e;
            null == (e = x.current) || e.focus();
        }
    }, [i, c]);
    let g = w(a),
        v = Z(a),
        f = (0, N.xV)(n),
        p = (0, N.xC)(c),
        j = (0, h.xt)(n);
    return null == c || c === y.WX.NONE
        ? null
        : S(c)
          ? (0, r.jsx)(o.xJW, {
                title: E.NW.string(E.t.yx785O),
                className: C.options,
                required: !0,
                children: (0, r.jsx)(o.oil, {
                    className: C.__invalid_textInput,
                    onChange: g,
                    placeholder: E.NW.string(E.t.mkCMiY),
                    maxLength: y.gG,
                    value: null != f ? f : '',
                    inputRef: x
                })
            })
          : null == p
            ? null
            : (0, r.jsx)(P, {
                  guildId: t,
                  channelType: p,
                  onSelectChannel: v,
                  channel: m,
                  entityType: c,
                  disabled: j
              });
}
function D(e) {
    let { guildId: t, guildEvent: n, onChange: a } = e,
        i = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        c = (0, v.Z)(t, void 0),
        u = (0, v.Z)(t, O.d4z.GUILD_VOICE),
        m = (0, v.Z)(t, O.d4z.GUILD_STAGE_VOICE),
        x = (0, f.sR)(t, O.d4z.GUILD_VOICE),
        g = (0, p.q)(i),
        j = null == i ? void 0 : i.hasFeature(O.oNc.COMMUNITY),
        N = (0, h.xt)(n),
        b = k(a, n),
        S = l.useMemo(() => {
            let e = [
                I(
                    {
                        name: E.NW.string(E.t.BVZqJi),
                        value: y.WX.VOICE,
                        desc: E.NW.string(E.t['EV//4e']),
                        icon: o.gj8
                    },
                    W(y.WX.VOICE, N, u, x.length)
                ),
                I(
                    {
                        name: E.NW.string(E.t.w7ipb2),
                        value: y.WX.EXTERNAL,
                        desc: E.NW.string(E.t.DYxrHh),
                        icon: o._tJ
                    },
                    W(y.WX.EXTERNAL, N, c, 0)
                )
            ];
            return j
                ? [
                      I(
                          {
                              name: E.NW.string(E.t.EErMzM),
                              value: y.WX.STAGE_INSTANCE,
                              desc: E.NW.string(E.t.LgALpq),
                              icon: o.ewx
                          },
                          W(y.WX.STAGE_INSTANCE, N, m, g.length)
                      ),
                      ...e
                  ]
                : e;
        }, [c, u, m, j, x.length, g.length, N]);
    return (0, r.jsx)(o.FXm, {
        value: n.entityType,
        options: S,
        onChange: b,
        className: C.options
    });
}
function R(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: a, onChange: i, isSlideReady: c = !1 } = e,
        { entityType: u } = l,
        x = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        g = (0, p.q)(x),
        h = (0, s.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_CHANNELS, x)),
        v = null == x ? void 0 : x.hasFeature(O.oNc.COMMUNITY),
        f = k(i, l),
        j = v && !S(u) && 0 === g.length && h && null != u;
    return (0, r.jsxs)('div', {
        className: C.container,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-xl/semibold',
                className: C.header,
                children: E.NW.string(E.t['DC+Qm5'])
            }),
            (0, r.jsx)(o.Text, {
                color: 'header-secondary',
                className: C.text,
                variant: 'text-sm/normal',
                children: E.NW.string(E.t.IwmXLC)
            }),
            (0, r.jsx)(D, {
                guildId: t,
                guildEvent: l,
                onChange: i
            }),
            (0, r.jsx)(_, {
                guildId: t,
                guildEvent: l,
                isFocusReady: c,
                onChange: i
            }),
            j
                ? (0, r.jsx)(b.Z, {
                      onClick: () => {
                          f({
                              value: y.WX.STAGE_INSTANCE,
                              name: E.NW.string(E.t.EErMzM)
                          }),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('80284'), n.e('7590'), n.e('45094'), n.e('76916')]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var l, a;
                                      return (0, r.jsx)(
                                          e,
                                          ((l = I({}, n)),
                                          (a = a =
                                              {
                                                  channelType: O.d4z.GUILD_STAGE_VOICE,
                                                  guildId: t
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var r = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, r);
                                                    }
                                                    return n;
                                                })(Object(a)).forEach(function (e) {
                                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
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
