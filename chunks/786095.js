n.d(t, { Z: () => S }), n(388685), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(239091),
    o = n(236413),
    s = n(727072),
    c = n(85960),
    u = n(676317),
    d = n(65912),
    f = n(556012),
    g = n(572456),
    b = n(434404),
    p = n(981631),
    m = n(273504),
    y = n(388032),
    O = n(335260);
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
function v(e, t) {
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
let j = m.fX.KEYWORD;
function S(e, t) {
    let { perGuildMaxCount: n } = c.I6[j],
        { isLoading: S, saveRule: E, errorMessage: P } = (0, d.w)(),
        { createNewEditingRule: Z } = (0, d.V)(),
        [_, I] = i.useState(!1),
        [T, N] = (0, s.I2)(t),
        { rulesByTriggerType: w, updateRule: M } = (0, s.pH)(t),
        x = i.useMemo(() => {
            var e;
            return null != (e = w[j]) ? e : [];
        }, [w]),
        A = 0 === x.length,
        D = n > x.length && !A;
    if (!i.useMemo(() => (0, u.ze)(t), [t]) || null == e || 0 === e.length || null == t) return null;
    let C = e.split(" "),
        L = C.length;
    try {
        (0, o.km)(C, m.RH);
    } catch (e) {
        return null;
    }
    let R = () => {
            null != t &&
                ((0, a.Zy)(),
                b.Z.open(t, p.pNK.GUILD_AUTOMOD),
                setTimeout(() => {
                    Z(t, j, {
                        triggerMetadata: {
                            keywordFilter: [e],
                            regexPatterns: [],
                            allowList: [],
                        },
                    });
                }, 400));
        },
        k = async (t) => {
            var n, r;
            if (((0, a.Zy)(), !(await (0, g.XN)(t.name, e)))) return;
            let i = v(h({}, t), {
                triggerMetadata: v(h({}, t.triggerMetadata), {
                    keywordFilter: [
                        ...(null != (r = null == (n = t.triggerMetadata) ? void 0 : n.keywordFilter) ? r : []),
                        e,
                    ],
                }),
            });
            await E(i, x),
                M(i),
                null != P
                    ? (0, l.showToast)((0, l.createToast)(y.intl.string(y.t.wH6L0r), l.ToastType.FAILURE))
                    : (0, l.showToast)((0, l.createToast)(y.intl.string(y.t["0rdYm2"]), l.ToastType.SUCCESS));
        },
        G = (0, r.jsx)(l.sNh, {
            id: "automod-rules-loading",
            label: y.intl.string(y.t.ZTNur7),
        });
    return (
        T ||
            (G = (0, r.jsxs)(r.Fragment, {
                children: [
                    A &&
                        (0, r.jsx)(l.sNh, {
                            id: "add-first-rule",
                            label: y.intl.string(y.t.f72Zqb),
                            action: R,
                            disabled: S,
                        }),
                    x.map((e) => {
                        let t = (0, c.V9)(j).reduce((t, n) => {
                            let r = e.actions.find((e) => {
                                let { type: t } = e;
                                return n === t;
                            });
                            if (null == r) return t;
                            let i = (0, f.c)(n, r);
                            return t + ", ".concat(null == i ? void 0 : i.headerText);
                        }, "");
                        return (0, r.jsx)(
                            l.k5B,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, r.jsx)(l.Text, {
                                    color: "text-muted",
                                    className: O.actionTextHeader,
                                    variant: "text-xs/normal",
                                    children: t.slice(2),
                                }),
                                group: "automod-rule-selection",
                                checked: !1,
                                disabled: S,
                                action: () => k(e),
                            },
                            e.id,
                        );
                    }),
                    D &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(l.Clw, {}),
                                (0, r.jsx)(l.sNh, {
                                    id: "add-another-rule",
                                    label: y.intl.string(y.t["0K5jDE"]),
                                    action: R,
                                    disabled: S,
                                }),
                            ],
                        }),
                ],
            })),
        (0, r.jsx)(l.sNh, {
            id: "guild-automod-add-selection",
            label: y.intl.formatToPlainString(y.t.Kkjv1m, { keywordCount: L }),
            onFocus: () => {
                _ || (I(!0), N());
            },
            children: G,
        })
    );
}
