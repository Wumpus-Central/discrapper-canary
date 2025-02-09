n.d(t, { Z: () => T }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    r = n(442837),
    a = n(481060),
    o = n(230711),
    c = n(835473),
    d = n(372460),
    u = n(91896),
    h = n(768581),
    m = n(136015),
    g = n(695346),
    x = n(546957),
    _ = n(838436),
    p = n(51331),
    E = n(726985),
    C = n(981631),
    N = n(388032),
    f = n(318889);
function I() {
    let e = (0, r.e7)([u.Z], () => u.Z.getGameFriendCount()),
        [t] = (0, r.e7)(
            [u.Z],
            () => {
                let e = u.Z.getGameRelationships().values();
                return [
                    (0, l.chain)(e)
                        .filter((e) => {
                            let { type: t } = e;
                            return t === C.OGo.FRIEND;
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
            m.Q
        ),
        n = (0, d.wn)({ location: 'GameFriendDMsSettingHeader' }),
        g = (0, c.Z)(t, n),
        x = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < 2; t++) {
                let n = g[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = g.length - 2;
            return t > 0 && e.push(N.intl.format(N.t['EADv+/'], { count: t })), e.join(', ');
        }, [g]),
        _ = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < g.length; t++) {
                let n = g[t];
                if (null == n) continue;
                let { icon: s, name: l } = n;
                if (null == s) continue;
                let r = h.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon
                });
                if (
                    (e.push(
                        (0, i.jsx)(
                            'img',
                            {
                                src: r,
                                'aria-label': l,
                                className: f.icon
                            },
                            l
                        )
                    ),
                    3 === e.length)
                )
                    break;
            }
            return e;
        }, [g]),
        p = s.useCallback(() => {
            o.Z.open(C.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, i.jsxs)('div', {
        className: f.header,
        children: [
            (0, i.jsxs)('div', {
                className: f.gameRelationships,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.gameRelationshipsDetails,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: N.intl.format(N.t.iPZSeX, { count: e })
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                children: x
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: f.gameRelationshipIcons,
                        children: _
                    })
                ]
            }),
            (0, i.jsx)('div', { className: f.divider }),
            (0, i.jsx)(a.P3F, {
                onClick: p,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'interactive-normal',
                    children: N.intl.format(N.t.oYaYOT, {})
                })
            })
        ]
    });
}
function T() {
    let e = g._j.useSetting();
    return (0, i.jsxs)(x.Z, {
        children: [
            (0, i.jsx)(I, {}),
            (0, i.jsx)(_.U, {
                setting: E.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
                children: (0, i.jsx)(p.Z, {
                    title: N.intl.string(N.t['/U8Iwc']),
                    note: N.intl.string(N.t.WO2Hlp),
                    value: e,
                    onChange: g._j.updateSetting
                })
            })
        ]
    });
}
