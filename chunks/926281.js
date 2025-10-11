r.d(t, { default: () => d }), r(388685);
var n = r(951288),
    c = r(647438),
    i = r(793030),
    l = r(709867),
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
function d(e) {
    let { modalProps: t, onConfirm: r } = e,
        [d, p] = c.useState({
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
        [O, f] = c.useState(!1),
        g = Object.values(d).some((e) => e.checked);
    return (0, n.jsx)(i.Modal, {
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
                    if (!g) return void f(!0);
                    let e = Object.keys(d)
                        .filter((e) => d[e].checked)
                        .map((e) => d[e].value);
                    null == r || r(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, n.jsx)(l.c, {
            selectedValues: Object.keys(d).filter((e) => d[e].checked),
            options: Object.keys(d).map((e) => {
                let { label: t } = d[e];
                return {
                    label: t,
                    value: e,
                };
            }),
            onChange: (e) => {
                p((t) => {
                    let r = u({}, t);
                    return (
                        Object.keys(r).forEach((e) => {
                            r[e] = b(u({}, r[e]), { checked: !1 });
                        }),
                        e.forEach((e) => {
                            r[e] = b(u({}, r[e]), { checked: !0 });
                        }),
                        r
                    );
                }),
                    e.length > 0 && O && f(!1);
            },
            errorMessage: O ? o.intl.string(o.t.W1Rw3N) : void 0,
        }),
    });
}
