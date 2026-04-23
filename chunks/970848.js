n.d(t, { iV: () => e2, OC: () => e6, Ay: () => e8 }), n(938796);
var s = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(448761),
    o = n(665260),
    d = n(17928),
    u = n(803805),
    c = n(52133),
    h = n(640238),
    E = n(834730),
    p = n(720149),
    A = n(735824),
    m = n(298481),
    C = n(121401),
    g = n(509282),
    _ = n(909338),
    I = n(948729),
    S = n(724651),
    T = n(175671),
    f = n(510790),
    y = n(167189),
    R = n(175335),
    O = n(390248),
    b = n(282108),
    N = n(33358),
    x = n(704400),
    L = n(496376),
    v = n(744270),
    D = n(643612),
    P = n(613760),
    M = n(229527),
    j = n(870136),
    w = n(33525),
    U = n(484724),
    G = n(537717),
    k = n(21599),
    F = n(178879),
    B = n(118331),
    q = n(398817),
    V = n(857071),
    H = n(384231),
    Q = n(46054),
    X = n(731068),
    W = n(619517),
    Y = n(207133),
    K = n(230090),
    z = n(269849),
    J = n(704413),
    $ = n(537039),
    Z = n(160778),
    ee = n(376708),
    et = n(739377),
    en = n(302031),
    es = n(899894),
    ei = n(581034),
    el = n(50777),
    er = n(68935),
    ea = n(482719),
    eo = n(406704),
    ed = n(494216),
    eu = n(253932),
    ec = n(383233),
    eh = n(495544),
    eE = n(696451),
    ep = n(834942),
    eA = n(576705),
    em = n(287809),
    eC = n(644447),
    eg = n(954571),
    e_ = n(927813),
    eI = n(659674),
    eS = n(935208),
    eT = n(998218),
    ef = n(5095),
    ey = n(294520),
    eR = n(320095),
    eO = n(863439),
    eb = n(143413),
    eN = n(707985),
    ex = n(573034),
    eL = n(875033),
    ev = n(226311),
    eD = n(164664),
    eP = n(439401),
    eM = n(677887),
    ej = n(588968),
    ew = n(266620),
    eU = n(860227),
    eG = n(564107),
    ek = n(918913),
    eF = n(34337),
    eB = n(382807),
    eq = n(394839),
    eV = n(96782),
    eH = n(930390),
    eQ = n(861986),
    eX = n(346462),
    eW = n(343552),
    eY = n(581619),
    eK = n(652215),
    ez = n(985018),
    eJ = n(416620);
