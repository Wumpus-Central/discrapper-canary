n.d(t, { Z: () => P }), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(524437),
    o = n(755721),
    s = n(481060),
    l = n(230711),
    c = n(768581),
    u = n(63063),
    d = n(709054),
    f = n(695346),
    _ = n(749876),
    p = n(546957),
    h = n(838436),
    m = n(51331),
    g = n(726985),
    E = n(981631),
    b = n(388032),
    y = n(511693);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 3,
    A = 3;
function C(e) {
    let { applications: t } = e,
        n = i.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]),
        a = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < S; t++) {
                let r = n[t];
                if (null == r) break;
                e.push(r.name);
            }
            let t = e.join(", "),
                i = n.length - S;
            return i > 0
                ? b.intl.format(b.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              s.Text,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: b.intl.format(b.t["EADv+/"], { count: i }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        o = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < A; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: a, name: o, id: l } = i,
                    u = c.ZP.getApplicationIconURL({
                        id: l,
                        icon: a,
                    });
                e.push(
                    (0, r.jsx)(
                        s.ua7,
                        {
                            text: o,
                            children: (e) =>
                                (0, r.jsx)(
                                    "img",
                                    T(v({}, e), {
                                        src: u,
                                        "aria-label": o,
                                        className: y.icon,
                                    }),
                                ),
                        },
                        l,
                    ),
                );
            }
            let t = n.length - A;
            return (
                t > 0 &&
                    e.push(
                        (0, r.jsx)(
                            "div",
                            {
                                className: y.moreIcon,
                                children: (0, r.jsx)(s.Text, {
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
        u = i.useCallback(() => {
            l.Z.open(E.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, r.jsxs)("div", {
        className: y.header,
        children: [
            (0, r.jsxs)("div", {
                className: y.gameNamesHeader,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: a,
                    }),
                    (0, r.jsxs)(s.P3F, {
                        onClick: u,
                        className: y.manageGamesLink,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "interactive-normal",
                                children: b.intl.format(b.t.oYaYOT, {}),
                            }),
                            (0, r.jsx)(s.Fbu, {
                                size: "xxs",
                                color: s.TVs.colors.INTERACTIVE_NORMAL,
                                className: y.manageGamesChevron,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: y.divider }),
            (0, r.jsx)("div", {
                className: y.gameIcons,
                children: o,
            }),
        ],
    });
}
function N() {
    let e = f._j.useSetting();
    return (0, r.jsx)(h.U, {
        setting: g.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(m.Z, {
            title: b.intl.string(b.t.XpBObG),
            note: b.intl.format(b.t.oZsHTE, { helpdeskArticle: u.Z.getArticleURL(E.BhN.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: f._j.updateSetting,
        }),
    });
}
function R() {
    let e = f.JG.useSetting(),
        t = e === a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: b.intl.string(b.t.JIFnNz),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            },
            {
                name: b.intl.string(b.t.rRdsk5),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            },
            {
                name: b.intl.string(b.t.AolKwM),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ];
    return (0, r.jsxs)(h.U, {
        setting: g.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(h.H, {
                header: b.intl.string(b.t["ms+TmZ"]),
                description: b.intl.string(b.t["4NN4+/"]),
            }),
            (0, r.jsx)(o.Gu, {
                value: t,
                options: n,
                onChange: (e) => {
                    let { value: t } = e;
                    return f.JG.updateSetting(t);
                },
            }),
        ],
    });
}
function P() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, _.Z)(!0);
    return (0, r.jsx)(p.Z, {
        children: e
            ? (0, r.jsx)(s.$jN, {})
            : t.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(C, { applications: t }),
                        (0, r.jsx)(N, {}),
                        (0, r.jsx)("div", { className: y.divider }),
                        (0, r.jsx)(R, {}),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: y.emptyContainer,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            className: y.noGamesConnectedText,
                            children: b.intl.string(b.t["+0U77e"]),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: b.intl.format(b.t.V8wClJ, {
                                helpdeskArticle: u.Z.getArticleURL(E.BhN.SOCIAL_LAYER_CONNECTIONS),
                            }),
                        }),
                    ],
                }),
    });
}
