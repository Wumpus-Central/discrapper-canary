n.d(t, { Z: () => w }), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(524437),
    o = n(538534),
    s = n(481060),
    l = n(768581),
    c = n(63063),
    u = n(709054),
    d = n(695346),
    f = n(313789),
    _ = n(749876),
    p = n(947889),
    h = n(546957),
    m = n(838436),
    g = n(51331),
    E = n(726985),
    b = n(981631),
    y = n(388032),
    O = n(511693);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 3,
    C = 3;
function N(e) {
    let { applications: t } = e,
        n = i.useMemo(() => t.sort((e, t) => u.default.compare(t.id, e.id)), [t]),
        a = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < A; t++) {
                let r = n[t];
                if (null == r) break;
                e.push(r.name);
            }
            let t = e.join(", "),
                i = n.length - A;
            return i > 0
                ? y.intl.format(y.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              s.Text,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: y.intl.format(y.t["EADv+/"], { count: i }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        o = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < C; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: a, name: o, id: c } = i,
                    u = l.ZP.getApplicationIconURL({
                        id: c,
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
                                    S(I({}, e), {
                                        src: u,
                                        "aria-label": o,
                                        className: O.icon,
                                    }),
                                ),
                        },
                        c,
                    ),
                );
            }
            let t = n.length - C;
            return (
                t > 0 &&
                    e.push(
                        (0, r.jsx)(
                            "div",
                            {
                                className: O.moreIcon,
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
        c = (0, p.Z)(),
        d = i.useCallback(() => {
            c(f.n.AUTHORIZED_APPS_PANEL, { section: b.oAB.AUTHORIZED_APPS });
        }, [c]);
    return (0, r.jsxs)("div", {
        className: O.header,
        children: [
            (0, r.jsxs)("div", {
                className: O.gameNamesHeader,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: a,
                    }),
                    (0, r.jsxs)(s.P3F, {
                        onClick: d,
                        className: O.manageGamesLink,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "interactive-normal",
                                children: y.intl.format(y.t.oYaYOT, {}),
                            }),
                            (0, r.jsx)(s.Fbu, {
                                size: "xxs",
                                color: s.TVs.colors.INTERACTIVE_NORMAL,
                                className: O.manageGamesChevron,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: O.divider }),
            (0, r.jsx)("div", {
                className: O.gameIcons,
                children: o,
            }),
        ],
    });
}
function R() {
    let e = d._j.useSetting();
    return (0, r.jsx)(m.U, {
        setting: E.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(g.Z, {
            title: y.intl.string(y.t.XpBObG),
            note: y.intl.format(y.t.oZsHTE, { helpdeskArticle: c.Z.getArticleURL(b.BhN.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: d._j.updateSetting,
        }),
    });
}
function P() {
    let e = d.JG.useSetting(),
        t = e === a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: y.intl.string(y.t.JIFnNz),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            },
            {
                name: y.intl.string(y.t.rRdsk5),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            },
            {
                name: y.intl.string(y.t.AolKwM),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ];
    return (0, r.jsxs)(m.U, {
        setting: E.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(m.H, {
                header: y.intl.string(y.t["ms+TmZ"]),
                description: y.intl.string(y.t["4NN4+/"]),
            }),
            (0, r.jsx)(o.E, {
                value: t,
                options: n,
                onChange: (e) => d.JG.updateSetting(e),
            }),
        ],
    });
}
function w() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, _.Z)(!0);
    return (0, r.jsx)(h.Z, {
        children: e
            ? (0, r.jsx)(s.$jN, {})
            : t.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(N, { applications: t }),
                        (0, r.jsx)(R, {}),
                        (0, r.jsx)("div", { className: O.divider }),
                        (0, r.jsx)(P, {}),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: O.emptyContainer,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            className: O.noGamesConnectedText,
                            children: y.intl.string(y.t["+0U77e"]),
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: y.intl.format(y.t.V8wClJ, {
                                helpdeskArticle: c.Z.getArticleURL(b.BhN.SOCIAL_LAYER_CONNECTIONS),
                            }),
                        }),
                    ],
                }),
    });
}
