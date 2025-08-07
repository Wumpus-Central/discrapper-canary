n.d(t, { Z: () => j });
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(755721),
    a = n(481060),
    c = n(762762),
    u = n(973772),
    d = n(279604),
    p = n(535396),
    f = n(93841),
    m = n(388032),
    g = n(847625);
function x(e) {
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
function _(e, t) {
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
function v(e) {
    let { powerup: t, isActive: n, compact: o, iconSize: i } = e,
        l = null != i ? i : "sm",
        s = n
            ? (0, r.jsx)(a.mTd, {
                  size: l,
                  color: "currentColor",
              })
            : (0, r.jsx)(a.$Eu, {
                  size: l,
                  color: "currentColor",
              }),
        c = m.intl.string(n ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && c,
            !o &&
                (0, r.jsx)("span", {
                    className: g.dot,
                    children: "\u2022",
                }),
            s,
            (0, r.jsx)("span", { children: t.cost }),
        ],
    });
}
function b(e) {
    let { guildId: t, powerup: n } = e,
        o = (0, u.ZP)(t, n);
    if (o.type === p.A3.LEVEL_ACTIVATED) {
        var i, l;
        return (0, r.jsxs)("div", {
            className: g.tooltipContainer,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/semibold",
                    children: m.intl.string(f.default["9oYuvb"]),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    children: m.intl.formatToPlainString(f.default.WRRYUV, {
                        perkName:
                            null != (l = null == (i = o.sourcePowerup) ? void 0 : i.title)
                                ? l
                                : m.intl.string(m.t.BfF6EB),
                    }),
                }),
            ],
        });
    }
    if (o.type === p.A3.POWERUP_ACTIVATED)
        return (0, r.jsxs)("div", {
            className: g.tooltipContainer,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/semibold",
                    children: m.intl.string(f.default.TZsu1d),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    children: m.intl.formatToPlainString(f.default["5HQUzM"], { boostCount: n.cost }),
                }),
            ],
        });
}
function j(e) {
    var { guildId: t, powerup: n, compact: i, iconSize: j, onError: h } = e,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "powerup", "compact", "iconSize", "onError"]);
    let { onActivate: C, isLoading: I, error: O, onShowDeactivate: y } = (0, d.ZP)(t, n),
        P = (0, u.ZP)(t, n).type !== p.A3.INACTIVE,
        { disabled: w, reason: N } = (0, c.Z)(t, n, P);
    return (
        o.useEffect(() => {
            null == h || h(O);
        }, [O, h]),
        (0, r.jsx)(a.ua7, {
            delay: 100,
            "aria-label": null != N ? N : P ? m.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != N
                    ? N
                    : P
                      ? (0, r.jsx)(b, {
                            guildId: t,
                            powerup: n,
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zx,
                    _(
                        x(
                            _(x({}, e), {
                                className: g.secondaryButton,
                                innerClassName: g.buttonInner,
                                wrapperClassName: l()(g.secondaryButton, { [g.buttonWrapper]: !0 === E.grow }),
                                color: P ? s.Tt.PRIMARY : s.Tt.BRAND,
                                "aria-label": m.intl.string(P ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: w,
                                onClick: P ? y : C,
                                submitting: I,
                            }),
                            E,
                        ),
                        {
                            children: (0, r.jsx)(v, {
                                powerup: n,
                                isActive: P,
                                compact: i,
                                iconSize: j,
                            }),
                        },
                    ),
                ),
        })
    );
}
