n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    s = n(392711),
    a = n(442837),
    l = n(481060),
    o = n(384275),
    c = n(230711),
    d = n(91896),
    u = n(906912),
    m = n(881998),
    g = n(768581),
    h = n(695346),
    p = n(546957),
    x = n(838436),
    f = n(51331),
    _ = n(726985),
    E = n(981631),
    C = n(388032),
    T = n(82873);
function S() {
    let e = (0, a.e7)([d.Z], () => d.Z.getGameRelationshipCount()),
        t = (0, u.U)(),
        n = (0, a.Wu)([d.Z], () =>
            (0, s.sortBy)(t, (e) => {
                let { id: t } = e;
                return d.Z.getGameFriendsForApplication(t).length;
            })
        ),
        h = (0, a.e7)([m.Z], () => m.Z.getFetchState() !== m.M.NOT_FETCHED);
    r.useEffect(() => {
        !h && o.Z.fetch();
    }, [h]);
    let p = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < 2; t++) {
                let i = n[t];
                if (null == i) break;
                e.push(i.name);
            }
            let t = n.length - 2;
            return t > 0 && e.push(C.intl.format(C.t['EADv+/'], { count: t })), e.join(', ');
        }, [n]),
        x = r.useMemo(() => {
            let e = [];
            for (let t = 0; t < n.length; t++) {
                let r = n[t];
                if (null == r) continue;
                let { icon: s, name: a } = r;
                if (null == s) continue;
                let l = g.ZP.getApplicationIconURL({
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
                                className: T.icon
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
        f = r.useCallback(() => {
            c.Z.open(E.oAB.AUTHORIZED_APPS);
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
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-primary',
                                children: C.intl.format(C.t.iPZSeX, { count: e })
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                children: p
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
            (0, i.jsx)(l.Clickable, {
                onClick: f,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'interactive-normal',
                    children: C.intl.format(C.t.oYaYOT, {})
                })
            })
        ]
    });
}
function b() {
    let e = h._j.useSetting();
    return (0, i.jsxs)(p.Z, {
        children: [
            (0, i.jsx)(S, {}),
            (0, i.jsx)(x.U, {
                setting: _.s6.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS,
                children: (0, i.jsx)(f.Z, {
                    title: C.intl.string(C.t['/U8Iwc']),
                    note: C.intl.string(C.t.WO2Hlp),
                    value: e,
                    onChange: h._j.updateSetting
                })
            })
        ]
    });
}
