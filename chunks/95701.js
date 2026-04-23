n.d(t, {
    A_: () => R,
    B4: () => et,
    Do: () => b,
    Gw: () => P,
    IY: () => q,
    JT: () => K,
    LE: () => X,
    Le: () => H,
    Lt: () => ep,
    MK: () => y,
    OU: () => D,
    OY: () => eD,
    QE: () => g,
    TA: () => el,
    UE: () => eL,
    YB: () => eu,
    ZE: () => z,
    Z_: () => j,
    ay: () => h,
    bk: () => $,
    cq: () => eC,
    createChannelRecord: () => eb,
    fT: () => W,
    gV: () => w,
    ig: () => V,
    jb: () => eI,
    k: () => Z,
    k3: () => G,
    ke: () => C,
    nA: () => eS,
    nb: () => J,
    oH: () => p,
    oh: () => eg,
    p6: () => ee,
    pQ: () => v,
    pd: () => eo,
    tr: () => O,
    uL: () => m,
    wE: () => x,
    xR: () => Q,
    zy: () => L,
}),
    n(938796);
var i = n(735438),
    r = n.n(i),
    a = n(635377),
    s = n.n(a),
    _ = n(371444),
    l = n(392421),
    o = n(602137),
    E = n(136722),
    d = n(665260),
    c = n(933681),
    u = n(233993),
    I = n(446600),
    A = n(935208),
    T = n(652215),
    S = n(746080);
let N = new Set([
    T.rbe.GUILD_TEXT,
    T.rbe.GUILD_ANNOUNCEMENT,
    T.rbe.GUILD_STORE,
    T.rbe.ANNOUNCEMENT_THREAD,
    T.rbe.PUBLIC_THREAD,
    T.rbe.PRIVATE_THREAD,
    T.rbe.GUILD_DIRECTORY,
    T.rbe.GUILD_FORUM,
    T.rbe.GUILD_MEDIA,
    T.rbe.DM,
    T.rbe.GROUP_DM,
]);
function O(e) {
    return N.has(e);
}
let R = new Set([
        T.rbe.DM,
        T.rbe.GROUP_DM,
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_VOICE,
        T.rbe.GUILD_STAGE_VOICE,
        T.rbe.GUILD_CATEGORY,
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.GUILD_STORE,
        T.rbe.ANNOUNCEMENT_THREAD,
        T.rbe.PUBLIC_THREAD,
        T.rbe.PRIVATE_THREAD,
        T.rbe.GUILD_DIRECTORY,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
    ]),
    f = new Set([
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.ANNOUNCEMENT_THREAD,
        T.rbe.PUBLIC_THREAD,
        T.rbe.PRIVATE_THREAD,
    ]);
function C(e) {
    return f.has(e);
}
let p = new Set([
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
        T.rbe.GUILD_VOICE,
        T.rbe.GUILD_STAGE_VOICE,
    ]),
    m = new Set([
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_VOICE,
        T.rbe.GUILD_STAGE_VOICE,
        T.rbe.GUILD_CATEGORY,
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.GUILD_STORE,
        T.rbe.ANNOUNCEMENT_THREAD,
        T.rbe.PUBLIC_THREAD,
        T.rbe.PRIVATE_THREAD,
        T.rbe.GUILD_DIRECTORY,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
    ]);
function L(e) {
    return m.has(e);
}
T.rbe.GUILD_TEXT, T.rbe.GUILD_ANNOUNCEMENT, T.rbe.GUILD_FORUM, T.rbe.GUILD_MEDIA;
let D = new Set([T.rbe.GUILD_VOICE, T.rbe.GUILD_STAGE_VOICE]);
function h(e) {
    return "SELECTABLE" !== e && D.has(e);
}
function g(e) {
    var t;
    return h(e) || ((t = e), k.has(t));
}
let b = new Set([T.rbe.GUILD_STAGE_VOICE]),
    U = new Set([T.rbe.DM, T.rbe.GROUP_DM]);
