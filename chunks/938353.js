n.d(t, {
    $p: () => e9,
    BB: () => e6,
    ZP: () => e7,
}),
    n(388685),
    n(997841),
    n(35282),
    n(415506),
    n(361932),
    n(187205);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(275726),
    c = n(95015),
    u = n(442837),
    d = n(377108),
    f = n(902704),
    p = n(481060),
    _ = n(904245),
    m = n(637374),
    h = n(626799),
    g = n(624367),
    E = n(183431),
    b = n(421474),
    y = n(603270),
    O = n(234431),
    v = n(162297),
    S = n(222709),
    I = n(446411),
    T = n(36129),
    C = n(960904),
    A = n(161314),
    N = n(247206),
    P = n(629710),
    R = n(262777),
    w = n(761538),
    D = n(674611),
    x = n(294734),
    L = n(947849),
    j = n(10433),
    M = n(715903),
    k = n(71619),
    U = n(637618),
    G = n(225890),
    Z = n(364097),
    F = n(939170),
    B = n(187506),
    V = n(954654),
    H = n(41776),
    Y = n(628238),
    W = n(454585),
    K = n(768494),
    z = n(124347),
    q = n(976853),
    Q = n(346013),
    X = n(120324),
    J = n(977683),
    $ = n(128435),
    ee = n(348066),
    et = n(982168),
    en = n(163038),
    er = n(699833),
    ei = n(344997),
    ea = n(614118),
    eo = n(378233),
    es = n(374425),
    el = n(665906),
    ec = n(432147),
    eu = n(695346),
    ed = n(23750),
    ef = n(314897),
    ep = n(271383),
    e_ = n(607744),
    em = n(496675),
    eh = n(594174),
    eg = n(52824),
    eE = n(626135),
    eb = n(70956),
    ey = n(408433),
    eO = n(709054),
    ev = n(591759),
    eS = n(594173),
    eI = n(169525),
    eT = n(786761),
    eC = n(255269),
    eA = n(461157),
    eN = n(901461),
    eP = n(432376),
    eR = n(384203),
    ew = n(633957),
    eD = n(530472),
    ex = n(29909),
    eL = n(782658),
    ej = n(219797),
    eM = n(453687),
    ek = n(128854),
    eU = n(101578),
    eG = n(524444),
    eZ = n(319323),
    eF = n(884182),
    eB = n(546432),
    eV = n(920888),
    eH = n(328966),
    eY = n(963206),
    eW = n(817384),
    eK = n(981631),
    ez = n(388032),
    eq = n(253108);
