r.d(t, { default: () => O }), r(896048), r(228524);
var n = r(627968),
    a = r(64700),
    l = r(512750),
    s = r(311907),
    c = r(397927),
    i = r(645619),
    o = r(503852),
    d = r(363487),
    u = r(722523),
    b = r(490557),
    f = r(214676),
    p = r(499623),
    m = r(428050),
    j = r(568065),
    x = r(333354),
    g = r(985018),
    h = r(712957);
function O(e) {
    var t, r;
    let { guildId: O, powerup: y } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (r = l[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    return a;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                    (n = r[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["guildId", "powerup"]),
        [_, N] = a.useState(void 0),
        w = a.useMemo(() => {
            switch (y.skuId) {
                case l.SL:
                    return (0, n.jsx)(f.L, { guildId: O });
                case l.aN:
                    return (0, n.jsx)(f.T, {});
                case l.FB:
                    return (0, n.jsx)(m.A, {});
                default:
                    return;
            }
        }, [y, O]);
    (0, o.Z)(O, y, o.q.DETAIL);
    let k = (0, d.A)(O),
        S = j.wr[y.skuId],
        P = null != S ? j.a8[S] : null,
        C = (0, s.bG)([i.A], () => i.A.getStateForGuild(O)),
        A = null != P ? (null == C ? void 0 : C.allPowerups[P]) : null;
    return (0, n.jsxs)(
        c.EOs,
        ((t = (function (e) {
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
                "data-migration-pending": !0,
                className: h.yl,
                size: c.rIJ.DYNAMIC,
            },
            v,
        )),
        (r = r =
            {
                parentComponent: "GuildPowerupPerkModal",
                children: [
                    (0, n.jsxs)(c.$mQ, {
                        "data-migration-pending": !0,
                        className: h._F,
                        scrollbarType: "none",
                        children: [
                            (0, n.jsxs)("div", {
                                className: h.pz,
                                children: [
                                    (0, n.jsx)(c.hLv, {
                                        className: h.UZ,
                                        children: (0, n.jsx)(b.l, { powerup: y }),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: h.hQ,
                                        children: [
                                            (0, n.jsx)(c.Heading, {
                                                variant: "heading-xl/extrabold",
                                                children: y.title,
                                            }),
                                            (0, n.jsx)(c.Text, {
                                                className: h.h_,
                                                variant: "text-sm/normal",
                                                children: y.description,
                                            }),
                                            null != A &&
                                                (0, n.jsx)(c.Text, {
                                                    className: h.h_,
                                                    variant: "text-sm/normal",
                                                    children: g.intl.formatToPlainString(x.default.NAFGkH, {
                                                        level: A.title,
                                                    }),
                                                }),
                                            (0, n.jsx)(p.F, { powerup: y }),
                                            null != _ &&
                                                (0, n.jsx)(c.Text, {
                                                    className: h.z3,
                                                    color: "text-feedback-critical",
                                                    variant: "text-sm/semibold",
                                                    children: _,
                                                }),
                                            k &&
                                                (0, n.jsx)(u.Ay, {
                                                    className: h.qr,
                                                    guildId: O,
                                                    powerup: y,
                                                    onError: N,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            null != w &&
                                (0, n.jsx)("div", {
                                    className: h._9,
                                    children: w,
                                }),
                        ],
                    }),
                    (0, n.jsx)(c.s_y, {
                        "data-migration-pending": !0,
                        className: h.VN,
                        onClick: v.onClose,
                    }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
