n.d(t, {
    $p: () => e5,
    BB: () => e4,
    ZP: () => e9
}),
    n(47120),
    n(301563),
    n(789020),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(411104),
    n(13667),
    n(390547);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(275726),
    c = n(442837),
    d = n(377108),
    u = n(902704),
    p = n(481060),
    m = n(904245),
    f = n(637374),
    h = n(626799),
    g = n(624367),
    _ = n(433074),
    b = n(421474),
    v = n(603270),
    y = n(162297),
    x = n(222709),
    O = n(446411),
    E = n(960904),
    j = n(161314),
    N = n(247206),
    C = n(25610),
    I = n(703751),
    S = n(761538),
    P = n(674611),
    T = n(346610),
    A = n(868643),
    w = n(294734),
    Z = n(426275),
    k = n(947849),
    R = n(715903),
    L = n(71619),
    D = n(637618),
    M = n(225890),
    W = n(364097),
    F = n(495129),
    U = n(939170),
    B = n(187506),
    G = n(954654),
    H = n(41776),
    V = n(628238),
    z = n(454585),
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
    er = n(699833),
    ei = n(344997),
    ea = n(378233),
    eo = n(374425),
    el = n(665906),
    es = n(432147),
    ec = n(695346),
    ed = n(314897),
    eu = n(271383),
    ep = n(607744),
    em = n(496675),
    ef = n(594174),
    eh = n(52824),
    eg = n(626135),
    e_ = n(70956),
    eb = n(408433),
    ev = n(630388),
    ey = n(709054),
    ex = n(591759),
    eO = n(169525),
    eE = n(786761),
    ej = n(161010),
    eN = n(255269),
    eC = n(461157),
    eI = n(901461),
    eS = n(432376),
    eP = n(384203),
    eT = n(633957),
    eA = n(530472),
    ew = n(29909),
    eZ = n(782658),
    ek = n(219797),
    eR = n(453687),
    eL = n(128854),
    eD = n(101578),
    eM = n(524444),
    eW = n(319323),
    eF = n(884182),
    eU = n(546432),
    eB = n(920888),
    eG = n(817384),
    eH = n(981631),
    eV = n(474936),
    ez = n(388032),
    eK = n(656017),
    eY = n(598746),
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
                children: ez.NW.format(ez.t['G/H+s7'], { onClick: () => (0, ee.z)() })
            })
        ]
    });
}
let e0 = 15 * e_.Z.Millis.MINUTE,
    e1 = new Set(['discord-developers', 'discord-testers', 'discord-townhall', 'discordgameslab']),
    e2 = (e, t, n) => () => {
        let r = null != t ? t : n;
        if (null == r) return null;
        let { url: a, proxyURL: o, width: l, height: s } = r;
        return (0, i.jsx)(ew.Z, {
            width: l,
            height: s,
            src: null != o && '' !== o ? o : a,
            url: null != e && '' !== e ? e : null != o && '' !== o ? o : a,
            format: null != n ? d.EO.VIDEO : d.EO.IMAGE,
            className: eY.gifFavoriteButton
        });
    },
    e3 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, srcIsAnimated: o } = e;
        return null != r && null != a && (Y.uo.test(n) || (o && (Y.YG.test(n) || Y.FH.test(n))))
            ? (0, i.jsx)(ew.Z, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: d.EO.IMAGE,
                  className: eY.gifFavoriteButton
              })
            : null;
    };
