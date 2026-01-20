n.d(t, { Z: () => T }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    u = n(592125),
    d = n(430824),
    g = n(496675),
    x = n(699516),
    m = n(594174),
    h = n(924301),
    v = n(518756),
    f = n(545165),
    p = n(884746),
    j = n(274311),
    b = n(230900),
    y = n(366815),
    O = n(765305),
    E = n(981631),
    N = n(388032),
    C = n(615017);
let P = (e) => {
        let { guildId: t, channelType: n, channel: r, onSelectChannel: i, disabled: a, entityType: s } = e,
            d = n === E.d4z.GUILD_STAGE_VOICE,
            g = (0, j.Q)(r, s),
            h = (0, f.sR)(t, n);
        return (0, l.jsx)(o.VcW, {
            selectionMode: "single",
            label: d ? N.intl.string(N.t.S7GjDz) : N.intl.string(N.t["7RYWCP"]),
            required: !0,
            helperText: g ? void 0 : N.intl.string(N.t.F3bDaX),
            value: null == r ? void 0 : r.id,
            options: h.map((e) => ({
                id: e.id,
                value: e.id,
                label: (0, c.F6)(e, m.default, x.Z, !0),
                leading: ((e, t) => {
                    let n = u.Z.getChannel(e);
                    if (null == n) return null;
                    let r = n.type === E.d4z.GUILD_STAGE_VOICE,
                        i = (0, j.Q)(n, t),
                        a = i ? o.gj8 : o.gjC,
                        s = i ? o.ewx : o.pki;
                    return (0, l.jsx)(r ? s : a, {
                        color: "currentColor",
                        size: "md",
                        className: C.channelOptionIcon,
                    });
                })(e.id, s),
            })),
            onSelectionChange: (e) => {
                let t = h.find((t) => t.id === e);
                i(null != t ? t : void 0);
            },
            disabled: a,
        });
    },
    S = (e, t) => (n) => {
        let l = {
            entityType: n,
            scheduledEndTime: void 0,
        };
        if (n === O.WX.EXTERNAL) {
            var r;
            l.scheduledEndTime = (null != (r = a()(t.scheduledStartTime)) ? r : a()()).add(2, "hour").toISOString();
        }
        e(l);
    };
function I(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: c, channelId: d } = n,
        g = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]),
        x = r.useRef(null);
    r.useEffect(() => {
        if (a && c === O.WX.EXTERNAL) {
            var e;
            null == (e = x.current) || e.focus();
        }
    }, [a, c]);
    let m = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        v = (0, b.xV)(n),
        f = (0, b.xC)(c),
        p = (0, h.xt)(n);
    return null == c || c === O.WX.NONE
        ? null
        : c === O.WX.EXTERNAL
          ? (0, l.jsx)(o.oil, {
                label: N.intl.string(N.t.yx785A),
                required: !0,
                onChange: (e) => {
                    i({ entityMetadata: { location: e } });
                },
                placeholder: N.intl.string(N.t.mkCMia),
                maxLength: O.gG,
                value: null != v ? v : "",
                inputRef: x,
            })
          : null == f
            ? null
            : (0, l.jsx)(P, {
                  guildId: t,
                  channelType: f,
                  onSelectChannel: m,
                  channel: g,
                  entityType: c,
                  disabled: p,
              });
}
function Z(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        c = (0, v.Z)(t, void 0),
        u = (0, v.Z)(t, E.d4z.GUILD_VOICE),
        g = (0, v.Z)(t, E.d4z.GUILD_STAGE_VOICE),
        x = (0, f.sR)(t, E.d4z.GUILD_VOICE),
        m = (0, p.q)(a),
        j = null == a ? void 0 : a.features.has(E.GuildFeatures.COMMUNITY),
        b = (0, h.xt)(n),
        y = S(i, n),
        C = r.useMemo(() => {
            let e = !u || 0 === x.length,
                t = u ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV),
                n = [
                    {
                        name: N.intl.string(N.t.BVZqJl),
                        value: O.WX.VOICE,
                        desc: e ? t : N.intl.string(N.t["EV//4f"]),
                        leadingIcon: o.gj8,
                        disabled: e,
                    },
                    {
                        name: N.intl.string(N.t.w7ipbz),
                        value: O.WX.EXTERNAL,
                        desc: c ? N.intl.string(N.t.DYxrHm) : N.intl.string(N.t.HeF1kV),
                        leadingIcon: o._tJ,
                        disabled: !c,
                    },
                ];
            if (j) {
                let e = !g || 0 === m.length,
                    t = g ? N.intl.string(N.t["DkY+cO"]) : N.intl.string(N.t.HeF1kV);
                return [
                    {
                        name: N.intl.string(N.t.EErMzA),
                        value: O.WX.STAGE_INSTANCE,
                        desc: e ? t : N.intl.string(N.t.LgALpp),
                        leadingIcon: o.ewx,
                        disabled: e,
                    },
                    ...n,
                ];
            }
            return n;
        }, [c, u, g, j, x.length, m.length]);
    return (0, l.jsx)(o.FXm, {
        value: n.entityType,
        options: C,
        onChange: y,
        disabled: b,
        helperText: b ? N.intl.string(N.t.yutP5U) : void 0,
    });
}
function T(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: u } = r,
        x = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        m = (0, p.q)(x),
        h = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_CHANNELS, x)),
        v = null == x ? void 0 : x.features.has(E.GuildFeatures.COMMUNITY),
        f = S(a, r),
        j = v && u !== O.WX.EXTERNAL && 0 === m.length && h && null != u;
    return (0, l.jsxs)("div", {
        className: C.container,
        children: [
            (0, l.jsxs)(o.Kqy, {
                gap: 4,
                children: [
                    (0, l.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t["DC+Qm8"]),
                    }),
                    (0, l.jsx)(o.Text, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: N.intl.string(N.t.IwmXLP),
                    }),
                ],
            }),
            (0, l.jsx)(Z, {
                guildId: t,
                guildEvent: r,
                onChange: a,
            }),
            (0, l.jsx)(I, {
                guildId: t,
                guildEvent: r,
                isFocusReady: c,
                onChange: a,
            }),
            j
                ? (0, l.jsx)(y.Z, {
                      onClick: () => {
                          f(O.WX.STAGE_INSTANCE),
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("33285"),
                                      n.e("38697"),
                                      n.e("29497"),
                                      n.e("71099"),
                                  ]).then(n.bind(n, 241865));
                                  return (n) => {
                                      var r, i;
                                      return (0, l.jsx)(
                                          e,
                                          ((r = (function (e) {
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
                                          })({}, n)),
                                          (i = i =
                                              {
                                                  channelType: E.d4z.GUILD_STAGE_VOICE,
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
