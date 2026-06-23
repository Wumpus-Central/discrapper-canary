"use strict";
n.r(t), n.d(t, { openUserProfileModal: () => E, closeUserProfileModal: () => m });
var i = n(778712),
    r = n(228366),
    s = n(803306),
    a = n(927813),
    o = n(86070),
    l = n(517164);
let u = a.A.Millis.MINUTE;
var c = n(626584),
    d = n(287809),
    _ = n(903209);
let h = (0, i.FT)(i._3.SIZE_120),
    f = new c.A("UserProfileModalActionCreators");
async function p(e) {
    try {
        await (function (e) {
            if (l.A.isFetchingUserOutbox(e)) return;
            let t = l.A.getUserOutbox(e)?.lastFetched ?? 0;
            if (!(Date.now() - t < u)) return (0, o.r7)(e, void 0);
        })(e);
    } catch (t) {
        f.log(`Failed to fetch content inventory outbox for ${e}:`, t);
    }
}
async function E(e) {
    let {
            userId: t,
            guildId: n,
            originGuildId: i,
            channelId: a,
            messageId: o,
            roleId: l,
            sessionId: u,
            joinRequestId: c,
            tabSection: f,
            scrollTarget: E,
            hideRestrictedProfile: m,
            sourceAnalyticsLocations: g,
            appContext: A,
            customStatusPrompt: I = null,
        } = e,
        T = Date.now(),
        S = d.default.getUser(t);
    p(t),
        null == S
            ? await (0, s.eO)(t, {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: c,
              })
            : (0, _.A)(S.id, S.getAvatarURL(void 0, h), {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !S.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: c,
              }),
        r.h.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            guildId: n ?? void 0,
            originGuildId: i ?? void 0,
            channelId: a ?? void 0,
            messageId: o ?? void 0,
            roleId: l ?? void 0,
            sessionId: u ?? void 0,
            openedAt: T,
            customStatusPrompt: I,
            tabSection: f,
            scrollTarget: E,
            hideRestrictedProfile: m,
            sourceAnalyticsLocations: g,
            appContext: A,
        });
}
function m() {
    r.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
