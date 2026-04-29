n(539895), n(933958);
var i = n(17928),
    l = n(228366);
let a = !1;
function r() {
    a = !1;
}
class s extends i.Ay.Store {
    isTogglesDisabled() {
        return a;
    }
}
new s(l.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        a = e.disabled ?? !1;
    },
    CONNECTION_OPEN: r,
    LOGOUT: r,
}),
    n(787301),
    n(240525);
var o = n(453001);
n(753027), n(989837), n(166862), n(264322), n(861382), n(587895), n(715314);
var d = n(61090);
n(237751);
var u = n(506774),
    c = n(154049);
n(321073);
var h = n(136722),
    E = n(937724),
    A = n(626584),
    _ = n(446458),
    p = n(95701),
    g = n(495544),
    f = n(734057),
    I = n(317525),
    S = n(71393),
    T = n(576705),
    m = n(799422),
    C = n(723176);
let O = new A.A("GuildBasicChannels");
function N(e, t) {
    return (
        null == e ||
        e.type !== t.type ||
        e.parent_id !== t.parent_id ||
        T.A.computeBasicPermissions(e) !== T.A.computeBasicPermissions(t)
    );
}
let y = new (class {
    synced = null;
    async getAsync(e) {
        let t = performance.now(),
            [n, i] = await Promise.all([
                C.A.basicChannels(e).getKvEntries(),
                C.A.syncedBasicChannels(e).getKvEntries(),
            ]),
            l = performance.now() - t,
            [a, r] = (function (e) {
                let t = [],
                    n = [];
                for (let [i, l] of e) (l ? t : n).push(i);
                return [t, n];
            })(i),
            s = new Set(a);
        return (
            (this.synced = s),
            O.verbose(`loaded in ${l}ms (guilds: ${n.length}, synced: ${s.size} unsynced: ${r.length})`),
            {
                all: n,
                stale: r,
                channels: n.filter((e) => {
                    let [t, n] = e;
                    return s.has(t);
                }),
            }
        );
    }
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CHANNEL_CREATE: (e, t) => this.handleChannelCreate(e, t),
        CHANNEL_DELETE: (e, t) => this.handleChannelDelete(e, t),
        CHANNEL_UPDATES: (e, t) => this.handleChannelUpdates(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
        GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleUpdate(e, t),
        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        WRITE_CACHES: (e, t) => this.handleWriteCaches(e, t),
    };
    handleChannelCreate(e, t) {
        null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
    }
    handleChannelDelete(e, t) {
        null != e.channel.guild_id && this.unsync(e.channel.guild_id, t);
    }
    handleChannelUpdates(e, t) {
        for (let n of e.channels.filter((e) => null != e.guild_id))
            N(f.A.getBasicChannel(n.id), n) && this.unsync(n.guild_id, t);
    }
    handleBackgroundSync(e, t) {
        for (let n of e.guilds)
            switch (n.data_mode) {
                case "unavailable":
                    break;
                case "partial":
                    let e = (e) => (0, p.UE)(e, n.id);
                    this.onGuildUpdate(
                        n.id,
                        n.partial_updates.channels?.map(e) ?? [],
                        n.partial_updates.deleted_channel_ids ?? [],
                        t,
                    );
                    break;
                default:
                    this.onGuildSync(n.id, t);
            }
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    async handlePostConnectionOpen() {
        let e = _.A.lastTimeConnectedChanged(),
            t = C.A.database();
        if (null == this.synced || null == t || !(0, E.O)()) return;
        let n = S.A.getGuildIds(),
            i = n.filter((e) => !this.synced.has(e));
        for (let l of (O.verbose(`scheduling basic_channel optimstic writes (guilds: ${i.length})`), n)) {
            if (null == this.synced || t !== C.A.database() || e !== _.A.lastTimeConnectedChanged()) break;
            if (!this.synced.has(l)) {
                O.verbose(`optimstically writing basic_channels (guild: ${l})`);
                try {
                    await f.D.loadGuildIds([l]),
                        await t.transaction((e) => this.syncOne(l, e), "handlePostConnectionOpen");
                } catch (e) {
                    O.warn("couldn't optimstically write basic_channel:", e);
                    return;
                }
                await new Promise((e) => setTimeout(e, 1e3));
            }
        }
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleOneGuildCreate(e, t) {
        let { id: n, channels: i } = e;
        switch (i.op) {
            case "full_sync":
                this.onGuildSync(n, t);
                break;
            case "update":
                this.onGuildUpdate(n, i.writes, i.deletes, t);
        }
    }
    handleGuildUpdate(e, t) {
        this.unsync(e.guild.id, t);
    }
    handleGuildDelete(e, t) {
        !0 !== e.guild.unavailable && this.delete(e.guild.id, t);
    }
    handleGuildRoleUpdate(e, t) {
        let n = e.role,
            i = I.A.getRole(e.guildId, n.id);
        (null != i && h.aI(h.iu(n.permissions), i.permissions)) || this.unsync(e.guildId, t);
    }
    handleGuildMemberUpdate(e, t) {
        e.user.id === g.default.getId() && this.unsync(e.guildId, t);
    }
    handleWriteCaches(e, t) {
        this.sync(t);
    }
    resetInMemoryState() {
        this.synced = null;
    }
    onGuildUpdate(e, t, n, i) {
        (n.length > 0 || t.some((e) => N(f.A.getBasicChannel(e.id), e))) && this.unsync(e, i);
    }
    onGuildSync(e, t) {
        this.unsync(e, t);
    }
    delete(e, t) {
        this.unsync(e, t), C.A.basicChannelsTransaction(t).delete(e), C.A.syncedBasicChannelsTransaction(t).delete(e);
    }
    unsync(e, t) {
        this.synced?.delete(e),
            C.A.basicChannelsTransaction(t).delete(e),
            C.A.syncedBasicChannelsTransaction(t).put(e, !1),
            o.A.invalidate(e);
    }
    sync(e) {
        O.verbose("Starting to write all basic channels");
        let t = performance.now(),
            n = { written: 0, skipped: 0 };
        for (let t of S.A.getGuildIds()) this.syncOne(t, e) ? n.written++ : n.skipped++;
        let i = performance.now() - t;
        O.verbose(`${n.written} basic_channel guilds submitted (took: ${i}ms, skipped: ${n.skipped} guilds)`);
    }
    syncOne(e, t) {
        var n;
        return (
            !(null == S.A.getGuild(e) || this.synced?.has(e)) &&
            (this.synced?.add(e),
            C.A.basicChannelsTransaction(t).put(
                e,
                ((n = e),
                Object.values(f.A.getMutableGuildChannelsForGuild(n)).map((e) => ({
                    id: e.id,
                    type: e.type,
                    guild_id: e.guild_id,
                    parent_id: e.parent_id,
                    basicPermissions: m.A.asBasicFlag(T.A.computePermissions(e)),
                }))),
            ),
            C.A.syncedBasicChannelsTransaction(t).put(e, !0),
            !0)
        );
    }
})();
var R = n(260509),
    L = n(696451),
    v = n(860689),
    D = n(9865),
    U = n(7864),
    P = n(38405);
let b = new A.A("Guilds"),
    M = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await C.A.guilds(e).getMany(),
                i = performance.now();
            return b.verbose(`loaded in ${i - t}ms (guilds: ${n.length})`), n;
        }
        async getOneAsync(e, t) {
            return await C.A.guilds(e).get(t);
        }
        actions = {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            GUILD_MEMBER_ADD: (e, t) => this.handleGuildMemberAdd(e, t),
            GUILD_MEMBER_UPDATE: (e, t) => this.handleGuildMemberUpdate(e, t),
            GUILD_ROLE_CREATE: (e, t) => this.handleGuildRoleChange(e, t),
            GUILD_ROLE_DELETE: (e, t) => this.handleGuildRoleDelete(e, t),
            GUILD_ROLE_UPDATE: (e, t) => this.handleGuildRoleChange(e, t),
            GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
        };
        handleBackgroundSync(e, t) {
            for (let n of e.guilds) {
                if ("unavailable" === n.data_mode) continue;
                let e = S.A.getGuild(n.id);
                if (null != e) {
                    let i = I.A.getUnsafeMutableRoles(n.id),
                        l =
                            "partial" === n.data_mode
                                ? U.ly(n.id, i, n.partial_updates.roles, n.partial_updates.deleted_role_ids)
                                : D.hd(n.id, n.roles);
                    this.put(v.Me(v.kI(n, e), D.cH(l), L.Ay.getSelfMember(n.id)), t);
                }
            }
        }
        handleConnectionOpen(e, t) {
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let i of (C.A.guildsTransaction(t).deleteAllExcept(n), e.guilds)) this.putOne(i, t);
        }
        handleGuildCreate(e, t) {
            this.putOne(e.guild, t);
        }
        handleGuildUpdate(e, t) {
            let n = S.A.getGuild(e.guild.id),
                i = v.Y1(e.guild, n);
            this.put(v.Me(i, D.cH(D.hd(e.guild.id, e.guild.roles)), L.Ay.getSelfMember(e.guild.id)), t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildRoleChange(e, t) {
            let n = S.A.getGuild(e.guildId),
                i = I.A.getUnsafeMutableRoles(e.guildId);
            null != n &&
                this.put(
                    v.Me(n, D.cH({ ...i, [e.role.id]: D.Wj(e.guildId, e.role) }), L.Ay.getSelfMember(e.guildId)),
                    t,
                );
        }
        handleGuildRoleDelete(e, t) {
            let n = S.A.getGuild(e.guildId);
            if (null != n) {
                let i = { ...I.A.getUnsafeMutableRoles(e.guildId) };
                delete i[e.roleId];
                let l = L.Ay.getSelfMember(e.guildId);
                null != l && (l = { ...l, roles: l.roles.filter((t) => t !== e.roleId) }),
                    this.put(v.Me(n, D.cH(i), l), t);
            }
        }
        handleGuildMemberAdd(e, t) {
            if (null != e.joinedAt && e.user.id === g.default.getId()) {
                let n = S.A.getGuild(e.guildId);
                null != n &&
                    this.put(
                        v.Me((0, R.kn)(n, e.joinedAt), D.cH(I.A.getUnsafeMutableRoles(n.id)), L.Ay.getSelfMember(n.id)),
                        t,
                    );
            }
        }
        handleGuildMemberUpdate(e, t) {
            if (e.user.id !== g.default.getId()) return;
            let n = S.A.getGuild(e.guildId);
            null != n &&
                this.put(v.Me(n, D.cH(I.A.getUnsafeMutableRoles(n.id)), { roles: e.roles, userId: e.user.id }), t);
        }
        resetInMemoryState() {}
        putOne(e, t) {
            let n = e.members.find((e) => e.user.id === g.default.getId()),
                i = S.A.getGuild(e.id);
            if (null == e.properties && null == i)
                return void P.A.captureMessage(
                    "AppDatabase Guilds.putOne skipped: partial payload without cached record",
                );
            let l = D.j_(e.id, e.roles, I.A.getUnsafeMutableRoles(e.id)),
                a = v.Me(v.Wj(e, i), D.cH(l), null != n ? { userId: n.user.id, roles: n.roles } : null);
            this.put(a, t);
        }
        put(e, t) {
            C.A.guildsTransaction(t).put(e);
        }
        delete(e, t) {
            C.A.guildsTransaction(t).delete(e);
        }
    })();
