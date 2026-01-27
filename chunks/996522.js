n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    c = n(143413),
    u = n(734057),
    d = n(661191),
    p = n(321045),
    m = n(456874),
    f = n(707539),
    g = n(519397),
    h = n(747926),
    _ = n(652215),
    b = n(985018),
    A = n(868320);

function y(e) {
    let { message: t, compact: n } = e,
        i = (0, a.bG)([u.A], () => u.A.getChannel(d.default.castMessageIdAsChannelId(t.id)));
    return null == i
        ? null
        : (0, r.jsx)(v, {
              channel: i,
              compact: n,
              isSystemMessage: (0, c.A)(t),
          });
}

function v(e) {
    var t, i;
    let c,
        u,
        d,
        { channel: y, compact: v, isSystemMessage: x } = e,
        O = (0, a.bG)([m.A], () => m.A.getCount(y.id)),
        E =
            ((t = y),
            (c = (0, a.bG)([m.A], () => m.A.getMostRecentMessage(t.id))),
            (u = (0, a.bG)([m.A], () => m.A.getCount(t.id))),
            (d = (0, f.JO)(t)),
            (null == (i = t.threadMetadata) ? void 0 : i.archived)
                ? b.intl.string(b.t.ZTo4HS)
                : null == u || 0 === u
                  ? b.intl.string(b.t.HYtNyE)
                  : null == c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("span", {
                                  children: b.intl.string(b.t.ZTo4HS),
                              }),
                              (0, r.jsx)("span", {
                                  className: A.vE,
                                  children: (0, f.aK)(d),
                              }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(g.A, {
                                  message: c,
                                  channel: t,
                              }),
                              (0, r.jsx)("span", {
                                  className: A.vE,
                                  children: (0, f.aK)(d),
                              }),
                          ],
                      })),
        j = null != O && O > 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(A.GI, {
                    [A.E]: !v,
                    [A.E_]: x,
                }),
            }),
            (0, r.jsx)(s.DUT, {
                onClick: function (e) {
                    e.stopPropagation(), (0, h.JA)(y, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === _.Ks6.SPACE || e.which === _.Ks6.ENTER) &&
                        (e.preventDefault(), (t || n) && (0, h.JA)(y, n));
                },
                onContextMenu: function (e) {
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("99011"), n.e("88974"), n.e("86901")]).then(
                            n.bind(n, 44536),
                        );
                        return (t) =>
                            (0, r.jsx)(
                                e,
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
                                        channel: y,
                                    },
                                    t,
                                ),
                            );
                    });
                },
                "aria-roledescription": b.intl.string(b.t["8ipxiY"]),
                className: l()(A.kL, {
                    [A.og]: x,
                }),
                children: (0, r.jsxs)(s.RDc, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.kq,
                            children: [
                                (0, r.jsx)(s.AC4, {
                                    children: b.intl.string(b.t["7Xm5QI"]),
                                }),
                                (0, r.jsx)("span", {
                                    className: A.UU,
                                    children: y.name,
                                }),
                                (0, r.jsx)("span", {
                                    className: A.lO,
                                    "aria-hidden": !j,
                                    children: (0, p.ub)(O, y.id),
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: A.sb,
                            children: E,
                        }),
                    ],
                }),
            }),
        ],
    });
}
