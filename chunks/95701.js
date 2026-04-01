"use strict";
n.d(t, {
    A_: () => I,
    B4: () => en,
    Do: () => b,
    Gw: () => L,
    IY: () => Z,
    JT: () => $,
    LE: () => X,
    Le: () => V,
    Lt: () => ew,
    MK: () => M,
    OU: () => C,
    OY: () => eP,
    QE: () => O,
    TA: () => eu,
    UE: () => ex,
    YB: () => ep,
    ZE: () => Q,
    Z_: () => K,
    ay: () => R,
    bk: () => z,
    cq: () => eb,
    createChannelRecord: () => eG,
    fT: () => j,
    gV: () => U,
    ig: () => F,
    jb: () => eh,
    k: () => ee,
    k3: () => x,
    ke: () => S,
    nA: () => ey,
    nb: () => J,
    oH: () => y,
    oh: () => eU,
    p6: () => et,
    pQ: () => P,
    pd: () => ec,
    tr: () => A,
    uL: () => v,
    wE: () => H,
    xR: () => q,
    zy: () => N,
}),
    n(938796);
var r = n(735438),
    i = n.n(r),
    s = n(635377),
    a = n.n(s),
    o = n(371444),
    l = n(392421),
    u = n(602137),
    c = n(136722),
    d = n(665260),
    _ = n(933681),
    f = n(233993),
    p = n(446600),
    h = n(661191),
    m = n(652215),
    E = n(746080);
let g = new Set([
    m.rbe.GUILD_TEXT,
    m.rbe.GUILD_ANNOUNCEMENT,
    m.rbe.GUILD_STORE,
    m.rbe.ANNOUNCEMENT_THREAD,
    m.rbe.PUBLIC_THREAD,
    m.rbe.PRIVATE_THREAD,
    m.rbe.GUILD_DIRECTORY,
    m.rbe.GUILD_FORUM,
    m.rbe.GUILD_MEDIA,
    m.rbe.DM,
    m.rbe.GROUP_DM,
]);
function A(e) {
    return g.has(e);
}
let I = new Set([
        m.rbe.DM,
        m.rbe.GROUP_DM,
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_VOICE,
        m.rbe.GUILD_STAGE_VOICE,
        m.rbe.GUILD_CATEGORY,
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.GUILD_STORE,
        m.rbe.ANNOUNCEMENT_THREAD,
        m.rbe.PUBLIC_THREAD,
        m.rbe.PRIVATE_THREAD,
        m.rbe.GUILD_DIRECTORY,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
    ]),
    T = new Set([
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.ANNOUNCEMENT_THREAD,
        m.rbe.PUBLIC_THREAD,
        m.rbe.PRIVATE_THREAD,
    ]);
function S(e) {
    return T.has(e);
}
let y = new Set([
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
        m.rbe.GUILD_VOICE,
        m.rbe.GUILD_STAGE_VOICE,
    ]),
    v = new Set([
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_VOICE,
        m.rbe.GUILD_STAGE_VOICE,
        m.rbe.GUILD_CATEGORY,
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.GUILD_STORE,
        m.rbe.ANNOUNCEMENT_THREAD,
        m.rbe.PUBLIC_THREAD,
        m.rbe.PRIVATE_THREAD,
        m.rbe.GUILD_DIRECTORY,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
    ]);
function N(e) {
    return v.has(e);
}
m.rbe.GUILD_TEXT, m.rbe.GUILD_ANNOUNCEMENT, m.rbe.GUILD_FORUM, m.rbe.GUILD_MEDIA;
let C = new Set([m.rbe.GUILD_VOICE, m.rbe.GUILD_STAGE_VOICE]);
function R(e) {
    return "SELECTABLE" !== e && C.has(e);
}
function O(e) {
    return R(e) || Y(e);
}
let b = new Set([m.rbe.GUILD_STAGE_VOICE]),
    D = new Set([m.rbe.DM, m.rbe.GROUP_DM]);
