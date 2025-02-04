n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(313361),
    l = n(683860),
    a = n(481060),
    s = n(109434),
    o = n(228392),
    c = n(388032),
    d = n(135408);
function u(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: u, layoutType: m } = (0, s.H)(t.id),
        h = (0, s.v)(),
        g = t.isMediaChannel(),
        x = (e) => {
            (0, o.KR)({
                guildId: t.guild_id,
                channelId: t.id,
                sortOrder: e
            }),
                h.getState().setSortOrder(t.id, e),
                n();
        },
        f = (e) => {
            (0, o.Do)({
                guildId: t.guild_id,
                channelId: t.id,
                forumLayout: e
            }),
                h.getState().setLayoutType(t.id, e),
                n();
        };
    return (0, i.jsx)('div', {
        className: d.container,
        children: (0, i.jsxs)(a.v2r, {
            navId: 'sort-and-view',
            'aria-label': g ? c.intl.string(c.t['kQN/bm']) : c.intl.string(c.t.DJzbkJ),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, i.jsxs)(a.kSQ, {
                    label: c.intl.string(c.t.f8wNDg),
                    children: [
                        (0, i.jsx)(a.k5B, {
                            id: 'sort-by-recent-activity',
                            group: 'sort-by',
                            label: c.intl.string(c.t.jOPmcH),
                            action: () => x(l.z.LATEST_ACTIVITY),
                            checked: u === l.z.LATEST_ACTIVITY
                        }),
                        (0, i.jsx)(a.k5B, {
                            id: 'sort-by-date-posted',
                            group: 'sort-by',
                            label: c.intl.string(c.t.UIltXV),
                            action: () => x(l.z.CREATION_DATE),
                            checked: u === l.z.CREATION_DATE
                        })
                    ]
                }),
                !t.isMediaChannel() &&
                    (0, i.jsxs)(a.kSQ, {
                        label: c.intl.string(c.t.mFMDSk),
                        children: [
                            (0, i.jsx)(a.k5B, {
                                id: 'view-as-list',
                                group: 'view-as',
                                label: c.intl.string(c.t['NJFr+v']),
                                action: () => f(r.X.LIST),
                                checked: m === r.X.LIST
                            }),
                            (0, i.jsx)(a.k5B, {
                                id: 'view-as-grid',
                                group: 'view-as',
                                label: c.intl.string(c.t.wKeggY),
                                action: () => f(r.X.GRID),
                                checked: m === r.X.GRID
                            })
                        ]
                    }),
                (0, i.jsx)(a.kSQ, {
                    children: (0, i.jsx)(a.sNh, {
                        id: 'reset-all',
                        className: d.clearText,
                        label: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'none',
                            children: c.intl.string(c.t['3b//lJ'])
                        }),
                        action: () => {
                            x(t.getDefaultSortOrder()), f(t.getDefaultLayout());
                        }
                    })
                })
            ]
        })
    });
}
