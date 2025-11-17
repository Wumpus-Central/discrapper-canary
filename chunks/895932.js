n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(313361),
    a = n(697988),
    l = n(683860),
    s = n(481060),
    o = n(869382),
    c = n(109434),
    d = n(228392),
    u = n(388032),
    m = n(797013),
    h = n(377741);
function g(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: g, layoutType: f, tagSetting: x } = (0, c.H)(t.id),
        { showResolvedFlags: p, setShowResolvedFlags: b } = (0, o.N)(t.id),
        j = (0, c.v)(),
        v = t.isMediaChannel(),
        _ = (e) => {
            (0, d.KR)({
                guildId: t.guild_id,
                channelId: t.id,
                sortOrder: e,
            }),
                j.getState().setSortOrder(t.id, e),
                n();
        },
        C = (e) => {
            (0, d.Do)({
                guildId: t.guild_id,
                channelId: t.id,
                forumLayout: e,
            }),
                j.getState().setLayoutType(t.id, e),
                n();
        },
        y = (e) => {
            j.getState().setTagSetting(t.id, e), n();
        },
        T = null != t.availableTags && t.availableTags.length > 0;
    return (0, r.jsx)("div", {
        className: h.container,
        children: (0, r.jsxs)(s.v2r, {
            navId: "sort-and-view",
            "aria-label": v ? u.intl.string(u.t["kQN/bi"]) : u.intl.string(u.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, r.jsxs)(s.kSQ, {
                    label: u.intl.string(u.t.f8wNDl),
                    children: [
                        (0, r.jsx)(s.k5B, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: u.intl.string(u.t.jOPmcI),
                            action: () => _(l.z.LATEST_ACTIVITY),
                            checked: g === l.z.LATEST_ACTIVITY,
                        }),
                        (0, r.jsx)(s.k5B, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: u.intl.string(u.t.UIltXd),
                            action: () => _(l.z.CREATION_DATE),
                            checked: g === l.z.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, r.jsx)(s.kSQ, {
                        label: u.intl.string(m.default.PsM2b4),
                        children: (0, r.jsx)(s.S89, {
                            id: "resolved-flags-none",
                            label: u.intl.string(u.t.XJuakA),
                            action: () => b(!p),
                            checked: p,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, r.jsxs)(s.kSQ, {
                          label: u.intl.string(u.t.mFMDSq),
                          children: [
                              (0, r.jsx)(s.k5B, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: u.intl.string(u.t["NJFr+g"]),
                                  action: () => C(i.X.LIST),
                                  checked: f === i.X.LIST,
                              }),
                              (0, r.jsx)(s.k5B, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: u.intl.string(u.t.wKeggb),
                                  action: () => C(i.X.GRID),
                                  checked: f === i.X.GRID,
                              }),
                          ],
                      }),
                T
                    ? (0, r.jsxs)(s.kSQ, {
                          label: u.intl.string(u.t.Paxaug),
                          children: [
                              (0, r.jsx)(s.k5B, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.rQ0ctQ),
                                  action: () => y(a.z.MATCH_SOME),
                                  checked: x === a.z.MATCH_SOME,
                              }),
                              (0, r.jsx)(s.k5B, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.FCXUu0),
                                  action: () => y(a.z.MATCH_ALL),
                                  checked: x === a.z.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, r.jsx)(s.kSQ, {
                    children: (0, r.jsx)(s.sNh, {
                        id: "reset-all",
                        className: h.clearText,
                        label: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "none",
                            children: u.intl.string(u.t["3b//lO"]),
                        }),
                        action: () => {
                            _(t.getDefaultSortOrder()), C(t.getDefaultLayout()), y(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
