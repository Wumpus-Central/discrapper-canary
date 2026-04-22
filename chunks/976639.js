"use strict";
n.d(t, { A: () => I }), n(938796);
var r = n(627968);
n(64700);
var i = n(665260),
    s = n(192308),
    a = n(439372),
    o = n(164956),
    l = n(961350),
    u = n(734057),
    d = n(696451),
    c = n(967198),
    _ = n(225142),
    f = n(701785),
    E = n(374084),
    h = n(65995),
    p = n(473529),
    m = n(978165),
    g = n(340837);
class A extends a.A {
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
        let e = c.A.getGuildId();
        null != e && this._getOrLoadOnboardingMemberActions(e);
    };
    handleGuildMemberUpdate = (e) => {
        let { flags: t, user: a, guildId: o } = e;
        if (
            a.id === l.default.getId() &&
            !this.onboardingCompleteGuilds.has(o) &&
            (0, i.Lt)(t ?? 0, g.D.COMPLETED_HOME_ACTIONS)
        ) {
            this.onboardingCompleteGuilds.add(o);
            let e = f.h.getNewMemberActions(o)?.length ?? 0;
            if (0 === e) return;
            (0, s.openModalLazy)(async () => {
                let { default: t } = await n.e("63893").then(n.bind(n, 455796));
                return (n) => (0, r.jsx)(t, { ...n, initialPercent: (e - 1) / e, numActions: e });
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
        let { memberActions: r, completedActions: i } = await this._getOrLoadOnboardingMemberActions(t),
            s = r?.find((e) => e.channelId === n);
        i?.[n] !== !0 && null != s && s.actionType === E.NewMemberActionTypes.VIEW && (0, _.eC)(t, n);
    };
    handleMessageSend = (e) => {
        let { guildId: t, channelId: n, message: r } = e;
        if (null == t || null == n || r.author?.id !== l.default.getId()) return;
        let i = u.A.getChannel(n);
        i?.isForumPost() && i?.parent_id != null && this._completeChatAction(t, i.parent_id),
            this._completeChatAction(t, n);
    };
    handleThreadCreate = (e) => {
        let { channel: t, isNewlyCreated: n } = e;
        n &&
            null != t.parent_id &&
            u.A.getChannel(t.parent_id)?.isForumLikeChannel() &&
            t.ownerId === l.default.getId() &&
            this._completeChatAction(t.guild_id, t.parent_id);
    };
    _completeChatAction = async (e, t) => {
        let { memberActions: n, completedActions: r } = await this._getOrLoadOnboardingMemberActions(e),
            i = n?.find((e) => e.channelId === t);
        r?.[t] !== !0 && null != i && i.actionType === E.NewMemberActionTypes.CHAT && (0, _.eC)(e, t);
    };
    _getOrLoadOnboardingMemberActions = async (e) => {
        let t = (0, p.K)(e),
            n = o.A.isFullServerPreview(e);
        if (!t && !n) return {};
        let r = d.Ay.getSelfMember(e);
        if (null == r || !(0, m.j)(e)) return {};
        let [i, s] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, r)]);
        return { memberActions: i, completedActions: s };
    };
    _getOrLoadOnboardingHomeSettings = async (e) => {
        let t = f.h.getNewMemberActions(e),
            n = f.h.getIsLoading(e);
        if (!(null == t && !n && (0, m.j)(e))) return t;
        {
            let t = await (0, _.ag)(e);
            return t?.newMemberActions;
        }
    };
    _getOrLoadMemberActions = async (e, t) => {
        let { completedActions: n, loading: r } = h.A.getState(e);
        return null == n && !r && (0, i.Lt)(t.flags ?? 0, g.D.STARTED_HOME_ACTIONS) ? await (0, _.aW)(e) : n;
    };
}
let I = new A();
