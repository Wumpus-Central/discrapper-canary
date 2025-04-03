n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var a = n(313361),
    i = n(683860),
    l = n(481060),
    s = n(109434),
    o = n(228392),
    c = n(388032),
    d = n(987097);
function u(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: u, layoutType: m } = (0, s.H)(t.id),
        h = (0, s.v)(),
        g = t.isMediaChannel(),
        f = (e) => {
            (0, o.KR)({
                guildId: t.guild_id,
                channelId: t.id,
                sortOrder: e
            }),
                h.getState().setSortOrder(t.id, e),
                n();
        },
        p = (e) => {
            (0, o.Do)({
                guildId: t.guild_id,
                channelId: t.id,
                forumLayout: e
            }),
                h.getState().setLayoutType(t.id, e),
                n();
        };
    return (0, r.jsx)('div', {
        className: d.container,
        children: (0, r.jsxs)(l.v2r, {
            navId: 'sort-and-view',
            'aria-label': g ? c.NW.string(c.t['kQN/bm']) : c.NW.string(c.t.DJzbkJ),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, r.jsxs)(l.kSQ, {
                    label: c.NW.string(c.t.f8wNDg),
                    children: [
                        (0, r.jsx)(l.k5B, {
                            id: 'sort-by-recent-activity',
                            group: 'sort-by',
                            label: c.NW.string(c.t.jOPmcH),
                            action: () => f(i.z.LATEST_ACTIVITY),
                            checked: u === i.z.LATEST_ACTIVITY
                        }),
                        (0, r.jsx)(l.k5B, {
                            id: 'sort-by-date-posted',
                            group: 'sort-by',
                            label: c.NW.string(c.t.UIltXV),
                            action: () => f(i.z.CREATION_DATE),
                            checked: u === i.z.CREATION_DATE
                        })
                    ]
                }),
                !t.isMediaChannel() &&
                    (0, r.jsxs)(l.kSQ, {
                        label: c.NW.string(c.t.mFMDSk),
                        children: [
                            (0, r.jsx)(l.k5B, {
                                id: 'view-as-list',
                                group: 'view-as',
                                label: c.NW.string(c.t['NJFr+v']),
                                action: () => p(a.X.LIST),
                                checked: m === a.X.LIST
                            }),
                            (0, r.jsx)(l.k5B, {
                                id: 'view-as-grid',
                                group: 'view-as',
                                label: c.NW.string(c.t.wKeggY),
                                action: () => p(a.X.GRID),
                                checked: m === a.X.GRID
                            })
                        ]
                    }),
                (0, r.jsx)(l.kSQ, {
                    children: (0, r.jsx)(l.sNh, {
                        id: 'reset-all',
                        className: d.clearText,
                        label: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'none',
                            children: c.NW.string(c.t['3b//lJ'])
                        }),
                        action: () => {
                            f(t.getDefaultSortOrder()), p(t.getDefaultLayout());
                        }
                    })
                })
            ]
        })
    });
}
