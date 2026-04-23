"use strict";
n.d(t, { A: () => eT, w: () => eS }), n(938796), n(667532);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(371444),
    o = n(392421),
    d = n(602137),
    c = n(665260),
    u = n(311907),
    h = n(36525),
    g = n(462887),
    m = n(265872),
    x = n(452027),
    p = n(260598),
    A = n(404778),
    f = n(150934),
    b = n(825484),
    _ = n(821609),
    C = n(123292),
    j = n(691885),
    v = n(270003),
    N = n(106236),
    S = n(243721),
    E = n(331322),
    y = n(954197),
    T = n(512950),
    R = n(292666),
    I = n(73153),
    M = n(435183),
    L = n(534963),
    w = n(820284),
    O = n(432371),
    k = n(323073),
    D = n(47167),
    G = n(355622),
    B = n(408018),
    U = n(133343),
    P = n(235986),
    V = n(375499),
    H = n(937773),
    F = n(770335),
    z = n(7584),
    W = n(200463),
    Z = n(633839),
    Y = n(235640),
    J = n(268761),
    X = n(406704),
    $ = n(474078),
    Q = n(71397),
    q = n(544028),
    K = n(95701),
    ee = n(260509),
    et = n(961350),
    en = n(863036),
    el = n(71393),
    ei = n(576705),
    es = n(717518),
    ea = n(287809),
    er = n(147036),
    eo = n(927813),
    ed = n(975571),
    ec = n(879631),
    eu = n(969574),
    eh = n(532277),
    eg = n(592739),
    em = n(436387),
    ex = n(652215),
    ep = n(746080),
    eA = n(307731);
n(253913);
var ef = n(37411),
    eb = n(985018),
    e_ = n(263107),
    eC = n(818050);
let ej = {
        popoutLocation: {
            page: ex.liQ.CHANNEL_SETTINGS,
            section: ex.JJy.CHANNEL_DEFAULT_REACTION,
            object: ex.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    ev = {
        popoutLocation: {
            page: ex.liQ.CHANNEL_SETTINGS,
            section: ex.JJy.CHANNEL_NAME,
            object: ex.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eN = "AUTOMATIC_RTC_REGION",
    eS = u.Ay.connectStores([en.A], () => {
        let { channel: e, submitting: t } = en.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, M.Ts)(e.id);
            },
            onSave() {
                if (null == e) return;
                let {
                    name: t,
                    type: n,
                    topic: l,
                    bitrate: i,
                    userLimit: s,
                    nsfw: a,
                    flags: r,
                    rateLimitPerUser: o,
                    defaultThreadRateLimitPerUser: d,
                    threadMetadata: c,
                    defaultAutoArchiveDuration: u,
                    template: h,
                    rtcRegion: g,
                    videoQualityMode: m,
                    defaultReactionEmoji: x,
                    availableTags: p,
                    defaultSortOrder: A,
                    defaultForumLayout: f,
                    defaultTagSetting: b,
                } = e;
                e.isThread() && 0 === (t = (0, $.A)(t, !0)).length
                    ? I.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eb.intl.string(eb.t.uXA573) },
                      })
                    : (0, M.RT)(e.id, {
                          name: t,
                          type: n,
                          topic: l,
                          bitrate: i,
                          userLimit: s,
                          nsfw: a,
                          flags: r,
                          rateLimitPerUser: o,
                          defaultThreadRateLimitPerUser: d,
                          autoArchiveDuration: c?.autoArchiveDuration,
                          locked: c?.locked,
                          invitable: c?.invitable,
                          defaultAutoArchiveDuration: u,
                          template: h,
                          rtcRegion: g,
                          videoQualityMode: m,
                          defaultReactionEmoji: x,
                          availableTags: p,
                          defaultSortOrder: A,
                          defaultForumLayout: f,
                          defaultTagSetting: b,
                      });
            },
        };
    })(h.A);
