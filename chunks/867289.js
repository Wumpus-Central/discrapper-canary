n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(816814),
    s = n(144114),
    l = n(355497),
    c = n(607018),
    u = n(714565),
    d = n(981631),
    f = n(815660),
    p = n(388032),
    _ = n(335094);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let t,
        n,
        { currentUser: m, togglingSMS: g } = e,
        [b, y] = i.useState(!1),
        O = i.useCallback(
            (e) => {
                e.preventDefault(), y(!b);
            },
            [b],
        ),
        v = i.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0, a.h7j)((t) => (0, r.jsx)(c.default, h({ reason: s.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: f.M });
        }, []),
        S = i.useCallback(() => {
            v();
        }, [v]),
        I = i.useCallback(() => {
            null == m.phone ? v({ onAddedPhone: o.Z.enableSMS }) : o.Z.enableSMS();
        }, [m, v]),
        T = i.useCallback(() => {
            (0, a.h7j)((e) =>
                (0, r.jsx)(
                    l.default,
                    E(h({}, e), {
                        handleSubmit: o.Z.disableSMS,
                        title: p.intl.string(p.t.KLWnit),
                        children: p.intl.string(p.t["W0/Duf"]),
                    }),
                ),
            );
        }, []),
        C = i.useCallback((e) => (null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))), []),
        A = null != m.phone,
        N = m.hasFlag(d.xW$.MFA_SMS);
    if (A || N) {
        let e = b ? m.phone : C(m.phone);
        n = (0, r.jsxs)(a.Text, {
            variant: "text-sm/normal",
            children: [
                p.intl.format(p.t.PXVoEO, { phoneNumber: e }),
                (0, r.jsx)(a.eee, {
                    onClick: O,
                    className: _.phoneRevealer,
                    children: b ? p.intl.string(p.t.FfltIN) : p.intl.string(p.t.llArAg),
                }),
            ],
        });
    }
    if (N)
        t = (0, r.jsx)(a.Button, {
            variant: "critical-secondary",
            size: "sm",
            text: p.intl.string(p.t.KLWnit),
            loading: g,
            onClick: T,
        });
    else {
        let e = (0, u.c)(m);
        t = (0, r.jsxs)(a.ButtonGroup, {
            size: "sm",
            children: [
                (0, r.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: null != e ? e : p.intl.string(p.t.DZQe23),
                    onClick: I,
                    loading: g,
                    disabled: null != e,
                }),
                A
                    ? (0, r.jsx)(a.Button, {
                          variant: "secondary",
                          size: "sm",
                          text: p.intl.string(p.t.Ulqq6K),
                          onClick: S,
                      })
                    : null,
            ],
        });
    }
    return (0, r.jsxs)(a.gNt, {
        label: p.intl.string(p.t.uHAJ5v),
        description: p.intl.string(p.t.fspJ4H),
        children: [n, t],
    });
}
