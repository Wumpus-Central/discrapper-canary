"use strict";
n.d(t, {
    A_: () => T,
    B4: () => er,
    Do: () => D,
    Gw: () => w,
    IY: () => Z,
    JT: () => z,
    LE: () => Q,
    Le: () => B,
    Lt: () => eP,
    MK: () => P,
    OU: () => N,
    OY: () => eU,
    QE: () => O,
    TA: () => ed,
    UE: () => ek,
    YB: () => em,
    ZE: () => J,
    Z_: () => $,
    ay: () => R,
    bk: () => q,
    cq: () => eL,
    createChannelRecord: () => eV,
    fT: () => Y,
    gV: () => G,
    ig: () => V,
    jb: () => eg,
    k: () => et,
    k3: () => M,
    ke: () => S,
    kr: () => ei,
    nb: () => ee,
    oH: () => v,
    oh: () => eF,
    p6: () => en,
    pQ: () => k,
    pd: () => e_,
    tr: () => I,
    uL: () => C,
    wE: () => H,
    xR: () => X,
    zy: () => b,
}),
    n(938796);
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a),
    o = n(371444),
    l = n(392421),
    u = n(602137),
    c = n(136722),
    d = n(665260),
    _ = n(933681),
    f = n(233993),
    h = n(446600),
    p = n(661191),
    g = n(652215),
    E = n(746080);
let A = new Set([
    g.rbe.GUILD_TEXT,
    g.rbe.GUILD_ANNOUNCEMENT,
    g.rbe.GUILD_STORE,
    g.rbe.ANNOUNCEMENT_THREAD,
    g.rbe.PUBLIC_THREAD,
    g.rbe.PRIVATE_THREAD,
    g.rbe.GUILD_DIRECTORY,
    g.rbe.GUILD_FORUM,
    g.rbe.GUILD_MEDIA,
    g.rbe.DM,
    g.rbe.GROUP_DM,
]);
function I(e) {
    return A.has(e);
}
let T = new Set([
        g.rbe.DM,
        g.rbe.GROUP_DM,
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_VOICE,
        g.rbe.GUILD_STAGE_VOICE,
        g.rbe.GUILD_CATEGORY,
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.GUILD_STORE,
        g.rbe.ANNOUNCEMENT_THREAD,
        g.rbe.PUBLIC_THREAD,
        g.rbe.PRIVATE_THREAD,
        g.rbe.GUILD_DIRECTORY,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
    ]),
    y = new Set([
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.ANNOUNCEMENT_THREAD,
        g.rbe.PUBLIC_THREAD,
        g.rbe.PRIVATE_THREAD,
    ]);
function S(e) {
    return y.has(e);
}
let v = new Set([
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
        g.rbe.GUILD_VOICE,
        g.rbe.GUILD_STAGE_VOICE,
    ]),
    C = new Set([
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_VOICE,
        g.rbe.GUILD_STAGE_VOICE,
        g.rbe.GUILD_CATEGORY,
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.GUILD_STORE,
        g.rbe.ANNOUNCEMENT_THREAD,
        g.rbe.PUBLIC_THREAD,
        g.rbe.PRIVATE_THREAD,
        g.rbe.GUILD_DIRECTORY,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
    ]);
function b(e) {
    return C.has(e);
}
g.rbe.GUILD_TEXT, g.rbe.GUILD_ANNOUNCEMENT, g.rbe.GUILD_FORUM, g.rbe.GUILD_MEDIA;
let N = new Set([g.rbe.GUILD_VOICE, g.rbe.GUILD_STAGE_VOICE]);
function R(e) {
    return "SELECTABLE" !== e && N.has(e);
}
function O(e) {
    return R(e) || W(e);
}
let D = new Set([g.rbe.GUILD_STAGE_VOICE]),
    L = new Set([g.rbe.DM, g.rbe.GROUP_DM]);
