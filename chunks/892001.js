(n.r(t),
    n.d(t, {
        closeUserProfileModal: () => g,
        openUserProfileModal: () => m
    }));
var r = n(481060),
    i = n(570140),
    a = n(232567),
    o = n(911284),
    s = n(710845),
    l = n(314897),
    c = n(594174),
    u = n(9161),
    d = n(212321),
    f = n(484459);
let _ = (0, r.pxk)(r.EFr.SIZE_120),
    p = new s.Z('UserProfileModalActionCreators'),
    h = async (e) => {
        let t = l.default.getId() === e,
            { recentActivityTabEnabled: n } = (0, u.x)({ location: 'UserProfileModalActionCreators' });
        if (n || t)
            try {
                await (0, o.Z)(e);
            } catch (t) {
                p.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
            }
    };
async function m(e) {
    let { userId: t, guildId: n, channelId: r, messageId: o, roleId: s, sessionId: l, joinRequestId: u, section: p, subsection: m, showGuildProfile: g, hideRestrictedProfile: E, sourceAnalyticsLocations: b, appContext: y, customStatusPrompt: O = null, disableActionsForPreview: v = !1 } = e,
        I = c.default.getUser(t);
    h(t);
    let { withMutualFriendsCount: T } = (0, d.R)({ location: 'openUserProfileModal' });
    (null == I
        ? await (0, a.In)(t, {
              type: 'modal',
              guildId: g && null != n ? n : void 0,
              withMutualFriendsCount: T,
              withMutualFriends: !T,
              withMutualGuilds: !0,
              joinRequestId: u
          })
        : (0, f.Z)(I.id, I.getAvatarURL(void 0, _), {
              type: 'modal',
              guildId: g && null != n ? n : void 0,
              withMutualFriendsCount: !I.bot && T,
              withMutualFriends: !I.bot && !T,
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
            customStatusPrompt: O,
            section: p,
            subsection: m,
            showGuildProfile: g,
            hideRestrictedProfile: E,
            sourceAnalyticsLocations: b,
            appContext: y,
            disableActionsForPreview: v
        }));
}
function g() {
    i.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
