n.d(t, {
    P: () => h,
    Z: () => m,
});
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(762762),
    a = n(973772),
    s = n(279604),
    c = n(535396),
    u = n(989308),
    d = n(388032),
    p = n(362320);
function f(e) {
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
function h(e) {
    let { cost: t } = e;
    return (0, r.jsxs)("div", {
        className: p.tooltipContainer,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-xs/semibold",
                children: d.intl.string(u.default.TZsu1d),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/medium",
                children: d.intl.formatToPlainString(u.default["5HQUzM"], { boostCount: t }),
            }),
        ],
    });
}
function g(e) {
    let { guildId: t, powerup: n } = e,
        i = (0, a.ZP)(t, n);
    if (i.type === c.A3.LEVEL_ACTIVATED) {
        var o, s;
        return (0, r.jsxs)("div", {
            className: p.tooltipContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/semibold",
                    children: d.intl.string(u.default["9oYuvb"]),
                }),
                (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    children: d.intl.formatToPlainString(u.default.WRRYUV, {
                        perkName:
                            null != (s = null == (o = i.sourcePowerup) ? void 0 : o.title)
                                ? s
                                : d.intl.string(d.t.BfF6EB),
                    }),
                }),
            ],
        });
    }
    if (i.type === c.A3.POWERUP_ACTIVATED) return (0, r.jsx)(h, { cost: n.cost });
}
function m(e) {
    var { guildId: t, powerup: n, onError: p } = e,
        h = (function (e, t) {
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
        })(e, ["guildId", "powerup", "onError"]);
    let { onActivate: m, isLoading: b, error: _, onShowDeactivate: O } = (0, s.ZP)(t, n),
        y = (0, a.ZP)(t, n).type !== c.A3.INACTIVE,
        { disabled: v, reason: j } = (0, o.Z)(t, n, y);
    i.useEffect(() => {
        null == p || p(_);
    }, [_, p]);
    let x = "".concat(n.cost);
    return (
        y || (x += " \xB7 ".concat(d.intl.string(u.default.gSxlHR))),
        (0, r.jsx)(l.ua7, {
            delay: 100,
            "aria-label": null != j ? j : y ? d.intl.string(u.default.TZsu1d) : void 0,
            text:
                null != j
                    ? j
                    : y
                      ? (0, r.jsx)(g, {
                            guildId: t,
                            powerup: n,
                        })
                      : void 0,
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    l.zxk,
                    f(
                        ((t = f({}, e)),
                        (n = n =
                            {
                                minWidth: 0,
                                variant: y ? "secondary" : "primary",
                                "aria-label": y ? d.intl.string(u.default.TZsu1d) : d.intl.string(u.default.gSxlHR),
                                text: x,
                                icon: y
                                    ? {
                                          type: "icon",
                                          asset: l.mTd,
                                      }
                                    : {
                                          type: "icon",
                                          asset: l.$Eu,
                                      },
                                iconPosition: "start",
                                disabled: v,
                                onClick: y ? O : m,
                                loading: b,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t),
                        h,
                    ),
                );
            },
        })
    );
}
