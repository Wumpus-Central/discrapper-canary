n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    s = n(481060),
    a = n(813197),
    o = n(999382),
    c = n(486324),
    u = n(388032),
    d = n(713611);
function g(e) {
    let { profile: t, handleIconChange: l, canManageGuild: o } = e,
        g = i.useCallback(() => {
            l(null);
        }, [l]),
        m = i.useCallback(
            (e, t) => {
                (0, s.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e("91689"), n.e("59732"), n.e("7016")]).then(
                        n.bind(n, 712451),
                    );
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            (function (e) {
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
                            })(
                                {
                                    uploadType: c.pC.GUILD_ICON,
                                    imageUri: e,
                                    file: t,
                                    onCrop: (e) => {
                                        let { imageUri: t } = e;
                                        return l(t);
                                    },
                                },
                                n,
                            ),
                        );
                }, {});
            },
            [l],
        );
    return (0, r.jsxs)("div", {
        className: d.buttons,
        children: [
            (0, r.jsx)(s.tEY, {
                within: !0,
                children: (0, r.jsxs)("div", {
                    className: d.iconInput,
                    children: [
                        (0, r.jsx)(s.Button, {
                            tabIndex: -1,
                            size: "sm",
                            variant: "primary",
                            disabled: !o,
                            text: u.intl.string(u.t.r3JdsT),
                        }),
                        (0, r.jsx)(a.ZP, {
                            tabIndex: 0,
                            onChange: m,
                            disabled: !o,
                        }),
                    ],
                }),
            }),
            null != t.icon
                ? (0, r.jsx)(s.Button, {
                      variant: "critical-secondary",
                      size: "sm",
                      text: u.intl.string(u.t.x8AlTm),
                      onClick: g,
                      disabled: !o,
                  })
                : null,
        ],
    });
}
function m(e) {
    let { profile: t, canManageGuild: n, onIconChange: i } = e,
        a = (0, l.e7)([o.Z], () => o.Z.getError("icon"));
    return (0, r.jsx)("section", {
        className: d.container,
        children: (0, r.jsx)(s.gNt, {
            label: u.intl.string(u.t.FkQnxJ),
            description: u.intl.string(u.t.KjkA0W),
            errorMessage: a,
            children: (0, r.jsx)(g, {
                profile: t,
                canManageGuild: n,
                handleIconChange: i,
            }),
        }),
    });
}
