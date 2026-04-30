n.d(t, { iV: () => e2, OC: () => e3, Ay: () => e8 }), n(938796);
var s = n(627968),
    i = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(448761),
    d = n(665260),
    o = n(17928),
    u = n(803805),
    c = n(52133),
    h = n(640238),
    p = n(834730),
    m = n(720149),
    g = n(735824),
    A = n(298481),
    f = n(121401),
    I = n(509282),
    E = n(909338),
    x = n(948729),
    S = n(724651),
    _ = n(175671),
    b = n(510790),
    v = n(167189),
    C = n(175335),
    y = n(390248),
    M = n(282108),
    T = n(33358),
    w = n(704400),
    j = n(496376),
    R = n(744270),
    P = n(643612),
    N = n(613760),
    L = n(229527),
    O = n(870136),
    k = n(33525),
    D = n(484724),
    B = n(537717),
    F = n(21599),
    U = n(178879),
    H = n(118331),
    V = n(398817),
    G = n(857071),
    Y = n(384231),
    W = n(46054),
    z = n(731068),
    X = n(619517),
    K = n(207133),
    J = n(230090),
    $ = n(269849),
    q = n(704413),
    Q = n(537039),
    Z = n(711038),
    ee = n(376708),
    et = n(739377),
    en = n(302031),
    es = n(899894),
    ei = n(581034),
    er = n(50777),
    el = n(68935),
    ea = n(482719),
    ed = n(406704),
    eo = n(494216),
    eu = n(253932),
    ec = n(383233),
    eh = n(495544),
    ep = n(696451),
    em = n(834942),
    eg = n(576705),
    eA = n(287809),
    ef = n(644447),
    eI = n(954571),
    eE = n(927813),
    ex = n(659674),
    eS = n(935208),
    e_ = n(998218),
    eb = n(5095),
    ev = n(294520),
    eC = n(320095),
    ey = n(863439),
    eM = n(143413),
    eT = n(707985),
    ew = n(573034),
    ej = n(875033),
    eR = n(226311),
    eP = n(164664),
    eN = n(439401),
    eL = n(677887),
    eO = n(588968),
    ek = n(266620),
    eD = n(860227),
    eB = n(564107),
    eF = n(918913),
    eU = n(34337),
    eH = n(382807),
    eV = n(394839),
    eG = n(96782),
    eY = n(930390),
    eW = n(861986),
    ez = n(346462),
    eX = n(343552),
    eK = n(581619),
    eJ = n(652215),
    e$ = n(985018),
    eq = n(416620);
let eQ = [eJ.Auw.GIFV],
    eZ = 15 * eE.A.Millis.MINUTE,
    e0 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: r, flags: l } = e,
            a = (0, d.Lt)(l, z.e5.IS_ANIMATED);
        return null != i && null != r && (X.bp.test(n) || (a && (X.P8.test(n) || X.p4.test(n))))
            ? (0, s.jsx)(eN.A, { width: i, height: r, src: n, url: t, format: u.TL.IMAGE, className: eq.jj })
            : null;
    };
