n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(374470),
    c = n(442837),
    d = n(481060),
    u = n(480137),
    g = n(239091),
    m = n(497321),
    p = n(724757),
    f = n(210887),
    h = n(387667),
    b = n(598077),
    x = n(592125),
    j = n(430824),
    v = n(246946),
    _ = n(594174),
    C = n(823379),
    O = n(51144),
    y = n(999382),
    E = n(909746),
    N = n(233857),
    I = n(501801),
    S = n(603784),
    T = n(981631),
    P = n(388032),
    w = n(912864),
    Z = n(630016),
    R = n(315091);
function D(e, t, n) {
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
function A(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function k(e, t) {
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
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let G = i.forwardRef((e, t) => {
    var { onHeaderClick: i, guildId: l, guild: a } = e,
        s = k(e, ["onHeaderClick", "guildId", "guild"]);
    return null == l
        ? null
        : (0, r.jsx)(
              S.Z,
              L(A({ ref: t }, s), {
                  guildId: l,
                  guild: a,
                  onHeaderClick: () => {
                      let { log: e } = s;
                      null == i || i(e);
                  },
                  onUserContextMenu: (e) => {
                      let { log: t } = s,
                          { user: i } = t;
                      null != i &&
                          null != l &&
                          (0, g.jW)(e, async () => {
                              let { default: e } = await n.e("50929").then(n.bind(n, 595011));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      L(A({}, t), {
                                          guildId: l,
                                          user: i,
                                      }),
                                  );
                          });
                  },
                  onChannelContextMenu: (e) => {
                      let { log: t } = s,
                          i = j.Z.getGuild(l);
                      null != t.options.channel &&
                          "string" != typeof t.options.channel &&
                          null != i &&
                          (0, g.jW)(e, async () => {
                              let { default: e } = await n.e("51529").then(n.bind(n, 228620));
                              return (n) =>
                                  null != t.options.channel
                                      ? (0, r.jsx)(e, L(A({}, n), { channel: t.options.channel }))
                                      : null;
                          });
                  },
                  onTargetContextMenu: (e) => {
                      let { log: t } = s;
                      switch (t.targetType) {
                          case T.KFR.CHANNEL:
                          case T.KFR.CHANNEL_OVERWRITE:
                              let i = x.Z.getChannel(t.targetId),
                                  a = j.Z.getGuild(l);
                              if (null != i && null != a)
                                  return (0, g.jW)(e, async () => {
                                      let { default: e } = await n.e("51529").then(n.bind(n, 228620));
                                      return (t) => (0, r.jsx)(e, L(A({}, t), { channel: i }));
                                  });
                              return (0, g.jW)(e, async () => {
                                  let { default: e } = await n.e("5396").then(n.bind(n, 999588));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          L(A({}, n), {
                                              id: t.targetId,
                                              label: P.intl.string(P.t.rCazna),
                                          }),
                                      );
                              });
                          case T.KFR.USER:
                              let o = _.default.getUser(t.targetId);
                              if (null != o && null != l)
                                  return (0, g.jW)(e, async () => {
                                      let { default: e } = await n.e("50929").then(n.bind(n, 595011));
                                      return (t) =>
                                          (0, r.jsx)(
                                              e,
                                              L(A({}, t), {
                                                  guildId: l,
                                                  user: o,
                                              }),
                                          );
                                  });
                      }
                      return null;
                  },
              }),
          );
});
function M(e) {
    let {
            logs: t,
            guildId: n,
            guild: l,
            expandedId: a,
            lastExpandedId: o,
            scroller: c,
            setExpandedRef: d,
            setLastExpandedRef: u,
            onHeaderClick: g,
            onContentClick: m,
        } = e,
        f = i.useRef(c);
    i.useEffect(() => {
        f.current = c;
    }, [c]);
    let h = (0, p.Z)("audit-log", f);
    return (0, r.jsx)(s.bG, {
        navigator: h,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: i } = e,
                    s = k(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    L(A({ ref: i }, s), {
                        className: w.list,
                        children: t.map((e) => {
                            let t = a === e.id,
                                i = o === e.id,
                                s = t ? d : i ? u : null;
                            return (0, r.jsx)(
                                G,
                                {
                                    guildId: n,
                                    guild: l,
                                    ref: (e) => {
                                        null == s || s(e);
                                    },
                                    className: w.row,
                                    onHeaderClick: g,
                                    onContentClick: m,
                                    log: e,
                                    expanded: t,
                                },
                                e.id,
                            );
                        }),
                    }),
                );
            },
        }),
    });
}
G.displayName = "AuditLogClickWrap";
class U extends i.PureComponent {
    componentDidMount() {
        (0, u.bY)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleOutsideClick);
    }
    componentDidUpdate(e, t) {
        this.state.expandedId !== t.expandedId && this.fixScroll(),
            !this.props.showLoadMore &&
                this.props.logs.length !== e.logs.length &&
                null != this._scrollerRef &&
                this.isScrollerAtBottom() &&
                (0, u.OY)(this.props.guildId, !0);
    }
    isScrollerAtBottom() {
        var e;
        return (null == (e = this._scrollerRef) ? void 0 : e.isScrolledToBottom()) || !1;
    }
    fixScroll() {
        let e = this._scrollerRef;
        if (null == e) return;
        let t = this.getRects(),
            n = this._prevRects;
        if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top)
            return;
        let r = n.expanded.height - t.lastExpanded.height,
            i = e.getScrollerState().scrollTop - r;
        e.scrollTo({ to: i });
    }
    getRects() {
        let e = {
            lastExpanded: null,
            expanded: null,
        };
        if (null != this._lastExpandedRef) {
            let t = this._lastExpandedRef;
            (0, o.kK)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = this._expandedRef;
            (0, o.kK)(t) && (e.expanded = t.getBoundingClientRect());
        }
        return e;
    }
    renderUserQuickSelectValue(e) {
        var t;
        return null != (t = e.valueLabel) ? t : e.label;
    }
    renderActionQuickSelectValue(e) {
        var t;
        return null != (t = e.valueLabel) ? t : e.label;
    }
    renderHeader() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: w.customHeader,
                    children: [
                        (0, r.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            children: P.intl.string(P.t.SPWLyT),
                        }),
                        this.renderHeaderDropdowns(),
                    ],
                }),
                (0, r.jsx)(d.izJ, { className: w.divider }),
            ],
        });
    }
    renderSpinner() {
        return (0, r.jsx)(d.$jN, { type: d.$jN.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            {
                logs: i,
                theme: l,
                hide: a,
                isInitialLoading: s,
                isLoading: o,
                hasError: c,
                guildId: u,
                guild: g,
            } = this.props;
        if (a) return (0, r.jsx)(m.Z, {});
        if (o || s) return this.renderSpinner();
        if (0 === i.length) {
            let e = c ? P.intl.string(P.t.tzkaD7) : P.intl.string(P.t.lNuYhh),
                t = c ? P.intl.string(P.t.Ww5Tjy) : P.intl.string(P.t["RHhk+P"]);
            return (0, r.jsxs)(d.ubH, {
                theme: l,
                className: w.empty,
                children: [
                    (0, r.jsx)(d.oxh, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130,
                    }),
                    (0, r.jsx)(d.OZU, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t,
                    }),
                ],
            });
        }
        return (0, r.jsx)(M, {
            logs: i,
            guildId: u,
            guild: g,
            expandedId: e,
            lastExpandedId: t,
            setExpandedRef: this.handleSetExpandedRef,
            setLastExpandedRef: this.handleSetLastExpandedRef,
            onHeaderClick: this.handleHeaderClick,
            onContentClick: this.handleContentClick,
            scroller: this._scrollerRef,
        });
    }
    render() {
        let { isLoadingNextPage: e, hide: t, isLoading: n } = this.props;
        return (0, r.jsx)("div", {
            className: Z.customColumn,
            children: (0, r.jsx)("div", {
                className: Z.customContainer,
                children: (0, r.jsx)(d.yWw, {
                    className: a()(Z.customScroller, w.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)("div", {
                        className: w.content,
                        ref: this._contentRef,
                        children: (0, r.jsxs)(d.JcV, {
                            containerRef: this._contentRef,
                            children: [
                                this.renderHeader(),
                                this.renderContent(),
                                this.renderLoadMore(),
                                !e || t || n ? null : this.renderSpinner(),
                            ],
                        }),
                    }),
                }),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            D(this, "_clickedInside", !1),
            D(this, "_scrollerRef", null),
            D(this, "_expandedRef", null),
            D(this, "_lastExpandedRef", null),
            D(this, "_prevRects", this.getRects()),
            D(this, "_contentRef", i.createRef()),
            D(this, "state", {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: "",
            }),
            D(this, "renderActionQuickSelectItem", (e, t) => {
                var n;
                let { actionFilter: i } = this.props,
                    l = (0, h.Pw)(e.value),
                    a = (0, h.p5)(e.value),
                    s = e.value === i;
                return (0, r.jsxs)(
                    d.lo1,
                    {
                        value: e.value,
                        selectedColor: d.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(d.lo1.Icon, {
                                children: (0, r.jsx)(I.mp, {
                                    themeOverride: s ? T.BRd.DARK : null,
                                    actionType: l,
                                    targetType: a,
                                    action: e.value,
                                }),
                            }),
                            (0, r.jsx)(d.lo1.Label, { children: e.label }),
                            (0, r.jsx)(d.lo1.Checkmark, {}),
                        ],
                    },
                    null != (n = e.key) ? n : t,
                );
            }),
            D(this, "renderUserQuickSelectItem", (e, t) => {
                var n;
                if (e.user instanceof b.Z) {
                    let t = e.user;
                    return (0, r.jsxs)(
                        d.lo1,
                        {
                            value: t.id,
                            selectedColor: d.lo1.Colors.BRAND,
                            children: [
                                (0, r.jsx)(d.lo1.Icon, {
                                    children: (0, r.jsx)(d.qEK, {
                                        size: d.EFr.SIZE_32,
                                        src: t.getAvatarURL(this.props.guildId, 32),
                                        "aria-label": t.username,
                                        className: w.avatar,
                                    }),
                                }),
                                (0, r.jsxs)(d.lo1.Label, {
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            children: O.ZP.getUserTag(t, { mode: "username" }),
                                        }),
                                        !t.hasUniqueUsername() &&
                                            (0, r.jsxs)(d.Text, {
                                                variant: "text-xs/normal",
                                                className: w.discriminator,
                                                children: ["#", t.discriminator],
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(d.lo1.Checkmark, {}),
                            ],
                        },
                        t.id,
                    );
                }
                return (0, r.jsxs)(
                    d.lo1,
                    {
                        value: e.value,
                        selectedColor: d.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(d.lo1.Icon, {
                                children: (0, r.jsx)(d.BFJ, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 30,
                                    height: 30,
                                }),
                            }),
                            (0, r.jsx)(d.lo1.Label, { children: e.label }),
                            (0, r.jsx)(d.lo1.Checkmark, {}),
                        ],
                    },
                    null != (n = e.key) ? n : t,
                );
            }),
            D(this, "renderHeaderDropdowns", () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: l, moderators: s } = this.props;
                if (i) return null;
                let o = E.Iv(),
                    c =
                        null !=
                        (e = o.find((e) => {
                            let { value: t } = e;
                            return n === t;
                        }))
                            ? e
                            : o[0],
                    u = {
                        label: P.intl.string(P.t.ZRFdsL),
                        valueLabel: P.intl.string(P.t.an9Ry3),
                        value: null,
                    },
                    g = [u, ...s].map((e) =>
                        e instanceof b.Z
                            ? (function (e) {
                                  return {
                                      label: e.username,
                                      value: e.id,
                                      user: e,
                                  };
                              })(e)
                            : e,
                    ),
                    m =
                        null !=
                        (t = g.find((e) => {
                            let { value: t } = e;
                            return t === l;
                        }))
                            ? t
                            : u;
                return (0, r.jsxs)("div", {
                    className: w.quickSelect,
                    children: [
                        (0, r.jsx)(d.EFH, {
                            popoutClassName: a()(w.selectFilterPopout, R.elevationBorderHigh),
                            items: g,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: m,
                            onChange: this.handleFilterUserChange,
                            label: P.intl.string(P.t["hxnY/q"]),
                            placeholder: P.intl.string(P.t.pYHobK),
                            popoutProps: {
                                autoInvert: !1,
                                position: "bottom",
                            },
                        }),
                        (0, r.jsx)(d.EFH, {
                            placeholder: P.intl.string(P.t.I288Zx),
                            label: P.intl.string(P.t.rautds),
                            popoutClassName: a()(w.selectFilterPopout, R.elevationBorderLow),
                            items: o,
                            renderItem: this.renderActionQuickSelectItem,
                            renderValue: this.renderActionQuickSelectValue,
                            value: c,
                            onChange: this.handleFilterActionChange,
                            popoutProps: {
                                autoInvert: !1,
                                position: "bottom",
                            },
                        }),
                    ],
                });
            }),
            D(this, "renderLoadMore", () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: w.loadMore,
                        children: (0, r.jsx)(d.Button, {
                            variant: "secondary",
                            text: P.intl.string(P.t["Q/LSXp"]),
                            onClick: this.handleFetchNextPage,
                        }),
                    });
            }),
            D(this, "handleFilterActionChange", (e) => {
                (0, u.ZX)(e, this.props.guildId);
            }),
            D(this, "handleFilterUserChange", (e) => {
                (0, u.uo)(e, this.props.guildId);
            }),
            D(this, "handleHeaderClick", (e) => {
                let { expandedId: t } = this.state;
                t !== e.id
                    ? ((this._clickedInside = !0),
                      this.setState({
                          expandedId: e.id,
                          lastExpandedId: t,
                      }),
                      (this._prevRects = this.getRects()))
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      null != t && (this._prevRects = this.getRects()),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null,
                      }));
            }),
            D(this, "handleOutsideClick", () => {
                null == this.state.expandedId || this._clickedInside
                    ? null != this.state.expandedId && (this._clickedInside = !1)
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null,
                      }),
                      (this._prevRects = this.getRects()));
            }),
            D(this, "handleContentClick", (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            D(this, "handleSetScrollerRef", (e) => {
                this._scrollerRef = e;
            }),
            D(this, "handleOnScroll", () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            D(this, "handleFetchNextPage", () => {
                (0, u.OY)(this.props.guildId);
            }),
            D(this, "handleActionFilterQueryChange", (e) => {
                this.setState({ actionFilterQuery: e });
            }),
            D(this, "handleActionFilterQueryClear", () => {
                this.setState({ actionFilterQuery: "" });
            }),
            D(this, "handleSetExpandedRef", (e) => {
                this._expandedRef = e;
            }),
            D(this, "handleSetLastExpandedRef", (e) => {
                this._lastExpandedRef = e;
            });
    }
}
let B = c.ZP.connectStores([N.Z, y.Z, j.Z, f.Z, v.Z, _.default], () => {
    let e = y.Z.getGuildId(),
        t = j.Z.getGuild(e),
        n = N.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: N.Z.userIds.map((e) => _.default.getUser(e)).filter(C.lm),
        isInitialLoading: N.Z.isInitialLoading,
        isLoading: N.Z.isLoading,
        isLoadingNextPage: N.Z.isLoadingNextPage,
        showLoadMore: N.Z.groupedFetchCount > 2,
        hasError: N.Z.hasError,
        hasOlderLogs: N.Z.hasOlderLogs,
        logs: null != n && null != t ? E._$(n, t) : [],
        actionFilter: N.Z.actionFilter,
        userIdFilter: N.Z.userIdFilter,
        theme: f.Z.theme,
        hide: v.Z.enabled,
    };
})(U);
