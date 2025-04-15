n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var a = n(313361),
    i = n(697988),
    l = n(683860),
    s = n(481060),
    o = n(109434),
    c = n(228392),
    d = n(388032),
    u = n(987097);
function m(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: m, layoutType: h, tagSetting: g } = (0, o.H)(t.id),
        f = (0, o.v)(),
        p = t.isMediaChannel(),
        x = (e) => {
            (0, c.KR)({
                guildId: t.guild_id,
                channelId: t.id,
                sortOrder: e
            }),
                f.getState().setSortOrder(t.id, e),
                n();
        },
        b = (e) => {
            (0, c.Do)({
                guildId: t.guild_id,
                channelId: t.id,
                forumLayout: e
            }),
                f.getState().setLayoutType(t.id, e),
                n();
        },
        j = (e) => {
            f.getState().setTagSetting(t.id, e), n();
        };
    return (0, r.jsx)('div', {
        className: u.container,
        children: (0, r.jsxs)(s.v2r, {
            navId: 'sort-and-view',
            'aria-label': p ? d.NW.string(d.t['kQN/bm']) : d.NW.string(d.t.DJzbkJ),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, r.jsxs)(s.kSQ, {
                    label: d.NW.string(d.t.f8wNDg),
                    children: [
                        (0, r.jsx)(s.k5B, {
                            id: 'sort-by-recent-activity',
                            group: 'sort-by',
                            label: d.NW.string(d.t.jOPmcH),
                            action: () => x(l.z.LATEST_ACTIVITY),
                            checked: m === l.z.LATEST_ACTIVITY
                        }),
                        (0, r.jsx)(s.k5B, {
                            id: 'sort-by-date-posted',
                            group: 'sort-by',
                            label: d.NW.string(d.t.UIltXV),
                            action: () => x(l.z.CREATION_DATE),
                            checked: m === l.z.CREATION_DATE
                        })
                    ]
                }),
                !t.isMediaChannel() &&
                    (0, r.jsxs)(s.kSQ, {
                        label: d.NW.string(d.t.mFMDSk),
                        children: [
                            (0, r.jsx)(s.k5B, {
                                id: 'view-as-list',
                                group: 'view-as',
                                label: d.NW.string(d.t['NJFr+v']),
                                action: () => b(a.X.LIST),
                                checked: h === a.X.LIST
                            }),
                            (0, r.jsx)(s.k5B, {
                                id: 'view-as-grid',
                                group: 'view-as',
                                label: d.NW.string(d.t.wKeggY),
                                action: () => b(a.X.GRID),
                                checked: h === a.X.GRID
                            })
                        ]
                    }),
                (0, r.jsxs)(s.kSQ, {
                    label: d.NW.string(d.t.Paxaur),
                    children: [
                        (0, r.jsx)(s.k5B, {
                            id: 'match-some',
                            group: 'tag-setting',
                            label: d.NW.string(d.t.rQ0ctb),
                            action: () => j(i.z.MATCH_SOME),
                            checked: g === i.z.MATCH_SOME
                        }),
                        (0, r.jsx)(s.k5B, {
                            id: 'match-all',
                            group: 'tag-setting',
                            label: d.NW.string(d.t.FCXUu7),
                            action: () => j(i.z.MATCH_ALL),
                            checked: g === i.z.MATCH_ALL
                        })
                    ]
                }),
                (0, r.jsx)(s.kSQ, {
                    children: (0, r.jsx)(s.sNh, {
                        id: 'reset-all',
                        className: u.clearText,
                        label: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'none',
                            children: d.NW.string(d.t['3b//lJ'])
                        }),
                        action: () => {
                            x(t.getDefaultSortOrder()), b(t.getDefaultLayout()), j(i.z.MATCH_SOME);
                        }
                    })
                })
            ]
        })
    });
}
