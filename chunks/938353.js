n.d(t, {
    $p: () => e4,
    BB: () => e8,
    ZP: () => e2
}),
    n(388685),
    n(35282),
    n(997841),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(415506),
    n(361932),
    n(187205);
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
    h = n(626799),
    g = n(624367),
    _ = n(183431),
    b = n(421474),
    x = n(603270),
    E = n(162297),
    y = n(222709),
    v = n(446411),
    O = n(960904),
    j = n(161314),
    C = n(247206),
    S = n(25610),
    I = n(761538),
    N = n(674611),
    T = n(294734),
    P = n(947849),
    A = n(10433),
    w = n(715903),
    Z = n(71619),
    R = n(637618),
    k = n(225890),
    D = n(364097),
    L = n(495129),
    M = n(939170),
    U = n(187506),
    F = n(954654),
    B = n(41776),
    G = n(628238),
    H = n(454585),
    V = n(768494),
    z = n(124347),
    W = n(976853),
    K = n(346013),
    Y = n(207982),
    X = n(977683),
    q = n(128435),
    Q = n(98278),
    J = n(614825),
    $ = n(265299),
    ee = n(982168),
    et = n(163038),
    en = n(699833),
    er = n(344997),
    ei = n(378233),
    el = n(374425),
    ea = n(665906),
    eo = n(432147),
    es = n(695346),
    ec = n(314897),
    eu = n(271383),
    ed = n(607744),
    ep = n(496675),
    em = n(594174),
    ef = n(52824),
    eh = n(626135),
    eg = n(70956),
    e_ = n(408433),
    eb = n(630388),
    ex = n(709054),
    eE = n(591759),
    ey = n(594173),
    ev = n(169525),
    eO = n(786761),
    ej = n(161010),
    eC = n(255269),
    eS = n(461157),
    eI = n(901461),
    eN = n(432376),
    eT = n(384203),
    eP = n(633957),
    eA = n(530472),
    ew = n(29909),
    eZ = n(782658),
    eR = n(219797),
    ek = n(453687),
    eD = n(128854),
    eL = n(101578),
    eM = n(524444),
    eU = n(319323),
    eF = n(884182),
    eB = n(546432),
    eG = n(920888),
    eH = n(328966),
    eV = n(817384),
    ez = n(981631),
    eW = n(474936),
    eK = n(388032),
    eY = n(813102),
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
function eQ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eq(e, t, n[t]);
            });
    }
    return e;
}
function eJ(e, t) {
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
function e$() {
    return (0, i.jsxs)('div', {
        className: eY.nitroFileSizeUpsell,
        children: [
            (0, i.jsx)('img', {
                src: eX,
                className: eY.nitroBadgeSvg,
                alt: ''
            }),
            (0, i.jsx)(p.Text, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                children: eK.intl.format(eK.t['G/H+s7'], { onClick: () => (0, Q.z)() })
            })
        ]
    });
}
let e0 = 15 * eg.Z.Millis.MINUTE,
    e1 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e3 = (e, t, n) => () => {
        let r = null != t ? t : n;
        if (null == r) return null;
        let { url: l, proxyURL: a, width: o, height: s } = r;
        return (0, i.jsx)(ew.Z, {
            width: o,
            height: s,
            src: null != a && '' !== a ? a : l,
            url: null != e && '' !== e ? e : null != a && '' !== a ? a : l,
            format: null != n ? u.EO.VIDEO : u.EO.IMAGE,
            className: eY.gifFavoriteButton
        });
    },
    e5 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: l, srcIsAnimated: a } = e;
        return null != r && null != l && (z.uo.test(n) || (a && (z.YG.test(n) || z.FH.test(n))))
            ? (0, i.jsx)(ew.Z, {
                  width: r,
                  height: l,
                  src: n,
                  url: t,
                  format: u.EO.IMAGE,
                  className: eY.gifFavoriteButton
              })
            : null;
    };
