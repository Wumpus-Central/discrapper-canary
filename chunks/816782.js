n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    toggleMembersSection() {
        i.Z.dispatch({ type: 'CHANNEL_TOGGLE_MEMBERS_SECTION' });
    },
    toggleUserProfileSidebarSection() {
        i.Z.dispatch({ type: 'USER_PROFILE_SIDEBAR_TOGGLE_SECTION' });
    },
    toggleSummariesSection() {
        i.Z.dispatch({ type: 'CHANNEL_TOGGLE_SUMMARIES_SECTION' });
    }
};
