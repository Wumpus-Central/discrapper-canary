"use strict";
n.d(t, {
    A_: () => I,
    B4: () => et,
    Do: () => b,
    Gw: () => L,
    IY: () => q,
    JT: () => K,
    LE: () => X,
    Le: () => F,
    Lt: () => ey,
    MK: () => M,
    OU: () => R,
    OY: () => eR,
    QE: () => C,
    TA: () => el,
    UE: () => eO,
    YB: () => ef,
    ZE: () => Q,
    Z_: () => j,
    ay: () => v,
    bk: () => $,
    cq: () => eS,
    createChannelRecord: () => eb,
    fT: () => Y,
    gV: () => x,
    ig: () => V,
    jb: () => eE,
    k: () => Z,
    k3: () => P,
    ke: () => S,
    nA: () => em,
    nb: () => J,
    oH: () => y,
    oh: () => eC,
    p6: () => ee,
    pQ: () => U,
    pd: () => eu,
    tr: () => A,
    uL: () => N,
    wE: () => H,
    xR: () => z,
    zy: () => O,
}),
    n(938796);
var r = n(735438),
    i = n.n(r),
    s = n(635377),
    a = n.n(s),
    o = n(371444),
    l = n(392421),
    u = n(602137),
    d = n(136722),
    c = n(665260),
    _ = n(933681),
    f = n(233993),
    E = n(446600),
    h = n(661191),
    p = n(652215),
    m = n(746080);
let g = new Set([
    p.rbe.GUILD_TEXT,
    p.rbe.GUILD_ANNOUNCEMENT,
    p.rbe.GUILD_STORE,
    p.rbe.ANNOUNCEMENT_THREAD,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
    p.rbe.GUILD_DIRECTORY,
    p.rbe.GUILD_FORUM,
    p.rbe.GUILD_MEDIA,
    p.rbe.DM,
    p.rbe.GROUP_DM,
]);
function A(e) {
    return g.has(e);
}
let I = new Set([
        p.rbe.DM,
        p.rbe.GROUP_DM,
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.GUILD_CATEGORY,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_STORE,
        p.rbe.ANNOUNCEMENT_THREAD,
        p.rbe.PUBLIC_THREAD,
        p.rbe.PRIVATE_THREAD,
        p.rbe.GUILD_DIRECTORY,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
    ]),
    T = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.ANNOUNCEMENT_THREAD,
        p.rbe.PUBLIC_THREAD,
        p.rbe.PRIVATE_THREAD,
    ]);
function S(e) {
    return T.has(e);
}
let y = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
    ]),
    N = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.GUILD_CATEGORY,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_STORE,
        p.rbe.ANNOUNCEMENT_THREAD,
        p.rbe.PUBLIC_THREAD,
        p.rbe.PRIVATE_THREAD,
        p.rbe.GUILD_DIRECTORY,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
    ]);
function O(e) {
    return N.has(e);
}
p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA;
let R = new Set([p.rbe.GUILD_VOICE, p.rbe.GUILD_STAGE_VOICE]);
function v(e) {
    return "SELECTABLE" !== e && R.has(e);
}
function C(e) {
    var t;
    return v(e) || ((t = e), B.has(t));
}
let b = new Set([p.rbe.GUILD_STAGE_VOICE]),
    D = new Set([p.rbe.DM, p.rbe.GROUP_DM]);
function L(e) {
    return D.has(e);
}
let w = new Set([p.rbe.GROUP_DM]);
function M(e) {
    return w.has(e);
}
let P = new Set([
    p.rbe.DM,
    p.rbe.GROUP_DM,
    p.rbe.GUILD_TEXT,
    p.rbe.GUILD_ANNOUNCEMENT,
    p.rbe.ANNOUNCEMENT_THREAD,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
]);
function U(e) {
    return P.has(e);
}
let k = new Set([
    p.rbe.DM,
    p.rbe.GROUP_DM,
    p.rbe.GUILD_VOICE,
    p.rbe.GUILD_STAGE_VOICE,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
]);
function x(e) {
    return k.has(e);
}
let G = new Set([
    p.rbe.GUILD_TEXT,
    p.rbe.GUILD_ANNOUNCEMENT,
    p.rbe.ANNOUNCEMENT_THREAD,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
    p.rbe.GUILD_DIRECTORY,
    p.rbe.GUILD_FORUM,
    p.rbe.GUILD_MEDIA,
    p.rbe.DM,
    p.rbe.GROUP_DM,
]);
function V(e) {
    return G.has(e);
}
let F = new Set([p.rbe.ANNOUNCEMENT_THREAD, p.rbe.PUBLIC_THREAD, p.rbe.PRIVATE_THREAD]),
    B = new Set([p.rbe.PUBLIC_THREAD, p.rbe.PRIVATE_THREAD]),
    H = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA]);