function w(e) {
    return L.has(e);
}
let x = new Set([g.rbe.GROUP_DM]);
function P(e) {
    return x.has(e);
}
let M = new Set([
    g.rbe.DM,
    g.rbe.GROUP_DM,
    g.rbe.GUILD_TEXT,
    g.rbe.GUILD_ANNOUNCEMENT,
    g.rbe.ANNOUNCEMENT_THREAD,
    g.rbe.PUBLIC_THREAD,
    g.rbe.PRIVATE_THREAD,
]);
function k(e) {
    return M.has(e);
}
let U = new Set([
    g.rbe.DM,
    g.rbe.GROUP_DM,
    g.rbe.GUILD_VOICE,
    g.rbe.GUILD_STAGE_VOICE,
    g.rbe.PUBLIC_THREAD,
    g.rbe.PRIVATE_THREAD,
]);
function G(e) {
    return U.has(e);
}
let F = new Set([
    g.rbe.GUILD_TEXT,
    g.rbe.GUILD_ANNOUNCEMENT,
    g.rbe.ANNOUNCEMENT_THREAD,
    g.rbe.PUBLIC_THREAD,
    g.rbe.PRIVATE_THREAD,
    g.rbe.GUILD_DIRECTORY,
    g.rbe.GUILD_FORUM,
    g.rbe.GUILD_MEDIA,
    g.rbe.DM,
    g.rbe.GROUP_DM,
]);
function V(e) {
    return F.has(e);
}
let B = new Set([g.rbe.ANNOUNCEMENT_THREAD, g.rbe.PUBLIC_THREAD, g.rbe.PRIVATE_THREAD]),
    j = new Set([g.rbe.PUBLIC_THREAD, g.rbe.PRIVATE_THREAD]),
    H = new Set([g.rbe.GUILD_TEXT, g.rbe.GUILD_ANNOUNCEMENT, g.rbe.GUILD_FORUM, g.rbe.GUILD_MEDIA]);
function Y(e) {
    return B.has(e);
}
function W(e) {
    return j.has(e);
}
let K = new Set([
    g.rbe.DM,
    g.rbe.GROUP_DM,
    g.rbe.GUILD_TEXT,
    g.rbe.GUILD_ANNOUNCEMENT,
    g.rbe.ANNOUNCEMENT_THREAD,
    g.rbe.PUBLIC_THREAD,
    g.rbe.PRIVATE_THREAD,
    g.rbe.GUILD_FORUM,
    g.rbe.GUILD_MEDIA,
    g.rbe.GUILD_DIRECTORY,
    g.rbe.GUILD_VOICE,
    g.rbe.GUILD_STAGE_VOICE,
]);
function $(e) {
    return K.has(e);
}
let z = new Set([
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.GUILD_STORE,
        g.rbe.GUILD_VOICE,
        g.rbe.GUILD_STAGE_VOICE,
        g.rbe.ANNOUNCEMENT_THREAD,
        g.rbe.PUBLIC_THREAD,
        g.rbe.PRIVATE_THREAD,
        g.rbe.GUILD_DIRECTORY,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
    ]),
    q = new Set([
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.GUILD_CATEGORY,
        g.rbe.GUILD_STORE,
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_VOICE,
        g.rbe.GUILD_STAGE_VOICE,
        g.rbe.GUILD_DIRECTORY,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
    ]),
    X = new Set([g.rbe.GUILD_TEXT, g.rbe.GUILD_ANNOUNCEMENT]),
    Z = new Set([g.rbe.GUILD_TEXT, g.rbe.GUILD_ANNOUNCEMENT, g.rbe.GUILD_FORUM, g.rbe.GUILD_MEDIA]),
    Q = new Set([
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
        g.rbe.GUILD_VOICE,
        g.rbe.GUILD_STAGE_VOICE,
    ]),
    J = new Set([
        g.rbe.GUILD_ANNOUNCEMENT,
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
        g.rbe.ANNOUNCEMENT_THREAD,
    ]),
    ee = new Set([
        g.rbe.GUILD_TEXT,
        g.rbe.GUILD_FORUM,
        g.rbe.GUILD_MEDIA,
        g.rbe.ANNOUNCEMENT_THREAD,
        g.rbe.PUBLIC_THREAD,
        g.rbe.PRIVATE_THREAD,
        g.rbe.GUILD_VOICE,
        g.rbe.GUILD_STAGE_VOICE,
    ]),
    et = new Set([g.rbe.PUBLIC_THREAD, g.rbe.PRIVATE_THREAD, g.rbe.GUILD_VOICE, g.rbe.GUILD_STAGE_VOICE]),
    en = new Set([g.rbe.GUILD_TEXT, g.rbe.GUILD_FORUM, g.rbe.GUILD_MEDIA]),
    er = new Set([g.rbe.GUILD_TEXT, g.rbe.GUILD_CATEGORY, g.rbe.GUILD_FORUM, g.rbe.GUILD_ANNOUNCEMENT]),
    ei = new Set([g.rbe.GUILD_TEXT, g.rbe.GUILD_ANNOUNCEMENT, g.rbe.GUILD_FORUM, g.rbe.GUILD_VOICE]);
