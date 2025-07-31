n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(313361),
    a = n(697988),
    l = n(683860),
    s = n(481060),
    o = n(869382),
    c = n(109434),
    d = n(228392),
    u = n(388032),
    m = n(130883),
    h = n(987097);
function g(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: g, layoutType: f, tagSetting: x } = (0, c.H)(t.id),
        { showResolvedFlags: p, setShowResolvedFlags: b } = (0, o.N)(t.id),
        j = (0, c.v)(),
        v = t.isMediaChannel(),
        _ = (e) => {
            ((0, d.KR)({
                guildId: t.guild_id,
                channelId: t.id,
                sortOrder: e
            }),
                j.getState().setSortOrder(t.id, e),
                n());
        },
        C = (e) => {
            ((0, d.Do)({
                guildId: t.guild_id,
                channelId: t.id,
                forumLayout: e
            }),
                j.getState().setLayoutType(t.id, e),
                n());
        },
        y = (e) => {
            (j.getState().setTagSetting(t.id, e), n());
        },
        w = null != t.availableTags && t.availableTags.length > 0;
    return (0, r.jsx)('div', {
        className: h.container,
        children: (0, r.jsxs)(s.v2r, {
            navId: 'sort-and-view',
            'aria-label': v ? u.intl.string(u.t['kQN/bm']) : u.intl.string(u.t.DJzbkJ),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, r.jsxs)(s.kSQ, {
                    label: u.intl.string(u.t.f8wNDg),
                    children: [
                        (0, r.jsx)(s.k5B, {
                            id: 'sort-by-recent-activity',
                            group: 'sort-by',
                            label: u.intl.string(u.t.jOPmcH),
                            action: () => _(l.z.LATEST_ACTIVITY),
                            checked: g === l.z.LATEST_ACTIVITY
                        }),
                        (0, r.jsx)(s.k5B, {
                            id: 'sort-by-date-posted',
                            group: 'sort-by',
                            label: u.intl.string(u.t.UIltXV),
                            action: () => _(l.z.CREATION_DATE),
                            checked: g === l.z.CREATION_DATE
                        })
                    ]
                }),
                t.isModeratorReportChannel() &&
                    (0, r.jsx)(s.kSQ, {
                        label: u.intl.string(m.default.PsM2b2),
                        children: (0, r.jsx)(s.S89, {
                            id: 'resolved-flags-none',
                            label: u.intl.string(u.t.XJuakJ),
                            action: () => b(!p),
                            checked: p
                        })
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, r.jsxs)(s.kSQ, {
                          label: u.intl.string(u.t.mFMDSk),
                          children: [
                              (0, r.jsx)(s.k5B, {
                                  id: 'view-as-list',
                                  group: 'view-as',
                                  label: u.intl.string(u.t['NJFr+v']),
                                  action: () => C(i.X.LIST),
                                  checked: f === i.X.LIST
                              }),
                              (0, r.jsx)(s.k5B, {
                                  id: 'view-as-grid',
                                  group: 'view-as',
                                  label: u.intl.string(u.t.wKeggY),
                                  action: () => C(i.X.GRID),
                                  checked: f === i.X.GRID
                              })
                          ]
                      }),
                w
                    ? (0, r.jsxs)(s.kSQ, {
                          label: u.intl.string(u.t.Paxaur),
                          children: [
                              (0, r.jsx)(s.k5B, {
                                  id: 'match-some',
                                  group: 'tag-setting',
                                  label: u.intl.string(u.t.rQ0ctb),
                                  action: () => y(a.z.MATCH_SOME),
                                  checked: x === a.z.MATCH_SOME
                              }),
                              (0, r.jsx)(s.k5B, {
                                  id: 'match-all',
                                  group: 'tag-setting',
                                  label: u.intl.string(u.t.FCXUu7),
                                  action: () => y(a.z.MATCH_ALL),
                                  checked: x === a.z.MATCH_ALL
                              })
                          ]
                      })
                    : null,
                (0, r.jsx)(s.kSQ, {
                    children: (0, r.jsx)(s.sNh, {
                        id: 'reset-all',
                        className: h.clearText,
                        label: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'none',
                            children: u.intl.string(u.t['3b//lJ'])
                        }),
                        action: () => {
                            (_(t.getDefaultSortOrder()), C(t.getDefaultLayout()), y(t.getDefaultTagSetting()));
                        }
                    })
                })
            ]
        })
    });
}
