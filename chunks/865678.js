"use strict";
n.d(t, { A: () => ev, w: () => eb }), n(938796), n(667532);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(371444),
    c = n(392421),
    u = n(602137),
    h = n(665260),
    g = n(311907),
    m = n(36525),
    x = n(582754),
    A = n(397927),
    p = n(435183),
    f = n(534963),
    b = n(820284),
    C = n(213464),
    j = n(432371),
    v = n(323073),
    N = n(47167),
    _ = n(355622),
    y = n(408018),
    S = n(133343),
    E = n(235986),
    T = n(915089),
    M = n(375499),
    I = n(937773),
    R = n(770335),
    L = n(7584),
    w = n(422844),
    O = n(856220),
    G = n(235640),
    k = n(937161),
    D = n(268761),
    B = n(406704),
    P = n(474078),
    U = n(71397),
    V = n(544028),
    H = n(95701),
    F = n(260509),
    W = n(961350),
    Y = n(863036),
    Z = n(71393),
    z = n(576705),
    J = n(717518),
    Q = n(287809),
    X = n(147036),
    q = n(405269),
    $ = n(927813),
    K = n(975571),
    ee = n(879631),
    et = n(532277),
    en = n(592739),
    el = n(436387),
    ei = n(652215),
    es = n(746080),
    ea = n(307731);
n(253913);
var er = n(37411),
    eo = n(985018),
    ed = n(935456),
    ec = n(473169);
let eu = (0, T.Ld)(),
    eh = (0, T.Ld)(),
    eg = (0, T.Ld)(),
    em = (0, H.createChannelRecord)({ id: "1", type: ei.rbe.DM }),
    ex = {
        popoutLocation: {
            page: ei.liQ.CHANNEL_SETTINGS,
            section: ei.JJy.CHANNEL_DEFAULT_REACTION,
            object: ei.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eA = {
        popoutLocation: {
            page: ei.liQ.CHANNEL_SETTINGS,
            section: ei.JJy.CHANNEL_NAME,
            object: ei.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    ep = "AUTOMATIC_RTC_REGION",
    ef = { breakingChangeDate: (0, q.i$)(o()(ei.X30), "LL"), helpCenterLink: K.A.getArticleURL(ei.MVz.SLOWMODE) },
    eb = g.Ay.connectStores([Y.A], () => {
        let { channel: e, submitting: t } = Y.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, p.Ts)(e.id);
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
                    availableTags: A,
                    defaultSortOrder: f,
                    defaultForumLayout: b,
                    defaultTagSetting: C,
                } = e;
                e.isThread() && (t = (0, P.A)(t, !0)),
                    (0, p.RT)(e.id, {
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
                        availableTags: A,
                        defaultSortOrder: f,
                        defaultForumLayout: b,
                        defaultTagSetting: C,
                    });
            },
        };
    })(m.A);
