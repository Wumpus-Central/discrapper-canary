n.d(t, { Z: () => O }), n(642613), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(524437),
    l = n(481060),
    a = n(230711),
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
    _ = n(388032),
    x = n(296281);
function E(e) {
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
                ? _.intl.format(_.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, i.jsx)(
                              l.Text,
                              {
                                  tag: 'span',
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: _.intl.format(_.t['EADv+/'], { count: r })
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
                let { icon: s, name: a, id: c } = r,
                    d = o.ZP.getApplicationIconURL({
                        id: c,
                        icon: s
                    });
                e.push(
                    (0, i.jsx)(
                        l.ua7,
                        {
                            text: a,
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
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({}, e),
                                        {
                                            src: d,
                                            'aria-label': a,
                                            className: x.icon
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
                                className: x.moreIcon,
                                children: (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
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
            a.Z.open(b.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, i.jsxs)('div', {
        className: x.header,
        children: [
            (0, i.jsxs)('div', {
                className: x.gameNamesHeader,
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: s
                    }),
                    (0, i.jsxs)(l.P3F, {
                        onClick: u,
                        className: x.manageGamesLink,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'interactive-normal',
                                children: _.intl.format(_.t.oYaYOT, {})
                            }),
                            (0, i.jsx)(l.Fbu, {
                                size: 'xxs',
                                color: l.TVs.colors.INTERACTIVE_NORMAL,
                                className: x.manageGamesChevron
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', { className: x.divider }),
            (0, i.jsx)('div', {
                className: x.gameIcons,
                children: c
            })
        ]
    });
}
function j() {
    let e = u._j.useSetting();
    return (0, i.jsx)(g.U, {
        setting: f.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, i.jsx)(h.Z, {
            title: _.intl.string(_.t.XpBObG),
            note: _.intl.format(_.t.oZsHTE, { helpdeskArticle: c.Z.getArticleURL(b.BhN.SLAYER_GAME_FRIENDS) }),
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
                name: _.intl.string(_.t.JIFnNz),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
            },
            {
                name: _.intl.string(_.t.rRdsk5),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
            },
            {
                name: _.intl.string(_.t.AolKwM),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
            }
        ];
    return (0, i.jsxs)(g.U, {
        setting: f.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, i.jsx)(g.H, {
                header: _.intl.string(_.t['ms+TmZ']),
                description: _.intl.string(_.t['4NN4+/'])
            }),
            (0, i.jsx)(l.FXm, {
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
function O() {
    let { showLoadingIndicator: e, slayerSdkApplications: t } = (0, m.Z)();
    return (0, i.jsx)(p.Z, {
        children: e
            ? (0, i.jsx)(l.$jN, {})
            : t.length > 0
              ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E, { applications: t }), (0, i.jsx)(j, {}), (0, i.jsx)('div', { className: x.divider }), (0, i.jsx)(C, {})]
                })
              : (0, i.jsxs)('div', {
                    className: x.emptyContainer,
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            className: x.noGamesConnectedText,
                            children: _.intl.string(_.t['+0U77e'])
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: _.intl.format(_.t.V8wClJ, { helpdeskArticle: c.Z.getArticleURL(b.BhN.SOCIAL_LAYER_CONNECTIONS) })
                        })
                    ]
                })
    });
}
