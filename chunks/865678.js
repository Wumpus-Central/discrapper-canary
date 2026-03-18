"use strict";
n.d(t, { A: () => ej, w: () => ep }), n(938796), n(667532);
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
    f = n(435183),
    p = n(534963),
    b = n(820284),
    C = n(432371),
    j = n(323073),
    N = n(47167),
    v = n(355622),
    _ = n(408018),
    y = n(133343),
    S = n(235986),
    E = n(915089),
    T = n(375499),
    M = n(937773),
    I = n(770335),
    R = n(7584),
    L = n(200463),
    w = n(633839),
    O = n(235640),
    G = n(937161),
    D = n(268761),
    k = n(406704),
    B = n(474078),
    P = n(71397),
    U = n(544028),
    V = n(95701),
    H = n(260509),
    F = n(961350),
    W = n(863036),
    Y = n(71393),
    Z = n(576705),
    z = n(717518),
    J = n(287809),
    Q = n(147036),
    X = n(405269),
    q = n(927813),
    $ = n(975571),
    K = n(879631),
    ee = n(532277),
    et = n(592739),
    en = n(436387),
    el = n(652215),
    ei = n(746080),
    es = n(307731);
n(253913);
var ea = n(37411),
    er = n(985018),
    eo = n(935456),
    ed = n(473169);
let ec = (0, E.Ld)(),
    eu = (0, E.Ld)(),
    eh = (0, E.Ld)(),
    eg = (0, V.createChannelRecord)({ id: "1", type: el.rbe.DM }),
    em = {
        popoutLocation: {
            page: el.liQ.CHANNEL_SETTINGS,
            section: el.JJy.CHANNEL_DEFAULT_REACTION,
            object: el.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    ex = {
        popoutLocation: {
            page: el.liQ.CHANNEL_SETTINGS,
            section: el.JJy.CHANNEL_NAME,
            object: el.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eA = "AUTOMATIC_RTC_REGION",
    ef = { breakingChangeDate: (0, X.i$)(o()(el.X30), "LL"), helpCenterLink: $.A.getArticleURL(el.MVz.SLOWMODE) },
    ep = g.Ay.connectStores([W.A], () => {
        let { channel: e, submitting: t } = W.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, f.Ts)(e.id);
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
                    defaultSortOrder: p,
                    defaultForumLayout: b,
                    defaultTagSetting: C,
                } = e;
                e.isThread() && (t = (0, B.A)(t, !0)),
                    (0, f.RT)(e.id, {
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
                        defaultSortOrder: p,
                        defaultForumLayout: b,
                        defaultTagSetting: C,
                    });
            },
        };
    })(m.A);