let e$ = [eK.Auw.GIFV],
    eZ = 15 * e_.A.Millis.MINUTE,
    e0 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, flags: r } = e,
            a = (0, o.Lt)(r, X.e5.IS_ANIMATED);
        return null != i && null != l && (W.bp.test(n) || (a && (W.P8.test(n) || W.p4.test(n))))
            ? (0, s.jsx)(eP.A, { width: i, height: l, src: n, url: t, format: u.TL.IMAGE, className: eJ.jj })
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
            ...(null != t ? { invite_instance_id: (0, k._U)(t, s.id) } : {}),
        };
    };
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e0.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, s;
        let { channel: i, message: l, poll: r } = this.props,
            { channel: a, message: o, poll: d } = e;
        return (
            !(0, c.A)(this.state, t) ||
            !(0, c.A)(this.props, e, ["message", "channel"]) ||
            i.type !== a.type ||
            d !== r ||
            o.codedLinks !== l.codedLinks ||
            o.flags !== l.flags ||
            o.giftCodes !== l.giftCodes ||
            o.attachments !== l.attachments ||
            o.embeds !== l.embeds ||
            o.components !== l.components ||
            o.activity !== l.activity ||
            ((n = o.reactions) !== (s = l.reactions) &&
                (n.length !== s.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: i, burst_count: l } = e,
                            { emoji: r, count: a, burst_count: o } = s[t];
                        return l !== o || i !== a || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            i = null;
        switch (n) {
            case ef.xC.MARK_AS_FALSE_POSITIVE:
                i = (0, s.jsx)(L.A, { messageId: e.id, channelId: t.id });
                break;
            case ef.xC.AGE_VERIFICATION_RETRY:
                i = (0, s.jsx)(m.A, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, s.jsx)("div", { className: eJ.od, children: i });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i, url: l } = t;
                  if (n === y.I.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, s.jsx)(
                                ej.A,
                                { code: i, message: e, getAcceptInviteContext: this.getAcceptInviteContext },
                                i,
                            )
                          : null;
                  if (n === y.I.TEMPLATE) return (0, s.jsx)(G.A, { code: i }, i);
                  if (n === y.I.EVENT) return (0, s.jsx)(U.A, { code: i }, i);
                  if (n === y.I.CHANNEL_LINK) return (0, s.jsx)(ex.A, { code: i, message: e }, i);
                  if (n === y.I.APP_DIRECTORY_PROFILE) return (0, s.jsx)(P.A, { code: i, message: e }, i);
                  else if (n === y.I.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: r } = (0, _.N)(l);
                      return (0, s.jsx)(
                          A.A,
                          { applicationId: i, message: e, referrerId: t, customId: n, linkId: r },
                          i,
                      );
                  } else if (n === y.I.GUILD_PRODUCT) return (0, s.jsx)(w.A, { code: i }, i);
                  else if (n === y.I.SERVER_SHOP) return (0, s.jsx)(R.A, { guildId: i }, i);
                  else if (n === y.I.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = i.split("-"),
                          { channel: n } = this.props;
                      return (0, s.jsx)(el.A, { guildId: t, skuId: e, channel: n }, i);
                  } else if (n === y.I.QUESTS_EMBED) return (0, s.jsx)(Z.A, { questId: i }, i);
                  else if (n === y.I.APP_DIRECTORY_STOREFRONT) return (0, s.jsx)(g.G, { appId: i, message: e }, i);
                  else if (n === y.I.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, C.u)(i);
                      return null == t
                          ? null
                          : (0, s.jsx)(g.$, { appId: t.applicationId, skuId: t.skuId, message: e }, i);
                  } else if (n === y.I.APP_OAUTH2_LINK) return (0, s.jsx)(I.A, { applicationId: i, message: e }, i);
                  else if (n === y.I.COLLECTIBLES_SHOP) return null;
                  else if (n === y.I.EXPERIMENT) return null;
                  else throw Error(`Unknown coded link type: ${n}`);
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: r, giftInfo: a } = e,
            o = em.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, s.jsx)(
                      "div",
                      {
                          className: eJ.zv,
                          children: (0, s.jsx)(eM.A, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: l,
                              content: r,
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
            isLurking: l,
            isPendingMember: r,
            channel: a,
            forceAddReactions: o,
        } = this.props;
        return n
            ? null
            : (0, s.jsx)(eH.A, {
                  message: e,
                  channel: a,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isPendingMember: r,
                  forceAddReactions: o,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: i,
                inlineAttachmentMedia: l,
                onMediaItemContextMenu: r,
                enabledContentHarmTypeFlags: a,
                shouldHideMediaOptions: d,
            } = this.props,
            { attachments: u, flags: c } = e;
        if (0 === u.length || e.isPoll() || (0, ec._c)(e)) return null;
        let h = u.filter((e) => null == e.flags || !(0, o.Lt)(e.flags, eK.sbO.IS_THUMBNAIL));
        if (0 === h.length) return null;
        let E = h
                .map((t) => ({
                    ...(0, X.Rr)(t, e),
                    original: t.url,
                    srcIsAnimated: (0, o.Lt)(t.flags ?? 0, eK.sbO.IS_ANIMATED),
                }))
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: p, srcToHandlePreloadImage: A } = (0, z.o)(
                E,
                { enabledContentHarmTypeFlags: a, shouldHideMediaOptions: d },
                "Media Mosaic",
            ),
            m = E.length > 1,
            C = (0, o.Lt)(c, eK.pr7.IS_VOICE_MESSAGE);
        function g(e, t) {
            return (0, ey.iW)(e.originalItem, t);
        }
        let _ = h.map((s) => {
            let a = (0, X.aG)(s),
                o = {
                    message: e,
                    item: (0, eV.rC)(s, l),
                    autoPlayGif: n,
                    canRemoveItem: i && (h.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: g,
                    onContextMenu:
                        null != r
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), r(e, a);
                              }
                            : void 0,
                    renderAudioComponent: C ? ew.SX : ew.Nj,
                    renderImageComponent: ew.Cr,
                    renderVideoComponent: ew.I1,
                    renderPlaintextFilePreview: ew.R6,
                    renderGenericFileComponent: ew.UB,
                    renderMosaicItemFooter: ew.YE,
                    onPlay: (e, n, i) => {
                        eg.default.track(eK.HAw.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                d = (0, eC.E)({ proxyURL: s.proxy_url, url: s.url });
            return d in p && m && ((o.onClick = p[d]), (o.handlePreloadImage = A[d])), o;
        });
        return (0, s.jsx)(eq.A, { items: _ });
    }
    renderEmbed = (e, t, n, i) => {
        let {
                gifAutoPlay: l,
                inlineEmbedMedia: r,
                canSuppressEmbeds: a,
                hasSpoilerEmbeds: o,
                enabledContentHarmTypeFlags: d,
                shouldAgeVerify: u,
            } = this.props,
            c = (0, ey.sC)(e, i, o, d);
        if (e.type === eK.Auw.GIFT) return null;
        let h = e$.includes(e.type) ? e.url : (e.image?.url ?? e.video?.url);
        return (0, s.jsx)(
            D.G.Provider,
            {
                value: (0, eW.b)(h, e.image, e.video, e.thumbnail, e.provider?.name),
                children: (0, s.jsx)(T.Ay, {
                    embed: e,
                    obscureReason: c ?? void 0,
                    autoPlayGif: l,
                    hideMedia: !r,
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
        e.type !== eK.Auw.RICH
            ? t
            : (null != e.url && "" !== e.url ? Q.A.parseEmbedTitleWithoutLinks : Q.A.parseEmbedTitle)(t, !0, {
                  channelId: this.props.channel.id,
              });
    renderEmbedDescription = (e, t, n) =>
        e.type === eK.Auw.RICH
            ? Q.A.parse(t, !0, {
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
        e.shiftKey ? p.A.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
                      eY.z.has(t.type) ||
                      (0, eI.p6)(t) ||
                      ((0, F.f)(t) && !(0, B.d)(e)) ||
                      (0, eI.V)(t) ||
                      (0, eI.G8)(t)
                  )
                      return null;
                  if (t.type === eK.Auw.COMPONENTS && null != t.components && t.components.length > 0) {
                      var i = this;
                      let {
                              gifAutoPlay: n,
                              enabledContentHarmTypeFlags: l,
                              shouldHideMediaOptions: r,
                              onMediaItemContextMenu: a,
                              canSuppressEmbeds: o,
                              hasSpoilerEmbeds: d,
                          } = this.props,
                          u = (0, ey.sC)(t, e, d, l),
                          c = function () {
                              let d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                              return (0, s.jsx)(
                                  eL.A,
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
                                      shouldHideMediaOptions: r,
                                      enabledContentHarmTypeFlags: l,
                                      onSuppressEmbed: o ? i.handleEmbedSuppressed : void 0,
                                      hiddenSpoiler: d,
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
                  let l = { renderImageComponent: eF.LL, renderVideoComponent: eF.$o, renderLinkComponent: eF.bU };
                  if (
                      t.type === eK.Auw.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let i = eT.A.safeParseWithQuery(t.url);
                      if (null != i && null != i.pathname) {
                          let r = i.pathname.split("/")[3];
                          if (null != r)
                              return (0, s.jsx)(
                                  eX.A,
                                  { skuId: r, renderFallback: () => this.renderEmbed(t, n, l, e) },
                                  t.id,
                              );
                      }
                  }
                  return this.renderEmbed(t, n, l, e);
              });
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let {
            gifAutoPlay: t,
            enabledContentHarmTypeFlags: n,
            shouldHideMediaOptions: i,
            disableComponentInteractivity: l,
            onMediaItemContextMenu: r,
        } = this.props;
        return (0, s.jsx)(eG.N, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), r?.(t, e);
                      },
            shouldHideMediaOptions: i,
            enabledContentHarmTypeFlags: n,
            children: (0, s.jsx)(q.Ay, { message: e, shouldDisableInteractiveComponents: l }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, s.jsx)(ek.A, { channel: t, message: e, hideParty: !1 });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eK.rbe.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, s.jsx)(S.A, { channelId: e.channel_id, messageId: e.id });
    }
    renderEphemeralAccessories(e) {
        return (0, eR.ec)(e)
            ? (0, s.jsx)(eD.A, {
                  message: e,
                  onDeleteMessage: () => {
                      p.A.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, er.o6)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) => (0, s.jsx)(ea.A, { channel: n, isInteracting: i, renderableSticker: e }, e.id));
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eK.pr7.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, s.jsx)(ed.A, { message: e, compact: this.props.compact });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eK.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eS.default.extractTimestamp(e.id) >= eZ)
        )
            return (0, s.jsx)("div", { className: eJ.xM, children: ez.intl.string(ez.t.ma8Rs0) });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, s.jsxs)(h.M, {
            dismissable: !0,
            header: ez.intl.string(ez.t.VL1KOk),
            confirmText: ez.intl.string(ez.t.YEHppG),
            cancelText: ez.intl.string(ez.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                p.A.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, s.jsx)(E.E, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eJ.IX,
                    children: ez.intl.string(ez.t["vXZ+Fo"]),
                }),
                (0, s.jsx)(E.E, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: ez.intl.string(ez.t["5j2by3"]),
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
                  header: ez.intl.string(ez.t.CbTIEo),
                  confirmText: ez.intl.string(ez.t.kFwAsa),
                  cancelText: ez.intl.string(ez.t["ETE/oC"]),
                  onCancel: () => this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null }),
                  onConfirm: () => {
                      let s = t.attachments.filter((e) => e.id !== n.id);
                      p.A.patchMessageAttachments(e.id, t.id, s),
                          this.setState({ showRemoveAttachmentModal: !1, attachmentToDelete: null });
                  },
                  children: (0, s.jsx)(E.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eJ.IX,
                      children: ez.intl.string(ez.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== a.l.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, s.jsx)(eB.A, { applicationId: t, guildId: this.props.channel.guild_id });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, s.jsx)(ev.A, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eK.Auw.POST_PREVIEW || null == t.url
                ? []
                : (0, s.jsx)(K.A, { embedUrl: t.url, message: e, channel: this.props.channel }, t.id),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.Auw.SAFETY_POLICY_NOTICE
            ? (0, s.jsx)(es.V, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.Auw.SAFETY_SYSTEM_NOTIFICATION
            ? (0, s.jsx)(ei.l, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, b.KM)(e)
            ? (0, s.jsx)(x.A, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t) return (0, s.jsx)($.A, { message: e, poll: t, className: eJ.PM });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, s.jsx)(f.f, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, ee.Mn)(e, this.props.channel)) return (0, s.jsx)(et.A, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, ee.Mn)(e, this.props.channel)) return (0, s.jsx)(v.A, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, s.jsx)(eQ.A, { message: e, compact: t, location: eQ.O.AFTER_ACCESSORIES });
    }
    render() {
        let { className: e, message: t, poll: n, compact: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: a } = this.state,
            o = this.renderEditedTag(t, i),
            d = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            c = this.renderAttachments(t),
            h = this.renderCtaButton(),
            E = this.renderEmbeds(t),
            p = this.renderActivityInvite(t),
            A = this.renderReactions(t),
            m = this.renderPublishBump(t),
            C = this.renderEphemeralAccessories(t),
            g = this.renderStickersAccessories(t),
            _ = this.renderThreadAccessories(t),
            I = this.renderComponentAccessories(t),
            S = this.renderThreadRoleMentionWarning(t),
            T = this.renderEmbeddedApplicationInstanceEmbed(t),
            f = this.renderInteractionPremiumUpsell(t),
            y = this.renderMediaPostEmbeds(t),
            R = this.renderSafetyPolicyNotice(t),
            O = this.renderSafetySystemNotification(t),
            b = this.renderMediaObscureNotice(t),
            N = this.renderPoll(t, n),
            x = this.renderForwardedMessage(t),
            L = this.renderReportedMessage(t),
            v = this.renderShareClientTheme(t);
        return null == d &&
            null == c &&
            null == E &&
            null == p &&
            null == A &&
            null == u &&
            null == m &&
            null == C &&
            null == g &&
            null == _ &&
            null == I &&
            null == T &&
            null == S &&
            null == y &&
            null == R &&
            null != f &&
            null == N &&
            null == x &&
            null == L &&
            null == v
            ? null
            : (0, s.jsxs)("div", {
                  id: (0, eU.XL)(t),
                  className: r()(e, eJ.kL),
                  children: [
                      L,
                      x,
                      S,
                      N,
                      v,
                      d,
                      u,
                      y,
                      c,
                      h,
                      E,
                      b,
                      p,
                      g,
                      I,
                      T,
                      f,
                      o,
                      A,
                      m,
                      C,
                      l && this.renderSuppressConfirmModal(),
                      a && this.renderRemoveAttachmentConfirmModal(),
                      _,
                      R,
                      O,
                  ],
              });
    }
}
function e8(e) {
    let t,
        { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: r } = e,
        a = (0, d.bG)([eh.default], () => eh.default.getId()),
        u = eu.X6.useSetting(),
        c = eu.hD.useSetting(),
        h = eu.rs.useSetting() && !(0, eb.A)(e.message),
        E = eu.jW.useSetting() && !1 !== e.renderReactions,
        p = eu.kt.useSetting(),
        A = (0, d.bG)([ep.A], () => null == n.guild_id || ep.A.canChatInGuild(n.guild_id), [n]),
        m = (0, d.bG)([V.A], () => null != n.guild_id && V.A.isLurking(n.guild_id), [n]),
        C = (0, d.bG)([eE.Ay, em.default], () => {
            let e = em.default.getCurrentUser();
            return (null != n.guild_id && null != e ? eE.Ay.getMember(n.guild_id, e.id)?.isPending : null) ?? !1;
        }),
        { canAddNewReactions: g, canManageMessages: _ } = (0, d.cf)(
            [eA.A],
            () => ({
                canAddNewReactions: A && eA.A.can(eK.xBc.ADD_REACTIONS, n),
                canManageMessages: eA.A.can(eK.xBc.MANAGE_MESSAGES, n),
            }),
            [A, n],
        ),
        I = (0, M.ix)(n.guild_id),
        [, S] = (0, j.c)(n.guild_id),
        T = (0, eo.Id)(n),
        f =
            (a === i.author.id || _) &&
            i.author.id !== eK.oIV &&
            !1 !== l &&
            !(0, o.Lt)(i.flags, eK.pr7.EPHEMERAL) &&
            T &&
            ((t = 0),
            "" !== i.content && t++,
            null != i.activity && t++,
            (i.stickers.length > 0 || i.stickerItems.length > 0) && t++,
            i.components.length > 0 && t++,
            i.messageSnapshots.length > 0 && t++,
            null != i.poll && t++,
            t >= 1),
        y = a === i.author.id && T && !r,
        R = i.author.id === a,
        b = i.isFirstMessageInForumPost(n),
        x = (0, eN.A)({
            channel: n,
            canChat: A,
            renderReactions: E,
            canAddNewReactions: g,
            isLurking: m,
            communicationDisabled: S,
            isActiveChannelOrUnarchivableThread: T,
            isAutomodQuarantined: I,
        }),
        L = (0, H.S)((i.editedTimestamp ?? i.timestamp).valueOf()),
        v = (0, Y.A)(n?.id),
        D = (0, J.A)(i),
        P = (0, N.P)(i),
        w = (0, eO.z)(n),
        U = (0, ef._f)(i.id, i.channel_id),
        G = (0, O._R)();
    return (0, s.jsx)(e2, {
        canSuppressEmbeds: f,
        canDeleteAttachments: y,
        ...x,
        disableReactionReads: !!b || x.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && w,
        hasBailedAst: e.hasBailedAst,
        isLurking: m && A,
        isPendingMember: C && A,
        isCurrentUser: R,
        inlineAttachmentMedia: u,
        inlineEmbedMedia: c,
        renderEmbeds: h,
        gifAutoPlay: p,
        canRenderReferralEmbed: n.isDM(),
        poll: D,
        showListsAndHeaders: L,
        showMaskedLinks: L,
        shouldHideMediaOptions: v,
        enabledContentHarmTypeFlags: P,
        ctaButtonType: U,
        shouldAgeVerify: G,
    });
}
let e6 = (e) => {
    let {
            message: t,
            channel: n,
            disableReactionReads: i = !1,
            renderThreadAccessory: l = !1,
            disableReactionCreates: r = !0,
            disableReactionUpdates: a = !0,
            disableComponentInteractivity: o = !0,
            ...d
        } = e,
        u = eu.X6.useSetting(),
        c = eu.hD.useSetting(),
        h = eu.rs.useSetting(),
        E = eu.kt.useSetting(),
        p = (0, H.S)((t.editedTimestamp ?? t.timestamp).valueOf()),
        A = (0, Y.A)(n?.id),
        m = (0, N.P)(t),
        C = (0, ef._f)(t.id, t.channel_id),
        g = (0, J.A)(t);
    return (0, s.jsx)(e2, {
        ...d,
        message: t,
        channel: n,
        disableReactionReads: i,
        disableReactionCreates: r,
        disableReactionUpdates: a,
        disableComponentInteractivity: o,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: l,
        inlineAttachmentMedia: u,
        inlineEmbedMedia: c,
        renderEmbeds: h,
        gifAutoPlay: E,
        poll: g,
        showListsAndHeaders: p,
        showMaskedLinks: p,
        shouldHideMediaOptions: A,
        enabledContentHarmTypeFlags: m,
        ctaButtonType: C,
    });
};
