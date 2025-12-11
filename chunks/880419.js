n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(681715),
    s = n(159691),
    c = n(481060),
    u = n(762762),
    d = n(448222),
    f = n(973772),
    h = n(535396),
    p = n(44542),
    g = n(388032),
    b = n(395678);
function m(e) {
    var t, n;
    let { guildId: l, powerup: m, compact: y, iconSize: O, size: v, grow: j, className: C, onError: x } = e,
        { onActivate: E, isLoading: S, error: I, onShowDeactivate: _ } = (0, d.Z)(l, m),
        P = (0, f.ZP)(l, m),
        N = P.type !== h.A3.INACTIVE,
        { disabled: Z, reason: w } = (0, u.Z)(l, m, N),
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
                              title: g.intl.string(p.default["9oYuvb"]),
                              body: g.intl.formatToPlainString(p.default.WRRYUT, {
                                  perkName:
                                      null != (r = null == (n = e.sourcePowerup) ? void 0 : n.title)
                                          ? r
                                          : g.intl.string(g.t.BfF6ED),
                              }),
                          };
                      }
                      return e.type === h.A3.POWERUP_ACTIVATED
                          ? {
                                title: g.intl.string(p.default.TZsu1U),
                                body: g.intl.formatToPlainString(p.default["5HQUzD"], { boostCount: t.cost }),
                            }
                          : null;
                  })(P, m);
    return (
        i.useEffect(() => {
            null == x || x(I);
        }, [I, x]),
        (0, r.jsx)(o.i_, {
            body: null != (t = null == T ? void 0 : T.body) ? t : "",
            title: null != (n = null == T ? void 0 : T.title) ? n : void 0,
            shouldShow: null != T,
            delay: 100,
            "aria-label": null != w ? w : N ? g.intl.string(p.default.TZsu1U) : void 0,
            children: (0, r.jsx)("div", {
                className: a()(
                    b.secondaryButton,
                    {
                        [b.buttonWrapper]: j,
                        [b.noGrow]: !j,
                    },
                    C,
                ),
                children: (() => {
                    let { text: e, icon: t } = (function (e) {
                        let { cost: t, isActive: n, compact: i, iconSize: l } = e,
                            a = null != l ? l : "sm",
                            o = n ? c.zkc : c.Ucv;
                        return i
                            ? {
                                  text: t.toString(),
                                  icon: o,
                              }
                            : {
                                  text: g.intl.format(n ? p.default.uzQpQd : p.default.ad2Mfj, {
                                      boostCount: t,
                                      dotHook: () =>
                                          (0, r.jsx)("span", {
                                              className: b.dot,
                                              children: "\u2022",
                                          }),
                                      boostIconHook: () =>
                                          (0, r.jsx)(o, {
                                              size: a,
                                              color: "currentColor",
                                              className: b.boostIcon,
                                          }),
                                  }),
                              };
                    })({
                        cost: m.cost,
                        isActive: N,
                        compact: y,
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
                                "aria-label": g.intl.string(N ? p.default.TZsu1U : p.default.gSxlHf),
                                disabled: Z,
                                onClick: (e) => {
                                    e.stopPropagation(), N ? _() : E();
                                },
                                loading: S,
                                fullWidth: j,
                                size: null != v ? v : y ? "md" : void 0,
                                text: e,
                                minWidth: 0,
                            },
                            y ? { icon: t } : {},
                        ),
                    );
                })(),
            }),
        })
    );
}
