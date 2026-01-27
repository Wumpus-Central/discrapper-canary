r.d(t, {
    A: () => h,
}),
    r(638769);
var n = r(627968),
    l = r(64700),
    i = r(503698),
    o = r.n(i),
    s = r(835245),
    a = r(884362),
    c = r(837381),
    u = r(397927),
    d = r(417454),
    E = r(1659),
    f = r(9865),
    p = r(652215),
    _ = r(985018),
    O = r(420206);

function h(e) {
    let { guild: t, roles: r, className: i } = e,
        h = l.useMemo(() => "invite-roles-".concat((0, s.A)()), []),
        S = (0, a.Ay)({
            id: h,
            isEnabled: !0,
            scrollToStart: p.js$,
            scrollToEnd: p.js$,
            wrap: !0,
        }),
        g = l.useMemo(
            () => (null == t || null == r || 0 === r.length ? [] : r.map((e) => (0, f.Wj)(t.id, e)).sort(E.m)),
            [t, r],
        );
    if (null == t || 0 === g.length) return null;
    let y = g.length,
        C = _.intl.formatToPlainString(_.t.PCs0oo, {
            numRoles: y,
        });
    return (0, n.jsx)(c.hD, {
        navigator: S,
        children: (0, n.jsx)(c.PR, {
            children: (e) => {
                var r, l;
                let { ref: s } = e,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l,
                            i = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                                (n = r[l]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                            return i;
                        }
                        if (
                            ((i = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    l = {},
                                    i = Object.getOwnPropertyNames(e);
                                for (n = 0; n < i.length; n++)
                                    (r = i[n]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                                            (l[r] = e[r]);
                                return l;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                                (n = r[l]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        return i;
                    })(e, ["ref"]);
                return (0, n.jsxs)("div", {
                    className: o()(O.zr, i),
                    children: [
                        (0, n.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: O.Ed,
                            children: _.intl.string(_.t.stcSfI),
                        }),
                        (0, n.jsx)(
                            "div",
                            ((r = (function (e) {
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
                            })(
                                {
                                    className: O.Ei,
                                    "aria-label": C,
                                    ref: s,
                                },
                                a,
                            )),
                            (l = l =
                                {
                                    children: g.map((e) =>
                                        (0, n.jsx)(
                                            d.b_,
                                            {
                                                className: O.Yq,
                                                role: e,
                                                canRemove: !1,
                                                onRemove: () => {},
                                                guildId: t.id,
                                                guild: t,
                                                disableBorderColor: !1,
                                            },
                                            e.id,
                                        ),
                                    ),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            r),
                        ),
                    ],
                });
            },
        }),
    });
}