var w = n(314732),
    G = n(586660),
    F = n(214771),
    V = n(735438),
    k = n.n(V),
    H = n(222823),
    x = n(935208);
let B = new A.A("ReadStates"),
    Y = new (class {
        readStateVersion = null;
        async getAll(e) {
            let t = performance.now(),
                n = await C.A.readStates(e).getMany(),
                i = performance.now();
            return B.log(`asynchronously loaded in ${i - t}ms (readStates: ${n.length})`), n;
        }
        actions = {
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            CHANNEL_PINS_ACK: (e) => this.handleReadStateAction(e),
            MESSAGE_ACK: (e) => this.handleReadStateAction(e),
            BACKGROUND_SYNC_FINISHED: (e, t) => {
                e.messagesOnly || this.handleWriteCaches(t, !1);
            },
            WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0),
        };
        resetInMemoryState() {
            this.readStateVersion = null;
        }
        handleConnectionOpen(e) {
            this.readStateVersion = e.readState.version;
        }
        handleReadStateAction(e) {
            null != this.readStateVersion &&
                (null != e.version
                    ? (this.readStateVersion = e.version)
                    : B.log("Received null read states version", e));
        }
        handleWriteCaches(e, t) {
            let n = H.Ay.getAllReadStates(!1);
            if (t) {
                if (null == this.readStateVersion) return;
                let t = "0",
                    i = "0",
                    l = Object.keys(f.A.getMutablePrivateChannels()),
                    a = new Set(l);
                for (let e of ((i = k()(l).sort(x.default.compare).reverse().value()[0] ?? "0"), n))
                    null != e._lastMessageId &&
                        (1 === x.default.compare(e._lastMessageId, t) && (t = e._lastMessageId),
                        a.has(e.channelId) && 1 === x.default.compare(e._lastMessageId, i) && (i = e._lastMessageId));
                C.A.nonGuildVersionsTransaction(e).putAll([
                    { id: "highest_last_message_id", versionString: t },
                    { id: "private_channels_version", versionString: i },
                    { id: "read_state_version", version: this.readStateVersion },
                ]);
            }
            let i = C.A.readStatesTransaction(e);
            i.delete(), n.forEach((e) => i.put(`${e.type}-${e.channelId}`, e));
        }
    })();