class e8 extends (r = l.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e1.has(e));
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
            case ey.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(N.Z, {
                    messageId: e.id,
                    channelId: t.id
                });
                break;
            case ey.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(_.Z, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)('div', {
            className: eY.ctaButtonContainer,
            children: r
        });
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eW.Lw);
        return (0, ej.M)('attachment') && t ? (0, i.jsx)(e$, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: l } = t;
                  if (n === O.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eZ.Z,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === O.g.TEMPLATE) return (0, i.jsx)(D.Z, { code: r }, r);
                  if (n === O.g.EVENT) return (0, i.jsx)(k.Z, { code: r }, r);
                  if (n === O.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eT.Z,
                          {
                              code: r,
                              message: e
                          },
                          r
                      );
                  if (n === O.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          A.Z,
                          {
                              code: r,
                              message: e,
                              embedUrl: l
                          },
                          r
                      );
                  else if (n === O.g.ACTIVITY_BOOKMARK) {
                      var a, o, s;
                      let t = new URL(l),
                          n = null != (a = t.searchParams.get('referrer_id')) ? a : e.author.id,
                          c = null != (o = t.searchParams.get('custom_id')) ? o : void 0,
                          u = null != (s = t.searchParams.get('link_id')) ? s : void 0;
                      return (0, i.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: n,
                              customId: c,
                              linkId: u,
                              embedUrl: l
                          },
                          r
                      );
                  } else if (n === O.g.GUILD_PRODUCT) return (0, i.jsx)(R.Z, { code: r }, r);
                  else if (n === O.g.SERVER_SHOP) return (0, i.jsx)(j.Z, { guildId: r }, r);
                  else if (n === O.g.QUESTS_EMBED) return (0, i.jsx)($.Z, { questId: r }, r);
                  else if (n === O.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          x.P,
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
                                x.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e
                                },
                                r
                            );
                  } else if (n === O.g.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          E.Z,
                          {
                              applicationId: r,
                              embedUrl: l
                          },
                          r
                      );
                  else if (n === O.g.COLLECTIBLES_SHOP) return null;
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: l, content: a, giftInfo: o } = e,
            s = em.default.getCurrentUser();
        return null != s && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      'div',
                      {
                          className: eY.giftCodeContainer,
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
                      className: eY.referralContainer,
                      children: (0, i.jsx)(J.Z, {
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
            : (0, i.jsx)(eG.Z, {
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
        let { channel: t, gifAutoPlay: n, canDeleteAttachments: r, inlineAttachmentMedia: l, onMediaItemContextMenu: a, shouldRedactExplicitContent: o, shouldHideMediaOptions: s } = this.props,
            { attachments: c, flags: u } = e;
        if (0 === c.length || e.isPoll() || e.isComponentsV2()) return null;
        let d = c.filter((e) => null == e.flags || !(0, eb.yE)(e.flags, ez.J0y.IS_THUMBNAIL));
        if (0 === d.length) return null;
        let p = d
                .map((t) => {
                    var n;
                    return eJ(eQ({}, (0, V.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, eb.yE)(null != (n = t.flags) ? n : 0, ez.J0y.IS_ANIMATED)
                    });
                })
                .filter((e) => 'INVALID' !== e.type),
            { srcToOnClickOverride: m, srcToHandlePreloadImage: f } = (0, Y.G)(
                p,
                {
                    shouldRedactExplicitContent: o,
                    shouldHideMediaOptions: s
                },
                'Media Mosaic'
            ),
            h = p.length > 1,
            g = (0, eb.yE)(u, ez.iLy.IS_VOICE_MESSAGE);
        function _(e, t) {
            return (0, ev.dn)(e.originalItem, t);
        }
        let b = d.map((i) => {
            let o = (0, V.VY)(i),
                s = {
                    message: e,
                    item: (0, eB.OB)(i, l),
                    autoPlayGif: n,
                    canRemoveItem: r && (d.length > 1 || '' !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    className: eY.embedWrapper,
                    getObscureReason: _,
                    onContextMenu:
                        null != a
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), a(e, o);
                              }
                            : void 0,
                    renderAudioComponent: g ? eR.jY : eR.q7,
                    renderImageComponent: eR.dS,
                    renderVideoComponent: eR.vZ,
                    renderPlaintextFilePreview: eR.d4,
                    renderGenericFileComponent: eR.ZK,
                    renderMosaicItemFooter: eR.L9,
                    onPlay: (e, n, r) => {
                        eh.default.track(ez.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
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
                c = (0, ef.q)({
                    proxyURL: i.proxy_url,
                    url: i.url
                });
            return c in m && h && ((s.onClick = m[c]), (s.handlePreloadImage = f[c])), s;
        });
        return (0, i.jsx)(eF.Z, { items: b });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eV.b.has(t.type) || (0, e_.l3)(t) || ((0, M.b)(t) && !(0, U.M)(e)) || (0, e_.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eM.Yi,
                      renderVideoComponent: eM.lV,
                      renderLinkComponent: eM.iT
                  };
                  if (t.type === ez.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let l = eE.Z.safeParseWithQuery(t.url);
                      if (null != l && null != l.pathname) {
                          let a = l.pathname.split('/')[3];
                          if (null != a)
                              return (0, i.jsx)(
                                  h.Z,
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
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: r, disableComponentInteractivity: l, onMediaItemContextMenu: a } = this.props;
        return (0, i.jsx)(eD.F, {
            gifAutoPlay: t,
            getGifFavButton: e5,
            getOnMediaItemContextMenu:
                null == a
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == a || a(t, e);
                      },
            shouldHideMediaOptions: r,
            shouldRedactExplicitContent: n,
            children: (0, i.jsx)(F.ZP, {
                message: e,
                shouldDisableInteractiveComponents: l
            })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eL.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== ez.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(y.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eO.Pv)(e)
            ? (0, i.jsx)(eA.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ei.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      el.Z,
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
        if (e.hasFlag(ez.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(eo.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (e.hasFlag(ez.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - ex.default.extractTimestamp(e.id) >= e0))
            return (0, i.jsx)('div', {
                className: eY.threadRoleMentionFailure,
                children: eK.intl.string(eK.t.ma8Rs7)
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.sYh, {
            dismissable: !0,
            header: eK.intl.string(eK.t.VL1KOj),
            confirmText: eK.intl.string(eK.t.YEHppK),
            cancelText: eK.intl.string(eK.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eY.confirmText,
                    children: eK.intl.string(eK.t['vXZ+Fh'])
                }),
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: eK.intl.string(eK.t['5j2by8'])
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
                  header: eK.intl.string(eK.t.CbTIEh),
                  confirmText: eK.intl.string(eK.t.kFwAsb),
                  cancelText: eK.intl.string(eK.t['ETE/oK']),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      m.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null
                          });
                  },
                  children: (0, i.jsx)(p.Text, {
                      variant: 'text-md/normal',
                      color: 'text-normal',
                      className: eY.confirmText,
                      children: eK.intl.string(eK.t.faHmOz)
                  })
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eU.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eP.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== ez.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      K.Z,
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
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_POLICY_NOTICE ? (0, i.jsx)(en.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === ez.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)(er.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === ez.hBH.VOICE_CHANNEL)
            return (0, i.jsx)(L.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, C.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, i.jsx)(I.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)(q.Z, {
                message: e,
                poll: t,
                className: eY.pollContainer
            });
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, ee.Q3)(e, this.props.channel)) return (0, i.jsx)(et.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, ee.Q3)(e, this.props.channel)) return (0, i.jsx)(T.Z, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eH.Z, {
            message: e,
            compact: t,
            location: eH.H.AFTER_ACCESSORIES
        });
    }
    render() {
        let { className: e, message: t, channel: n, poll: r, compact: l } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: s } = this.state,
            c = this.renderEditedTag(t, l),
            u = this.renderCodedLinks(t),
            d = this.renderGiftCodes(t),
            p = this.renderReferralTrial(t),
            m = this.renderAttachments(t),
            f = this.renderCtaButton(),
            h = this.renderSocialProofingFileSizeNitroUpsell(t),
            g = this.renderEmbeds(t),
            _ = this.renderActivityInvite(t),
            b = this.renderReactions(t),
            x = this.renderPublishBump(t),
            E = this.renderEphemeralAccessories(t),
            y = this.renderStickersAccessories(t),
            v = this.renderThreadAccessories(t),
            O = this.renderComponentAccessories(t),
            j = this.renderThreadRoleMentionWarning(t),
            C = this.renderEmbeddedApplicationInstanceEmbed(t),
            S = this.renderInteractionPremiumUpsell(t),
            I = this.renderMediaPostEmbeds(t),
            N = this.renderSafetyPolicyNotice(t),
            T = this.renderSafetySystemNotification(t),
            P = this.renderVoiceChannelInvite(t, n),
            A = this.renderMediaObscureNotice(t),
            w = this.renderPoll(t, r),
            Z = this.renderForwardedMessage(t),
            R = this.renderReportedMessage(t);
        return null == u && null == m && null == g && null == _ && null == b && null == d && null == p && null == x && null == E && null == y && null == v && null == O && null == C && null == j && null == I && null == N && null != S && null == w && null == P && null == Z && null == R
            ? null
            : (0, i.jsxs)('div', {
                  id: (0, ek.bX)(t),
                  className: o()(e, eY.container),
                  children: [R, Z, j, w, u, d, p, I, m, f, g, A, _, y, O, C, S, h, c, b, x, E, a && this.renderSuppressConfirmModal(), s && this.renderRemoveAttachmentConfirmModal(), v, N, T, P]
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
            eq(this, 'renderEmbed', (e, t, n, r) => {
                let { gifAutoPlay: l, inlineEmbedMedia: a, canSuppressEmbeds: o, hasSpoilerEmbeds: s, shouldRedactExplicitContent: c, isSearchResult: u } = this.props,
                    d = r.channel_id,
                    p = r.id,
                    m = (0, ev.BP)(e, d, p, s, c);
                return e.type === ez.hBH.GIFT
                    ? null
                    : (0, i.jsx)(
                          P.h.Provider,
                          {
                              value: e3(e.url, e.image, e.video),
                              children: (0, i.jsx)(
                                  v.ZP,
                                  eQ(
                                      {
                                          className: eY.embedWrapper,
                                          embed: e,
                                          obscureReason: null != m ? m : void 0,
                                          autoPlayGif: l,
                                          hideMedia: !a,
                                          onSuppressEmbed: o ? this.handleEmbedSuppressed : void 0,
                                          renderTitle: this.renderEmbedTitle,
                                          renderDescription: this.renderEmbedDescription,
                                          message: r,
                                          showImageRecs: !1,
                                          isSearchResult: u,
                                          embedIndex: t
                                      },
                                      n
                                  )
                              )
                          },
                          e.id
                      );
            }),
            eq(this, 'renderEmbedTitle', (e, t) => (e.type === ez.hBH.RICH ? H.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eq(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === ez.hBH.RICH
                    ? H.Z.parse(t, !0, {
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
                e.shiftKey ? m.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
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
function e2(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: l, isMessageSnapshot: a } = e,
        o = (0, c.e7)([ec.default], () => ec.default.getId()),
        s = es.x4.useSetting(),
        u = es.RS.useSetting(),
        d = es.NA.useSetting() && !(0, eI.Z)(e.message),
        p = es.nc.useSetting() && !1 !== e.renderReactions,
        m = es.QK.useSetting(),
        f = (0, c.e7)([ed.Z], () => null == n.guild_id || ed.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([B.Z], () => null != n.guild_id && B.Z.isLurking(n.guild_id), [n]),
        g = (0, c.e7)([eu.ZP], () => eu.ZP.isCurrentUserGuest(n.guild_id), [n]),
        _ = (0, c.e7)([eu.ZP, em.default], () => {
            var e, t;
            let r = em.default.getCurrentUser();
            return null != (t = null != n.guild_id && null != r ? (null == (e = eu.ZP.getMember(n.guild_id, r.id)) ? void 0 : e.isPending) : null) && t;
        }),
        { canAddNewReactions: b, canManageMessages: x } = (0, c.cj)(
            [ep.Z],
            () => ({
                canAddNewReactions: f && ep.Z.can(ez.Plq.ADD_REACTIONS, n),
                canManageMessages: ep.Z.can(ez.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        E = (0, w.ux)(n.guild_id),
        [, y] = (0, Z.AB)(n.guild_id),
        v = (0, ea.$R)(n),
        O = (o === r.author.id || x) && r.author.id !== ez.LAt && !1 !== l && !(0, eb.yE)(r.flags, ez.iLy.EPHEMERAL) && v && 1 === (0, eS.Z)(r),
        j = o === r.author.id && v && !a,
        C = r.author.id === o,
        I = r.isFirstMessageInForumPost(n),
        N = (0, eN.Z)({
            channel: n,
            canChat: f,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: h,
            isGuest: g,
            communicationDisabled: y,
            isActiveChannelOrUnarchivableThread: v,
            isAutomodQuarantined: E
        }),
        T = (0, G.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        P = (0, W.Z)(null == n ? void 0 : n.id),
        A = (0, X.Z)(r),
        R = (0, S.V)(n.id, r.author.id),
        k = (0, eC._)(n),
        D = (0, ey.ro)(r.id, r.channel_id);
    return (0, i.jsx)(
        e8,
        eJ(
            eQ(
                eJ(
                    eQ(
                        {
                            canSuppressEmbeds: O,
                            canDeleteAttachments: j
                        },
                        N
                    ),
                    { disableReactionReads: !!I || N.disableReactionReads }
                ),
                e
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && k,
                isLurking: h && f,
                isGuest: g && f,
                isPendingMember: _ && f,
                isCurrentUser: C,
                inlineAttachmentMedia: s,
                inlineEmbedMedia: u,
                renderEmbeds: d,
                gifAutoPlay: m,
                canRenderReferralEmbed: n.isDM(),
                poll: A,
                showListsAndHeaders: T,
                showMaskedLinks: T,
                shouldHideMediaOptions: P,
                shouldRedactExplicitContent: R,
                ctaButtonType: D
            }
        )
    );
}
eq(e8, 'defaultProps', {
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
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['message', 'channel', 'disableReactionReads', 'renderThreadAccessory', 'disableReactionCreates', 'disableReactionUpdates', 'disableComponentInteractivity', 'isSearchResult']);
    let p = es.x4.useSetting(),
        m = es.RS.useSetting(),
        f = es.NA.useSetting(),
        h = es.QK.useSetting(),
        g = (0, G.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        _ = (0, W.Z)(null == r ? void 0 : r.id),
        b = (0, S.V)(r.id, n.author.id),
        x = (0, ey.ro)(n.id, n.channel_id),
        E = (0, X.Z)(n);
    return (0, i.jsx)(
        e8,
        eJ(eQ({}, d), {
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
            gifAutoPlay: h,
            poll: E,
            showListsAndHeaders: g,
            showMaskedLinks: g,
            shouldHideMediaOptions: _,
            shouldRedactExplicitContent: b,
            ctaButtonType: x,
            isSearchResult: u
        })
    );
};
