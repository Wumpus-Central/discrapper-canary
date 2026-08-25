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
            tabSection: I,
            scrollTarget: f,
            hideRestrictedProfile: p,
            sourceAnalyticsLocations: T,
            appContext: m,
            customStatusPrompt: g = null,
            onModalOpen: S,
        } = e,
        N = Date.now(),
        C = u.default.getUser(t);
    if ((h(t), null == C))
        try {
            await (0, a.fetchProfile)(t, {
                type: "modal",
                guildId: n ?? void 0,
                withMutualFriendsCount: !0,
                withMutualFriends: !1,
                withMutualGuilds: !0,
                joinRequestId: c,
            });
        } catch (e) {
            A.log(`Failed to fetch profile for ${t}:`, e);
        }
    else
        (0, _.A)(C.id, C.getAvatarURL(void 0, E), {
            type: "modal",
            guildId: n ?? void 0,
            withMutualFriendsCount: !C.bot,
            withMutualFriends: !1,
            withMutualGuilds: !0,
            joinRequestId: c,
        }).catch((e) => {
            A.log(`Failed to fetch profile for ${t}:`, e);
        });
    r.h.dispatch({
        type: "USER_PROFILE_MODAL_OPEN",
        userId: t,
        guildId: n ?? void 0,
        originGuildId: i ?? void 0,
        channelId: s ?? void 0,
        messageId: l ?? void 0,
        roleId: o ?? void 0,
        sessionId: d ?? void 0,
        openedAt: N,
        customStatusPrompt: g,
        tabSection: I,
        scrollTarget: f,
        hideRestrictedProfile: p,
        sourceAnalyticsLocations: T,
        appContext: m,
        onModalOpen: S,
    });
}
function f() {
    r.h.dispatch({ type: "USER_PROFILE_MODAL_CLOSE" });
}