var j = n(543465);
let $ = new A.A("ReadStates"),
    z = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await C.A.userGuildSettings(e).getMany(),
                i = performance.now();
            return $.log(`asynchronously loaded in ${i - t}ms (userGuildSettings: ${n.length})`), n;
        }
        actions = {
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t),
        };
        resetInMemoryState() {}
        handleConnectionOpen(e, t) {
            e.userGuildSettings.partial || C.A.userGuildSettingsTransaction(t).delete(),
                this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
        }
        handleUserGuildSettingsUpdate(e, t) {
            let n = k().max(e.userGuildSettings.map((e) => e.version ?? -1));
            null != n && this.write(e.userGuildSettings, n, t);
        }
        write(e, t, n) {
            let i = C.A.userGuildSettingsTransaction(n);
            for (let t of e) {
                let e = { ...(0, j.wn)(t.guild_id), ...t, channel_overrides: (0, j.b5)(t.channel_overrides) };
                i.put(t.guild_id ?? "dm-sentinel", e);
            }
            C.A.nonGuildVersionsTransaction(n).put({ id: "user_guild_settings_version", version: t });
        }
    })();
var W = n(617617),
    K = n(45773);
let q = new A.A("UserSettingsProto");
class Z {
    actions = {
        CONNECTION_OPEN: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange(),
    };
    async getAll(e) {
        let t = performance.now(),
            n = await C.A.userSettings(e).getMany(),
            i = performance.now();
        q.verbose(`loaded in ${i - t}ms (settings: ${n.length})`);
        let l = {};
        for (let e of n) l[e.id] = e.value;
        return l;
    }
    handleUserSettingsProtoChange = () => {
        let e = g.default.getId(),
            t = K.A.database(e);
        t?.transaction((e) => {
            let t = W.A.computeState(),
                n = C.A.userSettingsTransaction(e);
            for (let e in t) n.put({ id: Number(e), value: t[e] });
            let i = W.A.settings.versions?.dataVersion ?? -1;
            C.A.nonGuildVersionsTransaction(e).put({ id: "user_settings_version", version: i });
        }, "handleUserSettingsProtoChange");
    };
    throttledOnChange = k().debounce(this.handleUserSettingsProtoChange, 0);
    resetInMemoryState() {}
}
let Q = new Z();
var X = n(531743),
    J = n(264392),
    ee = n(548965),
    et = n(917878),
    en = n(464578),
    ei = n(309010),
    el = n(967198),
    ea = n(612181),
    er = n(723702),
    es = n(736400),
    eo = n(652215);