function eb(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(M.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: es.b_.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === I.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: ex,
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
            return (0, l.jsx)(T.A, {
                ...e,
                ref: a,
                active: n,
                className: eo.Z8,
                tabIndex: 0,
                focusProps: { offset: { top: 10, bottom: 10, left: -4, right: 10 } },
            });
        },
    });
}
class eC extends i.PureComponent {
    defaultReactionButtonRef = i.createRef();
    nameInputRef = i.createRef();
    cursorPosition = 0;
    constructor(e) {
        super(e);
        const t = this.props.channel?.topic ?? "";
        this.state = {
            textTopicValue: t,
            richTopicValue: (0, _.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && p.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, _.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText(e) {
        let { channel: t } = this.props;
        return t?.isForumLikeChannel()
            ? e
                ? er.intl.string(er.t["a+1pdO"])
                : er.intl.format(er.t.EIQq9v, ef)
            : t?.isThread()
              ? e
                  ? er.intl.string(er.t.OMmNCv)
                  : er.intl.format(er.t["8sTC8t"], ef)
              : e
                ? er.intl.string(er.t["HEA/DU"])
                : er.intl.format(er.t.wW2MWu, ef);
    }
    getCooldownSliderMarker(e) {
        return (0, K.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, K.$)(e * q.A.Seconds.MINUTE, !0);
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
            } = this.props,
            f = V.Le.has(e.type),
            p = e.isForumLikeChannel(),
            C = p && e.availableTags?.every((e) => e.moderated),
            N = J.default.getCurrentUser()?.isStaff() === !0,
            _ = V.IY.has(e.type)
                ? (0, l.jsx)(A.D0$, {
                      label: p ? er.intl.string(er.t.yR6HwZ) : er.intl.string(er.t.X8jMDh),
                      children: (0, l.jsx)(y.Ay, {
                          className: a()(eo.zm, { [eo.r9]: !s }),
                          innerClassName: a()(eo.At, { [eo.r9]: !s }),
                          characterCountClassName: eo.IQ,
                          maxCharacterCount: p ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: er.intl.string(er.t["71fbmh"]),
                          channel: eg,
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: p ? v.oU.FORUM_CHANNEL_GUIDELINES : v.oU.CHANNEL_TOPIC,
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
            S =
                p && N
                    ? (0, l.jsx)(A.fs1, {
                          label: er.intl.string(er.t.qk2jdY),
                          placeholder: er.intl.string(er.t.DDjD1H),
                          value: R.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            E = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.cGx, {}),
                          (0, l.jsx)(A.D0$, {
                              label: er.intl.string(er.t["P/y+sj"]),
                              description: er.intl.string(er.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: ec,
                              children: (0, l.jsx)(w.A, { channel: e }),
                          }),
                          (0, l.jsx)(A.Checkbox, {
                              disabled: !s || C,
                              checked: e.hasFlag(ei.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: er.intl.string(er.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            T = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.cGx, {}),
                          (0, l.jsx)(A.D0$, {
                              label: er.intl.string(er.t["8ao1+E"]),
                              description: er.intl.string(er.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: eo.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: a()(eo.t0, eo._h),
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
                                                              text: er.intl.string(er.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(A.QWc, {
                                                            text: er.intl.string(er.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(O.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            M = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(A.cGx, {}),
                          (0, l.jsxs)("div", {
                              className: eo.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: a()(eo.t0, eo.WC),
                                      children: (0, l.jsx)(A.l6P, {
                                          selectionMode: "single",
                                          label: er.intl.string(er.t["kQvoC/"]),
                                          description: er.intl.string(er.t.mOSViT),
                                          options: [
                                              { id: "list", label: er.intl.string(er.t["4HXEZG"]), value: d.C.LIST },
                                              { id: "grid", label: er.intl.string(er.t["8RswJG"]), value: d.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? d.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === d.C.GRID
                                      ? (0, l.jsx)(et.A, { className: eo.Kf })
                                      : (0, l.jsx)(en.A, { className: eo.Kf }),
                              ],
                          }),
                          (0, l.jsx)(A.cGx, {}),
                      ],
                  })
                : null,
            I = e.isForumLikeChannel()
                ? (0, l.jsx)(A.l6P, {
                      selectionMode: "single",
                      label: er.intl.string(er.t.gePre2),
                      description: er.intl.string(er.t["165cVX"]),
                      options: [
                          { id: "activity", label: er.intl.string(er.t.ElZtzj), value: u.T.LATEST_ACTIVITY },
                          { id: "creation", label: er.intl.string(er.t.w28f3F), value: u.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            L = e.isForumLikeChannel()
                ? (0, l.jsx)(A.l6P, {
                      selectionMode: "single",
                      label: er.intl.string(er.t.Paxaug),
                      description: er.intl.string(er.t.DqOl8J),
                      options: [
                          { id: "some", label: er.intl.string(er.t.rQ0ctQ), value: c.n.MATCH_SOME },
                          { id: "all", label: er.intl.string(er.t.FCXUu0), value: c.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            k = f ? o : s,
            B = G.A.getCurrentConfig({ guildId: e.guild_id, location: "ChannelSettingsOverview" }).enabled,
            U = (0, l.jsx)(ee.A, {
                label: er.intl.string(er.t.tTHx98),
                helperText: this.getSlowmodeHelpText(B),
                channel: e,
                onChange: this.handleChangeSlowmode,
            }),
            F = V.nb.has(e.type)
                ? p
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(A.cGx, {}),
                              (0, l.jsxs)(A.nVY, {
                                  label: er.intl.string(er.t.O1c02q),
                                  children: [
                                      U,
                                      (0, l.jsx)(A.Apm, {
                                          label: er.intl.string(er.t["fkY5+l"]),
                                          helperText: B ? er.intl.string(er.t.kdZU6H) : er.intl.format(er.t.nZSuEj, ef),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: el.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !k,
                                          equidistant: !0,
                                          "aria-labelledby": eu,
                                          "aria-describedby": eh,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(A.cGx, {}),
                          ],
                      })
                    : U
                : null,
            W =
                f && null != e.threadMetadata
                    ? (0, l.jsx)(b.A, {
                          page: el.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(P.A, {
                              isDisabled: !h,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? ea.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: m ? er.intl.string(er.t["3aJN9M"]) : er.intl.string(er.t.YUXr4Z),
                          }),
                      })
                    : null,
            Y =
                e.type === el.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(A.dOG, {
                              label: er.intl.string(er.t.s2rpNf),
                              description: er.intl.string(er.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !h,
                          }),
                      })
                    : null,
            Z = null != g && (0, H.wh)(g),
            z = V.LE.has(e.type)
                ? (0, l.jsxs)(A.BJc, {
                      gap: 4,
                      children: [
                          (0, l.jsx)(A.dOG, {
                              label: er.intl.string(er.t.Es25Yf),
                              description: er.intl.string(er.t["9eUgwR"]),
                              onChange: this.handleNSFWChange,
                              checked: (0, j.Gc)(e),
                              disabled: !s || null != e.linkedLobby || Z,
                          }),
                          null != e.linkedLobby
                              ? (0, l.jsx)(A.po8, { messageType: A.YCn.WARNING, children: er.intl.string(er.t.l6uSVa) })
                              : null,
                      ],
                  })
                : null,
            Q =
                V.xR.has(e.type) &&
                null != g &&
                g.features.has(el.GuildFeatures.NEWS) &&
                e.id !== g?.rulesChannelId &&
                e.id !== g?.publicUpdatesChannelId
                    ? (0, l.jsxs)(A.BJc, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(A.dOG, {
                                  label: er.intl.string(er.t.Au2b7m),
                                  description: er.intl.format(er.t.tI7KNX, {
                                      documentationLink: $.A.getArticleURL(el.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === el.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(A.po8, { messageType: A.YCn.INFO, children: er.intl.string(er.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            X = V.wE.has(e.type)
                ? (0, l.jsx)(b.A, {
                      page: el.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(P.A, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, D.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? er.intl.string(er.t.fyXclY)
                              : er.intl.string(er.t.W3Noi9),
                      }),
                  })
                : null,
            q = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(A.dOG, {
                      label: er.intl.string(er.t.id3ozj),
                      description: er.intl.format(er.t.feJW1z, {
                          helpdeskArticle: $.A.getArticleURL(el.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(ei.lx.SUMMARIES_DISABLED) &&
                          g?.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !g?.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            K = e.isMediaChannel()
                ? (0, l.jsx)(A.dOG, {
                      label: er.intl.string(er.t.u8LZOt),
                      description: er.intl.string(er.t.J4wCc7),
                      checked: !e.hasFlag(ei.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === el.rbe.GUILD_CATEGORY
            ? ((i = er.intl.string(er.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = er.intl.string(er.t.uyVrTN)), (n = "post-title"))
              : f
                ? ((i = er.intl.string(er.t.j3XWjD)), (n = "thread-name"))
                : ((i = er.intl.string(er.t.PVbHDl)), (n = "channel-name"));
        let es = x ? r : s;
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
                    disabled: !es,
                    maxLength: el.Ign,
                    trailing: es
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(eb, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                _,
                S,
                E,
                T,
                F,
                W,
                M,
                I,
                L,
                Y,
                z,
                Q,
                q,
                X,
                K,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, Q.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(A.Apm, {
            label: er.intl.string(er.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > el.gp3 ? er.intl.format(er.t.SbQJk5, { bitrate: el.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [el.hcd, el.gp3, i],
            minValue: el.hcd,
            maxValue: i,
            keyboardStep: el.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            V.k.has(e.type) &&
            (e.isGuildVocal() || k.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: el.K3c.AUTO, name: er.intl.string(er.t.jjKYpu) },
            { value: el.K3c.FULL, name: er.intl.string(er.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(A.z6M, {
            label: er.intl.string(er.t.jhJEJs),
            helperText: er.intl.format(er.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? el.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? er.intl.string(er.t.XX5ciX)
            : er.intl.formatToPlainString(er.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? el.RCc : el.cSc;
        return (0, l.jsx)(A.Apm, {
            label: er.intl.string(er.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: er.intl.format(e.isGuildStageVoice() ? er.t.OqZI8D : er.t["8yb3JT"], {}),
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
                label: er.intl.string(er.t.JEmsap),
                value: eA,
            });
        let a = e.rtcRegion ?? eA;
        return (0, l.jsx)(A.l6P, {
            selectionMode: "single",
            label: er.intl.string(er.t["Ms8bX+"]),
            description: er.intl.string(er.t["dbTs+z"]),
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
                e.type === el.rbe.GUILD_CATEGORY
                    ? (0, x.Mw)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, x.Mw)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(S.A, {
                justify: S.A.Justify.CENTER,
                className: ed.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(A.nVY, {
                  label: er.intl.string(er.t["/dp6yY"]),
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
        return (0, l.jsx)(M.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: es.b_.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: em,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, ei.lx.REQUIRE_TAG, e);
        (0, f.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, B.A)(e, !1)) : el.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, Q.an)(e));
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, f.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, B.A)(t, !0);
            e !== t && (0, f.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = t?.selectionStart ?? 0,
            l = t?.selectionEnd ?? 0,
            i = this.props.channelName,
            s = i?.substring(0, n) + e + i?.substring(l);
        (0, f.fy)({ name: s }),
            setTimeout(() => {
                let l = n + e.length;
                t?.focus(), t?.setSelectionRange(l, l);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, f.fy)({ topic: R.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, f.fy)({ template: R.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, f.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, f.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, f.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, f.fy)({ defaultTagSetting: e });
    };
    handleChangeBitrate = (e) => {
        (0, f.fy)({ bitrate: 1e3 * Math.round(e / 1e3) });
    };
    handleUserLimitChange = (e) => {
        (0, f.fy)({ userLimit: Math.round(e) });
    };
    handleNSFWChange = (e) => {
        (0, f.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, ei.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, f.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, f.fy)({ type: e ? el.rbe.GUILD_ANNOUNCEMENT : el.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, f.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, f.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, f.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, f.fy)({ rtcRegion: e === eA ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, f.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, f.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, f.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, ei.lx.SUMMARIES_DISABLED, !e);
        (0, f.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, h.lA)(t.flags, ei.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, f.fy)({ flags: n });
    };
}
function ej() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, g.cf)([W.A], () => W.A.getProps()),
        a = (0, g.bG)([z.A], () => z.A.getRegions(t?.getGuildId() ?? null)),
        r = (0, g.bG)([U.A], () => U.A.theme),
        o = (0, g.bG)([Y.A], () => Y.A.getGuild(t?.getGuildId())),
        d = (0, k.NI)(t),
        c = (0, k.H_)(t),
        { canManageChannels: u, canSendMessages: h } = (0, g.cf)([Z.A], () => ({
            canManageChannels: Z.A.can(el.xBc.MANAGE_CHANNELS, t),
            canSendMessages: Z.A.can(el.xBc.SEND_MESSAGES, t),
        })),
        m = (0, N.Ay)(t),
        x = F.default.getId(),
        A = (0, L.p)(),
        f = t?.id,
        p = (0, C.cI)(t, !1, !0),
        b = i.useCallback(
            (e) => {
                null != f && A.getState().setLayoutType(f, e);
            },
            [f, A],
        );
    return (0, l.jsx)(eC, {
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
        handleSetDefaultLayout: b,
        showChannelSummariesSettings: p,
    });
}
