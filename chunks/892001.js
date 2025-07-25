(n.r(t),
    n.d(t, {
        closeUserProfileModal: () => m,
        openUserProfileModal: () => h
    }));
var r = n(481060),
    i = n(570140),
    a = n(232567),
    o = n(911284),
    s = n(710845),
    l = n(314897),
    c = n(594174),
    u = n(9161),
    d = n(484459);
let f = (0, r.pxk)(r.EFr.SIZE_120),
    _ = new s.Z('UserProfileModalActionCreators'),
    p = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, u.x)({ location: 'UserProfileModalActionCreators' });
        if (n || t)
            try {
                await (0, o.Z)(e);
            } catch (t) {
                _.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function h(e) {
    let { userId: t, guildId: n, channelId: r, messageId: o, roleId: s, sessionId: l, joinRequestId: u, section: _, subsection: h, showGuildProfile: m, hideRestrictedProfile: g, sourceAnalyticsLocations: E, appContext: b, customStatusPrompt: y = null, disableActionsForPreview: O = !1 } = e,
        v = c.default.getUser(t);
    (p(t),
        null == v
            ? await (0, a.In)(t, {
                  type: 'modal',
                  guildId: m && null != n ? n : void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: u
              })
            : (0, d.Z)(v.id, v.getAvatarURL(void 0, f), {
                  type: 'modal',
                  guildId: m && null != n ? n : void 0,
                  withMutualFriendsCount: !v.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: u
              }),
        i.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != o ? o : void 0,
            roleId: null != s ? s : void 0,
            sessionId: null != l ? l : void 0,
            openedAt: Date.now(),
            customStatusPrompt: y,
            section: _,
            subsection: h,
            showGuildProfile: m,
            hideRestrictedProfile: g,
            sourceAnalyticsLocations: E,
            appContext: b,
            disableActionsForPreview: O
        }));
}
function m() {
    i.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
