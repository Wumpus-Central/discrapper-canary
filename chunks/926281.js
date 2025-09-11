n.d(t, { default: () => p }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(82659),
    c = n(755721),
    s = n(481060),
    a = n(63063),
    o = n(981631),
    u = n(388032);
function b(e) {
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
function d(e, t) {
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
function p(e) {
    let { modalProps: t, onConfirm: n } = e,
        [p, g] = i.useState({
            Account: {
                value: "Account",
                label: u.intl.string(u.t["rfe/x8"]),
                checked: !1,
            },
            Analytics: {
                value: "Analytics",
                label: u.intl.string(u.t["j+d6RE"]),
                checked: !1,
            },
            Activities: {
                value: "Activities",
                label: u.intl.string(u.t.KO88BQ),
                checked: !1,
            },
            Ads: {
                value: "Ads",
                label: u.intl.string(u.t.wb7QJy),
                checked: !1,
            },
            Messages: {
                value: "Messages",
                label: u.intl.string(u.t["0dO1t7"]),
                checked: !1,
            },
            Servers: {
                value: "Servers",
                label: u.intl.string(u.t.JN9c39),
                checked: !1,
            },
            Zendesk: {
                value: "Zendesk",
                label: u.intl.string(u.t.yaLeEB),
                checked: !1,
            },
        }),
        [v, y] = i.useState(!1),
        O = Object.values(p).some((e) => e.checked);
    return (0, r.jsx)(l.Modal, {
        title: u.intl.string(u.t.jxXMEx),
        subtitle: u.intl.format(u.t.fSv59f, { helpdeskArticle: a.Z.getArticleURL(o.BhN.GDPR_PACKAGE_CONTENTS) }),
        transitionState: t.transitionState,
        onClose: t.onClose,
        actions: [
            {
                text: u.intl.string(u.t.jpVjsr),
                onClick: () => {
                    t.onClose();
                },
                variant: "secondary",
            },
            {
                text: u.intl.string(u.t.NYgNg4),
                onClick: () => {
                    if (!O) return void y(!0);
                    let e = Object.keys(p)
                        .filter((e) => p[e].checked)
                        .map((e) => p[e].value);
                    null == n || n(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, r.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 8,
            children: [
                Object.keys(p).map((e) => {
                    let { label: t, checked: n } = p[e];
                    return (0, r.jsx)(
                        c.$q,
                        {
                            type: c.M0.INVERTED,
                            value: n,
                            onChange: (t, n) => {
                                g((t) => d(b({}, t), { [e]: d(b({}, t[e]), { checked: n }) })), n && v && y(!1);
                            },
                            children: (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: t,
                            }),
                        },
                        e,
                    );
                }),
                v &&
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: u.intl.string(u.t.W1Rw3N),
                    }),
            ],
        }),
    });
}
