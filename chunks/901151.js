n.d(t, { Z: () => O }), n(642613), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(524437),
    a = n(481060),
    l = n(230711),
    o = n(768581),
    c = n(63063),
    d = n(709054),
    u = n(695346),
    m = n(749876),
    g = n(546957),
    p = n(838436),
    h = n(51331),
    f = n(726985),
    b = n(981631),
    N = n(388032),
    x = n(296281);
function _(e) {
    let { applications: t } = e,
        n = i.useMemo(() => t.sort((e, t) => d.default.compare(t.id, e.id)), [t]),
        s = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let r = n[t];
                if (null == r) break;
                e.push(r.name);
            }
            let t = e.join(', '),
                i = n.length - 3;
            return i > 0
                ? N.NW.format(N.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              a.Text,
                              {
                                  tag: 'span',
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: N.NW.format(N.t['EADv+/'], { count: i })
                              },
                              t
                          )
                  })
                : e.join(', ');
        }, [n]),
        c = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: s, name: a, id: l } = i,
                    c = o.ZP.getApplicationIconURL({
                        id: i.id,
                        icon: s
                    });
                e.push(
                    (0, r.jsx)(
                        'img',
                        {
                            src: c,
                            'aria-label': a,
                            className: x.icon
                        },
                        l
                    )
                );
            }
            let t = n.length - 3;
            return (
                t > 0 &&
                    e.push(
                        (0, r.jsx)(
                            'div',
                            {
                                className: x.moreIcon,
                                children: (0, r.jsx)(a.Text, {
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
        u = i.useCallback(() => {
            l.Z.open(b.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, r.jsxs)('div', {
        className: x.header,
        children: [
            (0, r.jsxs)('div', {
                className: x.gameNamesHeader,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: s
                    }),
                    (0, r.jsxs)(a.P3F, {
                        onClick: u,
                        className: x.manageGamesLink,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'interactive-normal',
                                children: N.NW.format(N.t.oYaYOT, {})
                            }),
                            (0, r.jsx)(a.Fbu, {
                                size: 'xxs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL,
                                className: x.manageGamesChevron
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', { className: x.divider }),
            (0, r.jsx)('div', {
                className: x.gameIcons,
                children: c
            })
        ]
    });
}
function E() {
    let e = u._j.useSetting();
    return (0, r.jsx)(p.U, {
        setting: f.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(h.Z, {
            title: N.NW.string(N.t.XpBObG),
            note: N.NW.format(N.t.oZsHTE, { helpdeskArticle: c.Z.getArticleURL(b.BhN.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: u._j.updateSetting
        })
    });
}
function j() {
    let e = u.JG.useSetting(),
        t = e === s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: N.NW.string(N.t.JIFnNz),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
            },
            {
                name: N.NW.string(N.t.rRdsk5),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
            },
            {
                name: N.NW.string(N.t.AolKwM),
                value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
            }
        ];
    return (0, r.jsxs)(p.U, {
        setting: f.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(p.H, {
                header: N.NW.string(N.t['ms+TmZ']),
                description: N.NW.string(N.t['4NN4+/'])
            }),
            (0, r.jsx)(a.FXm, {
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
    return (0, r.jsx)(g.Z, {
        children: e
            ? (0, r.jsx)(a.$jN, {})
            : t.length > 0
              ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_, { applications: t }), (0, r.jsx)(E, {}), (0, r.jsx)('div', { className: x.divider }), (0, r.jsx)(j, {})]
                })
              : (0, r.jsxs)('div', {
                    className: x.emptyContainer,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            className: x.noGamesConnectedText,
                            children: N.NW.string(N.t['+0U77e'])
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: N.NW.format(N.t.V8wClJ, { helpdeskArticle: c.Z.getArticleURL(b.BhN.SOCIAL_LAYER_CONNECTIONS) })
                        })
                    ]
                })
    });
}
