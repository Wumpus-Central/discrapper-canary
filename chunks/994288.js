n.d(e, { default: () => N });
var r = n(627968),
    i = n(64700),
    o = n(110259),
    l = n(311907),
    s = n(397927),
    c = n(49229),
    a = n(389245),
    d = n(662502),
    u = n(632738),
    f = n(994500),
    O = n(954571),
    p = n(975571),
    m = n(562153),
    g = n(143547),
    j = n(235627),
    x = n(652215),
    b = n(985018),
    y = n(107724);
function I(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function E(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function h(t) {
    let { user: e, onBlock: n, onIgnore: i, location: o, disallowIgnore: c, guildId: d, channelId: h } = t,
        N = (0, l.bG)([f.A], () => f.A.isIgnored(e.id));
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [
            (0, r.jsxs)("div", {
                className: y.RS,
                children: [
                    (0, r.jsxs)("div", {
                        className: y.zc,
                        children: [
                            (0, r.jsx)(s.euF, {
                                size: s._3J.SIZE_56,
                                src: e.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)("div", {
                                className: y.Kk,
                                children: (0, r.jsx)(s.KTN, {}),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: b.intl.format(b.t.CIbzHR, { username: m.Ay.getName(d, h, e) }),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: b.intl.string(b.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.A, {}),
            c || N
                ? null
                : (0, r.jsxs)("div", {
                      className: y.l_,
                      children: [
                          (0, r.jsx)(u.Y0, {
                              title: b.intl.string(b.t["+BJTcB"]),
                              children: (0, r.jsx)(u.PQ, {
                                  title: b.intl.string(b.t.hC8tcc),
                                  description: b.intl.string(b.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: b.intl.string(b.t.mxJOd9),
                                  onButtonPress: () => {
                                      O.default.track(x.HAw.USER_REMEDIATION_ACTION, {
                                          action: j.p.GOTO_IGNORE,
                                          location: o,
                                      }),
                                          (0, s.s7G)(),
                                          (0, s.qfG)((t) =>
                                              (0, r.jsx)(
                                                  g.default,
                                                  E(I({}, t), {
                                                      user: e,
                                                      guildId: d,
                                                      channelId: h,
                                                      onIgnore: i,
                                                      onBlock: n,
                                                      location: o,
                                                  }),
                                              ),
                                          );
                                  },
                              }),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              className: y.FV,
                              children: b.intl.format(b.t.DJN6eZ, {
                                  articleLink: p.A.getArticleURL(x.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function N(t) {
    let {
            user: e,
            onBlock: n,
            onCancel: l,
            onIgnore: a,
            location: u = "ContextMenu",
            disallowIgnore: f,
            guildId: p,
            channelId: m,
        } = t,
        g = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(t); i < n.length; i++)
                    (r = n[i]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
                return o;
            }
            if (
                ((o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.getOwnPropertyNames(t);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
                    return i;
                })(t, e)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    (r = n[i]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            return o;
        })(t, ["user", "onBlock", "onCancel", "onIgnore", "location", "disallowIgnore", "guildId", "channelId"]);
    return (
        i.useLayoutEffect(
            () => () => {
                O.default.track(x.HAw.USER_REMEDIATION_ACTION, {
                    action: j.p.DISMISS_BLOCK,
                    location: u,
                });
            },
            [u],
        ),
        (0, r.jsx)(
            s.VoidConfirmModal,
            E(
                I(
                    {
                        confirmText: b.intl.string(b.t.l4Emac),
                        cancelText: b.intl.string(b.t["ETE/oC"]),
                        onCancel: () => {
                            O.default.track(x.HAw.USER_REMEDIATION_ACTION, {
                                action: j.p.CANCEL_BLOCK,
                                location: u,
                            }),
                                null == l || l();
                        },
                        onConfirm: () => {
                            null == n || n(),
                                c.A.blockUser(e.id, { location: u }).then(() => {
                                    O.default.track(x.HAw.BLOCK_USER_CONFIRMED),
                                        d.A.showBlockSuccessToast(e.id, null != m ? m : void 0);
                                });
                        },
                        impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION },
                    },
                    g,
                ),
                {
                    children: (0, r.jsx)(h, {
                        user: e,
                        guildId: p,
                        channelId: m,
                        onBlock: n,
                        onIgnore: a,
                        disallowIgnore: f,
                    }),
                },
            ),
        )
    );
}
