n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(313361),
    l = n(697988),
    a = n(683860),
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
        },
        v = null != t.availableTags && t.availableTags.length > 0;
    return (0, r.jsx)('div', {
        className: u.container,
        children: (0, r.jsxs)(s.v2r, {
            navId: 'sort-and-view',
            'aria-label': p ? d.intl.string(d.t['kQN/bm']) : d.intl.string(d.t.DJzbkJ),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, r.jsxs)(s.kSQ, {
                    label: d.intl.string(d.t.f8wNDg),
                    children: [
                        (0, r.jsx)(s.k5B, {
                            id: 'sort-by-recent-activity',
                            group: 'sort-by',
                            label: d.intl.string(d.t.jOPmcH),
                            action: () => x(a.z.LATEST_ACTIVITY),
                            checked: m === a.z.LATEST_ACTIVITY
                        }),
                        (0, r.jsx)(s.k5B, {
                            id: 'sort-by-date-posted',
                            group: 'sort-by',
                            label: d.intl.string(d.t.UIltXV),
                            action: () => x(a.z.CREATION_DATE),
                            checked: m === a.z.CREATION_DATE
                        })
                    ]
                }),
                t.isMediaChannel()
                    ? null
                    : (0, r.jsxs)(s.kSQ, {
                          label: d.intl.string(d.t.mFMDSk),
                          children: [
                              (0, r.jsx)(s.k5B, {
                                  id: 'view-as-list',
                                  group: 'view-as',
                                  label: d.intl.string(d.t['NJFr+v']),
                                  action: () => b(i.X.LIST),
                                  checked: h === i.X.LIST
                              }),
                              (0, r.jsx)(s.k5B, {
                                  id: 'view-as-grid',
                                  group: 'view-as',
                                  label: d.intl.string(d.t.wKeggY),
                                  action: () => b(i.X.GRID),
                                  checked: h === i.X.GRID
                              })
                          ]
                      }),
                v
                    ? (0, r.jsxs)(s.kSQ, {
                          label: d.intl.string(d.t.Paxaur),
                          children: [
                              (0, r.jsx)(s.k5B, {
                                  id: 'match-some',
                                  group: 'tag-setting',
                                  label: d.intl.string(d.t.rQ0ctb),
                                  action: () => j(l.z.MATCH_SOME),
                                  checked: g === l.z.MATCH_SOME
                              }),
                              (0, r.jsx)(s.k5B, {
                                  id: 'match-all',
                                  group: 'tag-setting',
                                  label: d.intl.string(d.t.FCXUu7),
                                  action: () => j(l.z.MATCH_ALL),
                                  checked: g === l.z.MATCH_ALL
                              })
                          ]
                      })
                    : null,
                (0, r.jsx)(s.kSQ, {
                    children: (0, r.jsx)(s.sNh, {
                        id: 'reset-all',
                        className: u.clearText,
                        label: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'none',
                            children: d.intl.string(d.t['3b//lJ'])
                        }),
                        action: () => {
                            x(t.getDefaultSortOrder()), b(t.getDefaultLayout()), j(t.getDefaultTagSetting());
                        }
                    })
                })
            ]
        })
    });
}