function Y(e) {
    return F.has(e);
}
let W = new Set([
    p.rbe.DM,
    p.rbe.GROUP_DM,
    p.rbe.GUILD_TEXT,
    p.rbe.GUILD_ANNOUNCEMENT,
    p.rbe.ANNOUNCEMENT_THREAD,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
    p.rbe.GUILD_FORUM,
    p.rbe.GUILD_MEDIA,
    p.rbe.GUILD_DIRECTORY,
    p.rbe.GUILD_VOICE,
    p.rbe.GUILD_STAGE_VOICE,
]);
function j(e) {
    return W.has(e);
}
let K = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_STORE,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.ANNOUNCEMENT_THREAD,
        p.rbe.PUBLIC_THREAD,
        p.rbe.PRIVATE_THREAD,
        p.rbe.GUILD_DIRECTORY,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
    ]),
    $ = new Set([
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_CATEGORY,
        p.rbe.GUILD_STORE,
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.GUILD_DIRECTORY,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
    ]),
    z = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT]),
    q = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA]),
    X = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
    ]),
    Q = new Set([
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.ANNOUNCEMENT_THREAD,
    ]),
    J = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.ANNOUNCEMENT_THREAD,
        p.rbe.PUBLIC_THREAD,
        p.rbe.PRIVATE_THREAD,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
    ]),
    Z = new Set([p.rbe.PUBLIC_THREAD, p.rbe.PRIVATE_THREAD, p.rbe.GUILD_VOICE, p.rbe.GUILD_STAGE_VOICE]),
    ee = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA]),
    et = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_CATEGORY, p.rbe.GUILD_FORUM, p.rbe.GUILD_ANNOUNCEMENT]);
