"use strict";
n.r(t), n.d(t, { openUserProfileModal: () => I, closeUserProfileModal: () => f });
var i = n(778712),
    r = n(228366),
    a = n(803306),
    s = n(927813),
    l = n(86070),
    o = n(517164);
let d = s.A.Millis.MINUTE;
var c = n(626584),
    u = n(287809),
    _ = n(903209);
let E = (0, i.FT)(i._3.SIZE_120),
    A = new c.A("UserProfileModalActionCreators");
async function h(e) {
    try {
        await (function (e) {
            if (o.A.isFetchingUserOutbox(e)) return;
            let t = o.A.getUserOutbox(e)?.lastFetched ?? 0;
            if (!(Date.now() - t < d)) return (0, l.r7)(e, void 0);
        })(e);
    } catch (t) {
        A.log(`Failed to fetch content inventory outbox for ${e}:`, t);
    }
}
async function I(e) {
    let {
            userId: t,
            guildId: n,
            originGuildId: i,
            channelId: s,
            messageId: l,
            roleId: o,
            sessionId: d,
            joinRequestId: c,
            tabSection: A,
            scrollTarget: I,
            hideRestrictedProfile: f,
            sourceAnalyticsLocations: p,
            appContext: T,
            customStatusPrompt: m = null,
            onModalOpen: g,
        } = e,
        S = Date.now(),
        N = u.default.getUser(t);
    h(t),
        null == N
            ? await (0, a.eO)(t, {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: c,
              })
            : (0, _.A)(N.id, N.getAvatarURL(void 0, E), {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !N.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: c,
              }),
        r.h.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            guildId: n ?? void 0,
            originGuildId: i ?? void 0,
            channelId: s ?? void 0,
            messageId: l ?? void 0,
            roleId: o ?? void 0,
            sessionId: d ?? void 0,
            openedAt: S,
            customStatusPrompt: m,
            tabSection: A,
            scrollTarget: I,
            hideRestrictedProfile: f,
            sourceAnalyticsLocations: p,
            appContext: T,
            onModalOpen: g,
        });
}
function f() {
    r.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
