n.d(t, { Z: () => B }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(374470),
    c = n(442837),
    d = n(333200),
    u = n(481060),
    g = n(480137),
    m = n(239091),
    p = n(497321),
    f = n(724757),
    h = n(210887),
    b = n(387667),
    x = n(598077),
    j = n(592125),
    v = n(430824),
    _ = n(246946),
    C = n(594174),
    O = n(823379),
    y = n(51144),
    E = n(999382),
    N = n(909746),
    I = n(233857),
    S = n(501801),
    T = n(603784),
    P = n(981631),
    w = n(388032),
    Z = n(912864),
    R = n(630016);
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
              T.Z,
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
                          (0, m.jW)(e, async () => {
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
                          i = v.Z.getGuild(l);
                      null != t.options.channel &&
                          "string" != typeof t.options.channel &&
                          null != i &&
                          (0, m.jW)(e, async () => {
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
                          case P.KFR.CHANNEL:
                          case P.KFR.CHANNEL_OVERWRITE:
                              let i = j.Z.getChannel(t.targetId),
                                  a = v.Z.getGuild(l);
                              if (null != i && null != a)
                                  return (0, m.jW)(e, async () => {
                                      let { default: e } = await n.e("51529").then(n.bind(n, 228620));
                                      return (t) => (0, r.jsx)(e, L(A({}, t), { channel: i }));
                                  });
                              return (0, m.jW)(e, async () => {
                                  let { default: e } = await n.e("5396").then(n.bind(n, 999588));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          L(A({}, n), {
                                              id: t.targetId,
                                              label: w.intl.string(w.t.rCazna),
                                          }),
                                      );
                              });
                          case P.KFR.USER:
                              let o = C.default.getUser(t.targetId);
                              if (null != o && null != l)
                                  return (0, m.jW)(e, async () => {
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
        p = i.useRef(c);
    i.useEffect(() => {
        p.current = c;
    }, [c]);
    let h = (0, f.Z)("audit-log", p);
    return (0, r.jsx)(s.bG, {
        navigator: h,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: i } = e,
                    s = k(e, ["ref"]);
                return (0, r.jsx)(
                    "div",
                    L(A({ ref: i }, s), {
                        className: Z.list,
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
                                    className: Z.row,
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
        (0, g.bY)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick);
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
                (0, g.OY)(this.props.guildId, !0);
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
    renderHeader() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: Z.customHeader,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            children: w.intl.string(w.t.SPWLyT),
                        }),
                        this.renderHeaderDropdowns(),
                    ],
                }),
                (0, r.jsx)(u.izJ, { className: Z.divider }),
            ],
        });
    }
    renderSpinner() {
        return (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
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
                guildId: d,
                guild: g,
            } = this.props;
        if (a) return (0, r.jsx)(p.Z, {});
        if (o || s) return this.renderSpinner();
        if (0 === i.length) {
            let e = c ? w.intl.string(w.t.tzkaD7) : w.intl.string(w.t.lNuYhh),
                t = c ? w.intl.string(w.t.Ww5Tjy) : w.intl.string(w.t["RHhk+P"]);
            return (0, r.jsxs)(u.ubH, {
                theme: l,
                className: Z.empty,
                children: [
                    (0, r.jsx)(u.oxh, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130,
                    }),
                    (0, r.jsx)(u.OZU, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t,
                    }),
                ],
            });
        }
        return (0, r.jsx)(M, {
            logs: i,
            guildId: d,
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
            className: R.customColumn,
            children: (0, r.jsx)("div", {
                className: R.customContainer,
                children: (0, r.jsx)(u.yWw, {
                    className: a()(R.customScroller, Z.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)("div", {
                        className: Z.content,
                        ref: this._contentRef,
                        children: (0, r.jsxs)(u.JcV, {
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
            D(this, "formatActionOption", (e) => {
                let t = (0, b.Pw)(e.value),
                    n = (0, b.p5)(e.value);
                return {
                    id: e.value,
                    value: e.value,
                    label: e.label,
                    leading: (0, r.jsx)(S.mp, {
                        themeOverride: null,
                        actionType: t,
                        targetType: n,
                        action: e.value,
                    }),
                };
            }),
            D(this, "formatUserOption", (e) => {
                if (!(e.user instanceof x.Z))
                    return {
                        id: e.value,
                        value: e.value,
                        label: e.label,
                        leading: (0, r.jsx)(u.BFJ, {
                            size: "custom",
                            color: "currentColor",
                            width: 30,
                            height: 30,
                        }),
                    };
                {
                    let t = e.user;
                    return {
                        id: t.id,
                        value: t.id,
                        label: y.ZP.getUserTag(t, { mode: "username" }),
                        leading: (0, r.jsx)(u.qEK, {
                            size: u.EFr.SIZE_24,
                            src: t.getAvatarURL(this.props.guildId, 32),
                            "aria-label": t.username,
                            className: Z.avatar,
                        }),
                        trailing: t.hasUniqueUsername()
                            ? void 0
                            : (0, r.jsxs)(u.Text, {
                                  variant: "text-xs/normal",
                                  className: Z.discriminator,
                                  children: ["#", t.discriminator],
                              }),
                    };
                }
            }),
            D(this, "renderHeaderDropdowns", () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: l, moderators: a } = this.props;
                if (i) return null;
                let s = N.Iv(),
                    o =
                        null !=
                        (e = s.find((e) => {
                            let { value: t } = e;
                            return n === t;
                        }))
                            ? e
                            : s[0],
                    c = {
                        label: w.intl.string(w.t.ZRFdsL),
                        valueLabel: w.intl.string(w.t.an9Ry3),
                        value: null,
                    },
                    u = [c, ...a].map((e) =>
                        e instanceof x.Z
                            ? (function (e) {
                                  return {
                                      label: e.username,
                                      value: e.id,
                                      user: e,
                                  };
                              })(e)
                            : e,
                    ),
                    g =
                        null !=
                        (t = u.find((e) => {
                            let { value: t } = e;
                            return t === l;
                        }))
                            ? t
                            : c;
                return (0, r.jsxs)("div", {
                    className: Z.quickSelect,
                    children: [
                        (0, r.jsx)(d.V, {
                            options: u,
                            formatOption: this.formatUserOption,
                            value: g.value,
                            onSelectionChange: this.handleFilterUserChange,
                            label: w.intl.string(w.t["hxnY/q"]),
                            placeholder: w.intl.string(w.t.pYHobK),
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(d.V, {
                            placeholder: w.intl.string(w.t.I288Zx),
                            label: w.intl.string(w.t.rautds),
                            options: s,
                            formatOption: this.formatActionOption,
                            value: o.value,
                            onSelectionChange: this.handleFilterActionChange,
                            selectionMode: "single",
                        }),
                    ],
                });
            }),
            D(this, "renderLoadMore", () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: Z.loadMore,
                        children: (0, r.jsx)(u.Button, {
                            variant: "secondary",
                            text: w.intl.string(w.t["Q/LSXp"]),
                            onClick: this.handleFetchNextPage,
                        }),
                    });
            }),
            D(this, "handleFilterActionChange", (e) => {
                (0, g.ZX)(e, this.props.guildId);
            }),
            D(this, "handleFilterUserChange", (e) => {
                (0, g.uo)(e, this.props.guildId);
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
                (0, g.OY)(this.props.guildId);
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
let B = c.ZP.connectStores([I.Z, E.Z, v.Z, h.Z, _.Z, C.default], () => {
    let e = E.Z.getGuildId(),
        t = v.Z.getGuild(e),
        n = I.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: I.Z.userIds.map((e) => C.default.getUser(e)).filter(O.lm),
        isInitialLoading: I.Z.isInitialLoading,
        isLoading: I.Z.isLoading,
        isLoadingNextPage: I.Z.isLoadingNextPage,
        showLoadMore: I.Z.groupedFetchCount > 2,
        hasError: I.Z.hasError,
        hasOlderLogs: I.Z.hasOlderLogs,
        logs: null != n && null != t ? N._$(n, t) : [],
        actionFilter: I.Z.actionFilter,
        userIdFilter: I.Z.userIdFilter,
        theme: h.Z.theme,
        hide: _.Z.enabled,
    };
})(U);
