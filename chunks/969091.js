"use strict";
n.d(t, { A: () => l, p: () => a.p }), n(938796);
var r = n(143236),
    i = n(873985),
    s = n(661191),
    a = n(353198);
let o = 15360;
class l extends r.EventEmitter {
    presenceUpdate(e, t, n, r) {
        this.send(a.p.PRESENCE_UPDATE, { status: e, since: t, activities: n, afk: r });
    }
    voiceStateUpdate(e) {
        let {
                guildId: t = null,
                channelId: n = null,
                selfMute: r = !1,
                selfDeaf: s = !1,
                selfVideo: o = !1,
                preferredRegion: l = null,
                preferredRegions: u = null,
                videoStreamParameters: c = null,
                flags: d = 0,
            } = e,
            _ = { guild_id: t, channel_id: n, self_mute: r, self_deaf: s, self_video: o, flags: d };
        null != n && i.A.shouldIncludePreferredRegion() && ((_.preferred_region = l), (_.preferred_regions = u)),
            null != c && (_.tracks = c?.map((e) => ({ type: e.type, rid: e.rid, quality: e.quality }))),
            this.send(a.p.VOICE_STATE_UPDATE, _);
    }
    voiceServerPing() {
        this.send(a.p.VOICE_SERVER_PING, null);
    }
    requestGuildMembers(e, t) {
        let { query: n, limit: r, userIds: i, presences: s } = t;
        this.send(a.p.REQUEST_GUILD_MEMBERS, { guild_id: e, query: n, limit: r, user_ids: i, presences: s });
    }
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: r } = t;
        this.send(a.p.SEARCH_RECENT_MEMBERS, { guild_id: e, query: n ?? "", continuation_token: r ?? null });
    }
    updateGuildSubscriptions(e) {
        let t = {},
            n = 0;
        s.default.keys(e).forEach((r) => {
            let i = e[r],
                s = JSON.stringify([r, i]).length;
            n + s > o && (this.send(a.p.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t }), (t = {}), (n = 0)),
                (t[r] = i),
                (n += s);
        }),
            n > 0 && this.send(a.p.GUILD_SUBSCRIPTIONS_BULK, { subscriptions: t });
    }
    callConnect(e) {
        this.send(a.p.CALL_CONNECT, { channel_id: e });
    }
    streamCreate(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.send(a.p.STREAM_CREATE, { type: e, guild_id: t, channel_id: n, preferred_region: r });
    }
    streamWatch(e) {
        this.send(a.p.STREAM_WATCH, { stream_key: e });
    }
    streamPing(e) {
        this.send(a.p.STREAM_PING, { stream_key: e });
    }
    streamDelete(e) {
        this.send(a.p.STREAM_DELETE, { stream_key: e });
    }
    streamSetPaused(e, t) {
        this.send(a.p.STREAM_SET_PAUSED, { stream_key: e, paused: t });
    }
    requestForumUnreads(e, t, n) {
        this.send(a.p.REQUEST_FORUM_UNREADS, {
            guild_id: e,
            channel_id: t,
            threads: n.map((e) => ({ thread_id: e.threadId, ack_message_id: e.ackMessageId })),
        });
    }
    requestSoundboardSounds(e) {
        this.send(a.p.REQUEST_SOUNDBOARD_SOUNDS, { guild_ids: e });
    }
    requestLastMessages(e, t) {
        this.send(a.p.REQUEST_LAST_MESSAGES, { guild_id: e, channel_ids: t });
    }
    getDeletedEntityIdsNotMatchingHash(e, t, n, r, i) {
        this.send(a.p.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH, {
            guild_id: e,
            channel_ids_hash: t,
            role_ids_hash: n,
            emoji_ids_hash: r,
            sticker_ids_hash: i,
        });
    }
    triggerGuildChannelResync(e, t) {
        this.send(a.p.GUILD_CHANNELS_RESYNC, { guild_id: e, obfuscated_channel_ids: t });
    }
    requestChannelInfo(e, t) {
        this.send(a.p.REQUEST_CHANNEL_INFO, { guild_id: e, fields: t });
    }
    requestChannelMemberCount(e, t) {
        this.send(a.p.REQUEST_CHANNEL_MEMBER_COUNT, { guild_id: e, channel_id: t });
    }
    remoteCommand(e, t) {
        this.send(a.p.REMOTE_COMMAND, { target_session_id: e, payload: t });
    }
}