let ed = new A.A("CacheStore"),
    eu = !1,
    ec = "initializing",
    eh = 0;
async function eE(e, t, n) {
    let i = performance.now();
    if (null == e || null == n)
        return (
            ed.verbose(`skipped loaded messages (channel: ${n}, database: ${e}).`),
            [performance.now() - i, { guildId: null, channelId: null, users: [], members: [], messages: [] }]
        );
    {
        let l = await G.Ay.startupLoad(e, t, n, eo.EMb);
        ed.verbose(`loaded ${l.messages.length} messages (guild: ${t}, channel: ${n}).`);
        let a = { guildId: t, channelId: n, users: l.users, members: l.members, messages: l.messages };
        return et.A.recordChannelFetchedLocal(n, et.a, null, null, eo.EMb, l.messages), [performance.now() - i, a];
    }
}
async function eA(e, t, n) {
    ed.verbose("loading early cache");
    let a = _.A.getSocket();
    a.connect();
    let r = el.A.getGuildId() ?? null,
        s = ei.A.getChannelId() ?? null,
        o = performance.now(),
        u = en.A.loadCachedMessages.measureAsyncWithoutNesting(() => eE(e, r, s)),
        c = en.A.fetchGuildCache.measureAsync(() => ep(e, n)),
        h = en.A.fetchGuildCache.measureAsync(() => eg(e, n)),
        E =
            null != e
                ? d.A.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => X.A.getAsync(e, null))
                : Promise.resolve([]),
        A = null == e ? Promise.resolve({}) : d.A.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => Q.getAll(e)),
        p = null == e ? Promise.resolve([]) : d.A.timeAsync("\uD83D\uDCBE", "cache: read_states", () => Y.getAll(e)),
        g =
            null == e
                ? Promise.resolve([])
                : d.A.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => z.getAll(e)),
        [[f, I], S, T, m, C, O, N] = await Promise.all([u, c, h, E, A, p, g]),
        y = performance.now() - o;
    if ((ed.verbose(`cache loaded in ${y}ms (channel_history ${f}ms)`), null == I))
        return ed.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
    let R = Object.fromEntries(I.members.map((e) => [e.userId, e])),
        L = null != T.guildId && null != T.channels,
        v = T.guildId;
    return (
        await new Promise((e, t) =>
            i.Ay.Emitter.batched(() => {
                d.A.time("\uD83D\uDCBE", "Dispatch Mini Cache", () =>
                    l.h
                        .dispatch({
                            type: "CACHE_LOADED",
                            guilds: S,
                            privateChannels: m,
                            initialGuildChannels: T.channels ?? [],
                            users: [...I.users],
                            messages: null == I.channelId ? {} : { [I.channelId]: I.messages },
                            guildMembers: null == I.guildId ? {} : { [I.guildId]: R },
                            userSettings: C,
                            userGuildSettings: N,
                            readStates: O,
                        })
                        .then(e, t),
                ),
                    d.A.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () =>
                        a.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])),
                    );
            }),
        ),
        ed.verbose(`early_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          selected_guild: ${r}
          selected_channel: ${s}
          navigation_state: ${JSON.stringify(n)}
          database: ${null != e}
            name: ${e?.name}
        data:
          database:
            private_channels: ${m.length}
            channel_history:
              guild: ${I.guildId}
              channel: ${I.channelId}
              messages: ${I.messages.length}
                members: ${I.members.length}
                users: ${I.users.length}
            initial_guild:
              id: ${v}
              channels: ${T.channels?.length}
            user_settings: ${Object.keys(C).length}
            read_states: ${O.length}
            user_guild_settings: ${N.length}
      )`),
        en.A.setEarlyCacheInfo({ guilds: S.length }),
        ed.verbose("finished dispatching CACHE_LOADED"),
        [!0, L ? (v ?? null) : null, m.length]
    );
}
let e_ = !1;
async function ep(e, t) {
    if (null == e) return [];
    switch (t.page) {
        case "private-channels":
        case "guild-channels":
            e_ = !0;
            break;
        case "other":
            "@me" === t.guildId && (e_ = !0);
    }
    if (e_) return (await (0, c.kk)(() => d.A.timeAsync("\uD83D\uDCBE", "cache: guilds", () => M.getAsync(e)))) ?? [];
    let n = (await F.A.getCommittedVersions()).initial_guild_id ?? t.guildId;
    if (null == n || "@me" === n) return [];
    let i = await (0, c.kk)(() => M.getOneAsync(e, n));
    return null != i ? [i] : [];
}
async function eg(e, t) {
    if (null == e) return Promise.resolve({ channels: null, guildId: null });
    let n = (await F.A.getCommittedVersions()).initial_guild_id;
    if ((null == n && "guild-channels" === t.page && (n = t.guildId), null == e || null == n))
        return (
            ed.verbose(`skipped loading initial guild (guild: ${n}, database: ${e})`),
            Promise.resolve({ channels: null, guildId: null })
        );
    let i = n;
    return { channels: await (0, c.kk)(() => X.A.getAsync(e, i)), guildId: n };
}
async function ef(e, t, n, i) {
    ed.verbose("loading late lazy cache");
    let [a, r, s] = await en.A.fetchLazyCache.measureAsync(() =>
            Promise.all([
                (0, c.kk)(() =>
                    null != e
                        ? d.A.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => w.A.okAsync(e))
                        : Promise.resolve(!0),
                ),
                (0, c.kk)(() =>
                    null == e || e_
                        ? Promise.resolve([])
                        : d.A.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => M.getAsync(e)),
                ),
                (0, c.kk)(() =>
                    null != e
                        ? d.A.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => y.getAsync(e))
                        : Promise.resolve({ all: [], stale: [], channels: [] }),
                ),
            ]),
        ),
        o = await en.A.fetchStaleChannels.measureAsync(() =>
            null != e && null != s && s.stale.length > 0
                ? (0, c.kk)(() => {
                      var t;
                      return (
                          (t = s.stale),
                          ed.verbose(`loading stale guild channels (count: ${t.length}, ids: ${t.join(", ")})`),
                          Promise.all(t.map((t) => X.A.getAsync(e, t).then((e) => [t, e])))
                      );
                  })
                : Promise.resolve([]),
        );
    ee.iQ.getCachedEnabled()
        ? ed.verbose("loadLateLazyCache: not yielding to react")
        : (ed.verbose("loadLateLazyCache: yielding to react"), await (0, J.i)((0, er.isIOS)() ? 0 : void 0)),
        en.A.loadLazyCache.recordStart();
    let u = _.A.getSocket();
    eI(() => {
        let d = performance.now();
        if (!1 === a) {
            l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:not_ok" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == r || null == s || null == o) {
            ed.log(`couldn't load database item (
          database: ${null != e}
          basic_channels: ${null != s}
          guild_channels: ${null != o}
          guilds: ${null != r}
        )`),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:load_failed" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        if (null == a && (r.length > 0 || s.all.length > 0)) {
            ed.log("kv_cache was not ok (null version with values)"),
                l.h.dispatch({ type: "CLEAR_CACHES", reason: "database:versionless" }),
                l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" });
            return;
        }
        0;
        u.addAnalytics({ hadCacheAtStartup: !0 });
        let c = {
            type: "CACHE_LOADED_LAZY",
            guilds: r,
            guildChannels: o,
            basicGuildChannels: s.channels,
            initialGuildId: n,
        };
        en.A.deserializeCache.measure(() => {
            null != c.channels && (0, es.Ay)(c.channels),
                null != c.privateChannels && (0, es.Ay)(c.privateChannels),
                null != c.guildChannels && (0, es.X3)(c.guildChannels);
        }),
            en.A.dispatchLazyCache.measure(() => l.h.dispatch(c)),
            ed.verbose(`late lazy cache loaded (ok: true, took: ${performance.now() - d}ms)`),
            u.addAnalytics({ usedCacheAtStartup: !0 });
        let h = o.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            E = o.length,
            A = s.all.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            _ = s.channels.reduce((e, t) => {
                let [n, i] = t;
                return e + i.length;
            }, 0),
            p = A - _,
            g = 0 === s.stale.length ? "" : ` \xb7 ${s.stale.join(", ")}`;
        ed.verbose(`lazy_cache_summary: (
        ok: true
        meta:
          auth_user_id: ${t}
          initial_guild: ${n}
          database: ${null != e}
            ok: ${a}
            name: ${e?.name}
        data:
          database:
            guilds: ${r.length}
            basic_channels:
              total: ${A} (${s.channels.length} guilds)
              stale: ${p} (${s.stale.length} guilds${g})
              unstale: ${_}
            full_channels (guilds_with_stale_basic_channels):
              total: ${h} (${o.length} guilds)
      )`),
            en.A.setLazyCacheInfo({
                guilds: r.length,
                privateChannels: i,
                basicChannels: A,
                basicChannelsStale: p,
                fullChannels: h,
                fullChannelGuilds: E,
            });
    });
}
function eI(e) {
    let t = _.A.getSocket(),
        n = !1;
    i.Ay.Emitter.batched(() => {
        try {
            if ((e(), !t.dispatcher.hasStuffToDispatchNow())) {
                ed.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                return;
            }
            (n = !0),
                en.A.loadLazyCache.recordEnd(),
                ed.verbose("Processing First Queued Dispatch"),
                t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])),
                setTimeout(() => {
                    ed.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
                }, 100);
        } catch (e) {
            ed.warn("Lazy cache has encountered error", e),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "LazyCache" } });
        }
    }),
        n || en.A.loadLazyCache.recordEnd();
}
class eS extends i.Ay.Store {
    static displayName = "CacheStore";
    initialize() {
        this.waitFor(g.default, _.A, ei.A, el.A), _.A.getSocket().dispatcher.unpauseDispatchQueue();
    }
    hasCache() {
        return !0;
    }
    getLazyCacheStatus() {
        return "no-cache";
    }
    get lastWriteTime() {
        return eh;
    }
    canWriteCaches(e) {
        return (0, ea.wR)()
            ? eu
                ? (ed.log("Not writing cache because caches cleared"), !1)
                : !!e || (ed.log("Not writing cache because never connected"), !1)
            : (ed.log("Not writing cache because not authenticated"), !1);
    }
    async loadCacheAsync(e, t) {
        let n,
            i,
            a =
                ((i = !1),
                function () {
                    for (var e = arguments.length, l = Array(e), a = 0; a < e; a++) l[a] = arguments[a];
                    return i || ((i = !0), (n = t(...l))), n;
                });
        en.A.setInitialPage(e.page);
        let r = e.guildId;
        if ((en.A.setInitialGuildId(null != r && "@me" !== r ? r : null), "initializing" !== ec)) {
            a(), setTimeout(() => _.A.getSocket()?.dispatcher?.unpauseDispatchQueue(), 0);
            return;
        }
        try {
            let t = g.default.getId(),
                n = K.A.carefullyOpenDatabase(t),
                [i, r, s] = await en.A.loadMiniCache.measureAsync(() => eA(n, t, e));
            i
                ? (a(), await ef(n, t, r, s))
                : (a(), await (eI(() => l.h.dispatch({ type: "CACHE_LOADED_LAZY_NO_CACHE" })), Promise.resolve()));
        } catch (e) {
            ed.error("clearing cache. exception encountered while loading cache.", e, e.stack),
                a(),
                l.h.dispatch({ type: "RESET_SOCKET", args: { error: e, action: "loadCacheAsync" } });
        }
    }
}
new eS(l.h, {}), n(313961);
let eT = Object.freeze({ online: null, total: null }),
    em = {},
    eC = {},
    eO = null;
