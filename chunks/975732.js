"use strict";
n.r(t), n.d(t, { openUserProfileModal: () => f, closeUserProfileModal: () => g });
var i = n(778712),
    r = n(228366),
    s = n(803306),
    a = n(927813),
    o = n(86070),
    l = n(517164);
let d = a.A.Millis.MINUTE;
var _ = n(626584),
    u = n(287809),
    c = n(576622);
let E = (0, i.FT)(i._3.SIZE_120),
    h = new _.A("UserProfileModalActionCreators"),
    m = async (e) => {
        try {
            await (function (e) {
                if (l.A.isFetchingUserOutbox(e)) return;
                let t = l.A.getUserOutbox(e)?.lastFetched ?? 0;
                if (!(Date.now() - t < d)) return (0, o.r7)(e, void 0);
            })(e);
        } catch (t) {
            h.log(`Failed to fetch content inventory outbox for ${e}:`, t);
        }
    };
async function f(e) {
    let {
            userId: t,
            guildId: n,
            originGuildId: i,
            channelId: a,
            messageId: o,
            roleId: l,
            sessionId: d,
            joinRequestId: _,
            tabSection: h,
            scrollTarget: f,
            hideRestrictedProfile: g,
            sourceAnalyticsLocations: p,
            appContext: A,
            customStatusPrompt: I = null,
        } = e,
        T = Date.now(),
        S = u.default.getUser(t);
    m(t),
        null == S
            ? await (0, s.eO)(t, {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !0,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: _,
              })
            : (0, c.A)(S.id, S.getAvatarURL(void 0, E), {
                  type: "modal",
                  guildId: n ?? void 0,
                  withMutualFriendsCount: !S.bot,
                  withMutualFriends: !1,
                  withMutualGuilds: !0,
                  joinRequestId: _,
              }),
        r.h.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: t,
            guildId: n ?? void 0,
            originGuildId: i ?? void 0,
            channelId: a ?? void 0,
            messageId: o ?? void 0,
            roleId: l ?? void 0,
            sessionId: d ?? void 0,
            openedAt: T,
            customStatusPrompt: I,
            tabSection: h,
            scrollTarget: f,
            hideRestrictedProfile: g,
            sourceAnalyticsLocations: p,
            appContext: A,
        });
}
function g() {
    r.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
