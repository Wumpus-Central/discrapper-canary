r.d(t, { Z: () => P });
var n = r(255367),
    o = r(73800),
    i = r(120356),
    l = r.n(i),
    u = r(755721),
    s = r(481060),
    a = r(762762),
    c = r(973772),
    p = r(279604),
    d = r(535396),
    f = r(989308),
    b = r(388032),
    O = r(362320);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function g(e) {
    let { powerup: t, isActive: r, compact: o, iconSize: i } = e,
        l = null != i ? i : "sm",
        u = r
            ? (0, n.jsx)(s.mTd, {
                  size: l,
                  color: "currentColor",
              })
            : (0, n.jsx)(s.$Eu, {
                  size: l,
                  color: "currentColor",
              }),
        a = b.intl.string(r ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            !o && a,
            !o &&
                (0, n.jsx)("span", {
                    className: O.dot,
                    children: "\u2022",
                }),
            u,
            (0, n.jsx)("span", { children: t.cost }),
        ],
    });
}
function m(e) {
    let { guildId: t, powerup: r } = e,
        o = (0, c.ZP)(t, r);
    if (o.type === d.A3.LEVEL_ACTIVATED) {
        var i, l;
        return (0, n.jsxs)("div", {
            className: O.tooltipContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: "text-xs/semibold",
                    children: b.intl.string(f.default["9oYuvb"]),
                }),
                (0, n.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    children: b.intl.formatToPlainString(f.default.WRRYUV, {
                        perkName:
                            null != (l = null == (i = o.sourcePowerup) ? void 0 : i.title)
                                ? l
                                : b.intl.string(b.t.BfF6EB),
                    }),
                }),
            ],
        });
    }
    if (o.type === d.A3.POWERUP_ACTIVATED)
        return (0, n.jsxs)("div", {
            className: O.tooltipContainer,
            children: [
                (0, n.jsx)(s.Text, {
                    variant: "text-xs/semibold",
                    children: b.intl.string(f.default.TZsu1d),
                }),
                (0, n.jsx)(s.Text, {
                    variant: "text-xs/medium",
                    children: b.intl.formatToPlainString(f.default["5HQUzM"], { boostCount: r.cost }),
                }),
            ],
        });
}
function P(e) {
    var { guildId: t, powerup: r, compact: i, iconSize: P, onError: v } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["guildId", "powerup", "compact", "iconSize", "onError"]);
    let { onActivate: x, isLoading: w, error: h, onShowDeactivate: I } = (0, p.ZP)(t, r),
        C = (0, c.ZP)(t, r).type !== d.A3.INACTIVE,
        { disabled: S, reason: T } = (0, a.Z)(t, r, C);
    return (
        o.useEffect(() => {
            null == v || v(h);
        }, [h, v]),
        (0, n.jsx)(s.ua7, {
            delay: 100,
            "aria-label": null != T ? T : C ? b.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != T
                    ? T
                    : C
                      ? (0, n.jsx)(m, {
                            guildId: t,
                            powerup: r,
                        })
                      : void 0,
            children: (e) =>
                (0, n.jsx)(
                    u.zx,
                    j(
                        y(
                            j(y({}, e), {
                                className: O.secondaryButton,
                                innerClassName: O.buttonInner,
                                wrapperClassName: l()(O.secondaryButton, { [O.buttonWrapper]: !0 === E.grow }),
                                color: C ? u.Tt.PRIMARY : u.Tt.BRAND,
                                "aria-label": b.intl.string(C ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: S,
                                onClick: C ? I : x,
                                submitting: w,
                            }),
                            E,
                        ),
                        {
                            children: (0, n.jsx)(g, {
                                powerup: r,
                                isActive: C,
                                compact: i,
                                iconSize: P,
                            }),
                        },
                    ),
                ),
        })
    );
}