class eN extends i.Ay.PersistedStore {
    static displayName = "ChannelMemberCountStore";
    static persistKey = "channelMemberCounts";
    initialize(e) {
        this.waitFor(_.A, f.A), (eC = e ?? em);
    }
    getState() {
        return eC;
    }
    getMemberCount(e) {
        return eC[e] ?? eT;
    }
    requestCount(e, t) {
        (eO = { guildId: e, channelId: t }), _.A.getSocket().requestChannelMemberCount(e, t);
    }
}
new eN(l.h, {
    CONNECTION_OPEN: function () {
        null != eO && _.A.getSocket().requestChannelMemberCount(eO.guildId, eO.channelId),
            x.default.keys(eC).forEach((e) => {
                null == f.A.getChannel(e) && delete eC[e];
            });
    },
    CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
        let { channelId: t, online: n, total: i } = e;
        return (null != n || null != i) && (eC[t] = { online: n, total: i }), !0;
    },
}),
    n(309698),
    n(717125),
    n(25639),
    n(725613),
    n(47671),
    n(574520),
    n(517164),
    n(99753),
    n(697627),
    n(771781),
    n(159273),
    n(608960),
    n(736056),
    n(639841),
    n(710195),
    n(457699),
    n(900019),
    n(207777),
    n(969043),
    n(246943),
    n(474399),
    n(768953),
    n(870391),
    n(586774);
