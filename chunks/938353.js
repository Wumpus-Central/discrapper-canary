n.d(t, {
    $p: function () {
        return e6;
    },
    BB: function () {
        return e3;
    },
    ZP: function () {
        return e2;
    }
}),
    n(47120),
    n(789020),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104),
    n(390547);
var i,
    r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    m = n(481060),
    h = n(904245),
    f = n(637374),
    p = n(626799),
    _ = n(624367),
    g = n(433074),
    E = n(421474),
    C = n(603270),
    I = n(162297),
    x = n(222709),
    N = n(446411),
    v = n(960904),
    T = n(161314),
    S = n(247206),
    A = n(25610),
    b = n(703751),
    j = n(761538),
    R = n(674611),
    Z = n(346610),
    P = n(868643),
    L = n(294734),
    y = n(426275),
    O = n(947849),
    M = n(715903),
    k = n(71619),
    D = n(637618),
    B = n(225890),
    U = n(364097),
    w = n(495129),
    F = n(939170),
    G = n(187506),
    V = n(954654),
    H = n(41776),
    z = n(628238),
    W = n(454585),
    K = n(768494),
    Y = n(124347),
    X = n(976853),
    Q = n(346013),
    q = n(94396),
    J = n(977683),
    $ = n(128435),
    ee = n(98278),
    et = n(614825),
    en = n(265299),
    ei = n(699833),
    er = n(344997),
    el = n(378233),
    ea = n(374425),
    eo = n(665906),
    es = n(432147),
    ec = n(695346),
    eu = n(314897),
    ed = n(271383),
    em = n(607744),
    eh = n(496675),
    ef = n(594174),
    ep = n(52824),
    e_ = n(626135),
    eg = n(70956),
    eE = n(408433),
    eC = n(630388),
    eI = n(709054),
    ex = n(591759),
    eN = n(169525),
    ev = n(786761),
    eT = n(161010),
    eS = n(255269),
    eA = n(461157),
    eb = n(901461),
    ej = n(432376),
    eR = n(384203),
    eZ = n(633957),
    eP = n(530472),
    eL = n(29909),
    ey = n(782658),
    eO = n(219797),
    eM = n(453687),
    ek = n(128854),
    eD = n(101578),
    eB = n(524444),
    eU = n(319323),
    ew = n(884182),
    eF = n(546432),
    eG = n(920888),
    eV = n(817384),
    eH = n(981631),
    ez = n(474936),
    eW = n(388032),
    eK = n(46124),
    eY = n(803205),
    eX = n(680674);
function eQ(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eq() {
    return (0, r.jsxs)('div', {
        className: eY.nitroFileSizeUpsell,
        children: [
            (0, r.jsx)('img', {
                src: eX,
                className: eY.nitroBadgeSvg,
                alt: ''
            }),
            (0, r.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eW.intl.format(eW.t['G/H+s7'], { onClick: () => (0, ee.z)() })
            })
        ]
    });
}
let eJ = 15 * eg.Z.Millis.MINUTE,
    e$ = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e0 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: l, proxyURL: a, width: o, height: s } = i;
        return (0, r.jsx)(eL.Z, {
            width: o,
            height: s,
            src: null != a && '' !== a ? a : l,
            url: null != e && '' !== e ? e : null != a && '' !== a ? a : l,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: eY.gifFavoriteButton
        });
    },
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: l, srcIsAnimated: a } = e;
        return null != i && null != l && (Y.uo.test(n) || (a && Y.YG.test(n)))
            ? (0, r.jsx)(eL.Z, {
                  width: i,
                  height: l,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eY.gifFavoriteButton
              })
            : null;
    };
