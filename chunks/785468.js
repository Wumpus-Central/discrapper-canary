n.d(t, { Z: () => k }), n(388685);
var r = n(951288),
    l = n(647438),
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
    p = n(545165),
    j = n(884746),
    f = n(274311),
    b = n(230900),
    y = n(366815),
    O = n(765305),
    E = n(981631),
    N = n(388032),
    C = n(138324);
function P(e) {
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
let S = (e) => {
    let { guildId: t, channelType: n, channel: l, onSelectChannel: i, disabled: a, entityType: s } = e,
        d = n === E.d4z.GUILD_STAGE_VOICE,
        m = (0, f.Q)(l, s),
        h = (0, p.sR)(t, n);
    return (0, r.jsx)(o.VcW, {
        label: d ? N.intl.string(N.t.S7GjDw) : N.intl.string(N.t["7RYWCA"]),
        required: !0,
        helperText: m ? void 0 : N.intl.string(N.t.F3bDaW),
        value: null == l ? void 0 : l.id,
        options: h.map((e) => ({
            value: e.id,
            label: (0, c.F6)(e, g.default, x.Z, !0),
        })),
        onChange: (e) => {
            let t = h.find((t) => t.id === e);
            i(null != t ? t : void 0);
        },
        renderOptionPrefix: (e) =>
            ((e, t) => {
                let n = u.Z.getChannel(e);
                if (null == n) return null;
                let l = n.type === E.d4z.GUILD_STAGE_VOICE,
                    i = (0, f.Q)(n, t),
                    a = i ? o.gj8 : o.gjC,
                    s = i ? o.ewx : o.pki;
                return (0, r.jsx)(l ? s : a, {
                    color: "currentColor",
                    size: "md",
                    className: C.channelOptionIcon,
                });
            })(null == e ? void 0 : e.value, s),
        isDisabled: a,
    });
};
function I(e, t, n, r) {
    return t
        ? {
              disabled: !0,
              tooltipText: N.intl.string(N.t.yutP5e),
          }
        : n
          ? 0 === r && e !== O.WX.EXTERNAL
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
let T = (e, t) => (n) => {
    let r = {
        entityType: n,
        scheduledEndTime: void 0,
    };
    if (n === O.WX.EXTERNAL) {
        var l;
        r.scheduledEndTime = (null != (l = a()(t.scheduledStartTime)) ? l : a()()).add(2, "hour").toISOString();
    }
    e(r);
};
function Z(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: c, channelId: d } = n,
        m = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]),
        x = l.useRef(null);
    l.useEffect(() => {
        if (a && c === O.WX.EXTERNAL) {
            var e;
            null == (e = x.current) || e.focus();
        }
    }, [a, c]);
    let g = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        v = (0, b.xV)(n),
        p = (0, b.xC)(c),
        j = (0, h.xt)(n);
    return null == c || c === O.WX.NONE
        ? null
        : c === O.WX.EXTERNAL
          ? (0, r.jsx)(o.oil, {
                label: N.intl.string(N.t.yx785O),
                required: !0,
                onChange: (e) => {
                    i({ entityMetadata: { location: e } });
                },
                placeholder: N.intl.string(N.t.mkCMiY),
                maxLength: O.gG,
                value: null != v ? v : "",
                inputRef: x,
            })
          : null == p
            ? null
            : (0, r.jsx)(S, {
                  guildId: t,
                  channelType: p,
                  onSelectChannel: g,
                  channel: m,
                  entityType: c,
                  disabled: j,
              });
}
function w(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        c = (0, v.Z)(t, void 0),
        u = (0, v.Z)(t, E.d4z.GUILD_VOICE),
        m = (0, v.Z)(t, E.d4z.GUILD_STAGE_VOICE),
        x = (0, p.sR)(t, E.d4z.GUILD_VOICE),
        g = (0, j.q)(a),
        f = null == a ? void 0 : a.features.has(E.oNc.COMMUNITY),
        b = (0, h.xt)(n),
        y = T(i, n),
        C = l.useMemo(() => {
            let e = [
                P(
                    {
                        name: N.intl.string(N.t.BVZqJi),
                        value: O.WX.VOICE,
                        desc: N.intl.string(N.t["EV//4e"]),
                        leadingIcon: o.gj8,
                    },
                    I(O.WX.VOICE, b, u, x.length),
                ),
                P(
                    {
                        name: N.intl.string(N.t.w7ipb2),
                        value: O.WX.EXTERNAL,
                        desc: N.intl.string(N.t.DYxrHh),
                        leadingIcon: o._tJ,
                    },
                    I(O.WX.EXTERNAL, b, c, 0),
                ),
            ];
            return f
                ? [
                      P(
                          {
                              name: N.intl.string(N.t.EErMzM),
                              value: O.WX.STAGE_INSTANCE,
                              desc: N.intl.string(N.t.LgALpq),
                              leadingIcon: o.ewx,
                          },
                          I(O.WX.STAGE_INSTANCE, b, m, g.length),
                      ),
                      ...e,
                  ]
                : e;
        }, [c, u, m, f, x.length, g.length, b]);
    return (0, r.jsx)(o.FXm, {
        value: n.entityType,
        options: C,
        onChange: y,
    });
}
function k(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: i, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: u } = l,
        x = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        g = (0, j.q)(x),
        h = (0, s.e7)([m.Z], () => m.Z.can(E.Plq.MANAGE_CHANNELS, x)),
        v = null == x ? void 0 : x.features.has(E.oNc.COMMUNITY),
        p = T(a, l),
        f = v && u !== O.WX.EXTERNAL && 0 === g.length && h && null != u;
    return (0, r.jsxs)("div", {
        className: C.container,
        children: [
            (0, r.jsxs)(o.Kqy, {
                gap: 4,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t["DC+Qm5"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "text-secondary",
                        variant: "text-sm/normal",
                        children: N.intl.string(N.t.IwmXLC),
                    }),
                ],
            }),
            (0, r.jsx)(w, {
                guildId: t,
                guildEvent: l,
                onChange: a,
            }),
            (0, r.jsx)(Z, {
                guildId: t,
                guildEvent: l,
                isFocusReady: c,
                onChange: a,
            }),
            f
                ? (0, r.jsx)(y.Z, {
                      onClick: () => {
                          p(O.WX.STAGE_INSTANCE),
                              (0, o.ZDy)(async () => {
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
                                          ((l = P({}, n)),
                                          (i = i =
                                              {
                                                  channelType: E.d4z.GUILD_STAGE_VOICE,
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