class e4 extends (r = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e1.has(e));
    }
    shouldComponentUpdate(e, t) {
        var n, r;
        let { channel: i, message: a, poll: o } = this.props,
            { channel: l, message: s, poll: c } = e;
        return (
            !(0, u.Z)(this.state, t) ||
            !(0, u.Z)(this.props, e, ['message', 'channel']) ||
            i.type !== l.type ||
            c !== o ||
            s.codedLinks !== a.codedLinks ||
            s.flags !== a.flags ||
            s.giftCodes !== a.giftCodes ||
            s.attachments !== a.attachments ||
            s.embeds !== a.embeds ||
            s.components !== a.components ||
            s.activity !== a.activity ||
            ((n = s.reactions) !== (r = a.reactions) &&
                (n.length !== r.length ||
                    !!n.some((e, t) => {
                        let { emoji: n, count: i, burst_count: a } = e,
                            { emoji: o, count: l, burst_count: s } = r[t];
                        return a !== s || i !== l || n.id !== o.id || n.name !== o.name;
                    })))
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, shouldRenderCtaButton: n } = this.props;
        return n
            ? (0, i.jsx)('div', {
                  className: eY.ctaButtonContainer,
                  children: (0, i.jsx)(P.Z, {
                      messageId: e.id,
                      channelId: t.id
                  })
              })
            : null;
    }
    renderSocialProofingFileSizeNitroUpsell(e) {
        let t = e.attachments.some((e) => e.size > eV.Lw);
        return (0, ej.M)('attachment') && t ? (0, i.jsx)(e$, {}) : null;
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === E.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eZ.Z,
                                {
                                    code: r,
                                    author: e.author,
                                    getAcceptInviteContext: this.getAcceptInviteContext
                                },
                                r
                            )
                          : null;
                  if (n === E.g.TEMPLATE) return (0, i.jsx)(W.Z, { code: r }, r);
                  if (n === E.g.EVENT) return (0, i.jsx)(M.Z, { code: r }, r);
                  if (n === E.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eP.Z,
                          {
                              code: r,
                              messageData: e
                          },
                          r
                      );
                  if (n === E.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          _.Z,
                          {
                              code: r,
                              message: e,
                              embedUrl: a
                          },
                          r
                      );
                  else if (n === E.g.ACTIVITY_BOOKMARK) {
                      var o, l;
                      let t = new URL(a),
                          n = null !== (o = t.searchParams.get('referrer_id')) && void 0 !== o ? o : e.author.id,
                          s = null !== (l = t.searchParams.get('custom_id')) && void 0 !== l ? l : void 0;
                      return (0, i.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: n,
                              customId: s,
                              embedUrl: a
                          },
                          r
                      );
                  } else if (n === E.g.GUILD_PRODUCT) return (0, i.jsx)(D.Z, { code: r }, r);
                  else if (n === E.g.SERVER_SHOP) return (0, i.jsx)(j.Z, { guildId: r }, r);
                  else if (n === E.g.QUESTS_EMBED) return (0, i.jsx)(en.Z, { questId: r }, r);
                  else if (n === E.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          v.P,
                          {
                              appId: r,
                              message: e
                          },
                          r
                      );
                  else if (n === E.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, b.Q)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                v.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e
                                },
                                r
                            );
                  } else if (n === E.g.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          y.Z,
                          {
                              applicationId: r,
                              embedUrl: a
                          },
                          r
                      );
                  else if (n === E.g.COLLECTIBLES_SHOP) return null;
                  else throw Error('Unknown coded link type: '.concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: o, giftInfo: l } = e,
            s = ef.default.getCurrentUser();
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
                              type: a,
                              content: o,
                              giftInfo: l
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
                      children: (0, i.jsx)(et.Z, {
                          userTrialOfferId: t,
                          canRenderReferralEmbed: null != r && r
                      })
                  },
                  t
              );
    }
    renderReactions(e) {
        let { disableReactionCreates: t, disableReactionReads: n, disableReactionUpdates: r, isLurking: a, isGuest: o, isPendingMember: l, channel: s, forceAddReactions: c } = this.props;
        return n
            ? null
            : (0, i.jsx)(eB.Z, {
                  message: e,
                  channel: s,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: a,
                  isGuest: o,
                  isPendingMember: l,
                  forceAddReactions: c,
                  useChatFontScaling: !0
              });
    }
    renderAttachments(e) {
        let { channel: t, hasInlineForwardButton: n, gifAutoPlay: r, canDeleteAttachments: a, inlineAttachmentMedia: o, onMediaItemContextMenu: l, shouldRedactExplicitContent: s, shouldHideMediaOptions: c } = this.props,
            { attachments: d, flags: u } = e;
        if (0 === d.length || e.isPoll() || e.isComponentsV2()) return null;
        let p = d.filter((e) => null == e.flags || !(0, ev.yE)(e.flags, eH.J0y.IS_THUMBNAIL));
        if (0 === p.length) return null;
        let m = p
                .map((t) => {
                    var n;
                    return eJ(eQ({}, (0, K.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, ev.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, eH.J0y.IS_ANIMATED)
                    });
                })
                .filter((e) => 'INVALID' !== e.type),
            { srcToOnClickOverride: f, srcToHandlePreloadImage: h } = (0, Q.J)(
                m,
                {
                    shouldRedactExplicitContent: s,
                    shouldHideMediaOptions: c
                },
                'Media Mosaic'
            ),
            g = m.length > 1,
            _ = (0, ev.yE)(u, eH.iLy.IS_VOICE_MESSAGE);
        function b(e, t) {
            return (0, eO.dn)(e.originalItem, t);
        }
        let v = p.map((n) => {
                let i = (0, K.VY)(n),
                    s = {
                        message: e,
                        item: (0, eU.OB)(n, o),
                        autoPlayGif: r,
                        canRemoveItem: a && (p.length > 1 || '' !== e.content),
                        onRemoveItem: this.handleRemoveAttachment,
                        className: eY.embedWrapper,
                        getObscureReason: b,
                        onContextMenu:
                            null != l
                                ? (e) => {
                                      e.stopPropagation(), e.preventDefault(), l(e, i);
                                  }
                                : void 0,
                        renderAudioComponent: _ ? ek.jY : ek.q7,
                        renderImageComponent: ek.dS,
                        renderVideoComponent: ek.vZ,
                        renderPlaintextFilePreview: ek.d4,
                        renderGenericFileComponent: ek.ZK,
                        renderMosaicItemFooter: ek.L9,
                        onPlay: (e, r, i) => {
                            eg.default.track(eH.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                                guild_id: t.guild_id,
                                channel_id: t.id,
                                channel_type: t.type,
                                type: n.content_type,
                                flags: n.flags,
                                size: n.size,
                                duration: i
                            });
                        },
                        gifFavoriteButton: e3(i),
                        isSearchResult: this.props.isSearchResult
                    },
                    c = (0, eh.q)({
                        proxyURL: n.proxy_url,
                        url: n.url
                    });
                return c in f && (g && ((s.onClick = f[c]), (s.handlePreloadImage = h[c])), 'IMAGE' === s.item.type && (s.onViewItem = f[c])), s;
            }),
            y = n
                ? (0, i.jsx)(Z.Z, {
                      className: eK.hideIfMessageNotFocused,
                      messageId: e.id,
                      channelId: t.id,
                      targetKind: 'media'
                  })
                : void 0;
        return (0, i.jsx)(eF.Z, {
            items: v,
            inlineForwardButton: y
        });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t } = this.props;
        return 0 !== e.embeds.length && t
            ? e.embeds.map((t, n) => {
                  if (eG.b.has(t.type) || (0, eb.l3)(t) || ((0, U.b)(t) && !(0, B.M)(e)) || (0, eb.jz)(t)) return null;
                  let r = {
                      renderImageComponent: eM.Yi,
                      renderVideoComponent: eM.lV,
                      renderLinkComponent: eM.iT
                  };
                  if (t.type === eH.hBH.ARTICLE && null != t.url && /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) && null != t.provider && 'Discord' === t.provider.name) {
                      let a = ex.Z.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let o = a.pathname.split('/')[3];
                          if (null != o)
                              return (0, i.jsx)(
                                  h.Z,
                                  {
                                      skuId: o,
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
        let { gifAutoPlay: t, shouldRedactExplicitContent: n, shouldHideMediaOptions: r, disableComponentInteractivity: a, onMediaItemContextMenu: o } = this.props;
        return (0, i.jsx)(eL.F, {
            gifAutoPlay: t,
            getGifFavButton: e3,
            getOnMediaItemContextMenu:
                null == o
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == o || o(t, e);
                      },
            shouldHideMediaOptions: r,
            shouldRedactExplicitContent: n,
            children: (0, i.jsx)(G.ZP, {
                message: e,
                shouldDisableInteractiveComponents: a
            })
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eD.Z, {
            channel: t,
            message: e,
            hideParty: !1
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eH.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(x.Z, {
                  channelId: e.channel_id,
                  messageId: e.id
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eE.Pv)(e)
            ? (0, i.jsx)(eA.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      m.Z.dismissAutomatedMessage(e);
                  }
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, ea.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      eo.Z,
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
        if (e.hasFlag(eH.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(es.Z, {
                message: e,
                compact: this.props.compact
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (e.hasFlag(eH.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) && this.props.isCurrentUser && !(Date.now() - ey.default.extractTimestamp(e.id) >= e0))
            return (0, i.jsx)('div', {
                className: eY.threadRoleMentionFailure,
                children: ez.NW.string(ez.t.ma8Rs7)
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.sYh, {
            dismissable: !0,
            header: ez.NW.string(ez.t.VL1KOj),
            confirmText: ez.NW.string(ez.t.YEHppK),
            cancelText: ez.NW.string(ez.t['ETE/oK']),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                m.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-normal',
                    className: eY.confirmText,
                    children: ez.NW.string(ez.t['vXZ+Fh'])
                }),
                (0, i.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: ez.NW.string(ez.t['5j2by8'])
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
        return (0, i.jsx)(p.sYh, {
            dismissable: !0,
            header: ez.NW.string(ez.t.CbTIEh),
            confirmText: ez.NW.string(ez.t.kFwAsb),
            cancelText: ez.NW.string(ez.t['ETE/oK']),
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
                children: ez.NW.string(ez.t.faHmOz)
            })
        });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== s.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eW.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(eT.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eH.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
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
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_POLICY_NOTICE ? (0, i.jsx)(er.i, { message: e }) : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eH.hBH.SAFETY_SYSTEM_NOTIFICATION ? (0, i.jsx)(ei.g, { embed: e.embeds[0] }) : null;
    }
    renderVoiceChannelInvite(e, t) {
        if (1 === e.embeds.length && e.embeds[0].type === eH.hBH.VOICE_CHANNEL)
            return (0, i.jsx)(F.H, {
                message: e,
                channel: t
            });
    }
    renderMediaObscureNotice(e) {
        if (0 === e.attachments.length && 0 === e.embeds.length) return null;
        let { obscuredAttachments: t, obscuredEmbeds: n } = (0, N.Tw)(e);
        return 0 === t.length && 0 === n.length ? null : (0, i.jsx)(S.Z, { message: e });
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)($.Z, {
                message: e,
                poll: t,
                className: eY.pollContainer
            });
    }
    renderForwardedMessage(e) {
        return 0 === e.messageSnapshots.length ? null : (0, i.jsx)(w.Z, { message: e });
    }
    render() {
        let { className: e, message: t, channel: n, poll: r } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: o } = this.state,
            s = this.renderCodedLinks(t),
            c = this.renderGiftCodes(t),
            d = this.renderReferralTrial(t),
            u = this.renderAttachments(t),
            p = this.renderCtaButton(),
            m = this.renderSocialProofingFileSizeNitroUpsell(t),
            f = this.renderEmbeds(t),
            h = this.renderActivityInvite(t),
            g = this.renderReactions(t),
            _ = this.renderPublishBump(t),
            b = this.renderEphemeralAccessories(t),
            v = this.renderStickersAccessories(t),
            y = this.renderThreadAccessories(t),
            x = this.renderComponentAccessories(t),
            O = this.renderThreadRoleMentionWarning(t),
            E = this.renderEmbeddedApplicationInstanceEmbed(t),
            j = this.renderInteractionPremiumUpsell(t),
            N = this.renderMediaPostEmbeds(t),
            C = this.renderSafetyPolicyNotice(t),
            I = this.renderSafetySystemNotification(t),
            S = this.renderVoiceChannelInvite(t, n),
            P = this.renderMediaObscureNotice(t),
            T = this.renderPoll(t, r),
            A = this.renderForwardedMessage(t);
        return null == s && null == u && null == f && null == h && null == g && null == c && null == d && null == _ && null == b && null == v && null == y && null == x && null == E && null == O && null == N && null == C && null != j && null == T && null == S && null == A
            ? null
            : (0, i.jsxs)('div', {
                  id: (0, eR.bX)(t),
                  className: l()(e, eY.container),
                  children: [A, O, T, s, c, d, N, u, p, f, P, h, v, x, E, j, m, g, _, b, a && this.renderSuppressConfirmModal(), o && this.renderRemoveAttachmentConfirmModal(), y, C, I, S]
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
                let { gifAutoPlay: a, inlineEmbedMedia: o, canSuppressEmbeds: l, hasSpoilerEmbeds: s, shouldRedactExplicitContent: c, hasInlineForwardButton: d, isSearchResult: u } = this.props,
                    p = r.channel_id,
                    m = r.id,
                    f = (0, eO.BP)(e, p, m, s, c);
                if (e.type === eH.hBH.GIFT) return null;
                let h = (0, i.jsx)(
                    k.h.Provider,
                    {
                        value: e2(e.url, e.image, e.video),
                        children: (0, i.jsx)(
                            O.ZP,
                            eQ(
                                {
                                    className: eY.embedWrapper,
                                    embed: e,
                                    obscureReason: null != f ? f : void 0,
                                    autoPlayGif: a,
                                    hideMedia: !o,
                                    onSuppressEmbed: l ? this.handleEmbedSuppressed : void 0,
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
                return d
                    ? (0, i.jsxs)('div', {
                          className: eY.embedContainer,
                          children: [
                              h,
                              (0, i.jsx)(Z.Z, {
                                  className: eK.hideIfMessageNotFocused,
                                  messageId: m,
                                  channelId: p,
                                  targetKind: 'embed',
                                  embedIndex: t
                              })
                          ]
                      })
                    : h;
            }),
            eq(this, 'renderEmbedTitle', (e, t) => (e.type === eH.hBH.RICH ? z.Z.parseEmbedTitle(t, !0, { channelId: this.props.channel.id }) : t)),
            eq(this, 'renderEmbedDescription', (e, t, n) =>
                e.type === eH.hBH.RICH
                    ? z.Z.parse(t, !0, {
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
function e9(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: o } = e,
        l = (0, c.e7)([ed.default], () => ed.default.getId()),
        s = ec.x4.useSetting(),
        d = ec.RS.useSetting(),
        u = ec.NA.useSetting() && !(0, eI.Z)(e.message),
        p = ec.nc.useSetting() && !1 !== e.renderReactions,
        m = ec.QK.useSetting(),
        f = (0, c.e7)([ep.Z], () => null == n.guild_id || ep.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, c.e7)([H.Z], () => null != n.guild_id && H.Z.isLurking(n.guild_id), [n]),
        g = (0, c.e7)([eu.ZP], () => eu.ZP.isCurrentUserGuest(n.guild_id), [n]),
        _ = (0, c.e7)([eu.ZP, ef.default], () => {
            var e, t;
            let r = ef.default.getCurrentUser();
            return null !== (t = null != n.guild_id && null != r ? (null === (e = eu.ZP.getMember(n.guild_id, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canAddNewReactions: b, canManageMessages: v } = (0, c.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: f && em.Z.can(eH.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eH.Plq.MANAGE_MESSAGES, n)
            }),
            [f, n]
        ),
        y = (0, R.ux)(n.guild_id),
        [, x] = (0, L.AB)(n.guild_id),
        O = (0, el.$R)(n),
        E = (l === r.author.id || v) && r.author.id !== eH.LAt && !1 !== a && !(0, ev.yE)(r.flags, eH.iLy.EPHEMERAL) && O && 1 === (0, eC.Z)(r),
        j = l === r.author.id && O && !o,
        N = r.author.id === l,
        S = r.isFirstMessageInForumPost(n),
        P = (0, eS.Z)({
            channel: n,
            canChat: f,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: h,
            isGuest: g,
            communicationDisabled: x,
            isActiveChannelOrUnarchivableThread: O,
            isAutomodQuarantined: y
        }),
        w = (0, V.A)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()),
        Z = (0, X.Z)(null == n ? void 0 : n.id),
        k = (0, J.Z)(r),
        D = (0, C.V)(n.id, r.author.id),
        M = (0, I.r)(r.id),
        { hasInlineForwardButton: W } = (0, T.yk)({ location: 'MessageAccessories' }),
        F = (0, A.a)(r) && W,
        U = (0, eN._)(n);
    return (0, i.jsx)(
        e4,
        eJ(
            eQ(
                eJ(
                    eQ(
                        {
                            canSuppressEmbeds: E,
                            canDeleteAttachments: j
                        },
                        P
                    ),
                    { disableReactionReads: !!S || P.disableReactionReads }
                ),
                e
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && U,
                isLurking: h && f,
                isGuest: g && f,
                isPendingMember: _ && f,
                isCurrentUser: N,
                inlineAttachmentMedia: s,
                inlineEmbedMedia: d,
                renderEmbeds: u,
                gifAutoPlay: m,
                canRenderReferralEmbed: n.isDM(),
                poll: k,
                showListsAndHeaders: w,
                showMaskedLinks: w,
                shouldHideMediaOptions: Z,
                shouldRedactExplicitContent: D,
                shouldRenderCtaButton: M,
                hasInlineForwardButton: F
            }
        )
    );
}
eq(e4, 'defaultProps', {
    renderEmbeds: !0,
    compact: !1
});
let e5 = (e) => {
    var t,
        { message: n, channel: r, disableReactionReads: a = !1, renderThreadAccessory: o = !1, disableReactionCreates: l = !0, disableReactionUpdates: s = !0, disableComponentInteractivity: c = !0, isSearchResult: d = !1 } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['message', 'channel', 'disableReactionReads', 'renderThreadAccessory', 'disableReactionCreates', 'disableReactionUpdates', 'disableComponentInteractivity', 'isSearchResult']);
    let p = ec.x4.useSetting(),
        m = ec.RS.useSetting(),
        f = ec.NA.useSetting(),
        h = ec.QK.useSetting(),
        g = (0, V.A)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()),
        _ = (0, X.Z)(null == r ? void 0 : r.id),
        b = (0, C.V)(r.id, n.author.id),
        v = (0, I.r)(n.id),
        y = (0, J.Z)(n);
    return (0, i.jsx)(
        e4,
        eJ(eQ({}, u), {
            message: n,
            channel: r,
            disableReactionReads: a,
            disableReactionCreates: l,
            disableReactionUpdates: s,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: o,
            inlineAttachmentMedia: p,
            inlineEmbedMedia: m,
            renderEmbeds: f,
            gifAutoPlay: h,
            poll: y,
            showListsAndHeaders: g,
            showMaskedLinks: g,
            shouldHideMediaOptions: _,
            shouldRedactExplicitContent: b,
            shouldRenderCtaButton: v,
            hasInlineForwardButton: !1,
            isSearchResult: d
        })
    );
};
