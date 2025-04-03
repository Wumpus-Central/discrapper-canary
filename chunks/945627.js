n.d(t, { Z: () => O }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n(442837),
    l = n(481060),
    o = n(230711),
    c = n(835473),
    d = n(372460),
    u = n(91896),
    m = n(768581),
    g = n(136015),
    p = n(695346),
    h = n(546957),
    f = n(838436),
    b = n(51331),
    N = n(726985),
    x = n(981631),
    _ = n(388032),
    E = n(652045);
function j() {
    let e = (0, a.e7)([u.Z], () => u.Z.getGameFriendCount()),
        [t] = (0, a.e7)(
            [u.Z],
            () => {
                let e = u.Z.getGameRelationshipsByType(x.OGo.FRIEND);
                return [
                    (0, s.chain)(e)
                        .filter((e) => {
                            let { type: t } = e;
                            return t === x.OGo.FRIEND;
                        })
                        .map((e) => {
                            let { applicationId: t } = e;
                            return t;
                        })
                        .uniq()
                        .sortBy((e) => u.Z.getGameFriendsForApplication(e).length)
                        .take(3)
                        .value(),
                    u.Z.getGameRelationshipsVersion()
                ];
            },
            [],
            g.Q
        ),
        n = (0, d.wn)({ location: 'GameFriendDMsSettingHeader' }),
        p = (0, c.Z)(t, n),
        h = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < 2; t++) {
                let n = p[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = p.length - 2;
            return t > 0 && e.push(_.NW.format(_.t['EADv+/'], { count: t })), e.join(', ');
        }, [p]),
        f = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < p.length; t++) {
                let n = p[t];
                if (null == n) continue;
                let { icon: i, name: s } = n;
                if (null == i) continue;
                let a = m.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon
                });
                if (
                    (e.push(
                        (0, r.jsx)(
                            'img',
                            {
                                src: a,
                                'aria-label': s,
                                className: E.icon
                            },
                            s
                        )
                    ),
                    3 === e.length)
                )
                    break;
            }
            return e;
        }, [p]),
        b = i.useCallback(() => {
            o.Z.open(x.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, r.jsxs)('div', {
        className: E.header,
        children: [
            (0, r.jsxs)('div', {
                className: E.gameRelationships,
                children: [
                    (0, r.jsxs)('div', {
                        className: E.gameRelationshipsDetails,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: _.NW.format(_.t.iPZSeX, { count: e })
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                children: h
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: E.gameRelationshipIcons,
                        children: f
                    })
                ]
            }),
            (0, r.jsx)('div', { className: E.divider }),
            (0, r.jsxs)(l.P3F, {
                onClick: b,
                className: E.manageGamesLink,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: 'interactive-normal',
                        children: _.NW.format(_.t.oYaYOT, {})
                    }),
                    (0, r.jsx)(l.Fbu, {
                        size: 'xxs',
                        color: l.TVs.colors.INTERACTIVE_NORMAL,
                        className: E.manageGamesChevron
                    })
                ]
            })
        ]
    });
}
function O() {
    let e = p._j.useSetting();
    return (0, r.jsxs)(h.Z, {
        children: [
            (0, r.jsx)(j, {}),
            (0, r.jsx)(f.U, {
                setting: N.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
                children: (0, r.jsx)(b.Z, {
                    title: _.NW.string(_.t['/U8Iwc']),
                    note: _.NW.string(_.t.WO2Hlp),
                    value: e,
                    onChange: p._j.updateSetting
                })
            })
        ]
    });
}
