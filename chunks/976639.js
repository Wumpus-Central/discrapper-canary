"use strict";
n.d(t, { A: () => m }), n(938796);
var i = n(477900);
n(582128);
var r = n(665260),
    a = n(192308),
    s = n(439372),
    l = n(164956),
    o = n(280450),
    d = n(734057),
    c = n(696451),
    u = n(967198),
    _ = n(225142),
    E = n(701785),
    A = n(374084),
    h = n(65995),
    I = n(473529),
    f = n(978165),
    p = n(340837);
class T extends s.A {
    onboardingCompleteGuilds = new Set();
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
        MESSAGE_CREATE: (e) => this.handleMessageSend(e),
        THREAD_CREATE: (e) => this.handleThreadCreate(e),
    };
    handlePostConnectionOpen = () => {
        let e = u.A.getGuildId();
        null != e && this._getOrLoadOnboardingMemberActions(e);
    };
    handleGuildMemberUpdate = (e) => {
        let { flags: t, user: s, guildId: l } = e;
        if (
            s.id === o.default.getId() &&
            !this.onboardingCompleteGuilds.has(l) &&
            (0, r.Lt)(t ?? 0, p.D.COMPLETED_HOME_ACTIONS)
        ) {
            this.onboardingCompleteGuilds.add(l);
            let e = E.h.getNewMemberActions(l)?.length ?? 0;
            if (0 === e) return;
            (0, a.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("381673"),
                    n.e("645499"),
                    n.e("858514"),
                    n.e("741678"),
                    n.e("663893"),
                ]).then(n.bind(n, 455796));
                return (n) => (0, i.jsx)(t, { ...n, initialPercent: (e - 1) / e, numActions: e });
            });
        }
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        this.onboardingCompleteGuilds.delete(t.id);
    };
    handleChannelSelect = async (e) => {
        let { guildId: t, channelId: n } = e;
        if (null == t || null == n) return;
        let { memberActions: i, completedActions: r } = await this._getOrLoadOnboardingMemberActions(t),
            a = i?.find((e) => e.channelId === n);
        r?.[n] !== !0 && null != a && a.actionType === A.NewMemberActionTypes.VIEW && (0, _.eC)(t, n);
    };
    handleMessageSend = (e) => {
        let { guildId: t, channelId: n, message: i } = e;
        if (null == t || null == n || i.author?.id !== o.default.getId()) return;
        let r = d.A.getChannel(n);
        r?.isForumPost() && r?.parent_id != null && this._completeChatAction(t, r.parent_id),
            this._completeChatAction(t, n);
    };
    handleThreadCreate = (e) => {
        let { channel: t, isNewlyCreated: n } = e;
        n &&
            null != t.parent_id &&
            d.A.getChannel(t.parent_id)?.isForumLikeChannel() &&
            t.ownerId === o.default.getId() &&
            this._completeChatAction(t.guild_id, t.parent_id);
    };
    _completeChatAction = async (e, t) => {
        let { memberActions: n, completedActions: i } = await this._getOrLoadOnboardingMemberActions(e),
            r = n?.find((e) => e.channelId === t);
        i?.[t] !== !0 && null != r && r.actionType === A.NewMemberActionTypes.CHAT && (0, _.eC)(e, t);
    };
    _getOrLoadOnboardingMemberActions = async (e) => {
        let t = (0, I.K)(e),
            n = l.A.isFullServerPreview(e);
        if (!t && !n) return {};
        let i = c.Ay.getSelfMember(e);
        if (null == i || !(0, f.j)(e)) return {};
        let [r, a] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, i)]);
        return { memberActions: r, completedActions: a };
    };
    _getOrLoadOnboardingHomeSettings = async (e) => {
        let t = E.h.getNewMemberActions(e),
            n = E.h.getIsLoading(e);
        if (!(null == t && !n && (0, f.j)(e))) return t;
        {
            let t = await (0, _.ag)(e);
            return t?.newMemberActions;
        }
    };
    _getOrLoadMemberActions = async (e, t) => {
        let { completedActions: n, loading: i } = h.A.getState(e);
        return null == n && !i && (0, r.Lt)(t.flags ?? 0, p.D.STARTED_HOME_ACTIONS) ? await (0, _.aW)(e) : n;
    };
}
let m = new T();
