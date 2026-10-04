(n.d(t, {
    A_: () => S,
    B4: () => ei,
    Do: () => M,
    Gw: () => U,
    IY: () => Q,
    JT: () => X,
    LE: () => J,
    Le: () => j,
    Lt: () => eb,
    MK: () => G,
    OU: () => D,
    OY: () => eU,
    QE: () => b,
    TA: () => eI,
    UE: () => eP,
    XD: () => R,
    YB: () => eg,
    ZV: () => ea,
    Z_: () => z,
    ay: () => v,
    bk: () => Z,
    cq: () => ev,
    createChannelRecord: () => ex,
    fT: () => K,
    gV: () => B,
    ig: () => H,
    jb: () => eS,
    k: () => et,
    k3: () => x,
    ke: () => C,
    nA: () => eO,
    nO: () => ed,
    nb: () => ee,
    oH: () => O,
    oI: () => el,
    oh: () => eG,
    p6: () => en,
    pQ: () => k,
    pd: () => ef,
    tr: () => g,
    uL: () => L,
    wE: () => Y,
    xR: () => q,
    zy: () => y,
}),
    n(938796));
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
    E = n(518417),
    A = n(233993),
    h = n(446600),
    I = n(403362),
    f = n(935208),
    p = n(652215),
    T = n(746080);
let m = new Set([
    p.rbe.GUILD_TEXT,
    p.rbe.GUILD_ANNOUNCEMENT,
    p.rbe.GUILD_STORE,
    p.rbe.ANNOUNCEMENT_THREAD,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
    p.rbe.GUILD_DIRECTORY,
    p.rbe.GUILD_FORUM,
    p.rbe.GUILD_MEDIA,
    p.rbe.GUILD_APP,
    p.rbe.DM,
    p.rbe.GROUP_DM,
]);
function g(e) {
    return m.has(e);
}
let S = new Set([
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
        p.rbe.GUILD_SPACE,
        p.rbe.MEDIA_THREAD,
        p.rbe.GUILD_APP,
    ]),
    N = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.ANNOUNCEMENT_THREAD,
        p.rbe.PUBLIC_THREAD,
        p.rbe.PRIVATE_THREAD,
        p.rbe.GUILD_APP,
    ]);
function C(e) {
    return N.has(e);
}
let O = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.GUILD_APP,
    ]),
    R = new Set([p.rbe.GUILD_TEXT]),
    L = new Set([
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
        p.rbe.GUILD_SPACE,
        p.rbe.GUILD_APP,
    ]);
function y(e) {
    return L.has(e);
}
(p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA, p.rbe.GUILD_APP);
let D = new Set([p.rbe.GUILD_VOICE, p.rbe.GUILD_STAGE_VOICE]);
function v(e) {
    return "SELECTABLE" !== e && D.has(e);
}
function b(e) {
    var t;
    return v(e) || ((t = e), W.has(t));
}
let M = new Set([p.rbe.GUILD_STAGE_VOICE]),
    P = new Set([p.rbe.DM, p.rbe.GROUP_DM]);
function U(e) {
    return P.has(e);
}
let w = new Set([p.rbe.GROUP_DM]);
function G(e) {
    return w.has(e);
}
let x = new Set([
    p.rbe.DM,
    p.rbe.GROUP_DM,
    p.rbe.GUILD_TEXT,
    p.rbe.GUILD_ANNOUNCEMENT,
    p.rbe.ANNOUNCEMENT_THREAD,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
    p.rbe.GUILD_APP,
]);
function k(e) {
    return x.has(e);
}
let F = new Set([
    p.rbe.DM,
    p.rbe.GROUP_DM,
    p.rbe.GUILD_VOICE,
    p.rbe.GUILD_STAGE_VOICE,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
]);
function B(e) {
    return F.has(e);
}
let V = new Set([
    p.rbe.GUILD_TEXT,
    p.rbe.GUILD_ANNOUNCEMENT,
    p.rbe.ANNOUNCEMENT_THREAD,
    p.rbe.PUBLIC_THREAD,
    p.rbe.PRIVATE_THREAD,
    p.rbe.GUILD_DIRECTORY,
    p.rbe.GUILD_FORUM,
    p.rbe.GUILD_MEDIA,
    p.rbe.GUILD_APP,
    p.rbe.DM,
    p.rbe.GROUP_DM,
]);
function H(e) {
    return V.has(e);
}
let j = new Set([p.rbe.ANNOUNCEMENT_THREAD, p.rbe.PUBLIC_THREAD, p.rbe.PRIVATE_THREAD, p.rbe.MEDIA_THREAD]),
    W = new Set([p.rbe.PUBLIC_THREAD, p.rbe.PRIVATE_THREAD]),
    Y = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA, p.rbe.GUILD_APP]);