function eC(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(I.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: ea.b_.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === R.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: eA,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(A.YNO, {
        targetElementRef: a,
        renderPopout: r,
        animation: A.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(M.A, {
                ...e,
                ref: a,
                active: n,
                className: ed.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class ej extends i.PureComponent {
    defaultReactionButtonRef = i.createRef();
    nameInputRef = i.createRef();
    cursorPosition = 0;
    constructor(e) {
        super(e);
        const t = this.props.channel?.topic ?? "";
        this.state = {
            textTopicValue: t,
            richTopicValue: (0, y.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && f.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, y.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText(e) {
        let { channel: t } = this.props;
        return t?.isForumLikeChannel()
            ? e
                ? eo.intl.string(eo.t["a+1pdO"])
                : eo.intl.format(eo.t.EIQq9v, ef)
            : t?.isThread()
              ? e
                  ? eo.intl.string(eo.t.OMmNCv)
                  : eo.intl.format(eo.t["8sTC8t"], ef)
              : e
                ? eo.intl.string(eo.t["HEA/DU"])
                : eo.intl.format(eo.t.wW2MWu, ef);
    }
    getCooldownSliderMarker(e) {
        return (0, ee.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, ee.$)(e * $.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        let n,
            i,
            {
                canManageChannels: s,
                canSendMessages: r,
                isThreadModerator: o,
                canManageThread: h,
                guild: g,
                isForumPost: m,
                isOwner: x,
                showAdvancedSlowModeSetting: p,
            } = this.props,
            f = H.Le.has(e.type),
            C = e.isForumLikeChannel(),
            j = C && e.availableTags?.every((e) => e.moderated),
            N = Q.default.getCurrentUser()?.isStaff() === !0,
            y = H.IY.has(e.type)
                ? (0, l.jsx)(A.D0$, {
                      label: C ? eo.intl.string(eo.t.yR6HwZ) : eo.intl.string(eo.t.X8jMDh),
                      children: (0, l.jsx)(S.Ay, {
                          className: a()(ed.zm, { [ed.r9]: !s }),
                          innerClassName: a()(ed.At, { [ed.r9]: !s }),
                          characterCountClassName: ed.IQ,
                          maxCharacterCount: C ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eo.intl.string(eo.t["71fbmh"]),
                          channel: em,
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: C ? _.oU.FORUM_CHANNEL_GUIDELINES : _.oU.CHANNEL_TOPIC,
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
            E =
                C && N
                    ? (0, l.jsx)(A.fs1, {
                          label: eo.intl.string(eo.t.qk2jdY),
                          placeholder: eo.intl.string(eo.t.DDjD1H),
                          value: L.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            T = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.cGx, {}),
                          (0, l.jsx)(A.D0$, {
                              label: eo.intl.string(eo.t["P/y+sj"]),
                              description: eo.intl.string(eo.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: eu,
                              children: (0, l.jsx)(O.A, { channel: e }),
                          }),
                          (0, l.jsx)(A.Checkbox, {
                              disabled: !s || j,
                              checked: e.hasFlag(es.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eo.intl.string(eo.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            M = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.cGx, {}),
                          (0, l.jsx)(A.D0$, {
                              label: eo.intl.string(eo.t["8ao1+E"]),
                              description: eo.intl.string(eo.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: ed.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: a()(ed.t0, ed._h),
                                          children: (0, l.jsxs)(A.ButtonGroup, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(A.YNO, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: A.YNO.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(A.Button, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eo.intl.string(eo.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(A.QWc, {
                                                            text: eo.intl.string(eo.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(G.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            I = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.cGx, {}),
                          (0, l.jsxs)("div", {
                              className: ed.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: a()(ed.t0, ed.WC),
                                      children: (0, l.jsx)(A.l6P, {
                                          selectionMode: "single",
                                          label: eo.intl.string(eo.t["kQvoC/"]),
                                          description: eo.intl.string(eo.t.mOSViT),
                                          options: [
                                              { id: "list", label: eo.intl.string(eo.t["4HXEZG"]), value: d.C.LIST },
                                              { id: "grid", label: eo.intl.string(eo.t["8RswJG"]), value: d.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? d.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === d.C.GRID
                                      ? (0, l.jsx)(en.A, { className: ed.Kf })
                                      : (0, l.jsx)(el.A, { className: ed.Kf }),
                              ],
                          }),
                          (0, l.jsx)(A.cGx, {}),
                      ],
                  })
                : null,
            R = e.isForumLikeChannel()
                ? (0, l.jsx)(A.l6P, {
                      selectionMode: "single",
                      label: eo.intl.string(eo.t.gePre2),
                      description: eo.intl.string(eo.t["165cVX"]),
                      options: [
                          { id: "activity", label: eo.intl.string(eo.t.ElZtzj), value: u.T.LATEST_ACTIVITY },
                          { id: "creation", label: eo.intl.string(eo.t.w28f3F), value: u.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            w = e.isForumLikeChannel()
                ? (0, l.jsx)(A.l6P, {
                      selectionMode: "single",
                      label: eo.intl.string(eo.t.Paxaug),
                      description: eo.intl.string(eo.t.DqOl8J),
                      options: [
                          { id: "some", label: eo.intl.string(eo.t.rQ0ctQ), value: c.n.MATCH_SOME },
                          { id: "all", label: eo.intl.string(eo.t.FCXUu0), value: c.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            B = f ? o : s,
            P = k.A.getCurrentConfig({ guildId: e.guild_id, location: "ChannelSettingsOverview" }).enabled,
            V =
                !0 === p
                    ? (0, l.jsx)(et.A, {
                          label: eo.intl.string(eo.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(P),
                          channel: e,
                          onChange: this.handleChangeSlowmode,
                      })
                    : (0, l.jsx)(A.Apm, {
                          label: eo.intl.string(eo.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(P),
                          initialValue: e.rateLimitPerUser,
                          markers: ei.s_7,
                          stickToMarkers: !0,
                          onValueChange: this.handleChangeSlowmode,
                          onMarkerRender: this.getCooldownSliderMarker,
                          disabled: !B,
                          equidistant: !0,
                          "aria-labelledby": eh,
                          "aria-describedby": eg,
                      }),
            W = H.nb.has(e.type)
                ? C
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(A.cGx, {}),
                              (0, l.jsxs)(A.nVY, {
                                  label: eo.intl.string(eo.t.O1c02q),
                                  children: [
                                      V,
                                      (0, l.jsx)(A.Apm, {
                                          label: eo.intl.string(eo.t["fkY5+l"]),
                                          helperText: P ? eo.intl.string(eo.t.kdZU6H) : eo.intl.format(eo.t.nZSuEj, ef),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: ei.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !B,
                                          equidistant: !0,
                                          "aria-labelledby": eh,
                                          "aria-describedby": eg,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(A.cGx, {}),
                          ],
                      })
                    : V
                : null,
            Y =
                f && null != e.threadMetadata
                    ? (0, l.jsx)(b.A, {
                          page: ei.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(U.A, {
                              isDisabled: !h,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? er.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: m ? eo.intl.string(eo.t["3aJN9M"]) : eo.intl.string(eo.t.YUXr4Z),
                          }),
                      })
                    : null,
            Z =
                e.type === ei.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(A.dOG, {
                              label: eo.intl.string(eo.t.s2rpNf),
                              description: eo.intl.string(eo.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !h,
                          }),
                      })
                    : null,
            z = null != g && (0, F.wh)(g),
            J = H.LE.has(e.type)
                ? (0, l.jsxs)(A.BJc, {
                      gap: 4,
                      children: [
                          (0, l.jsx)(A.dOG, {
                              label: eo.intl.string(eo.t.Es25Yf),
                              description: eo.intl.string(eo.t["9eUgwR"]),
                              onChange: this.handleNSFWChange,
                              checked: (0, v.Gc)(e),
                              disabled: !s || null != e.linkedLobby || z,
                          }),
                          null != e.linkedLobby
                              ? (0, l.jsx)(A.po8, { messageType: A.YCn.WARNING, children: eo.intl.string(eo.t.l6uSVa) })
                              : null,
                      ],
                  })
                : null,
            X =
                H.xR.has(e.type) &&
                null != g &&
                g.features.has(ei.GuildFeatures.NEWS) &&
                e.id !== g?.rulesChannelId &&
                e.id !== g?.publicUpdatesChannelId
                    ? (0, l.jsxs)(A.BJc, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(A.dOG, {
                                  label: eo.intl.string(eo.t.Au2b7m),
                                  description: eo.intl.format(eo.t.tI7KNX, {
                                      documentationLink: K.A.getArticleURL(ei.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === ei.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(A.po8, { messageType: A.YCn.INFO, children: eo.intl.string(eo.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            q = H.wE.has(e.type)
                ? (0, l.jsx)(b.A, {
                      page: ei.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(U.A, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, D.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? eo.intl.string(eo.t.fyXclY)
                              : eo.intl.string(eo.t.W3Noi9),
                      }),
                  })
                : null,
            $ = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(A.dOG, {
                      label: eo.intl.string(eo.t.id3ozj),
                      description: eo.intl.format(eo.t.feJW1z, {
                          helpdeskArticle: K.A.getArticleURL(ei.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(es.lx.SUMMARIES_DISABLED) &&
                          g?.features.has(ei.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !g?.features.has(ei.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            ee = e.isMediaChannel()
                ? (0, l.jsx)(A.dOG, {
                      label: eo.intl.string(eo.t.u8LZOt),
                      description: eo.intl.string(eo.t.J4wCc7),
                      checked: !e.hasFlag(es.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === ei.rbe.GUILD_CATEGORY
            ? ((i = eo.intl.string(eo.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eo.intl.string(eo.t.uyVrTN)), (n = "post-title"))
              : f
                ? ((i = eo.intl.string(eo.t.j3XWjD)), (n = "thread-name"))
                : ((i = eo.intl.string(eo.t.PVbHDl)), (n = "channel-name"));
        let ea = x ? r : s;
        return (0, l.jsxs)(A.BJc, {
            gap: 24,
            children: [
                (0, l.jsx)(A.ksK, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: n,
                    autoFocus: !0,
                    disabled: !ea,
                    maxLength: ei.Ign,
                    trailing: ea
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(eC, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                y,
                E,
                T,
                M,
                W,
                Y,
                I,
                R,
                w,
                Z,
                J,
                X,
                $,
                q,
                ee,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, X.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(A.Apm, {
            label: eo.intl.string(eo.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > ei.gp3 ? eo.intl.format(eo.t.SbQJk5, { bitrate: ei.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [ei.hcd, ei.gp3, i],
            minValue: ei.hcd,
            maxValue: i,
            keyboardStep: ei.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            H.k.has(e.type) &&
            (e.isGuildVocal() || B.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: ei.K3c.AUTO, name: eo.intl.string(eo.t.jjKYpu) },
            { value: ei.K3c.FULL, name: eo.intl.string(eo.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(A.z6M, {
            label: eo.intl.string(eo.t.jhJEJs),
            helperText: eo.intl.format(eo.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? ei.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eo.intl.string(eo.t.XX5ciX)
            : eo.intl.formatToPlainString(eo.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? ei.RCc : ei.cSc;
        return (0, l.jsx)(A.Apm, {
            label: eo.intl.string(eo.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eo.intl.format(e.isGuildStageVoice() ? eo.t.OqZI8D : eo.t["8yb3JT"], {}),
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
                label: eo.intl.string(eo.t.JEmsap),
                value: ep,
            });
        let a = e.rtcRegion ?? ep;
        return (0, l.jsx)(A.l6P, {
            selectionMode: "single",
            label: eo.intl.string(eo.t["Ms8bX+"]),
            description: eo.intl.string(eo.t["dbTs+z"]),
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
                e.type === ei.rbe.GUILD_CATEGORY
                    ? (0, x.Mw)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, x.Mw)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(E.A, {
                justify: E.A.Justify.CENTER,
                className: ec.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(A.nVY, {
                  label: eo.intl.string(eo.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, l.jsx)(A.cGx, { gap: 24 }) : null,
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
        return (0, l.jsx)(I.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: ea.b_.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: ex,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, es.lx.REQUIRE_TAG, e);
        (0, p.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, P.A)(e, !1)) : ei.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, X.an)(e));
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, p.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, P.A)(t, !0);
            e !== t && (0, p.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = t?.selectionStart ?? 0,
            l = t?.selectionEnd ?? 0,
            i = this.props.channelName,
            s = i?.substring(0, n) + e + i?.substring(l);
        (0, p.fy)({ name: s }),
            setTimeout(() => {
                let l = n + e.length;
                t?.focus(), t?.setSelectionRange(l, l);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, p.fy)({ topic: L.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, p.fy)({ template: L.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, p.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, p.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, p.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, p.fy)({ defaultTagSetting: e });
    };
    handleChangeBitrate = (e) => {
        (0, p.fy)({ bitrate: 1e3 * Math.round(e / 1e3) });
    };
    handleUserLimitChange = (e) => {
        (0, p.fy)({ userLimit: Math.round(e) });
    };
    handleNSFWChange = (e) => {
        (0, p.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, es.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, p.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, p.fy)({ type: e ? ei.rbe.GUILD_ANNOUNCEMENT : ei.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, p.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, p.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, p.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, p.fy)({ rtcRegion: e === ep ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, p.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, p.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, p.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, es.lx.SUMMARIES_DISABLED, !e);
        (0, p.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, es.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, p.fy)({ flags: n });
    };
}
function ev() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, g.cf)([Y.A], () => Y.A.getProps()),
        a = (0, g.bG)([J.A], () => J.A.getRegions(t?.getGuildId() ?? null)),
        r = (0, g.bG)([V.A], () => V.A.theme),
        o = (0, g.bG)([Z.A], () => Z.A.getGuild(t?.getGuildId())),
        d = (0, B.NI)(t),
        c = (0, B.H_)(t),
        { canManageChannels: u, canSendMessages: h } = (0, g.cf)([z.A], () => ({
            canManageChannels: z.A.can(ei.xBc.MANAGE_CHANNELS, t),
            canSendMessages: z.A.can(ei.xBc.SEND_MESSAGES, t),
        })),
        m = (0, N.Ay)(t),
        x = W.default.getId(),
        A = (0, w.p)(),
        p = t?.id,
        f = (0, j.cI)(t, !1, !0),
        b = C.A.useExperiment({ guildId: t?.guild_id, location: "ChannelSettingsOverview" }).enabled,
        v = i.useCallback(
            (e) => {
                null != p && A.getState().setLayoutType(p, e);
            },
            [p, A],
        );
    return (0, l.jsx)(ej, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: a,
        theme: r,
        guild: o,
        canManageChannels: t?.isThread() ? d : u,
        canSendMessages: h,
        isThreadModerator: c,
        canManageThread: d,
        subsection: s,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(x),
        handleSetDefaultLayout: v,
        showChannelSummariesSettings: f,
        showAdvancedSlowModeSetting: b,
    });
}