var ey = n(328153);
n(800828), n(507263), n(823448), n(499118), n(351022), n(610136), n(93474);
var eR = n(746080);
let eL = {},
    ev = {},
    eD = {},
    eU = {};
function eP(e) {
    let t = ev[e];
    if (null == t) return;
    let n = x.default.fromTimestamp(Date.now() - 9e5),
        i = k().findIndex(t, (e) => x.default.compare(e.id, n) > 0);
    if (-1 === i) ev[e] = [];
    else {
        let n = Math.max(i, t.length - 26);
        ev[e] = k().slice(t, n);
    }
    eD[e] = Date.now();
}
function eb(e, t, n, i) {
    eL[e].add(t);
    let l = eD[t];
    (null == l || l + 3e5 > Date.now()) && eP(t), null == ev[t] && (ev[t] = []), ev[t].push({ id: n, userId: i });
}
function eM(e) {
    let { channel: t } = e;
    delete ev[t.id], delete eD[t.id];
}
class ew extends i.Ay.Store {
    initialize() {
        this.waitFor(f.A, el.A);
    }
    static displayName = "ActiveChannelsStore";
    getActiveChannelsFetchStatus(e) {
        return eU[e];
    }
    getActiveChannelIds(e) {
        return eL[e];
    }
    getChannelMessageData(e) {
        return ev[e];
    }
    shouldFetch(e) {
        return null == eL[e] && !eU[e]?.loading;
    }
}
new ew(l.h, {
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (!(0, eR.mP)(t) || null == n) return !1;
        let i = eL[n];
        if (null == i) return !1;
        i.forEach((e) => {
            eP(e), ev[e]?.length === 0 && delete ev[e];
        });
        let l = k()
            .chain(Array.from(i))
            .filter((e) => e in ev)
            .sortBy((e) => -(ev[e]?.length ?? 0))
            .value();
        eL[n] = new Set(l);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n, optimistic: i, isPushNotification: l } = e;
        if (i || l) return !1;
        let a = f.A.getChannel(t);
        if (null == a) return !1;
        let r = a.guild_id;
        if (null == r || null == eL[r]) return !1;
        eb(r, t, n.id, n.author?.id);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete eL[t.id];
    },
    CHANNEL_DELETE: eM,
    THREAD_DELETE: eM,
    ACTIVE_CHANNELS_FETCH_START: function (e) {
        let { guildId: t } = e;
        eU[t] = { loading: !0, error: null, fetchedAt: Date.now() };
    },
    ACTIVE_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, channels: n } = e;
        (eU[t] = { loading: !1, error: null, fetchedAt: Date.now() }),
            (eL[t] = new Set()),
            n.forEach((e) => {
                let { channel_id: n, messages: i } = e;
                i.forEach((e) => {
                    eb(t, n, e.message_id, e.user_id);
                });
            });
    },
    ACTIVE_CHANNELS_FETCH_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        eU[t] = { loading: !1, error: n, fetchedAt: null };
    },
    CONNECTION_OPEN: function () {},
}),
    n(212455),
    n(879408),
    n(151781),
    n(591552),
    n(713125),
    n(871109);
