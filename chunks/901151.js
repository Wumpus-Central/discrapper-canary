n.d(t, { Z: () => N }), n(642613), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(524437),
    o = n(538534),
    s = n(28664),
    l = n(481060),
    c = n(768581),
    u = n(63063),
    d = n(709054),
    f = n(695346),
    _ = n(313789),
    p = n(749876),
    h = n(947889),
    m = n(546957),
    g = n(838436),
    E = n(51331),
    b = n(726985),
    y = n(981631),
    O = n(388032),
    v = n(42101);
let I = 3,
    T = 3;
function S(e) {
    let { applications: t } = e,
        n = i.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]),
        a = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < I; t++) {
                let r = n[t];
                if (null == r) break;
                e.push(r.name);
            }
            let t = e.join(", "),
                i = n.length - I;
            return i > 0
                ? O.intl.format(O.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              l.Text,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: O.intl.format(O.t["EADv+/"], { count: i }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        o = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < T; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: a, name: o, id: l } = i,
                    u = c.ZP.getApplicationIconURL({
                        id: l,
                        icon: a,
                    });
                e.push(
                    (0, r.jsx)(
                        s.u,
                        {
                            __unsupportedReactNodeAsText: o,
                            children: (0, r.jsx)("img", {
                                src: u,
                                "aria-label": o,
                                className: v.icon,
                            }),
                        },
                        l,
                    ),
                );
            }
            let t = n.length - T;
            return (
                t > 0 &&
                    e.push(
                        (0, r.jsx)(
                            "div",
                            {
                                className: v.moreIcon,
                                children: (0, r.jsx)(l.Text, {
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
        u = (0, h.Z)(),
        f = i.useCallback(() => {
            u(_.n.AUTHORIZED_APPS_PANEL, { section: y.oAB.AUTHORIZED_APPS });
        }, [u]);
    return (0, r.jsxs)("div", {
        className: v.header,
        children: [
            (0, r.jsxs)("div", {
                className: v.gameNamesHeader,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        color: "header-primary",
                        children: a,
                    }),
                    (0, r.jsxs)(l.P3F, {
                        onClick: f,
                        className: v.manageGamesLink,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "interactive-normal",
                                children: O.intl.format(O.t.oYaYOT, {}),
                            }),
                            (0, r.jsx)(l.Fbu, {
                                size: "xxs",
                                color: l.TVs.colors.INTERACTIVE_NORMAL,
                                className: v.manageGamesChevron,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: v.divider }),
            (0, r.jsx)("div", {
                className: v.gameIcons,
                children: o,
            }),
        ],
    });
}
function A() {
    let e = f._j.useSetting();
    return (0, r.jsx)(g.U, {
        setting: b.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(E.ZP, {
            title: O.intl.string(O.t.XpBObG),
            note: O.intl.format(O.t.oZsHTE, { helpdeskArticle: u.Z.getArticleURL(y.BhN.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: f._j.updateSetting,
        }),
    });
}
function C() {
    let e = f.JG.useSetting(),
        t = e === a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: O.intl.string(O.t.JIFnNz),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            },
            {
                name: O.intl.string(O.t.rRdsk5),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            },
            {
                name: O.intl.string(O.t.AolKwM),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ];
    return (0, r.jsxs)(g.U, {
        setting: b.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(g.H, {
                header: O.intl.string(O.t["ms+TmZ"]),
                description: O.intl.string(O.t["4NN4+/"]),
            }),
            (0, r.jsx)(o.E, {
                value: t,
                options: n,
                onChange: (e) => f.JG.updateSetting(e),
            }),
        ],
    });
}
function N() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, p.Z)(!0);
    return (0, r.jsx)(m.Z, {
        children: e
            ? (0, r.jsx)(l.$jN, {})
            : t.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S, { applications: t }),
                        (0, r.jsx)(A, {}),
                        (0, r.jsx)("div", { className: v.divider }),
                        (0, r.jsx)(C, {}),
                    ],
                })
              : (0, r.jsxs)("div", {
                    className: v.emptyContainer,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "header-primary",
                            className: v.noGamesConnectedText,
                            children: O.intl.string(O.t["+0U77e"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: O.intl.format(O.t.V8wClJ, {
                                helpdeskArticle: u.Z.getArticleURL(y.BhN.SOCIAL_LAYER_CONNECTIONS),
                            }),
                        }),
                    ],
                }),
    });
}
