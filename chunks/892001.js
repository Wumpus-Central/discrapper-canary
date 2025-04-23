n.r(t),
    n.d(t, {
        closeUserProfileModal: () => g,
        openUserProfileModal: () => m
    });
var r = n(259443),
    i = n(481060),
    a = n(570140),
    o = n(232567),
    s = n(911284),
    l = n(314897),
    c = n(594174),
    u = n(9161),
    d = n(212321),
    f = n(484459);
let _ = (0, i.pxk)(i.EFr.SIZE_120),
    p = new r.Yd('UserProfileModalActionCreators'),
    h = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, u.x)({ location: 'UserProfileModalActionCreators' });
        if (n || t)
            try {
                await (0, s.Z)(e);
            } catch (t) {
                p.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function m(e) {
    let { userId: t, guildId: n, channelId: r, messageId: i, roleId: s, sessionId: l, joinRequestId: u, section: p, subsection: m, friendToken: g, showGuildProfile: E, hideRestrictedProfile: b, sourceAnalyticsLocations: y, appContext: v, customStatusPrompt: O = null } = e,
        I = c.default.getUser(t);
    h(t);
    let { withMutualFriendsCount: S } = (0, d.R)({ location: 'openUserProfileModal' });
    null == I
        ? await (0, o.In)(t, {
              type: 'modal',
              guildId: E && null != n ? n : void 0,
              withMutualFriendsCount: S,
              withMutualFriends: !S,
              withMutualGuilds: !0,
              friendToken: g,
              joinRequestId: u
          })
        : (0, f.Z)(I.id, I.getAvatarURL(void 0, _), {
              type: 'modal',
              guildId: E && null != n ? n : void 0,
              withMutualFriendsCount: !I.bot && S,
              withMutualFriends: !I.bot && !S,
              withMutualGuilds: !0,
              friendToken: g,
              joinRequestId: u
          }),
        a.Z.dispatch({
            type: 'USER_PROFILE_MODAL_OPEN',
            userId: t,
            guildId: null != n ? n : void 0,
            channelId: null != r ? r : void 0,
            messageId: null != i ? i : void 0,
            roleId: null != s ? s : void 0,
            sessionId: null != l ? l : void 0,
            openedAt: Date.now(),
            customStatusPrompt: O,
            section: p,
            subsection: m,
            friendToken: g,
            showGuildProfile: E,
            hideRestrictedProfile: b,
            sourceAnalyticsLocations: y,
            appContext: v
        });
}
function g() {
    a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