function K(e) {
    return j.has(e);
}
let $ = new Set([
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
    p.rbe.GUILD_APP,
]);
function z(e) {
    return $.has(e);
}
let X = new Set([
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
        p.rbe.GUILD_APP,
    ]),
    Z = new Set([
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_CATEGORY,
        p.rbe.GUILD_STORE,
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.GUILD_DIRECTORY,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.GUILD_APP,
    ]),
    q = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT]),
    Q = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA, p.rbe.GUILD_APP]),
    J = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.GUILD_APP,
    ]),
    ee = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_MEDIA,
        p.rbe.ANNOUNCEMENT_THREAD,
        p.rbe.PUBLIC_THREAD,
        p.rbe.PRIVATE_THREAD,
        p.rbe.GUILD_VOICE,
        p.rbe.GUILD_STAGE_VOICE,
        p.rbe.GUILD_APP,
    ]),
    et = new Set([p.rbe.PUBLIC_THREAD, p.rbe.PRIVATE_THREAD, p.rbe.GUILD_VOICE, p.rbe.GUILD_STAGE_VOICE]),
    en = new Set([p.rbe.GUILD_TEXT, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA]),
    ei = new Set([
        p.rbe.GUILD_TEXT,
        p.rbe.GUILD_CATEGORY,
        p.rbe.GUILD_FORUM,
        p.rbe.GUILD_ANNOUNCEMENT,
        p.rbe.GUILD_APP,
    ]);
