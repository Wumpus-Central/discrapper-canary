n(938796);
var i = n(435558),
    r = n.n(i),
    a = n(635377),
    s = n.n(a),
    l = n(371444),
    o = n(392421),
    d = n(602137),
    c = n(136722),
    u = n(665260),
    _ = n(933681),
    E = n(233993),
    A = n(446600),
    h = n(403362),
    f = n(811091),
    I = n(652215),
    p = n(746080);
let m = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_STORE,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_APP,
        I.rbe.DM,
        I.rbe.GROUP_DM,
    ]),
    g = new Set([
        I.rbe.DM,
        I.rbe.GROUP_DM,
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_CATEGORY,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_STORE,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_SPACE,
        I.rbe.MEDIA_THREAD,
        I.rbe.GUILD_APP,
    ]),
    T = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_APP,
    ]),
    S = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_APP,
    ]),
    N = new Set([I.rbe.GUILD_TEXT]),
    C = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_CATEGORY,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_STORE,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_SPACE,
        I.rbe.GUILD_APP,
    ]);
(I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA, I.rbe.GUILD_APP);
let O = new Set([I.rbe.GUILD_VOICE, I.rbe.GUILD_STAGE_VOICE]);
function R(e) {
    return "SELECTABLE" !== e && O.has(e);
}
let L = new Set([I.rbe.GUILD_STAGE_VOICE]),
    y = new Set([I.rbe.DM, I.rbe.GROUP_DM]);
function D(e) {
    return y.has(e);
}
let b = new Set([I.rbe.GROUP_DM]);
function v(e) {
    return b.has(e);
}
let P = new Set([
        I.rbe.DM,
        I.rbe.GROUP_DM,
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_APP,
    ]),
    M = new Set([
        I.rbe.DM,
        I.rbe.GROUP_DM,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
    ]);
function U(e) {
    return M.has(e);
}
let w = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_APP,
        I.rbe.DM,
        I.rbe.GROUP_DM,
    ]),
    G = new Set([I.rbe.ANNOUNCEMENT_THREAD, I.rbe.PUBLIC_THREAD, I.rbe.PRIVATE_THREAD, I.rbe.MEDIA_THREAD]),
    x = new Set([I.rbe.PUBLIC_THREAD, I.rbe.PRIVATE_THREAD]),
    k = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA, I.rbe.GUILD_APP]);
function F(e) {
    return G.has(e);
}
let B = new Set([
        I.rbe.DM,
        I.rbe.GROUP_DM,
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_APP,
    ]),
    V = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_STORE,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_APP,
    ]),
    H = new Set([
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_CATEGORY,
        I.rbe.GUILD_STORE,
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_APP,
    ]),
    j = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT]),
    W = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA, I.rbe.GUILD_APP]),
    Y = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_APP,
    ]),
    K = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_APP,
    ]),
    $ = new Set([I.rbe.PUBLIC_THREAD, I.rbe.PRIVATE_THREAD, I.rbe.GUILD_VOICE, I.rbe.GUILD_STAGE_VOICE]),
    X = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA]),
    z = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_CATEGORY, I.rbe.GUILD_FORUM, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_APP]);
(I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_VOICE, I.rbe.GUILD_APP);
let q = new Set([I.rbe.GUILD_APP]),
    Z = new Set([...q]),
    Q = new Set([...q, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA]);
