n.d(t, { Z: () => w }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(668339),
    c = n(481060),
    u = n(933557),
    d = n(592125),
    g = n(430824),
    m = n(496675),
    x = n(699516),
    h = n(594174),
    v = n(924301),
    p = n(518756),
    f = n(545165),
    j = n(884746),
    b = n(274311),
    y = n(230900),
    O = n(366815),
    E = n(765305),
    N = n(981631),
    C = n(388032),
    P = n(138324);
let S = (e) => {
        let { guildId: t, channelType: n, channel: r, onSelectChannel: i, disabled: a, entityType: s } = e,
            g = n === N.d4z.GUILD_STAGE_VOICE,
            m = (0, b.Q)(r, s),
            v = (0, f.sR)(t, n);
        return (0, l.jsx)(o.d, {
            label: g ? C.intl.string(C.t.S7GjDz) : C.intl.string(C.t["7RYWCP"]),
            required: !0,
            helperText: m ? void 0 : C.intl.string(C.t.F3bDaX),
            value: null == r ? void 0 : r.id,
            options: v.map((e) => ({
                value: e.id,
                label: (0, u.F6)(e, h.default, x.Z, !0),
            })),
            onChange: (e) => {
                let t = v.find((t) => t.id === e);
                i(null != t ? t : void 0);
            },
            renderOptionPrefix: (e) =>
                ((e, t) => {
                    let n = d.Z.getChannel(e);
                    if (null == n) return null;
                    let r = n.type === N.d4z.GUILD_STAGE_VOICE,
                        i = (0, b.Q)(n, t),
                        a = i ? c.gj8 : c.gjC,
                        s = i ? c.ewx : c.pki;
                    return (0, l.jsx)(r ? s : a, {
                        color: "currentColor",
                        size: "md",
                        className: P.channelOptionIcon,
                    });
                })(null == e ? void 0 : e.value, s),
            isDisabled: a,
        });
    },
    I = (e, t) => (n) => {
        let l = {
            entityType: n,
            scheduledEndTime: void 0,
        };
        if (n === E.WX.EXTERNAL) {
            var r;
            l.scheduledEndTime = (null != (r = a()(t.scheduledStartTime)) ? r : a()()).add(2, "hour").toISOString();
        }
        e(l);
    };
function Z(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: o, channelId: u } = n,
        g = (0, s.e7)([d.Z], () => d.Z.getChannel(u), [u]),
        m = r.useRef(null);
    r.useEffect(() => {
        if (a && o === E.WX.EXTERNAL) {
            var e;
            null == (e = m.current) || e.focus();
        }
    }, [a, o]);
    let x = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        h = (0, y.xV)(n),
        p = (0, y.xC)(o),
        f = (0, v.xt)(n);
    return null == o || o === E.WX.NONE
        ? null
        : o === E.WX.EXTERNAL
          ? (0, l.jsx)(c.oil, {
                label: C.intl.string(C.t.yx785A),
                required: !0,
                onChange: (e) => {
                    i({ entityMetadata: { location: e } });
                },
                placeholder: C.intl.string(C.t.mkCMia),
                maxLength: E.gG,
                value: null != h ? h : "",
                inputRef: m,
            })
          : null == p
            ? null
            : (0, l.jsx)(S, {
                  guildId: t,
                  channelType: p,
                  onSelectChannel: x,
                  channel: g,
                  entityType: o,
                  disabled: f,
              });
}
function T(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([g.Z], () => g.Z.getGuild(t), [t]),
        o = (0, p.Z)(t, void 0),
        u = (0, p.Z)(t, N.d4z.GUILD_VOICE),
        d = (0, p.Z)(t, N.d4z.GUILD_STAGE_VOICE),
        m = (0, f.sR)(t, N.d4z.GUILD_VOICE),
        x = (0, j.q)(a),
        h = null == a ? void 0 : a.features.has(N.GuildFeatures.COMMUNITY),
        b = (0, v.xt)(n),
        y = I(i, n),
        O = r.useMemo(() => {
            let e = !u || 0 === m.length,
                t = u ? C.intl.string(C.t["DkY+cO"]) : C.intl.string(C.t.HeF1kV),
                n = [
                    {
                        name: C.intl.string(C.t.BVZqJl),
                        value: E.WX.VOICE,
                        desc: e ? t : C.intl.string(C.t["EV//4f"]),
                        leadingIcon: c.gj8,
                        disabled: e,
                    },
                    {
                        name: C.intl.string(C.t.w7ipbz),
                        value: E.WX.EXTERNAL,
                        desc: o ? C.intl.string(C.t.DYxrHm) : C.intl.string(C.t.HeF1kV),
                        leadingIcon: c._tJ,
                        disabled: !o,
                    },
                ];
            if (h) {
                let e = !d || 0 === x.length,
                    t = d ? C.intl.string(C.t["DkY+cO"]) : C.intl.string(C.t.HeF1kV);
                return [
                    {
                        name: C.intl.string(C.t.EErMzA),
                        value: E.WX.STAGE_INSTANCE,
                        desc: e ? t : C.intl.string(C.t.LgALpp),
                        leadingIcon: c.ewx,
                        disabled: e,
                    },
                    ...n,
                ];
            }
            return n;
        }, [o, u, d, h, m.length, x.length]);
    return (0, l.jsx)(c.FXm, {
        value: n.entityType,
        options: O,
        onChange: y,
        disabled: b,
        helperText: b ? C.intl.string(C.t.yutP5U) : void 0,
    });
}
function w(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: a, isSlideReady: o = !1 } = e,
        { entityType: u } = r,
        d = (0, s.e7)([g.Z], () => g.Z.getGuild(t), [t]),
        x = (0, j.q)(d),
        h = (0, s.e7)([m.Z], () => m.Z.can(N.Plq.MANAGE_CHANNELS, d)),
        v = null == d ? void 0 : d.features.has(N.GuildFeatures.COMMUNITY),
        p = I(a, r),
        f = v && u !== E.WX.EXTERNAL && 0 === x.length && h && null != u;
    return (0, l.jsxs)("div", {
        className: P.container,
        children: [
            (0, l.jsxs)(c.Kqy, {
                gap: 4,
                children: [
                    (0, l.jsx)(c.Heading, {
                        variant: "heading-xl/semibold",
                        children: C.intl.string(C.t["DC+Qm8"]),
                    }),
                    (0, l.jsx)(c.Text, {
                        color: "text-subtle",
                        variant: "text-sm/normal",
                        children: C.intl.string(C.t.IwmXLP),
                    }),
                ],
            }),
            (0, l.jsx)(T, {
                guildId: t,
                guildEvent: r,
                onChange: a,
            }),
            (0, l.jsx)(Z, {
                guildId: t,
                guildEvent: r,
                isFocusReady: o,
                onChange: a,
            }),
            f
                ? (0, l.jsx)(O.Z, {
                      onClick: () => {
                          p(E.WX.STAGE_INSTANCE),
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("38697"),
                                      n.e("33285"),
                                      n.e("29497"),
                                      n.e("60565"),
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
                                                  channelType: N.d4z.GUILD_STAGE_VOICE,
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