function L(e) {
    return D.has(e);
}
let w = new Set([m.rbe.GROUP_DM]);
function M(e) {
    return w.has(e);
}
let x = new Set([
    m.rbe.DM,
    m.rbe.GROUP_DM,
    m.rbe.GUILD_TEXT,
    m.rbe.GUILD_ANNOUNCEMENT,
    m.rbe.ANNOUNCEMENT_THREAD,
    m.rbe.PUBLIC_THREAD,
    m.rbe.PRIVATE_THREAD,
]);
function P(e) {
    return x.has(e);
}
let k = new Set([
    m.rbe.DM,
    m.rbe.GROUP_DM,
    m.rbe.GUILD_VOICE,
    m.rbe.GUILD_STAGE_VOICE,
    m.rbe.PUBLIC_THREAD,
    m.rbe.PRIVATE_THREAD,
]);
function U(e) {
    return k.has(e);
}
let G = new Set([
    m.rbe.GUILD_TEXT,
    m.rbe.GUILD_ANNOUNCEMENT,
    m.rbe.ANNOUNCEMENT_THREAD,
    m.rbe.PUBLIC_THREAD,
    m.rbe.PRIVATE_THREAD,
    m.rbe.GUILD_DIRECTORY,
    m.rbe.GUILD_FORUM,
    m.rbe.GUILD_MEDIA,
    m.rbe.DM,
    m.rbe.GROUP_DM,
]);
function F(e) {
    return G.has(e);
}
let V = new Set([m.rbe.ANNOUNCEMENT_THREAD, m.rbe.PUBLIC_THREAD, m.rbe.PRIVATE_THREAD]),
    B = new Set([m.rbe.PUBLIC_THREAD, m.rbe.PRIVATE_THREAD]),
    H = new Set([m.rbe.GUILD_TEXT, m.rbe.GUILD_ANNOUNCEMENT, m.rbe.GUILD_FORUM, m.rbe.GUILD_MEDIA]);
function j(e) {
    return V.has(e);
}
function Y(e) {
    return B.has(e);
}
let W = new Set([
    m.rbe.DM,
    m.rbe.GROUP_DM,
    m.rbe.GUILD_TEXT,
    m.rbe.GUILD_ANNOUNCEMENT,
    m.rbe.ANNOUNCEMENT_THREAD,
    m.rbe.PUBLIC_THREAD,
    m.rbe.PRIVATE_THREAD,
    m.rbe.GUILD_FORUM,
    m.rbe.GUILD_MEDIA,
    m.rbe.GUILD_DIRECTORY,
    m.rbe.GUILD_VOICE,
    m.rbe.GUILD_STAGE_VOICE,
]);
function K(e) {
    return W.has(e);
}
let $ = new Set([
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.GUILD_STORE,
        m.rbe.GUILD_VOICE,
        m.rbe.GUILD_STAGE_VOICE,
        m.rbe.ANNOUNCEMENT_THREAD,
        m.rbe.PUBLIC_THREAD,
        m.rbe.PRIVATE_THREAD,
        m.rbe.GUILD_DIRECTORY,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
    ]),
    z = new Set([
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.GUILD_CATEGORY,
        m.rbe.GUILD_STORE,
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_VOICE,
        m.rbe.GUILD_STAGE_VOICE,
        m.rbe.GUILD_DIRECTORY,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
    ]),
    q = new Set([m.rbe.GUILD_TEXT, m.rbe.GUILD_ANNOUNCEMENT]),
    Z = new Set([m.rbe.GUILD_TEXT, m.rbe.GUILD_ANNOUNCEMENT, m.rbe.GUILD_FORUM, m.rbe.GUILD_MEDIA]),
    X = new Set([
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
        m.rbe.GUILD_VOICE,
        m.rbe.GUILD_STAGE_VOICE,
    ]),
    Q = new Set([
        m.rbe.GUILD_ANNOUNCEMENT,
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
        m.rbe.ANNOUNCEMENT_THREAD,
    ]),
    J = new Set([
        m.rbe.GUILD_TEXT,
        m.rbe.GUILD_FORUM,
        m.rbe.GUILD_MEDIA,
        m.rbe.ANNOUNCEMENT_THREAD,
        m.rbe.PUBLIC_THREAD,
        m.rbe.PRIVATE_THREAD,
        m.rbe.GUILD_VOICE,
        m.rbe.GUILD_STAGE_VOICE,
    ]),
    ee = new Set([m.rbe.PUBLIC_THREAD, m.rbe.PRIVATE_THREAD, m.rbe.GUILD_VOICE, m.rbe.GUILD_STAGE_VOICE]),
    et = new Set([m.rbe.GUILD_TEXT, m.rbe.GUILD_FORUM, m.rbe.GUILD_MEDIA]),
    en = new Set([m.rbe.GUILD_TEXT, m.rbe.GUILD_CATEGORY, m.rbe.GUILD_FORUM, m.rbe.GUILD_ANNOUNCEMENT]);