function J(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: c.iu(e.allow), deny: c.iu(e.deny) };
        }),
        t
    );
}
function ee(e) {
    return null == e ? {} : r().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function et(e) {
    return null == e
        ? []
        : e.map((e) => ({
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated,
              color: e.color,
          }));
}
function en(e) {
    return null != e ? { id: e.id, name: e.name } : void 0;
}
let ei = c.kg(I.xBc.CONNECT, I.xBc.VIEW_CHANNEL),
    er = I.hVb.CONNECT | I.hVb.VIEW_CHANNEL;
function ea(e) {
    return R(e) ? ei : I.xBc.VIEW_CHANNEL;
}
class es {
    id;
    type;
    name;
    guild_id;
    topic_;
    position_;
    permissionOverwrites_;
    bitrate_;
    rtcRegion;
    videoQualityMode;
    userLimit_;
    recipients;
    rawRecipients;
    ownerId;
    icon;
    application_id;
    nicks;
    nsfw_;
    parent_id;
    memberListId;
    rateLimitPerUser_;
    defaultThreadRateLimitPerUser;
    defaultAutoArchiveDuration;
    flags_;
    originChannelId;
    lastMessageId;
    lastPinTimestamp;
    availableTags;
    appliedTags;
    messageCount;
    memberCount;
    threadMetadata;
    memberIdsPreview;
    member;
    parentChannelThreadType;
    template;
    defaultReactionEmoji;
    isMessageRequest;
    isMessageRequestTimestamp;
    isSpam;
    totalMessageSent;
    defaultSortOrder;
    version;
    defaultForumLayout;
    defaultTagSetting;
    iconEmoji;
    themeColor;
    safetyWarnings;
    blockedUserWarningDismissed;
    recipientFlags;
    linkedLobby;
    hdStreamingUntil;
    hdStreamingBuyerId;
    voiceHangout;
    lastNonMessageActivityTimestamp;
    gameId;
    constructor(e) {
        ((this.id = e.id),
            (this.type = e.type ?? I.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null));
    }
}
function el(e) {
    return (
        "topic" in e && ((e.topic_ = e.topic), delete e.topic),
        "position" in e && ((e.position_ = e.position), delete e.position),
        "permissionOverwrites" in e &&
            ((e.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites),
        "bitrate" in e && ((e.bitrate_ = e.bitrate), delete e.bitrate),
        "userLimit" in e && ((e.userLimit_ = e.userLimit), delete e.userLimit),
        "nsfw" in e && ((e.nsfw_ = e.nsfw), delete e.nsfw),
        "rateLimitPerUser" in e && ((e.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser),
        "flags" in e && ((e.flags_ = e.flags), delete e.flags),
        e
    );
}
let eo = Object.freeze({});
class ed extends es {
    get permissionOverwrites() {
        return this.permissionOverwrites_ ?? eo;
    }
    get topic() {
        return this.topic_ ?? "";
    }
    get position() {
        return this.position_ ?? 0;
    }
    get bitrate() {
        return this.bitrate_ ?? 64e3;
    }
    get userLimit() {
        return this.userLimit_ ?? 0;
    }
    get nsfw() {
        return this.nsfw_ ?? !1;
    }
    get rateLimitPerUser() {
        return this.rateLimitPerUser_ ?? 0;
    }
    get flags() {
        return this.flags_ ?? 0;
    }
    toJS() {
        return { ...this };
    }
    set(e, t) {
        return this.merge({ [e]: t });
    }
    merge(e) {
        let t = null,
            n = el(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && A.A.isPublic(this.id)) return E.Uu;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return I.kvI.APPLICATION_MANAGEABLE.has(this.type) && null != this.application_id;
    }
    isPrivate() {
        return D(this.type);
    }
    isGroupDM() {
        return this.type === I.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return v(this.type);
    }
    isDM() {
        return this.type === I.rbe.DM;
    }
    isSystemDM() {
        return !1;
    }
    isArchivedThread() {
        return this.isThread() && this.threadMetadata?.archived === !0;
    }
    isLockedThread() {
        return this.isThread() && this.threadMetadata?.locked === !0;
    }
    isScheduledForDeletion() {
        return this.hasFlag(p.lx.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        return G.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
    }
    isForumPost() {
        return (
            this.type === I.rbe.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            I.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isMediaThread() {
        return this.type === I.rbe.MEDIA_THREAD;
    }
    isRingable() {
        return I.kvI.CALLABLE.has(this.type) || this.type === I.rbe.GUILD_VOICE;
    }
    isCategory() {
        return this.type === I.rbe.GUILD_CATEGORY;
    }
    isVocal() {
        return U(this.type);
    }
    isGuildVocal() {
        return R(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === I.rbe.GUILD_VOICE;
    }
    isGuildVoiceOrThread() {
        return this.isGuildVoice() || this.isVocalThread();
    }
    isGuildStageVoice() {
        return this.type === I.rbe.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return F(this.type);
    }
    isAnnouncementThread() {
        return this.type === I.rbe.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === I.rbe.PUBLIC_THREAD || this.type === I.rbe.PRIVATE_THREAD;
    }
    isActiveThread() {
        return this.isThread() && this.threadMetadata?.archived !== !0;
    }
    isDirectory() {
        return this.type === I.rbe.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === I.rbe.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === I.rbe.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === I.rbe.PUBLIC_THREAD && this.parentChannelThreadType === I.rbe.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(p.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    isObfuscated() {
        return this.hasFlag(p.lx.OBFUSCATED);
    }
    getGuildId() {
        return this.guild_id;
    }
    getApplicationId() {
        return this.application_id;
    }
    getDefaultSortOrder() {
        return this.isGameInvitesChannel() ? d.T.CREATION_DATE : (this.defaultSortOrder ?? d.T.LATEST_ACTIVITY);
    }
    getDefaultLayout() {
        return this.isMediaChannel() || this.isGameInvitesChannel()
            ? l.C.GRID
            : null == this.defaultForumLayout || this.defaultForumLayout === l.C.DEFAULT
              ? l.C.LIST
              : this.defaultForumLayout;
    }
    getDefaultTagSetting() {
        return this.defaultTagSetting ?? o.n.MATCH_SOME;
    }
    isModeratorReportChannel() {
        return this.hasFlag(p.lx.IS_MODERATOR_REPORT_CHANNEL);
    }
    isSpoilerChannel() {
        return this.hasFlag(p.lx.IS_SPOILER_CHANNEL);
    }
    isGameInvitesChannel() {
        return this.hasFlag(p.lx.IS_GAME_INVITES_CHANNEL);
    }
    get accessPermissions() {
        return ea(this.type);
    }
    hasFlag(e) {
        return (0, u.Lt)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class ec extends ed {
    constructor(e) {
        (super(e),
            (this.application_id = e.application_id),
            (this.appliedTags = e.appliedTags),
            (this.availableTags = e.availableTags),
            (this.bitrate_ = e.bitrate_),
            (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration),
            (this.defaultForumLayout = e.defaultForumLayout),
            (this.defaultReactionEmoji = e.defaultReactionEmoji),
            (this.defaultSortOrder = e.defaultSortOrder),
            (this.defaultTagSetting = e.defaultTagSetting),
            (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser),
            (this.flags_ = e.flags_),
            (this.gameId = e.gameId),
            (this.icon = e.icon),
            (this.iconEmoji = e.iconEmoji),
            (this.isMessageRequest = e.isMessageRequest),
            (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp),
            (this.isSpam = e.isSpam),
            (this.lastMessageId = e.lastMessageId),
            (this.lastNonMessageActivityTimestamp = e.lastNonMessageActivityTimestamp),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.member = e.member),
            (this.memberCount = e.memberCount),
            (this.memberIdsPreview = e.memberIdsPreview),
            (this.memberListId = e.memberListId),
            (this.messageCount = e.messageCount),
            (this.nicks = e.nicks),
            (this.nsfw_ = e.nsfw_),
            (this.originChannelId = e.originChannelId),
            (this.ownerId = e.ownerId),
            (this.parent_id = e.parent_id),
            (this.parentChannelThreadType = e.parentChannelThreadType),
            (this.permissionOverwrites_ = e.permissionOverwrites_),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.rawRecipients = e.rawRecipients),
            (this.recipients = e.recipients),
            (this.recipientFlags = e.recipientFlags),
            (this.rtcRegion = e.rtcRegion),
            (this.safetyWarnings = e.safetyWarnings),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed),
            (this.template = e.template),
            (this.themeColor = e.themeColor),
            (this.threadMetadata = e.threadMetadata),
            (this.topic_ = e.topic_),
            (this.userLimit_ = e.userLimit_),
            (this.version = e.version),
            (this.videoQualityMode = e.videoQualityMode),
            (this.linkedLobby = e.linkedLobby),
            (this.hdStreamingUntil = e.hdStreamingUntil),
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId),
            (this.voiceHangout = e.voiceHangout));
    }
    static fromServer(e, t) {
        let n = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? et(e.available_tags) : void 0,
            bitrate_: e.bitrate,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name,
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultTagSetting: e.default_tag_setting,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            gameId: e.game_id,
            guild_id: t ?? e.guild_id ?? null,
            icon: e.icon,
            iconEmoji: en(e.icon_emoji),
            id: e.id,
            isMessageRequest: e.is_message_request,
            isMessageRequestTimestamp: e.is_message_request_timestamp,
            isSpam: e.is_spam,
            lastMessageId: e.last_message_id,
            lastNonMessageActivityTimestamp: e.last_non_message_activity_timestamp,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp,
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            memberListId: e.member_list_id,
            messageCount: e.message_count,
            name: e.name ?? "",
            nicks: ee(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: J(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user,
            rawRecipients: null != e.recipients ? e.recipients : [],
            recipients: null != e.recipients ? e.recipients.map((e) => e.id) : [],
            recipientFlags: e.recipient_flags,
            rtcRegion: e.rtc_region,
            safetyWarnings: e.safety_warnings,
            blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
            template: e.template,
            themeColor: e.theme_color,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: e.thread_metadata.invitable ?? !0,
                      }
                    : void 0,
            topic_: e.topic,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : I.rbe.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        };
        return (0, _.pp)(n, ec);
    }
}
class eu extends ed {
    constructor(e) {
        (super(e),
            (this.application_id = e.application_id),
            (this.bitrate_ = e.bitrate_),
            (this.flags_ = e.flags_),
            (this.iconEmoji = e.iconEmoji),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.memberListId = e.memberListId),
            (this.nsfw_ = e.nsfw_),
            (this.originChannelId = e.originChannelId),
            (this.parent_id = e.parent_id),
            (this.permissionOverwrites_ = e.permissionOverwrites_ ?? {}),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.rtcRegion = e.rtcRegion),
            (this.themeColor = e.themeColor),
            (this.topic_ = e.topic_),
            (this.userLimit_ = e.userLimit_),
            (this.version = e.version),
            (this.videoQualityMode = e.videoQualityMode),
            (this.hdStreamingUntil = e.hdStreamingUntil),
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId),
            (this.voiceHangout = e.voiceHangout));
    }
    static fromServer(e, t) {
        return eS({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: en(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: J(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : I.rbe.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        });
    }
}
class e_ extends ed {
    constructor(e) {
        (super(e),
            (this.application_id = e.application_id),
            (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration),
            (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser),
            (this.flags_ = e.flags_),
            (this.iconEmoji = e.iconEmoji),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.memberListId = e.memberListId),
            (this.nsfw_ = e.nsfw_),
            (this.parent_id = e.parent_id),
            (this.permissionOverwrites_ = e.permissionOverwrites_ ?? {}),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.themeColor = e.themeColor),
            (this.topic_ = e.topic_),
            (this.version = e.version),
            (this.linkedLobby = e.linkedLobby),
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId),
            (this.hdStreamingUntil = e.hdStreamingUntil));
    }
    static fromServer(e, t) {
        return eS({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: en(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: J(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : I.rbe.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version,
        });
    }
}
class eE extends e_ {}
class eA extends ed {
    constructor(e) {
        (super(e),
            (this.availableTags = e.availableTags ?? []),
            (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration),
            (this.defaultForumLayout = e.defaultForumLayout),
            (this.defaultReactionEmoji = e.defaultReactionEmoji),
            (this.defaultSortOrder = e.defaultSortOrder),
            (this.defaultTagSetting = e.defaultTagSetting),
            (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser),
            (this.flags_ = e.flags_),
            (this.gameId = e.gameId),
            (this.iconEmoji = e.iconEmoji),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.memberListId = e.memberListId),
            (this.nsfw_ = e.nsfw_),
            (this.parent_id = e.parent_id),
            (this.permissionOverwrites_ = e.permissionOverwrites_ ?? {}),
            (this.position_ = e.position_),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.template = e.template),
            (this.themeColor = e.themeColor),
            (this.topic_ = e.topic_),
            (this.version = e.version));
    }
    static fromServer(e, t) {
        let n = {
            availableTags: null != e.available_tags ? et(e.available_tags) : [],
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name,
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultTagSetting: e.default_tag_setting,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            gameId: e.game_id,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: en(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: J(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : I.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, _.pp)(n, eA);
    }
}
class eh {
    cache;
    constructor(e = 100) {
        this.cache = new (s())(e);
    }
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return (this.cache.set(e, t), t);
        }
    }
}
let ef = new eh(),
    eI = new eh();
class ep extends ed {
    static sortRecipients(e, t) {
        let n = ef.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (eI.getOrCompute(e.id) ^ n) - (eI.getOrCompute(t.id) ^ n));
    }
    constructor(e) {
        (super(e),
            (this.application_id = e.application_id),
            (this.flags_ = e.flags_),
            (this.icon = e.icon),
            (this.isMessageRequest = e.isMessageRequest),
            (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp),
            (this.isSpam = e.isSpam),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.nicks = e.nicks),
            (this.ownerId = e.ownerId),
            (this.rawRecipients = ep.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(e.recipients ?? [])].sort(f.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = e.safetyWarnings ?? []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed));
    }
    static fromServer(e) {
        let t = ep.sortRecipients(e.recipients, e.id),
            n = {
                application_id: e.application_id,
                flags_: e.flags,
                guild_id: null,
                icon: e.icon,
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: e.is_spam ?? !1,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                name: e.name ?? "",
                nicks: ee(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: t,
                recipients: t.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : I.rbe.DM,
            };
        return (0, _.pp)(n, ep);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === I.rbe.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, t, n) {
        if (e === n) return this;
        {
            let n = this.set(
                "recipients",
                r()
                    .uniq([...(this.recipients ?? []), e])
                    .sort(f.default.compare),
            );
            return null == t ? n : n.set("nicks", { ...n.nicks, [e]: t });
        }
    }
    removeRecipient(e) {
        return this.set("recipients", r().without(this.recipients, e));
    }
}
class em extends ed {
    constructor(e) {
        (super(e),
            (this.appliedTags = e.appliedTags ?? []),
            (this.bitrate_ = e.bitrate_),
            (this.flags_ = e.flags_),
            (this.lastMessageId = e.lastMessageId),
            (this.lastPinTimestamp = e.lastPinTimestamp),
            (this.member = e.member),
            (this.memberCount = e.memberCount),
            (this.memberIdsPreview = e.memberIdsPreview),
            (this.messageCount = e.messageCount),
            (this.nsfw_ = e.nsfw_),
            (this.ownerId = e.ownerId),
            (this.parent_id = e.parent_id),
            (this.parentChannelThreadType = e.parentChannelThreadType),
            (this.rateLimitPerUser_ = e.rateLimitPerUser_),
            (this.rtcRegion = e.rtcRegion),
            (this.threadMetadata = e.threadMetadata),
            (this.userLimit_ = e.userLimit_),
            (this.videoQualityMode = e.videoQualityMode),
            (this.lastNonMessageActivityTimestamp = e.lastNonMessageActivityTimestamp));
    }
    static fromServer(e, t) {
        let n = {
            appliedTags: e.applied_tags ?? [],
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp,
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            messageCount: e.message_count,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: e.parentChannelThreadType,
            rateLimitPerUser_: e.rate_limit_per_user,
            rtcRegion: e.rtc_region,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: e.thread_metadata.invitable ?? !0,
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : I.rbe.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
            lastNonMessageActivityTimestamp: e.last_non_message_activity_timestamp,
        };
        return (0, _.pp)(n, em);
    }
}
let eg = {
        [I.rbe.DM]: ep.fromServer,
        [I.rbe.GROUP_DM]: ep.fromServer,
        [I.rbe.GUILD_TEXT]: e_.fromServer,
        [I.rbe.GUILD_VOICE]: eu.fromServer,
        [I.rbe.GUILD_STAGE_VOICE]: eu.fromServer,
        [I.rbe.GUILD_CATEGORY]: e_.fromServer,
        [I.rbe.GUILD_ANNOUNCEMENT]: e_.fromServer,
        [I.rbe.GUILD_STORE]: e_.fromServer,
        [I.rbe.ANNOUNCEMENT_THREAD]: em.fromServer,
        [I.rbe.PUBLIC_THREAD]: em.fromServer,
        [I.rbe.PRIVATE_THREAD]: em.fromServer,
        [I.rbe.MEDIA_THREAD]: em.fromServer,
        [I.rbe.GUILD_DIRECTORY]: e_.fromServer,
        [I.rbe.GUILD_FORUM]: eA.fromServer,
        [I.rbe.GUILD_MEDIA]: eA.fromServer,
        [I.rbe.GUILD_SPACE]: e_.fromServer,
        [I.rbe.GUILD_APP]: e_.fromServer,
    },
    eT = {
        [I.rbe.DM]: class extends ep {},
        [I.rbe.GROUP_DM]: class extends ep {},
        [I.rbe.GUILD_TEXT]: eE,
        [I.rbe.GUILD_VOICE]: class extends eu {},
        [I.rbe.GUILD_STAGE_VOICE]: class extends eu {},
        [I.rbe.GUILD_CATEGORY]: class extends e_ {},
        [I.rbe.GUILD_ANNOUNCEMENT]: class extends e_ {},
        [I.rbe.GUILD_STORE]: class extends e_ {},
        [I.rbe.ANNOUNCEMENT_THREAD]: em,
        [I.rbe.PUBLIC_THREAD]: em,
        [I.rbe.PRIVATE_THREAD]: em,
        [I.rbe.MEDIA_THREAD]: em,
        [I.rbe.GUILD_DIRECTORY]: class extends e_ {},
        [I.rbe.GUILD_FORUM]: eA,
        [I.rbe.GUILD_MEDIA]: eA,
        [I.rbe.GUILD_SPACE]: class extends e_ {},
        [I.rbe.GUILD_APP]: class extends e_ {},
    };
function eS(e) {
    let t = eT[e.type ?? I.rbe.GUILD_TEXT] ?? ec;
    return (0, _.pp)(e, t);
}
function eN(e) {
    return new (eT[e.type ?? I.rbe.GUILD_TEXT] ?? ec)(el(e));
}
n.d(
    t,
    {},
    {
        A_: g,
        B4: z,
        Do: L,
        Gw: D,
        IY: W,
        JT: V,
        LE: Y,
        Le: G,
        Lt: em,
        MK: v,
        OU: O,
        OY: function (e) {
            return eN(e);
        },
        QE: function (e) {
            var t;
            return R(e) || ((t = e), x.has(t));
        },
        TA: ea,
        UE: function (e, t) {
            return (eg[e.type ?? I.rbe.GUILD_TEXT] ?? ec.fromServer)(e, t);
        },
        XD: N,
        YB: ed,
        ZV: function (e) {
            return (0, h.Eo)(e, q);
        },
        Z_: function (e) {
            return B.has(e);
        },
        ay: R,
        bk: H,
        cq: ep,
        createChannelRecord: eN,
        fT: F,
        gV: U,
        ig: function (e) {
            return w.has(e);
        },
        jb: ec,
        k: $,
        k3: P,
        ke: function (e) {
            return T.has(e);
        },
        nA: eE,
        nO: function (e) {
            return !Q.has(e);
        },
        nb: K,
        oH: S,
        oI: function (e) {
            return (0, h.Eo)(e, Z);
        },
        oh: eS,
        p6: X,
        pQ: function (e) {
            return P.has(e);
        },
        pd: function (e) {
            return R(e) ? er : I.hVb.VIEW_CHANNEL;
        },
        tr: function (e) {
            return m.has(e);
        },
        uL: C,
        wE: k,
        xR: j,
        zy: function (e) {
            return C.has(e);
        },
    },
);
