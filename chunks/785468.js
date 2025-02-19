n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    d = n(592125),
    u = n(430824),
    m = n(496675),
    x = n(699516),
    g = n(594174),
    h = n(924301),
    v = n(518756),
    f = n(545165),
    p = n(77810),
    j = n(274311),
    N = n(230900),
    b = n(366815),
    y = n(765305),
    O = n(981631),
    E = n(388032),
    C = n(520225);
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
        let n = d.Z.getChannel(e);
        if (null == n) return null;
        let l = n.type === O.d4z.GUILD_STAGE_VOICE,
            i = (0, j.Q)(n, t),
            a = i ? o.gj8 : o.gjC,
            s = i ? o.ewx : o.pki;
        return (0, r.jsx)(l ? s : a, {
            color: 'currentColor',
            size: 'md',
            className: C.channelOptionIcon
        });
    },
    P = (e) => {
        let { guildId: t, channelType: n, channel: l, onSelectChannel: i, disabled: a, entityType: s } = e,
            d = n === O.d4z.GUILD_STAGE_VOICE,
            u = (0, j.Q)(l, s),
            m = (0, f.sR)(t, n);
        return (0, r.jsxs)(o.xJW, {
            title: d ? E.NW.string(E.t.S7GjDw) : E.NW.string(E.t['7RYWCA']),
            className: C.options,
            disabled: a,
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
                        i(null != t ? t : void 0);
                    },
                    renderOptionPrefix: (e) => T(null == e ? void 0 : e.value, s),
                    isDisabled: a
                }),
                !u &&
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
        e({ channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null });
    },
    k = (e, t) => (n) => {
        let { value: r } = n,
            l = {
                entityType: r,
                scheduledEndTime: void 0
            };
        if (S(r)) {
            var i;
            let e = (null !== (i = a()(t.scheduledStartTime)) && void 0 !== i ? i : a()()).add(2, 'hour');
            l.scheduledEndTime = e.toISOString();
        }
        e(l);
    };
function _(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: c, channelId: u } = n,
        m = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]),
        x = l.useRef(null);
    l.useEffect(() => {
        if (a && S(c)) {
            var e;
            null === (e = x.current) || void 0 === e || e.focus();
        }
    }, [a, c]);
    let g = w(i),
        v = Z(i),
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
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        c = (0, v.Z)(t, void 0),
        d = (0, v.Z)(t, O.d4z.GUILD_VOICE),
        m = (0, v.Z)(t, O.d4z.GUILD_STAGE_VOICE),
        x = (0, f.sR)(t, O.d4z.GUILD_VOICE),
        g = (0, p.q)(a),
        j = null == a ? void 0 : a.hasFeature(O.oNc.COMMUNITY),
        N = (0, h.xt)(n),
        b = k(i, n),
        S = l.useMemo(() => {
            let e = [
                I(
                    {
                        name: E.NW.string(E.t.BVZqJi),
                        value: y.WX.VOICE,
                        desc: E.NW.string(E.t['EV//4e']),
                        icon: o.gj8
                    },
                    W(y.WX.VOICE, N, d, x.length)
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
        }, [c, d, m, j, x.length, g.length, N]);
    return (0, r.jsx)(o.FXm, {
        value: n.entityType,
        options: S,
        onChange: b,
        className: C.options
    });
}
function R(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: i, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: d } = l,
        x = (0, s.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        g = (0, p.q)(x),
        h = (0, s.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_CHANNELS, x)),
        v = null == x ? void 0 : x.hasFeature(O.oNc.COMMUNITY),
        f = k(a, l),
        j = v && !S(d) && 0 === g.length && h && null != d;
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
                onChange: a
            }),
            (0, r.jsx)(_, {
                guildId: t,
                guildEvent: l,
                isFocusReady: c,
                onChange: a
            }),
            j
                ? (0, r.jsx)(b.Z, {
                      onClick: () => {
                          f({
                              value: y.WX.STAGE_INSTANCE,
                              name: E.NW.string(E.t.EErMzM)
                          }),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('80284'), n.e('7590'), n.e('45094'), n.e('11289')]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var l, i;
                                      return (0, r.jsx)(
                                          e,
                                          ((l = I({}, n)),
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
