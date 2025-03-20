n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(91192),
    o = n(374470),
    c = n(442837),
    A = n(481060),
    d = n(480137),
    u = n(239091),
    g = n(497321),
    f = n(724757),
    m = n(210887),
    p = n(387667),
    h = n(598077),
    C = n(592125),
    b = n(430824),
    v = n(246946),
    x = n(594174),
    N = n(823379),
    j = n(51144),
    E = n(987707),
    I = n(999382),
    O = n(909746),
    y = n(501801),
    w = n(603784),
    P = n(981631),
    B = n(388032),
    D = n(140091),
    T = n(599662),
    S = n(423308);
function L(e, t, n) {
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
function R(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let W = i.forwardRef((e, t) => {
    var { onHeaderClick: i, guildId: s, guild: a } = e,
        l = Z(e, ['onHeaderClick', 'guildId', 'guild']);
    return null == s
        ? null
        : (0, r.jsx)(
              w.Z,
              Q(R({ ref: t }, l), {
                  guildId: s,
                  guild: a,
                  onHeaderClick: () => {
                      let { log: e } = l;
                      null == i || i(e);
                  },
                  onUserContextMenu: (e) => {
                      let { log: t } = l,
                          { user: i } = t;
                      null != i &&
                          null != s &&
                          (0, u.jW)(e, async () => {
                              let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      Q(R({}, t), {
                                          guildId: s,
                                          user: i
                                      })
                                  );
                          });
                  },
                  onChannelContextMenu: (e) => {
                      let { log: t } = l,
                          i = b.Z.getGuild(s);
                      null != t.options.channel &&
                          'string' != typeof t.options.channel &&
                          null != i &&
                          (0, u.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                              return (n) => (null != t.options.channel ? (0, r.jsx)(e, Q(R({}, n), { channel: t.options.channel })) : null);
                          });
                  },
                  onTargetContextMenu: (e) => {
                      let { log: t } = l;
                      switch (t.targetType) {
                          case P.KFR.CHANNEL:
                          case P.KFR.CHANNEL_OVERWRITE:
                              let i = C.Z.getChannel(t.targetId),
                                  a = b.Z.getGuild(s);
                              if (null != i && null != a)
                                  return (0, u.jW)(e, async () => {
                                      let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                                      return (t) => (0, r.jsx)(e, Q(R({}, t), { channel: i }));
                                  });
                              return (0, u.jW)(e, async () => {
                                  let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          Q(R({}, n), {
                                              id: t.targetId,
                                              label: B.NW.string(B.t.rCaznZ)
                                          })
                                      );
                              });
                          case P.KFR.USER:
                              let o = x.default.getUser(t.targetId);
                              if (null != o && null != s)
                                  return (0, u.jW)(e, async () => {
                                      let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                                      return (t) =>
                                          (0, r.jsx)(
                                              e,
                                              Q(R({}, t), {
                                                  guildId: s,
                                                  user: o
                                              })
                                          );
                                  });
                      }
                      return null;
                  }
              })
          );
});
function k(e) {
    let { logs: t, guildId: n, guild: s, expandedId: a, lastExpandedId: o, scroller: c, setExpandedRef: A, setLastExpandedRef: d, onHeaderClick: u, onContentClick: g } = e,
        m = i.useRef(c);
    i.useEffect(() => {
        m.current = c;
    }, [c]);
    let p = (0, f.Z)('audit-log', m);
    return (0, r.jsx)(l.bG, {
        navigator: p,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: i } = e,
                    l = Z(e, ['ref']);
                return (0, r.jsx)(
                    'div',
                    Q(R({ ref: i }, l), {
                        className: D.list,
                        children: t.map((e) => {
                            let t = a === e.id,
                                i = o === e.id,
                                l = t ? A : i ? d : null;
                            return (0, r.jsx)(
                                W,
                                {
                                    guildId: n,
                                    guild: s,
                                    ref: (e) => (null == l ? void 0 : l(e)),
                                    className: D.row,
                                    onHeaderClick: u,
                                    onContentClick: g,
                                    log: e,
                                    expanded: t
                                },
                                e.id
                            );
                        })
                    })
                );
            }
        })
    });
}
W.displayName = 'AuditLogClickWrap';
class M extends i.PureComponent {
    componentDidMount() {
        (0, d.bY)(this.props.guildId), document.addEventListener('click', this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
    componentDidUpdate(e, t) {
        this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, d.OY)(this.props.guildId, !0);
    }
    isScrollerAtBottom() {
        var e;
        return (null === (e = this._scrollerRef) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1;
    }
    fixScroll() {
        let e = this._scrollerRef;
        if (null == e) return;
        let t = this.getRects(),
            n = this._prevRects;
        if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top) return;
        let r = n.expanded.height - t.lastExpanded.height,
            i = e.getScrollerState().scrollTop - r;
        e.scrollTo({ to: i });
    }
    getRects() {
        let e = {
            lastExpanded: null,
            expanded: null
        };
        if (null != this._lastExpandedRef) {
            let t = this._lastExpandedRef;
            (0, o.k)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = this._expandedRef;
            (0, o.k)(t) && (e.expanded = t.getBoundingClientRect());
        }
        return e;
    }
    renderUserQuickSelectValue(e) {
        var t;
        return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label;
    }
    renderActionQuickSelectValue(e) {
        var t;
        return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label;
    }
    renderHeader() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: D.customHeader,
                    children: [
                        (0, r.jsx)(A.vwX, {
                            tag: A.RB0.H1,
                            className: D.formTitle,
                            children: B.NW.string(B.t.SPWLyc)
                        }),
                        this.renderHeaderDropdowns()
                    ]
                }),
                (0, r.jsx)(A.$i$, { className: D.divider })
            ]
        });
    }
    renderSpinner() {
        return (0, r.jsx)(A.$jN, { type: A.$jN.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            { logs: i, theme: s, hide: a, isInitialLoading: l, isLoading: o, hasError: c, guildId: d, guild: u } = this.props;
        if (a) return (0, r.jsx)(g.Z, {});
        if (o || l) return this.renderSpinner();
        if (0 === i.length) {
            let e = c ? B.NW.string(B.t.tzkaDw) : B.NW.string(B.t.lNuYho),
                t = c ? B.NW.string(B.t.Ww5Tj4) : B.NW.string(B.t['RHhk+P']);
            return (0, r.jsxs)(A.ubH, {
                theme: s,
                className: D.empty,
                children: [
                    (0, r.jsx)(A.oxh, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130
                    }),
                    (0, r.jsx)(A.OZU, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t
                    })
                ]
            });
        }
        return (0, r.jsx)(k, {
            logs: i,
            guildId: d,
            guild: u,
            expandedId: e,
            lastExpandedId: t,
            setExpandedRef: this.handleSetExpandedRef,
            setLastExpandedRef: this.handleSetLastExpandedRef,
            onHeaderClick: this.handleHeaderClick,
            onContentClick: this.handleContentClick,
            scroller: this._scrollerRef
        });
    }
    render() {
        let { isLoadingNextPage: e, hide: t, isLoading: n } = this.props;
        return (0, r.jsx)('div', {
            className: T.customColumn,
            children: (0, r.jsx)('div', {
                className: T.customContainer,
                children: (0, r.jsx)(A.yWw, {
                    className: a()(T.customScroller, D.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)('div', {
                        className: D.content,
                        ref: this._contentRef,
                        children: (0, r.jsxs)(A.JcV, {
                            containerRef: this._contentRef,
                            children: [this.renderHeader(), this.renderContent(), this.renderLoadMore(), !e || t || n ? null : this.renderSpinner()]
                        })
                    })
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            L(this, '_clickedInside', !1),
            L(this, '_scrollerRef', null),
            L(this, '_expandedRef', null),
            L(this, '_lastExpandedRef', null),
            L(this, '_prevRects', this.getRects()),
            L(this, '_contentRef', i.createRef()),
            L(this, 'state', {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: ''
            }),
            L(this, 'renderActionQuickSelectItem', (e, t) => {
                var n;
                let { actionFilter: i } = this.props,
                    s = (0, p.Pw)(e.value),
                    a = (0, p.p5)(e.value),
                    l = e.value === i;
                return (0, r.jsxs)(
                    A.lo1,
                    {
                        value: e.value,
                        selectedColor: A.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(A.lo1.Icon, {
                                children: (0, r.jsx)(y.mp, {
                                    themeOverride: l ? P.BRd.DARK : null,
                                    actionType: s,
                                    targetType: a,
                                    action: e.value
                                })
                            }),
                            (0, r.jsx)(A.lo1.Label, { children: e.label }),
                            (0, r.jsx)(A.lo1.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            L(this, 'renderUserQuickSelectItem', (e, t) => {
                var n;
                if (e.user instanceof h.Z) {
                    let t = e.user;
                    return (0, r.jsxs)(
                        A.lo1,
                        {
                            value: t.id,
                            selectedColor: A.lo1.Colors.BRAND,
                            children: [
                                (0, r.jsx)(A.lo1.Icon, {
                                    children: (0, r.jsx)(A.qEK, {
                                        size: A.EFr.SIZE_32,
                                        src: t.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': t.username,
                                        className: D.avatar
                                    })
                                }),
                                (0, r.jsxs)(A.lo1.Label, {
                                    children: [
                                        (0, r.jsx)(A.Text, {
                                            variant: 'text-sm/normal',
                                            children: j.ZP.getUserTag(t, { mode: 'username' })
                                        }),
                                        !t.isPomelo() &&
                                            (0, r.jsxs)(A.Text, {
                                                variant: 'text-xs/normal',
                                                className: D.discriminator,
                                                children: ['#', t.discriminator]
                                            })
                                    ]
                                }),
                                (0, r.jsx)(A.lo1.Checkmark, {})
                            ]
                        },
                        t.id
                    );
                }
                return (0, r.jsxs)(
                    A.lo1,
                    {
                        value: e.value,
                        selectedColor: A.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(A.lo1.Icon, {
                                children: (0, r.jsx)(A.BFJ, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 30,
                                    height: 30
                                })
                            }),
                            (0, r.jsx)(A.lo1.Label, { children: e.label }),
                            (0, r.jsx)(A.lo1.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            L(this, 'renderHeaderDropdowns', () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: s, moderators: l } = this.props;
                if (i) return null;
                let o = O.Iv(),
                    c =
                        null !==
                            (e = o.find((e) => {
                                let { value: t } = e;
                                return n === t;
                            })) && void 0 !== e
                            ? e
                            : o[0],
                    d = {
                        label: B.NW.string(B.t.ZRFdsL),
                        valueLabel: B.NW.string(B.t.an9Ry8),
                        value: null
                    },
                    u = [d, ...l].map((e) =>
                        e instanceof h.Z
                            ? {
                                  label: e.username,
                                  value: e.id,
                                  user: e
                              }
                            : e
                    ),
                    g =
                        null !==
                            (t = u.find((e) => {
                                let { value: t } = e;
                                return t === s;
                            })) && void 0 !== t
                            ? t
                            : d;
                return (0, r.jsxs)('div', {
                    className: D.quickSelect,
                    children: [
                        (0, r.jsx)(A.EFH, {
                            popoutClassName: a()(D.selectFilterPopout, S.elevationBorderHigh),
                            items: u,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: g,
                            onChange: this.handleFilterUserChange,
                            label: B.NW.string(B.t['hxnY/v']),
                            placeholder: B.NW.string(B.t.pYHobG),
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        }),
                        (0, r.jsx)(A.EFH, {
                            placeholder: B.NW.string(B.t.I288Z2),
                            label: B.NW.string(B.t.rautdn),
                            popoutClassName: a()(D.selectFilterPopout, S.elevationBorderLow),
                            items: o,
                            renderItem: this.renderActionQuickSelectItem,
                            renderValue: this.renderActionQuickSelectValue,
                            value: c,
                            onChange: this.handleFilterActionChange,
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        })
                    ]
                });
            }),
            L(this, 'renderLoadMore', () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, r.jsx)(A.zxk, {
                        color: A.zxk.Colors.PRIMARY,
                        className: D.loadMore,
                        onClick: this.handleFetchNextPage,
                        children: B.NW.string(B.t['Q/LSXl'])
                    });
            }),
            L(this, 'handleFilterActionChange', (e) => {
                (0, d.ZX)(e, this.props.guildId);
            }),
            L(this, 'handleFilterUserChange', (e) => {
                (0, d.uo)(e, this.props.guildId);
            }),
            L(this, 'handleHeaderClick', (e) => {
                let { expandedId: t } = this.state;
                t !== e.id
                    ? ((this._clickedInside = !0),
                      this.setState({
                          expandedId: e.id,
                          lastExpandedId: t
                      }),
                      (this._prevRects = this.getRects()))
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      null != t && (this._prevRects = this.getRects()),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null
                      }));
            }),
            L(this, 'handleOutsideClick', () => {
                null == this.state.expandedId || this._clickedInside
                    ? null != this.state.expandedId && (this._clickedInside = !1)
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null
                      }),
                      (this._prevRects = this.getRects()));
            }),
            L(this, 'handleContentClick', (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            L(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            L(this, 'handleOnScroll', () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            L(this, 'handleFetchNextPage', () => {
                (0, d.OY)(this.props.guildId);
            }),
            L(this, 'handleActionFilterQueryChange', (e) => {
                this.setState({ actionFilterQuery: e });
            }),
            L(this, 'handleActionFilterQueryClear', () => {
                this.setState({ actionFilterQuery: '' });
            }),
            L(this, 'handleSetExpandedRef', (e) => {
                this._expandedRef = e;
            }),
            L(this, 'handleSetLastExpandedRef', (e) => {
                this._lastExpandedRef = e;
            });
    }
}
let _ = c.ZP.connectStores([E.Z, I.Z, b.Z, m.Z, v.Z, x.default], () => {
    let e = I.Z.getGuildId(),
        t = b.Z.getGuild(e),
        n = E.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: E.Z.userIds.map((e) => x.default.getUser(e)).filter(N.lm),
        isInitialLoading: E.Z.isInitialLoading,
        isLoading: E.Z.isLoading,
        isLoadingNextPage: E.Z.isLoadingNextPage,
        showLoadMore: E.Z.groupedFetchCount > 2,
        hasError: E.Z.hasError,
        hasOlderLogs: E.Z.hasOlderLogs,
        logs: null != n && null != t ? O._$(n, t) : [],
        actionFilter: E.Z.actionFilter,
        userIdFilter: E.Z.userIdFilter,
        theme: m.Z.theme,
        hide: v.Z.enabled
    };
})(M);
