"use strict";
n.d(t, {
    A_: () => m,
    B4: () => et,
    Do: () => D,
    Gw: () => b,
    IY: () => Z,
    JT: () => K,
    LE: () => q,
    Le: () => V,
    Lt: () => eN,
    MK: () => P,
    OU: () => R,
    OY: () => eR,
    QE: () => y,
    TA: () => eo,
    UE: () => eO,
    YB: () => eE,
    ZE: () => X,
    Z_: () => Y,
    ay: () => L,
    bk: () => $,
    cq: () => eS,
    createChannelRecord: () => eD,
    fT: () => j,
    gV: () => x,
    ig: () => F,
    jb: () => eA,
    k: () => J,
    k3: () => U,
    ke: () => S,
    nA: () => ef,
    nb: () => Q,
    oH: () => N,
    oh: () => ey,
    p6: () => ee,
    pQ: () => w,
    pd: () => ed,
    tr: () => T,
    uL: () => C,
    wE: () => H,
    xR: () => z,
    zy: () => O,
}),
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
    h = n(935208),
    I = n(652215),
    f = n(746080);
let p = new Set([
    I.rbe.GUILD_TEXT,
    I.rbe.GUILD_ANNOUNCEMENT,
    I.rbe.GUILD_STORE,
    I.rbe.ANNOUNCEMENT_THREAD,
    I.rbe.PUBLIC_THREAD,
    I.rbe.PRIVATE_THREAD,
    I.rbe.GUILD_DIRECTORY,
    I.rbe.GUILD_FORUM,
    I.rbe.GUILD_MEDIA,
    I.rbe.DM,
    I.rbe.GROUP_DM,
]);
function T(e) {
    return p.has(e);
}
let m = new Set([
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
    ]),
    g = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
    ]);
function S(e) {
    return g.has(e);
}
let N = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
    ]),
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
    ]);
function O(e) {
    return C.has(e);
}
I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA;
let R = new Set([I.rbe.GUILD_VOICE, I.rbe.GUILD_STAGE_VOICE]);
function L(e) {
    return "SELECTABLE" !== e && R.has(e);
}
function y(e) {
    var t;
    return L(e) || ((t = e), B.has(t));
}
let D = new Set([I.rbe.GUILD_STAGE_VOICE]),
    v = new Set([I.rbe.DM, I.rbe.GROUP_DM]);
function b(e) {
    return v.has(e);
}
let M = new Set([I.rbe.GROUP_DM]);
function P(e) {
    return M.has(e);
}
let U = new Set([
    I.rbe.DM,
    I.rbe.GROUP_DM,
    I.rbe.GUILD_TEXT,
    I.rbe.GUILD_ANNOUNCEMENT,
    I.rbe.ANNOUNCEMENT_THREAD,
    I.rbe.PUBLIC_THREAD,
    I.rbe.PRIVATE_THREAD,
]);
function w(e) {
    return U.has(e);
}
let G = new Set([
    I.rbe.DM,
    I.rbe.GROUP_DM,
    I.rbe.GUILD_VOICE,
    I.rbe.GUILD_STAGE_VOICE,
    I.rbe.PUBLIC_THREAD,
    I.rbe.PRIVATE_THREAD,
]);
function x(e) {
    return G.has(e);
}
let k = new Set([
    I.rbe.GUILD_TEXT,
    I.rbe.GUILD_ANNOUNCEMENT,
    I.rbe.ANNOUNCEMENT_THREAD,
    I.rbe.PUBLIC_THREAD,
    I.rbe.PRIVATE_THREAD,
    I.rbe.GUILD_DIRECTORY,
    I.rbe.GUILD_FORUM,
    I.rbe.GUILD_MEDIA,
    I.rbe.DM,
    I.rbe.GROUP_DM,
]);
function F(e) {
    return k.has(e);
}
let V = new Set([I.rbe.ANNOUNCEMENT_THREAD, I.rbe.PUBLIC_THREAD, I.rbe.PRIVATE_THREAD, I.rbe.MEDIA_THREAD]),
    B = new Set([I.rbe.PUBLIC_THREAD, I.rbe.PRIVATE_THREAD]),
    H = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA]);
