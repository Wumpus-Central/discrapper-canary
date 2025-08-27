n.d(t, { Z: () => D }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(913527),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(933557),
    u = n(592125),
    d = n(430824),
    x = n(496675),
    m = n(699516),
    g = n(594174),
    v = n(924301),
    h = n(518756),
    p = n(545165),
    f = n(884746),
    j = n(274311),
    y = n(230900),
    b = n(366815),
    E = n(765305),
    N = n(981631),
    O = n(388032),
    C = n(138324);
function S(e) {
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
let T = (e) => {
    let { guildId: t, channelType: n, channel: r, onSelectChannel: i, disabled: a, entityType: s } = e,
        d = n === N.d4z.GUILD_STAGE_VOICE,
        x = (0, j.Q)(r, s),
        v = (0, p.sR)(t, n);
    return (0, l.jsxs)(o.xJW, {
        title: d ? O.intl.string(O.t.S7GjDw) : O.intl.string(O.t["7RYWCA"]),
        className: C.options,
        disabled: a,
        required: !0,
        children: [
            (0, l.jsx)(o.VcW, {
                value: null == r ? void 0 : r.id,
                options: v.map((e) => ({
                    value: e.id,
                    label: (0, c.F6)(e, g.default, m.Z, !0),
                })),
                onChange: (e) => {
                    let t = v.find((t) => t.id === e);
                    i(null != t ? t : void 0);
                },
                renderOptionPrefix: (e) =>
                    ((e, t) => {
                        let n = u.Z.getChannel(e);
                        if (null == n) return null;
                        let r = n.type === N.d4z.GUILD_STAGE_VOICE,
                            i = (0, j.Q)(n, t),
                            a = i ? o.gj8 : o.gjC,
                            s = i ? o.ewx : o.pki;
                        return (0, l.jsx)(r ? s : a, {
                            color: "currentColor",
                            size: "md",
                            className: C.channelOptionIcon,
                        });
                    })(null == e ? void 0 : e.value, s),
                isDisabled: a,
            }),
            !x &&
                (0, l.jsx)(o.Text, {
                    color: "header-secondary",
                    className: C.channelPrivate,
                    variant: "text-sm/normal",
                    children: O.intl.string(O.t.F3bDaW),
                }),
        ],
    });
};
function Z(e, t, n, l) {
    return t
        ? {
              disabled: !0,
              tooltipText: O.intl.string(O.t.yutP5e),
          }
        : n
          ? 0 === l && e !== E.WX.EXTERNAL
              ? {
                    disabled: !0,
                    tooltipText: O.intl.string(O.t["DkY+cH"]),
                }
              : {
                    disabled: !1,
                    tooltipText: null,
                }
          : {
                disabled: !0,
                tooltipText: O.intl.string(O.t.HeF1kZ),
            };
}
let I = (e, t) => (n) => {
    let { value: l } = n,
        r = {
            entityType: l,
            scheduledEndTime: void 0,
        };
    if (l === E.WX.EXTERNAL) {
        var i;
        r.scheduledEndTime = (null != (i = a()(t.scheduledStartTime)) ? i : a()()).add(2, "hour").toISOString();
    }
    e(r);
};
function P(e) {
    let { guildId: t, guildEvent: n, onChange: i, isFocusReady: a } = e,
        { entityType: c, channelId: d } = n,
        x = (0, s.e7)([u.Z], () => u.Z.getChannel(d), [d]),
        m = r.useRef(null);
    r.useEffect(() => {
        if (a && c === E.WX.EXTERNAL) {
            var e;
            null == (e = m.current) || e.focus();
        }
    }, [a, c]);
    let g = (e) => {
            var t;
            i({ channelId: null != (t = null == e ? void 0 : e.id) ? t : null });
        },
        h = (0, y.xV)(n),
        p = (0, y.xC)(c),
        f = (0, v.xt)(n);
    return null == c || c === E.WX.NONE
        ? null
        : c === E.WX.EXTERNAL
          ? (0, l.jsx)(o.xJW, {
                title: O.intl.string(O.t.yx785O),
                className: C.options,
                required: !0,
                children: (0, l.jsx)(o.oil, {
                    onChange: (e) => {
                        i({ entityMetadata: { location: e } });
                    },
                    placeholder: O.intl.string(O.t.mkCMiY),
                    maxLength: E.gG,
                    value: null != h ? h : "",
                    inputRef: m,
                }),
            })
          : null == p
            ? null
            : (0, l.jsx)(T, {
                  guildId: t,
                  channelType: p,
                  onSelectChannel: g,
                  channel: x,
                  entityType: c,
                  disabled: f,
              });
}
function w(e) {
    let { guildId: t, guildEvent: n, onChange: i } = e,
        a = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        c = (0, h.Z)(t, void 0),
        u = (0, h.Z)(t, N.d4z.GUILD_VOICE),
        x = (0, h.Z)(t, N.d4z.GUILD_STAGE_VOICE),
        m = (0, p.sR)(t, N.d4z.GUILD_VOICE),
        g = (0, f.q)(a),
        j = null == a ? void 0 : a.features.has(N.oNc.COMMUNITY),
        y = (0, v.xt)(n),
        b = I(i, n),
        T = r.useMemo(() => {
            let e = [
                S(
                    {
                        name: O.intl.string(O.t.BVZqJi),
                        value: E.WX.VOICE,
                        desc: O.intl.string(O.t["EV//4e"]),
                        icon: o.gj8,
                    },
                    Z(E.WX.VOICE, y, u, m.length),
                ),
                S(
                    {
                        name: O.intl.string(O.t.w7ipb2),
                        value: E.WX.EXTERNAL,
                        desc: O.intl.string(O.t.DYxrHh),
                        icon: o._tJ,
                    },
                    Z(E.WX.EXTERNAL, y, c, 0),
                ),
            ];
            return j
                ? [
                      S(
                          {
                              name: O.intl.string(O.t.EErMzM),
                              value: E.WX.STAGE_INSTANCE,
                              desc: O.intl.string(O.t.LgALpq),
                              icon: o.ewx,
                          },
                          Z(E.WX.STAGE_INSTANCE, y, x, g.length),
                      ),
                      ...e,
                  ]
                : e;
        }, [c, u, x, j, m.length, g.length, y]);
    return (0, l.jsx)(o.FXm, {
        value: n.entityType,
        options: T,
        onChange: b,
        className: C.options,
    });
}
function D(e) {
    let { guildId: t, guildEvent: r, validationErrorMessage: i, onChange: a, isSlideReady: c = !1 } = e,
        { entityType: u } = r,
        m = (0, s.e7)([d.Z], () => d.Z.getGuild(t), [t]),
        g = (0, f.q)(m),
        v = (0, s.e7)([x.Z], () => x.Z.can(N.Plq.MANAGE_CHANNELS, m)),
        h = null == m ? void 0 : m.features.has(N.oNc.COMMUNITY),
        p = I(a, r),
        j = h && u !== E.WX.EXTERNAL && 0 === g.length && v && null != u;
    return (0, l.jsxs)("div", {
        className: C.container,
        children: [
            (0, l.jsx)(o.X6q, {
                variant: "heading-xl/semibold",
                className: C.header,
                children: O.intl.string(O.t["DC+Qm5"]),
            }),
            (0, l.jsx)(o.Text, {
                color: "header-secondary",
                className: C.text,
                variant: "text-sm/normal",
                children: O.intl.string(O.t.IwmXLC),
            }),
            (0, l.jsx)(w, {
                guildId: t,
                guildEvent: r,
                onChange: a,
            }),
            (0, l.jsx)(P, {
                guildId: t,
                guildEvent: r,
                isFocusReady: c,
                onChange: a,
            }),
            j
                ? (0, l.jsx)(b.Z, {
                      onClick: () => {
                          p({
                              value: E.WX.STAGE_INSTANCE,
                              name: O.intl.string(O.t.EErMzM),
                          }),
                              (0, o.ZDy)(async () => {
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
                                          ((r = S({}, n)),
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