class e2 extends i.Component {
    static defaultProps = { renderEmbeds: !0, compact: !1 };
    state = { showSuppressModal: !1, showRemoveAttachmentModal: !1, attachmentToDelete: null };
    getAcceptInviteContext = (e, t) => {
        let { channel: n, message: s } = this.props;
        return {
            location: e,
            location_guild_id: n.getGuildId(),
            location_channel_id: n.id,
            location_channel_type: n.type,
            location_message_id: s.id,
            ...(null != t ? { invite_instance_id: (0, F._U)(t, s.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e0.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, s;
        let { channel: i, message: r, poll: l } = this.props,
            { channel: a, message: d, poll: o } = e;
        return (
            !(0, c.A)(this.state, t) ||
            !(0, c.A)(this.props, e, ["message", "channel"]) ||
            i.type !== a.type ||
            o !== l ||
            d.codedLinks !== r.codedLinks ||
            d.flags !== r.flags ||
            d.giftCodes !== r.giftCodes ||
            d.attachments !== r.attachments ||
            d.embeds !== r.embeds ||
            d.components !== r.components ||
            d.activity !== r.activity ||
            ((n = d.reactions) !== (s = r.reactions) &&
                (n.length !== s.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: i, burst_count: r } = e,
                            { emoji: l, count: a, burst_count: d } = s[t];
                        return r !== d || i !== a || n.id !== l.id || n.name !== l.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            i = null;
        switch (n) {
            case eb.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(j.A, { messageId: e.id, channelId: t.id });
                break;
            case eb.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsx)(A.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: eq.od, children: i });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i, url: r } = t;
                  if (n === v.I.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, s.jsx)(
                                eO.A,
                                { code: i, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                i,
                            )
                          : null;
                  if (n === v.I.TEMPLATE) return (0, s.jsx)(B.A, { code: i }, i);
                  if (n === v.I.EVENT) return (0, s.jsx)(D.A, { code: i }, i);
                  if (n === v.I.CHANNEL_LINK) return (0, s.jsx)(ew.A, { code: i, message: e }, i);
                  if (n === v.I.APP_DIRECTORY_PROFILE) return (0, s.jsx)(N.A, { code: i, message: e }, i);
                  else if (n === v.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: l } = (0, E.N)(r);
                      return (0, s.jsx)(
                          g.A,
                          { applicationId: i, message: e, referrerId: t, customId: n, linkId: l },
                          i,
                      );
                  } else if (n === v.I.GUILD_PRODUCT) return (0, s.jsx)(k.A, { code: i }, i);
                  else if (n === v.I.SERVER_SHOP) return (0, s.jsx)(C.A, { guildId: i }, i);
                  else if (n === v.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, s.jsx)(er.A, { guildId: t, skuId: e, channel: n }, i);
                  } else if (n === v.I.QUESTS_EMBED) return (0, s.jsx)(Z.A, { questId: i }, i);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT) return (0, s.jsx)(I.G, { appId: i, message: e }, i);
                  else if (n === v.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, f.u)(i);
                      return null == t
                          ? null
                          : (0, s.jsx)(I.$, { appId: t.applicationId, skuId: t.skuId, message: e }, i);
                  } else if (n === v.I.APP_OAUTH2_LINK) return (0, s.jsx)(x.A, { applicationId: i, message: e }, i);
                  else if (n === v.I.COLLECTIBLES_SHOP) return null;
                  else if (n === v.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: r, content: l, giftInfo: a } = e,
            d = eA.default.getCurrentUser();
        return null != d && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: eq.zv,
                          children: (0, s.jsx)(eL.A, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: d,
                              type: r,
                              content: l,
                              giftInfo: a,
                          }),
                      },
                      e,
                  ),
              )
            : null;
    }
    renderReactions(e) {
        let {
            disableReactionCreates: t,
            disableReactionReads: n,
            disableReactionUpdates: i,
            isLurking: r,
            isPendingMember: l,
            channel: a,
            forceAddReactions: d,
        } = this.props;
        return n
            ? null
            : (0, s.jsx)(eY.A, {
                  message: e,
                  channel: a,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: r,
                  isPendingMember: l,
                  forceAddReactions: d,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: i,
                inlineAttachmentMedia: r,
                onMediaItemContextMenu: l,
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: o,
            } = this.props,
            { attachments: u, flags: c } = e;
        if (0 === u.length || e.isPoll() || (0, ec._c)(e)) return null;
        let h = u.filter((e) => null == e.flags || !(0, d.Lt)(e.flags, eJ.sbO.IS_THUMBNAIL));
        if (0 === h.length) return null;
        let p = h
                .map((t) => ({
                    ...(0, z.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, d.Lt)(t.flags ?? 0, eJ.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: m, srcToHandlePreloadImage: g } = (0, $.o)(
                p,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: o },
                "Media Mosaic",
            ),
            A = p.length > 1,
            f = (0, d.Lt)(c, eJ.pr7.IS_VOICE_MESSAGE);
        function I(e, t) {
            return (0, ev.iW)(e.originalItem, t);
        }
        let E = h.map((s) => {
            let a = (0, z.aG)(s),
                d = {
                    message: e,
                    item: (0, eG.rC)(s, r),
                    autoPlayGif: n,
                    canRemoveItem: i && (h.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: I,
                    onContextMenu:
                        null != l
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), l(e, a);
                              }
                            : void 0,
                    renderAudioComponent: f ? ek.SX : ek.Nj,
                    renderImageComponent: ek.Cr,
                    renderVideoComponent: ek.I1,
                    renderPlaintextFilePreview: ek.R6,
                    renderGenericFileComponent: ek.UB,
                    onPlay: (e, n, i) => {
                        eI.default.track(eJ.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: s.content_type,
                            flags: s.flags,
                            size: s.size,
                            duration: i,
                        });
                    },
                    gifFavoriteButton: e1(a),
                },
                o = (0, ef.E)({ proxyURL: s.proxy_url, url: s.url });
            return o in m && A && ((d.onClick = m[o]), (d.handlePreloadImage = g[o])), d;
        });
        return (0, s.jsx)(eV.A, { items: E });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: r,
                inlineEmbedMedia: l,
                canSuppressEmbeds: a,
                hasSpoilerEmbeds: d,
                enabledContentHarmTypeFlags: o,
                shouldAgeVerify: u,
            } = this.props,
            c = (0, ev.sC)(e, i, d, o);
        if (e.type === eJ.Auw.GIFT) return null;
        let h = eQ.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            P.G.Provider,
            {
                value: (0, eX.b)(h, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, s.jsx)(_.Ay, {
                    embed: e,
                    obscureReason: c ?? void 0,
                    autoPlayGif: r,
                    hideMedia: !l,
                    allowFullScreen: !this.props.disableComponentInteractivity,
                    onSuppressEmbed: a ? this.handleEmbedSuppressed : void 0,
                    renderTitle: this.renderEmbedTitle,
                    renderDescription: this.renderEmbedDescription,
                    message: i,
                    embedIndex: t,
                    shouldAgeVerify: u ?? !1,
                    ...n,
                }),
            },
            e.id,
        );
    };
    renderEmbedTitle = (e, t) =>
        e.type !== eJ.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? W.A.parseEmbedTitleWithoutLinks : W.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eJ.Auw.RICH
            ? W.A.parse(t, !0, {
                  channelId: this.props.channel.id,
                  allowLinks: !0,
                  allowEmojiLinks: !0,
                  allowList: this.props.showListsAndHeaders,
                  allowHeading: !n && this.props.showListsAndHeaders,
                  previewLinkTarget: this.props.showMaskedLinks,
              })
            : t;
    handleEmbedSuppressed = (e) => {
        let { channel: t, message: n } = this.props;
        e.shiftKey ? m.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
    };
    handleRemoveAttachment = (e) => {
        let t = e.originalItem;
        this.setState({ showRemoveAttachmentModal: !0, attachmentToDelete: t });
    };
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      eK.z.has(t.type) ||
                      (0, ex.p6)(t) ||
                      ((0, U.f)(t) && !(0, H.d)(e)) ||
                      (0, ex.V)(t) ||
                      (0, ex.G8)(t)
                  )
                      return null;
                  if (t.type === eJ.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var i = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: r,
                              shouldHideMediaOptions: l,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: d,
                              hasSpoilerEmbeds: o,
                          } = this.props,
                          u = (0, ev.sC)(t, e, o, r),
                          c = function () {
                              let o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  ej.A,
                                  {
                                      components: t.components ?? [],
                                      message: e,
                                      gifAutoPlay: n,
                                      getGifFavButton: e1,
                                      getOnMediaItemContextMenu:
                                          null == a
                                              ? void 0
                                              : (e) => (t) => {
                                                    t.stopPropagation(), t.preventDefault(), a?.(t, e);
                                                },
                                      shouldHideMediaOptions: l,
                                      enabledContentHarmTypeFlags: r,
                                      onSuppressEmbed: d ? i.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: o,
                                  },
                                  t.id,
                              );
                          };
                      return null != u
                          ? (0, s.jsx)(
                                en.Ay,
                                {
                                    type: en.Ay.Types.EMBED,
                                    reason: u,
                                    isSingleMosaicItem: !0,
                                    containerStyles: { width: "fit-content" },
                                    children: (e) => c(e),
                                },
                                t.id,
                            )
                          : c();
                  }
                  let r = { renderImageComponent: eU.LL, renderVideoComponent: eU.$o, renderLinkComponent: eU.bU };
                  if (
                      t.type === eJ.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = e_.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let l = i.pathname.split("/")[3];
                          if (null != l)
                              return (0, s.jsx)(
                                  ez.A,
                                  { skuId: l, renderFallback: () => this.renderEmbed(t, n, r, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: i,
            disableComponentInteractivity: r,
            onMediaItemContextMenu: l,
        } = this.props;
        return (0, s.jsx)(eB.N, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == l
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), l?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(V.Ay, { message: e, shouldDisableInteractiveComponents: r }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, s.jsx)(eF.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eJ.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(S.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, eC.ec)(e)
            ? (0, s.jsx)(eP.A, {
                  message: e,
                  onDeleteMessage: () => {
                      m.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, el.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(ea.A, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eJ.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(eo.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eJ.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eS.default.extractTimestamp(e.id) >= eZ)
        )
            return (0, s.jsx)("div", { className: eq.xM, children: e$.intl.string(e$.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(h.M, {
            dismissable: !0,
            header: e$.intl.string(e$.t.VL1KOk),
            confirmText: e$.intl.string(e$.t.YEHppG),
            cancelText: e$.intl.string(e$.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, s.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eq.IX,
                    children: e$.intl.string(e$.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(p.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: e$.intl.string(e$.t["5j2by3"]),
                }),
            ],
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, s.jsx)(h.M, {
                  dismissable: !0,
                  header: e$.intl.string(e$.t.CbTIEo),
                  confirmText: e$.intl.string(e$.t.kFwAsa),
                  cancelText: e$.intl.string(e$.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let s = t.attachments.filter((e) => e.id !== n.id);
                      m.A.patchMessageAttachments(e.id, t.id, s),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, s.jsx)(p.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eq.IX,
                      children: e$.intl.string(e$.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== a.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(eH.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(eR.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eJ.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(J.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eJ.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(es.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eJ.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(ei.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, M.KM)(e)
            ? (0, s.jsx)(w.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)(Q.A, { message: e, poll: t, className: eq.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(b.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, ee.Mn)(e, this.props.channel)) return (0, s.jsx)(et.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, ee.Mn)(e, this.props.channel)) return (0, s.jsx)(R.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(eW.A, { message: e, compact: t, location: eW.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: r, showRemoveAttachmentModal: a } = this.state,
            d = this.renderEditedTag(t, i),
            o = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            c = this.renderAttachments(t),
            h = this.renderCtaButton(),
            p = this.renderEmbeds(t),
            m = this.renderActivityInvite(t),
            g = this.renderReactions(t),
            A = this.renderPublishBump(t),
            f = this.renderEphemeralAccessories(t),
            I = this.renderStickersAccessories(t),
            E = this.renderThreadAccessories(t),
            x = this.renderComponentAccessories(t),
            S = this.renderThreadRoleMentionWarning(t),
            _ = this.renderEmbeddedApplicationInstanceEmbed(t),
            b = this.renderInteractionPremiumUpsell(t),
            v = this.renderMediaPostEmbeds(t),
            C = this.renderSafetyPolicyNotice(t),
            y = this.renderSafetySystemNotification(t),
            M = this.renderMediaObscureNotice(t),
            T = this.renderPoll(t, n),
            w = this.renderForwardedMessage(t),
            j = this.renderReportedMessage(t),
            R = this.renderShareClientTheme(t);
        return null == o &&
            null == c &&
            null == p &&
            null == m &&
            null == g &&
            null == u &&
            null == A &&
            null == f &&
            null == I &&
            null == E &&
            null == x &&
            null == _ &&
            null == S &&
            null == v &&
            null == C &&
            null != b &&
            null == T &&
            null == w &&
            null == j &&
            null == R
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, eD.XL)(t),
                  className: l()(e, eq.kL),
                  children: [
                      j,
                      w,
                      S,
                      T,
                      R,
                      o,
                      u,
                      v,
                      c,
                      h,
                      p,
                      M,
                      m,
                      I,
                      x,
                      _,
                      b,
                      d,
                      g,
                      A,
                      f,
                      r && this.renderSuppressConfirmModal(),
                      a && this.renderRemoveAttachmentConfirmModal(),
                      E,
                      C,
                      y,
                  ],
              });
    }
}
function e8(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: r, isMessageSnapshot: l } = e,
        a = (0, o.bG)([eh.default], () => eh.default.getId()),
        u = eu.X6.useSetting(),
        c = eu.hD.useSetting(),
        h = eu.rs.useSetting() && !(0, eM.A)(e.message),
        p = eu.jW.useSetting() && !1 !== e.renderReactions,
        m = eu.kt.useSetting(),
        g = (0, o.bG)([em.A], () => null == n.guild_id || em.A.canChatInGuild(n.guild_id), [n]),
        A = (0, o.bG)([G.A], () => null != n.guild_id && G.A.isLurking(n.guild_id), [n]),
        f = (0, o.bG)([ep.Ay, eA.default], () => {
            let e = eA.default.getCurrentUser();
            return (null != n.guild_id && null != e ? ep.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: I, canManageMessages: E } = (0, o.cf)(
            [eg.A],
            () => ({
                canAddNewReactions: g && eg.A.can(eJ.xBc.ADD_REACTIONS, n),
                canManageMessages: eg.A.can(eJ.xBc.MANAGE_MESSAGES, n),
            }),
            [g, n],
        ),
        x = (0, L.ix)(n.guild_id),
        [, S] = (0, O.c)(n.guild_id),
        _ = (0, ed.Id)(n),
        b =
            (a === i.author.id || E) &&
            i.author.id !== eJ.oIV &&
            !1 !== r &&
            !(0, d.Lt)(i.flags, eJ.pr7.EPHEMERAL) &&
            _ &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        v = a === i.author.id && _ && !l,
        C = i.author.id === a,
        M = i.isFirstMessageInForumPost(n),
        w = (0, eT.A)({
            channel: n,
            canChat: g,
            renderReactions: p,
            canAddNewReactions: I,
            isLurking: A,
            communicationDisabled: S,
            isActiveChannelOrUnarchivableThread: _,
            isAutomodQuarantined: x,
        }),
        j = (0, Y.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        R = (0, K.A)(n?.id),
        P = (0, q.A)(i),
        N = (0, T.P)(i),
        k = (0, ey.z)(n),
        D = (0, eb._f)(i.id, i.channel_id),
        B = (0, y._R)();
    return (0, s.jsx)(e2, {
        canSuppressEmbeds: b,
        canDeleteAttachments: v,
        ...w,
        disableReactionReads: !!M || w.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && k,
        hasBailedAst: e.hasBailedAst,
        isLurking: A && g,
        isPendingMember: f && g,
        isCurrentUser: C,
        inlineAttachmentMedia: u,
        inlineEmbedMedia: c,
        renderEmbeds: h,
        gifAutoPlay: m,
        canRenderReferralEmbed: n.isDM(),
        poll: P,
        showListsAndHeaders: j,
        showMaskedLinks: j,
        shouldHideMediaOptions: R,
        enabledContentHarmTypeFlags: N,
        ctaButtonType: D,
        shouldAgeVerify: B,
    });
}
let e3 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: r = !1,
            disableReactionCreates: l = !0,
            disableReactionUpdates: a = !0,
            disableComponentInteractivity: d = !0,
            ...o
        } = e,
        u = eu.X6.useSetting(),
        c = eu.hD.useSetting(),
        h = eu.rs.useSetting(),
        p = eu.kt.useSetting(),
        m = (0, Y.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        g = (0, K.A)(n?.id),
        A = (0, T.P)(t),
        f = (0, eb._f)(t.id, t.channel_id),
        I = (0, q.A)(t);
    return (0, s.jsx)(e2, {
        ...o,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: l,
        disableReactionUpdates: a,
        disableComponentInteractivity: d,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: r,
        inlineAttachmentMedia: u,
        inlineEmbedMedia: c,
        renderEmbeds: h,
        gifAutoPlay: p,
        poll: I,
        showListsAndHeaders: m,
        showMaskedLinks: m,
        shouldHideMediaOptions: g,
        enabledContentHarmTypeFlags: A,
        ctaButtonType: f,
    });
};
