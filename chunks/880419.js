n.d(t, { ZP: () => O });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(159691),
    s = n(481060),
    c = n(762762),
    u = n(973772),
    d = n(279604),
    p = n(535396),
    h = n(149829),
    f = n(388032),
    g = n(362320);
function m(e) {
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
function b(e) {
    let { cost: t } = e;
    return (0, r.jsxs)("div", {
        className: g.tooltipContainer,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-xs/semibold",
                children: f.intl.string(h.default.TZsu1U),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-xs/medium",
                children: f.intl.formatToPlainString(h.default["5HQUzD"], { boostCount: t }),
            }),
        ],
    });
}
function _(e) {
    let { guildId: t, powerup: n } = e,
        i = (0, u.ZP)(t, n);
    if (i.type === p.A3.LEVEL_ACTIVATED) {
        var l, o;
        return (0, r.jsxs)("div", {
            className: g.tooltipContainer,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-xs/semibold",
                    children: f.intl.string(h.default["9oYuvb"]),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    children: f.intl.formatToPlainString(h.default.WRRYUT, {
                        perkName:
                            null != (o = null == (l = i.sourcePowerup) ? void 0 : l.title)
                                ? o
                                : f.intl.string(f.t.BfF6ED),
                    }),
                }),
            ],
        });
    }
    if (i.type === p.A3.POWERUP_ACTIVATED) return (0, r.jsx)(b, { cost: n.cost });
}
function O(e) {
    let { guildId: t, powerup: n, compact: l, iconSize: b, size: O, grow: y, className: j, onError: v } = e,
        { onActivate: x, isLoading: C, error: E, onShowDeactivate: S } = (0, d.ZP)(t, n),
        I = (0, u.ZP)(t, n).type !== p.A3.INACTIVE,
        { disabled: P, reason: N } = (0, c.Z)(t, n, I);
    return (
        i.useEffect(() => {
            null == v || v(E);
        }, [E, v]),
        (0, r.jsx)(s.aML, {
            delay: 100,
            "aria-label": null != N ? N : I ? f.intl.string(h.default.TZsu1U) : void 0,
            text:
                null != N
                    ? N
                    : I
                      ? (0, r.jsx)(_, {
                            guildId: t,
                            powerup: n,
                        })
                      : void 0,
            children: (e) => {
                var t, i;
                return (0, r.jsx)(
                    "div",
                    ((t = m({}, e)),
                    (i = i =
                        {
                            className: o()(
                                g.secondaryButton,
                                {
                                    [g.buttonWrapper]: y,
                                    [g.noGrow]: !y,
                                },
                                j,
                            ),
                            children: (() => {
                                let { text: e, icon: t } = (function (e) {
                                    let { cost: t, isActive: n, compact: i, iconSize: l } = e,
                                        o = null != l ? l : "sm",
                                        a = n ? s.zkc : s.Ucv;
                                    return i
                                        ? {
                                              text: t.toString(),
                                              icon: a,
                                          }
                                        : {
                                              text: f.intl.format(n ? h.default.uzQpQd : h.default.ad2Mfj, {
                                                  boostCount: t,
                                                  dotHook: () =>
                                                      (0, r.jsx)("span", {
                                                          className: g.dot,
                                                          children: "\u2022",
                                                      }),
                                                  boostIconHook: () =>
                                                      (0, r.jsx)(a, {
                                                          size: o,
                                                          color: "currentColor",
                                                          className: g.boostIcon,
                                                      }),
                                              }),
                                          };
                                })({
                                    cost: n.cost,
                                    isActive: I,
                                    compact: l,
                                    iconSize: b,
                                });
                                return (0, r.jsx)(
                                    a.zxk,
                                    m(
                                        {
                                            variant: I ? "secondary" : "primary",
                                            "aria-label": f.intl.string(I ? h.default.TZsu1U : h.default.gSxlHf),
                                            disabled: P,
                                            onClick: I ? S : x,
                                            loading: C,
                                            fullWidth: y,
                                            size: null != O ? O : l ? "md" : void 0,
                                            text: e,
                                            minWidth: 0,
                                        },
                                        l ? { icon: t } : {},
                                    ),
                                );
                            })(),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    t),
                );
            },
        })
    );
}
