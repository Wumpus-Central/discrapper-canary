n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    s = n(392711),
    a = n(442837),
    l = n(481060),
    o = n(230711),
    c = n(91896),
    d = n(412954),
    u = n(114504),
    m = n(768581),
    g = n(695346),
    h = n(546957),
    p = n(838436),
    x = n(51331),
    f = n(726985),
    _ = n(981631),
    E = n(388032),
    C = n(82873);
function T() {
    let e = (0, a.e7)([c.Z], () => c.Z.getGameRelationshipCount()),
        t = (0, u.U)(),
        n = (0, a.Wu)([c.Z], () =>
            (0, s.sortBy)(t, (e) => {
                let { id: t } = e;
                return c.Z.getGameFriendsForApplication(t).length;
            })
        ),
        g = (0, d.x)({ location: 'GameFriendDMsSettingHeader' });
    r.useEffect(() => {
        g();
    }, [g]);
    let h = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < 2; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = n.length - 2;
            return t > 0 && e.push(E.intl.format(E.t['EADv+/'], { count: t })), e.join(', ');
        }, [n]),
        p = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < n.length; t++) {
                let r = n[t];
                if (null == r) continue;
                let { icon: s, name: a } = r;
                if (null == s) continue;
                let l = m.ZP.getApplicationIconURL({
                    id: r.id,
                    icon: r.icon
                });
                if (
                    (e.push(
                        (0, i.jsx)(
                            'img',
                            {
                                src: l,
                                'aria-label': a,
                                className: C.icon
                            },
                            a
                        )
                    ),
                    3 === e.length)
                )
                    break;
            }
            return e;
        }, [n]),
        x = r.useCallback(() => {
            o.Z.open(_.oAB.AUTHORIZED_APPS);
        }, []);
    return (0, i.jsxs)('div', {
        className: C.header,
        children: [
            (0, i.jsxs)('div', {
                className: C.gameRelationships,
                children: [
                    (0, i.jsxs)('div', {
                        className: C.gameRelationshipsDetails,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: E.intl.format(E.t.iPZSeX, { count: e })
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                children: h
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: C.gameRelationshipIcons,
                        children: p
                    })
                ]
            }),
            (0, i.jsx)('div', { className: C.divider }),
            (0, i.jsx)(l.Clickable, {
                onClick: x,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'interactive-normal',
                    children: E.intl.format(E.t.oYaYOT, {})
                })
            })
        ]
    });
}
function S() {
    let e = g._j.useSetting();
    return (0, i.jsxs)(h.Z, {
        children: [
            (0, i.jsx)(T, {}),
            (0, i.jsx)(p.U, {
                setting: f.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
                children: (0, i.jsx)(x.Z, {
                    title: E.intl.string(E.t['/U8Iwc']),
                    note: E.intl.string(E.t.WO2Hlp),
                    value: e,
                    onChange: g._j.updateSetting
                })
            })
        ]
    });
}
