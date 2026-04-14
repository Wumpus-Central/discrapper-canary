n.d(t, { A: () => c, q: () => d });
var i = n(417597),
    s = n(954571),
    l = n(899847),
    r = n(695515),
    a = n(191627),
    o = n(652215);
let d = {
        [a.u9.ACTIVITY]: "family_center_activity_tab",
        [a.u9.REQUESTS]: "family_center_requests_tab",
        [a.u9.SETTINGS]: "family_center_settings_tab",
        [a.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [a.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [a.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    c = () => ({
        selectedTab: (0, i.bG)([r.A], () => r.A.getSelectedTab()),
        handleTabChange: (e) => {
            l.Ay.selectTab(e), s.default.track(o.HAw.FAMILY_CENTER_ACTION, { action: a.qb.TabChange, tab: e });
        },
    });
