n.d(t, { A: () => v, T: () => R }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(873298),
    a = n(990078),
    l = n(397927),
    o = n(486020),
    c = n(975571),
    d = n(661191),
    u = n(253932),
    _ = n(780964),
    m = n(978304),
    A = n(840065),
    g = n(744479),
    E = n(871930),
    h = n(578746),
    p = n(531525),
    C = n(652215),
    x = n(985018),
    T = n(419205);
function I(e) {
    let { applications: t } = e,
        n = s.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]),
        r = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = e.join(", "),
                s = n.length - 3;
            return s > 0
                ? x.intl.format(x.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, i.jsx)(
                              l.Text,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: x.intl.format(x.t["EADv+4"], { count: s }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        c = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let s = n[t];
                if (null == s) break;
                let { icon: r, name: l, id: c } = s,
                    d = o.Ay.getApplicationIconURL({ id: c, icon: r });
                e.push(
                    (0, i.jsx)(
                        a.m,
                        {
                            __unsupportedReactNodeAsText: l,
                            children: (0, i.jsx)("img", { src: d, "aria-label": l, className: T.Kk }),
                        },
                        c,
                    ),
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, i.jsx)(
                            "div",
                            {
                                className: T.lK,
                                children: (0, i.jsx)(l.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: `+${t}`,
                                }),
                            },
                            "omitted",
                        ),
                    ),
                e
            );
        }, [n]);
    return (0, i.jsxs)("div", {
        className: T.wx,
        children: [
            (0, i.jsxs)("div", {
                className: T.kX,
                children: [
                    (0, i.jsx)(l.Text, { variant: "text-md/normal", color: "text-strong", children: r }),
                    (0, i.jsxs)(l.DUT, {
                        onClick: () => {
                            (0, A.openUserSettings)(_.X.AUTHORIZED_APPS_PANEL, { section: C.nc_.AUTHORIZED_APPS });
                        },
                        className: T.bJ,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: x.intl.format(x.t.oYaYOe, {}),
                            }),
                            (0, i.jsx)(l._BQ, {
                                size: "xxs",
                                color: l.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: T.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: T.yF }),
            (0, i.jsx)("div", { className: T.lJ, children: c }),
        ],
    });
}
function S() {
    let e = u.Zk.useSetting();
    return (0, i.jsx)(E.h, {
        setting: p.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, i.jsx)(h.Ay, {
            title: x.intl.string(x.t.XpBObB),
            note: x.intl.format(x.t.oZsHTD, { helpdeskArticle: c.A.getArticleURL(C.MVz.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: u.Zk.updateSetting,
        }),
    });
}
function f() {
    let e = u.TA.useSetting(),
        t = e === r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            { name: x.intl.string(x.t.JIFnN9), value: r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
            { name: x.intl.string(x.t.rRdsk1), value: r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
            { name: x.intl.string(x.t.AolKwN), value: r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
        ];
    return (0, i.jsxs)(E.h, {
        setting: p.H.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, i.jsx)(E._, { header: x.intl.string(x.t["ms+Tme"]), description: x.intl.string(x.t["4NN4+/"]) }),
            (0, i.jsx)(l.z6M, { value: t, options: n, onChange: (e) => u.TA.updateSetting(e) }),
        ],
    });
}
function N() {
    return (0, i.jsxs)("div", {
        className: T.do,
        children: [
            (0, i.jsx)(l.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: T.xV,
                children: x.intl.string(x.t["+0U77d"]),
            }),
            (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: x.intl.format(x.t.V8wClM, {
                    helpdeskArticle: c.A.getArticleURL(C.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}
function b(e) {
    let { applications: t } = e;
    return t.length > 0 ? (0, i.jsx)(I, { applications: t }) : (0, i.jsx)(N, {});
}
function R() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, m.A)(!0);
    return e ? (0, i.jsx)(l.y$y, {}) : (0, i.jsx)(b, { applications: t });
}
function v() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, m.A)(!0);
    return (0, i.jsx)(g.A, {
        children: e
            ? (0, i.jsx)(l.y$y, {})
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(b, { applications: t }),
                      t.length > 0 &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(S, {}), (0, i.jsx)("div", { className: T.yF }), (0, i.jsx)(f, {})],
                          }),
                  ],
              }),
    });
}
