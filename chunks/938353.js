n.d(t, {
    $p: () => e4,
    BB: () => e2,
    ZP: () => e3
}),
    n(47120),
    n(789020),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104),
    n(390547);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(275726),
    c = n(442837),
    d = n(377108),
    u = n(902704),
    m = n(481060),
    _ = n(904245),
    h = n(637374),
    p = n(626799),
    g = n(624367),
    f = n(433074),
    x = n(421474),
    C = n(603270),
    v = n(162297),
    E = n(222709),
    I = n(446411),
    N = n(960904),
    S = n(161314),
    T = n(247206),
    b = n(25610),
    A = n(703751),
    j = n(761538),
    y = n(674611),
    Z = n(346610),
    R = n(868643),
    L = n(294734),
    P = n(426275),
    k = n(947849),
    M = n(715903),
    O = n(71619),
    D = n(637618),
    w = n(225890),
    F = n(364097),
    U = n(495129),
    B = n(939170),
    G = n(187506),
    H = n(954654),
    V = n(41776),
    z = n(628238),
    W = n(454585),
    K = n(768494),
    Y = n(124347),
    X = n(976853),
    q = n(346013),
    Q = n(94396),
    J = n(977683),
    $ = n(128435),
    ee = n(98278),
    et = n(614825),
    en = n(265299),
    ei = n(699833),
    el = n(344997),
    ea = n(378233),
    er = n(374425),
    es = n(665906),
    eo = n(432147),
    ec = n(695346),
    ed = n(314897),
    eu = n(271383),
    em = n(607744),
    e_ = n(496675),
    eh = n(594174),
    ep = n(52824),
    eg = n(626135),
    ef = n(70956),
    ex = n(408433),
    eC = n(630388),
    ev = n(709054),
    eE = n(591759),
    eI = n(169525),
    eN = n(786761),
    eS = n(161010),
    eT = n(255269),
    eb = n(461157),
    eA = n(901461),
    ej = n(432376),
    ey = n(384203),
    eZ = n(633957),
    eR = n(530472),
    eL = n(29909),
    eP = n(782658),
    ek = n(219797),
    eM = n(453687),
    eO = n(128854),
    eD = n(101578),
    ew = n(524444),
    eF = n(319323),
    eU = n(884182),
    eB = n(546432),
    eG = n(920888),
    eH = n(817384),
    eV = n(981631),
    ez = n(474936),
    eW = n(388032),
    eK = n(46124),
    eY = n(803205),
    eX = n(680674);
function eq(e, t, n) {
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
function eQ() {
    return (0, l.jsxs)('div', {
        className: eY.nitroFileSizeUpsell,
        children: [
            (0, l.jsx)('img', {
                src: eX,
                className: eY.nitroBadgeSvg,
                alt: ''
            }),
            (0, l.jsx)(m.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eW.intl.format(eW.t['G/H+s7'], { onClick: () => (0, ee.z)() })
            })
        ]
    });
}
let eJ = 15 * ef.Z.Millis.MINUTE,
    e$ = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e0 = (e, t, n) => () => {
        let i = null != t ? t : n;
        if (null == i) return null;
        let { url: a, proxyURL: r, width: s, height: o } = i;
        return (0, l.jsx)(eL.Z, {
            width: s,
            height: o,
            src: null != r && '' !== r ? r : a,
            url: null != e && '' !== e ? e : null != r && '' !== r ? r : a,
            format: null != n ? d.EO.VIDEO : d.EO.IMAGE,
            className: eY.gifFavoriteButton
        });
    },
    e1 = (e) => () => {
        let { url: t, proxyUrl: n, width: i, height: a, srcIsAnimated: r } = e;
        return null != i && null != a && (Y.uo.test(n) || (r && (Y.YG.test(n) || Y.FH.test(n))))
            ? (0, l.jsx)(eL.Z, {
                  width: i,
                  height: a,
                  src: n,
                  url: t,
                  format: d.EO.IMAGE,
                  className: eY.gifFavoriteButton
              })
            : null;
    };
