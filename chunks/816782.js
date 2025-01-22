var l = t(570140);
n.Z = {
    toggleMembersSection() {
        l.Z.dispatch({ type: 'CHANNEL_TOGGLE_MEMBERS_SECTION' });
    },
    toggleProfilePanelSection() {
        l.Z.dispatch({ type: 'PROFILE_PANEL_TOGGLE_SECTION' });
    },
    toggleSummariesSection() {
        l.Z.dispatch({ type: 'CHANNEL_TOGGLE_SUMMARIES_SECTION' });
    }
};
