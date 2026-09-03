n.d(t, {
    A_: () => g,
    B4: () => en,
    Do: () => b,
    Gw: () => P,
    IY: () => X,
    JT: () => z,
    LE: () => Q,
    Le: () => H,
    Lt: () => ev,
    MK: () => w,
    OU: () => y,
    OY: () => eP,
    QE: () => v,
    TA: () => eh,
    UE: () => eM,
    XD: () => O,
    YB: () => em,
    ZV: () => er,
    Z_: () => $,
    ay: () => D,
    bk: () => q,
    cq: () => eD,
    createChannelRecord: () => eG,
    fT: () => Y,
    gV: () => F,
    ig: () => B,
    jb: () => eg,
    k: () => ee,
    k3: () => G,
    ke: () => N,
    nA: () => eC,
    nO: () => eo,
    nb: () => J,
    oH: () => C,
    oI: () => es,
    oh: () => ew,
    p6: () => et,
    pQ: () => x,
    pd: () => eI,
    tr: () => m,
    uL: () => R,
    wE: () => W,
    xR: () => Z,
    zy: () => L,
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
    h = n(403362),
    I = n(935208),
    f = n(652215),
    p = n(746080);
let T = new Set([
    f.rbe.GUILD_TEXT,
    f.rbe.GUILD_ANNOUNCEMENT,
    f.rbe.GUILD_STORE,
    f.rbe.ANNOUNCEMENT_THREAD,
    f.rbe.PUBLIC_THREAD,
    f.rbe.PRIVATE_THREAD,
    f.rbe.GUILD_DIRECTORY,
    f.rbe.GUILD_FORUM,
    f.rbe.GUILD_MEDIA,
    f.rbe.GUILD_APP,
    f.rbe.DM,
    f.rbe.GROUP_DM,
]);
function m(e) {
    return T.has(e);
}
let g = new Set([
        f.rbe.DM,
        f.rbe.GROUP_DM,
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_VOICE,
        f.rbe.GUILD_STAGE_VOICE,
        f.rbe.GUILD_CATEGORY,
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.GUILD_STORE,
        f.rbe.ANNOUNCEMENT_THREAD,
        f.rbe.PUBLIC_THREAD,
        f.rbe.PRIVATE_THREAD,
        f.rbe.GUILD_DIRECTORY,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_MEDIA,
        f.rbe.GUILD_SPACE,
        f.rbe.MEDIA_THREAD,
        f.rbe.GUILD_APP,
    ]),
    S = new Set([
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.ANNOUNCEMENT_THREAD,
        f.rbe.PUBLIC_THREAD,
        f.rbe.PRIVATE_THREAD,
        f.rbe.GUILD_APP,
    ]);
function N(e) {
    return S.has(e);
}
let C = new Set([
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_MEDIA,
        f.rbe.GUILD_VOICE,
        f.rbe.GUILD_STAGE_VOICE,
        f.rbe.GUILD_APP,
    ]),
    O = new Set([f.rbe.GUILD_TEXT]),
    R = new Set([
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_VOICE,
        f.rbe.GUILD_STAGE_VOICE,
        f.rbe.GUILD_CATEGORY,
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.GUILD_STORE,
        f.rbe.ANNOUNCEMENT_THREAD,
        f.rbe.PUBLIC_THREAD,
        f.rbe.PRIVATE_THREAD,
        f.rbe.GUILD_DIRECTORY,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_MEDIA,
        f.rbe.GUILD_SPACE,
        f.rbe.GUILD_APP,
    ]);
function L(e) {
    return R.has(e);
}
f.rbe.GUILD_TEXT, f.rbe.GUILD_ANNOUNCEMENT, f.rbe.GUILD_FORUM, f.rbe.GUILD_MEDIA, f.rbe.GUILD_APP;
let y = new Set([f.rbe.GUILD_VOICE, f.rbe.GUILD_STAGE_VOICE]);
function D(e) {
    return "SELECTABLE" !== e && y.has(e);
}
function v(e) {
    var t;
    return D(e) || ((t = e), j.has(t));
}
let b = new Set([f.rbe.GUILD_STAGE_VOICE]),
    M = new Set([f.rbe.DM, f.rbe.GROUP_DM]);
function P(e) {
    return M.has(e);
}
let U = new Set([f.rbe.GROUP_DM]);
function w(e) {
    return U.has(e);
}
let G = new Set([
    f.rbe.DM,
    f.rbe.GROUP_DM,
    f.rbe.GUILD_TEXT,
    f.rbe.GUILD_ANNOUNCEMENT,
    f.rbe.ANNOUNCEMENT_THREAD,
    f.rbe.PUBLIC_THREAD,
    f.rbe.PRIVATE_THREAD,
    f.rbe.GUILD_APP,
]);
function x(e) {
    return G.has(e);
}
let k = new Set([
    f.rbe.DM,
    f.rbe.GROUP_DM,
    f.rbe.GUILD_VOICE,
    f.rbe.GUILD_STAGE_VOICE,
    f.rbe.PUBLIC_THREAD,
    f.rbe.PRIVATE_THREAD,
]);
function F(e) {
    return k.has(e);
}
let V = new Set([
    f.rbe.GUILD_TEXT,
    f.rbe.GUILD_ANNOUNCEMENT,
    f.rbe.ANNOUNCEMENT_THREAD,
    f.rbe.PUBLIC_THREAD,
    f.rbe.PRIVATE_THREAD,
    f.rbe.GUILD_DIRECTORY,
    f.rbe.GUILD_FORUM,
    f.rbe.GUILD_MEDIA,
    f.rbe.GUILD_APP,
    f.rbe.DM,
    f.rbe.GROUP_DM,
]);
function B(e) {
    return V.has(e);
}
let H = new Set([f.rbe.ANNOUNCEMENT_THREAD, f.rbe.PUBLIC_THREAD, f.rbe.PRIVATE_THREAD, f.rbe.MEDIA_THREAD]),
    j = new Set([f.rbe.PUBLIC_THREAD, f.rbe.PRIVATE_THREAD]),
    W = new Set([f.rbe.GUILD_TEXT, f.rbe.GUILD_ANNOUNCEMENT, f.rbe.GUILD_FORUM, f.rbe.GUILD_MEDIA, f.rbe.GUILD_APP]);
function Y(e) {
    return H.has(e);
}
let K = new Set([
    f.rbe.DM,
    f.rbe.GROUP_DM,
    f.rbe.GUILD_TEXT,
    f.rbe.GUILD_ANNOUNCEMENT,
    f.rbe.ANNOUNCEMENT_THREAD,
    f.rbe.PUBLIC_THREAD,
    f.rbe.PRIVATE_THREAD,
    f.rbe.GUILD_FORUM,
    f.rbe.GUILD_MEDIA,
    f.rbe.GUILD_DIRECTORY,
    f.rbe.GUILD_VOICE,
    f.rbe.GUILD_STAGE_VOICE,
    f.rbe.GUILD_APP,
]);
function $(e) {
    return K.has(e);
}
let z = new Set([
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.GUILD_STORE,
        f.rbe.GUILD_VOICE,
        f.rbe.GUILD_STAGE_VOICE,
        f.rbe.ANNOUNCEMENT_THREAD,
        f.rbe.PUBLIC_THREAD,
        f.rbe.PRIVATE_THREAD,
        f.rbe.GUILD_DIRECTORY,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_MEDIA,
        f.rbe.GUILD_APP,
    ]),
    q = new Set([
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.GUILD_CATEGORY,
        f.rbe.GUILD_STORE,
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_VOICE,
        f.rbe.GUILD_STAGE_VOICE,
        f.rbe.GUILD_DIRECTORY,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_MEDIA,
        f.rbe.GUILD_APP,
    ]),
    Z = new Set([f.rbe.GUILD_TEXT, f.rbe.GUILD_ANNOUNCEMENT]),
    X = new Set([f.rbe.GUILD_TEXT, f.rbe.GUILD_ANNOUNCEMENT, f.rbe.GUILD_FORUM, f.rbe.GUILD_MEDIA, f.rbe.GUILD_APP]),
    Q = new Set([
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_MEDIA,
        f.rbe.GUILD_VOICE,
        f.rbe.GUILD_STAGE_VOICE,
        f.rbe.GUILD_APP,
    ]),
    J = new Set([
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_MEDIA,
        f.rbe.ANNOUNCEMENT_THREAD,
        f.rbe.PUBLIC_THREAD,
        f.rbe.PRIVATE_THREAD,
        f.rbe.GUILD_VOICE,
        f.rbe.GUILD_STAGE_VOICE,
        f.rbe.GUILD_APP,
    ]),
    ee = new Set([f.rbe.PUBLIC_THREAD, f.rbe.PRIVATE_THREAD, f.rbe.GUILD_VOICE, f.rbe.GUILD_STAGE_VOICE]),
    et = new Set([f.rbe.GUILD_TEXT, f.rbe.GUILD_FORUM, f.rbe.GUILD_MEDIA]),
    en = new Set([
        f.rbe.GUILD_TEXT,
        f.rbe.GUILD_CATEGORY,
        f.rbe.GUILD_FORUM,
        f.rbe.GUILD_ANNOUNCEMENT,
        f.rbe.GUILD_APP,
    ]);
f.rbe.GUILD_TEXT, f.rbe.GUILD_ANNOUNCEMENT, f.rbe.GUILD_FORUM, f.rbe.GUILD_VOICE, f.rbe.GUILD_APP;
let ei = new Set([f.rbe.GUILD_APP]);
function er(e) {
    return (0, h.Eo)(e, ei);
}
let ea = new Set([...ei]);
function es(e) {
    return (0, h.Eo)(e, ea);
}
let el = new Set([...ei, f.rbe.GUILD_FORUM, f.rbe.GUILD_MEDIA]);
function eo(e) {
    return !el.has(e);
}
function ed(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: c.iu(e.allow), deny: c.iu(e.deny) };
        }),
        t
    );
}
function ec(e) {
    return null == e ? {} : r().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function eu(e) {
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
function e_(e) {
    return null != e ? { id: e.id, name: e.name } : void 0;
}
let eE = c.kg(f.xBc.CONNECT, f.xBc.VIEW_CHANNEL),
    eA = f.hVb.CONNECT | f.hVb.VIEW_CHANNEL;
function eh(e) {
    return D(e) ? eE : f.xBc.VIEW_CHANNEL;
}
function eI(e) {
    return D(e) ? eA : f.hVb.VIEW_CHANNEL;
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
    voiceHangout;
    lastNonMessageActivityTimestamp;
    gameId;
    constructor(e) {
        (this.id = e.id),
            (this.type = e.type ?? f.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null);
    }
}
function ep(e) {
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
let eT = Object.freeze({});
class em extends ef {
    get permissionOverwrites() {
        return this.permissionOverwrites_ ?? eT;
    }
    get topic() {
        return this.topic_ ?? "";
    }
    get position() {
        return this.position_ ?? 0;
    }
    get bitrate() {
        return this.bitrate_ ?? f.gp3;
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
        return this.merge(ep({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = ep(e);
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
        return f.kvI.APPLICATION_MANAGEABLE.has(this.type) && null != this.application_id;
    }
    isPrivate() {
        return P(this.type);
    }
    isGroupDM() {
        return this.type === f.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return w(this.type);
    }
    isDM() {
        return this.type === f.rbe.DM;
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
        return H.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
    }
    isForumPost() {
        return (
            this.type === f.rbe.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            f.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isMediaThread() {
        return this.type === f.rbe.MEDIA_THREAD;
    }
    isRingable() {
        return f.kvI.CALLABLE.has(this.type) || this.type === f.rbe.GUILD_VOICE;
    }
    isCategory() {
        return this.type === f.rbe.GUILD_CATEGORY;
    }
    isVocal() {
        return F(this.type);
    }
    isGuildVocal() {
        return D(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === f.rbe.GUILD_VOICE;
    }
    isGuildVoiceOrThread() {
        return this.isGuildVoice() || this.isVocalThread();
    }
    isGuildStageVoice() {
        return this.type === f.rbe.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return Y(this.type);
    }
    isAnnouncementThread() {
        return this.type === f.rbe.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === f.rbe.PUBLIC_THREAD || this.type === f.rbe.PRIVATE_THREAD;
    }
    isActiveThread() {
        return this.isThread() && this.threadMetadata?.archived !== !0;
    }
    isDirectory() {
        return this.type === f.rbe.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === f.rbe.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === f.rbe.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === f.rbe.PUBLIC_THREAD && this.parentChannelThreadType === f.rbe.GUILD_MEDIA;
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
        return eh(this.type);
    }
    hasFlag(e) {
        return (0, u.Lt)(this.flags, e);
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
            availableTags: null != e.available_tags ? eu(e.available_tags) : void 0,
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
            iconEmoji: e_(e.icon_emoji),
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
            nicks: ec(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: ed(e.permission_overwrites),
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
            type: null != e.type ? e.type : f.rbe.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        };
        return (0, _.pp)(n, eg);
    }
}
class eS extends em {
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
        return ew({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: e_(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: ed(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : f.rbe.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            voiceHangout: e.voice_hangout,
        });
    }
}
class eN extends em {
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
        return ew({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: e_(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: ed(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : f.rbe.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version,
        });
    }
}
class eC extends eN {}
class eO extends em {
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
            availableTags: null != e.available_tags ? eu(e.available_tags) : [],
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
            iconEmoji: e_(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: ed(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : f.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, _.pp)(n, eO);
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
let eL = new eR(),
    ey = new eR();
class eD extends em {
    static sortRecipients(e, t) {
        let n = eL.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (ey.getOrCompute(e.id) ^ n) - (ey.getOrCompute(t.id) ^ n));
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
            (this.rawRecipients = eD.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(e.recipients ?? [])].sort(I.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = e.safetyWarnings ?? []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
    static fromServer(e) {
        let t = eD.sortRecipients(e.recipients, e.id),
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
                nicks: ec(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: t,
                recipients: t.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : f.rbe.DM,
            };
        return (0, _.pp)(n, eD);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === f.rbe.DM && null != e && !0 === e.system;
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
                    .sort(I.default.compare),
            );
            return null == t ? n : n.set("nicks", { ...n.nicks, [e]: t });
        }
    }
    removeRecipient(e) {
        return this.set("recipients", r().without(this.recipients, e));
    }
}
class ev extends em {
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
            type: null != e.type ? e.type : f.rbe.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
            lastNonMessageActivityTimestamp: e.last_non_message_activity_timestamp,
        };
        return (0, _.pp)(n, ev);
    }
}
let eb = {
    [f.rbe.DM]: eD.fromServer,
    [f.rbe.GROUP_DM]: eD.fromServer,
    [f.rbe.GUILD_TEXT]: eN.fromServer,
    [f.rbe.GUILD_VOICE]: eS.fromServer,
    [f.rbe.GUILD_STAGE_VOICE]: eS.fromServer,
    [f.rbe.GUILD_CATEGORY]: eN.fromServer,
    [f.rbe.GUILD_ANNOUNCEMENT]: eN.fromServer,
    [f.rbe.GUILD_STORE]: eN.fromServer,
    [f.rbe.ANNOUNCEMENT_THREAD]: ev.fromServer,
    [f.rbe.PUBLIC_THREAD]: ev.fromServer,
    [f.rbe.PRIVATE_THREAD]: ev.fromServer,
    [f.rbe.MEDIA_THREAD]: ev.fromServer,
    [f.rbe.GUILD_DIRECTORY]: eN.fromServer,
    [f.rbe.GUILD_FORUM]: eO.fromServer,
    [f.rbe.GUILD_MEDIA]: eO.fromServer,
    [f.rbe.GUILD_SPACE]: eN.fromServer,
    [f.rbe.GUILD_APP]: eN.fromServer,
};
function eM(e, t) {
    return (eb[e.type ?? f.rbe.GUILD_TEXT] ?? eg.fromServer)(e, t);
}
function eP(e) {
    return eG(e);
}
let eU = {
    [f.rbe.DM]: class extends eD {},
    [f.rbe.GROUP_DM]: class extends eD {},
    [f.rbe.GUILD_TEXT]: eC,
    [f.rbe.GUILD_VOICE]: class extends eS {},
    [f.rbe.GUILD_STAGE_VOICE]: class extends eS {},
    [f.rbe.GUILD_CATEGORY]: class extends eN {},
    [f.rbe.GUILD_ANNOUNCEMENT]: class extends eN {},
    [f.rbe.GUILD_STORE]: class extends eN {},
    [f.rbe.ANNOUNCEMENT_THREAD]: ev,
    [f.rbe.PUBLIC_THREAD]: ev,
    [f.rbe.PRIVATE_THREAD]: ev,
    [f.rbe.MEDIA_THREAD]: ev,
    [f.rbe.GUILD_DIRECTORY]: class extends eN {},
    [f.rbe.GUILD_FORUM]: eO,
    [f.rbe.GUILD_MEDIA]: eO,
    [f.rbe.GUILD_SPACE]: class extends eN {},
    [f.rbe.GUILD_APP]: class extends eN {},
};
function ew(e) {
    let t = eU[e.type ?? f.rbe.GUILD_TEXT] ?? eg;
    return (0, _.pp)(e, t);
}
function eG(e) {
    return new (eU[e.type ?? f.rbe.GUILD_TEXT] ?? eg)(ep(e));
}
