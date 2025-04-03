n.d(t, { Z: () => U }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(91192),
    o = n(374470),
    c = n(442837),
    d = n(481060),
    u = n(480137),
    m = n(239091),
    g = n(497321),
    p = n(724757),
    h = n(210887),
    f = n(387667),
    b = n(598077),
    x = n(592125),
    j = n(430824),
    N = n(246946),
    _ = n(594174),
    v = n(823379),
    C = n(51144),
    O = n(987707),
    y = n(999382),
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
function A(e) {
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
function k(e, t) {
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
function W(e, t) {
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
let L = i.forwardRef((e, t) => {
    var { onHeaderClick: i, guildId: s, guild: a } = e,
        l = W(e, ['onHeaderClick', 'guildId', 'guild']);
    return null == s
        ? null
        : (0, r.jsx)(
              S.Z,
              k(A({ ref: t }, l), {
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
                          (0, m.jW)(e, async () => {
                              let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      k(A({}, t), {
                                          guildId: s,
                                          user: i
                                      })
                                  );
                          });
                  },
                  onChannelContextMenu: (e) => {
                      let { log: t } = l,
                          i = j.Z.getGuild(s);
                      null != t.options.channel &&
                          'string' != typeof t.options.channel &&
                          null != i &&
                          (0, m.jW)(e, async () => {
                              let { default: e } = await n.e('51529').then(n.bind(n, 228620));
                              return (n) => (null != t.options.channel ? (0, r.jsx)(e, k(A({}, n), { channel: t.options.channel })) : null);
                          });
                  },
                  onTargetContextMenu: (e) => {
                      let { log: t } = l;
                      switch (t.targetType) {
                          case T.KFR.CHANNEL:
                          case T.KFR.CHANNEL_OVERWRITE:
                              let i = x.Z.getChannel(t.targetId),
                                  a = j.Z.getGuild(s);
                              if (null != i && null != a)
                                  return (0, m.jW)(e, async () => {
                                      let { default: e } = await n.e('51529').then(n.bind(n, 228620));
                                      return (t) => (0, r.jsx)(e, k(A({}, t), { channel: i }));
                                  });
                              return (0, m.jW)(e, async () => {
                                  let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          k(A({}, n), {
                                              id: t.targetId,
                                              label: P.NW.string(P.t.rCaznZ)
                                          })
                                      );
                              });
                          case T.KFR.USER:
                              let o = _.default.getUser(t.targetId);
                              if (null != o && null != s)
                                  return (0, m.jW)(e, async () => {
                                      let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                                      return (t) =>
                                          (0, r.jsx)(
                                              e,
                                              k(A({}, t), {
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
function M(e) {
    let { logs: t, guildId: n, guild: s, expandedId: a, lastExpandedId: o, scroller: c, setExpandedRef: d, setLastExpandedRef: u, onHeaderClick: m, onContentClick: g } = e,
        h = i.useRef(c);
    i.useEffect(() => {
        h.current = c;
    }, [c]);
    let f = (0, p.Z)('audit-log', h);
    return (0, r.jsx)(l.bG, {
        navigator: f,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                var { ref: i } = e,
                    l = W(e, ['ref']);
                return (0, r.jsx)(
                    'div',
                    k(A({ ref: i }, l), {
                        className: w.list,
                        children: t.map((e) => {
                            let t = a === e.id,
                                i = o === e.id,
                                l = t ? d : i ? u : null;
                            return (0, r.jsx)(
                                L,
                                {
                                    guildId: n,
                                    guild: s,
                                    ref: (e) => (null == l ? void 0 : l(e)),
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
L.displayName = 'AuditLogClickWrap';
class G extends i.PureComponent {
    componentDidMount() {
        (0, u.bY)(this.props.guildId), document.addEventListener('click', this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
    componentDidUpdate(e, t) {
        this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, u.OY)(this.props.guildId, !0);
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
                        (0, r.jsx)(d.vwX, {
                            tag: d.RB0.H1,
                            className: w.formTitle,
                            children: P.NW.string(P.t.SPWLyc)
                        }),
                        this.renderHeaderDropdowns()
                    ]
                }),
                (0, r.jsx)(d.$i$, { className: w.divider })
            ]
        });
    }
    renderSpinner() {
        return (0, r.jsx)(d.$jN, { type: d.$jN.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            { logs: i, theme: s, hide: a, isInitialLoading: l, isLoading: o, hasError: c, guildId: u, guild: m } = this.props;
        if (a) return (0, r.jsx)(g.Z, {});
        if (o || l) return this.renderSpinner();
        if (0 === i.length) {
            let e = c ? P.NW.string(P.t.tzkaDw) : P.NW.string(P.t.lNuYho),
                t = c ? P.NW.string(P.t.Ww5Tj4) : P.NW.string(P.t['RHhk+P']);
            return (0, r.jsxs)(d.ubH, {
                theme: s,
                className: w.empty,
                children: [
                    (0, r.jsx)(d.oxh, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130
                    }),
                    (0, r.jsx)(d.OZU, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t
                    })
                ]
            });
        }
        return (0, r.jsx)(M, {
            logs: i,
            guildId: u,
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
                children: (0, r.jsx)(d.yWw, {
                    className: a()(R.customScroller, w.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)('div', {
                        className: w.content,
                        ref: this._contentRef,
                        children: (0, r.jsxs)(d.JcV, {
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
                    s = (0, f.Pw)(e.value),
                    a = (0, f.p5)(e.value),
                    l = e.value === i;
                return (0, r.jsxs)(
                    d.lo1,
                    {
                        value: e.value,
                        selectedColor: d.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(d.lo1.Icon, {
                                children: (0, r.jsx)(E.mp, {
                                    themeOverride: l ? T.BRd.DARK : null,
                                    actionType: s,
                                    targetType: a,
                                    action: e.value
                                })
                            }),
                            (0, r.jsx)(d.lo1.Label, { children: e.label }),
                            (0, r.jsx)(d.lo1.Checkmark, {})
                        ]
                    },
                    null != (n = e.key) ? n : t
                );
            }),
            D(this, 'renderUserQuickSelectItem', (e, t) => {
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
                                        'aria-label': t.username,
                                        className: w.avatar
                                    })
                                }),
                                (0, r.jsxs)(d.lo1.Label, {
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-sm/normal',
                                            children: C.ZP.getUserTag(t, { mode: 'username' })
                                        }),
                                        !t.isPomelo() &&
                                            (0, r.jsxs)(d.Text, {
                                                variant: 'text-xs/normal',
                                                className: w.discriminator,
                                                children: ['#', t.discriminator]
                                            })
                                    ]
                                }),
                                (0, r.jsx)(d.lo1.Checkmark, {})
                            ]
                        },
                        t.id
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
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 30,
                                    height: 30
                                })
                            }),
                            (0, r.jsx)(d.lo1.Label, { children: e.label }),
                            (0, r.jsx)(d.lo1.Checkmark, {})
                        ]
                    },
                    null != (n = e.key) ? n : t
                );
            }),
            D(this, 'renderHeaderDropdowns', () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: s, moderators: l } = this.props;
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
                    u = {
                        label: P.NW.string(P.t.ZRFdsL),
                        valueLabel: P.NW.string(P.t.an9Ry8),
                        value: null
                    },
                    m = [u, ...l].map((e) =>
                        e instanceof b.Z
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
                            return t === s;
                        }))
                            ? t
                            : u;
                return (0, r.jsxs)('div', {
                    className: w.quickSelect,
                    children: [
                        (0, r.jsx)(d.EFH, {
                            popoutClassName: a()(w.selectFilterPopout, Z.elevationBorderHigh),
                            items: m,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: g,
                            onChange: this.handleFilterUserChange,
                            label: P.NW.string(P.t['hxnY/v']),
                            placeholder: P.NW.string(P.t.pYHobG),
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        }),
                        (0, r.jsx)(d.EFH, {
                            placeholder: P.NW.string(P.t.I288Z2),
                            label: P.NW.string(P.t.rautdn),
                            popoutClassName: a()(w.selectFilterPopout, Z.elevationBorderLow),
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
                    return (0, r.jsx)(d.zxk, {
                        color: d.zxk.Colors.PRIMARY,
                        className: w.loadMore,
                        onClick: this.handleFetchNextPage,
                        children: P.NW.string(P.t['Q/LSXl'])
                    });
            }),
            D(this, 'handleFilterActionChange', (e) => {
                (0, u.ZX)(e, this.props.guildId);
            }),
            D(this, 'handleFilterUserChange', (e) => {
                (0, u.uo)(e, this.props.guildId);
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
                (0, u.OY)(this.props.guildId);
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
let U = c.ZP.connectStores([O.Z, y.Z, j.Z, h.Z, N.Z, _.default], () => {
    let e = y.Z.getGuildId(),
        t = j.Z.getGuild(e),
        n = O.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: O.Z.userIds.map((e) => _.default.getUser(e)).filter(v.lm),
        isInitialLoading: O.Z.isInitialLoading,
        isLoading: O.Z.isLoading,
        isLoadingNextPage: O.Z.isLoadingNextPage,
        showLoadMore: O.Z.groupedFetchCount > 2,
        hasError: O.Z.hasError,
        hasOlderLogs: O.Z.hasOlderLogs,
        logs: null != n && null != t ? I._$(n, t) : [],
        actionFilter: O.Z.actionFilter,
        userIdFilter: O.Z.userIdFilter,
        theme: h.Z.theme,
        hide: N.Z.enabled
    };
})(G);
