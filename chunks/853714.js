n.d(t, { Z: () => B }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(91192),
    o = n(374470),
    c = n(442837),
    u = n(481060),
    d = n(480137),
    m = n(239091),
    g = n(497321),
    p = n(724757),
    f = n(210887),
    h = n(387667),
    x = n(598077),
    b = n(592125),
    j = n(430824),
    _ = n(246946),
    v = n(594174),
    O = n(823379),
    C = n(51144),
    y = n(987707),
    N = n(999382),
    I = n(909746),
    E = n(501801),
    S = n(603784),
    T = n(981631),
    P = n(388032),
    w = n(539101),
    R = n(319586),
    Z = n(20795);
function D(e, t, n) {
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
function k(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function L(e, t) {
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
}
let M = i.forwardRef((e, t) => {
    var { onHeaderClick: i, guildId: l, guild: s } = e,
        a = L(e, ['onHeaderClick', 'guildId', 'guild']);
    return null == l
        ? null
        : (0, r.jsx)(
              S.Z,
              A(k({ ref: t }, a), {
                  guildId: l,
                  guild: s,
                  onHeaderClick: () => {
                      let { log: e } = a;
                      null == i || i(e);
                  },
                  onUserContextMenu: (e) => {
                      let { log: t } = a,
                          { user: i } = t;
                      null != i &&
                          null != l &&
                          (0, m.jW)(e, async () => {
                              let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      A(k({}, t), {
                                          guildId: l,
                                          user: i
                                      })
                                  );
                          });
                  },
                  onChannelContextMenu: (e) => {
                      let { log: t } = a,
                          i = j.Z.getGuild(l);
                      null != t.options.channel &&
                          'string' != typeof t.options.channel &&
                          null != i &&
                          (0, m.jW)(e, async () => {
                              let { default: e } = await n.e('51529').then(n.bind(n, 228620));
                              return (n) => (null != t.options.channel ? (0, r.jsx)(e, A(k({}, n), { channel: t.options.channel })) : null);
                          });
                  },
                  onTargetContextMenu: (e) => {
                      let { log: t } = a;
                      switch (t.targetType) {
                          case T.KFR.CHANNEL:
                          case T.KFR.CHANNEL_OVERWRITE:
                              let i = b.Z.getChannel(t.targetId),
                                  s = j.Z.getGuild(l);
                              if (null != i && null != s)
                                  return (0, m.jW)(e, async () => {
                                      let { default: e } = await n.e('51529').then(n.bind(n, 228620));
                                      return (t) => (0, r.jsx)(e, A(k({}, t), { channel: i }));
                                  });
                              return (0, m.jW)(e, async () => {
                                  let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          A(k({}, n), {
                                              id: t.targetId,
                                              label: P.intl.string(P.t.rCaznZ)
                                          })
                                      );
                              });
                          case T.KFR.USER:
                              let o = v.default.getUser(t.targetId);
                              if (null != o && null != l)
                                  return (0, m.jW)(e, async () => {
                                      let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                                      return (t) =>
                                          (0, r.jsx)(
                                              e,
                                              A(k({}, t), {
                                                  guildId: l,
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
function G(e) {
    let { logs: t, guildId: n, guild: l, expandedId: s, lastExpandedId: o, scroller: c, setExpandedRef: u, setLastExpandedRef: d, onHeaderClick: m, onContentClick: g } = e,
        f = i.useRef(c);
    i.useEffect(() => {
        f.current = c;
    }, [c]);
    let h = (0, p.Z)('audit-log', f);
    return (0, r.jsx)(a.bG, {
        navigator: h,
        children: (0, r.jsx)(a.SJ, {
            children: (e) => {
                var { ref: i } = e,
                    a = L(e, ['ref']);
                return (0, r.jsx)(
                    'div',
                    A(k({ ref: i }, a), {
                        className: w.list,
                        children: t.map((e) => {
                            let t = s === e.id,
                                i = o === e.id,
                                a = t ? u : i ? d : null;
                            return (0, r.jsx)(
                                M,
                                {
                                    guildId: n,
                                    guild: l,
                                    ref: (e) => {
                                        null == a || a(e);
                                    },
                                    className: w.row,
                                    onHeaderClick: m,
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
M.displayName = 'AuditLogClickWrap';
class U extends i.PureComponent {
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
        return (null == (e = this._scrollerRef) ? void 0 : e.isScrolledToBottom()) || !1;
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
        return null != (t = e.valueLabel) ? t : e.label;
    }
    renderActionQuickSelectValue(e) {
        var t;
        return null != (t = e.valueLabel) ? t : e.label;
    }
    renderHeader() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: w.customHeader,
                    children: [
                        (0, r.jsx)(u.vwX, {
                            tag: u.RB0.H1,
                            className: w.formTitle,
                            children: P.intl.string(P.t.SPWLyc)
                        }),
                        this.renderHeaderDropdowns()
                    ]
                }),
                (0, r.jsx)(u.$i$, { className: w.divider })
            ]
        });
    }
    renderSpinner() {
        return (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            { logs: i, theme: l, hide: s, isInitialLoading: a, isLoading: o, hasError: c, guildId: d, guild: m } = this.props;
        if (s) return (0, r.jsx)(g.Z, {});
        if (o || a) return this.renderSpinner();
        if (0 === i.length) {
            let e = c ? P.intl.string(P.t.tzkaDw) : P.intl.string(P.t.lNuYho),
                t = c ? P.intl.string(P.t.Ww5Tj4) : P.intl.string(P.t['RHhk+P']);
            return (0, r.jsxs)(u.ubH, {
                theme: l,
                className: w.empty,
                children: [
                    (0, r.jsx)(u.oxh, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130
                    }),
                    (0, r.jsx)(u.OZU, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t
                    })
                ]
            });
        }
        return (0, r.jsx)(G, {
            logs: i,
            guildId: d,
            guild: m,
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
            className: R.customColumn,
            children: (0, r.jsx)('div', {
                className: R.customContainer,
                children: (0, r.jsx)(u.yWw, {
                    className: s()(R.customScroller, w.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)('div', {
                        className: w.content,
                        ref: this._contentRef,
                        children: (0, r.jsxs)(u.JcV, {
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
            D(this, '_clickedInside', !1),
            D(this, '_scrollerRef', null),
            D(this, '_expandedRef', null),
            D(this, '_lastExpandedRef', null),
            D(this, '_prevRects', this.getRects()),
            D(this, '_contentRef', i.createRef()),
            D(this, 'state', {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: ''
            }),
            D(this, 'renderActionQuickSelectItem', (e, t) => {
                var n;
                let { actionFilter: i } = this.props,
                    l = (0, h.Pw)(e.value),
                    s = (0, h.p5)(e.value),
                    a = e.value === i;
                return (0, r.jsxs)(
                    u.lo1,
                    {
                        value: e.value,
                        selectedColor: u.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(u.lo1.Icon, {
                                children: (0, r.jsx)(E.mp, {
                                    themeOverride: a ? T.BRd.DARK : null,
                                    actionType: l,
                                    targetType: s,
                                    action: e.value
                                })
                            }),
                            (0, r.jsx)(u.lo1.Label, { children: e.label }),
                            (0, r.jsx)(u.lo1.Checkmark, {})
                        ]
                    },
                    null != (n = e.key) ? n : t
                );
            }),
            D(this, 'renderUserQuickSelectItem', (e, t) => {
                var n;
                if (e.user instanceof x.Z) {
                    let t = e.user;
                    return (0, r.jsxs)(
                        u.lo1,
                        {
                            value: t.id,
                            selectedColor: u.lo1.Colors.BRAND,
                            children: [
                                (0, r.jsx)(u.lo1.Icon, {
                                    children: (0, r.jsx)(u.qEK, {
                                        size: u.EFr.SIZE_32,
                                        src: t.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': t.username,
                                        className: w.avatar
                                    })
                                }),
                                (0, r.jsxs)(u.lo1.Label, {
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: C.ZP.getUserTag(t, { mode: 'username' })
                                        }),
                                        !t.isPomelo() &&
                                            (0, r.jsxs)(u.Text, {
                                                variant: 'text-xs/normal',
                                                className: w.discriminator,
                                                children: ['#', t.discriminator]
                                            })
                                    ]
                                }),
                                (0, r.jsx)(u.lo1.Checkmark, {})
                            ]
                        },
                        t.id
                    );
                }
                return (0, r.jsxs)(
                    u.lo1,
                    {
                        value: e.value,
                        selectedColor: u.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(u.lo1.Icon, {
                                children: (0, r.jsx)(u.BFJ, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 30,
                                    height: 30
                                })
                            }),
                            (0, r.jsx)(u.lo1.Label, { children: e.label }),
                            (0, r.jsx)(u.lo1.Checkmark, {})
                        ]
                    },
                    null != (n = e.key) ? n : t
                );
            }),
            D(this, 'renderHeaderDropdowns', () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: l, moderators: a } = this.props;
                if (i) return null;
                let o = I.Iv(),
                    c =
                        null !=
                        (e = o.find((e) => {
                            let { value: t } = e;
                            return n === t;
                        }))
                            ? e
                            : o[0],
                    d = {
                        label: P.intl.string(P.t.ZRFdsL),
                        valueLabel: P.intl.string(P.t.an9Ry8),
                        value: null
                    },
                    m = [d, ...a].map((e) =>
                        e instanceof x.Z
                            ? {
                                  label: e.username,
                                  value: e.id,
                                  user: e
                              }
                            : e
                    ),
                    g =
                        null !=
                        (t = m.find((e) => {
                            let { value: t } = e;
                            return t === l;
                        }))
                            ? t
                            : d;
                return (0, r.jsxs)('div', {
                    className: w.quickSelect,
                    children: [
                        (0, r.jsx)(u.EFH, {
                            popoutClassName: s()(w.selectFilterPopout, Z.elevationBorderHigh),
                            items: m,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: g,
                            onChange: this.handleFilterUserChange,
                            label: P.intl.string(P.t['hxnY/v']),
                            placeholder: P.intl.string(P.t.pYHobG),
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        }),
                        (0, r.jsx)(u.EFH, {
                            placeholder: P.intl.string(P.t.I288Z2),
                            label: P.intl.string(P.t.rautdn),
                            popoutClassName: s()(w.selectFilterPopout, Z.elevationBorderLow),
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
            D(this, 'renderLoadMore', () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, r.jsx)(u.zxk, {
                        color: u.zxk.Colors.PRIMARY,
                        className: w.loadMore,
                        onClick: this.handleFetchNextPage,
                        children: P.intl.string(P.t['Q/LSXl'])
                    });
            }),
            D(this, 'handleFilterActionChange', (e) => {
                (0, d.ZX)(e, this.props.guildId);
            }),
            D(this, 'handleFilterUserChange', (e) => {
                (0, d.uo)(e, this.props.guildId);
            }),
            D(this, 'handleHeaderClick', (e) => {
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
            D(this, 'handleOutsideClick', () => {
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
            D(this, 'handleContentClick', (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            D(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            D(this, 'handleOnScroll', () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            D(this, 'handleFetchNextPage', () => {
                (0, d.OY)(this.props.guildId);
            }),
            D(this, 'handleActionFilterQueryChange', (e) => {
                this.setState({ actionFilterQuery: e });
            }),
            D(this, 'handleActionFilterQueryClear', () => {
                this.setState({ actionFilterQuery: '' });
            }),
            D(this, 'handleSetExpandedRef', (e) => {
                this._expandedRef = e;
            }),
            D(this, 'handleSetLastExpandedRef', (e) => {
                this._lastExpandedRef = e;
            });
    }
}
let B = c.ZP.connectStores([y.Z, N.Z, j.Z, f.Z, _.Z, v.default], () => {
    let e = N.Z.getGuildId(),
        t = j.Z.getGuild(e),
        n = y.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: y.Z.userIds.map((e) => v.default.getUser(e)).filter(O.lm),
        isInitialLoading: y.Z.isInitialLoading,
        isLoading: y.Z.isLoading,
        isLoadingNextPage: y.Z.isLoadingNextPage,
        showLoadMore: y.Z.groupedFetchCount > 2,
        hasError: y.Z.hasError,
        hasOlderLogs: y.Z.hasOlderLogs,
        logs: null != n && null != t ? I._$(n, t) : [],
        actionFilter: y.Z.actionFilter,
        userIdFilter: y.Z.userIdFilter,
        theme: f.Z.theme,
        hide: _.Z.enabled
    };
})(U);