function P(e) {
    return U.has(e);
}
let M = new Set([T.rbe.GROUP_DM]);
function y(e) {
    return M.has(e);
}
let G = new Set([
    T.rbe.DM,
    T.rbe.GROUP_DM,
    T.rbe.GUILD_TEXT,
    T.rbe.GUILD_ANNOUNCEMENT,
    T.rbe.ANNOUNCEMENT_THREAD,
    T.rbe.PUBLIC_THREAD,
    T.rbe.PRIVATE_THREAD,
]);
function v(e) {
    return G.has(e);
}
let B = new Set([
    T.rbe.DM,
    T.rbe.GROUP_DM,
    T.rbe.GUILD_VOICE,
    T.rbe.GUILD_STAGE_VOICE,
    T.rbe.PUBLIC_THREAD,
    T.rbe.PRIVATE_THREAD,
]);
function w(e) {
    return B.has(e);
}
let F = new Set([
    T.rbe.GUILD_TEXT,
    T.rbe.GUILD_ANNOUNCEMENT,
    T.rbe.ANNOUNCEMENT_THREAD,
    T.rbe.PUBLIC_THREAD,
    T.rbe.PRIVATE_THREAD,
    T.rbe.GUILD_DIRECTORY,
    T.rbe.GUILD_FORUM,
    T.rbe.GUILD_MEDIA,
    T.rbe.DM,
    T.rbe.GROUP_DM,
]);
function V(e) {
    return F.has(e);
}
let H = new Set([T.rbe.ANNOUNCEMENT_THREAD, T.rbe.PUBLIC_THREAD, T.rbe.PRIVATE_THREAD]),
    k = new Set([T.rbe.PUBLIC_THREAD, T.rbe.PRIVATE_THREAD]),
    x = new Set([T.rbe.GUILD_TEXT, T.rbe.GUILD_ANNOUNCEMENT, T.rbe.GUILD_FORUM, T.rbe.GUILD_MEDIA]);
function W(e) {
    return H.has(e);
}
let Y = new Set([
    T.rbe.DM,
    T.rbe.GROUP_DM,
    T.rbe.GUILD_TEXT,
    T.rbe.GUILD_ANNOUNCEMENT,
    T.rbe.ANNOUNCEMENT_THREAD,
    T.rbe.PUBLIC_THREAD,
    T.rbe.PRIVATE_THREAD,
    T.rbe.GUILD_FORUM,
    T.rbe.GUILD_MEDIA,
    T.rbe.GUILD_DIRECTORY,
    T.rbe.GUILD_VOICE,
    T.rbe.GUILD_STAGE_VOICE,
]);
function j(e) {
    return Y.has(e);
}
let K = new Set([
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.GUILD_STORE,
        T.rbe.GUILD_VOICE,
        T.rbe.GUILD_STAGE_VOICE,
        T.rbe.ANNOUNCEMENT_THREAD,
        T.rbe.PUBLIC_THREAD,
        T.rbe.PRIVATE_THREAD,
        T.rbe.GUILD_DIRECTORY,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
    ]),
    $ = new Set([
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.GUILD_CATEGORY,
        T.rbe.GUILD_STORE,
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_VOICE,
        T.rbe.GUILD_STAGE_VOICE,
        T.rbe.GUILD_DIRECTORY,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
    ]),
    Q = new Set([T.rbe.GUILD_TEXT, T.rbe.GUILD_ANNOUNCEMENT]),
    q = new Set([T.rbe.GUILD_TEXT, T.rbe.GUILD_ANNOUNCEMENT, T.rbe.GUILD_FORUM, T.rbe.GUILD_MEDIA]),
    X = new Set([
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
        T.rbe.GUILD_VOICE,
        T.rbe.GUILD_STAGE_VOICE,
    ]),
    z = new Set([
        T.rbe.GUILD_ANNOUNCEMENT,
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
        T.rbe.ANNOUNCEMENT_THREAD,
    ]),
    J = new Set([
        T.rbe.GUILD_TEXT,
        T.rbe.GUILD_FORUM,
        T.rbe.GUILD_MEDIA,
        T.rbe.ANNOUNCEMENT_THREAD,
        T.rbe.PUBLIC_THREAD,
        T.rbe.PRIVATE_THREAD,
        T.rbe.GUILD_VOICE,
        T.rbe.GUILD_STAGE_VOICE,
    ]),
    Z = new Set([T.rbe.PUBLIC_THREAD, T.rbe.PRIVATE_THREAD, T.rbe.GUILD_VOICE, T.rbe.GUILD_STAGE_VOICE]),
    ee = new Set([T.rbe.GUILD_TEXT, T.rbe.GUILD_FORUM, T.rbe.GUILD_MEDIA]),
    et = new Set([T.rbe.GUILD_TEXT, T.rbe.GUILD_CATEGORY, T.rbe.GUILD_FORUM, T.rbe.GUILD_ANNOUNCEMENT]);
