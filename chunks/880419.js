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
    h = n(535396),
    f = n(459196),
    g = n(388032),
    m = n(362320);
function b(e) {
    var t, n;
    let { guildId: l, powerup: b, compact: _, iconSize: y, size: O, grow: v, className: j, onError: C } = e,
        { onActivate: x, isLoading: E, error: S, onShowDeactivate: I } = (0, p.ZP)(l, b),
        P = (0, d.ZP)(l, b),
        N = P.type !== h.A3.INACTIVE,
        { disabled: Z, reason: w } = (0, u.Z)(l, b, N),
        T =
            null != w
                ? {
                      title: null,
                      body: w,
                  }
                : (function (e, t) {
                      if (e.type === h.A3.LEVEL_ACTIVATED) {
                          var n, r;
                          return {
                              title: g.intl.string(f.default["9oYuvb"]),
                              body: g.intl.formatToPlainString(f.default.WRRYUT, {
                                  perkName:
                                      null != (r = null == (n = e.sourcePowerup) ? void 0 : n.title)
                                          ? r
                                          : g.intl.string(g.t.BfF6ED),
                              }),
                          };
                      }
                      return e.type === h.A3.POWERUP_ACTIVATED
                          ? {
                                title: g.intl.string(f.default.TZsu1U),
                                body: g.intl.formatToPlainString(f.default["5HQUzD"], { boostCount: t.cost }),
                            }
                          : null;
                  })(P, b);
    return (
        i.useEffect(() => {
            null == C || C(S);
        }, [S, C]),
        (0, r.jsx)(a.i_, {
            body: null != (t = null == T ? void 0 : T.body) ? t : "",
            title: null != (n = null == T ? void 0 : T.title) ? n : void 0,
            shouldShow: null != T,
            delay: 100,
            "aria-label": null != w ? w : N ? g.intl.string(f.default.TZsu1U) : void 0,
            children: (0, r.jsx)("div", {
                className: o()(
                    m.secondaryButton,
                    {
                        [m.buttonWrapper]: v,
                        [m.noGrow]: !v,
                    },
                    j,
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
                                  text: g.intl.format(n ? f.default.uzQpQd : f.default.ad2Mfj, {
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
                        iconSize: y,
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
                                "aria-label": g.intl.string(N ? f.default.TZsu1U : f.default.gSxlHf),
                                disabled: Z,
                                onClick: N ? I : x,
                                loading: E,
                                fullWidth: v,
                                size: null != O ? O : _ ? "md" : void 0,
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
