n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(933557),
    d = n(592125),
    x = n(430824),
    g = n(496675),
    m = n(699516),
    v = n(594174),
    h = n(924301),
    j = n(518756),
    p = n(545165),
    f = n(884746),
    b = n(274311),
    y = n(230900),
    O = n(366815),
    E = n(765305),
    C = n(981631),
    N = n(388032),
    P = n(138324);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let T = (e) => {
    let { guildId: t, channelType: n, channel: l, onSelectChannel: i, disabled: a, entityType: s } = e,
        o = n === C.d4z.GUILD_STAGE_VOICE,
        x = (0, b.Q)(l, s),
        g = (0, p.sR)(t, n);
    return (0, r.jsx)(c.VcW, {
        label: o ? N.intl.string(N.t.S7GjDw) : N.intl.string(N.t["7RYWCA"]),
        required: !0,
        helperText: x ? void 0 : N.intl.string(N.t.F3bDaW),
        value: null == l ? void 0 : l.id,
        options: g.map((e) => ({
            value: e.id,
            label: (0, u.F6)(e, v.default, m.Z, !0),
        })),
        onChange: (e) => {
            let t = g.find((t) => t.id === e);
            i(null != t ? t : void 0);
        },
        renderOptionPrefix: (e) =>
            ((e, t) => {
                let n = d.Z.getChannel(e);
                if (null == n) return null;
                let l = n.type === C.d4z.GUILD_STAGE_VOICE,
                    i = (0, b.Q)(n, t),
                    a = i ? c.gj8 : c.gjC,
                    s = i ? c.ewx : c.pki;
                return (0, r.jsx)(l ? s : a, {
                    color: "currentColor",
                    size: "md",
                    className: P.channelOptionIcon,
                });
            })(null == e ? void 0 : e.value, s),
        isDisabled: a,
    });
};
function Z(e, t, n, r) {
    return t
        ? {
              disabled: !0,
              tooltipText: N.intl.string(N.t.yutP5e),
          }
        : n
          ? 0 === r && e !== E.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: N.intl.string(N.t["DkY+cH"]),
                }
              : {
                    disabled: !1,
                    tooltipText: null,
                }
          : {
                disabled: !0,
                tooltipText: N.intl.string(N.t.HeF1kZ),
            };
}
let w = (e, t) => (n) => {
    let { value: r } = n,
        l = {
            entityType: r,
            scheduledEndTime: void 0,
        };
    if (r === E.WX.EXTERNAL) {
        var i;
        l.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, "hour").toISOString();
    }
    e(l);
};
function I(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: o, channelId: u } = n,
        x = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]),
        g = l.useRef(null);
    l.useEffect(() => {
        if (a && o === E.WX.EXTERNAL) {
            var e;
            null == (e = g.current) || e.focus();
        }
    }, [a, o]);
    let m = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        v = (0, y.xV)(n),
        j = (0, y.xC)(o),
        p = (0, h.xt)(n);
    return null == o || o === E.WX.NONE
        ? null
        : o === E.WX.EXTERNAL
          ? (0, r.jsx)(c.oil, {
                label: N.intl.string(N.t.yx785O),
                required: !0,
                onChange: (e) => {
                    i({ entityMetadata: { location: e } });
                },
                placeholder: N.intl.string(N.t.mkCMiY),
                maxLength: E.gG,
                value: null != v ? v : "",
                inputRef: g,
            })
          : null == j
            ? null
            : (0, r.jsx)(T, {
                  guildId: t,
                  channelType: j,
                  onSelectChannel: m,
                  channel: x,
                  entityType: o,
                  disabled: p,
              });
}
function D(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]),
        u = (0, j.Z)(t, void 0),
        d = (0, j.Z)(t, C.d4z.GUILD_VOICE),
        g = (0, j.Z)(t, C.d4z.GUILD_STAGE_VOICE),
        m = (0, p.sR)(t, C.d4z.GUILD_VOICE),
        v = (0, f.q)(a),
        b = null == a ? void 0 : a.features.has(C.oNc.COMMUNITY),
        y = (0, h.xt)(n),
        O = w(i, n),
        P = l.useMemo(() => {
            let e = [
                S(
                    {
                        name: N.intl.string(N.t.BVZqJi),
                        value: E.WX.VOICE,
                        desc: N.intl.string(N.t["EV//4e"]),
                        icon: c.gj8,
                    },
                    Z(E.WX.VOICE, y, d, m.length),
                ),
                S(
                    {
                        name: N.intl.string(N.t.w7ipb2),
                        value: E.WX.EXTERNAL,
                        desc: N.intl.string(N.t.DYxrHh),
                        icon: c._tJ,
                    },
                    Z(E.WX.EXTERNAL, y, u, 0),
                ),
            ];
            return b
                ? [
                      S(
                          {
                              name: N.intl.string(N.t.EErMzM),
                              value: E.WX.STAGE_INSTANCE,
                              desc: N.intl.string(N.t.LgALpq),
                              icon: c.ewx,
                          },
                          Z(E.WX.STAGE_INSTANCE, y, g, v.length),
                      ),
                      ...e,
                  ]
                : e;
        }, [u, d, g, b, m.length, v.length, y]);
    return (0, r.jsx)(o.Gu, {
        value: n.entityType,
        options: P,
        onChange: O,
    });
}
function k(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: i, onChange: a, isSlideReady: o = !1 } = e,
        { entityType: u } = l,
        d = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]),
        m = (0, f.q)(d),
        v = (0, s.e7)([g.Z], () => g.Z.can(C.Plq.MANAGE_CHANNELS, d)),
        h = null == d ? void 0 : d.features.has(C.oNc.COMMUNITY),
        j = w(a, l),
        p = h && u !== E.WX.EXTERNAL && 0 === m.length && v && null != u;
    return (0, r.jsxs)("div", {
        className: P.container,
        children: [
            (0, r.jsxs)(c.Kqy, {
                gap: 4,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t["DC+Qm5"]),
                    }),
                    (0, r.jsx)(c.Text, {
                        color: "text-secondary",
                        variant: "text-sm/normal",
                        children: N.intl.string(N.t.IwmXLC),
                    }),
                ],
            }),
            (0, r.jsx)(D, {
                guildId: t,
                guildEvent: l,
                onChange: a,
            }),
            (0, r.jsx)(I, {
                guildId: t,
                guildEvent: l,
                isFocusReady: o,
                onChange: a,
            }),
            p
                ? (0, r.jsx)(O.Z, {
                      onClick: () => {
                          j({
                              value: E.WX.STAGE_INSTANCE,
                              name: N.intl.string(N.t.EErMzM),
                          }),
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("33285"),
                                      n.e("38697"),
                                      n.e("45094"),
                                      n.e("12334"),
                                  ]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var l, i;
                                      return (0, r.jsx)(
                                          e,
                                          ((l = S({}, n)),
                                          (i = i =
                                              {
                                                  channelType: C.d4z.GUILD_STAGE_VOICE,
                                                  guildId: t,
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
                                          l),
                                      );
                                  };
                              });
                      },
                  })
                : null,
        ],
    });
}
