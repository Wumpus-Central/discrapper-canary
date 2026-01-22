n.d(t, { A: () => N }), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    c = n(843282),
    o = n(397927),
    d = n(47167),
    u = n(713654),
    f = n(95701),
    g = n(769765),
    b = n(994500),
    m = n(287809),
    p = n(739455),
    x = n(652215),
    h = n(985018),
    j = n(987772);
function O(e) {
    return String(e);
}
function y(e) {
    let { icon: t, title: n, subtitle: i, className: l } = e;
    return (0, r.jsxs)("div", {
        className: s()(j.Pf, l),
        children: [
            t,
            (0, r.jsxs)("div", {
                className: j.QK,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "none",
                        className: j.DX,
                        children: n,
                    }),
                    null != i && "" !== i
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              className: j.V2,
                              children: i,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function v() {
    return (0, r.jsx)(y, {
        icon: (0, r.jsx)(o.j96, {
            size: "md",
            color: "currentColor",
            className: j.IX,
        }),
        title: h.intl.string(h.t.d7YJMK),
        className: j.fp,
    });
}
function A(e) {
    var t;
    let { channelId: n } = e,
        i = (0, p.fE)(n),
        l = (0, p.fE)(null != (t = null == i ? void 0 : i.parent_id) ? t : x.dJq);
    if (null == i) return null;
    let s = (0, u.gU)(i),
        a = (0, d.m1)(i, m.default, b.A),
        c = null != l ? (0, d.m1)(l, m.default, b.A) : void 0;
    return (0, r.jsx)(y, {
        icon: null != s && (0, r.jsx)(s, { className: j.IX }),
        title: a,
        subtitle: c,
    });
}
function E(e) {
    let { value: t } = e;
    return null != t ? (0, r.jsx)(A, { channelId: t }) : (0, r.jsx)(v, {});
}
function N(e) {
    let {
            label: t,
            guildId: l,
            value: s,
            initialChannelId: u,
            omitChannelIds: j,
            "aria-labelledby": y,
            onChange: v,
        } = e,
        A = h.intl.string(h.t.d7YJMK),
        N = (0, a.bG)([g.A], () => g.A.getCategories(l), [l]),
        _ = (0, p.fE)(null != s ? s : x.dJq),
        S = i.useMemo(() => {
            let e = [
                    {
                        value: null,
                        label: A,
                    },
                ],
                t = !1;
            for (let n of N._categories)
                for (let { channel: r } of N[n.channel.id])
                    ((0, f.tr)(r.type) || (0, f.ay)(r.type)) &&
                        ((r.id !== s && (null == j ? void 0 : j.has(r.id)) && (r.id !== u || s === u)) ||
                            (s === r.id && (t = !0),
                            e.push({
                                value: r.id,
                                label: (0, d.m1)(r, m.default, b.A),
                            })));
            return (
                null == s ||
                    t ||
                    null == _ ||
                    e.push({
                        value: s,
                        label: _.name,
                    }),
                e
            );
        }, [A, s, _, N, j, u]);
    return (0, r.jsx)(c.Pw, {
        label: t,
        placeholder: h.intl.string(h.t.r2ptsz),
        options: S,
        select: function (e) {
            null == e
                ? (0, o.mMO)(async () => {
                      let { default: e } = await Promise.all([n.e("72271"), n.e("64233"), n.e("59195")]).then(
                          n.bind(n, 963765),
                      );
                      return (t) => {
                          var n, i;
                          return (0, r.jsx)(
                              e,
                              ((n = (function (e) {
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
                              })({}, t)),
                              (i = i =
                                  {
                                      guildId: l,
                                      onSubmit: v,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n),
                          );
                      };
                  })
                : v(e);
        },
        isSelected: (e) => null != s && O(e) === O(s),
        serialize: O,
        renderOptionLabel: E,
        renderOptionValue: (e) => {
            let [t] = e;
            return E(t);
        },
        "aria-labelledby": y,
        "data-migration-pending": !0,
    });
}