function er(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: c.iu(e.allow), deny: c.iu(e.deny) };
        }),
        t
    );
}
function ei(e) {
    return null == e ? {} : i().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function es(e) {
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
m.rbe.GUILD_TEXT, m.rbe.GUILD_ANNOUNCEMENT, m.rbe.GUILD_FORUM, m.rbe.GUILD_VOICE;
let eo = c.kg(m.xBc.CONNECT, m.xBc.VIEW_CHANNEL),
    el = m.hVb.CONNECT | m.hVb.VIEW_CHANNEL;
function eu(e) {
    return R(e) ? eo : m.xBc.VIEW_CHANNEL;
}
function ec(e) {
    return R(e) ? el : m.hVb.VIEW_CHANNEL;
}
class ed {
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
    constructor(e) {
        (this.id = e.id),
            (this.type = e.type ?? m.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null);
    }
}
function e_(e) {
    let t = e;
    return (
        "topic" in e && ((t.topic_ = e.topic), delete e.topic),
        "position" in e && ((t.position_ = e.position), delete e.position),
        "permissionOverwrites" in e &&
            ((t.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites),
        "bitrate" in e && ((t.bitrate_ = e.bitrate), delete e.bitrate),
        "userLimit" in e && ((t.userLimit_ = e.userLimit), delete e.userLimit),
        "nsfw" in e && ((t.nsfw_ = e.nsfw), delete e.nsfw),
        "rateLimitPerUser" in e && ((t.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser),
        "flags" in e && ((t.flags_ = e.flags), delete e.flags),
        t
    );
}
let ef = Object.freeze({});
class ep extends ed {
    get permissionOverwrites() {
        return this.permissionOverwrites_ ?? ef;
    }
    get topic() {
        return this.topic_ ?? "";
    }
    get position() {
        return this.position_ ?? 0;
    }
    get bitrate() {
        return this.bitrate_ ?? m.gp3;
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
        return this.merge(e_({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = e_(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && p.A.isPublic(this.id)) return f.Uu;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return L(this.type);
    }
    isGroupDM() {
        return this.type === m.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return M(this.type);
    }
    isDM() {
        return this.type === m.rbe.DM;
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
        return this.hasFlag(E.lx.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        return V.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
    }
    isForumPost() {
        return (
            this.type === m.rbe.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            m.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isRingable() {
        return m.kvI.CALLABLE.has(this.type) || this.type === m.rbe.GUILD_VOICE;
    }
    isCategory() {
        return this.type === m.rbe.GUILD_CATEGORY;
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
        return this.type === m.rbe.GUILD_VOICE;
    }
    isGuildVoiceOrThread() {
        return this.isGuildVoice() || this.isVocalThread();
    }
    isGuildStageVoice() {
        return this.type === m.rbe.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return j(this.type);
    }
    isAnnouncementThread() {
        return this.type === m.rbe.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === m.rbe.PUBLIC_THREAD || this.type === m.rbe.PRIVATE_THREAD;
    }
    isActiveThread() {
        return this.isThread() && this.threadMetadata?.archived !== !0;
    }
    isDirectory() {
        return this.type === m.rbe.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === m.rbe.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === m.rbe.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === m.rbe.PUBLIC_THREAD && this.parentChannelThreadType === m.rbe.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(E.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    isObfuscated() {
        return this.hasFlag(E.lx.OBFUSCATED);
    }
    getGuildId() {
        return this.guild_id;
    }
    getApplicationId() {
        return this.application_id;
    }
    getDefaultSortOrder() {
        return this.defaultSortOrder ?? u.T.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel()
            ? o.C.GRID
            : null == this.defaultForumLayout || this.defaultForumLayout === o.C.DEFAULT
              ? o.C.LIST
              : this.defaultForumLayout;
    }
    getDefaultTagSetting() {
        return this.defaultTagSetting ?? l.n.MATCH_SOME;
    }
    isModeratorReportChannel() {
        return this.hasFlag(E.lx.IS_MODERATOR_REPORT_CHANNEL);
    }
    isSpoilerChannel() {
        return this.hasFlag(E.lx.IS_SPOILER_CHANNEL);
    }
    get accessPermissions() {
        return eu(this.type);
    }
    hasFlag(e) {
        return (0, d.Lt)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eh extends ep {
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
            (this.icon = e.icon),
            (this.iconEmoji = e.iconEmoji),
            (this.isMessageRequest = e.isMessageRequest),
            (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp),
            (this.isSpam = e.isSpam),
            (this.lastMessageId = e.lastMessageId),
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
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
    static fromServer(e, t) {
        let n = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? es(e.available_tags) : void 0,
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
            guild_id: t ?? e.guild_id ?? null,
            icon: e.icon,
            iconEmoji: ea(e.icon_emoji),
            id: e.id,
            isMessageRequest: e.is_message_request,
            isMessageRequestTimestamp: e.is_message_request_timestamp,
            isSpam: e.is_spam,
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
            memberListId: e.member_list_id,
            messageCount: e.message_count,
            name: e.name ?? "",
            nicks: ei(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: er(e.permission_overwrites),
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
            type: null != e.type ? e.type : m.rbe.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
        };
        return (0, _.pp)(n, eh);
    }
}
class em extends ep {
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
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
    static fromServer(e, t) {
        return eU({
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
            permissionOverwrites_: er(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : m.rbe.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
        });
    }
}
class eE extends ep {
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
        return eU({
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
            permissionOverwrites_: er(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : m.rbe.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version,
        });
    }
}
class eg extends eE {}
class eA extends eE {}
class eI extends eE {}
class eT extends em {}
class eS extends eE {}
class ey extends eE {}
class ev extends em {}
class eN extends ep {
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
            availableTags: null != e.available_tags ? es(e.available_tags) : [],
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
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: ea(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: er(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : m.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, _.pp)(n, eN);
    }
}
class eC {
    cache;
    constructor(e = 100) {
        this.cache = new (a())(e);
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
let eR = new eC(),
    eO = new eC();
class eb extends ep {
    static sortRecipients(e, t) {
        let n = eR.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (eO.getOrCompute(e.id) ^ n) - (eO.getOrCompute(t.id) ^ n));
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
            (this.rawRecipients = eb.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(e.recipients ?? [])].sort(h.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = e.safetyWarnings ?? []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
    static fromServer(e) {
        let t = eb.sortRecipients(e.recipients, e.id),
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
                type: null != e.type ? e.type : m.rbe.DM,
            };
        return (0, _.pp)(n, eb);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === m.rbe.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, t, n) {
        if (e === n) return this;
        {
            let n = this.set(
                "recipients",
                i()
                    .uniq([...(this.recipients ?? []), e])
                    .sort(h.default.compare),
            );
            return null == t ? n : n.set("nicks", { ...n.nicks, [e]: t });
        }
    }
    removeRecipient(e) {
        return this.set("recipients", i().without(this.recipients, e));
    }
}
class eD extends eb {}
class eL extends eb {}
class ew extends ep {
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
            (this.videoQualityMode = e.videoQualityMode);
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
            type: null != e.type ? e.type : m.rbe.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
        };
        return (0, _.pp)(n, ew);
    }
}
let eM = {
    [m.rbe.DM]: eb.fromServer,
    [m.rbe.GROUP_DM]: eb.fromServer,
    [m.rbe.GUILD_TEXT]: eE.fromServer,
    [m.rbe.GUILD_VOICE]: em.fromServer,
    [m.rbe.GUILD_STAGE_VOICE]: em.fromServer,
    [m.rbe.GUILD_CATEGORY]: eE.fromServer,
    [m.rbe.GUILD_ANNOUNCEMENT]: eE.fromServer,
    [m.rbe.GUILD_STORE]: eE.fromServer,
    [m.rbe.ANNOUNCEMENT_THREAD]: ew.fromServer,
    [m.rbe.PUBLIC_THREAD]: ew.fromServer,
    [m.rbe.PRIVATE_THREAD]: ew.fromServer,
    [m.rbe.GUILD_DIRECTORY]: eE.fromServer,
    [m.rbe.GUILD_FORUM]: eN.fromServer,
    [m.rbe.GUILD_MEDIA]: eN.fromServer,
};
function ex(e, t) {
    return (eM[e.type ?? m.rbe.GUILD_TEXT] ?? eh.fromServer)(e, t);
}
function eP(e) {
    return eG(e);
}
let ek = {
    [m.rbe.DM]: eD,
    [m.rbe.GROUP_DM]: eL,
    [m.rbe.GUILD_TEXT]: ey,
    [m.rbe.GUILD_VOICE]: ev,
    [m.rbe.GUILD_STAGE_VOICE]: eT,
    [m.rbe.GUILD_CATEGORY]: eA,
    [m.rbe.GUILD_ANNOUNCEMENT]: eg,
    [m.rbe.GUILD_STORE]: eS,
    [m.rbe.ANNOUNCEMENT_THREAD]: ew,
    [m.rbe.PUBLIC_THREAD]: ew,
    [m.rbe.PRIVATE_THREAD]: ew,
    [m.rbe.GUILD_DIRECTORY]: eI,
    [m.rbe.GUILD_FORUM]: eN,
    [m.rbe.GUILD_MEDIA]: eN,
};
function eU(e) {
    let t = ek[e.type ?? m.rbe.GUILD_TEXT] ?? eh;
    return (0, _.pp)(e, t);
}
function eG(e) {
    return new (ek[e.type ?? m.rbe.GUILD_TEXT] ?? eh)(e_(e));
}
