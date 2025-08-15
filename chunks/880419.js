n.d(t, { Z: () => _ });
var r = n(951288),
    o = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(755721),
    c = n(481060),
    l = n(762762),
    u = n(973772),
    d = n(279604),
    p = n(535396),
    f = n(989308),
    b = n(388032),
    m = n(362320);
function O(e) {
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
function j(e, t) {
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
function x(e) {
    let { powerup: t, isActive: n, compact: o, iconSize: i } = e,
        a = null != i ? i : "sm",
        s = n
            ? (0, r.jsx)(c.mTd, {
                  size: a,
                  color: "currentColor",
              })
            : (0, r.jsx)(c.$Eu, {
                  size: a,
                  color: "currentColor",
              }),
        l = b.intl.string(n ? f.default.TZsu1d : f.default.gSxlHR);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !o && l,
            !o &&
                (0, r.jsx)("span", {
                    className: m.dot,
                    children: "\u2022",
                }),
            s,
            (0, r.jsx)("span", { children: t.cost }),
        ],
    });
}
function v(e) {
    let { guildId: t, powerup: n } = e,
        o = (0, u.ZP)(t, n);
    if (o.type === p.A3.LEVEL_ACTIVATED) {
        var i, a;
        return (0, r.jsxs)("div", {
            className: m.tooltipContainer,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    children: b.intl.string(f.default["9oYuvb"]),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    children: b.intl.formatToPlainString(f.default.WRRYUV, {
                        perkName:
                            null != (a = null == (i = o.sourcePowerup) ? void 0 : i.title)
                                ? a
                                : b.intl.string(b.t.BfF6EB),
                    }),
                }),
            ],
        });
    }
    if (o.type === p.A3.POWERUP_ACTIVATED)
        return (0, r.jsxs)("div", {
            className: m.tooltipContainer,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    children: b.intl.string(f.default.TZsu1d),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    children: b.intl.formatToPlainString(f.default["5HQUzM"], { boostCount: n.cost }),
                }),
            ],
        });
}
function _(e) {
    var { guildId: t, powerup: n, compact: i, iconSize: _, onError: g } = e,
        I = (function (e, t) {
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
    let { onActivate: y, isLoading: k, error: E, onShowDeactivate: h } = (0, d.ZP)(t, n),
        C = (0, u.ZP)(t, n).type !== p.A3.INACTIVE,
        { disabled: P, reason: T } = (0, l.Z)(t, n, C);
    return (
        o.useEffect(() => {
            null == g || g(E);
        }, [E, g]),
        (0, r.jsx)(c.ua7, {
            delay: 100,
            "aria-label": null != T ? T : C ? b.intl.string(f.default.TZsu1d) : void 0,
            text:
                null != T
                    ? T
                    : C
                      ? (0, r.jsx)(v, {
                            guildId: t,
                            powerup: n,
                        })
                      : void 0,
            children: (e) =>
                (0, r.jsx)(
                    s.zx,
                    j(
                        O(
                            j(O({}, e), {
                                className: m.secondaryButton,
                                innerClassName: m.buttonInner,
                                wrapperClassName: a()(m.secondaryButton, { [m.buttonWrapper]: !0 === I.grow }),
                                color: C ? s.Tt.PRIMARY : s.Tt.BRAND,
                                "aria-label": b.intl.string(C ? f.default.TZsu1d : f.default.gSxlHR),
                                disabled: P,
                                onClick: C ? h : y,
                                submitting: k,
                            }),
                            I,
                        ),
                        {
                            children: (0, r.jsx)(x, {
                                powerup: n,
                                isActive: C,
                                compact: i,
                                iconSize: _,
                            }),
                        },
                    ),
                ),
        })
    );
}