var eG = n(936649);
let eF = {};
function eV(e, t) {
    let n = eF[e];
    return !(null == n || n.has(t)) && ((eF[e] = new Set(n.add(t))), !0);
}
class ek extends i.Ay.PersistedStore {
    static displayName = "GuildProgressStore";
    static persistKey = "GuildProgressStore";
    initialize(e) {
        this.waitFor(g.default, f.A, S.A),
            (eF = {}),
            null != e &&
                x.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && "function" == typeof n[Symbol.iterator] && (eF[t] = new Set(n));
                });
    }
    getProgress(e) {
        return eF[e];
    }
    hasProgress(e) {
        let t = eF[e];
        return null != t && !t.has(eG.gj.DISMISSED);
    }
    getState() {
        return eF;
    }
}
new ek(l.h, {
    CONNECTION_OPEN: function () {
        let e = [];
        x.default.keys(eF).forEach((t) => {
            eF[t].has(eG.gj.COMPLETED) && e.push(t);
        }),
            e.forEach((e) => eV(e, eG.gj.DISMISSED));
    },
    GUILD_PROGRESS_INITIALIZE: function (e) {
        let { guildId: t } = e;
        null == eF[t] && (eF[t] = new Set()), eF[t].has(eG.gj.COMPLETED) || eF[t].delete(eG.gj.DISMISSED);
    },
    GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
        let { guildId: t } = e;
        if (null == eF[t]) return !1;
        eF[t] = new Set(eF[t].add(eG.gj.COMPLETED));
    },
    GUILD_PROGRESS_DISMISS: function (e) {
        let { guildId: t } = e;
        return eV(t, eG.gj.DISMISSED);
    },
    GUILD_CREATE: function (e) {
        let {
                guild: { id: t, member_count: n },
            } = e,
            i = S.A.getGuild(t);
        if (null == i) return !1;
        i.ownerId === g.default.getId() &&
            null != eF[i.id] &&
            (null != i.icon && eF[i.id].add(eG.gj.AVATAR), n > 1 && eF[i.id].add(eG.gj.INVITE));
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        return null != t && null != t.guild_id && null != eF[t.guild_id] && eV(t.guild_id, eG.gj.CHANNEL);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t)
            null != e &&
                null != e.guild_id &&
                null != eF[e.guild_id] &&
                !1 !== eV(e.guild_id, eG.gj.CHANNEL) &&
                (n = !0);
        return n;
    },
    GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guild: t } = e;
        return null != t && null != t.id && null != eF[t.id] && null != t.icon && eV(t.id, eG.gj.AVATAR);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = f.A.getChannel(t);
        return (
            n.author?.id === g.default.getId() && null != i && null != eF[i.guild_id] && eV(i.guild_id, eG.gj.MESSAGE)
        );
    },
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, memberCount: n } = e;
        return null != eF[t] && n > 1 && eV(t, eG.gj.INVITE);
    },
}),
    n(636194),
    n(384684),
    n(698441),
    n(960755),
    n(121780),
    n(857071),
    n(752755),
    n(578623),
    n(973153),
    n(401565),
    n(380335),
    n(157550),
    n(274303),
    n(252431);
var eH = n(253932),
    ex = n(461213),
    eB = n(927813);
let eY = [],
    ej = !1;
function e$() {
    return eY.length >= 4 && eY.some((e) => e < Date.now() - 3 * eB.A.Millis.DAY);
}
class ez extends i.Ay.PersistedStore {
    static displayName = "HabitualDNDStore";
    static persistKey = "habitualDND";
    initialize(e) {
        this.waitFor(ex.A), null != e && Array.isArray(e.sessionStartsWithDND) && (eY = e.sessionStartsWithDND);
    }
    showNagBar() {
        return ej;
    }
    getState() {
        return { sessionStartsWithDND: eY };
    }
    getTemp() {
        return { x: eH.CY.getSetting() };
    }
}
new ez(l.h, {
    POST_CONNECTION_OPEN: function () {
        ex.A.getStatus() === eo.clD.DND && "0" === eH.CY.getSetting()
            ? (eY.push(Date.now()),
              (eY = eY.filter((e) => e > Date.now() - 5 * eB.A.Millis.DAY)),
              e$() &&
                  setTimeout(() => {
                      l.h.dispatch({ type: "HABITUAL_DND_CLEAR" });
                  }, 15 * eB.A.Millis.SECOND))
            : (eY = []);
    },
    HABITUAL_DND_CLEAR: function () {
        (ej = !!e$()), (eY = []);
    },
}),
    n(535586),
    n(517092),
    n(310031),
    n(833551),
    n(680243),
    n(648427),
    n(185657),
    n(91868),
    n(406595),
    n(695515),
    n(148864),
    n(683760),
    n(275759),
    n(911411),
    n(174768),
    n(135978),
    n(923495),
    n(542986),
    n(853145),
    n(9842),
    n(532309),
    n(707890),
    n(440976),
    n(85109),
    n(199160),
    n(517381),
    n(268988),
    n(349435),
    n(741812),
    n(49431),
    n(832163),
    n(889979),
    n(655116),
    n(63995),
    n(312006),
    n(732755),
    n(446600),
    n(41237),
    n(750385),
    n(822074),
    n(695633),
    n(970278),
    n(45494),
    n(152007),
    n(219065),
    n(802958),
    n(456874),
    n(79858),
    n(279263),
    n(975648),
    n(878460),
    n(773669),
    n(363195),
    n(769022);