function eQ(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eX(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eQ(e, t, n[t]);
            });
    }
    return e;
}
function eJ(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function e$(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eJ(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function e0(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = e1(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function e1(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let e3 = [eK.hBH.GIFV],
    e2 = 15 * eb.Z.Millis.MINUTE,
    e4 = new Set(["discord-developers", "discord-testers", "discord-townhall", "discordgameslab"]),
    e5 = (e) => () => {
        let { url: t, proxyUrl: n, width: r, height: a, flags: o } = e,
            s = (0, c.yE)(o, K.hR.IS_ANIMATED);
        return null != r && null != a && (z.uo.test(n) || (s && (z.YG.test(n) || z.FH.test(n))))
            ? (0, i.jsx)(ex.Z, {
                  width: r,
                  height: a,
                  src: n,
                  url: t,
                  format: d.EO.IMAGE,
                  className: eq.gifFavoriteButton,
              })
            : null;
    };
function e8(e, t) {
    return (
        e === t ||
        (e.length === t.length &&
            !e.some((e, n) => {
                let { emoji: r, count: i, burst_count: a } = e,
                    { emoji: o, count: s, burst_count: l } = t[n];
                return a !== l || i !== s || r.id !== o.id || r.name !== o.name;
            }))
    );
}
class e6 extends (r = a.Component) {
    shouldRenderInvite(e) {
        let { channel: t } = this.props;
        return !(t.isDM() && !t.isSystemDM() && !t.isGroupDM() && e4.has(e));
    }
    shouldComponentUpdate(e, t) {
        let { channel: n, message: r, poll: i } = this.props,
            { channel: a, message: o, poll: s } = e;
        return (
            !(0, f.Z)(this.state, t) ||
            !(0, f.Z)(this.props, e, ["message", "channel"]) ||
            n.type !== a.type ||
            s !== i ||
            o.codedLinks !== r.codedLinks ||
            o.flags !== r.flags ||
            o.giftCodes !== r.giftCodes ||
            o.attachments !== r.attachments ||
            o.embeds !== r.embeds ||
            o.components !== r.components ||
            o.activity !== r.activity ||
            !e8(o.reactions, r.reactions)
        );
    }
    renderCtaButton() {
        let { message: e, channel: t, ctaButtonType: n } = this.props,
            r = null;
        switch (n) {
            case eS.aD.MARK_AS_FALSE_POSITIVE:
                r = (0, i.jsx)(D.Z, {
                    messageId: e.id,
                    channelId: t.id,
                });
                break;
            case eS.aD.AGE_VERIFICATION_RETRY:
                r = (0, i.jsx)(E.Z, { channelId: t.id });
                break;
            default:
                return null;
        }
        return (0, i.jsx)("div", {
            className: eq.ctaButtonContainer,
            children: r,
        });
    }
    renderCodedLinks(e) {
        return 0 === e.codedLinks.length
            ? null
            : e.codedLinks.map((t) => {
                  let { type: n, code: r, url: a } = t;
                  if (n === C.g.INVITE)
                      return this.shouldRenderInvite(r)
                          ? (0, i.jsx)(
                                eL.Z,
                                {
                                    code: r,
                                    message: e,
                                    getAcceptInviteContext: this.getAcceptInviteContext,
                                },
                                r,
                            )
                          : null;
                  if (n === C.g.TEMPLATE) return (0, i.jsx)(Z.Z, { code: r }, r);
                  if (n === C.g.EVENT) return (0, i.jsx)(G.Z, { code: r }, r);
                  if (n === C.g.CHANNEL_LINK)
                      return (0, i.jsx)(
                          eR.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  if (n === C.g.APP_DIRECTORY_PROFILE)
                      return (0, i.jsx)(
                          j.Z,
                          {
                              code: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === C.g.ACTIVITY_BOOKMARK) {
                      let { referrerId: t = e.author.id, customId: n, linkId: o } = (0, O.U)(a);
                      return (0, i.jsx)(
                          g.Z,
                          {
                              applicationId: r,
                              message: e,
                              referrerId: t,
                              customId: n,
                              linkId: o,
                          },
                          r,
                      );
                  } else if (n === C.g.GUILD_PRODUCT) return (0, i.jsx)(U.Z, { code: r }, r);
                  else if (n === C.g.SERVER_SHOP) return (0, i.jsx)(A.Z, { guildId: r }, r);
                  else if (n === C.g.SOCIAL_LAYER_STOREFRONT) {
                      let [e, t] = r.split("-"),
                          { channel: n } = this.props;
                      return (0, i.jsx)(
                          ea.Z,
                          {
                              guildId: t,
                              skuId: e,
                              channel: n,
                          },
                          r,
                      );
                  } else if (n === C.g.QUESTS_EMBED) return (0, i.jsx)(ee.Z, { questId: r }, r);
                  else if (n === C.g.APP_DIRECTORY_STOREFRONT)
                      return (0, i.jsx)(
                          y.P,
                          {
                              appId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === C.g.APP_DIRECTORY_STOREFRONT_SKU) {
                      let t = (0, b.Q)(r);
                      return null == t
                          ? null
                          : (0, i.jsx)(
                                y.F,
                                {
                                    appId: t.applicationId,
                                    skuId: t.skuId,
                                    message: e,
                                },
                                r,
                            );
                  } else if (n === C.g.APP_OAUTH2_LINK)
                      return (0, i.jsx)(
                          v.Z,
                          {
                              applicationId: r,
                              message: e,
                          },
                          r,
                      );
                  else if (n === C.g.COLLECTIBLES_SHOP) return null;
                  else if (n === C.g.EXPERIMENT) return null;
                  else throw Error("Unknown coded link type: ".concat(n));
              });
    }
    renderGiftCodes(e) {
        let { giftCodes: t, author: n, channel_id: r, type: a, content: o, giftInfo: s } = e,
            l = eh.default.getCurrentUser();
        return null != l && t.length > 0
            ? t.map((e) =>
                  (0, i.jsx)(
                      "div",
                      {
                          className: eq.giftCodeContainer,
                          children: (0, i.jsx)(m.Z, {
                              code: e,
                              author: n,
                              channelId: r,
                              currentUser: l,
                              type: a,
                              content: o,
                              giftInfo: s,
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
            disableReactionUpdates: r,
            isLurking: a,
            isGuest: o,
            isPendingMember: s,
            channel: l,
            forceAddReactions: c,
        } = this.props;
        return n
            ? null
            : (0, i.jsx)(eV.Z, {
                  message: e,
                  channel: l,
                  disableReactionCreates: t,
                  disableReactionUpdates: r,
                  isLurking: a,
                  isGuest: o,
                  isPendingMember: s,
                  forceAddReactions: c,
                  useChatFontScaling: !0,
              });
    }
    renderAttachments(e) {
        let {
                channel: t,
                gifAutoPlay: n,
                canDeleteAttachments: r,
                inlineAttachmentMedia: a,
                onMediaItemContextMenu: o,
                enabledContentHarmTypeFlags: s,
                shouldHideMediaOptions: l,
            } = this.props,
            { attachments: u, flags: d } = e;
        if (0 === u.length || e.isPoll() || (0, ed.hv)(e)) return null;
        let f = u.filter((e) => null == e.flags || !(0, c.yE)(e.flags, eK.J0y.IS_THUMBNAIL));
        if (0 === f.length) return null;
        let p = f
                .map((t) => {
                    var n;
                    return e$(eX({}, (0, K.JD)(t, e)), {
                        original: t.url,
                        srcIsAnimated: (0, c.yE)(null != (n = t.flags) ? n : 0, eK.J0y.IS_ANIMATED),
                    });
                })
                .filter((e) => "INVALID" !== e.type),
            { srcToOnClickOverride: _, srcToHandlePreloadImage: m } = (0, X.G)(
                p,
                {
                    enabledContentHarmTypeFlags: s,
                    shouldHideMediaOptions: l,
                },
                "Media Mosaic",
            ),
            h = p.length > 1,
            g = (0, c.yE)(d, eK.iLy.IS_VOICE_MESSAGE);
        function E(e, t) {
            return (0, eI.dn)(e.originalItem, t);
        }
        let b = f.map((i) => {
            let s = (e, n, r) => {
                    eE.default.track(eK.rMx.MEDIA_ATTACHMENT_PLAYBACK_STARTED, {
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                        type: i.content_type,
                        flags: i.flags,
                        size: i.size,
                        duration: r,
                    });
                },
                l = (0, K.VY)(i),
                c = {
                    message: e,
                    item: (0, eB.OB)(i, a),
                    autoPlayGif: n,
                    canRemoveItem: r && (f.length > 1 || "" !== e.content),
                    onRemoveItem: this.handleRemoveAttachment,
                    getObscureReason: E,
                    onContextMenu:
                        null != o
                            ? (e) => {
                                  e.stopPropagation(), e.preventDefault(), o(e, l);
                              }
                            : void 0,
                    renderAudioComponent: g ? ej.jY : ej.q7,
                    renderImageComponent: ej.dS,
                    renderVideoComponent: ej.vZ,
                    renderPlaintextFilePreview: ej.d4,
                    renderGenericFileComponent: ej.ZK,
                    renderMosaicItemFooter: ej.L9,
                    onPlay: s,
                    gifFavoriteButton: e5(l),
                },
                u = (0, eg.q)({
                    proxyURL: i.proxy_url,
                    url: i.url,
                });
            return u in _ && h && ((c.onClick = _[u]), (c.handlePreloadImage = m[u])), c;
        });
        return (0, i.jsx)(eF.Z, { items: b });
    }
    renderEmbeds(e) {
        let { renderEmbeds: t, hasBailedAst: n } = this.props;
        return 0 === e.embeds.length || !t || n
            ? null
            : e.embeds.map((t, n) => {
                  if (
                      eW.b.has(t.type) ||
                      (0, ey.l3)(t) ||
                      ((0, F.b)(t) && !(0, B.M)(e)) ||
                      (0, ey.jz)(t) ||
                      (0, ey.HK)(t)
                  )
                      return null;
                  let r = {
                      renderImageComponent: eG.Yi,
                      renderVideoComponent: eG.lV,
                      renderLinkComponent: eG.iT,
                  };
                  if (
                      t.type === eK.hBH.ARTICLE &&
                      null != t.url &&
                      /^https?:\/\/(?:canary|ptb|www)?\.discord(?:app)?\.com\/store\/skus\/(?:[0-9]+)/.test(t.url) &&
                      null != t.provider &&
                      "Discord" === t.provider.name
                  ) {
                      let a = ev.Z.safeParseWithQuery(t.url);
                      if (null != a && null != a.pathname) {
                          let o = a.pathname.split("/")[3];
                          if (null != o)
                              return (0, i.jsx)(
                                  h.Z,
                                  {
                                      skuId: o,
                                      renderFallback: () => this.renderEmbed(t, n, r, e),
                                  },
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
            shouldHideMediaOptions: r,
            disableComponentInteractivity: a,
            onMediaItemContextMenu: o,
        } = this.props;
        return (0, i.jsx)(ek.F, {
            gifAutoPlay: t,
            getGifFavButton: e5,
            getOnMediaItemContextMenu:
                null == o
                    ? void 0
                    : (e) => (t) => {
                          t.stopPropagation(), t.preventDefault(), null == o || o(t, e);
                      },
            shouldHideMediaOptions: r,
            enabledContentHarmTypeFlags: n,
            children: (0, i.jsx)(V.ZP, {
                message: e,
                shouldDisableInteractiveComponents: a,
            }),
        });
    }
    renderActivityInvite(e) {
        if (null == e.activity) return null;
        let { channel: t } = this.props;
        return (0, i.jsx)(eU.Z, {
            channel: t,
            message: e,
            hideParty: !1,
        });
    }
    renderPublishBump(e) {
        return this.props.channel.type !== eK.d4z.GUILD_ANNOUNCEMENT || this.props.isMessageSnapshot
            ? null
            : (0, i.jsx)(S.Z, {
                  channelId: e.channel_id,
                  messageId: e.id,
              });
    }
    renderEphemeralAccessories(e) {
        return (0, eT.Pv)(e)
            ? (0, i.jsx)(eD.Z, {
                  message: e,
                  onDeleteMessage: () => {
                      _.Z.dismissAutomatedMessage(e);
                  },
              })
            : null;
    }
    renderStickersAccessories(e) {
        let t = (0, eo.cv)(e),
            { channel: n, isInteracting: r } = this.props;
        return 0 === t.length
            ? null
            : t.map((e) =>
                  (0, i.jsx)(
                      es.Z,
                      {
                          channel: n,
                          isInteracting: r,
                          renderableSticker: e,
                      },
                      e.id,
                  ),
              );
    }
    renderThreadAccessories(e) {
        if (e.hasFlag(eK.iLy.HAS_THREAD) && !1 !== this.props.renderThreadAccessory)
            return (0, i.jsx)(ec.Z, {
                message: e,
                compact: this.props.compact,
            });
    }
    renderThreadRoleMentionWarning(e) {
        if (
            e.hasFlag(eK.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD) &&
            this.props.isCurrentUser &&
            !(Date.now() - eO.default.extractTimestamp(e.id) >= e2)
        )
            return (0, i.jsx)("div", {
                className: eq.threadRoleMentionFailure,
                children: ez.intl.string(ez.t.ma8Rs0),
            });
    }
    renderSuppressConfirmModal() {
        let { channel: e, message: t } = this.props;
        return (0, i.jsxs)(p.SR, {
            dismissable: !0,
            header: ez.intl.string(ez.t.VL1KOk),
            confirmText: ez.intl.string(ez.t.YEHppG),
            cancelText: ez.intl.string(ez.t["ETE/oC"]),
            onCancel: () => this.setState({ showSuppressModal: !1 }),
            onConfirm: () => {
                _.Z.suppressEmbeds(e.id, t.id), this.setState({ showSuppressModal: !1 });
            },
            children: [
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    className: eq.confirmText,
                    children: ez.intl.string(ez.t["vXZ+Fo"]),
                }),
                (0, i.jsx)(p.Text, {
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
            : (0, i.jsx)(p.SR, {
                  dismissable: !0,
                  header: ez.intl.string(ez.t.CbTIEo),
                  confirmText: ez.intl.string(ez.t.kFwAsa),
                  cancelText: ez.intl.string(ez.t["ETE/oC"]),
                  onCancel: () =>
                      this.setState({
                          showRemoveAttachmentModal: !1,
                          attachmentToDelete: null,
                      }),
                  onConfirm: () => {
                      let r = t.attachments.filter((e) => e.id !== n.id);
                      _.Z.patchMessageAttachments(e.id, t.id, r),
                          this.setState({
                              showRemoveAttachmentModal: !1,
                              attachmentToDelete: null,
                          });
                  },
                  children: (0, i.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: eq.confirmText,
                      children: ez.intl.string(ez.t.faHmO3),
                  }),
              });
    }
    renderInteractionPremiumUpsell(e) {
        let t = e.applicationId;
        return e.type !== l.u.INTERACTION_PREMIUM_UPSELL || null == t
            ? null
            : (0, i.jsx)(eZ.Z, {
                  applicationId: t,
                  guildId: this.props.channel.guild_id,
              });
    }
    renderEmbeddedApplicationInstanceEmbed(e) {
        let { application: t, activityInstance: n } = e;
        return null == t || null == n
            ? null
            : (0, i.jsx)(ew.Z, {
                  application: t,
                  channelId: this.props.channel.id,
                  guildId: this.props.channel.guild_id,
                  message: e,
              });
    }
    renderMediaPostEmbeds(e) {
        return e.embeds.flatMap((t) =>
            t.type !== eK.hBH.POST_PREVIEW || null == t.url
                ? []
                : (0, i.jsx)(
                      Q.Z,
                      {
                          embedUrl: t.url,
                          message: e,
                          channel: this.props.channel,
                      },
                      t.id,
                  ),
        );
    }
    renderSafetyPolicyNotice(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_POLICY_NOTICE
            ? (0, i.jsx)(er.i, { message: e })
            : null;
    }
    renderSafetySystemNotification(e) {
        return 1 === e.embeds.length && e.embeds[0].type === eK.hBH.SAFETY_SYSTEM_NOTIFICATION
            ? (0, i.jsx)(ei.g, { embed: e.embeds[0] })
            : null;
    }
    renderMediaObscureNotice(e) {
        return (0 !== e.attachments.length || 0 !== e.embeds.length) && (0, P.kC)(e)
            ? (0, i.jsx)(w.Z, { message: e })
            : null;
    }
    renderPoll(e, t) {
        if (null != t)
            return (0, i.jsx)($.Z, {
                message: e,
                poll: t,
                className: eq.pollContainer,
            });
    }
    renderShareClientTheme(e) {
        return null != e.sharedClientTheme ? (0, i.jsx)(T.q, { message: e }) : null;
    }
    renderReportedMessage(e) {
        if (e.messageSnapshots.length > 0 && (0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(en.Z, { message: e });
    }
    renderForwardedMessage(e) {
        if (e.messageSnapshots.length > 0 && !(0, et.Gi)(e, this.props.channel)) return (0, i.jsx)(x.Z, { message: e });
    }
    renderEditedTag(e, t) {
        return (0, i.jsx)(eH.Z, {
            message: e,
            compact: t,
            location: eH.H.AFTER_ACCESSORIES,
        });
    }
    render() {
        let { className: e, message: t, poll: n, compact: r } = this.props,
            { showSuppressModal: a, showRemoveAttachmentModal: o } = this.state,
            l = this.renderEditedTag(t, r),
            c = this.renderCodedLinks(t),
            u = this.renderGiftCodes(t),
            d = this.renderAttachments(t),
            f = this.renderCtaButton(),
            p = this.renderEmbeds(t),
            _ = this.renderActivityInvite(t),
            m = this.renderReactions(t),
            h = this.renderPublishBump(t),
            g = this.renderEphemeralAccessories(t),
            E = this.renderStickersAccessories(t),
            b = this.renderThreadAccessories(t),
            y = this.renderComponentAccessories(t),
            O = this.renderThreadRoleMentionWarning(t),
            v = this.renderEmbeddedApplicationInstanceEmbed(t),
            S = this.renderInteractionPremiumUpsell(t),
            I = this.renderMediaPostEmbeds(t),
            T = this.renderSafetyPolicyNotice(t),
            C = this.renderSafetySystemNotification(t),
            A = this.renderMediaObscureNotice(t),
            N = this.renderPoll(t, n),
            P = this.renderForwardedMessage(t),
            R = this.renderReportedMessage(t),
            w = this.renderShareClientTheme(t);
        return null == c &&
            null == d &&
            null == p &&
            null == _ &&
            null == m &&
            null == u &&
            null == h &&
            null == g &&
            null == E &&
            null == b &&
            null == y &&
            null == v &&
            null == O &&
            null == I &&
            null == T &&
            null != S &&
            null == N &&
            null == P &&
            null == R &&
            null == w
            ? null
            : (0, i.jsxs)("div", {
                  id: (0, eM.bX)(t),
                  className: s()(e, eq.container),
                  children: [
                      R,
                      P,
                      O,
                      N,
                      w,
                      c,
                      u,
                      I,
                      d,
                      f,
                      p,
                      A,
                      _,
                      E,
                      y,
                      v,
                      S,
                      l,
                      m,
                      h,
                      g,
                      a && this.renderSuppressConfirmModal(),
                      o && this.renderRemoveAttachmentConfirmModal(),
                      b,
                      T,
                      C,
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            eQ(this, "state", {
                showSuppressModal: !1,
                showRemoveAttachmentModal: !1,
                attachmentToDelete: null,
            }),
            eQ(this, "getAcceptInviteContext", (e) => {
                let { channel: t, message: n } = this.props;
                return {
                    location: e,
                    location_guild_id: t.getGuildId(),
                    location_channel_id: t.id,
                    location_channel_type: t.type,
                    location_message_id: n.id,
                };
            }),
            eQ(this, "renderEmbed", (e, t, n, r) => {
                var a, o, s, l;
                let {
                        gifAutoPlay: c,
                        inlineEmbedMedia: u,
                        canSuppressEmbeds: d,
                        hasSpoilerEmbeds: f,
                        enabledContentHarmTypeFlags: p,
                        shouldAgeVerify: _,
                    } = this.props,
                    m = (0, eI.BP)(e, r, f, p);
                if (e.type === eK.hBH.GIFT) return null;
                let h = e3.includes(e.type)
                    ? e.url
                    : null != (l = null == (a = e.image) ? void 0 : a.url)
                      ? l
                      : null == (o = e.video)
                        ? void 0
                        : o.url;
                return (0, i.jsx)(
                    L.h.Provider,
                    {
                        value: (0, eY.P)(h, e.image, e.video, e.thumbnail, null == (s = e.provider) ? void 0 : s.name),
                        children: (0, i.jsx)(
                            I.ZP,
                            eX(
                                {
                                    embed: e,
                                    obscureReason: null != m ? m : void 0,
                                    autoPlayGif: c,
                                    hideMedia: !u,
                                    allowFullScreen: !this.props.disableComponentInteractivity,
                                    onSuppressEmbed: d ? this.handleEmbedSuppressed : void 0,
                                    renderTitle: this.renderEmbedTitle,
                                    renderDescription: this.renderEmbedDescription,
                                    message: r,
                                    embedIndex: t,
                                    shouldAgeVerify: null != _ && _,
                                },
                                n,
                            ),
                        ),
                    },
                    e.id,
                );
            }),
            eQ(this, "renderEmbedTitle", (e, t) =>
                e.type !== eK.hBH.RICH
                    ? t
                    : (null != e.url && "" !== e.url ? W.Z.parseEmbedTitleWithoutLinks : W.Z.parseEmbedTitle)(t, !0, {
                          channelId: this.props.channel.id,
                      }),
            ),
            eQ(this, "renderEmbedDescription", (e, t, n) =>
                e.type === eK.hBH.RICH
                    ? W.Z.parse(t, !0, {
                          channelId: this.props.channel.id,
                          allowLinks: !0,
                          allowEmojiLinks: !0,
                          allowList: this.props.showListsAndHeaders,
                          allowHeading: !n && this.props.showListsAndHeaders,
                          previewLinkTarget: this.props.showMaskedLinks,
                      })
                    : t,
            ),
            eQ(this, "handleEmbedSuppressed", (e) => {
                let { channel: t, message: n } = this.props;
                e.shiftKey ? _.Z.suppressEmbeds(t.id, n.id) : this.setState({ showSuppressModal: !0 });
            }),
            eQ(this, "handleRemoveAttachment", (e) => {
                let t = e.originalItem;
                this.setState({
                    showRemoveAttachmentModal: !0,
                    attachmentToDelete: t,
                });
            });
    }
}
function e7(e) {
    var t;
    let { channel: n, message: r, renderSuppressEmbeds: a, isMessageSnapshot: o } = e,
        s = (0, u.e7)([ef.default], () => ef.default.getId()),
        l = eu.x4.useSetting(),
        d = eu.RS.useSetting(),
        f = eu.NA.useSetting() && !(0, eN.Z)(e.message),
        p = eu.nc.useSetting() && !1 !== e.renderReactions,
        _ = eu.QK.useSetting(),
        m = (0, u.e7)([e_.Z], () => null == n.guild_id || e_.Z.canChatInGuild(n.guild_id), [n]),
        h = (0, u.e7)([H.Z], () => null != n.guild_id && H.Z.isLurking(n.guild_id), [n]),
        g = (0, u.e7)([ep.ZP], () => ep.ZP.isCurrentUserGuest(n.guild_id), [n]),
        E = (0, u.e7)([ep.ZP, eh.default], () => {
            var e, t;
            let r = eh.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != n.guild_id && null != r
                            ? null == (e = ep.ZP.getMember(n.guild_id, r.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        { canAddNewReactions: b, canManageMessages: y } = (0, u.cj)(
            [em.Z],
            () => ({
                canAddNewReactions: m && em.Z.can(eK.Plq.ADD_REACTIONS, n),
                canManageMessages: em.Z.can(eK.Plq.MANAGE_MESSAGES, n),
            }),
            [m, n],
        ),
        O = (0, M.ux)(n.guild_id),
        [, v] = (0, k.AB)(n.guild_id),
        S = (0, el.$R)(n),
        I =
            (s === r.author.id || y) &&
            r.author.id !== eK.LAt &&
            !1 !== a &&
            !(0, c.yE)(r.flags, eK.iLy.EPHEMERAL) &&
            S &&
            1 === (0, eA.Z)(r),
        T = s === r.author.id && S && !o,
        C = r.author.id === s,
        A = r.isFirstMessageInForumPost(n),
        P = (0, eP.Z)({
            channel: n,
            canChat: m,
            renderReactions: p,
            canAddNewReactions: b,
            isLurking: h,
            isGuest: g,
            communicationDisabled: v,
            isActiveChannelOrUnarchivableThread: S,
            isAutomodQuarantined: O,
        }),
        w = (0, Y.A)((null != (t = r.editedTimestamp) ? t : r.timestamp).valueOf()),
        D = (0, q.Z)(null == n ? void 0 : n.id),
        x = (0, J.Z)(r),
        L = (0, R.v)(r),
        j = (0, eC._)(n),
        U = (0, eS.ro)(r.id, r.channel_id),
        G = (0, N.m8)();
    return (0, i.jsx)(
        e6,
        e$(
            eX(
                e$(
                    eX(
                        {
                            canSuppressEmbeds: I,
                            canDeleteAttachments: T,
                        },
                        P,
                    ),
                    { disableReactionReads: !!A || P.disableReactionReads },
                ),
                e,
            ),
            {
                hasSpoilerEmbeds: e.hasSpoilerEmbeds && j,
                hasBailedAst: e.hasBailedAst,
                isLurking: h && m,
                isGuest: g && m,
                isPendingMember: E && m,
                isCurrentUser: C,
                inlineAttachmentMedia: l,
                inlineEmbedMedia: d,
                renderEmbeds: f,
                gifAutoPlay: _,
                canRenderReferralEmbed: n.isDM(),
                poll: x,
                showListsAndHeaders: w,
                showMaskedLinks: w,
                shouldHideMediaOptions: D,
                enabledContentHarmTypeFlags: L,
                ctaButtonType: U,
                shouldAgeVerify: G,
            },
        ),
    );
}
eQ(e6, "defaultProps", {
    renderEmbeds: !0,
    compact: !1,
});
let e9 = (e) => {
    var t,
        {
            message: n,
            channel: r,
            disableReactionReads: a = !1,
            renderThreadAccessory: o = !1,
            disableReactionCreates: s = !0,
            disableReactionUpdates: l = !0,
            disableComponentInteractivity: c = !0,
        } = e,
        u = e0(e, [
            "message",
            "channel",
            "disableReactionReads",
            "renderThreadAccessory",
            "disableReactionCreates",
            "disableReactionUpdates",
            "disableComponentInteractivity",
        ]);
    let d = eu.x4.useSetting(),
        f = eu.RS.useSetting(),
        p = eu.NA.useSetting(),
        _ = eu.QK.useSetting(),
        m = (0, Y.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        h = (0, q.Z)(null == r ? void 0 : r.id),
        g = (0, R.v)(n),
        E = (0, eS.ro)(n.id, n.channel_id),
        b = (0, J.Z)(n);
    return (0, i.jsx)(
        e6,
        e$(eX({}, u), {
            message: n,
            channel: r,
            disableReactionReads: a,
            disableReactionCreates: s,
            disableReactionUpdates: l,
            disableComponentInteractivity: c,
            canSuppressEmbeds: !1,
            canDeleteAttachments: !1,
            renderThreadAccessory: o,
            inlineAttachmentMedia: d,
            inlineEmbedMedia: f,
            renderEmbeds: p,
            gifAutoPlay: _,
            poll: b,
            showListsAndHeaders: m,
            showMaskedLinks: m,
            shouldHideMediaOptions: h,
            enabledContentHarmTypeFlags: g,
            ctaButtonType: E,
        }),
    );
};
