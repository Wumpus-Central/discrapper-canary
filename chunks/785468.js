n.d(t, { Z: () => A }), n(388685);
var l = n(951288),
    r = n(647438),
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
    p = n(518756),
    f = n(545165),
    j = n(884746),
    y = n(274311),
    b = n(230900),
    E = n(366815),
    N = n(765305),
    O = n(981631),
    C = n(388032),
    S = n(138324);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let Z = (e) => {
    let { guildId: t, channelType: n, channel: r, onSelectChannel: i, disabled: a, entityType: s } = e,
        o = n === O.d4z.GUILD_STAGE_VOICE,
        x = (0, y.Q)(r, s),
        m = (0, f.sR)(t, n);
    return (0, l.jsxs)(c.xJW, {
        title: o ? C.intl.string(C.t.S7GjDw) : C.intl.string(C.t["7RYWCA"]),
        className: S.options,
        disabled: a,
        required: !0,
        children: [
            (0, l.jsx)(c.VcW, {
                value: null == r ? void 0 : r.id,
                options: m.map((e) => ({
                    value: e.id,
                    label: (0, u.F6)(e, v.default, g.Z, !0),
                })),
                onChange: (e) => {
                    let t = m.find((t) => t.id === e);
                    i(null != t ? t : void 0);
                },
                renderOptionPrefix: (e) =>
                    ((e, t) => {
                        let n = d.Z.getChannel(e);
                        if (null == n) return null;
                        let r = n.type === O.d4z.GUILD_STAGE_VOICE,
                            i = (0, y.Q)(n, t),
                            a = i ? c.gj8 : c.gjC,
                            s = i ? c.ewx : c.pki;
                        return (0, l.jsx)(r ? s : a, {
                            color: "currentColor",
                            size: "md",
                            className: S.channelOptionIcon,
                        });
                    })(null == e ? void 0 : e.value, s),
                isDisabled: a,
            }),
            !x &&
                (0, l.jsx)(c.Text, {
                    color: "header-secondary",
                    className: S.channelPrivate,
                    variant: "text-sm/normal",
                    children: C.intl.string(C.t.F3bDaW),
                }),
        ],
    });
};
function I(e, t, n, l) {
    return t
        ? {
              disabled: !0,
              tooltipText: C.intl.string(C.t.yutP5e),
          }
        : n
          ? 0 === l && e !== N.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: C.intl.string(C.t["DkY+cH"]),
                }
              : {
                    disabled: !1,
                    tooltipText: null,
                }
          : {
                disabled: !0,
                tooltipText: C.intl.string(C.t.HeF1kZ),
            };
}
let P = (e, t) => (n) => {
    let { value: l } = n,
        r = {
            entityType: l,
            scheduledEndTime: void 0,
        };
    if (l === N.WX.EXTERNAL) {
        var i;
        r.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, "hour").toISOString();
    }
    e(r);
};
function w(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: o, channelId: u } = n,
        x = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]),
        m = r.useRef(null);
    r.useEffect(() => {
        if (a && o === N.WX.EXTERNAL) {
            var e;
            null == (e = m.current) || e.focus();
        }
    }, [a, o]);
    let g = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        v = (0, b.xV)(n),
        p = (0, b.xC)(o),
        f = (0, h.xt)(n);
    return null == o || o === N.WX.NONE
        ? null
        : o === N.WX.EXTERNAL
          ? (0, l.jsx)(c.xJW, {
                title: C.intl.string(C.t.yx785O),
                className: S.options,
                required: !0,
                children: (0, l.jsx)(c.oil, {
                    onChange: (e) => {
                        i({ entityMetadata: { location: e } });
                    },
                    placeholder: C.intl.string(C.t.mkCMiY),
                    maxLength: N.gG,
                    value: null != v ? v : "",
                    inputRef: m,
                }),
            })
          : null == p
            ? null
            : (0, l.jsx)(Z, {
                  guildId: t,
                  channelType: p,
                  onSelectChannel: g,
                  channel: x,
                  entityType: o,
                  disabled: f,
              });
}
function D(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]),
        u = (0, p.Z)(t, void 0),
        d = (0, p.Z)(t, O.d4z.GUILD_VOICE),
        m = (0, p.Z)(t, O.d4z.GUILD_STAGE_VOICE),
        g = (0, f.sR)(t, O.d4z.GUILD_VOICE),
        v = (0, j.q)(a),
        y = null == a ? void 0 : a.features.has(O.oNc.COMMUNITY),
        b = (0, h.xt)(n),
        E = P(i, n),
        Z = r.useMemo(() => {
            let e = [
                T(
                    {
                        name: C.intl.string(C.t.BVZqJi),
                        value: N.WX.VOICE,
                        desc: C.intl.string(C.t["EV//4e"]),
                        icon: c.gj8,
                    },
                    I(N.WX.VOICE, b, d, g.length),
                ),
                T(
                    {
                        name: C.intl.string(C.t.w7ipb2),
                        value: N.WX.EXTERNAL,
                        desc: C.intl.string(C.t.DYxrHh),
                        icon: c._tJ,
                    },
                    I(N.WX.EXTERNAL, b, u, 0),
                ),
            ];
            return y
                ? [
                      T(
                          {
                              name: C.intl.string(C.t.EErMzM),
                              value: N.WX.STAGE_INSTANCE,
                              desc: C.intl.string(C.t.LgALpq),
                              icon: c.ewx,
                          },
                          I(N.WX.STAGE_INSTANCE, b, m, v.length),
                      ),
                      ...e,
                  ]
                : e;
        }, [u, d, m, y, g.length, v.length, b]);
    return (0, l.jsx)(o.Gu, {
        value: n.entityType,
        options: Z,
        onChange: E,
        className: S.options,
    });
}
function A(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: a, isSlideReady: o = !1 } = e,
        { entityType: u } = r,
        d = (0, s.e7)([x.Z], () => x.Z.getGuild(t), [t]),
        g = (0, j.q)(d),
        v = (0, s.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_CHANNELS, d)),
        h = null == d ? void 0 : d.features.has(O.oNc.COMMUNITY),
        p = P(a, r),
        f = h && u !== N.WX.EXTERNAL && 0 === g.length && v && null != u;
    return (0, l.jsxs)("div", {
        className: S.container,
        children: [
            (0, l.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                className: S.header,
                children: C.intl.string(C.t["DC+Qm5"]),
            }),
            (0, l.jsx)(c.Text, {
                color: "header-secondary",
                className: S.text,
                variant: "text-sm/normal",
                children: C.intl.string(C.t.IwmXLC),
            }),
            (0, l.jsx)(D, {
                guildId: t,
                guildEvent: r,
                onChange: a,
            }),
            (0, l.jsx)(w, {
                guildId: t,
                guildEvent: r,
                isFocusReady: o,
                onChange: a,
            }),
            f
                ? (0, l.jsx)(E.Z, {
                      onClick: () => {
                          p({
                              value: N.WX.STAGE_INSTANCE,
                              name: C.intl.string(C.t.EErMzM),
                          }),
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("33285"),
                                      n.e("38697"),
                                      n.e("45094"),
                                      n.e("12334"),
                                  ]).then(n.bind(n, 218613));
                                  return (n) => {
                                      var r, i;
                                      return (0, l.jsx)(
                                          e,
                                          ((r = T({}, n)),
                                          (i = i =
                                              {
                                                  channelType: O.d4z.GUILD_STAGE_VOICE,
                                                  guildId: t,
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
                                          r),
                                      );
                                  };
                              });
                      },
                  })
                : null,
        ],
    });
}
