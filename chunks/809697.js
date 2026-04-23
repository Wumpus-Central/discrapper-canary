l.d(t, { A: () => u, q: () => c });
var n = l(417597),
    i = l(954571),
    s = l(899847),
    a = l(695515),
    r = l(191627),
    d = l(652215);
let c = {
        [r.u9.ACTIVITY]: "family_center_activity_tab",
        [r.u9.REQUESTS]: "family_center_requests_tab",
        [r.u9.SETTINGS]: "family_center_settings_tab",
        [r.u9.CONTENT_AND_SOCIAL]: "family_center_content_and_social_panel",
        [r.u9.DATA_AND_PRIVACY]: "family_center_data_and_privacy_panel",
        [r.u9.SCREEN_TIME_CONTROLS]: "family_center_screen_time_controls_panel",
    },
    u = () => ({
        selectedTab: (0, n.bG)([a.A], () => a.A.getSelectedTab()),
        handleTabChange: (e) => {
            s.Ay.selectTab(e), i.default.track(d.HAw.FAMILY_CENTER_ACTION, { action: r.qb.TabChange, tab: e });
        },
    });
