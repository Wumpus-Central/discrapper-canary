n.d(t, { Z: () => I }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(392711),
    l = n(442837),
    a = n(481060),
    o = n(230711),
    c = n(835473),
    d = n(372460),
    u = n(91896),
    m = n(768581),
    h = n(136015),
    g = n(695346),
    _ = n(546957),
    x = n(838436),
    p = n(51331),
    E = n(726985),
    C = n(981631),
    f = n(388032),
    T = n(82873);
function N() {
    let e = (0, l.e7)([u.Z], () => u.Z.getGameFriendCount()),
        [t] = (0, l.e7)(
            [u.Z],
            () => {
                let e = u.Z.getGameRelationships().values();
                return [
                    (0, r.chain)(e)
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
            h.Q
        ),
        n = (0, d.wn)({ location: 'GameFriendDMsSettingHeader' }),
        g = (0, c.Z)(t, n),
        _ = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < 2; t++) {
                let n = g[t];
                if (null == n) break;
                e.push(n.name);
            }
            let t = g.length - 2;
            return t > 0 && e.push(f.intl.format(f.t['EADv+/'], { count: t })), e.join(', ');
        }, [g]),
        x = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < g.length; t++) {
                let n = g[t];
                if (null == n) continue;
                let { icon: s, name: r } = n;
                if (null == s) continue;
                let l = m.ZP.getApplicationIconURL({
                    id: n.id,
                    icon: n.icon
                });
                if (
                    (e.push(
                        (0, i.jsx)(
                            'img',
                            {
                                src: l,
                                'aria-label': r,
                                className: T.icon
                            },
                            r
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
        className: T.header,
        children: [
            (0, i.jsxs)('div', {
                className: T.gameRelationships,
                children: [
                    (0, i.jsxs)('div', {
                        className: T.gameRelationshipsDetails,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: f.intl.format(f.t.iPZSeX, { count: e })
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                children: _
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: T.gameRelationshipIcons,
                        children: x
                    })
                ]
            }),
            (0, i.jsx)('div', { className: T.divider }),
            (0, i.jsx)(a.P3F, {
                onClick: p,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-xs/normal',
                    color: 'interactive-normal',
                    children: f.intl.format(f.t.oYaYOT, {})
                })
            })
        ]
    });
}
function I() {
    let e = g._j.useSetting();
    return (0, i.jsxs)(_.Z, {
        children: [
            (0, i.jsx)(N, {}),
            (0, i.jsx)(x.U, {
                setting: E.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
                children: (0, i.jsx)(p.Z, {
                    title: f.intl.string(f.t['/U8Iwc']),
                    note: f.intl.string(f.t.WO2Hlp),
                    value: e,
                    onChange: g._j.updateSetting
                })
            })
        ]
    });
}