function ea(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: c.iu(e.allow), deny: c.iu(e.deny) };
        }),
        t
    );
}
function es(e) {
    return null == e ? {} : i().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function eo(e) {
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
function el(e) {
    return null != e ? { id: e.id, name: e.name } : void 0;
}
let eu = c.kg(g.xBc.CONNECT, g.xBc.VIEW_CHANNEL),
    ec = g.hVb.CONNECT | g.hVb.VIEW_CHANNEL;
function ed(e) {
    return R(e) ? eu : g.xBc.VIEW_CHANNEL;
}
function e_(e) {
    return R(e) ? ec : g.hVb.VIEW_CHANNEL;
}
class ef {
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
            (this.type = e.type ?? g.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null);
    }
}
function eh(e) {
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
let ep = Object.freeze({});
class em extends ef {
    get permissionOverwrites() {
        return this.permissionOverwrites_ ?? ep;
    }
    get topic() {
        return this.topic_ ?? "";
    }
    get position() {
        return this.position_ ?? 0;
    }
    get bitrate() {
        return this.bitrate_ ?? g.gp3;
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
        return this.merge(eh({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = eh(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && h.A.isPublic(this.id)) return f.Uu;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return w(this.type);
    }
    isGroupDM() {
        return this.type === g.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return P(this.type);
    }
    isDM() {
        return this.type === g.rbe.DM;
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
        return B.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
    }
    isForumPost() {
        return (
            this.type === g.rbe.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            g.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isRingable() {
        return g.kvI.CALLABLE.has(this.type) || this.type === g.rbe.GUILD_VOICE;
    }
    isCategory() {
        return this.type === g.rbe.GUILD_CATEGORY;
    }
    isVocal() {
        return G(this.type);
    }
    isGuildVocal() {
        return R(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === g.rbe.GUILD_VOICE;
    }
    isGuildVoiceOrThread() {
        return this.isGuildVoice() || this.isVocalThread();
    }
    isGuildStageVoice() {
        return this.type === g.rbe.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return Y(this.type);
    }
    isAnnouncementThread() {
        return this.type === g.rbe.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === g.rbe.PUBLIC_THREAD || this.type === g.rbe.PRIVATE_THREAD;
    }
    isActiveThread() {
        return this.isThread() && this.threadMetadata?.archived !== !0;
    }
    isDirectory() {
        return this.type === g.rbe.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === g.rbe.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === g.rbe.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === g.rbe.PUBLIC_THREAD && this.parentChannelThreadType === g.rbe.GUILD_MEDIA;
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
    get accessPermissions() {
        return ed(this.type);
    }
    hasFlag(e) {
        return (0, d.Lt)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eg extends em {
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
            availableTags: null != e.available_tags ? eo(e.available_tags) : void 0,
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
            iconEmoji: el(e.icon_emoji),
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
            nicks: es(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: ea(e.permission_overwrites),
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
            type: null != e.type ? e.type : g.rbe.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
        };
        return (0, _.pp)(n, eg);
    }
}
class eE extends em {
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
        return eF({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : g.rbe.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
        });
    }
}
class eA extends em {
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
        return eF({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : g.rbe.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version,
        });
    }
}
class eI extends eA {}
class eT extends eA {}
class ey extends eA {}
class eS extends eE {}
class ev extends eA {}
class eC extends eA {}
class eb extends eE {}
class eN extends em {
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
            availableTags: null != e.available_tags ? eo(e.available_tags) : [],
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
            iconEmoji: el(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: ea(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : g.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, _.pp)(n, eN);
    }
}
class eR {
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
let eO = new eR(),
    eD = new eR();
class eL extends em {
    static sortRecipients(e, t) {
        let n = eO.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (eD.getOrCompute(e.id) ^ n) - (eD.getOrCompute(t.id) ^ n));
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
            (this.rawRecipients = eL.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(e.recipients ?? [])].sort(p.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = e.safetyWarnings ?? []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
    static fromServer(e) {
        let t = eL.sortRecipients(e.recipients, e.id),
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
                nicks: es(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: t,
                recipients: t.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : g.rbe.DM,
            };
        return (0, _.pp)(n, eL);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === g.rbe.DM && null != e && !0 === e.system;
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
                    .sort(p.default.compare),
            );
            return null == t ? n : n.set("nicks", { ...n.nicks, [e]: t });
        }
    }
    removeRecipient(e) {
        return this.set("recipients", i().without(this.recipients, e));
    }
}
class ew extends eL {}
class ex extends eL {}
class eP extends em {
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
            type: null != e.type ? e.type : g.rbe.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
        };
        return (0, _.pp)(n, eP);
    }
}
let eM = {
    [g.rbe.DM]: eL.fromServer,
    [g.rbe.GROUP_DM]: eL.fromServer,
    [g.rbe.GUILD_TEXT]: eA.fromServer,
    [g.rbe.GUILD_VOICE]: eE.fromServer,
    [g.rbe.GUILD_STAGE_VOICE]: eE.fromServer,
    [g.rbe.GUILD_CATEGORY]: eA.fromServer,
    [g.rbe.GUILD_ANNOUNCEMENT]: eA.fromServer,
    [g.rbe.GUILD_STORE]: eA.fromServer,
    [g.rbe.ANNOUNCEMENT_THREAD]: eP.fromServer,
    [g.rbe.PUBLIC_THREAD]: eP.fromServer,
    [g.rbe.PRIVATE_THREAD]: eP.fromServer,
    [g.rbe.GUILD_DIRECTORY]: eA.fromServer,
    [g.rbe.GUILD_FORUM]: eN.fromServer,
    [g.rbe.GUILD_MEDIA]: eN.fromServer,
};
function ek(e, t) {
    return (eM[e.type ?? g.rbe.GUILD_TEXT] ?? eg.fromServer)(e, t);
}
function eU(e) {
    return eV(e);
}
let eG = {
    [g.rbe.DM]: ew,
    [g.rbe.GROUP_DM]: ex,
    [g.rbe.GUILD_TEXT]: eC,
    [g.rbe.GUILD_VOICE]: eb,
    [g.rbe.GUILD_STAGE_VOICE]: eS,
    [g.rbe.GUILD_CATEGORY]: eT,
    [g.rbe.GUILD_ANNOUNCEMENT]: eI,
    [g.rbe.GUILD_STORE]: ev,
    [g.rbe.ANNOUNCEMENT_THREAD]: eP,
    [g.rbe.PUBLIC_THREAD]: eP,
    [g.rbe.PRIVATE_THREAD]: eP,
    [g.rbe.GUILD_DIRECTORY]: ey,
    [g.rbe.GUILD_FORUM]: eN,
    [g.rbe.GUILD_MEDIA]: eN,
};
function eF(e) {
    let t = eG[e.type ?? g.rbe.GUILD_TEXT] ?? eg;
    return (0, _.pp)(e, t);
}
function eV(e) {
    return new (eG[e.type ?? g.rbe.GUILD_TEXT] ?? eg)(eh(e));
}
