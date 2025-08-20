n.d(t, { Z: () => R }), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(524437),
    o = n(481060),
    s = n(230711),
    l = n(768581),
    c = n(63063),
    u = n(709054),
    d = n(695346),
    f = n(749876),
    _ = n(546957),
    p = n(838436),
    h = n(51331),
    m = n(726985),
    g = n(981631),
    E = n(388032),
    b = n(42101);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 3,
    S = 3;
function A(e) {
    let { applications: t } = e,
        n = i.useMemo(() => t.sort((e, t) => u.default.compare(t.id, e.id)), [t]),
        a = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < T; t++) {
                let r = n[t];
                if (null == r) break;
                e.push(r.name);
            }
            let t = e.join(", "),
                i = n.length - T;
            return i > 0
                ? E.intl.format(E.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              o.Text,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: E.intl.format(E.t["EADv+/"], { count: i }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        c = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < S; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: a, name: s, id: c } = i,
                    u = l.ZP.getApplicationIconURL({
                        id: c,
                        icon: a,
                    });
                e.push(
                    (0, r.jsx)(
                        o.ua7,
                        {
                            text: s,
                            children: (e) =>
                                (0, r.jsx)(
                                    "img",
                                    I(O({}, e), {
                                        src: u,
                                        "aria-label": s,
                                        className: b.icon,
                                    }),
                                ),
                        },
                        c,
                    ),
                );
            }
            let t = n.length - S;
            return (
                t > 0 &&
                    e.push(
                        (0, r.jsx)(
                            "div",
                            {
                                className: b.moreIcon,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: "+".concat(t),
                                }),
                            },
                            "omitted",
                        ),
                    ),
                e
            );
        }, [n]),
        d = i.useCallback(() => {
            s.Z.open(g.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, r.jsxs)("div", {
        className: b.header,
        children: [
            (0, r.jsxs)("div", {
                className: b.gameNamesHeader,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: a,
                    }),
                    (0, r.jsxs)(o.P3F, {
                        onClick: d,
                        className: b.manageGamesLink,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "interactive-normal",
                                children: E.intl.format(E.t.oYaYOT, {}),
                            }),
                            (0, r.jsx)(o.Fbu, {
                                size: "xxs",
                                color: o.TVs.colors.INTERACTIVE_NORMAL,
                                className: b.manageGamesChevron,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: b.divider }),
            (0, r.jsx)("div", {
                className: b.gameIcons,
                children: c,
            }),
        ],
    });
}
function C() {
    let e = d._j.useSetting();
    return (0, r.jsx)(p.U, {
        setting: m.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(h.Z, {
            title: E.intl.string(E.t.XpBObG),
            note: E.intl.format(E.t.oZsHTE, { helpdeskArticle: c.Z.getArticleURL(g.BhN.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: d._j.updateSetting,
        }),
    });
}
function N() {
    let e = d.JG.useSetting(),
        t = e === a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: E.intl.string(E.t.JIFnNz),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            },
            {
                name: E.intl.string(E.t.rRdsk5),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            },
            {
                name: E.intl.string(E.t.AolKwM),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ];
    return (0, r.jsxs)(p.U, {
        setting: m.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(p.H, {
                header: E.intl.string(E.t["ms+TmZ"]),
                description: E.intl.string(E.t["4NN4+/"]),
            }),
            (0, r.jsx)(o.FXm, {
                value: t,
                options: n,
                onChange: (e) => {
                    let { value: t } = e;
                    return d.JG.updateSetting(t);
                },
            }),
        ],
    });
}
function R() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, f.Z)(!0);
    return (0, r.jsx)(_.Z, {
        children: e
            ? (0, r.jsx)(o.$jN, {})
            : t.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(A, { applications: t }),
                        (0, r.jsx)(C, {}),
                        (0, r.jsx)("div", { className: b.divider }),
                        (0, r.jsx)(N, {}),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: b.emptyContainer,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            className: b.noGamesConnectedText,
                            children: E.intl.string(E.t["+0U77e"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.format(E.t.V8wClJ, {
                                helpdeskArticle: c.Z.getArticleURL(g.BhN.SOCIAL_LAYER_CONNECTIONS),
                            }),
                        }),
                    ],
                }),
    });
}