class e2 extends (i = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e$.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, i;
        let { channel: l, message: a, poll: r } = this.props,
            { channel: s, message: o, poll: c } = e;
        return (
            !(0, u.Z)(this.state, t) ||
            !(0, u.Z)(this.props, e, ['message', 'channel']) ||
            l.type !== s.type ||
            c !== r ||
            o.codedLinks !== a.codedLinks ||
            o.flags !== a.flags ||
            o.giftCodes !== a.giftCodes ||
            o.attachments !== a.attachments ||
            o.embeds !== a.embeds ||
            o.components !== a.components ||
            o.activity !== a.activity ||
            ((n = o.reactions) !== (i = a.reactions) &&
                (n.length !== i.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: l, burst_count: a } = e,
                            { emoji: r, count: s, burst_count: o } = i[t];
                        return a !== o || l !== s || n.id !== r.id || n.name !== r.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, l.jsx)('div', {
                  className: eY.ctaButtonContainer,
                  children: (0, l.jsx)(y.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > ez.Lw);
        return (0, eS.M)('attachment') && t ? (0, l.jsx)(eQ, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: i, url: a } = t;
                  if (n === N.g.INVITE)
                      return this.shouldRenderInvite(i)
                          ? (0, l.jsx)(
                                eP.Z,
                                {
                                    code: i,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                i
                            )
                          : null;
                  if (n === N.g.TEMPLATE) return (0, l.jsx)(F.Z, { code: i }, i);
                  if (n === N.g.EVENT) return (0, l.jsx)(w.Z, { code: i }, i);
                  if (n === N.g.CHANNEL_LINK)
                      return (0, l.jsx)(
                          ey.Z,
                          {
                              code: i,
                              messageData: e
                          },
                          i
                      );
                  if (n === N.g.APP_DIRECTORY_PROFILE)
                      return (0, l.jsx)(
                          f.Z,
                          {
                              code: i,
                              message: e,
                              embedUrl: a
                          },
                          i
                      );
                  else if (n === N.g.ACTIVITY_BOOKMARK) {
                      var r, s;
                      let t = new URL(a),
                          n = null !== (r = t.searchParams.get('referrer_id')) && void 0 !== r ? r : e.author.id,
                          o = null !== (s = t.searchParams.get('custom_id')) && void 0 !== s ? s : void 0;
                      return (0, l.jsx)(
                          g.Z,
                          {
                              applicationId: i,
                              message: e,
                              referrerId: n,
                              customId: o,
                              embedUrl: a
                          },
                          i
                      );
                  } else if (n === N.g.GUILD_PRODUCT) return (0, l.jsx)(D.Z, { code: i }, i);
                  else if (n === N.g.SERVER_SHOP) return (0, l.jsx)(S.Z, { guildId: i }, i);
                  else if (n === N.g.QUESTS_EMBED) return (0, l.jsx)(en.Z, { questId: i }, i);
                  else if (n === N.g.APP_DIRECTORY_STOREFRONT)
                      return (0, l.jsx)(
                          C.P,
                          {
                              appId: i,
                              message: e
                          },
                          i
                      );
                  else if (n === N.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, x.Q)(i);
                      return null == t
                          ? null
                          : (0, l.jsx)(
                                C.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e
                                },
                                i
                            );
                  } else if (n === N.g.APP_OAUTH2_LINK)
                      return (0, l.jsx)(
                          v.Z,
                          {
                              applicationId: i,
                              embedUrl: a
                          },
                          i
                      );
                  else if (n === N.g.COLLECTIBLES_SHOP) return null;
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: i, type: a, content: r, giftInfo: s } = e,
            o = eh.default.getCurrentUser();
        return null != o && t.length > 0
            ? t.map((e) =>
                  (0, l.jsx)(
                      'div',
                      {
                          className: eY.giftCodeContainer,
                          children: (0, l.jsx)(h.Z, {
                              code: e,
                              author: n,
                              channelId: i,
                              currentUser: o,
                              type: a,
                              content: r,
                              giftInfo: s
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
        return n !== o.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, l.jsx)(
                  'div',
                  {
                      className: eY.referralContainer,
                      children: (0, l.jsx)(et.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != i && i
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: i, isLurking: a, isGuest: r, isPendingMember: s, channel: o, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, l.jsx)(eG.Z, {
                  message: e,
                  channel: o,
                  disableReactionCreates: t,
                  disableReactionUpdates: i,
                  isLurking: a,
                  isGuest: r,
                  isPendingMember: s,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, hasInlineForwardButton: n, gifAutoPlay: i, canDeleteAttachments: a, inlineAttachmentMedia: r, onMediaItemContextMenu: s, shouldRedactExplicitContent: o, shouldHideMediaOptions: c } = this.props,
            { attachments: d, flags: u } = e;
        if (0 === d.length || e.isPoll() || e.isComponentsV2()) return null;
        let m = d.filter((e) => null == e.flags || !(0, eC.yE)(e.flags, eV.J0y.IS_THUMBNAIL));
        if (0 === m.length) return null;
        let _ = m
                .map((t) => {
                    var n;
                    return {
                        ...(0, K.JD)(t, e),
                        original: t.url,
                        srcIsAnimated: (0, eC.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, eV.J0y.IS_ANIMATED)
                    };
                })
                .filter((e) => 'INVALID' !== e.type),
            { srcToOnClickOverride: h, srcToHandlePreloadImage: p } = (0, Q.J)(
                _,
                {
                    shouldRedactExplicitContent: o,
                    shouldHideMediaOptions: c
                },
                'Media Mosaic'
            ),
            g = _.length > 1,
            f = (0, eC.yE)(u, eV.iLy.IS_VOICE_MESSAGE);
        function x(e, t) {
            return (0, eI.dn)(e.originalItem, t);
        }
        let C = m.map((n) => {
                let l = (0, K.VY)(n),
                    o = {
                        message: e,
                        item: (0, eB.OB)(n, r),
                        autoPlayGif: i,
                        canRemoveItem: a && (m.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eY.embedWrapper,
                        getObscureReason: x,
                        onContextMenu:
                            null != s
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), s(e, l);
                                  }
                                : void 0,
                        renderAudioComponent: f ? ek.jY : ek.q7,
                        renderImageComponent: ek.dS,
                        renderVideoComponent: ek.vZ,
                        renderPlaintextFilePreview: ek.d4,
                        renderGenericFileComponent: ek.ZK,
                        renderMosaicItemFooter: ek.L9,
                        onPlay: (e, i, l) => {
                            eg.default.track(eV.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_type: t.type,
                                type: n.content_type,
                                flags: n.flags,
                                size: n.size,
                                duration: l
                            });
                        },
                        gifFavoriteButton: e1(l),
                        isSearchResult: this.props.isSearchResult
                    },
                    c = (0, ep.q)({
                        proxyURL: n.proxy_url,
                        url: n.url
                    });
                return c in h && (g && ((o.onClick = h[c]), (o.handlePreloadImage = p[c])), 'IMAGE' === o.item.type && (o.onViewItem = h[c])), o;
            }),
            v = n
                ? (0, l.jsx)(P.Z, {
                      className: eK.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: t.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, l.jsx)(eU.Z, {
            items: C,
            inlineForwardButton: v
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eH.b.has(t.type) || (0, ex.l3)(t) || ((0, B.b)(t) && !(0, G.M)(e)) || (0, ex.jz)(t)) return null;
                  let i = {
                      renderImageComponent: ew.Yi,
                      renderVideoComponent: ew.lV,
                      renderLinkComponent: ew.iT
                  };
                  if (t.type === eV.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let a = eE.Z.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let r = a.pathname.split('/')[3];
                          if (null != r)
                              return (0, l.jsx)(
                                  p.Z,
                                  {
                                      skuId: r,
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
        if (0 === e.components.length) return null;
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: i, disableComponentInteractivity: a, onMediaItemContextMenu: r } = this.props;
        return (0, l.jsx)(eO.F, {
            gifAutoPlay: t,
            getGifFavButton: e1,
            getOnMediaItemContextMenu:
                null == r
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == r || r(t, e);
                      },
            shouldHideMediaOptions: i,
            shouldRedactExplicitContent: n,
            children: (0, l.jsx)(H.ZP, {
                message: e,
                shouldDisableInteractiveComponents: a
            })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, l.jsx)(eD.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eV.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, l.jsx)(E.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eN.Pv)(e)
            ? (0, l.jsx)(eR.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      _.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ea.cv)(e),
            { channel: n, isInteracting: i } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, l.jsx)(
                      er.Z,
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
        if (e.hasFlag(eV.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, l.jsx)(eo.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (e.hasFlag(eV.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - ev.default.extractTimestamp(e.id) >= eJ))
            return (0, l.jsx)('div', {
                className: eY.threadRoleMentionFailure,
                children: eW.intl.string(eW.t.ma8Rs7)
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, l.jsxs)(m.sYh, {
            dismissable: !0,
            header: eW.intl.string(eW.t.VL1KOj),
            confirmText: eW.intl.string(eW.t.YEHppK),
            cancelText: eW.intl.string(eW.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, l.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eY.confirmText,
                    children: eW.intl.string(eW.t['vXZ+Fh'])
                }),
                (0, l.jsx)(m.Text, {
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
        return (0, l.jsx)(m.sYh, {
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
                _.Z.patchMessageAttachments(e.id, t.id, i),
                    this.setState({
                        showRemoveAttachmentModal: !1,
                        attachmentToDelete: null
                    });
            },
            children: (0, l.jsx)(m.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
                className: eY.confirmText,
                children: eW.intl.string(eW.t.faHmOz)
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== o.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, l.jsx)(eF.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, l.jsx)(eZ.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eV.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, l.jsx)(
                      q.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_POLICY_NOTICE ? (0, l.jsx)(ei.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eV.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, l.jsx)(el.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eV.hBH.VOICE_CHANNEL)
            return (0, l.jsx)(U.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, T.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, l.jsx)(j.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, l.jsx)($.Z, {
                message: e,
                poll: t,
                className: eY.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, l.jsx)(L.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: i } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: r } = this.state,
            o = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            d = this.renderReferralTrial(t),
            u = this.renderAttachments(t),
            m = this.renderCtaButton(),
            _ = this.renderSocialProofingFileSizeNitroUpsell(t),
            h = this.renderEmbeds(t),
            p = this.renderActivityInvite(t),
            g = this.renderReactions(t),
            f = this.renderPublishBump(t),
            x = this.renderEphemeralAccessories(t),
            C = this.renderStickersAccessories(t),
            v = this.renderThreadAccessories(t),
            E = this.renderComponentAccessories(t),
            I = this.renderThreadRoleMentionWarning(t),
            N = this.renderEmbeddedApplicationInstanceEmbed(t),
            S = this.renderInteractionPremiumUpsell(t),
            T = this.renderMediaPostEmbeds(t),
            b = this.renderSafetyPolicyNotice(t),
            A = this.renderSafetySystemNotification(t),
            j = this.renderVoiceChannelInvite(t, n),
            y = this.renderMediaObscureNotice(t),
            Z = this.renderPoll(t, i),
            R = this.renderForwardedMessage(t);
        return null == o && null == u && null == h && null == p && null == g && null == c && null == d && null == f && null == x && null == C && null == v && null == E && null == N && null == I && null == T && null == b && null != S && null == Z && null == j && null == R
            ? null
            : (0, l.jsxs)('div', {
                  id: (0, eM.bX)(t),
                  className: s()(e, eY.container),
                  children: [R, I, Z, o, c, d, T, u, m, h, y, p, C, E, N, S, _, g, f, x, a && this.renderSuppressConfirmModal(), r && this.renderRemoveAttachmentConfirmModal(), v, b, A, j]
              });
    }
    constructor(...e) {
        super(...e),
            eq(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eq(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eq(this, 'renderEmbed', (e, t, n, i) => {
                let { gifAutoPlay: a, inlineEmbedMedia: r, canSuppressEmbeds: s, hasSpoilerEmbeds: o, shouldRedactExplicitContent: c, hasInlineForwardButton: d, isSearchResult: u } = this.props,
                    m = i.channel_id,
                    _ = i.id,
                    h = (0, eI.BP)(e, m, _, o, c);
                if (e.type === eV.hBH.GIFT) return null;
                let p = (0, l.jsx)(
                    k.h.Provider,
                    {
                        value: e0(e.url, e.image, e.video),
                        children: (0, l.jsx)(I.ZP, {
                            className: eY.embedWrapper,
                            embed: e,
                            obscureReason: null != h ? h : void 0,
                            autoPlayGif: a,
                            hideMedia: !r,
                            onSuppressEmbed: s ? this.handleEmbedSuppressed : void 0,
                            renderTitle: this.renderEmbedTitle,
                            renderDescription: this.renderEmbedDescription,
                            message: i,
                            showImageRecs: !1,
                            isSearchResult: u,
                            embedIndex: t,
                            ...n
                        })
                    },
                    e.id
                );
                return d
                    ? (0, l.jsxs)('div', {
                          className: eY.embedContainer,
                          children: [
                              p,
                              (0, l.jsx)(P.Z, {
                                  className: eK.hideIfMessageNotFocused,
                                  messageId: _,
                                  channelId: m,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : p;
            }),
            eq(this, 'renderEmbedTitle', (e, t) => (e.type === eV.hBH.RICH ? W.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eq(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eV.hBH.RICH
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
            eq(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? _.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eq(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            });
    }
}
function e3(e) {
    var t;
    let { channel: n, message: i, renderSuppressEmbeds: a, isMessageSnapshot: r } = e,
        s = (0, c.e7)([ed.default], () => ed.default.getId()),
        o = ec.x4.useSetting(),
        d = ec.RS.useSetting(),
        u = ec.NA.useSetting() && !(0, eA.Z)(e.message),
        m = ec.nc.useSetting() && !1 !== e.renderReactions,
        _ = ec.QK.useSetting(),
        h = (0, c.e7)([em.Z], () => null == n.guild_id || em.Z.canChatInGuild(n.guild_id), [n]),
        p = (0, c.e7)([V.Z], () => null != n.guild_id && V.Z.isLurking(n.guild_id), [n]),
        g = (0, c.e7)([eu.ZP], () => eu.ZP.isCurrentUserGuest(n.guild_id), [n]),
        f = (0, c.e7)([eu.ZP, eh.default], () => {
            var e, t;
            let i = eh.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != i ? (null === (e = eu.ZP.getMember(n.guild_id, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: x, canManageMessages: C } = (0, c.cj)(
            [e_.Z],
            () => ({
                canAddNewReactions: h && e_.Z.can(eV.Plq.ADD_REACTIONS, n),
                canManageMessages: e_.Z.can(eV.Plq.MANAGE_MESSAGES, n)
            }),
            [h, n]
        ),
        v = (0, M.ux)(n.guild_id),
        [, E] = (0, O.AB)(n.guild_id),
        I = (0, es.$R)(n),
        N = (s === i.author.id || C) && i.author.id !== eV.LAt && !1 !== a && !(0, eC.yE)(i.flags, eV.iLy.EPHEMERAL) && I && 1 === (0, eb.Z)(i),
        S = s === i.author.id && I && !r,
        T = i.author.id === s,
        j = i.isFirstMessageInForumPost(n),
        y = (0, ej.Z)({
            channel: n,
            canChat: h,
            renderReactions: m,
            canAddNewReactions: x,
            isLurking: p,
            isGuest: g,
            communicationDisabled: E,
            isActiveChannelOrUnarchivableThread: I,
            isAutomodQuarantined: v
        }),
        L = (0, z.A)((null !== (t = i.editedTimestamp) && void 0 !== t ? t : i.timestamp).valueOf()),
        P = (0, X.Z)(null == n ? void 0 : n.id),
        k = (0, J.Z)(i),
        D = (0, b.V)(n.id, i.author.id),
        w = (0, A.r)(i.id),
        { hasInlineForwardButton: F } = (0, Z.yk)({ location: 'MessageAccessories' }),
        U = (0, R.a)(i) && F,
        B = (0, eT._)(n);
    return (0, l.jsx)(e2, {
        canSuppressEmbeds: N,
        canDeleteAttachments: S,
        ...y,
        disableReactionReads: !!j || y.disableReactionReads,
        ...e,
        hasSpoilerEmbeds: e.hasSpoilerEmbeds && B,
        isLurking: p && h,
        isGuest: g && h,
        isPendingMember: f && h,
        isCurrentUser: T,
        inlineAttachmentMedia: o,
        inlineEmbedMedia: d,
        renderEmbeds: u,
        gifAutoPlay: _,
        canRenderReferralEmbed: n.isDM(),
        poll: k,
        showListsAndHeaders: L,
        showMaskedLinks: L,
        shouldHideMediaOptions: P,
        shouldRedactExplicitContent: D,
        shouldRenderCtaButton: w,
        hasInlineForwardButton: U
    });
}
eq(e2, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e4 = (e) => {
    var t;
    let { message: n, channel: i, disableReactionReads: a = !1, renderThreadAccessory: r = !1, disableReactionCreates: s = !0, disableReactionUpdates: o = !0, disableComponentInteractivity: c = !0, isSearchResult: d = !1, ...u } = e,
        m = ec.x4.useSetting(),
        _ = ec.RS.useSetting(),
        h = ec.NA.useSetting(),
        p = ec.QK.useSetting(),
        g = (0, z.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        f = (0, X.Z)(null == i ? void 0 : i.id),
        x = (0, b.V)(i.id, n.author.id),
        C = (0, A.r)(n.id),
        v = (0, J.Z)(n);
    return (0, l.jsx)(e2, {
        ...u,
        message: n,
        channel: i,
        disableReactionReads: a,
        disableReactionCreates: s,
        disableReactionUpdates: o,
        disableComponentInteractivity: c,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        renderThreadAccessory: r,
        inlineAttachmentMedia: m,
        inlineEmbedMedia: _,
        renderEmbeds: h,
        gifAutoPlay: p,
        poll: v,
        showListsAndHeaders: g,
        showMaskedLinks: g,
        shouldHideMediaOptions: f,
        shouldRedactExplicitContent: x,
        shouldRenderCtaButton: C,
        hasInlineForwardButton: !1,
        isSearchResult: d
    });
};
