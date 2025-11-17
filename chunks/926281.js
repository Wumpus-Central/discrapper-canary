n.d(t, { default: () => d }), n(388685);
var r = n(54381),
    c = n(473749),
    i = n(793030),
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
        [d, p] = c.useState({
            Account: {
                value: "Account",
                label: o.intl.string(o.t["rfe/x8"]),
                checked: !1,
            },
            Analytics: {
                value: "Analytics",
                label: o.intl.string(o.t["j+d6RN"]),
                checked: !1,
            },
            Activities: {
                value: "Activities",
                label: o.intl.string(o.t.KO88BS),
                checked: !1,
            },
            Ads: {
                value: "Ads",
                label: o.intl.string(o.t.wb7QJ3),
                checked: !1,
            },
            Messages: {
                value: "Messages",
                label: o.intl.string(o.t["0dO1t+"]),
                checked: !1,
            },
            Servers: {
                value: "Servers",
                label: o.intl.string(o.t.JN9c36),
                checked: !1,
            },
            Zendesk: {
                value: "Zendesk",
                label: o.intl.string(o.t.yaLeEB),
                checked: !1,
            },
        }),
        [O, g] = c.useState(!1),
        f = Object.values(d).some((e) => e.checked);
    return (0, r.jsx)(i.Modal, {
        title: o.intl.string(o.t.jxXMEz),
        subtitle: o.intl.format(o.t.fSv59b, { helpdeskArticle: s.Z.getArticleURL(a.BhN.GDPR_PACKAGE_CONTENTS) }),
        transitionState: t.transitionState,
        onClose: t.onClose,
        actions: [
            {
                text: o.intl.string(o.t.jpVjsg),
                onClick: () => {
                    t.onClose();
                },
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t.NYgNg9),
                onClick: () => {
                    if (!f) return void g(!0);
                    let e = Object.keys(d)
                        .filter((e) => d[e].checked)
                        .map((e) => d[e].value);
                    null == n || n(e), t.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, r.jsx)(l.cOn, {
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
                    let n = u({}, t);
                    return (
                        Object.keys(n).forEach((e) => {
                            n[e] = b(u({}, n[e]), { checked: !1 });
                        }),
                        e.forEach((e) => {
                            n[e] = b(u({}, n[e]), { checked: !0 });
                        }),
                        n
                    );
                }),
                    e.length > 0 && O && g(!1);
            },
            errorMessage: O ? o.intl.string(o.t.W1Rw3D) : void 0,
        }),
    });
}