function eE(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(H.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: eA.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === F.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: ev,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(m.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: m.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(V.A, { ...e, ref: a, active: n, className: e_.Z8, tabIndex: 0 });
        },
    });
}
class ey extends i.PureComponent {
    defaultReactionButtonRef = i.createRef();
    nameInputRef = i.createRef();
    cursorPosition = 0;
    channelTopicTextAreaChannel = null;
    channelTopicTextAreaGuildId = void 0;
    getChannelTopicTextAreaChannel(e) {
        let t = e ?? void 0;
        return (
            (null == this.channelTopicTextAreaChannel || this.channelTopicTextAreaGuildId !== t) &&
                ((this.channelTopicTextAreaGuildId = t),
                (this.channelTopicTextAreaChannel = (0, K.createChannelRecord)({
                    id: "1",
                    type: ex.rbe.DM,
                    guild_id: t,
                }))),
            this.channelTopicTextAreaChannel
        );
    }
    constructor(e) {
        super(e);
        const t = this.props.channel?.topic ?? "";
        this.state = {
            textTopicValue: t,
            richTopicValue: (0, B.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && L.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, B.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return e?.isForumLikeChannel()
            ? eb.intl.string(eb.t["a+1pdO"])
            : e?.isThread()
              ? eb.intl.string(eb.t.OMmNCv)
              : eb.intl.string(eb.t["HEA/DU"]);
    }
    getCooldownSliderLabel(e) {
        return (0, ec.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, ec.$)(e * eo.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        let n,
            i,
            {
                canManageChannels: s,
                canSendMessages: c,
                isThreadModerator: u,
                canManageThread: h,
                guild: g,
                isForumPost: I,
                isOwner: M,
                showSpoilerChannelSetting: L,
            } = this.props,
            O = K.Le.has(e.type),
            D = e.isForumLikeChannel(),
            B = D && e.availableTags?.every((e) => e.moderated),
            P = ea.default.getCurrentUser()?.isStaff() === !0,
            V = K.IY.has(e.type)
                ? (0, l.jsx)(x.D, {
                      label: D ? eb.intl.string(eb.t.yR6HwZ) : eb.intl.string(eb.t.X8jMDh),
                      children: (0, l.jsx)(U.Ay, {
                          className: a()(e_.zm, { [e_.r9]: !s }),
                          innerClassName: a()(e_.At, { [e_.r9]: !s }),
                          characterCountClassName: e_.IQ,
                          maxCharacterCount: D ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eb.intl.string(eb.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? g?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: D ? G.oU.FORUM_CHANNEL_GUIDELINES : G.oU.CHANNEL_TOPIC,
                          onFocus: () => {
                              this.setState({ topicFocused: !0 });
                          },
                          onBlur: () => {
                              this.setState({ topicFocused: !1 });
                          },
                          focused: this.state.topicFocused,
                          onSubmit: this.handleSubmit,
                          disableThemedBackground: !0,
                          error: this.getError("topic"),
                          disabled: !s,
                          showValueWhenDisabled: !0,
                      }),
                  })
                : null,
            H =
                D && P
                    ? (0, l.jsx)(p.f, {
                          label: eb.intl.string(eb.t.qk2jdY),
                          placeholder: eb.intl.string(eb.t.DDjD1H),
                          value: z.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            F = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.c, {}),
                          (0, l.jsx)(x.D, {
                              label: eb.intl.string(eb.t["P/y+sj"]),
                              description: eb.intl.string(eb.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(Z.A, { channel: e }),
                          }),
                          (0, l.jsx)(f.S, {
                              disabled: !s || B,
                              checked: e.hasFlag(ep.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eb.intl.string(eb.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.c, {}),
                          (0, l.jsx)(x.D, {
                              label: eb.intl.string(eb.t["8ao1+E"]),
                              description: eb.intl.string(eb.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: e_.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: a()(e_.t0, e_._h),
                                          children: (0, l.jsxs)(b.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(m.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: m.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(_.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eb.intl.string(eb.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(C.Q, {
                                                            text: eb.intl.string(eb.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(Y.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            X = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.c, {}),
                          (0, l.jsxs)("div", {
                              className: e_.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: a()(e_.t0, e_.WC),
                                      children: (0, l.jsx)(j.l, {
                                          selectionMode: "single",
                                          label: eb.intl.string(eb.t["kQvoC/"]),
                                          description: eb.intl.string(eb.t.mOSViT),
                                          options: [
                                              { id: "list", label: eb.intl.string(eb.t["4HXEZG"]), value: r.C.LIST },
                                              { id: "grid", label: eb.intl.string(eb.t["8RswJG"]), value: r.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? r.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === r.C.GRID
                                      ? (0, l.jsx)(eg.A, { className: e_.Kf })
                                      : (0, l.jsx)(em.A, { className: e_.Kf }),
                              ],
                          }),
                          (0, l.jsx)(A.c, {}),
                      ],
                  })
                : null,
            $ = e.isForumLikeChannel()
                ? (0, l.jsx)(j.l, {
                      selectionMode: "single",
                      label: eb.intl.string(eb.t.gePre2),
                      description: eb.intl.string(eb.t["165cVX"]),
                      options: [
                          { id: "activity", label: eb.intl.string(eb.t.ElZtzj), value: d.T.LATEST_ACTIVITY },
                          { id: "creation", label: eb.intl.string(eb.t.w28f3F), value: d.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            q = e.isForumLikeChannel()
                ? (0, l.jsx)(j.l, {
                      selectionMode: "single",
                      label: eb.intl.string(eb.t.Paxaug),
                      description: eb.intl.string(eb.t.DqOl8J),
                      options: [
                          { id: "some", label: eb.intl.string(eb.t.rQ0ctQ), value: o.n.MATCH_SOME },
                          { id: "all", label: eb.intl.string(eb.t.FCXUu0), value: o.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            et = O ? u : s,
            en = (0, l.jsx)(eh.A, {
                label: eb.intl.string(eb.t.tTHx98),
                helperText: this.getSlowmodeHelpText(),
                channel: e,
                onChange: this.handleChangeSlowmode,
            }),
            el = K.nb.has(e.type)
                ? D
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(A.c, {}),
                              (0, l.jsxs)(v.n, {
                                  label: eb.intl.string(eb.t.O1c02q),
                                  children: [
                                      en,
                                      (0, l.jsx)(N.A, {
                                          label: eb.intl.string(eb.t["fkY5+l"]),
                                          helperText: eb.intl.string(eb.t.kdZU6H),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: ex.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderLabel,
                                          getAriaValueText: this.getCooldownSliderLabel,
                                          disabled: !et,
                                          equidistant: !0,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(A.c, {}),
                          ],
                      })
                    : en
                : null,
            ei =
                O && null != e.threadMetadata
                    ? (0, l.jsx)(w.A, {
                          page: ex.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(Q.A, {
                              isDisabled: !h,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? ef.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: I ? eb.intl.string(eb.t["3aJN9M"]) : eb.intl.string(eb.t.YUXr4Z),
                          }),
                      })
                    : null,
            es =
                e.type === ex.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(S.d, {
                              label: eb.intl.string(eb.t.s2rpNf),
                              description: eb.intl.string(eb.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !h,
                          }),
                      })
                    : null,
            er = (0, k.Gc)(e),
            eo = null != g && (0, ee.wh)(g),
            ec = "none";
        er ? (ec = "nsfw") : e.isSpoilerChannel() && (ec = "spoiler");
        let eu = [
                { value: "none", name: eb.intl.string(eb.t.OtnNJE), desc: eb.intl.string(eb.t["a5/7hX"]) },
                { value: "spoiler", name: eb.intl.string(eb.t.TvUHTb), desc: eb.intl.string(eb.t.ddWXHa) },
                { value: "nsfw", name: eb.intl.string(eb.t.Es25Yf), desc: eb.intl.string(eb.t["9eUgwR"]) },
            ],
            eA =
                L && K.LE.has(e.type)
                    ? (0, l.jsxs)(E.B, {
                          gap: 4,
                          padding: { top: 8, bottom: 8 },
                          children: [
                              (0, l.jsx)(y.z, {
                                  label: eb.intl.string(eb.t.yLB4y2),
                                  onChange: (e) => this.handleChannelRestrictionChange(e),
                                  options: eu,
                                  value: ec,
                                  disabled: !s || null != e.linkedLobby || eo,
                              }),
                              null != e.linkedLobby
                                  ? (0, l.jsx)(T.p, { messageType: T.Y.WARNING, children: eb.intl.string(eb.t.EvavKG) })
                                  : null,
                          ],
                      })
                    : K.LE.has(e.type)
                      ? (0, l.jsxs)(E.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(S.d, {
                                    label: eb.intl.string(eb.t.Es25Yf),
                                    description: eb.intl.string(eb.t["9eUgwR"]),
                                    onChange: this.handleNSFWChange,
                                    checked: (0, k.Gc)(e),
                                    disabled: !s || null != e.linkedLobby || eo,
                                }),
                                null != e.linkedLobby
                                    ? (0, l.jsx)(T.p, {
                                          messageType: T.Y.WARNING,
                                          children: eb.intl.string(eb.t.l6uSVa),
                                      })
                                    : null,
                            ],
                        })
                      : null,
            eC =
                K.xR.has(e.type) &&
                null != g &&
                g.features.has(ex.GuildFeatures.NEWS) &&
                e.id !== g?.rulesChannelId &&
                e.id !== g?.publicUpdatesChannelId
                    ? (0, l.jsxs)(E.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(S.d, {
                                  label: eb.intl.string(eb.t.Au2b7m),
                                  description: eb.intl.format(eb.t.tI7KNX, {
                                      documentationLink: ed.A.getArticleURL(ex.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === ex.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(T.p, { messageType: T.Y.INFO, children: eb.intl.string(eb.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            ej = K.wE.has(e.type)
                ? (0, l.jsx)(w.A, {
                      page: ex.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(Q.A, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, J.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? eb.intl.string(eb.t.fyXclY)
                              : eb.intl.string(eb.t.W3Noi9),
                      }),
                  })
                : null,
            ev = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(S.d, {
                      label: eb.intl.string(eb.t.id3ozj),
                      description: eb.intl.format(eb.t.feJW1z, {
                          helpdeskArticle: ed.A.getArticleURL(ex.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(ep.lx.SUMMARIES_DISABLED) &&
                          g?.features.has(ex.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !g?.features.has(ex.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            eN = e.isMediaChannel()
                ? (0, l.jsx)(S.d, {
                      label: eb.intl.string(eb.t.u8LZOt),
                      description: eb.intl.string(eb.t.J4wCc7),
                      checked: !e.hasFlag(ep.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === ex.rbe.GUILD_CATEGORY
            ? ((i = eb.intl.string(eb.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eb.intl.string(eb.t.uyVrTN)), (n = "post-title"))
              : O
                ? ((i = eb.intl.string(eb.t.j3XWjD)), (n = "thread-name"))
                : ((i = eb.intl.string(eb.t.PVbHDl)), (n = "channel-name"));
        let eS = M ? c : s;
        return (0, l.jsxs)(E.B, {
            gap: 24,
            children: [
                (0, l.jsx)(R.k, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: n,
                    autoFocus: !0,
                    disabled: !eS,
                    maxLength: ex.Ign,
                    trailing: eS
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(eE, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                V,
                H,
                F,
                W,
                el,
                ei,
                X,
                $,
                q,
                es,
                eA,
                eC,
                ev,
                ej,
                eN,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, er.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(N.A, {
            label: eb.intl.string(eb.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > ex.gp3 ? eb.intl.format(eb.t.SbQJk5, { bitrate: ex.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [ex.hcd, ex.gp3, i],
            minValue: ex.hcd,
            maxValue: i,
            keyboardStep: ex.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            K.k.has(e.type) &&
            (e.isGuildVocal() || X.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: ex.K3c.AUTO, name: eb.intl.string(eb.t.jjKYpu) },
            { value: ex.K3c.FULL, name: eb.intl.string(eb.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(y.z, {
            label: eb.intl.string(eb.t.jhJEJs),
            helperText: eb.intl.format(eb.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? ex.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eb.intl.string(eb.t.XX5ciX)
            : eb.intl.formatToPlainString(eb.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? ex.RCc : ex.cSc;
        return (0, l.jsx)(N.A, {
            label: eb.intl.string(eb.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eb.intl.format(e.isGuildStageVoice() ? eb.t.OqZI8D : eb.t["8yb3JT"], {}),
            initialValue: Math.min(e.userLimit, i),
            onValueChange: this.handleUserLimitChange,
            onValueRender: this.onRenderUserLimit,
            onMarkerRender: (e) => (0 === Math.round(e) ? "∞" : e),
            markers: [0, i],
            minValue: 0,
            maxValue: i,
            disabled: !t,
        });
    }
    renderRegionOverride(e) {
        let { regions: t, canManageChannels: n, guild: i } = this.props;
        if (null == i || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != t &&
            (s = t
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({ id: e.id, label: e.name, value: e.id }))).unshift({
                id: "auto",
                label: eb.intl.string(eb.t.JEmsap),
                value: eN,
            });
        let a = e.rtcRegion ?? eN;
        return (0, l.jsx)(j.l, {
            selectionMode: "single",
            label: eb.intl.string(eb.t["Ms8bX+"]),
            description: eb.intl.string(eb.t["dbTs+z"]),
            options: s,
            value: a,
            onSelectionChange: this.handleRegionChange,
            disabled: !n,
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: i } = this.props;
        return (
            (t =
                e.type === ex.rbe.GUILD_CATEGORY
                    ? (0, g.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, g.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(P.A, {
                justify: P.A.Justify.CENTER,
                className: eC.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(v.n, {
                  label: eb.intl.string(eb.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, l.jsx)(A.c, { gap: 24 }) : null,
                      this.renderVoiceBitrate(e, n),
                      this.renderVideoQualityMode(e),
                      this.renderUserLimit(e),
                      this.renderRegionOverride(e),
                      this.renderJuiceImage(e),
                  ],
              });
    }
    renderEmojiPicker = (e) => {
        let { closePopout: t } = e,
            { channel: n } = this.props;
        return (0, l.jsx)(H.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: eA.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: ej,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, ep.lx.REQUIRE_TAG, e);
        (0, M.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, $.A)(e, !1)) : ex.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, er.an)(e));
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, M.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, $.A)(t, !0);
            e !== t && (0, M.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = t?.selectionStart ?? 0,
            l = t?.selectionEnd ?? 0,
            i = this.props.channelName,
            s = i?.substring(0, n) + e + i?.substring(l);
        (0, M.fy)({ name: s }),
            setTimeout(() => {
                let l = n + e.length;
                t?.focus(), t?.setSelectionRange(l, l);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, M.fy)({ topic: z.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeRichTopic = (e, t, n) => {
        this.setState({ textTopicValue: t, richTopicValue: n }), this.handleChangeTopic(t);
    };
    handleSubmit() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    handleChangeTemplate = (e) => {
        (0, M.fy)({ template: z.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, M.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, M.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, M.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, M.fy)({ defaultTagSetting: e });
    };
    handleChangeBitrate = (e) => {
        (0, M.fy)({ bitrate: 1e3 * Math.round(e / 1e3) });
    };
    handleUserLimitChange = (e) => {
        (0, M.fy)({ userLimit: Math.round(e) });
    };
    handleChannelRestrictionChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, ep.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, M.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleNSFWChange = (e) => {
        (0, M.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, ep.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, M.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, M.fy)({ type: e ? ex.rbe.GUILD_ANNOUNCEMENT : ex.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, M.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, M.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, M.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, M.fy)({ rtcRegion: e === eN ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, M.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, M.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, M.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, ep.lx.SUMMARIES_DISABLED, !e);
        (0, M.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, c.lA)(t.flags, ep.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, M.fy)({ flags: n });
    };
}
function eT() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, u.cf)([en.A], () => en.A.getProps()),
        a = (0, u.bG)([es.A], () => es.A.getRegions(t?.getGuildId() ?? null)),
        r = (0, u.bG)([q.A], () => q.A.theme),
        o = (0, u.bG)([el.A], () => el.A.getGuild(t?.getGuildId())),
        d = (0, X.NI)(t),
        c = (0, X.H_)(t),
        { canManageChannels: h, canSendMessages: g } = (0, u.cf)([ei.A], () => ({
            canManageChannels: ei.A.can(ex.xBc.MANAGE_CHANNELS, t),
            canSendMessages: ei.A.can(ex.xBc.SEND_MESSAGES, t),
        })),
        m = (0, D.Ay)(t),
        x = et.default.getId(),
        p = (0, W.p)(),
        A = t?.id,
        f = (0, O.cI)(t, !1, !0),
        b = eu.A.useExperiment(
            { guildId: t?.guild_id, location: "ChannelSettingsOverview" },
            { autoTrackExposure: !0 },
        ).enabled,
        _ = i.useCallback(
            (e) => {
                null != A && p.getState().setLayoutType(A, e);
            },
            [A, p],
        );
    return (0, l.jsx)(ey, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: a,
        theme: r,
        guild: o,
        canManageChannels: t?.isThread() ? d : h,
        canSendMessages: g,
        isThreadModerator: c,
        canManageThread: d,
        subsection: s,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(x),
        handleSetDefaultLayout: _,
        showChannelSummariesSettings: f,
        showSpoilerChannelSetting: b,
    });
}