class e3 extends (i = l.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e$.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: r, message: l, poll: a } = this.props,
            { channel: o, message: s, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ['message', 'channel']) ||
            r.type !== o.type ||
            c !== a ||
            s.codedLinks !== l.codedLinks ||
            s.flags !== l.flags ||
            s.giftCodes !== l.giftCodes ||
            s.attachments !== l.attachments ||
            s.embeds !== l.embeds ||
            s.components !== l.components ||
            s.activity !== l.activity ||
            ((n = s.reactions),
            n !== (i = l.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: r, burst_count: l } = e,
                            { emoji: a, count: o, burst_count: s } = i[t];
                        return l !== s || r !== o || n.id !== a.id || n.name !== a.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, r.jsx)('div', {
                  className: eY.ctaButtonContainer,
                  children: (0, r.jsx)(R.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > ez.Lw);
        return (0, eT.M)('attachment') && t ? (0, r.jsx)(eq, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i, url: l } = t;
                  if (n === v.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, r.jsx)(
                                ey.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === v.g.TEMPLATE) return (0, r.jsx)(U.Z, { code: i }, i);
                  if (n === v.g.EVENT) return (0, r.jsx)(B.Z, { code: i }, i);
                  else if (n === v.g.CHANNEL_LINK)
                      return (0, r.jsx)(
                          eR.Z,
                          {
                              code: i,
                              messageData: e
                          },
                          i
                      );
                  else if (n === v.g.APP_DIRECTORY_PROFILE)
                      return (0, r.jsx)(
                          g.Z,
                          {
                              code: i,
                              message: e
                          },
                          i
                      );
                  else if (n === v.g.ACTIVITY_BOOKMARK) {
                      var a, o;
                      let t = new URL(l),
                          n = null !== (a = t.searchParams.get('referrer_id')) && void 0 !== a ? a : e.author.id,
                          s = null !== (o = t.searchParams.get('custom_id')) && void 0 !== o ? o : void 0;
                      return (0, r.jsx)(
                          _.Z,
                          {
                              applicationId: i,
                              message: e,
                              referrerId: n,
                              customId: s
                          },
                          i
                      );
                  } else if (n === v.g.GUILD_PRODUCT) return (0, r.jsx)(D.Z, { code: i }, i);
                  else if (n === v.g.SERVER_SHOP) return (0, r.jsx)(T.Z, { guildId: i }, i);
                  else if (n === v.g.QUESTS_EMBED) return (0, r.jsx)(en.Z, { questId: i }, i);
                  else if (n === v.g.APP_DIRECTORY_STOREFRONT)
                      return (0, r.jsx)(
                          C.P,
                          {
                              appId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === v.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, E.Q)(i);
                      return null == t
                          ? null
                          : (0, r.jsx)(
                                C.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e
                                },
                                i
                            );
                  } else if (n === v.g.APP_OAUTH2_LINK) return (0, r.jsx)(I.Z, { applicationId: i }, i);
                  else if (n === v.g.COLLECTIBLES_SHOP) return null;
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: l, content: a, giftInfo: o } = e,
            s = ef.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, r.jsx)(
                      'div',
                      {
                          className: eY.giftCodeContainer,
                          children: (0, r.jsx)(f.Z, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: s,
                              type: l,
                              content: a,
                              giftInfo: o
                          })
                      },
                      e
                  )
              )
            : null;
    }
    renderReferralTrial(e) {
        let { referralTrialOfferId: t, type: n } = e,
            { canRenderReferralEmbed: i } = this.props;
        return n !== s.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, r.jsx)(
                  'div',
                  {
                      className: eY.referralContainer,
                      children: (0, r.jsx)(et.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != i && i
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: i, isLurking: l, isGuest: a, isPendingMember: o, channel: s, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, r.jsx)(eG.Z, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: l,
                  isGuest: a,
                  isPendingMember: o,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, hasInlineForwardButton: n, gifAutoPlay: i, canDeleteAttachments: l, inlineAttachmentMedia: a, onMediaItemContextMenu: o, shouldRedactExplicitContent: s, shouldHideMediaOptions: c } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || e.isUIKitComponents()) return null;
        let m = u.filter((e) => null == e.flags || !(0, eC.yE)(e.flags, eH.J0y.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let h = m
                .map((t) => {
                    var n;
                    return {
                        ...(0, K.JD)(t, e),
                        original: t.url,
                        srcIsAnimated: (0, eC.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, eH.J0y.IS_ANIMATED)
                    };
                })
                .filter((e) => 'INVALID' !== e.type),
            f = (0, q._)(
                h,
                {
                    shouldRedactExplicitContent: s,
                    shouldHideMediaOptions: c
                },
                'Media Mosaic'
            ),
            p = h.length > 1,
            _ = (0, eC.yE)(d, eH.iLy.IS_VOICE_MESSAGE);
        function g(e, t) {
            return (0, eN.dn)(e.originalItem, t);
        }
        let E = m.map((n) => {
                let r = (0, K.VY)(n),
                    s = {
                        message: e,
                        item: (0, eF.OB)(n, a),
                        autoPlayGif: i,
                        canRemoveItem: l && (m.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eY.embedWrapper,
                        getObscureReason: g,
                        onContextMenu:
                            null != o
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), o(e, r);
                                  }
                                : void 0,
                        renderAudioComponent: _ ? eO.jY : eO.q7,
                        renderImageComponent: eO.dS,
                        renderVideoComponent: eO.vZ,
                        renderPlaintextFilePreview: eO.d4,
                        renderGenericFileComponent: eO.ZK,
                        renderMosaicItemFooter: eO.L9,
                        onPlay: (e, i, r) => {
                            e_.default.track(eH.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_type: t.type,
                                type: n.content_type,
                                flags: n.flags,
                                size: n.size,
                                duration: r
                            });
                        },
                        gifFavoriteButton: e1(r),
                        isSearchResult: this.props.isSearchResult
                    },
                    c = (0, ep.q)({
                        proxyURL: n.proxy_url,
                        url: n.url
                    });
                return c in f && (p && (s.onClick = f[c]), 'IMAGE' === s.item.type && (s.onViewItem = f[c])), s;
            }),
            C = n
                ? (0, r.jsx)(y.Z, {
                      className: eK.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: t.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, r.jsx)(ew.Z, {
            items: E,
            inlineForwardButton: C
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eV.b.has(t.type) || (0, eE.l3)(t) || ((0, F.b)(t) && !(0, G.M)(e)) || (0, eE.jz)(t)) return null;
                  let i = {
                      renderImageComponent: eB.Yi,
                      renderVideoComponent: eB.lV,
                      renderLinkComponent: eB.iT
                  };
                  if (t.type === eH.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let l = ex.Z.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let a = l.pathname.split('/')[3];
                          if (null != a)
                              return (0, r.jsx)(
                                  p.Z,
                                  {
                                      skuId: a,
                                      renderFallback: () => this.renderEmbed(t, n, i, e)
                                  },
                                  t.id
                              );
                      }
                  }
                  return this.renderEmbed(t, n, i, e);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length || !1 === this.props.renderComponentAccessory) return null;
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: i, onMediaItemContextMenu: l } = this.props;
        return (0, r.jsx)(ek.F, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == l
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == l || l(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, r.jsx)(V.ZP, { message: e })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, r.jsx)(eD.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eH.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, r.jsx)(x.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, ev.Pv)(e)
            ? (0, r.jsx)(eP.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      h.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, el.cv)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, r.jsx)(
                      ea.Z,
                      {
                          channel: n,
                          isInteracting: i,
                          renderableSticker: e
                      },
                      e.id
                  )
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eH.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, r.jsx)(es.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (!!e.hasFlag(eH.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && !!this.props.isCurrentUser) {
            if (!(Date.now() - eI.default.extractTimestamp(e.id) >= eJ))
                return (0, r.jsx)('div', {
                    className: eY.threadRoleMentionFailure,
                    children: eW.intl.string(eW.t.ma8Rs7)
                });
        }
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, r.jsxs)(m.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eW.intl.string(eW.t.VL1KOj),
            confirmText: eW.intl.string(eW.t.YEHppK),
            cancelText: eW.intl.string(eW.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                h.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eY.confirmText,
                    children: eW.intl.string(eW.t['vXZ+Fh'])
                }),
                (0, r.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eW.intl.string(eW.t['5j2by8'])
                })
            ]
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        if (null == n) {
            this.setState({ showRemoveAttachmentModal: !1 });
            return;
        }
        return (0, r.jsx)(m.DeclarativeConfirmModal, {
            dismissable: !0,
            header: eW.intl.string(eW.t.CbTIEh),
            confirmText: eW.intl.string(eW.t.kFwAsb),
            cancelText: eW.intl.string(eW.t['ETE/oK']),
            onCancel: () =>
                this.setState({
                    showRemoveAttachmentModal: !1,
                    attachmentToDelete: null
                }),
            onConfirm: () => {
                let i = t.attachments.filter((e) => e.id !== n.id);
                h.Z.patchMessageAttachments(e.id, t.id, i),
                    this.setState({
                        showRemoveAttachmentModal: !1,
                        attachmentToDelete: null
                    });
            },
            children: (0, r.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: eY.confirmText,
                children: eW.intl.string(eW.t.faHmOz)
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, r.jsx)(eU.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, r.jsx)(eZ.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eH.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, r.jsx)(
                      Q.Z,
                      {
                          embedUrl: t.url,
                          message: e,
                          channel: this.props.channel
                      },
                      t.id
                  )
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_POLICY_NOTICE ? (0, r.jsx)(ei.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, r.jsx)(er.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eH.hBH.VOICE_CHANNEL)
            return (0, r.jsx)(w.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, S.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, r.jsx)(j.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, r.jsx)($.Z, {
                message: e,
                poll: t,
                className: eY.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, r.jsx)(L.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: a } = this.state,
            s = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            u = this.renderReferralTrial(t),
            d = this.renderAttachments(t),
            m = this.renderCtaButton(),
            h = this.renderSocialProofingFileSizeNitroUpsell(t),
            f = this.renderEmbeds(t),
            p = this.renderActivityInvite(t),
            _ = this.renderReactions(t),
            g = this.renderPublishBump(t),
            E = this.renderEphemeralAccessories(t),
            C = this.renderStickersAccessories(t),
            I = this.renderThreadAccessories(t),
            x = this.renderComponentAccessories(t),
            N = this.renderThreadRoleMentionWarning(t),
            v = this.renderEmbeddedApplicationInstanceEmbed(t),
            T = this.renderInteractionPremiumUpsell(t),
            S = this.renderMediaPostEmbeds(t),
            A = this.renderSafetyPolicyNotice(t),
            b = this.renderSafetySystemNotification(t),
            j = this.renderVoiceChannelInvite(t, n),
            R = this.renderMediaObscureNotice(t),
            Z = this.renderPoll(t, i),
            P = this.renderForwardedMessage(t);
        return null == s && null == d && null == f && null == p && null == _ && null == c && null == u && null == g && null == E && null == C && null == I && null == x && null == v && null == N && null == S && null == A && null != T && null == Z && null == j && null == P
            ? null
            : (0, r.jsxs)('div', {
                  id: (0, eM.bX)(t),
                  className: o()(e, eY.container),
                  children: [P, N, Z, s, c, u, S, d, m, f, R, p, C, x, v, T, h, _, g, E, l && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), I, A, b, j]
              });
    }
    constructor(...e) {
        super(...e),
            eQ(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eQ(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eQ(this, 'renderEmbed', (e, t, n, i) => {
                let { gifAutoPlay: l, inlineEmbedMedia: a, canSuppressEmbeds: o, hasSpoilerEmbeds: s, shouldRedactExplicitContent: c, hasInlineForwardButton: u, isSearchResult: d } = this.props,
                    m = i.channel_id,
                    h = i.id,
                    f = (0, eN.BP)(e, m, h, s, c);
                if (e.type === eH.hBH.GIFT) return null;
                let p = (0, r.jsx)(
                    O.h.Provider,
                    {
                        value: e0(e.url, e.image, e.video),
                        children: (0, r.jsx)(N.ZP, {
                            className: eY.embedWrapper,
                            embed: e,
                            obscureReason: null != f ? f : void 0,
                            autoPlayGif: l,
                            hideMedia: !a,
                            onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            message: i,
                            showImageRecs: !1,
                            isSearchResult: d,
                            embedIndex: t,
                            ...n
                        })
                    },
                    e.id
                );
                return u
                    ? (0, r.jsxs)('div', {
                          className: eY.embedContainer,
                          children: [
                              p,
                              (0, r.jsx)(y.Z, {
                                  className: eK.hideIfMessageNotFocused,
                                  messageId: h,
                                  channelId: m,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : p;
            }),
            eQ(this, 'renderEmbedTitle', (e, t) => (e.type === eH.hBH.RICH ? W.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eQ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eH.hBH.RICH
                    ? W.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eQ(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? h.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eQ(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e2(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        o = (0, c.e7)([eu.default], () => eu.default.getId()),
        s = ec.x4.useSetting(),
        u = ec.RS.useSetting(),
        d = ec.NA.useSetting() && !(0, eb.Z)(e.message),
        m = ec.nc.useSetting() && !1 !== e.renderReactions,
        h = ec.QK.useSetting(),
        f = (0, c.e7)([em.Z], () => null == n.guild_id || em.Z.canChatInGuild(n.guild_id), [n]),
        p = (0, c.e7)([H.Z], () => null != n.guild_id && H.Z.isLurking(n.guild_id), [n]),
        _ = (0, c.e7)([ed.ZP], () => ed.ZP.isCurrentUserGuest(n.guild_id), [n]),
        g = (0, c.e7)([ed.ZP, ef.default], () => {
            var e, t;
            let i = ef.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = ed.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: E, canManageMessages: C } = (0, c.cj)(
            [eh.Z],
            () => ({
                canAddNewReactions: f && eh.Z.can(eH.Plq.ADD_REACTIONS, n),
                canManageMessages: eh.Z.can(eH.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        I = (0, M.ux)(n.guild_id),
        [, x] = (0, k.AB)(n.guild_id),
        N = (0, eo.$R)(n),
        v = (o === i.author.id || C) && i.author.id !== eH.LAt && !1 !== l && !(0, eC.yE)(i.flags, eH.iLy.EPHEMERAL) && N && 1 === (0, eA.Z)(i),
        T = o === i.author.id && N && !a,
        S = i.author.id === o,
        j = i.isFirstMessageInForumPost(n),
        R = (0, ej.Z)({
            channel: n,
            canChat: f,
            renderReactions: m,
            canAddNewReactions: E,
            isLurking: p,
            isGuest: _,
            communicationDisabled: x,
            isActiveChannelOrUnarchivableThread: N,
            isAutomodQuarantined: I
        }),
        L = (0, z.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        y = (0, X.Z)(null == n ? void 0 : n.id),
        O = (0, J.Z)(i),
        D = (0, A.V)(n.id, i.author.id),
        B = (0, b.r)(i.id),
        { hasInlineForwardButton: U } = (0, Z.yk)({ location: 'MessageAccessories' }),
        w = (0, P.a)(i) && U,
        F = (0, eS._)(n);
    return (0, r.jsx)(e3, {
        canSuppressEmbeds: v,
        canDeleteAttachments: T,
        ...R,
        disableReactionReads: !!j || R.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && F,
        isLurking: p && f,
        isGuest: _ && f,
        isPendingMember: g && f,
        isCurrentUser: S,
        inlineAttachmentMedia: s,
        inlineEmbedMedia: u,
        renderEmbeds: d,
        gifAutoPlay: h,
        canRenderReferralEmbed: n.isDM(),
        poll: O,
        showListsAndHeaders: L,
        showMaskedLinks: L,
        shouldHideMediaOptions: y,
        shouldRedactExplicitContent: D,
        shouldRenderCtaButton: B,
        hasInlineForwardButton: w
    });
}
eQ(e3, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e6 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: l = !1, renderComponentAccessory: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: s = !0, disableReactionUpdates: c = !0, isSearchResult: u = !1, ...d } = e,
        m = ec.x4.useSetting(),
        h = ec.RS.useSetting(),
        f = ec.NA.useSetting(),
        p = ec.QK.useSetting(),
        _ = (0, z.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        g = (0, X.Z)(null == i ? void 0 : i.id),
        E = (0, A.V)(i.id, n.author.id),
        C = (0, b.r)(n.id),
        I = (0, J.Z)(n);
    return (0, r.jsx)(e3, {
        ...d,
        message: n,
        channel: i,
        disableReactionReads: l,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderComponentAccessory: a,
        renderThreadAccessory: o,
        inlineAttachmentMedia: m,
        inlineEmbedMedia: h,
        renderEmbeds: f,
        gifAutoPlay: p,
        poll: I,
        showListsAndHeaders: _,
        showMaskedLinks: _,
        shouldHideMediaOptions: g,
        shouldRedactExplicitContent: E,
        shouldRenderCtaButton: C,
        hasInlineForwardButton: !1,
        isSearchResult: u
    });
};
