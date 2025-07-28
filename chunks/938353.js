(n.d(t, {
    $p: () => e4,
    BB: () => e8,
    ZP: () => e6
}),
    n(388685),
    n(997841),
    n(35282),
    n(415506),
    n(361932),
    n(187205));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(275726),
    c = n(442837),
    u = n(377108),
    d = n(902704),
    p = n(481060),
    m = n(904245),
    f = n(637374),
    g = n(626799),
    _ = n(624367),
    h = n(183431),
    b = n(421474),
    E = n(603270),
    C = n(234431),
    x = n(162297),
    v = n(222709),
    y = n(446411),
    O = n(960904),
    j = n(161314),
    I = n(247206),
    S = n(629710),
    T = n(262777),
    N = n(761538),
    P = n(674611),
    A = n(294734),
    w = n(947849),
    Z = n(10433),
    R = n(715903),
    L = n(71619),
    D = n(637618),
    k = n(225890),
    M = n(364097),
    U = n(939170),
    F = n(187506),
    B = n(954654),
    G = n(41776),
    H = n(628238),
    V = n(454585),
    z = n(768494),
    W = n(124347),
    K = n(976853),
    Y = n(346013),
    X = n(207982),
    q = n(977683),
    Q = n(128435),
    J = n(98278),
    $ = n(614825),
    ee = n(265299),
    et = n(982168),
    en = n(163038),
    er = n(699833),
    ei = n(344997),
    el = n(378233),
    ea = n(374425),
    eo = n(665906),
    es = n(432147),
    ec = n(695346),
    eu = n(314897),
    ed = n(271383),
    ep = n(607744),
    em = n(496675),
    ef = n(594174),
    eg = n(52824),
    e_ = n(626135),
    eh = n(70956),
    eb = n(408433),
    eE = n(630388),
    eC = n(709054),
    ex = n(591759),
    ev = n(594173),
    ey = n(169525),
    eO = n(786761),
    ej = n(161010),
    eI = n(255269),
    eS = n(461157),
    eT = n(901461),
    eN = n(432376),
    eP = n(384203),
    eA = n(633957),
    ew = n(530472),
    eZ = n(29909),
    eR = n(782658),
    eL = n(219797),
    eD = n(453687),
    ek = n(128854),
    eM = n(101578),
    eU = n(524444),
    eF = n(319323),
    eB = n(884182),
    eG = n(546432),
    eH = n(920888),
    eV = n(328966),
    ez = n(963206),
    eW = n(817384),
    eK = n(981631),
    eY = n(474936),
    eX = n(388032),
    eq = n(813102),
    eQ = n(680674);
function eJ(e, t, n) {
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
function e$(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eJ(e, t, n[t]);
            }));
    }
    return e;
}
function e0(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e1() {
    return (0, i.jsxs)('div', {
        className: eq.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)('img', {
                src: eQ,
                className: eq.nitroBadgeSvg,
                alt: ''
            }),
            (0, i.jsx)(p.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eX.intl.format(eX.t['G/H+s7'], { onClick: () => (0, J.z)() })
            })
        ]
    });
}
let e3 = 15 * eh.Z.Millis.MINUTE,
    e2 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e5 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: l, flags: a } = e,
            o = (0, eE.yE)(a, z.hR.IS_ANIMATED);
        return null != r && null != l && (W.uo.test(n) || (o && (W.YG.test(n) || W.FH.test(n))))
            ? (0, i.jsx)(eZ.Z, {
                  width: r,
                  height: l,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eq.gifFavoriteButton
              })
            : null;
    };
