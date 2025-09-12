n.d(t, { default: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    c = n(82659),
    l = n(481060),
    s = n(63063),
    a = n(981631),
    o = n(388032);
function u(e) {
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
function b(e, t) {
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
function d(e) {
    let { modalProps: t, onConfirm: n } = e,
        [d, p] = i.useState({
            Account: {
                value: "Account",
                label: o.intl.string(o.t["rfe/x8"]),
                checked: !1,
            },
            Analytics: {
                value: "Analytics",
                label: o.intl.string(o.t["j+d6RE"]),
                checked: !1,
            },
            Activities: {
                value: "Activities",
                label: o.intl.string(o.t.KO88BQ),
                checked: !1,
            },
            Ads: {
                value: "Ads",
                label: o.intl.string(o.t.wb7QJy),
                checked: !1,
            },
            Messages: {
                value: "Messages",
                label: o.intl.string(o.t["0dO1t7"]),
                checked: !1,
            },
            Servers: {
                value: "Servers",
                label: o.intl.string(o.t.JN9c39),
                checked: !1,
            },
            Zendesk: {
                value: "Zendesk",
                label: o.intl.string(o.t.yaLeEB),
                checked: !1,
            },
        }),
        [g, O] = i.useState(!1),
        y = Object.values(d).some((e) => e.checked);
    return (0, r.jsx)(c.Modal, {
        title: o.intl.string(o.t.jxXMEx),
        subtitle: o.intl.format(o.t.fSv59f, { helpdeskArticle: s.Z.getArticleURL(a.BhN.GDPR_PACKAGE_CONTENTS) }),
        transitionState: t.transitionState,
        onClose: t.onClose,
        actions: [
            {
                text: o.intl.string(o.t.jpVjsr),
                onClick: () => {
                    t.onClose();
                },
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t.NYgNg4),
                onClick: () => {
                    if (!y) return void O(!0);
                    let e = Object.keys(d)
                        .filter((e) => d[e].checked)
                        .map((e) => d[e].value);
                    null == n || n(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, r.jsxs)(l.Kqy, {
            direction: "vertical",
            gap: 8,
            children: [
                Object.keys(d).map((e) => {
                    let { label: t, checked: n } = d[e];
                    return (0, r.jsx)(
                        l.XZJ,
                        {
                            checked: n,
                            onChange: (t) => {
                                p((n) => b(u({}, n), { [e]: b(u({}, n[e]), { checked: t }) })), t && g && O(!1);
                            },
                            label: t,
                        },
                        e,
                    );
                }),
                g &&
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: o.intl.string(o.t.W1Rw3N),
                    }),
            ],
        }),
    });
}