(p.rbe.GUILD_TEXT, p.rbe.GUILD_ANNOUNCEMENT, p.rbe.GUILD_FORUM, p.rbe.GUILD_VOICE, p.rbe.GUILD_APP);
let er = new Set([p.rbe.GUILD_APP]);
function ea(e) {
    return (0, I.Eo)(e, er);
}
let es = new Set([...er]);
function el(e) {
    return (0, I.Eo)(e, es);
}
let eo = new Set([...er, p.rbe.GUILD_FORUM, p.rbe.GUILD_MEDIA]);
function ed(e) {
    return !eo.has(e);
}
function ec(e) {
    let t = {};
    return (
        e?.forEach((e) => {
            t[e.id] = { id: e.id, type: e.type, allow: c.iu(e.allow), deny: c.iu(e.deny) };
        }),
        t
    );
}
function eu(e) {
    return null == e ? {} : r().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function e_(e) {
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
function eE(e) {
    return null != e ? { id: e.id, name: e.name } : void 0;
}
let eA = c.kg(p.xBc.CONNECT, p.xBc.VIEW_CHANNEL),
    eh = p.hVb.CONNECT | p.hVb.VIEW_CHANNEL;
function eI(e) {
    return v(e) ? eA : p.xBc.VIEW_CHANNEL;
}
function ef(e) {
    return v(e) ? eh : p.hVb.VIEW_CHANNEL;
}
class ep {
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
            (this.type = e.type ?? p.rbe.GUILD_TEXT),
            (this.name = e.name ?? ""),
            (this.guild_id = e.guild_id ?? null));
    }
}
function eT(e) {
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
let em = Object.freeze({});
class eg extends ep {
    get permissionOverwrites() {
        return this.permissionOverwrites_ ?? em;
    }
    get topic() {
        return this.type === p.rbe.GUILD_APP && null != (0, E.B9)(this.topic_) ? "" : (this.topic_ ?? "");
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
        return this.merge(eT({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = eT(e);
        for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && h.A.isPublic(this.id)) return A.Uu;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return p.kvI.APPLICATION_MANAGEABLE.has(this.type) && null != this.application_id;
    }
    isPrivate() {
        return U(this.type);
    }
    isGroupDM() {
        return this.type === p.rbe.GROUP_DM;
    }
    isMultiUserDM() {
        return G(this.type);
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
        return this.hasFlag(T.lx.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        return j.has(this.type) && this.threadMetadata?.archived === !0 && this.threadMetadata?.locked === !0;
    }
    isForumPost() {
        return (
            this.type === p.rbe.PUBLIC_THREAD &&
            null != this.parentChannelThreadType &&
            p.kvI.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
        );
    }
    isMediaThread() {
        return this.type === p.rbe.MEDIA_THREAD;
    }
    isRingable() {
        return p.kvI.CALLABLE.has(this.type) || this.type === p.rbe.GUILD_VOICE;
    }
    isCategory() {
        return this.type === p.rbe.GUILD_CATEGORY;
    }
    isVocal() {
        return B(this.type);
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
        return K(this.type);
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
        return this.hasFlag(T.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    isObfuscated() {
        return this.hasFlag(T.lx.OBFUSCATED);
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
        return this.hasFlag(T.lx.IS_MODERATOR_REPORT_CHANNEL);
    }
    isSpoilerChannel() {
        return this.hasFlag(T.lx.IS_SPOILER_CHANNEL);
    }
    isGameInvitesChannel() {
        return this.hasFlag(T.lx.IS_GAME_INVITES_CHANNEL);
    }
    get accessPermissions() {
        return eI(this.type);
    }
    hasFlag(e) {
        return (0, u.Lt)(this.flags, e);
    }
    get isHDStreamSplashed() {
        return null != this.hdStreamingUntil && new Date(this.hdStreamingUntil) > new Date();
    }
}
class eS extends eg {
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
            availableTags: null != e.available_tags ? e_(e.available_tags) : void 0,
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
            iconEmoji: eE(e.icon_emoji),
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
            nicks: eu(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: ec(e.permission_overwrites),
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
        return (0, _.pp)(n, eS);
    }
}
class eN extends eg {
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
        return eG({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: eE(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: ec(e.permission_overwrites),
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
class eC extends eg {
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
        return eG({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: t ?? e.guild_id ?? null,
            iconEmoji: eE(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: ec(e.permission_overwrites),
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
class eO extends eC {}
class eR extends eg {
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
            availableTags: null != e.available_tags ? e_(e.available_tags) : [],
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
            iconEmoji: eE(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: e.name ?? "",
            nsfw_: e.nsfw ?? !1,
            parent_id: e.parent_id,
            permissionOverwrites_: ec(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user ?? 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : p.rbe.GUILD_TEXT,
            version: e.version,
        };
        return (0, _.pp)(n, eR);
    }
}
class eL {
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
let ey = new eL(),
    eD = new eL();
class ev extends eg {
    static sortRecipients(e, t) {
        let n = ey.getOrCompute(t);
        return [...(e ?? [])].sort((e, t) => (eD.getOrCompute(e.id) ^ n) - (eD.getOrCompute(t.id) ^ n));
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
            (this.rawRecipients = ev.sortRecipients(e.rawRecipients, this.id)),
            (this.recipients = [...(e.recipients ?? [])].sort(f.default.compare)),
            (this.recipientFlags = e.recipientFlags),
            (this.safetyWarnings = e.safetyWarnings ?? []),
            (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed));
    }
    static fromServer(e) {
        let t = ev.sortRecipients(e.recipients, e.id),
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
                nicks: eu(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: t,
                recipients: t.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : p.rbe.DM,
            };
        return (0, _.pp)(n, ev);
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
class eb extends eg {
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
            type: null != e.type ? e.type : p.rbe.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode,
            lastNonMessageActivityTimestamp: e.last_non_message_activity_timestamp,
        };
        return (0, _.pp)(n, eb);
    }
}
let eM = {
    [p.rbe.DM]: ev.fromServer,
    [p.rbe.GROUP_DM]: ev.fromServer,
    [p.rbe.GUILD_TEXT]: eC.fromServer,
    [p.rbe.GUILD_VOICE]: eN.fromServer,
    [p.rbe.GUILD_STAGE_VOICE]: eN.fromServer,
    [p.rbe.GUILD_CATEGORY]: eC.fromServer,
    [p.rbe.GUILD_ANNOUNCEMENT]: eC.fromServer,
    [p.rbe.GUILD_STORE]: eC.fromServer,
    [p.rbe.ANNOUNCEMENT_THREAD]: eb.fromServer,
    [p.rbe.PUBLIC_THREAD]: eb.fromServer,
    [p.rbe.PRIVATE_THREAD]: eb.fromServer,
    [p.rbe.MEDIA_THREAD]: eb.fromServer,
    [p.rbe.GUILD_DIRECTORY]: eC.fromServer,
    [p.rbe.GUILD_FORUM]: eR.fromServer,
    [p.rbe.GUILD_MEDIA]: eR.fromServer,
    [p.rbe.GUILD_SPACE]: eC.fromServer,
    [p.rbe.GUILD_APP]: eC.fromServer,
};
function eP(e, t) {
    let n = (0, E.hi)(e);
    return (eM[n.type ?? p.rbe.GUILD_TEXT] ?? eS.fromServer)(n, t);
}
function eU(e) {
    return ex(e);
}
let ew = {
    [p.rbe.DM]: class extends ev {},
    [p.rbe.GROUP_DM]: class extends ev {},
    [p.rbe.GUILD_TEXT]: eO,
    [p.rbe.GUILD_VOICE]: class extends eN {},
    [p.rbe.GUILD_STAGE_VOICE]: class extends eN {},
    [p.rbe.GUILD_CATEGORY]: class extends eC {},
    [p.rbe.GUILD_ANNOUNCEMENT]: class extends eC {},
    [p.rbe.GUILD_STORE]: class extends eC {},
    [p.rbe.ANNOUNCEMENT_THREAD]: eb,
    [p.rbe.PUBLIC_THREAD]: eb,
    [p.rbe.PRIVATE_THREAD]: eb,
    [p.rbe.MEDIA_THREAD]: eb,
    [p.rbe.GUILD_DIRECTORY]: class extends eC {},
    [p.rbe.GUILD_FORUM]: eR,
    [p.rbe.GUILD_MEDIA]: eR,
    [p.rbe.GUILD_SPACE]: class extends eC {},
    [p.rbe.GUILD_APP]: class extends eC {},
};
function eG(e) {
    let t = (0, E.UD)(e),
        n = ew[t.type ?? p.rbe.GUILD_TEXT] ?? eS;
    return (0, _.pp)(t, n);
}
function ex(e) {
    return new (ew[e.type ?? p.rbe.GUILD_TEXT] ?? eS)(eT(e));
}