function en(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: d.iu(e.allow), deny: d.iu(e.deny) };
        }),
        t
    );
}
function er(e) {
    return null == e ? {} : i().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function ei(e) {
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
function es(e) {
    return null != e ? { id: e.id, name: e.name } : void 0;
}
p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_VOICE;
let ea = d.kg(p.xBc.CONNECT, p.xBc.VIEW_CHANNEL),
    eo = p.hVb.CONNECT | p.hVb.VIEW_CHANNEL;
function el(e) {
    return v(e) ? ea : p.xBc.VIEW_CHANNEL;
}
function eu(e) {
    return v(e) ? eo : p.hVb.VIEW_CHANNEL;
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
    voiceHangout;
    constructor(e) {
        (this.id = e.id),
            (this.type = e.type ?? p.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null);
    }
}
function ec(e) {
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
class ef extends ed {
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
        return this.bitrate_ ?? p.gp3;
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
        return this.merge(ec({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = ec(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && E.A.isPublic(this.id)) return f.Uu;
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
        return this.type === p.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return M(this.type);
    }
    isDM() {
        return this.type === p.rbe.DM;
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
        return this.hasFlag(m.lx.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        return F.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
    }
    isForumPost() {
        return (
            this.type === p.rbe.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            p.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isRingable() {
        return p.kvI.CALLABLE.has(this.type) || this.type === p.rbe.GUILD_VOICE;
    }
    isCategory() {
        return this.type === p.rbe.GUILD_CATEGORY;
    }
    isVocal() {
        return x(this.type);
    }
    isGuildVocal() {
        return v(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === p.rbe.GUILD_VOICE;
    }
    isGuildVoiceOrThread() {
        return this.isGuildVoice() || this.isVocalThread();
    }
    isGuildStageVoice() {
        return this.type === p.rbe.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return Y(this.type);
    }
    isAnnouncementThread() {
        return this.type === p.rbe.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === p.rbe.PUBLIC_THREAD || this.type === p.rbe.PRIVATE_THREAD;
    }
    isActiveThread() {
        return this.isThread() && this.threadMetadata?.archived !== !0;
    }
    isDirectory() {
        return this.type === p.rbe.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === p.rbe.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === p.rbe.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === p.rbe.PUBLIC_THREAD && this.parentChannelThreadType === p.rbe.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(m.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    isObfuscated() {
        return this.hasFlag(m.lx.OBFUSCATED);
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
        return this.hasFlag(m.lx.IS_MODERATOR_REPORT_CHANNEL);
    }
    isSpoilerChannel() {
        return this.hasFlag(m.lx.IS_SPOILER_CHANNEL);
    }
    get accessPermissions() {
        return el(this.type);
    }
    hasFlag(e) {
        return (0, c.Lt)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eE extends ef {
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
            (this.hdStreamingBuyerId = e.hdStreamingBuyerId),
            (this.voiceHangout = e.voiceHangout);
    }
    static fromServer(e, t) {
        let n = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? ei(e.available_tags) : void 0,
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
            iconEmoji: es(e.icon_emoji),
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
            nicks: er(e.nicks),
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
            type: null != e.type ? e.type : p.rbe.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        };
        return (0, _.pp)(n, eE);
    }
}
class eh extends ef {
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
        return eC({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: es(e.icon_emoji),
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
            type: null != e.type ? e.type : p.rbe.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        });
    }
}
class ep extends ef {
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
        return eC({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: es(e.icon_emoji),
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
            type: null != e.type ? e.type : p.rbe.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version,
        });
    }
}
class em extends ep {}
class eg extends ef {
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
            availableTags: null != e.available_tags ? ei(e.available_tags) : [],
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
            iconEmoji: es(e.icon_emoji),
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
            type: null != e.type ? e.type : p.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, _.pp)(n, eg);
    }
}
class eA {
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
let eI = new eA(),
    eT = new eA();
class eS extends ef {
    static sortRecipients(e, t) {
        let n = eI.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (eT.getOrCompute(e.id) ^ n) - (eT.getOrCompute(t.id) ^ n));
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
                nicks: er(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: t,
                recipients: t.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : p.rbe.DM,
            };
        return (0, _.pp)(n, eS);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === p.rbe.DM && null != e && !0 === e.system;
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
class ey extends ef {
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
            type: null != e.type ? e.type : p.rbe.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
        };
        return (0, _.pp)(n, ey);
    }
}
let eN = {
    [p.rbe.DM]: eS.fromServer,
    [p.rbe.GROUP_DM]: eS.fromServer,
    [p.rbe.GUILD_TEXT]: ep.fromServer,
    [p.rbe.GUILD_VOICE]: eh.fromServer,
    [p.rbe.GUILD_STAGE_VOICE]: eh.fromServer,
    [p.rbe.GUILD_CATEGORY]: ep.fromServer,
    [p.rbe.GUILD_ANNOUNCEMENT]: ep.fromServer,
    [p.rbe.GUILD_STORE]: ep.fromServer,
    [p.rbe.ANNOUNCEMENT_THREAD]: ey.fromServer,
    [p.rbe.PUBLIC_THREAD]: ey.fromServer,
    [p.rbe.PRIVATE_THREAD]: ey.fromServer,
    [p.rbe.GUILD_DIRECTORY]: ep.fromServer,
    [p.rbe.GUILD_FORUM]: eg.fromServer,
    [p.rbe.GUILD_MEDIA]: eg.fromServer,
};
function eO(e, t) {
    return (eN[e.type ?? p.rbe.GUILD_TEXT] ?? eE.fromServer)(e, t);
}
function eR(e) {
    return eb(e);
}
let ev = {
    [p.rbe.DM]: class extends eS {},
    [p.rbe.GROUP_DM]: class extends eS {},
    [p.rbe.GUILD_TEXT]: em,
    [p.rbe.GUILD_VOICE]: class extends eh {},
    [p.rbe.GUILD_STAGE_VOICE]: class extends eh {},
    [p.rbe.GUILD_CATEGORY]: class extends ep {},
    [p.rbe.GUILD_ANNOUNCEMENT]: class extends ep {},
    [p.rbe.GUILD_STORE]: class extends ep {},
    [p.rbe.ANNOUNCEMENT_THREAD]: ey,
    [p.rbe.PUBLIC_THREAD]: ey,
    [p.rbe.PRIVATE_THREAD]: ey,
    [p.rbe.GUILD_DIRECTORY]: class extends ep {},
    [p.rbe.GUILD_FORUM]: eg,
    [p.rbe.GUILD_MEDIA]: eg,
};
function eC(e) {
    let t = ev[e.type ?? p.rbe.GUILD_TEXT] ?? eE;
    return (0, _.pp)(e, t);
}
function eb(e) {
    return new (ev[e.type ?? p.rbe.GUILD_TEXT] ?? eE)(ec(e));
}
