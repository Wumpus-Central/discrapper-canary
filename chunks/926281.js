r.d(t, { default: () => b }), r(388685);
var n = r(255367),
    i = r(73800),
    l = r(82659),
    c = r(481060),
    s = r(63063),
    a = r(981631),
    o = r(388032);
function u(e) {
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
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function b(e) {
    let { modalProps: t, onConfirm: r } = e,
        [b, p] = i.useState({
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
            Programs: {
                value: "Programs",
                label: o.intl.string(o.t.M4ddeX),
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
        [g, v] = i.useState(!1),
        y = Object.values(b).some((e) => e.checked);
    return (0, n.jsx)(l.Modal, {
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
                    if (!y) return void v(!0);
                    let e = Object.keys(b)
                        .filter((e) => b[e].checked)
                        .map((e) => b[e].value);
                    null == r || r(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, n.jsxs)(c.Kqy, {
            direction: "vertical",
            gap: 8,
            children: [
                Object.keys(b).map((e) => {
                    let { label: t, checked: r } = b[e];
                    return (0, n.jsx)(
                        c.XZJ,
                        {
                            type: c.XZJ.Types.INVERTED,
                            value: r,
                            onChange: (t, r) => {
                                p((t) => d(u({}, t), { [e]: d(u({}, t[e]), { checked: r }) })), r && g && v(!1);
                            },
                            children: (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: t,
                            }),
                        },
                        e,
                    );
                }),
                g &&
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: o.intl.string(o.t.W1Rw3N),
                    }),
            ],
        }),
    });
}
