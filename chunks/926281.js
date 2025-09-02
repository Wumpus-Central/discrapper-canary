r.d(t, { default: () => p }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(82659),
    c = r(755721),
    s = r(481060),
    a = r(63063),
    o = r(981631),
    u = r(388032);
function d(e) {
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
function b(e, t) {
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
function p(e) {
    let { modalProps: t, onConfirm: r } = e,
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
            Programs: {
                value: "Programs",
                label: u.intl.string(u.t.M4ddeX),
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
    return (0, n.jsx)(l.Modal, {
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
                    null == r || r(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, n.jsxs)(s.Kqy, {
            direction: "vertical",
            gap: 8,
            children: [
                Object.keys(p).map((e) => {
                    let { label: t, checked: r } = p[e];
                    return (0, n.jsx)(
                        c.$q,
                        {
                            type: c.M0.INVERTED,
                            value: r,
                            onChange: (t, r) => {
                                g((t) => b(d({}, t), { [e]: b(d({}, t[e]), { checked: r }) })), r && v && y(!1);
                            },
                            children: (0, n.jsx)(s.Text, {
                                variant: "text-md/normal",
                                children: t,
                            }),
                        },
                        e,
                    );
                }),
                v &&
                    (0, n.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-danger",
                        children: u.intl.string(u.t.W1Rw3N),
                    }),
            ],
        }),
    });
}