var eW = n(451988),
    eK = n(308368),
    eq = n(973522),
    eZ = n(674378),
    eQ = n(760751),
    eX = n(189081),
    eJ = n(763827);
let e0 = "ActivityTrackingStore",
    e1 = 30 * eB.A.Millis.MINUTE,
    e2 = 5 * eB.A.Millis.MINUTE,
    e3 = u.w.get(e0) ?? {},
    e5 = {},
    e7 = !1;
function e6(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && e8(e, !0);
    let n = e5[e.applicationId];
    null != n && (n.stop(), delete e5[e.applicationId]), delete e3[e.applicationId], u.w.set(e0, e3);
}
function e8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = Date.now(),
        i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > e1 + e2 && (i = 0);
    let l = (0, eZ.kv)(e.applicationId, eX.A),
        a = ei.A.getVoiceChannelId(),
        r = g.default.getSessionId(),
        s = eJ.A.getMediaSessionId();
    eK.A.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? eo.d3x.DISCORD : e.distributor,
        shareActivity: l,
        token: e.token,
        duration: Math.floor(i / 1e3),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: a,
        sessionId: r,
        mediaSessionId: s,
    }),
        (e.updatedAt = n);
    let o = e5[e.applicationId];
    null == o && (o = e5[e.applicationId] = new eW.IX()).start(e1, () => e8(e)),
        t || ((e3[e.applicationId] = e), u.w.set(e0, e3));
}
function e9() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = ey.Ay.getVisibleRunningGames(),
        n = new Set();
    for (let e of t) {
        let t = eQ.A.findGame(e);
        null != t &&
            (n.add(t.id),
            t.id in e3 ||
                e8({
                    applicationId: t.id,
                    updatedAt: Date.now(),
                    distributor: e.distributor,
                    exePath: (0, eq.Ic)(e.exePath ?? ""),
                }));
    }
    for (let t of Object.keys(e3)) n.has(t) || e6(e3[t], e);
}
function e4() {
    for (let e of Object.keys(e3)) e6(e3[e]);
    e7 = !1;
}
class te extends i.Ay.Store {
    static displayName = "ActivityTrackingStore";
    initialize() {
        this.waitFor(g.default, eQ.A, eX.A, eJ.A, ey.Ay, ei.A, W.A), this.syncWith([W.A], e9);
    }
    getActivities() {
        return e3;
    }
}
new te(l.h, {
    RUNNING_GAMES_CHANGE: () => e9(),
    CONNECTION_OPEN: function () {
        if (e7) return !1;
        for (let e of Object.keys(e3)) e8(e3[e]);
        e9(!1), (e7 = !0);
    },
    CONNECTION_CLOSED: function (e) {
        let { code: t } = e;
        4004 === t && e4();
    },
    LOGOUT: e4,
    ACTIVITY_UPDATE_SUCCESS: function (e) {
        let { applicationId: t, token: n } = e,
            i = e3[t];
        if (null == i) return !1;
        (i.token = n), u.w.set(e0, e3);
    },
    ACTIVITY_UPDATE_FAIL: function (e) {
        let { applicationId: t } = e,
            n = e3[t];
        if (null == n) return !1;
        (n.token = null), (n.updatedAt = null), u.w.set(e0, e3);
    },
}),
    n(930839),
    n(384200),
    n(616356),
    n(470710),
    n(924985),
    n(560010),
    n(963307),
    n(966833);
let tt = {};
class tn extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return tt[e];
    }
}
new tn(l.h, {
    CONNECTION_OPEN: function () {
        tt = {};
    },
    STORE_LISTING_FETCH_SUCCESS: function (e) {
        let { channelId: t, storeListing: n } = e;
        null != t && (tt[t] = n.sku.id);
    },
}),
    n(945886),
    n(30370),
    n(153488),
    n(540999),
    n(111162),
    n(31717),
    n(629016),
    n(543897),
    n(30793),
    n(776096),
    n(919638),
    n(769765),
    n(808728),
    n(498642),
    n(860071),
    n(184989),
    n(458294),
    n(82057),
    n(834942),
    n(958590),
    n(670492),
    n(51760),
    n(956703),
    n(232835),
    n(783592),
    n(737613),
    n(362790),
    n(290863),
    n(131677),
    n(584777),
    n(584569),
    n(994500),
    n(528767),
    n(711014),
    n(485296),
    n(437959),
    n(116956),
    n(274184),
    n(741961),
    n(399263),
    n(870570),
    n(287809),
    n(803301),
    n(977997),
    n(615405),
    n(992250),
    n(731667),
    n(568004),
    n(567761),
    n(607567),
    n(595623),
    n(340829),
    n(966846),
    n(532624),
    n(530789),
    n(773371),
    n(256415);
