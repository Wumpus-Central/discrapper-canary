n.d(t, {
    Po: () => y,
    RD: () => O,
    ZP: () => v,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(755721),
    s = n(481060),
    c = n(762762),
    u = n(973772),
    d = n(279604),
    p = n(535396),
    f = n(989308),
    h = n(388032),
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { cost: t, isActive: n, compact: i, iconSize: l } = e,
        o = null != l ? l : "sm",
        a = n
            ? (0, r.jsx)(s.mTd, {
                  size: o,
                  color: "currentColor",
              })
            : (0, r.jsx)(s.$Eu, {
                  size: o,
                  color: "currentColor",
              }),
        c = h.intl.string(n ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !i && c,
            !i &&
                (0, r.jsx)("span", {
                    className: g.dot,
                    children: "\u2022",
                }),
            a,
            (0, r.jsx)("span", { children: t }),
        ],
    });
}
function y(e) {
    let { cost: t } = e;
    return (0, r.jsxs)("div", {
        className: g.tooltipContainer,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-xs/semibold",
                children: h.intl.string(f.default.TZsu1d),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-xs/medium",
                children: h.intl.formatToPlainString(f.default["5HQUzM"], { boostCount: t }),
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
                    children: h.intl.string(f.default["9oYuvb"]),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    children: h.intl.formatToPlainString(f.default.WRRYUV, {
                        perkName:
                            null != (o = null == (l = i.sourcePowerup) ? void 0 : l.title)
                                ? o
                                : h.intl.string(h.t.BfF6EB),
                    }),
                }),
            ],
        });
    }
    if (i.type === p.A3.POWERUP_ACTIVATED) return (0, r.jsx)(y, { cost: n.cost });
}
function v(e) {
    var { guildId: t, powerup: n, compact: l, iconSize: y, onError: v } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["guildId", "powerup", "compact", "iconSize", "onError"]);
    let { onActivate: x, isLoading: C, error: E, onShowDeactivate: S } = (0, d.ZP)(t, n),
        P = (0, u.ZP)(t, n).type !== p.A3.INACTIVE,
        { disabled: I, reason: N } = (0, c.Z)(t, n, P);
    return (
        i.useEffect(() => {
            null == v || v(E);
        }, [E, v]),
        (0, r.jsx)(s.ua7, {
            delay: 100,
            "aria-label": null != N ? N : P ? h.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != N
                    ? N
                    : P
                      ? (0, r.jsx)(_, {
                            guildId: t,
                            powerup: n,
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    a.zx,
                    b(
                        m(
                            b(m({}, e), {
                                className: g.secondaryButton,
                                innerClassName: g.buttonInner,
                                wrapperClassName: o()(g.secondaryButton, { [g.buttonWrapper]: !0 === j.grow }),
                                color: P ? a.Tt.PRIMARY : a.Tt.BRAND,
                                "aria-label": h.intl.string(P ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: I,
                                onClick: P ? S : x,
                                submitting: C,
                            }),
                            j,
                        ),
                        {
                            children: (0, r.jsx)(O, {
                                cost: n.cost,
                                isActive: P,
                                compact: l,
                                iconSize: y,
                            }),
                        },
                    ),
                ),
        })
    );
}
