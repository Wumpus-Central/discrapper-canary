"use strict";
n.d(t, { A: () => L }), n(321073);
var i = n(439372),
    r = n(571694),
    s = n(47167),
    a = n(734057),
    o = n(71393),
    l = n(576705),
    u = n(994500),
    c = n(309010),
    d = n(287809),
    _ = n(486020),
    h = n(403362),
    f = n(427262),
    p = n(77729);
let E = new (n(626584).A)("IntentsBindings");
function m() {
    return p.A?.features.supports("intents") ?? !1;
}
let g = {
        hasSearch: () => m(),
        hasUserActivity: () => m(),
        clearSearchIndex() {
            try {
                p.A?.ipc.invoke("DISCORD_SEARCH_CLEAR_INDEX");
            } catch (e) {
                E.warn(`clearSearchIndex: ${e}`);
            }
        },
        deleteSearchDomains(e) {
            try {
                p.A?.ipc.invoke("DISCORD_SEARCH_DELETE_DOMAINS", e);
            } catch (e) {
                E.warn(`deleteSearchDomains: ${e}`);
            }
        },
        deleteSearchItems(e) {
            try {
                p.A?.ipc.invoke("DISCORD_SEARCH_DELETE_ITEMS", e);
            } catch (e) {
                E.warn(`deleteSearchItems: ${e}`);
            }
        },
        indexDomains(e) {
            try {
                p.A?.ipc.invoke("DISCORD_SEARCH_INDEX_DOMAINS", e);
            } catch (e) {
                E.warn(`indexDomains: ${e}`);
            }
        },
        resignActivity() {
            try {
                p.A?.ipc.invoke("DISCORD_INTENTS_RESIGN_ACTIVITY");
            } catch (e) {
                E.warn(`resignActivity: ${e}`);
            }
        },
        setActivity(e) {
            try {
                p.A?.ipc.invoke("DISCORD_INTENTS_SET_ACTIVITY", e);
            } catch (e) {
                E.warn(`setActivity: ${e}`);
            }
        },
    },
    A = (0, n(600975).C)({
        kind: "user",
        id: "2025-06_native_intents",
        label: "Native Intents",
        defaultConfig: { searchEnabled: !1, clearEnabled: !1, activityEnabled: !1 },
        treatments: [
            { id: 1, label: "All enabled", config: { searchEnabled: !0, clearEnabled: !0, activityEnabled: !0 } },
            { id: 2, label: "Clear Only", config: { searchEnabled: !1, clearEnabled: !0, activityEnabled: !1 } },
            { id: 3, label: "Activities Only", config: { searchEnabled: !1, clearEnabled: !1, activityEnabled: !0 } },
            {
                id: 4,
                label: "Activities and Clear",
                config: { searchEnabled: !1, clearEnabled: !0, activityEnabled: !0 },
            },
        ],
    });
