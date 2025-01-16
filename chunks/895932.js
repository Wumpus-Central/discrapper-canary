n.d(t, {
    Z: function () {
        return u;
    }
});
var a = n(200651);
n(192379);
var i = n(313361),
    r = n(683860),
    l = n(481060),
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
    return (0, a.jsx)('div', {
        className: d.container,
        children: (0, a.jsxs)(l.Menu, {
            navId: 'sort-and-view',
            'aria-label': g ? c.intl.string(c.t['kQN/bm']) : c.intl.string(c.t.DJzbkJ),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, a.jsxs)(l.MenuGroup, {
                    label: c.intl.string(c.t.f8wNDg),
                    children: [
                        (0, a.jsx)(l.MenuRadioItem, {
                            id: 'sort-by-recent-activity',
                            group: 'sort-by',
                            label: c.intl.string(c.t.jOPmcH),
                            action: () => x(r.z.LATEST_ACTIVITY),
                            checked: u === r.z.LATEST_ACTIVITY
                        }),
                        (0, a.jsx)(l.MenuRadioItem, {
                            id: 'sort-by-date-posted',
                            group: 'sort-by',
                            label: c.intl.string(c.t.UIltXV),
                            action: () => x(r.z.CREATION_DATE),
                            checked: u === r.z.CREATION_DATE
                        })
                    ]
                }),
                !t.isMediaChannel() &&
                    (0, a.jsxs)(l.MenuGroup, {
                        label: c.intl.string(c.t.mFMDSk),
                        children: [
                            (0, a.jsx)(l.MenuRadioItem, {
                                id: 'view-as-list',
                                group: 'view-as',
                                label: c.intl.string(c.t['NJFr+v']),
                                action: () => f(i.X.LIST),
                                checked: m === i.X.LIST
                            }),
                            (0, a.jsx)(l.MenuRadioItem, {
                                id: 'view-as-grid',
                                group: 'view-as',
                                label: c.intl.string(c.t.wKeggY),
                                action: () => f(i.X.GRID),
                                checked: m === i.X.GRID
                            })
                        ]
                    }),
                (0, a.jsx)(l.MenuGroup, {
                    children: (0, a.jsx)(l.MenuItem, {
                        id: 'reset-all',
                        className: d.clearText,
                        label: (0, a.jsx)(l.Text, {
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