function j(e) {
    return V.has(e);
}
let W = new Set([
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
]);
function Y(e) {
    return W.has(e);
}
let K = new Set([
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
    ]),
    $ = new Set([
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_CATEGORY,
        I.rbe.GUILD_STORE,
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
        I.rbe.GUILD_DIRECTORY,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
    ]),
    z = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT]),
    Z = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA]),
    q = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
    ]),
    X = new Set([
        I.rbe.GUILD_ANNOUNCEMENT,
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.ANNOUNCEMENT_THREAD,
    ]),
    Q = new Set([
        I.rbe.GUILD_TEXT,
        I.rbe.GUILD_FORUM,
        I.rbe.GUILD_MEDIA,
        I.rbe.ANNOUNCEMENT_THREAD,
        I.rbe.PUBLIC_THREAD,
        I.rbe.PRIVATE_THREAD,
        I.rbe.GUILD_VOICE,
        I.rbe.GUILD_STAGE_VOICE,
    ]),
    J = new Set([I.rbe.PUBLIC_THREAD, I.rbe.PRIVATE_THREAD, I.rbe.GUILD_VOICE, I.rbe.GUILD_STAGE_VOICE]),
    ee = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_FORUM, I.rbe.GUILD_MEDIA]),
    et = new Set([I.rbe.GUILD_TEXT, I.rbe.GUILD_CATEGORY, I.rbe.GUILD_FORUM, I.rbe.GUILD_ANNOUNCEMENT]);
