n.d(t, { Z: () => h });
var a = n(54381);
n(473749);
var r = n(313361),
    i = n(697988),
    l = n(683860),
    s = n(481060),
    o = n(869382),
    c = n(109434),
    d = n(228392),
    u = n(388032),
    m = n(792389),
    f = n(956058);
function h(e) {
    let { channel: t, closePopout: n } = e,
        { sortOrder: h, layoutType: g, tagSetting: x } = (0, c.H)(t.id),
        { showResolvedFlags: b, setShowResolvedFlags: p } = (0, o.N)(t.id),
        j = (0, c.v)(),
        v = t.isMediaChannel(),
        C = (e) => {
            (0, d.KR)({
                guildId: t.guild_id,
                channelId: t.id,
                sortOrder: e,
            }),
                j.getState().setSortOrder(t.id, e),
                n();
        },
        y = (e) => {
            (0, d.Do)({
                guildId: t.guild_id,
                channelId: t.id,
                forumLayout: e,
            }),
                j.getState().setLayoutType(t.id, e),
                n();
        },
        T = (e) => {
            j.getState().setTagSetting(t.id, e), n();
        },
        w = null != t.availableTags && t.availableTags.length > 0;
    return (0, a.jsx)("div", {
        className: f.container,
        children: (0, a.jsxs)(s.v2r, {
            navId: "sort-and-view",
            "aria-label": v ? u.intl.string(u.t["kQN/bi"]) : u.intl.string(u.t.DJzbkL),
            hideScroller: !0,
            onClose: n,
            onSelect: n,
            children: [
                (0, a.jsxs)(s.kSQ, {
                    label: u.intl.string(u.t.f8wNDl),
                    children: [
                        (0, a.jsx)(s.k5B, {
                            id: "sort-by-recent-activity",
                            group: "sort-by",
                            label: u.intl.string(u.t.jOPmcI),
                            action: () => C(l.z.LATEST_ACTIVITY),
                            checked: h === l.z.LATEST_ACTIVITY,
                        }),
                        (0, a.jsx)(s.k5B, {
                            id: "sort-by-date-posted",
                            group: "sort-by",
                            label: u.intl.string(u.t.UIltXd),
                            action: () => C(l.z.CREATION_DATE),
                            checked: h === l.z.CREATION_DATE,
                        }),
                    ],
                }),
                t.isModeratorReportChannel() &&
                    (0, a.jsx)(s.kSQ, {
                        label: u.intl.string(m.default.PsM2b4),
                        children: (0, a.jsx)(s.S89, {
                            id: "resolved-flags-none",
                            label: u.intl.string(u.t.XJuakA),
                            action: () => p(!b),
                            checked: b,
                        }),
                    }),
                t.isMediaChannel() || t.isModeratorReportChannel()
                    ? null
                    : (0, a.jsxs)(s.kSQ, {
                          label: u.intl.string(u.t.mFMDSq),
                          children: [
                              (0, a.jsx)(s.k5B, {
                                  id: "view-as-list",
                                  group: "view-as",
                                  label: u.intl.string(u.t["NJFr+g"]),
                                  action: () => y(r.X.LIST),
                                  checked: g === r.X.LIST,
                              }),
                              (0, a.jsx)(s.k5B, {
                                  id: "view-as-grid",
                                  group: "view-as",
                                  label: u.intl.string(u.t.wKeggb),
                                  action: () => y(r.X.GRID),
                                  checked: g === r.X.GRID,
                              }),
                          ],
                      }),
                w
                    ? (0, a.jsxs)(s.kSQ, {
                          label: u.intl.string(u.t.Paxaug),
                          children: [
                              (0, a.jsx)(s.k5B, {
                                  id: "match-some",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.rQ0ctQ),
                                  action: () => T(i.z.MATCH_SOME),
                                  checked: x === i.z.MATCH_SOME,
                              }),
                              (0, a.jsx)(s.k5B, {
                                  id: "match-all",
                                  group: "tag-setting",
                                  label: u.intl.string(u.t.FCXUu0),
                                  action: () => T(i.z.MATCH_ALL),
                                  checked: x === i.z.MATCH_ALL,
                              }),
                          ],
                      })
                    : null,
                (0, a.jsx)(s.kSQ, {
                    children: (0, a.jsx)(s.sNh, {
                        id: "reset-all",
                        className: f.clearText,
                        label: (0, a.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "none",
                            children: u.intl.string(u.t["3b//lO"]),
                        }),
                        action: () => {
                            C(t.getDefaultSortOrder()), y(t.getDefaultLayout()), T(t.getDefaultTagSetting());
                        },
                    }),
                }),
            ],
        }),
    });
}
