n.d(t, { Z: () => v }), n(642613), n(539854);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(524437),
    l = n(481060),
    o = n(384275),
    c = n(230711),
    d = n(870822),
    u = n(881998),
    m = n(768581),
    g = n(63063),
    p = n(709054),
    h = n(695346),
    f = n(546957),
    b = n(838436),
    N = n(51331),
    x = n(726985),
    _ = n(981631),
    E = n(388032),
    j = n(296281);
function C(e) {
    let { applications: t } = e,
        n = i.useMemo(() => t.sort((e, t) => p.default.compare(t.id, e.id)), [t]),
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
                ? E.NW.format(E.t.sHFdTk, {
                      gameList: t,
                      plusMoreHook: (e, t) =>
                          (0, r.jsx)(
                              l.Text,
                              {
                                  tag: 'span',
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: E.NW.format(E.t['EADv+/'], { count: i })
                              },
                              t
                          )
                  })
                : e.join(', ');
        }, [n]),
        a = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < 3; t++) {
                let i = n[t];
                if (null == i) break;
                let { icon: s, name: a, id: l } = i,
                    o = m.ZP.getApplicationIconURL({
                        id: i.id,
                        icon: s
                    });
                e.push(
                    (0, r.jsx)(
                        'img',
                        {
                            src: o,
                            'aria-label': a,
                            className: j.icon
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
                                className: j.moreIcon,
                                children: (0, r.jsx)(l.Text, {
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
        o = i.useCallback(() => {
            c.Z.open(_.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, r.jsxs)('div', {
        className: j.header,
        children: [
            (0, r.jsxs)('div', {
                className: j.gameNamesHeader,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: s
                    }),
                    (0, r.jsxs)(l.P3F, {
                        onClick: o,
                        className: j.manageGamesLink,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'interactive-normal',
                                children: E.NW.format(E.t.oYaYOT, {})
                            }),
                            (0, r.jsx)(l.Fbu, {
                                size: 'xxs',
                                color: l.TVs.colors.INTERACTIVE_NORMAL,
                                className: j.manageGamesChevron
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', { className: j.divider }),
            (0, r.jsx)('div', {
                className: j.gameIcons,
                children: a
            })
        ]
    });
}
function O() {
    let e = h._j.useSetting();
    return (0, r.jsx)(b.U, {
        setting: x.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
        children: (0, r.jsx)(N.Z, {
            title: E.NW.string(E.t.XpBObG),
            note: E.NW.format(E.t.oZsHTE, { helpdeskArticle: g.Z.getArticleURL(_.BhN.SLAYER_GAME_FRIENDS) }),
            value: e,
            onChange: h._j.updateSetting
        })
    });
}
function S() {
    let e = h.JG.useSetting(),
        t = e === a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : e,
        n = [
            {
                name: E.NW.string(E.t.JIFnNz),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
            },
            {
                name: E.NW.string(E.t.rRdsk5),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
            },
            {
                name: E.NW.string(E.t.AolKwM),
                value: a.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
            }
        ];
    return (0, r.jsxs)(b.U, {
        setting: x.s6.PRIVACY_AND_SAFETY_IN_GAME_DMS,
        children: [
            (0, r.jsx)(b.H, {
                header: E.NW.string(E.t['ms+TmZ']),
                description: E.NW.string(E.t['4NN4+/'])
            }),
            (0, r.jsx)(l.FXm, {
                value: t,
                options: n,
                onChange: (e) => {
                    let { value: t } = e;
                    return h.JG.updateSetting(t);
                }
            })
        ]
    });
}
function v() {
    let e = (0, s.e7)([u.Z], () => u.Z.getFetchState()),
        t = (0, s.e7)([u.Z], () => u.Z.getApps()),
        n = i.useMemo(() => (null == t ? [] : t.filter((e) => (0, d.Z)(e.application)).map((e) => e.application)), [t]);
    i.useEffect(() => {
        o.Z.fetch();
    }, []);
    let a = e === u.M.FETCHING && null == t,
        c = n.length > 0;
    return (0, r.jsx)(f.Z, {
        children: a
            ? (0, r.jsx)(l.$jN, {})
            : c
              ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(C, { applications: n }), (0, r.jsx)(O, {}), (0, r.jsx)('div', { className: j.divider }), (0, r.jsx)(S, {})]
                })
              : (0, r.jsxs)('div', {
                    className: j.emptyContainer,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'header-primary',
                            className: j.noGamesConnectedText,
                            children: E.NW.string(E.t['+0U77e'])
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: E.NW.format(E.t.V8wClJ, { helpdeskArticle: g.Z.getArticleURL(_.BhN.SOCIAL_LAYER_CONNECTIONS) })
                        })
                    ]
                })
    });
}
