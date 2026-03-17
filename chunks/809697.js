n.d(t, { A: () => c, q: () => d });
var i = n(417597),
    s = n(954571),
    l = n(899847),
    a = n(695515),
    r = n(191627),
    o = n(652215);
let d = {
        [r.u9.ACTIVITY]: "family_center_activity_tab",
        [r.u9.REQUESTS]: "family_center_requests_tab",
        [r.u9.SETTINGS]: "family_center_settings_tab",
        [r.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [r.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
    },
    c = () => ({
        selectedTab: (0, i.bG)([a.A], () => a.A.getSelectedTab()),
        handleTabChange: (e) => {
            l.Ay.selectTab(e), s.default.track(o.HAw.FAMILY_CENTER_ACTION, { action: r.qb.TabChange, tab: e });
        },
    });
