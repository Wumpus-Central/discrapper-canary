"use strict";
n.d(t, { A: () => I }), n(938796);
var i = n(627968);
n(64700);
var r = n(665260),
    s = n(192308),
    a = n(439372),
    o = n(164956),
    l = n(495544),
    u = n(734057),
    c = n(696451),
    d = n(967198),
    _ = n(225142),
    f = n(701785),
    h = n(374084),
    p = n(65995),
    E = n(473529),
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
        let e = d.A.getGuildId();
        null != e && this._getOrLoadOnboardingMemberActions(e);
    };
    handleGuildMemberUpdate = (e) => {
        let { flags: t, user: a, guildId: o } = e;
        if (
            a.id === l.default.getId() &&
            !this.onboardingCompleteGuilds.has(o) &&
            (0, r.Lt)(t ?? 0, g.D.COMPLETED_HOME_ACTIONS)
        ) {
            this.onboardingCompleteGuilds.add(o);
            let e = f.h.getNewMemberActions(o)?.length ?? 0;
            if (0 === e) return;
            (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("55998"), n.e("34934"), n.e("41678"), n.e("63893")]).then(
                    n.bind(n, 455796),
                );
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
            s = i?.find((e) => e.channelId === n);
        r?.[n] !== !0 && null != s && s.actionType === h.NewMemberActionTypes.VIEW && (0, _.eC)(t, n);
    };
    handleMessageSend = (e) => {
        let { guildId: t, channelId: n, message: i } = e;
        if (null == t || null == n || i.author?.id !== l.default.getId()) return;
        let r = u.A.getChannel(n);
        r?.isForumPost() && r?.parent_id != null && this._completeChatAction(t, r.parent_id),
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
        let { memberActions: n, completedActions: i } = await this._getOrLoadOnboardingMemberActions(e),
            r = n?.find((e) => e.channelId === t);
        i?.[t] !== !0 && null != r && r.actionType === h.NewMemberActionTypes.CHAT && (0, _.eC)(e, t);
    };
    _getOrLoadOnboardingMemberActions = async (e) => {
        let t = (0, E.K)(e),
            n = o.A.isFullServerPreview(e);
        if (!t && !n) return {};
        let i = c.Ay.getSelfMember(e);
        if (null == i || !(0, m.j)(e)) return {};
        let [r, s] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, i)]);
        return { memberActions: r, completedActions: s };
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
        let { completedActions: n, loading: i } = p.A.getState(e);
        return null == n && !i && (0, r.Lt)(t.flags ?? 0, g.D.STARTED_HOME_ACTIONS) ? await (0, _.aW)(e) : n;
    };
}
let I = new A();