function en(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: E.iu(e.allow), deny: E.iu(e.deny) };
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
T.rbe.GUILD_TEXT, T.rbe.GUILD_ANNOUNCEMENT, T.rbe.GUILD_FORUM, T.rbe.GUILD_VOICE;
let es = E.kg(T.xBc.CONNECT, T.xBc.VIEW_CHANNEL),
    e_ = T.hVb.CONNECT | T.hVb.VIEW_CHANNEL;
function el(e) {
    return h(e) ? es : T.xBc.VIEW_CHANNEL;
}
function eo(e) {
    return h(e) ? e_ : T.hVb.VIEW_CHANNEL;
}
class eE {
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
            (this.type = e.type ?? T.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null);
    }
}
function ed(e) {
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
let ec = Object.freeze({});
class eu extends eE {
    get permissionOverwrites() {
        return this.permissionOverwrites_ ?? ec;
    }
    get topic() {
        return this.topic_ ?? "";
    }
    get position() {
        return this.position_ ?? 0;
    }
    get bitrate() {
        return this.bitrate_ ?? T.gp3;
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
        return this.merge(ed({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = ed(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && I.A.isPublic(this.id)) return u.Uu;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return P(this.type);
    }
    isGroupDM() {
        return this.type === T.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return y(this.type);
    }
    isDM() {
        return this.type === T.rbe.DM;
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
        return this.hasFlag(S.lx.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        return H.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
    }
    isForumPost() {
        return (
            this.type === T.rbe.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            T.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isRingable() {
        return T.kvI.CALLABLE.has(this.type) || this.type === T.rbe.GUILD_VOICE;
    }
    isCategory() {
        return this.type === T.rbe.GUILD_CATEGORY;
    }
    isVocal() {
        return w(this.type);
    }
    isGuildVocal() {
        return h(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === T.rbe.GUILD_VOICE;
    }
    isGuildVoiceOrThread() {
        return this.isGuildVoice() || this.isVocalThread();
    }
    isGuildStageVoice() {
        return this.type === T.rbe.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return W(this.type);
    }
    isAnnouncementThread() {
        return this.type === T.rbe.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === T.rbe.PUBLIC_THREAD || this.type === T.rbe.PRIVATE_THREAD;
    }
    isActiveThread() {
        return this.isThread() && this.threadMetadata?.archived !== !0;
    }
    isDirectory() {
        return this.type === T.rbe.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === T.rbe.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === T.rbe.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === T.rbe.PUBLIC_THREAD && this.parentChannelThreadType === T.rbe.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(S.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    isObfuscated() {
        return this.hasFlag(S.lx.OBFUSCATED);
    }
    getGuildId() {
        return this.guild_id;
    }
    getApplicationId() {
        return this.application_id;
    }
    getDefaultSortOrder() {
        return this.defaultSortOrder ?? o.T.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel()
            ? _.C.GRID
            : null == this.defaultForumLayout || this.defaultForumLayout === _.C.DEFAULT
              ? _.C.LIST
              : this.defaultForumLayout;
    }
    getDefaultTagSetting() {
        return this.defaultTagSetting ?? l.n.MATCH_SOME;
    }
    isModeratorReportChannel() {
        return this.hasFlag(S.lx.IS_MODERATOR_REPORT_CHANNEL);
    }
    isSpoilerChannel() {
        return this.hasFlag(S.lx.IS_SPOILER_CHANNEL);
    }
    get accessPermissions() {
        return el(this.type);
    }
    hasFlag(e) {
        return (0, d.Lt)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eI extends eu {
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
            type: null != e.type ? e.type : T.rbe.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        };
        return (0, c.pp)(n, eI);
    }
}
class eA extends eu {
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
        return eg({
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
            type: null != e.type ? e.type : T.rbe.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        });
    }
}
class eT extends eu {
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
        return eg({
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
            type: null != e.type ? e.type : T.rbe.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version,
        });
    }
}
class eS extends eT {}
class eN extends eu {
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
            type: null != e.type ? e.type : T.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, c.pp)(n, eN);
    }
}
class eO {
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
let eR = new eO(),
    ef = new eO();
class eC extends eu {
    static sortRecipients(e, t) {
        let n = eR.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (ef.getOrCompute(e.id) ^ n) - (ef.getOrCompute(t.id) ^ n));
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
            (this.rawRecipients = eC.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(e.recipients ?? [])].sort(A.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = e.safetyWarnings ?? []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
    static fromServer(e) {
        let t = eC.sortRecipients(e.recipients, e.id),
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
                type: null != e.type ? e.type : T.rbe.DM,
            };
        return (0, c.pp)(n, eC);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === T.rbe.DM && null != e && !0 === e.system;
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
                    .sort(A.default.compare),
            );
            return null == t ? n : n.set("nicks", { ...n.nicks, [e]: t });
        }
    }
    removeRecipient(e) {
        return this.set("recipients", r().without(this.recipients, e));
    }
}
class ep extends eu {
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
            type: null != e.type ? e.type : T.rbe.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
        };
        return (0, c.pp)(n, ep);
    }
}
let em = {
    [T.rbe.DM]: eC.fromServer,
    [T.rbe.GROUP_DM]: eC.fromServer,
    [T.rbe.GUILD_TEXT]: eT.fromServer,
    [T.rbe.GUILD_VOICE]: eA.fromServer,
    [T.rbe.GUILD_STAGE_VOICE]: eA.fromServer,
    [T.rbe.GUILD_CATEGORY]: eT.fromServer,
    [T.rbe.GUILD_ANNOUNCEMENT]: eT.fromServer,
    [T.rbe.GUILD_STORE]: eT.fromServer,
    [T.rbe.ANNOUNCEMENT_THREAD]: ep.fromServer,
    [T.rbe.PUBLIC_THREAD]: ep.fromServer,
    [T.rbe.PRIVATE_THREAD]: ep.fromServer,
    [T.rbe.GUILD_DIRECTORY]: eT.fromServer,
    [T.rbe.GUILD_FORUM]: eN.fromServer,
    [T.rbe.GUILD_MEDIA]: eN.fromServer,
};
function eL(e, t) {
    return (em[e.type ?? T.rbe.GUILD_TEXT] ?? eI.fromServer)(e, t);
}
function eD(e) {
    return eb(e);
}
let eh = {
    [T.rbe.DM]: class extends eC {},
    [T.rbe.GROUP_DM]: class extends eC {},
    [T.rbe.GUILD_TEXT]: eS,
    [T.rbe.GUILD_VOICE]: class extends eA {},
    [T.rbe.GUILD_STAGE_VOICE]: class extends eA {},
    [T.rbe.GUILD_CATEGORY]: class extends eT {},
    [T.rbe.GUILD_ANNOUNCEMENT]: class extends eT {},
    [T.rbe.GUILD_STORE]: class extends eT {},
    [T.rbe.ANNOUNCEMENT_THREAD]: ep,
    [T.rbe.PUBLIC_THREAD]: ep,
    [T.rbe.PRIVATE_THREAD]: ep,
    [T.rbe.GUILD_DIRECTORY]: class extends eT {},
    [T.rbe.GUILD_FORUM]: eN,
    [T.rbe.GUILD_MEDIA]: eN,
};
function eg(e) {
    let t = eh[e.type ?? T.rbe.GUILD_TEXT] ?? eI;
    return (0, c.pp)(e, t);
}
function eb(e) {
    return new (eh[e.type ?? T.rbe.GUILD_TEXT] ?? eI)(ed(e));
}
