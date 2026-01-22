n.d(t, {
    A: () => eN,
    w: () => ev,
}),
    n(938796),
    n(667532);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(989349),
    o = n.n(a),
    c = n(371444),
    d = n(392421),
    u = n(602137),
    h = n(665260),
    g = n(311907),
    m = n(36525),
    f = n(582754),
    p = n(397927),
    b = n(435183),
    x = n(534963),
    j = n(820284),
    A = n(213464),
    y = n(432371),
    v = n(323073),
    O = n(47167),
    C = n(355622),
    N = n(408018),
    E = n(133343),
    S = n(386849),
    T = n(235986),
    w = n(915089),
    M = n(375499),
    R = n(937773),
    I = n(770335),
    L = n(7584),
    P = n(422844),
    _ = n(856220),
    D = n(235640),
    k = n(268761),
    G = n(406704),
    B = n(474078),
    U = n(71397),
    V = n(544028),
    H = n(95701),
    F = n(260509),
    W = n(961350),
    Z = n(863036),
    Y = n(71393),
    J = n(576705),
    z = n(717518),
    Q = n(287809),
    X = n(147036),
    q = n(405269),
    K = n(927813),
    $ = n(975571),
    ee = n(879631),
    et = n(532277),
    en = n(592739),
    el = n(436387),
    ei = n(652215),
    er = n(746080),
    es = n(307731);
n(253913);
var ea = n(37411),
    eo = n(985018),
    ec = n(935456),
    ed = n(473169);