var I = n(652215);
function T() {
    return A.getCurrentConfig({ location: "NativeIntentsManager" }, { autoTrackExposure: !0, disable: !g.hasSearch() })
        .searchEnabled;
}
function S() {
    return A.getCurrentConfig({ location: "NativeIntentsManager" }, { autoTrackExposure: !0, disable: !g.hasSearch() })
        .clearEnabled;
}
function y(e) {
    return e?.startsWith?.("/") ? location.origin + e : (e ?? void 0);
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, s.m1)(e, d.default, u.A, !0),
        o = (0, s.m1)(e, d.default, u.A, !1),
        l = [],
        c = [i, o],
        _ = [];
    e.isGuildVocal() && c.push(`!${o}`);
    let h = a.A.getChannel(e.parent_id);
    if (null != h) {
        let e = (0, s.m1)(h, d.default, u.A, !0),
            t = (0, s.m1)(h, d.default, u.A, !1);
        _.push(e), _.push(t), l.push(e);
    }
    null != t && (_.push(t.name), l.push(t.name));
    let f = i + (l.length > 0 ? ` (${l.join(", ")})` : ""),
        p = I.BVt.CHANNEL(t?.id ?? I.ME, e.id);
    return {
        id: p,
        relatedUniqueIdentifier: p,
        type: "url",
        title: f,
        displayName: f,
        thumbnailURL: y((0, r.Y)(e, 128, !1)),
        rankingHint: e.type === I.rbe.DM ? 75 : 50,
        keywords: _,
        alternateNames: c,
        isUpdate: n,
    };
}
function N(e) {
    return null != e ? y(_.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 128 })) : void 0;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = N(e),
        i = I.BVt.CHANNEL(e.id),
        r = [
            {
                id: i,
                relatedUniqueIdentifier: i,
                type: "url",
                title: e.name,
                displayName: e.name,
                alternateNames: [`*${e.name}`],
                rankingHint: 100,
            },
        ],
        s = a.A.getMutableGuildChannelsForGuild(e.id);
    for (let n in s) {
        let i = s[n];
        l.A.can(I.xBc.VIEW_CHANNEL, i) && r.push(C(i, e, t));
    }
    for (let n of a.A.getAllThreadsForGuild(e.id)) l.A.can(I.xBc.VIEW_CHANNEL, n) && r.push(C(n, e, t));
    return { id: e.id, items: r, defaultThumbnailURL: n, isUpdate: t };
}
function R(e) {
    if (
        !A.getCurrentConfig(
            { location: "NativeIntentsManager" },
            { autoTrackExposure: !0, disable: !g.hasUserActivity() },
        ).activityEnabled
    )
        return;
    let t = null != e ? a.A.getChannel(e) : void 0;
    if (null == t) return void g.resignActivity();
    let n = o.A.getGuild(t.guild_id),
        i = (0, s.m1)(t, d.default, u.A, !0),
        r = i + (null != n ? ` (${n.name})` : ""),
        l = [
            ...new Set([
                i,
                ...(function (e) {
                    let t = [];
                    if (
                        ("" !== e.name && t.push(e.name),
                        null != e.nicks && t.push(...Object.values(e.nicks)),
                        e.type === I.rbe.DM)
                    ) {
                        let [n] = e.recipients.map(d.default.getUser).filter(h.Vq);
                        if (null != n) {
                            let e = f.Ay.getGlobalName(n);
                            null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
                            let i = u.A.getNickname(n.id);
                            null != i && t.push(i);
                            let r = f.Ay.getName(n);
                            null != r && t.push(r);
                        }
                    }
                    return t;
                })(t),
            ]),
        ],
        c = I.BVt.CHANNEL(t.guild_id, t.id),
        _ = {
            webpageURL: `${I.qF7.BASE_URL}${c}`,
            relatedUniqueIdentifier: c,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: r,
            keywords: l,
            displayName: r,
            type: "com.discord.view-channel",
        };
    g.setActivity(_);
}
function O(e) {
    let t = a.A.getDMChannelFromUserId(e);
    null != t && b([t]);
}
function b(e) {
    if (!T()) return;
    let t = [],
        n = [],
        i = {};
    for (let r of e)
        if (l.A.can(I.xBc.VIEW_CHANNEL, r)) {
            let e = o.A.getGuild(r.guild_id),
                n = e?.id ?? I.ME,
                s = C(r, e, !0),
                a = i[n];
            if (null != a) a.push(s);
            else {
                let r = N(e),
                    a = [s];
                t.push({ id: n, items: a, defaultThumbnailURL: r }), (i[n] = a);
            }
        } else n.push(r.id);
    t.length > 0 && g.indexDomains(t), n.length > 0 && g.deleteSearchItems(n);
}
class D extends i.A {
    actions = {
        POST_CONNECTION_OPEN: this.handleInit,
        LOGOUT: this.handleLogout,
        CHANNEL_SELECT: this.handleChannelSelect,
        CHANNEL_CREATE: this.handleChannelCreate,
        CHANNEL_DELETE: this.handleChannelDelete,
        CHANNEL_UPDATES: this.handleChannelUpdates,
        GUILD_CREATE: this.handleGuildCreateOrUpdate,
        GUILD_UPDATE: this.handleGuildCreateOrUpdate,
        GUILD_DELETE: this.handleGuildDelete,
        RELATIONSHIP_ADD: this.handleRelationshipChange,
        RELATIONSHIP_REMOVE: this.handleRelationshipChange,
        RELATIONSHIP_UPDATE: this.handleRelationshipChange,
        THREAD_CREATE: this.handleChannelCreate,
        THREAD_DELETE: this.handleChannelDelete,
        THREAD_UPDATE: this.handleThreadUpdate,
        USER_UPDATE: this.handleUserUpdate,
    };
    handleInit() {
        R(c.A.getCurrentlySelectedChannelId()),
            S() && g.clearSearchIndex(),
            T() &&
                (function () {
                    if (!T()) return;
                    let e = o.A.getGuildsArray().map((e) => v(e)),
                        t = [],
                        n = a.A.getMutablePrivateChannels();
                    for (let e in n) {
                        let i = n[e];
                        t.push(C(i));
                    }
                    e.push({ id: I.ME, items: t }), g.indexDomains(e);
                })();
    }
    handleLogout() {
        S() && g.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        R(t);
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (!T() || !l.A.can(I.xBc.VIEW_CHANNEL, t)) return;
        let n = o.A.getGuild(t.guild_id);
        if (null == n && null != t.guild_id) return;
        let i = N(n);
        g.indexDomains([{ id: n?.id ?? I.ME, items: [C(t, n)], defaultThumbnailURL: i }]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        T() && g.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        b(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (T()) {
            let e = o.A.getGuild(t.id);
            null != e ? g.indexDomains([v(e, "GUILD_UPDATE" === n)]) : g.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        T() && g.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        b([t]);
    }
    handleUserUpdate(e) {
        let { user: t } = e;
        O(t.id);
    }
    handleRelationshipChange(e) {
        let { relationship: t } = e;
        O(t.id);
    }
}
let L = new D();
