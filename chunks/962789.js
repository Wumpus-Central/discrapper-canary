n.d(t, {
    A: () => v,
    T: () => j,
}),
    n(638769),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(873298),
    s = n(990078),
    a = n(397927),
    o = n(486020),
    c = n(975571),
    d = n(661191),
    u = n(253932),
    _ = n(780964),
    p = n(978304),
    m = n(840065),
    g = n(744479),
    A = n(871930),
    f = n(578746),
    h = n(531525),
    b = n(652215),
    E = n(985018),
    x = n(419205);

function O(e) {
    let { applications: t } = e,
        n = i.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]),
        l = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let r = n[t];
                if (null == r) break;
                e.push(r.name);
            }
            let t = e.join(", "),
                i = n.length - 3;
            return i > 0
                ? E.intl.format(E.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              a.Text,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: E.intl.format(E.t["EADv+4"], {
                                      count: i,
                                  }),
                              },
                              t,
                          ),
                  })
                : e.join(", ");
        }, [n]),
        c = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: l, name: a, id: c } = i,
                    d = o.Ay.getApplicationIconURL({
                        id: c,
                        icon: l,
                    });
                e.push(
                    (0, r.jsx)(
                        s.m,
                        {
                            __unsupportedReactNodeAsText: a,
                            children: (0, r.jsx)("img", {
                                src: d,
                                "aria-label": a,
                                className: x.Kk,
                            }),
                        },
                        c,
                    ),
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, r.jsx)(
                            "div",
                            {
                                className: x.lK,
                                children: (0, r.jsx)(a.Text, {
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
        }, [n]);
    return (0, r.jsxs)("div", {
        className: x.wx,
        children: [
            (0, r.jsxs)("div", {
                className: x.kX,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: l,
                    }),
                    (0, r.jsxs)(a.DUT, {
                        onClick: () => {
                            (0, m.openUserSettings)(_.X.AUTHORIZED_APPS_PANEL, {
                                section: b.nc_.AUTHORIZED_APPS,
                            });
                        },
                        className: x.bJ,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: E.intl.format(E.t.oYaYOe, {}),
                            }),
                            (0, r.jsx)(a._BQ, {
                                size: "xxs",
                                color: a.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: x.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: x.yF,
            }),
            (0, r.jsx)("div", {
                className: x.lJ,
                children: c,
            }),
        ],
    });
}

function C() {
    let e = u.Zk.useSetting();
    return (0, r.jsx)(A.h, {
        setting: h.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(f.Ay, {
            title: E.intl.string(E.t.XpBObB),
            note: E.intl.format(E.t.oZsHTD, {
                helpdeskArticle: c.A.getArticleURL(b.MVz.SLAYER_GAME_FRIENDS),
            }),
            value: e,
            onChange: u.Zk.updateSetting,
        }),
    });
}

function I() {
    let e = u.TA.useSetting(),
        t = e === l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: E.intl.string(E.t.JIFnN9),
                value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            },
            {
                name: E.intl.string(E.t.rRdsk1),
                value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            },
            {
                name: E.intl.string(E.t.AolKwN),
                value: l.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ];
    return (0, r.jsxs)(A.h, {
        setting: h.H.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(A._, {
                header: E.intl.string(E.t["ms+Tme"]),
                description: E.intl.string(E.t["4NN4+/"]),
            }),
            (0, r.jsx)(a.z6M, {
                value: t,
                options: n,
                onChange: (e) => u.TA.updateSetting(e),
            }),
        ],
    });
}

function T() {
    return (0, r.jsxs)("div", {
        className: x.do,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: x.xV,
                children: E.intl.string(E.t["+0U77d"]),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.format(E.t.V8wClM, {
                    helpdeskArticle: c.A.getArticleURL(b.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}

function S(e) {
    let { applications: t } = e;
    return t.length > 0
        ? (0, r.jsx)(O, {
              applications: t,
          })
        : (0, r.jsx)(T, {});
}

function j() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, p.A)(!0);
    return e
        ? (0, r.jsx)(a.y$y, {})
        : (0, r.jsx)(S, {
              applications: t,
          });
}

function v() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, p.A)(!0);
    return (0, r.jsx)(g.A, {
        children: e
            ? (0, r.jsx)(a.y$y, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(S, {
                          applications: t,
                      }),
                      t.length > 0 &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(C, {}),
                                  (0, r.jsx)("div", {
                                      className: x.yF,
                                  }),
                                  (0, r.jsx)(I, {}),
                              ],
                          }),
                  ],
              }),
    });
}
