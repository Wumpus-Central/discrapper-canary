"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(439372),
    r = n(571694),
    s = n(47167),
    a = n(734057),
    o = n(71393),
    l = n(576705),
    d = n(994500),
    _ = n(309010),
    u = n(287809),
    c = n(486020),
    E = n(403362),
    h = n(427262),
    m = n(77729);
let f = new (n(626584).A)("IntentsBindings");
function g() {
    return m.A?.features.supports("intents") ?? !1;
}
let p = {
        hasSearch: () => g(),
        hasUserActivity: () => g(),
        clearSearchIndex() {
            try {
                m.A?.ipc.invoke("DISCORD_SEARCH_CLEAR_INDEX");
            } catch (e) {
                f.warn(`clearSearchIndex: ${e}`);
            }
        },
        deleteSearchDomains(e) {
            try {
                m.A?.ipc.invoke("DISCORD_SEARCH_DELETE_DOMAINS", e);
            } catch (e) {
                f.warn(`deleteSearchDomains: ${e}`);
            }
        },
        deleteSearchItems(e) {
            try {
                m.A?.ipc.invoke("DISCORD_SEARCH_DELETE_ITEMS", e);
            } catch (e) {
                f.warn(`deleteSearchItems: ${e}`);
            }
        },
        indexDomains(e) {
            try {
                m.A?.ipc.invoke("DISCORD_SEARCH_INDEX_DOMAINS", e);
            } catch (e) {
                f.warn(`indexDomains: ${e}`);
            }
        },
        resignActivity() {
            try {
                m.A?.ipc.invoke("DISCORD_INTENTS_RESIGN_ACTIVITY");
            } catch (e) {
                f.warn(`resignActivity: ${e}`);
            }
        },
        setActivity(e) {
            try {
                m.A?.ipc.invoke("DISCORD_INTENTS_SET_ACTIVITY", e);
            } catch (e) {
                f.warn(`setActivity: ${e}`);
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
    return A.getCurrentConfig({ location: "NativeIntentsManager" }, { autoTrackExposure: !0, disable: !p.hasSearch() })
        .searchEnabled;
}
function S() {
    return A.getCurrentConfig({ location: "NativeIntentsManager" }, { autoTrackExposure: !0, disable: !p.hasSearch() })
        .clearEnabled;
}
function N(e) {
    return e?.startsWith?.("/") ? location.origin + e : (e ?? void 0);
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, s.m1)(e, u.default, d.A, !0),
        o = (0, s.m1)(e, u.default, d.A, !1),
        l = [],
        _ = [i, o],
        c = [];
    e.isGuildVocal() && _.push(`!${o}`);
    let E = a.A.getChannel(e.parent_id);
    if (null != E) {
        let e = (0, s.m1)(E, u.default, d.A, !0),
            t = (0, s.m1)(E, u.default, d.A, !1);
        c.push(e), c.push(t), l.push(e);
    }
    null != t && (c.push(t.name), l.push(t.name));
    let h = i + (l.length > 0 ? ` (${l.join(", ")})` : ""),
        m = I.BVt.CHANNEL(t?.id ?? I.ME, e.id);
    return {
        id: m,
        relatedUniqueIdentifier: m,
        type: "url",
        title: h,
        displayName: h,
        thumbnailURL: N((0, r.Y)(e, 128, !1)),
        rankingHint: e.type === I.rbe.DM ? 75 : 50,
        keywords: c,
        alternateNames: _,
        isUpdate: n,
    };
}
function R(e) {
    return null != e ? N(c.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 128 })) : void 0;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = R(e),
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
function y(e) {
    if (
        !A.getCurrentConfig(
            { location: "NativeIntentsManager" },
            { autoTrackExposure: !0, disable: !p.hasUserActivity() },
        ).activityEnabled
    )
        return;
    let t = null != e ? a.A.getChannel(e) : void 0;
    if (null == t) return void p.resignActivity();
    let n = o.A.getGuild(t.guild_id),
        i = (0, s.m1)(t, u.default, d.A, !0),
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
                        let [n] = e.recipients.map(u.default.getUser).filter(E.Vq);
                        if (null != n) {
                            let e = h.Ay.getGlobalName(n);
                            null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
                            let i = d.A.getNickname(n.id);
                            null != i && t.push(i);
                            let r = h.Ay.getName(n);
                            null != r && t.push(r);
                        }
                    }
                    return t;
                })(t),
            ]),
        ],
        _ = I.BVt.CHANNEL(t.guild_id, t.id),
        c = {
            webpageURL: `${I.qF7.BASE_URL}${_}`,
            relatedUniqueIdentifier: _,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: r,
            keywords: l,
            displayName: r,
            type: "com.discord.view-channel",
        };
    p.setActivity(c);
}
function v(e) {
    let t = a.A.getDMChannelFromUserId(e);
    null != t && D([t]);
}
function D(e) {
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
                let r = R(e),
                    a = [s];
                t.push({ id: n, items: a, defaultThumbnailURL: r }), (i[n] = a);
            }
        } else n.push(r.id);
    t.length > 0 && p.indexDomains(t), n.length > 0 && p.deleteSearchItems(n);
}
class L extends i.A {
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
        y(_.A.getCurrentlySelectedChannelId()),
            S() && p.clearSearchIndex(),
            T() &&
                (function () {
                    if (!T()) return;
                    let e = o.A.getGuildsArray().map((e) => O(e)),
                        t = [],
                        n = a.A.getMutablePrivateChannels();
                    for (let e in n) {
                        let i = n[e];
                        t.push(C(i));
                    }
                    e.push({ id: I.ME, items: t }), p.indexDomains(e);
                })();
    }
    handleLogout() {
        S() && p.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        y(t);
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (!T() || !l.A.can(I.xBc.VIEW_CHANNEL, t)) return;
        let n = o.A.getGuild(t.guild_id);
        if (null == n && null != t.guild_id) return;
        let i = R(n);
        p.indexDomains([{ id: n?.id ?? I.ME, items: [C(t, n)], defaultThumbnailURL: i }]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        T() && p.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        D(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (T()) {
            let e = o.A.getGuild(t.id);
            null != e ? p.indexDomains([O(e, "GUILD_UPDATE" === n)]) : p.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        T() && p.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        D([t]);
    }
    handleUserUpdate(e) {
        let { user: t } = e;
        v(t.id);
    }
    handleRelationshipChange(e) {
        let { relationship: t } = e;
        v(t.id);
    }
}
let b = new L();
