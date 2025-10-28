n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(681715),
    s = n(159691),
    c = n(481060),
    u = n(762762),
    d = n(973772),
    p = n(279604),
    f = n(535396),
    h = n(459196),
    g = n(388032),
    m = n(362320);
function b(e) {
    var t, n;
    let { guildId: l, powerup: b, compact: _, iconSize: O, size: y, grow: j, className: v, onError: x } = e,
        { onActivate: C, isLoading: E, error: S, onShowDeactivate: I } = (0, p.ZP)(l, b),
        P = (0, d.ZP)(l, b),
        N = P.type !== f.A3.INACTIVE,
        { disabled: Z, reason: T } = (0, u.Z)(l, b, N),
        w =
            null != T
                ? {
                      title: null,
                      body: T,
                  }
                : (function (e, t) {
                      if (e.type === f.A3.LEVEL_ACTIVATED) {
                          var n, r;
                          return {
                              title: g.intl.string(h.default["9oYuvb"]),
                              body: g.intl.formatToPlainString(h.default.WRRYUT, {
                                  perkName:
                                      null != (r = null == (n = e.sourcePowerup) ? void 0 : n.title)
                                          ? r
                                          : g.intl.string(g.t.BfF6ED),
                              }),
                          };
                      }
                      return e.type === f.A3.POWERUP_ACTIVATED
                          ? {
                                title: g.intl.string(h.default.TZsu1U),
                                body: g.intl.formatToPlainString(h.default["5HQUzD"], { boostCount: t.cost }),
                            }
                          : null;
                  })(P, b);
    return (
        i.useEffect(() => {
            null == x || x(S);
        }, [S, x]),
        (0, r.jsx)(a.i_, {
            body: null != (t = null == w ? void 0 : w.body) ? t : "",
            title: null != (n = null == w ? void 0 : w.title) ? n : void 0,
            shouldShow: null != w,
            delay: 100,
            "aria-label": null != T ? T : N ? g.intl.string(h.default.TZsu1U) : void 0,
            children: (0, r.jsx)("div", {
                className: o()(
                    m.secondaryButton,
                    {
                        [m.buttonWrapper]: j,
                        [m.noGrow]: !j,
                    },
                    v,
                ),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: i, iconSize: l } = e,
                            o = null != l ? l : "sm",
                            a = n ? c.zkc : c.Ucv;
                        return i
                            ? {
                                  text: t.toString(),
                                  icon: a,
                              }
                            : {
                                  text: g.intl.format(n ? h.default.uzQpQd : h.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () =>
                                          (0, r.jsx)("span", {
                                              className: m.dot,
                                              children: "\u2022",
                                          }),
                                      boostIconHook: () =>
                                          (0, r.jsx)(a, {
                                              size: o,
                                              color: "currentColor",
                                              className: m.boostIcon,
                                          }),
                                  }),
                              };
                    })({
                        cost: b.cost,
                        isActive: N,
                        compact: _,
                        iconSize: O,
                    });
                    return (0, r.jsx)(
                        s.zxk,
                        (function (e) {
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
                        })(
                            {
                                variant: N ? "secondary" : "primary",
                                "aria-label": g.intl.string(N ? h.default.TZsu1U : h.default.gSxlHf),
                                disabled: Z,
                                onClick: N ? I : C,
                                loading: E,
                                fullWidth: j,
                                size: null != y ? y : _ ? "md" : void 0,
                                text: e,
                                minWidth: 0,
                            },
                            _ ? { icon: t } : {},
                        ),
                    );
                })(),
            }),
        })
    );
}
