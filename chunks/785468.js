n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(933557),
    d = n(592125),
    m = n(430824),
    x = n(496675),
    g = n(699516),
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
    I = n(138324);
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
        o = n === N.d4z.GUILD_STAGE_VOICE,
        m = (0, b.Q)(l, s),
        x = (0, f.sR)(t, n);
    return (0, r.jsxs)(c.xJW, {
        title: o ? C.intl.string(C.t.S7GjDw) : C.intl.string(C.t["7RYWCA"]),
        className: I.options,
        disabled: a,
        required: !0,
        children: [
            (0, r.jsx)(c.VcW, {
                value: null == l ? void 0 : l.id,
                options: x.map((e) => ({
                    value: e.id,
                    label: (0, u.F6)(e, h.default, g.Z, !0),
                })),
                onChange: (e) => {
                    let t = x.find((t) => t.id === e);
                    i(null != t ? t : void 0);
                },
                renderOptionPrefix: (e) =>
                    ((e, t) => {
                        let n = d.Z.getChannel(e);
                        if (null == n) return null;
                        let l = n.type === N.d4z.GUILD_STAGE_VOICE,
                            i = (0, b.Q)(n, t),
                            a = i ? c.gj8 : c.gjC,
                            s = i ? c.ewx : c.pki;
                        return (0, r.jsx)(l ? s : a, {
                            color: "currentColor",
                            size: "md",
                            className: I.channelOptionIcon,
                        });
                    })(null == e ? void 0 : e.value, s),
                isDisabled: a,
            }),
            !m &&
                (0, r.jsx)(c.Text, {
                    color: "header-secondary",
                    className: I.channelPrivate,
                    variant: "text-sm/normal",
                    children: C.intl.string(C.t.F3bDaW),
                }),
        ],
    });
};
function P(e, t, n, r) {
    return t
        ? {
              disabled: !0,
              tooltipText: C.intl.string(C.t.yutP5e),
          }
        : n
          ? 0 === r && e !== E.WX.EXTERNAL
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
function Z(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: u, channelId: m } = n,
        x = (0, s.e7)([d.Z], () => d.Z.getChannel(m), [m]),
        g = l.useRef(null);
    l.useEffect(() => {
        if (a && u === E.WX.EXTERNAL) {
            var e;
            null == (e = g.current) || e.focus();
        }
    }, [a, u]);
    let h = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        p = (0, y.xV)(n),
        f = (0, y.xC)(u),
        j = (0, v.xt)(n);
    return null == u || u === E.WX.NONE
        ? null
        : u === E.WX.EXTERNAL
          ? (0, r.jsx)(c.xJW, {
                title: C.intl.string(C.t.yx785O),
                className: I.options,
                required: !0,
                children: (0, r.jsx)(o.Is, {
                    className: I.__invalid_textInput,
                    onChange: (e) => {
                        i({ entityMetadata: { location: e } });
                    },
                    placeholder: C.intl.string(C.t.mkCMiY),
                    maxLength: E.gG,
                    value: null != p ? p : "",
                    inputRef: g,
                }),
            })
          : null == f
            ? null
            : (0, r.jsx)(T, {
                  guildId: t,
                  channelType: f,
                  onSelectChannel: h,
                  channel: x,
                  entityType: u,
                  disabled: j,
              });
}
function D(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        o = (0, p.Z)(t, void 0),
        u = (0, p.Z)(t, N.d4z.GUILD_VOICE),
        d = (0, p.Z)(t, N.d4z.GUILD_STAGE_VOICE),
        x = (0, f.sR)(t, N.d4z.GUILD_VOICE),
        g = (0, j.q)(a),
        h = null == a ? void 0 : a.features.has(N.oNc.COMMUNITY),
        b = (0, v.xt)(n),
        y = w(i, n),
        O = l.useMemo(() => {
            let e = [
                S(
                    {
                        name: C.intl.string(C.t.BVZqJi),
                        value: E.WX.VOICE,
                        desc: C.intl.string(C.t["EV//4e"]),
                        icon: c.gj8,
                    },
                    P(E.WX.VOICE, b, u, x.length),
                ),
                S(
                    {
                        name: C.intl.string(C.t.w7ipb2),
                        value: E.WX.EXTERNAL,
                        desc: C.intl.string(C.t.DYxrHh),
                        icon: c._tJ,
                    },
                    P(E.WX.EXTERNAL, b, o, 0),
                ),
            ];
            return h
                ? [
                      S(
                          {
                              name: C.intl.string(C.t.EErMzM),
                              value: E.WX.STAGE_INSTANCE,
                              desc: C.intl.string(C.t.LgALpq),
                              icon: c.ewx,
                          },
                          P(E.WX.STAGE_INSTANCE, b, d, g.length),
                      ),
                      ...e,
                  ]
                : e;
        }, [o, u, d, h, x.length, g.length, b]);
    return (0, r.jsx)(c.FXm, {
        value: n.entityType,
        options: O,
        onChange: y,
        className: I.options,
    });
}
function _(e) {
    let { guildId: t, guildEvent: l, validationErrorMessage: i, onChange: a, isSlideReady: o = !1 } = e,
        { entityType: u } = l,
        d = (0, s.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        g = (0, j.q)(d),
        h = (0, s.e7)([x.Z], () => x.Z.can(N.Plq.MANAGE_CHANNELS, d)),
        v = null == d ? void 0 : d.features.has(N.oNc.COMMUNITY),
        p = w(a, l),
        f = v && u !== E.WX.EXTERNAL && 0 === g.length && h && null != u;
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            (0, r.jsx)(c.X6q, {
                variant: "heading-xl/semibold",
                className: I.header,
                children: C.intl.string(C.t["DC+Qm5"]),
            }),
            (0, r.jsx)(c.Text, {
                color: "header-secondary",
                className: I.text,
                variant: "text-sm/normal",
                children: C.intl.string(C.t.IwmXLC),
            }),
            (0, r.jsx)(D, {
                guildId: t,
                guildEvent: l,
                onChange: a,
            }),
            (0, r.jsx)(Z, {
                guildId: t,
                guildEvent: l,
                isFocusReady: o,
                onChange: a,
            }),
            f
                ? (0, r.jsx)(O.Z, {
                      onClick: () => {
                          p({
                              value: E.WX.STAGE_INSTANCE,
                              name: C.intl.string(C.t.EErMzM),
                          }),
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await Promise.all([n.e("45094"), n.e("10123")]).then(
                                      n.bind(n, 218613),
                                  );
                                  return (n) => {
                                      var l, i;
                                      return (0, r.jsx)(
                                          e,
                                          ((l = S({}, n)),
                                          (i = i =
                                              {
                                                  channelType: N.d4z.GUILD_STAGE_VOICE,
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
