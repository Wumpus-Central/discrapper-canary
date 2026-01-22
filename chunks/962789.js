n.d(t, {
    A: () => w,
    T: () => R,
}),
    n(638769),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(873298),
    s = n(990078),
    o = n(397927),
    l = n(486020),
    c = n(975571),
    u = n(661191),
    d = n(253932),
    f = n(780964),
    p = n(978304),
    _ = n(840065),
    h = n(744479),
    m = n(871930),
    g = n(578746),
    E = n(531525),
    b = n(652215),
    y = n(985018),
    O = n(419205);
let A = 3,
    v = 3;

function S(e) {
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
                ? y.intl.format(y.t.sHFdTg, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              o.Text,
                              {
                                  tag: "span",
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: y.intl.format(y.t["EADv+4"], {
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
            for (let t = 0; t < v; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: a, name: o, id: c } = i,
                    u = l.Ay.getApplicationIconURL({
                        id: c,
                        icon: a,
                    });
                e.push(
                    (0, r.jsx)(
                        s.m,
                        {
                            __unsupportedReactNodeAsText: o,
                            children: (0, r.jsx)("img", {
                                src: u,
                                "aria-label": o,
                                className: O.Kk,
                            }),
                        },
                        c,
                    ),
                );
            }
            let t = n.length - v;
            return (
                t > 0 &&
                    e.push(
                        (0, r.jsx)(
                            "div",
                            {
                                className: O.lK,
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
        d = () => {
            (0, _.openUserSettings)(f.X.AUTHORIZED_APPS_PANEL, {
                section: b.nc_.AUTHORIZED_APPS,
            });
        };
    return (0, r.jsxs)("div", {
        className: O.wx,
        children: [
            (0, r.jsxs)("div", {
                className: O.kX,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        children: a,
                    }),
                    (0, r.jsxs)(o.DUT, {
                        onClick: d,
                        className: O.bJ,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "interactive-text-default",
                                children: y.intl.format(y.t.oYaYOe, {}),
                            }),
                            (0, r.jsx)(o._BQ, {
                                size: "xxs",
                                color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: O.g7,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: O.yF,
            }),
            (0, r.jsx)("div", {
                className: O.lJ,
                children: c,
            }),
        ],
    });
}

function I() {
    let e = d.Zk.useSetting();
    return (0, r.jsx)(m.h, {
        setting: E.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(g.Ay, {
            title: y.intl.string(y.t.XpBObB),
            note: y.intl.format(y.t.oZsHTD, {
                helpdeskArticle: c.A.getArticleURL(b.MVz.SLAYER_GAME_FRIENDS),
            }),
            value: e,
            onChange: d.Zk.updateSetting,
        }),
    });
}

function T() {
    let e = d.TA.useSetting(),
        t = e === a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: y.intl.string(y.t.JIFnN9),
                value: a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            },
            {
                name: y.intl.string(y.t.rRdsk1),
                value: a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            },
            {
                name: y.intl.string(y.t.AolKwN),
                value: a.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            },
        ];
    return (0, r.jsxs)(m.h, {
        setting: E.H.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(m._, {
                header: y.intl.string(y.t["ms+Tme"]),
                description: y.intl.string(y.t["4NN4+/"]),
            }),
            (0, r.jsx)(o.z6M, {
                value: t,
                options: n,
                onChange: (e) => d.TA.updateSetting(e),
            }),
        ],
    });
}

function C() {
    return (0, r.jsxs)("div", {
        className: O.do,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                className: O.xV,
                children: y.intl.string(y.t["+0U77d"]),
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: y.intl.format(y.t.V8wClM, {
                    helpdeskArticle: c.A.getArticleURL(b.MVz.SOCIAL_LAYER_CONNECTIONS),
                }),
            }),
        ],
    });
}

function N(e) {
    let { applications: t } = e;
    return t.length > 0
        ? (0, r.jsx)(S, {
              applications: t,
          })
        : (0, r.jsx)(C, {});
}

function R() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, p.A)(!0);
    return e
        ? (0, r.jsx)(o.y$y, {})
        : (0, r.jsx)(N, {
              applications: t,
          });
}

function w() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, p.A)(!0);
    return (0, r.jsx)(h.A, {
        children: e
            ? (0, r.jsx)(o.y$y, {})
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(N, {
                          applications: t,
                      }),
                      t.length > 0 &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(I, {}),
                                  (0, r.jsx)("div", {
                                      className: O.yF,
                                  }),
                                  (0, r.jsx)(T, {}),
                              ],
                          }),
                  ],
              }),
    });
}