function en(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: c.iu(e.allow), deny: c.iu(e.deny) };
        }),
        t
    );
}
function ei(e) {
    return null == e ? {} : r().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function er(e) {
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
function ea(e) {
    return null != e ? { id: e.id, name: e.name } : void 0;
}
I.rbe.GUILD_TEXT, I.rbe.GUILD_ANNOUNCEMENT, I.rbe.GUILD_FORUM, I.rbe.GUILD_VOICE;
let es = c.kg(I.xBc.CONNECT, I.xBc.VIEW_CHANNEL),
    el = I.hVb.CONNECT | I.hVb.VIEW_CHANNEL;
function eo(e) {
    return L(e) ? es : I.xBc.VIEW_CHANNEL;
}
function ed(e) {
    return L(e) ? el : I.hVb.VIEW_CHANNEL;
}
class ec {
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
        (this.id = e.id),
            (this.type = e.type ?? I.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null);
    }
}
function eu(e) {
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
let e_ = Object.freeze({});
class eE extends ec {
    get permissionOverwrites() {
        return this.permissionOverwrites_ ?? e_;
    }
    get topic() {
        return this.topic_ ?? "";
    }
    get position() {
        return this.position_ ?? 0;
    }
    get bitrate() {
        return this.bitrate_ ?? I.gp3;
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
        return this.merge(eu({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = eu(e);
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
        return null != this.application_id;
    }
    isPrivate() {
        return b(this.type);
    }
    isGroupDM() {
        return this.type === I.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return P(this.type);
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
        return this.hasFlag(f.lx.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        return V.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
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
        return x(this.type);
    }
    isGuildVocal() {
        return L(this.type);
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
        return j(this.type);
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
        return this.hasFlag(f.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    isObfuscated() {
        return this.hasFlag(f.lx.OBFUSCATED);
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
        return this.hasFlag(f.lx.IS_MODERATOR_REPORT_CHANNEL);
    }
    isSpoilerChannel() {
        return this.hasFlag(f.lx.IS_SPOILER_CHANNEL);
    }
    isGameInvitesChannel() {
        return this.hasFlag(f.lx.IS_GAME_INVITES_CHANNEL);
    }
    get accessPermissions() {
        return eo(this.type);
    }
    hasFlag(e) {
        return (0, u.Lt)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eA extends eE {
    constructor(e) {
        super(e),
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
            (this.voiceHangout = e.voiceHangout);
    }
    static fromServer(e, t) {
        let n = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? er(e.available_tags) : void 0,
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
            iconEmoji: ea(e.icon_emoji),
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
            nicks: ei(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: en(e.permission_overwrites),
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
        return (0, _.pp)(n, eA);
    }
}
class eh extends eE {
    constructor(e) {
        super(e),
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
            (this.voiceHangout = e.voiceHangout);
    }
    static fromServer(e, t) {
        return ey({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: ea(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: en(e.permission_overwrites),
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
class eI extends eE {
    constructor(e) {
        super(e),
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
            (this.hdStreamingUntil = e.hdStreamingUntil);
    }
    static fromServer(e, t) {
        return ey({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: ea(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: en(e.permission_overwrites),
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
class ef extends eI {}
class ep extends eE {
    constructor(e) {
        super(e),
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
            (this.version = e.version);
    }
    static fromServer(e, t) {
        let n = {
            availableTags: null != e.available_tags ? er(e.available_tags) : [],
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
            iconEmoji: ea(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: en(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : I.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, _.pp)(n, ep);
    }
}
class eT {
    cache;
    constructor(e = 100) {
        this.cache = new (s())(e);
    }
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
}
let em = new eT(),
    eg = new eT();
class eS extends eE {
    static sortRecipients(e, t) {
        let n = em.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (eg.getOrCompute(e.id) ^ n) - (eg.getOrCompute(t.id) ^ n));
    }
    constructor(e) {
        super(e),
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
            (this.rawRecipients = eS.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(e.recipients ?? [])].sort(h.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = e.safetyWarnings ?? []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
    static fromServer(e) {
        let t = eS.sortRecipients(e.recipients, e.id),
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
                nicks: ei(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: t,
                recipients: t.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : I.rbe.DM,
            };
        return (0, _.pp)(n, eS);
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
                    .sort(h.default.compare),
            );
            return null == t ? n : n.set("nicks", { ...n.nicks, [e]: t });
        }
    }
    removeRecipient(e) {
        return this.set("recipients", r().without(this.recipients, e));
    }
}
class eN extends eE {
    constructor(e) {
        super(e),
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
            (this.lastNonMessageActivityTimestamp = e.lastNonMessageActivityTimestamp);
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
        return (0, _.pp)(n, eN);
    }
}
let eC = {
    [I.rbe.DM]: eS.fromServer,
    [I.rbe.GROUP_DM]: eS.fromServer,
    [I.rbe.GUILD_TEXT]: eI.fromServer,
    [I.rbe.GUILD_VOICE]: eh.fromServer,
    [I.rbe.GUILD_STAGE_VOICE]: eh.fromServer,
    [I.rbe.GUILD_CATEGORY]: eI.fromServer,
    [I.rbe.GUILD_ANNOUNCEMENT]: eI.fromServer,
    [I.rbe.GUILD_STORE]: eI.fromServer,
    [I.rbe.ANNOUNCEMENT_THREAD]: eN.fromServer,
    [I.rbe.PUBLIC_THREAD]: eN.fromServer,
    [I.rbe.PRIVATE_THREAD]: eN.fromServer,
    [I.rbe.MEDIA_THREAD]: eN.fromServer,
    [I.rbe.GUILD_DIRECTORY]: eI.fromServer,
    [I.rbe.GUILD_FORUM]: ep.fromServer,
    [I.rbe.GUILD_MEDIA]: ep.fromServer,
    [I.rbe.GUILD_SPACE]: eI.fromServer,
};
function eO(e, t) {
    return (eC[e.type ?? I.rbe.GUILD_TEXT] ?? eA.fromServer)(e, t);
}
function eR(e) {
    return eD(e);
}
let eL = {
    [I.rbe.DM]: class extends eS {},
    [I.rbe.GROUP_DM]: class extends eS {},
    [I.rbe.GUILD_TEXT]: ef,
    [I.rbe.GUILD_VOICE]: class extends eh {},
    [I.rbe.GUILD_STAGE_VOICE]: class extends eh {},
    [I.rbe.GUILD_CATEGORY]: class extends eI {},
    [I.rbe.GUILD_ANNOUNCEMENT]: class extends eI {},
    [I.rbe.GUILD_STORE]: class extends eI {},
    [I.rbe.ANNOUNCEMENT_THREAD]: eN,
    [I.rbe.PUBLIC_THREAD]: eN,
    [I.rbe.PRIVATE_THREAD]: eN,
    [I.rbe.MEDIA_THREAD]: eN,
    [I.rbe.GUILD_DIRECTORY]: class extends eI {},
    [I.rbe.GUILD_FORUM]: ep,
    [I.rbe.GUILD_MEDIA]: ep,
    [I.rbe.GUILD_SPACE]: class extends eI {},
};
function ey(e) {
    let t = eL[e.type ?? I.rbe.GUILD_TEXT] ?? eA;
    return (0, _.pp)(e, t);
}
function eD(e) {
    return new (eL[e.type ?? I.rbe.GUILD_TEXT] ?? eA)(eu(e));
}
