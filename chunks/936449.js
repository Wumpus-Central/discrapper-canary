"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(439372),
    r = n(571694),
    a = n(47167),
    s = n(734057),
    l = n(71393),
    o = n(576705),
    d = n(994500),
    c = n(309010),
    u = n(287809),
    _ = n(486020),
    E = n(403362),
    A = n(427262),
    h = n(77729);
let I = new (n(626584).A)("IntentsBindings");
function f() {
    return h.A?.features.supports("intents") ?? !1;
}
let p = {
        hasSearch: () => f(),
        hasUserActivity: () => f(),
        clearSearchIndex() {
            try {
                h.A?.ipc.invoke("DISCORD_SEARCH_CLEAR_INDEX");
            } catch (e) {
                I.warn(`clearSearchIndex: ${e}`);
            }
        },
        deleteSearchDomains(e) {
            try {
                h.A?.ipc.invoke("DISCORD_SEARCH_DELETE_DOMAINS", e);
            } catch (e) {
                I.warn(`deleteSearchDomains: ${e}`);
            }
        },
        deleteSearchItems(e) {
            try {
                h.A?.ipc.invoke("DISCORD_SEARCH_DELETE_ITEMS", e);
            } catch (e) {
                I.warn(`deleteSearchItems: ${e}`);
            }
        },
        indexDomains(e) {
            try {
                h.A?.ipc.invoke("DISCORD_SEARCH_INDEX_DOMAINS", e);
            } catch (e) {
                I.warn(`indexDomains: ${e}`);
            }
        },
        resignActivity() {
            try {
                h.A?.ipc.invoke("DISCORD_INTENTS_RESIGN_ACTIVITY");
            } catch (e) {
                I.warn(`resignActivity: ${e}`);
            }
        },
        setActivity(e) {
            try {
                h.A?.ipc.invoke("DISCORD_INTENTS_SET_ACTIVITY", e);
            } catch (e) {
                I.warn(`setActivity: ${e}`);
            }
        },
    },
    T = (0, n(600975).C)({
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
var m = n(652215);
function g() {
    return T.getCurrentConfig({ location: "NativeIntentsManager" }, { autoTrackExposure: !0, disable: !p.hasSearch() })
        .searchEnabled;
}
function S() {
    return T.getCurrentConfig({ location: "NativeIntentsManager" }, { autoTrackExposure: !0, disable: !p.hasSearch() })
        .clearEnabled;
}
function N(e) {
    return e?.startsWith?.("/") ? location.origin + e : (e ?? void 0);
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, a.m1)(e, u.default, d.A, !0),
        l = (0, a.m1)(e, u.default, d.A, !1),
        o = [],
        c = [i, l],
        _ = [];
    e.isGuildVocal() && c.push(`!${l}`);
    let E = s.A.getChannel(e.parent_id);
    if (null != E) {
        let e = (0, a.m1)(E, u.default, d.A, !0),
            t = (0, a.m1)(E, u.default, d.A, !1);
        _.push(e), _.push(t), o.push(e);
    }
    null != t && (_.push(t.name), o.push(t.name));
    let A = i + (o.length > 0 ? ` (${o.join(", ")})` : ""),
        h = m.BVt.CHANNEL(t?.id ?? m.ME, e.id);
    return {
        id: h,
        relatedUniqueIdentifier: h,
        type: "url",
        title: A,
        displayName: A,
        thumbnailURL: N((0, r.Y)(e, 128, !1)),
        rankingHint: e.type === m.rbe.DM ? 75 : 50,
        keywords: _,
        alternateNames: c,
        isUpdate: n,
    };
}
function R(e) {
    return null != e ? N(_.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 128 })) : void 0;
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = R(e),
        i = m.BVt.CHANNEL(e.id),
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
        a = s.A.getMutableGuildChannelsForGuild(e.id);
    for (let n in a) {
        let i = a[n];
        o.A.can(m.xBc.VIEW_CHANNEL, i) && r.push(C(i, e, t));
    }
    for (let n of s.A.getAllThreadsForGuild(e.id)) o.A.can(m.xBc.VIEW_CHANNEL, n) && r.push(C(n, e, t));
    return { id: e.id, items: r, defaultThumbnailURL: n, isUpdate: t };
}
function L(e) {
    if (
        !T.getCurrentConfig(
            { location: "NativeIntentsManager" },
            { autoTrackExposure: !0, disable: !p.hasUserActivity() },
        ).activityEnabled
    )
        return;
    let t = null != e ? s.A.getChannel(e) : void 0;
    if (null == t) return void p.resignActivity();
    let n = l.A.getGuild(t.guild_id),
        i = (0, a.m1)(t, u.default, d.A, !0),
        r = i + (null != n ? ` (${n.name})` : ""),
        o = [
            ...new Set([
                i,
                ...(function (e) {
                    let t = [];
                    if (
                        ("" !== e.name && t.push(e.name),
                        null != e.nicks && t.push(...Object.values(e.nicks)),
                        e.type === m.rbe.DM)
                    ) {
                        let [n] = e.recipients.map(u.default.getUser).filter(E.Vq);
                        if (null != n) {
                            let e = A.Ay.getGlobalName(n);
                            null != e && t.push(e), t.push(n.username), t.push("@" + n.username);
                            let i = d.A.getNickname(n.id);
                            null != i && t.push(i);
                            let r = A.Ay.getName(n);
                            null != r && t.push(r);
                        }
                    }
                    return t;
                })(t),
            ]),
        ],
        c = m.BVt.CHANNEL(t.guild_id, t.id),
        _ = {
            webpageURL: `${m.qF7.BASE_URL}${c}`,
            relatedUniqueIdentifier: c,
            eligibleForHandoff: !0,
            eligibleForSearch: !0,
            title: r,
            keywords: o,
            displayName: r,
            type: "com.discord.view-channel",
        };
    p.setActivity(_);
}
function y(e) {
    let t = s.A.getDMChannelFromUserId(e);
    null != t && D([t]);
}
function D(e) {
    if (!g()) return;
    let t = [],
        n = [],
        i = {};
    for (let r of e)
        if (o.A.can(m.xBc.VIEW_CHANNEL, r)) {
            let e = l.A.getGuild(r.guild_id),
                n = e?.id ?? m.ME,
                a = C(r, e, !0),
                s = i[n];
            if (null != s) s.push(a);
            else {
                let r = R(e),
                    s = [a];
                t.push({ id: n, items: s, defaultThumbnailURL: r }), (i[n] = s);
            }
        } else n.push(r.id);
    t.length > 0 && p.indexDomains(t), n.length > 0 && p.deleteSearchItems(n);
}
class v extends i.A {
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
        L(c.Ay.getCurrentlySelectedChannelId()),
            S() && p.clearSearchIndex(),
            g() &&
                (function () {
                    if (!g()) return;
                    let e = l.A.getGuildsArray().map((e) => O(e)),
                        t = [],
                        n = s.A.getMutablePrivateChannels();
                    for (let e in n) {
                        let i = n[e];
                        t.push(C(i));
                    }
                    e.push({ id: m.ME, items: t }), p.indexDomains(e);
                })();
    }
    handleLogout() {
        S() && p.clearSearchIndex();
    }
    handleChannelSelect(e) {
        let { channelId: t } = e;
        L(t);
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (!g() || !o.A.can(m.xBc.VIEW_CHANNEL, t)) return;
        let n = l.A.getGuild(t.guild_id);
        if (null == n && null != t.guild_id) return;
        let i = R(n);
        p.indexDomains([{ id: n?.id ?? m.ME, items: [C(t, n)], defaultThumbnailURL: i }]);
    }
    handleChannelDelete(e) {
        let { channel: t } = e;
        g() && p.deleteSearchItems([t.id]);
    }
    handleChannelUpdates(e) {
        let { channels: t } = e;
        D(t);
    }
    handleGuildCreateOrUpdate(e) {
        let { guild: t, type: n } = e;
        if (g()) {
            let e = l.A.getGuild(t.id);
            null != e ? p.indexDomains([O(e, "GUILD_UPDATE" === n)]) : p.deleteSearchDomains([t.id]);
        }
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        g() && p.deleteSearchDomains([t.id]);
    }
    handleThreadUpdate(e) {
        let { channel: t } = e;
        D([t]);
    }
    handleUserUpdate(e) {
        let { user: t } = e;
        y(t.id);
    }
    handleRelationshipChange(e) {
        let { relationship: t } = e;
        y(t.id);
    }
}
let b = new v();
