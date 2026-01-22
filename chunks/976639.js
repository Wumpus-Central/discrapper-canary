n.d(t, { A: () => S }), n(896048), n(938796);
var r = n(627968);
n(64700);
var i = n(665260),
    a = n(397927),
    s = n(439372),
    o = n(164956),
    l = n(961350),
    c = n(734057),
    u = n(696451),
    d = n(967198),
    f = n(225142),
    p = n(701785),
    _ = n(374084),
    h = n(65995),
    m = n(473529),
    g = n(978165),
    E = n(340837);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class v extends s.A {
    constructor(...e) {
        super(...e),
            b(this, "onboardingCompleteGuilds", new Set()),
            b(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                MESSAGE_CREATE: (e) => this.handleMessageSend(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e),
            }),
            b(this, "handlePostConnectionOpen", () => {
                let e = d.A.getGuildId();
                null != e && this._getOrLoadOnboardingMemberActions(e);
            }),
            b(this, "handleGuildMemberUpdate", (e) => {
                let { flags: t, user: s, guildId: o } = e;
                if (
                    s.id === l.default.getId() &&
                    !this.onboardingCompleteGuilds.has(o) &&
                    (0, i.Lt)(null != t ? t : 0, E.D.COMPLETED_HOME_ACTIONS)
                ) {
                    var c, u;
                    this.onboardingCompleteGuilds.add(o);
                    let e = null != (c = null == (u = p.h.getNewMemberActions(o)) ? void 0 : u.length) ? c : 0;
                    if (0 === e) return;
                    (0, a.mMO)(async () => {
                        let { default: t } = await n.e("63893").then(n.bind(n, 455796));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                A(y({}, n), {
                                    initialPercent: (e - 1) / e,
                                    numActions: e,
                                }),
                            );
                    });
                }
            }),
            b(this, "handleGuildDelete", (e) => {
                let { guild: t } = e;
                this.onboardingCompleteGuilds.delete(t.id);
            }),
            b(this, "handleChannelSelect", async (e) => {
                let { guildId: t, channelId: n } = e;
                if (null == t || null == n) return;
                let { memberActions: r, completedActions: i } = await this._getOrLoadOnboardingMemberActions(t),
                    a = null == r ? void 0 : r.find((e) => e.channelId === n);
                (null == i ? void 0 : i[n]) !== !0 &&
                    null != a &&
                    a.actionType === _.NewMemberActionTypes.VIEW &&
                    (0, f.eC)(t, n);
            }),
            b(this, "handleMessageSend", (e) => {
                var t;
                let { guildId: n, channelId: r, message: i } = e;
                if (null == n || null == r || (null == (t = i.author) ? void 0 : t.id) !== l.default.getId()) return;
                let a = c.A.getChannel(r);
                (null == a ? void 0 : a.isForumPost()) &&
                    (null == a ? void 0 : a.parent_id) != null &&
                    this._completeChatAction(n, a.parent_id),
                    this._completeChatAction(n, r);
            }),
            b(this, "handleThreadCreate", (e) => {
                var t;
                let { channel: n, isNewlyCreated: r } = e;
                r &&
                    null != n.parent_id &&
                    (null == (t = c.A.getChannel(n.parent_id)) ? void 0 : t.isForumLikeChannel()) &&
                    n.ownerId === l.default.getId() &&
                    this._completeChatAction(n.guild_id, n.parent_id);
            }),
            b(this, "_completeChatAction", async (e, t) => {
                let { memberActions: n, completedActions: r } = await this._getOrLoadOnboardingMemberActions(e),
                    i = null == n ? void 0 : n.find((e) => e.channelId === t);
                (null == r ? void 0 : r[t]) !== !0 &&
                    null != i &&
                    i.actionType === _.NewMemberActionTypes.CHAT &&
                    (0, f.eC)(e, t);
            }),
            b(this, "_getOrLoadOnboardingMemberActions", async (e) => {
                let t = (0, m.K)(e),
                    n = o.A.isFullServerPreview(e);
                if (!t && !n) return {};
                let r = u.Ay.getSelfMember(e);
                if (null == r || !(0, g.j)(e)) return {};
                let [i, a] = await Promise.all([
                    this._getOrLoadOnboardingHomeSettings(e),
                    this._getOrLoadMemberActions(e, r),
                ]);
                return {
                    memberActions: i,
                    completedActions: a,
                };
            }),
            b(this, "_getOrLoadOnboardingHomeSettings", async (e) => {
                let t = p.h.getNewMemberActions(e),
                    n = p.h.getIsLoading(e);
                if (!(null == t && !n && (0, g.j)(e))) return t;
                {
                    let t = await (0, f.ag)(e);
                    return null == t ? void 0 : t.newMemberActions;
                }
            }),
            b(this, "_getOrLoadMemberActions", async (e, t) => {
                var n;
                let { completedActions: r, loading: a } = h.A.getState(e);
                return null == r && !a && (0, i.Lt)(null != (n = t.flags) ? n : 0, E.D.STARTED_HOME_ACTIONS)
                    ? await (0, f.aW)(e)
                    : r;
            });
    }
}
let S = new v();