class e8 extends (r = l.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e2.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, r;
        let { channel: i, message: l, poll: a } = this.props,
            { channel: o, message: s, poll: c } = e;
        return (
            !(0, d.Z)(this.state, t) ||
            !(0, d.Z)(this.props, e, ['message', 'channel']) ||
            i.type !== o.type ||
            c !== a ||
            s.codedLinks !== l.codedLinks ||
            s.flags !== l.flags ||
            s.giftCodes !== l.giftCodes ||
            s.attachments !== l.attachments ||
            s.embeds !== l.embeds ||
            s.components !== l.components ||
            s.activity !== l.activity ||
            ((n = s.reactions) !== (r = l.reactions) &&
                (n.length !== r.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: i, burst_count: l } = e,
                            { emoji: a, count: o, burst_count: s } = r[t];
                        return l !== s || i !== o || n.id !== a.id || n.name !== a.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case ev.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(P.Z, {
                    messageId: e.id,
                    channelId: t.id
                });
                break;
            case ev.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(h.Z, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)('div', {
            className: eq.ctaButtonContainer,
            children: r
        });
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eY.Lw);
        return (0, ej.M)('attachment') && t ? (0, i.jsx)(e1, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: l } = t;
                  if (n === O.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eR.Z,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === O.g.TEMPLATE) return (0, i.jsx)(M.Z, { code: r }, r);
                  if (n === O.g.EVENT) return (0, i.jsx)(k.Z, { code: r }, r);
                  if (n === O.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eP.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  if (n === O.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          Z.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  else if (n === O.g.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: a } = (0, C.U)(l);
                      return (0, i.jsx)(
                          _.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: a
                          },
                          r
                      );
                  } else if (n === O.g.GUILD_PRODUCT) return (0, i.jsx)(D.Z, { code: r }, r);
                  else if (n === O.g.SERVER_SHOP) return (0, i.jsx)(j.Z, { guildId: r }, r);
                  else if (n === O.g.QUESTS_EMBED) return (0, i.jsx)(ee.Z, { questId: r }, r);
                  else if (n === O.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          E.P,
                          {
                              appId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === O.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, b.Q)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                E.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e
                                },
                                r
                            );
                  } else if (n === O.g.APP_OAUTH2_LINK) return (0, i.jsx)(x.Z, { applicationId: r }, r);
                  else if (n === O.g.COLLECTIBLES_SHOP) return null;
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: l, content: a, giftInfo: o } = e,
            s = ef.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      'div',
                      {
                          className: eq.giftCodeContainer,
                          children: (0, i.jsx)(f.Z, {
                              code: e,
                              author: n,
                              channelId: r,
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
            { canRenderReferralEmbed: r } = this.props;
        return n !== s.u.PREMIUM_REFERRAL || null == t
            ? null
            : (0, i.jsx)(
                  'div',
                  {
                      className: eq.referralContainer,
                      children: (0, i.jsx)($.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != r && r
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: r, isLurking: l, isGuest: a, isPendingMember: o, channel: s, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, i.jsx)(eH.Z, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: l,
                  isGuest: a,
                  isPendingMember: o,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, gifAutoPlay: n, canDeleteAttachments: r, inlineAttachmentMedia: l, onMediaItemContextMenu: a, enabledContentHarmTypeFlags: o, shouldHideMediaOptions: s } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || e.isComponentsV2()) return null;
        let d = c.filter((e) => null == e.flags || !(0, eE.yE)(e.flags, eK.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let p = d
                .map((t) => {
                    var n;
                    return e0(e$({}, (0, z.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, eE.yE)(null != (n = t.flags) ? n : 0, eK.J0y.IS_ANIMATED)
                    });
                })
                .filter((e) => 'INVALID' !== e.type),
            { srcToOnClickOverride: m, srcToHandlePreloadImage: f } = (0, X.G)(
                p,
                {
                    enabledContentHarmTypeFlags: o,
                    shouldHideMediaOptions: s
                },
                'Media Mosaic'
            ),
            g = p.length > 1,
            _ = (0, eE.yE)(u, eK.iLy.IS_VOICE_MESSAGE);
        function h(e, t) {
            return (0, ey.dn)(e.originalItem, t);
        }
        let b = d.map((i) => {
            let o = (0, z.VY)(i),
                s = {
                    message: e,
                    item: (0, eG.OB)(i, l),
                    autoPlayGif: n,
                    canRemoveItem: r && (d.length > 1 || '' !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: h,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  (e.stopPropagation(), e.preventDefault(), a(e, o));
                              }
                            : void 0,
                    renderAudioComponent: _ ? eL.jY : eL.q7,
                    renderImageComponent: eL.dS,
                    renderVideoComponent: eL.vZ,
                    renderPlaintextFilePreview: eL.d4,
                    renderGenericFileComponent: eL.ZK,
                    renderMosaicItemFooter: eL.L9,
                    onPlay: (e, n, r) => {
                        e_.default.track(eK.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type,
                            type: i.content_type,
                            flags: i.flags,
                            size: i.size,
                            duration: r
                        });
                    },
                    gifFavoriteButton: e5(o),
                    isSearchResult: this.props.isSearchResult
                },
                c = (0, eg.q)({
                    proxyURL: i.proxy_url,
                    url: i.url
                });
            return (c in m && g && ((s.onClick = m[c]), (s.handlePreloadImage = f[c])), s);
        });
        return (0, i.jsx)(eB.Z, { items: b });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eW.b.has(t.type) || (0, eb.l3)(t) || ((0, U.b)(t) && !(0, F.M)(e)) || (0, eb.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eU.Yi,
                      renderVideoComponent: eU.lV,
                      renderLinkComponent: eU.iT
                  };
                  if (t.type === eK.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let l = ex.Z.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let a = l.pathname.split('/')[3];
                          if (null != a)
                              return (0, i.jsx)(
                                  g.Z,
                                  {
                                      skuId: a,
                                      renderFallback: () => this.renderEmbed(t, n, r, e)
                                  },
                                  t.id
                              );
                      }
                  }
                  return this.renderEmbed(t, n, r, e);
              })
            : null;
    }
    renderComponentAccessories(e) {
        if (0 === e.components.length) return null;
        let { gifAutoPlay: t, enabledContentHarmTypeFlags: n, shouldHideMediaOptions: r, disableComponentInteractivity: l, onMediaItemContextMenu: a } = this.props;
        return (0, i.jsx)(ek.F, {
            gifAutoPlay: t,
            getGifFavButton: e5,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          (t.stopPropagation(), t.preventDefault(), null == a || a(t, e));
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(B.ZP, {
                message: e,
                shouldDisableInteractiveComponents: l
            })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eM.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eK.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(v.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eO.Pv)(e)
            ? (0, i.jsx)(ew.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, el.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      ea.Z,
                      {
                          channel: n,
                          isInteracting: r,
                          renderableSticker: e
                      },
                      e.id
                  )
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eK.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(es.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (e.hasFlag(eK.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - eC.default.extractTimestamp(e.id) >= e3))
            return (0, i.jsx)('div', {
                className: eq.threadRoleMentionFailure,
                children: eX.intl.string(eX.t.ma8Rs7)
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.sYh, {
            dismissable: !0,
            header: eX.intl.string(eX.t.VL1KOj),
            confirmText: eX.intl.string(eX.t.YEHppK),
            cancelText: eX.intl.string(eX.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                (m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 }));
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-default',
                    className: eq.confirmText,
                    children: eX.intl.string(eX.t['vXZ+Fh'])
                }),
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eX.intl.string(eX.t['5j2by8'])
                })
            ]
        });
    }
    renderRemoveAttachmentConfirmModal() {
        let { channel: e, message: t } = this.props,
            { attachmentToDelete: n } = this.state;
        return null == n
            ? void this.setState({ showRemoveAttachmentModal: !1 })
            : (0, i.jsx)(p.sYh, {
                  dismissable: !0,
                  header: eX.intl.string(eX.t.CbTIEh),
                  confirmText: eX.intl.string(eX.t.kFwAsb),
                  cancelText: eX.intl.string(eX.t['ETE/oK']),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      (m.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null
                          }));
                  },
                  children: (0, i.jsx)(p.Text, {
                      variant: 'text-md/normal',
                      color: 'text-default',
                      className: eq.confirmText,
                      children: eX.intl.string(eX.t.faHmOz)
                  })
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eF.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eA.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eK.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      Y.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_POLICY_NOTICE ? (0, i.jsx)(er.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)(ei.g, { embed: e.embeds[0] }) : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, S.kC)(e) ? (0, i.jsx)(N.Z, { message: e }) : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(Q.Z, {
                message: e,
                poll: t,
                className: eq.pollContainer
            });
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(en.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(A.Z, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eV.Z, {
            message: e,
            compact: t,
            location: eV.H.AFTER_ACCESSORIES
        });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: l, showRemoveAttachmentModal: a } = this.state,
            s = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderReferralTrial(t),
            p = this.renderAttachments(t),
            m = this.renderCtaButton(),
            f = this.renderSocialProofingFileSizeNitroUpsell(t),
            g = this.renderEmbeds(t),
            _ = this.renderActivityInvite(t),
            h = this.renderReactions(t),
            b = this.renderPublishBump(t),
            E = this.renderEphemeralAccessories(t),
            C = this.renderStickersAccessories(t),
            x = this.renderThreadAccessories(t),
            v = this.renderComponentAccessories(t),
            y = this.renderThreadRoleMentionWarning(t),
            O = this.renderEmbeddedApplicationInstanceEmbed(t),
            j = this.renderInteractionPremiumUpsell(t),
            I = this.renderMediaPostEmbeds(t),
            S = this.renderSafetyPolicyNotice(t),
            T = this.renderSafetySystemNotification(t),
            N = this.renderMediaObscureNotice(t),
            P = this.renderPoll(t, n),
            A = this.renderForwardedMessage(t),
            w = this.renderReportedMessage(t);
        return null == c && null == p && null == g && null == _ && null == h && null == u && null == d && null == b && null == E && null == C && null == x && null == v && null == O && null == y && null == I && null == S && null != j && null == P && null == A && null == w
            ? null
            : (0, i.jsxs)('div', {
                  id: (0, eD.bX)(t),
                  className: o()(e, eq.container),
                  children: [w, A, y, P, c, u, d, I, p, m, g, N, _, C, v, O, j, f, s, h, b, E, l && this.renderSuppressConfirmModal(), a && this.renderRemoveAttachmentConfirmModal(), x, S, T]
              });
    }
    constructor(...e) {
        (super(...e),
            eJ(this, 'state', {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null
            }),
            eJ(this, 'getAcceptInviteContext', (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id
                };
            }),
            eJ(this, 'renderEmbed', (e, t, n, r) => {
                let { gifAutoPlay: l, inlineEmbedMedia: a, canSuppressEmbeds: o, hasSpoilerEmbeds: s, enabledContentHarmTypeFlags: c, isSearchResult: u, shouldAgeVerify: d } = this.props,
                    p = r.channel_id,
                    m = r.id,
                    f = (0, ey.BP)(e, p, m, s, c);
                return e.type === eK.hBH.GIFT
                    ? null
                    : (0, i.jsx)(
                          w.h.Provider,
                          {
                              value: (0, ez.P)(e.url, e.image, e.video),
                              children: (0, i.jsx)(
                                  y.ZP,
                                  e$(
                                      {
                                          embed: e,
                                          obscureReason: null != f ? f : void 0,
                                          autoPlayGif: l,
                                          hideMedia: !a,
                                          allowFullScreen: !this.props.disableComponentInteractivity,
                                          onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                                          renderTitle: this.renderEmbedTitle,
                                          renderDescription: this.renderEmbedDescription,
                                          message: r,
                                          showImageRecs: !1,
                                          isSearchResult: u,
                                          embedIndex: t,
                                          shouldAgeVerify: null != d && d
                                      },
                                      n
                                  )
                              )
                          },
                          e.id
                      );
            }),
            eJ(this, 'renderEmbedTitle', (e, t) => (e.type === eK.hBH.RICH ? V.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eJ(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eK.hBH.RICH
                    ? V.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks
                      })
                    : t
            ),
            eJ(this, 'handleEmbedSuppressed', (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eJ(this, 'handleRemoveAttachment', (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t
                });
            }));
    }
}
function e6(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        o = (0, c.e7)([eu.default], () => eu.default.getId()),
        s = ec.x4.useSetting(),
        u = ec.RS.useSetting(),
        d = ec.NA.useSetting() && !(0, eT.Z)(e.message),
        p = ec.nc.useSetting() && !1 !== e.renderReactions,
        m = ec.QK.useSetting(),
        f = (0, c.e7)([ep.Z], () => null == n.guild_id || ep.Z.canChatInGuild(n.guild_id), [n]),
        g = (0, c.e7)([G.Z], () => null != n.guild_id && G.Z.isLurking(n.guild_id), [n]),
        _ = (0, c.e7)([ed.ZP], () => ed.ZP.isCurrentUserGuest(n.guild_id), [n]),
        h = (0, c.e7)([ed.ZP, ef.default], () => {
            var e, t;
            let r = ef.default.getCurrentUser();
            return null != (t = null != n.guild_id && null != r ? (null == (e = ed.ZP.getMember(n.guild_id, r.id)) ? void 0 : e.isPending) : null) && t;
        }),
        { canAddNewReactions: b, canManageMessages: E } = (0, c.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: f && em.Z.can(eK.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eK.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        C = (0, R.ux)(n.guild_id),
        [, x] = (0, L.AB)(n.guild_id),
        v = (0, eo.$R)(n),
        y = (o === r.author.id || E) && r.author.id !== eK.LAt && !1 !== l && !(0, eE.yE)(r.flags, eK.iLy.EPHEMERAL) && v && 1 === (0, eS.Z)(r),
        O = o === r.author.id && v && !a,
        j = r.author.id === o,
        S = r.isFirstMessageInForumPost(n),
        N = (0, eN.Z)({
            channel: n,
            canChat: f,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: g,
            isGuest: _,
            communicationDisabled: x,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: C
        }),
        P = (0, H.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        A = (0, K.Z)(null == n ? void 0 : n.id),
        w = (0, q.Z)(r),
        Z = (0, T.v)(r),
        D = (0, eI._)(n),
        k = (0, ev.ro)(r.id, r.channel_id),
        M = (0, I.m8)();
    return (0, i.jsx)(
        e8,
        e0(
            e$(
                e0(
                    e$(
                        {
                            canSuppressEmbeds: y,
                            canDeleteAttachments: O
                        },
                        N
                    ),
                    { disableReactionReads: !!S || N.disableReactionReads }
                ),
                e
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && D,
                isLurking: g && f,
                isGuest: _ && f,
                isPendingMember: h && f,
                isCurrentUser: j,
                inlineAttachmentMedia: s,
                inlineEmbedMedia: u,
                renderEmbeds: d,
                gifAutoPlay: m,
                canRenderReferralEmbed: n.isDM(),
                poll: w,
                showListsAndHeaders: P,
                showMaskedLinks: P,
                shouldHideMediaOptions: A,
                enabledContentHarmTypeFlags: Z,
                ctaButtonType: k,
                shouldAgeVerify: M
            }
        )
    );
}
eJ(e8, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e4 = (e) => {
    var t,
        { message: n, channel: r, disableReactionReads: l = !1, renderThreadAccessory: a = !1, disableReactionCreates: o = !0, disableReactionUpdates: s = !0, disableComponentInteractivity: c = !0, isSearchResult: u = !1 } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['message', 'channel', 'disableReactionReads', 'renderThreadAccessory', 'disableReactionCreates', 'disableReactionUpdates', 'disableComponentInteractivity', 'isSearchResult']);
    let p = ec.x4.useSetting(),
        m = ec.RS.useSetting(),
        f = ec.NA.useSetting(),
        g = ec.QK.useSetting(),
        _ = (0, H.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        h = (0, K.Z)(null == r ? void 0 : r.id),
        b = (0, T.v)(n),
        E = (0, ev.ro)(n.id, n.channel_id),
        C = (0, q.Z)(n);
    return (0, i.jsx)(
        e8,
        e0(e$({}, d), {
            message: n,
            channel: r,
            disableReactionReads: l,
            disableReactionCreates: o,
            disableReactionUpdates: s,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: a,
            inlineAttachmentMedia: p,
            inlineEmbedMedia: m,
            renderEmbeds: f,
            gifAutoPlay: g,
            poll: C,
            showListsAndHeaders: _,
            showMaskedLinks: _,
            shouldHideMediaOptions: h,
            enabledContentHarmTypeFlags: b,
            ctaButtonType: E,
            isSearchResult: u
        })
    );
};