function eu(e, t, n) {
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
function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                eu(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let em = (0, w.Ld)(),
    ef = (0, w.Ld)(),
    ep = (0, w.Ld)(),
    eb = (0, H.createChannelRecord)({
        id: "1",
        type: ei.rbe.DM,
    }),
    ex = {
        popoutLocation: {
            page: ei.liQ.CHANNEL_SETTINGS,
            section: ei.JJy.CHANNEL_DEFAULT_REACTION,
            object: ei.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    ej = {
        popoutLocation: {
            page: ei.liQ.CHANNEL_SETTINGS,
            section: ei.JJy.CHANNEL_NAME,
            object: ei.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    eA = "AUTOMATIC_RTC_REGION",
    ey = {
        breakingChangeDate: (0, q.i$)(o()(ei.X30), "LL"),
        helpCenterLink: $.A.getArticleURL(ei.MVz.SLOWMODE),
    },
    ev = g.Ay.connectStores([Z.A], () => {
        let { channel: e, submitting: t } = Z.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, b.Ts)(e.id);
            },
            onSave() {
                if (null == e) return;
                let {
                    name: t,
                    type: n,
                    topic: l,
                    bitrate: i,
                    userLimit: r,
                    nsfw: s,
                    flags: a,
                    rateLimitPerUser: o,
                    defaultThreadRateLimitPerUser: c,
                    threadMetadata: d,
                    defaultAutoArchiveDuration: u,
                    template: h,
                    rtcRegion: g,
                    videoQualityMode: m,
                    defaultReactionEmoji: f,
                    availableTags: p,
                    defaultSortOrder: x,
                    defaultForumLayout: j,
                    defaultTagSetting: A,
                } = e;
                e.isThread() && (t = (0, B.A)(t, !0)),
                    (0, b.RT)(e.id, {
                        name: t,
                        type: n,
                        topic: l,
                        bitrate: i,
                        userLimit: r,
                        nsfw: s,
                        flags: a,
                        rateLimitPerUser: o,
                        defaultThreadRateLimitPerUser: c,
                        autoArchiveDuration: null == d ? void 0 : d.autoArchiveDuration,
                        locked: null == d ? void 0 : d.locked,
                        invitable: null == d ? void 0 : d.invitable,
                        defaultAutoArchiveDuration: u,
                        template: h,
                        rtcRegion: g,
                        videoQualityMode: m,
                        defaultReactionEmoji: f,
                        availableTags: p,
                        defaultSortOrder: x,
                        defaultForumLayout: j,
                        defaultTagSetting: A,
                    });
            },
        };
    })(m.A);
function eO(e) {
    let { onEmojiPicked: t, channel: n, guildId: r } = e,
        s = i.useRef(null),
        a = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(R.A, {
                    channel: n,
                    guildId: r,
                    pickerIntention: es.b_.CHANNEL_NAME,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === I.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: ej,
                });
            },
            [n, r, t],
        );
    return (0, l.jsx)(p.YNO, {
        targetElementRef: s,
        renderPopout: a,
        animation: p.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(
                M.A,
                eg(eh({}, e), {
                    ref: s,
                    active: n,
                    className: ec.Z8,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 10,
                            bottom: 10,
                            left: -4,
                            right: 10,
                        },
                    },
                }),
            );
        },
    });
}
class eC extends i.PureComponent {
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && x.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        var t, n, l, i;
        let r = null != (t = null == (l = this.props.channel) ? void 0 : l.topic) ? t : "";
        (null != (n = null == (i = e.channel) ? void 0 : i.topic) ? n : "") !== r &&
            r !== this.state.textTopicValue &&
            this.setState({
                textTopicValue: r,
                richTopicValue: (0, N.x7)(r),
            });
    }
    getError(e) {
        let { errors: t } = this.props;
        return null == t ? void 0 : t[e];
    }
    getSlowmodeHelpText(e) {
        let { channel: t } = this.props;
        return (null == t ? void 0 : t.isForumLikeChannel())
            ? e
                ? eo.intl.format(eo.t.EIQq9v, ey)
                : eo.intl.string(eo.t["a+1pdO"])
            : (null == t ? void 0 : t.isThread())
              ? e
                  ? eo.intl.format(eo.t["8sTC8t"], ey)
                  : eo.intl.string(eo.t.OMmNCv)
              : e
                ? eo.intl.format(eo.t.wW2MWu, ey)
                : eo.intl.string(eo.t["HEA/DU"]);
    }
    getCooldownSliderMarker(e) {
        return (0, ee.$)(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, ee.$)(e * K.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        var n, i, r, a, o, h, g;
        let m,
            f,
            {
                canManageChannels: b,
                canSendMessages: x,
                isThreadModerator: A,
                canManageThread: y,
                guild: O,
                isForumPost: N,
                isOwner: T,
                showAdvancedSlowModeSetting: w,
            } = this.props,
            M = H.Le.has(e.type),
            R = e.isForumLikeChannel(),
            I = R && (null == (o = e.availableTags) ? void 0 : o.every((e) => e.moderated)),
            P = (null == (h = Q.default.getCurrentUser()) ? void 0 : h.isStaff()) === !0,
            G = H.IY.has(e.type)
                ? (0, l.jsx)(p.D0$, {
                      label: R ? eo.intl.string(eo.t.yR6HwZ) : eo.intl.string(eo.t.X8jMDh),
                      children: (0, l.jsx)(E.Ay, {
                          className: s()(ec.zm, { [ec.r9]: !b }),
                          innerClassName: s()(ec.At, { [ec.r9]: !b }),
                          characterCountClassName: ec.IQ,
                          maxCharacterCount: R ? er.U9 : er.s4,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eo.intl.string(eo.t["71fbmh"]),
                          channel: eb,
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: R ? C.oU.FORUM_CHANNEL_GUIDELINES : C.oU.CHANNEL_TOPIC,
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
                          disabled: !b,
                          showValueWhenDisabled: !0,
                      }),
                  })
                : null,
            B =
                R && P
                    ? (0, l.jsx)(p.fs1, {
                          label: eo.intl.string(eo.t.qk2jdY),
                          placeholder: eo.intl.string(eo.t.DDjD1H),
                          value: L.Ay.translateSurrogatesToInlineEmoji(null != (n = e.template) ? n : ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !b,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            V = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(p.cGx, {}),
                          (0, l.jsx)(p.D0$, {
                              label: eo.intl.string(eo.t["P/y+sj"]),
                              description: eo.intl.string(eo.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              id: em,
                              children: (0, l.jsx)(_.A, { channel: e }),
                          }),
                          (0, l.jsx)(p.Checkbox, {
                              disabled: !b || I,
                              checked: e.hasFlag(er.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eo.intl.string(eo.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            W = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(p.cGx, {}),
                          (0, l.jsx)(p.D0$, {
                              label: eo.intl.string(eo.t["8ao1+E"]),
                              description: eo.intl.string(eo.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: ec.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: s()(ec.t0, ec._h),
                                          children: (0, l.jsxs)(p.ButtonGroup, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(p.YNO, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: p.YNO.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(
                                                              p.Button,
                                                              eg(eh({}, e), {
                                                                  buttonRef: this.defaultReactionButtonRef,
                                                                  text: eo.intl.string(eo.t["59QgaD"]),
                                                                  disabled: !b,
                                                                  onClick: (t) => {
                                                                      var n;
                                                                      null == (n = e.onClick) || n.call(e, t);
                                                                  },
                                                              }),
                                                          ),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(p.QWc, {
                                                            text: eo.intl.string(eo.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(D.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            Z = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(p.cGx, {}),
                          (0, l.jsxs)("div", {
                              className: ec.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: s()(ec.t0, ec.WC),
                                      children: (0, l.jsx)(p.l6P, {
                                          selectionMode: "single",
                                          label: eo.intl.string(eo.t["kQvoC/"]),
                                          description: eo.intl.string(eo.t.mOSViT),
                                          options: [
                                              {
                                                  id: "list",
                                                  label: eo.intl.string(eo.t["4HXEZG"]),
                                                  value: c.C.LIST,
                                              },
                                              {
                                                  id: "grid",
                                                  label: eo.intl.string(eo.t["8RswJG"]),
                                                  value: c.C.GRID,
                                              },
                                          ],
                                          value: null != (i = e.defaultForumLayout) ? i : c.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === c.C.GRID
                                      ? (0, l.jsx)(en.A, { className: ec.Kf })
                                      : (0, l.jsx)(el.A, { className: ec.Kf }),
                              ],
                          }),
                          (0, l.jsx)(p.cGx, {}),
                      ],
                  })
                : null,
            Y = e.isForumLikeChannel()
                ? (0, l.jsx)(p.l6P, {
                      selectionMode: "single",
                      label: eo.intl.string(eo.t.gePre2),
                      description: eo.intl.string(eo.t["165cVX"]),
                      options: [
                          {
                              id: "activity",
                              label: eo.intl.string(eo.t.ElZtzj),
                              value: u.T.LATEST_ACTIVITY,
                          },
                          {
                              id: "creation",
                              label: eo.intl.string(eo.t.w28f3F),
                              value: u.T.CREATION_DATE,
                          },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            J = e.isForumLikeChannel()
                ? (0, l.jsx)(p.l6P, {
                      selectionMode: "single",
                      label: eo.intl.string(eo.t.Paxaug),
                      description: eo.intl.string(eo.t.DqOl8J),
                      options: [
                          {
                              id: "some",
                              label: eo.intl.string(eo.t.rQ0ctQ),
                              value: d.n.MATCH_SOME,
                          },
                          {
                              id: "all",
                              label: eo.intl.string(eo.t.FCXUu0),
                              value: d.n.MATCH_ALL,
                          },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            z = M ? A : b,
            X =
                null ==
                (g = S.A.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "ChannelSettingsOverview",
                }))
                    ? void 0
                    : g.enabled,
            q =
                !0 === w
                    ? (0, l.jsx)(et.A, {
                          label: eo.intl.string(eo.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(X),
                          channel: e,
                          onChange: this.handleChangeSlowmode,
                      })
                    : (0, l.jsx)(p.Apm, {
                          label: eo.intl.string(eo.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(X),
                          initialValue: e.rateLimitPerUser,
                          markers: ei.s_7,
                          stickToMarkers: !0,
                          onValueChange: this.handleChangeSlowmode,
                          onMarkerRender: this.getCooldownSliderMarker,
                          disabled: !z,
                          equidistant: !0,
                          "aria-labelledby": ef,
                          "aria-describedby": ep,
                      }),
            K = H.nb.has(e.type)
                ? R
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(p.cGx, {}),
                              (0, l.jsxs)(p.nVY, {
                                  label: eo.intl.string(eo.t.O1c02q),
                                  children: [
                                      q,
                                      (0, l.jsx)(p.Apm, {
                                          label: eo.intl.string(eo.t["fkY5+l"]),
                                          helperText: X ? eo.intl.format(eo.t.nZSuEj, ey) : eo.intl.string(eo.t.kdZU6H),
                                          initialValue: null != (r = e.defaultThreadRateLimitPerUser) ? r : 0,
                                          markers: ei.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderMarker,
                                          disabled: !z,
                                          equidistant: !0,
                                          "aria-labelledby": ef,
                                          "aria-describedby": ep,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(p.cGx, {}),
                          ],
                      })
                    : q
                : null,
            ee =
                M && null != e.threadMetadata
                    ? (0, l.jsx)(j.A, {
                          page: ei.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(U.A, {
                              isDisabled: !y,
                              autoArchiveDuration: null != (a = e.threadMetadata.autoArchiveDuration) ? a : ea.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: N ? eo.intl.string(eo.t["3aJN9M"]) : eo.intl.string(eo.t.YUXr4Z),
                          }),
                      })
                    : null,
            es =
                e.type === ei.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(p.dOG, {
                              label: eo.intl.string(eo.t.s2rpNf),
                              description: eo.intl.string(eo.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !y,
                          }),
                      })
                    : null,
            ed = null != O && (0, F.wh)(O),
            eu = H.LE.has(e.type)
                ? (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(p.dOG, {
                              label: eo.intl.string(eo.t.Es25Yf),
                              description: eo.intl.string(eo.t["9eUgwR"]),
                              onChange: this.handleNSFWChange,
                              checked: (0, v.Gc)(e),
                              disabled: !b || null != e.linkedLobby || ed,
                          }),
                          null != e.linkedLobby
                              ? (0, l.jsx)(p.po8, {
                                    messageType: p.YCn.WARNING,
                                    children: eo.intl.string(eo.t.l6uSVa),
                                })
                              : null,
                      ],
                  })
                : null,
            ex =
                H.xR.has(e.type) &&
                null != O &&
                O.features.has(ei.GuildFeatures.NEWS) &&
                e.id !== (null == O ? void 0 : O.rulesChannelId) &&
                e.id !== (null == O ? void 0 : O.publicUpdatesChannelId)
                    ? (0, l.jsxs)(p.BJc, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(p.dOG, {
                                  label: eo.intl.string(eo.t.Au2b7m),
                                  description: eo.intl.format(eo.t.tI7KNX, {
                                      documentationLink: $.A.getArticleURL(ei.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === ei.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !b,
                              }),
                              (0, l.jsx)(p.po8, {
                                  messageType: p.YCn.INFO,
                                  children: eo.intl.string(eo.t["2Ab4Id"]),
                              }),
                          ],
                      })
                    : null,
            ej = H.wE.has(e.type)
                ? (0, l.jsx)(j.A, {
                      page: ei.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(U.A, {
                          isDisabled: !b,
                          autoArchiveDuration: (0, k.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? eo.intl.string(eo.t.fyXclY)
                              : eo.intl.string(eo.t.W3Noi9),
                      }),
                  })
                : null,
            eA = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(p.dOG, {
                      label: eo.intl.string(eo.t.id3ozj),
                      description: eo.intl.format(eo.t.feJW1z, {
                          helpdeskArticle: $.A.getArticleURL(ei.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(er.lx.SUMMARIES_DISABLED) &&
                          (null == O ? void 0 : O.features.has(ei.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                      disabled:
                          !b || !(null == O ? void 0 : O.features.has(ei.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
                  })
                : null,
            ev = e.isMediaChannel()
                ? (0, l.jsx)(p.dOG, {
                      label: eo.intl.string(eo.t.u8LZOt),
                      description: eo.intl.string(eo.t.J4wCc7),
                      checked: !e.hasFlag(er.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !b,
                  })
                : null;
        e.type === ei.rbe.GUILD_CATEGORY
            ? ((f = eo.intl.string(eo.t.OCAkGP)), (m = "category-name"))
            : e.isForumPost()
              ? ((f = eo.intl.string(eo.t.uyVrTN)), (m = "post-title"))
              : M
                ? ((f = eo.intl.string(eo.t.j3XWjD)), (m = "thread-name"))
                : ((f = eo.intl.string(eo.t.PVbHDl)), (m = "channel-name"));
        let eC = T ? x : b;
        return (0, l.jsxs)(p.BJc, {
            gap: 24,
            children: [
                (0, l.jsx)(p.ksK, {
                    label: f,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: m,
                    autoFocus: !0,
                    disabled: !eC,
                    maxLength: ei.Ign,
                    trailing: eC
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(eO, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: null == e ? void 0 : e.guild_id,
                              }),
                          }
                        : void 0,
                }),
                G,
                B,
                V,
                W,
                K,
                ee,
                Z,
                Y,
                J,
                es,
                eu,
                ex,
                eA,
                ej,
                ev,
            ],
        });
    }
    renderBitrate(e) {
        return "".concat(Math.round(e / 1000), "kbps");
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, X.Jz)(t, e),
            r = this.getError("bitrate");
        return (0, l.jsx)(p.Apm, {
            label: eo.intl.string(eo.t.w2d0vU),
            errorMessage: "" !== r ? r : void 0,
            helperText: i > ei.gp3 ? eo.intl.format(eo.t.SbQJk5, { bitrate: ei.gp3 / 1000 }) : void 0,
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
            (e.isGuildVocal() ||
                G.io.getCurrentConfig({
                    guildId: e.guild_id,
                    location: "9b50bd_1",
                }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        var t;
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = [
            {
                value: ei.K3c.AUTO,
                name: eo.intl.string(eo.t.jjKYpu),
            },
            {
                value: ei.K3c.FULL,
                name: eo.intl.string(eo.t["7jOoJE"]),
            },
        ];
        return (0, l.jsx)(p.z6M, {
            label: eo.intl.string(eo.t.jhJEJs),
            helperText: eo.intl.format(eo.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: i,
            value: null != (t = e.videoQualityMode) ? t : ei.K3c.AUTO,
            disabled: !n,
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
        return (0, l.jsx)(p.Apm, {
            label: eo.intl.string(eo.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eo.intl.format(e.isGuildStageVoice() ? eo.t.OqZI8D : eo.t["8yb3JT"], {}),
            initialValue: Math.min(e.userLimit, i),
            onValueChange: this.handleUserLimitChange,
            onValueRender: this.onRenderUserLimit,
            onMarkerRender: (e) => (0 === Math.round(e) ? "\u221E" : e),
            markers: [0, i],
            minValue: 0,
            maxValue: i,
            disabled: !t,
        });
    }
    renderRegionOverride(e) {
        var t;
        let { regions: n, canManageChannels: i, guild: r } = this.props;
        if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != n &&
            (s = n
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    id: e.id,
                    label: e.name,
                    value: e.id,
                }))).unshift({
                id: "auto",
                label: eo.intl.string(eo.t.JEmsap),
                value: eA,
            });
        let a = null != (t = e.rtcRegion) ? t : eA;
        return (0, l.jsx)(p.l6P, {
            selectionMode: "single",
            label: eo.intl.string(eo.t["Ms8bX+"]),
            description: eo.intl.string(eo.t["dbTs+z"]),
            options: s,
            value: a,
            onSelectionChange: this.handleRegionChange,
            disabled: !i,
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: i } = this.props;
        return (
            (t =
                e.type === ei.rbe.GUILD_CATEGORY
                    ? (0, f.Mw)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, f.Mw)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(T.A, {
                justify: T.A.Justify.CENTER,
                className: ed.o9,
                children: (0, l.jsx)("img", {
                    alt: "",
                    width: 280,
                    height: 165,
                    src: t,
                }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(p.nVY, {
                  label: eo.intl.string(eo.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, l.jsx)(p.cGx, { gap: 24 }) : null,
                      this.renderVoiceBitrate(e, n),
                      this.renderVideoQualityMode(e),
                      this.renderUserLimit(e),
                      this.renderRegionOverride(e),
                      this.renderJuiceImage(e),
                  ],
              });
    }
    handleSubmit() {
        return new Promise((e) => {
            e({
                shouldClear: !1,
                shouldRefocus: !0,
            });
        });
    }
    constructor(e) {
        var t, n;
        super(e),
            eu(this, "defaultReactionButtonRef", i.createRef()),
            eu(this, "nameInputRef", i.createRef()),
            eu(this, "cursorPosition", 0),
            eu(this, "renderEmojiPicker", (e) => {
                let { closePopout: t } = e,
                    { channel: n } = this.props;
                return (0, l.jsx)(R.A, {
                    guildId: null == n ? void 0 : n.guild_id,
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        this.handleChangeDefaultReactionEmoji(n), l && t();
                    },
                    pickerIntention: es.b_.COMMUNITY_CONTENT,
                    channel: n,
                    analyticsOverride: ex,
                });
            }),
            eu(this, "handleRequireTagChanged", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, er.lx.REQUIRE_TAG, e);
                (0, b.fy)({ flags: n });
            }),
            eu(this, "handleChangeName", (e) => {
                var t, n;
                let { channel: l } = this.props;
                if (null == l) return;
                l.isThread() ? (e = (0, B.A)(e, !1)) : ei.kvI.LIMITED_CHANNEL_NAME.has(l.type) && (e = (0, X.an)(e));
                let i = null != (t = null == (n = this.nameInputRef.current) ? void 0 : n.selectionStart) ? t : 0;
                (0, b.fy)({ name: e }),
                    setTimeout(() => {
                        var e;
                        null == (e = this.nameInputRef.current) || e.setSelectionRange(i, i);
                    }, 0);
            }),
            eu(this, "handleBlurName", () => {
                let { channel: e, channelName: t } = this.props;
                if ((null == e ? void 0 : e.isThread()) && null != t) {
                    let e = (0, B.A)(t, !0);
                    e !== t && (0, b.fy)({ name: e });
                }
            }),
            eu(this, "insertEmojiAtPosition", (e) => {
                var t, n;
                let l = this.nameInputRef.current,
                    i = null != (t = null == l ? void 0 : l.selectionStart) ? t : 0,
                    r = null != (n = null == l ? void 0 : l.selectionEnd) ? n : 0,
                    s = this.props.channelName,
                    a = (null == s ? void 0 : s.substring(0, i)) + e + (null == s ? void 0 : s.substring(r));
                (0, b.fy)({ name: a }),
                    setTimeout(() => {
                        let t = i + e.length;
                        null == l || l.focus(), null == l || l.setSelectionRange(t, t);
                    }, 0);
            }),
            eu(this, "handleChangeTopic", (e) => {
                (0, b.fy)({ topic: L.Ay.translateInlineEmojiToSurrogates(e) });
            }),
            eu(this, "handleChangeRichTopic", (e, t, n) => {
                this.setState({
                    textTopicValue: t,
                    richTopicValue: n,
                }),
                    this.handleChangeTopic(t);
            }),
            eu(this, "handleChangeTemplate", (e) => {
                (0, b.fy)({ template: L.Ay.translateInlineEmojiToSurrogates(e) });
            }),
            eu(this, "handleChangeDefaultReactionEmoji", (e) => {
                let t =
                    null == e
                        ? null
                        : (null == e ? void 0 : e.id) != null
                          ? {
                                emojiId: e.id,
                                emojiName: void 0,
                            }
                          : {
                                emojiId: void 0,
                                emojiName: e.optionallyDiverseSequence,
                            };
                (0, b.fy)({ defaultReactionEmoji: t });
            }),
            eu(this, "handleChangeDefaultForumLayout", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
            }),
            eu(this, "handleChangeDefaultSortOrder", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.fy)({ defaultSortOrder: e });
            }),
            eu(this, "handleChangeDefaultTagSetting", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                (0, b.fy)({ defaultTagSetting: e });
            }),
            eu(this, "handleChangeBitrate", (e) => {
                (0, b.fy)({ bitrate: 1000 * Math.round(e / 1000) });
            }),
            eu(this, "handleUserLimitChange", (e) => {
                (0, b.fy)({ userLimit: Math.round(e) });
            }),
            eu(this, "handleNSFWChange", (e) => {
                (0, b.fy)({ nsfw: e });
            }),
            eu(this, "handleActiveChannelsRemovedChange", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, er.lx.ACTIVE_CHANNELS_REMOVED, !e);
                (0, b.fy)({ flags: n });
            }),
            eu(this, "handleNewsChange", (e) => {
                (0, b.fy)({ type: e ? ei.rbe.GUILD_ANNOUNCEMENT : ei.rbe.GUILD_TEXT });
            }),
            eu(this, "handleChangeSlowmode", (e) => {
                (0, b.fy)({ rateLimitPerUser: e });
            }),
            eu(this, "handleChangeThreadMessageSlowmode", (e) => {
                (0, b.fy)({ defaultThreadRateLimitPerUser: e });
            }),
            eu(this, "handleChangeDefaultAutoArchiveDuration", (e) => {
                (0, b.fy)({ defaultAutoArchiveDuration: e });
            }),
            eu(this, "handleRegionChange", (e) => {
                (0, b.fy)({ rtcRegion: e === eA ? null : e });
            }),
            eu(this, "handleVideoQualityModeChange", (e) => {
                (0, b.fy)({ videoQualityMode: e });
            }),
            eu(this, "handleAutoArchiveDurationChanged", (e) => {
                (0, b.fy)({ autoArchiveDuration: e });
            }),
            eu(this, "handleInvitableChanged", (e) => {
                (0, b.fy)({ invitable: e });
            }),
            eu(this, "handleChannelSummariesToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, er.lx.SUMMARIES_DISABLED, !e);
                (0, b.fy)({ flags: n });
            }),
            eu(this, "handleShowMediaOptionsToggled", (e) => {
                let { channel: t } = this.props;
                if (null == t) return null;
                let n = (0, h.lA)(t.flags, er.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
                (0, b.fy)({ flags: n });
            });
        const r = null != (t = null == (n = this.props.channel) ? void 0 : n.topic) ? t : "";
        this.state = {
            textTopicValue: r,
            richTopicValue: (0, N.x7)(r),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
}
function eN() {
    let { errors: e, channel: t, submitting: n, subsection: r } = (0, g.cf)([Z.A], () => Z.A.getProps()),
        s = (0, g.bG)([z.A], () => {
            var e;
            return z.A.getRegions(null != (e = null == t ? void 0 : t.getGuildId()) ? e : null);
        }),
        a = (0, g.bG)([V.A], () => V.A.theme),
        o = (0, g.bG)([Y.A], () => Y.A.getGuild(null == t ? void 0 : t.getGuildId())),
        c = (0, G.NI)(t),
        d = (0, G.H_)(t),
        { canManageChannels: u, canSendMessages: h } = (0, g.cf)([J.A], () => ({
            canManageChannels: J.A.can(ei.xBc.MANAGE_CHANNELS, t),
            canSendMessages: J.A.can(ei.xBc.SEND_MESSAGES, t),
        })),
        m = (0, O.Ay)(t),
        f = W.default.getId(),
        p = (0, P.p)(),
        b = null == t ? void 0 : t.id,
        x = (0, y.cI)(t, !1, !0),
        j = A.A.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "ChannelSettingsOverview",
        }).enabled,
        v = i.useCallback(
            (e) => {
                null != b && p.getState().setLayoutType(b, e);
            },
            [b, p],
        );
    return (0, l.jsx)(eC, {
        errors: e,
        channel: t,
        channelName: m,
        submitting: n,
        regions: s,
        theme: a,
        guild: o,
        canManageChannels: (null == t ? void 0 : t.isThread()) ? c : u,
        canSendMessages: h,
        isThreadModerator: d,
        canManageThread: c,
        subsection: r,
        isForumPost: null != t && t.isForumPost(),
        isOwner: null == t ? void 0 : t.isOwner(f),
        handleSetDefaultLayout: v,
        showChannelSummariesSettings: x,
        showAdvancedSlowModeSetting: j,
    });
}
