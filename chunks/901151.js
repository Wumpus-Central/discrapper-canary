(n.d(t, { Z: () => E }), n(642613), n(539854));
var i = n(255367),
    r = n(73800),
    s = n(524437),
    a = n(481060),
    l = n(230711),
    o = n(768581),
    c = n(63063),
    d = n(709054),
    u = n(695346),
    m = n(749876),
    p = n(546957),
    g = n(838436),
    h = n(51331),
    f = n(726985),
    b = n(981631),
    x = n(388032),
    _ = n(296281);
function j(e) {
    let { applications: t } = e,
        n = r.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]),
        s = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = e.join(', '),
                r = n.length - 3;
            return r > 0
                ? x.intl.format(x.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, i.jsx)(
                              a.Text,
                              {
                                  tag: 'span',
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: x.intl.format(x.t['EADv+/'], { count: r })
                              },
                              t
                          )
                  })
                : e.join(', ');
        }, [n]),
        c = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let r = n[t];
                if (null == r) break;
                let { icon: s, name: l, id: c } = r,
                    d = o.ZP.getApplicationIconURL({
                        id: c,
                        icon: s
                    });
                e.push(
                    (0, i.jsx)(
                        a.ua7,
                        {
                            text: l,
                            children: (e) =>
                                (0, i.jsx)(
                                    'img',
                                    (function (e, t) {
                                        return (
                                            (t = null != t ? t : {}),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var i = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, i);
                                                      }
                                                      return n;
                                                  })(Object(t)).forEach(function (n) {
                                                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                  }),
                                            e
                                        );
                                    })(
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        ((i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i));
                                                    }));
                                            }
                                            return e;
                                        })({}, e),
                                        {
                                            src: d,
                                            'aria-label': l,
                                            className: _.icon
                                        }
                                    )
                                )
                        },
                        c
                    )
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, i.jsx)(
                            'div',
                            {
                                className: _.moreIcon,
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-default',
                                    children: '+'.concat(t)
                                })
                            },
                            'omitted'
                        )
                    ),
                e
            );
        }, [n]),
        u = r.useCallback(() => {
            l.Z.open(b.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, i.jsxs)('div', {
        className: _.header,
        children: [
            (0, i.jsxs)('div', {
                className: _.gameNamesHeader,
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: s
                    }),
                    (0, i.jsxs)(a.P3F, {
                        onClick: u,
                        className: _.manageGamesLink,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'interactive-normal',
                                children: x.intl.format(x.t.oYaYOT, {})
                            }),
                            (0, i.jsx)(a.Fbu, {
                                size: 'xxs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL,
                                className: _.manageGamesChevron
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: _.divider }),
            (0, i.jsx)('div', {
                className: _.gameIcons,
                children: c
            })
        ]
    });
}
function O() {
    let e = u._j.useSetting();
    return (0, i.jsx)(g.U, {
        setting: f.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, i.jsx)(h.Z, {
            title: x.intl.string(x.t.XpBObG),
            note: x.intl.format(x.t.oZsHTE, { helpdeskArticle: c.Z.getArticleURL(b.BhN.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: u._j.updateSetting
        })
    });
}
function C() {
    let e = u.JG.useSetting(),
        t = e === s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: x.intl.string(x.t.JIFnNz),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
            },
            {
                name: x.intl.string(x.t.rRdsk5),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
            },
            {
                name: x.intl.string(x.t.AolKwM),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
            }
        ];
    return (0, i.jsxs)(g.U, {
        setting: f.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, i.jsx)(g.H, {
                header: x.intl.string(x.t['ms+TmZ']),
                description: x.intl.string(x.t['4NN4+/'])
            }),
            (0, i.jsx)(a.FXm, {
                value: t,
                options: n,
                onChange: (e) => {
                    let { value: t } = e;
                    return u.JG.updateSetting(t);
                }
            })
        ]
    });
}
function E() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, m.Z)(!0);
    return (0, i.jsx)(p.Z, {
        children: e
            ? (0, i.jsx)(a.$jN, {})
            : t.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(j, { applications: t }), (0, i.jsx)(O, {}), (0, i.jsx)('div', { className: _.divider }), (0, i.jsx)(C, {})]
                })
              : (0, i.jsxs)('div', {
                    className: _.emptyContainer,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            className: _.noGamesConnectedText,
                            children: x.intl.string(x.t['+0U77e'])
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: x.intl.format(x.t.V8wClJ, { helpdeskArticle: c.Z.getArticleURL(b.BhN.SOCIAL_LAYER_CONNECTIONS) })
                        })
                    ]
                })
    });
}
