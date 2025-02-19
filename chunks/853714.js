n.d(t, { Z: () => B }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(995295),
    o = n(91192),
    c = n(374470),
    d = n(442837),
    u = n(481060),
    m = n(480137),
    p = n(239091),
    g = n(497321),
    h = n(724757),
    f = n(210887),
    b = n(387667),
    x = n(598077),
    j = n(592125),
    N = n(430824),
    v = n(246946),
    _ = n(594174),
    O = n(823379),
    y = n(51144),
    C = n(987707),
    I = n(999382),
    E = n(909746),
    S = n(501801),
    T = n(603784),
    P = n(981631),
    w = n(388032),
    R = n(950706),
    D = n(229083),
    Z = n(459918);
function A(e, t, n) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
class M extends i.PureComponent {
    render() {
        let e = this.props,
            { onHeaderClick: t, guildId: n, guild: i } = e,
            s = L(e, ['onHeaderClick', 'guildId', 'guild']);
        return null == n
            ? null
            : (0, r.jsx)(
                  T.Z,
                  W(k({}, s), {
                      guildId: n,
                      guild: i,
                      onHeaderClick: this.handleHeaderClick,
                      onUserContextMenu: this.handleUserContextMenu,
                      onChannelContextMenu: this.handleChannelContextMenu,
                      onTargetContextMenu: this.handleTargetContextMenu
                  })
              );
    }
    constructor(...e) {
        super(...e),
            A(this, 'handleHeaderClick', () => {
                let { onHeaderClick: e, log: t } = this.props;
                null == e || e(t);
            }),
            A(this, 'handleUserContextMenu', (e) => {
                let { log: t, guildId: i } = this.props,
                    { user: s } = t;
                null != s &&
                    null != i &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                W(k({}, t), {
                                    guildId: i,
                                    user: s
                                })
                            );
                    });
            }),
            A(this, 'handleChannelContextMenu', (e) => {
                let { log: t, guildId: i } = this.props,
                    s = N.Z.getGuild(i);
                null != t.options.channel &&
                    'string' != typeof t.options.channel &&
                    null != s &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                        return (n) => (null != t.options.channel ? (0, r.jsx)(e, W(k({}, n), { channel: t.options.channel })) : null);
                    });
            }),
            A(this, 'handleTargetContextMenu', (e) => {
                let { log: t, guildId: i } = this.props;
                switch (t.targetType) {
                    case P.KFR.CHANNEL:
                    case P.KFR.CHANNEL_OVERWRITE:
                        let s = j.Z.getChannel(t.targetId),
                            a = N.Z.getGuild(i);
                        if (null != s && null != a)
                            return (0, p.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                                return (t) => (0, r.jsx)(e, W(k({}, t), { channel: s }));
                            });
                        return (0, p.jW)(e, async () => {
                            let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    W(k({}, n), {
                                        id: t.targetId,
                                        label: w.NW.string(w.t.rCaznZ)
                                    })
                                );
                        });
                    case P.KFR.USER:
                        let l = _.default.getUser(t.targetId);
                        if (null != l && null != i)
                            return (0, p.jW)(e, async () => {
                                let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        W(k({}, t), {
                                            guildId: i,
                                            user: l
                                        })
                                    );
                            });
                }
                return null;
            });
    }
}
function U(e) {
    let { logs: t, guildId: n, guild: s, expandedId: a, lastExpandedId: l, scroller: c, setExpandedRef: d, setLastExpandedRef: u, onHeaderClick: m, onContentClick: p } = e,
        g = i.useRef(c);
    i.useEffect(() => {
        g.current = c;
    }, [c]);
    let f = (0, h.Z)('audit-log', g);
    return (0, r.jsx)(o.bG, {
        navigator: f,
        children: (0, r.jsx)(o.SJ, {
            children: (e) => {
                var { ref: i } = e,
                    o = L(e, ['ref']);
                return (0, r.jsx)(
                    'div',
                    W(k({ ref: i }, o), {
                        className: R.list,
                        children: t.map((e) => {
                            let t = a === e.id,
                                i = l === e.id;
                            return (0, r.jsx)(
                                M,
                                {
                                    guildId: n,
                                    guild: s,
                                    ref: t ? d : i ? u : null,
                                    className: R.row,
                                    onHeaderClick: m,
                                    onContentClick: p,
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
class G extends i.PureComponent {
    componentDidMount() {
        (0, m.bY)(this.props.guildId), document.addEventListener('click', this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
    componentDidUpdate(e, t) {
        this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, m.OY)(this.props.guildId, !0);
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
            let t = l.findDOMNode(this._lastExpandedRef);
            (0, c.k)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = l.findDOMNode(this._expandedRef);
            (0, c.k)(t) && (e.expanded = t.getBoundingClientRect());
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
                    className: R.customHeader,
                    children: [
                        (0, r.jsx)(u.vwX, {
                            tag: u.RB0.H1,
                            className: R.formTitle,
                            children: w.NW.string(w.t.SPWLyc)
                        }),
                        this.renderHeaderDropdowns()
                    ]
                }),
                (0, r.jsx)(u.$i$, { className: R.divider })
            ]
        });
    }
    renderSpinner() {
        return (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            { logs: i, theme: s, hide: a, isInitialLoading: l, isLoading: o, hasError: c, guildId: d, guild: m } = this.props;
        if (a) return (0, r.jsx)(g.Z, {});
        if (o || l) return this.renderSpinner();
        if (0 === i.length) {
            let e = c ? w.NW.string(w.t.tzkaDw) : w.NW.string(w.t.lNuYho),
                t = c ? w.NW.string(w.t.Ww5Tj4) : w.NW.string(w.t['RHhk+P']);
            return (0, r.jsxs)(u.ubH, {
                theme: s,
                className: R.empty,
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
        return (0, r.jsx)(U, {
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
            className: D.customColumn,
            children: (0, r.jsx)('div', {
                className: D.customContainer,
                children: (0, r.jsx)(u.yWw, {
                    className: a()(D.customScroller, R.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, r.jsx)('div', {
                        className: R.content,
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
            A(this, '_clickedInside', !1),
            A(this, '_scrollerRef', null),
            A(this, '_expandedRef', void 0),
            A(this, '_lastExpandedRef', void 0),
            A(this, '_prevRects', this.getRects()),
            A(this, '_contentRef', i.createRef()),
            A(this, 'state', {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: ''
            }),
            A(this, 'renderActionQuickSelectItem', (e, t) => {
                var n;
                let { actionFilter: i } = this.props,
                    s = (0, b.Pw)(e.value),
                    a = (0, b.p5)(e.value),
                    l = e.value === i;
                return (0, r.jsxs)(
                    u.lo1,
                    {
                        value: e.value,
                        selectedColor: u.lo1.Colors.BRAND,
                        children: [
                            (0, r.jsx)(u.lo1.Icon, {
                                children: (0, r.jsx)(S.mp, {
                                    themeOverride: l ? P.BRd.DARK : null,
                                    actionType: s,
                                    targetType: a,
                                    action: e.value
                                })
                            }),
                            (0, r.jsx)(u.lo1.Label, { children: e.label }),
                            (0, r.jsx)(u.lo1.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            A(this, 'renderUserQuickSelectItem', (e, t) => {
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
                                        className: R.avatar
                                    })
                                }),
                                (0, r.jsxs)(u.lo1.Label, {
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: y.ZP.getUserTag(t, { mode: 'username' })
                                        }),
                                        !t.isPomelo() &&
                                            (0, r.jsxs)(u.Text, {
                                                variant: 'text-xs/normal',
                                                className: R.discriminator,
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
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            A(this, 'renderHeaderDropdowns', () => {
                var e, t;
                let { actionFilter: n, hide: i, userIdFilter: s, moderators: l } = this.props;
                if (i) return null;
                let o = E.Iv(),
                    c =
                        null !==
                            (e = o.find((e) => {
                                let { value: t } = e;
                                return n === t;
                            })) && void 0 !== e
                            ? e
                            : o[0],
                    d = {
                        label: w.NW.string(w.t.ZRFdsL),
                        valueLabel: w.NW.string(w.t.an9Ry8),
                        value: null
                    },
                    m = [d, ...l].map((e) =>
                        e instanceof x.Z
                            ? {
                                  label: e.username,
                                  value: e.id,
                                  user: e
                              }
                            : e
                    ),
                    p =
                        null !==
                            (t = m.find((e) => {
                                let { value: t } = e;
                                return t === s;
                            })) && void 0 !== t
                            ? t
                            : d;
                return (0, r.jsxs)('div', {
                    className: R.quickSelect,
                    children: [
                        (0, r.jsx)(u.EFH, {
                            popoutClassName: a()(R.selectFilterPopout, Z.elevationBorderHigh),
                            items: m,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: p,
                            onChange: this.handleFilterUserChange,
                            label: w.NW.string(w.t['hxnY/v']),
                            placeholder: w.NW.string(w.t.pYHobG),
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        }),
                        (0, r.jsx)(u.EFH, {
                            placeholder: w.NW.string(w.t.I288Z2),
                            label: w.NW.string(w.t.rautdn),
                            popoutClassName: a()(R.selectFilterPopout, Z.elevationBorderLow),
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
            A(this, 'renderLoadMore', () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, r.jsx)(u.zxk, {
                        color: u.zxk.Colors.PRIMARY,
                        className: R.loadMore,
                        onClick: this.handleFetchNextPage,
                        children: w.NW.string(w.t['Q/LSXl'])
                    });
            }),
            A(this, 'handleFilterActionChange', (e) => {
                (0, m.ZX)(e, this.props.guildId);
            }),
            A(this, 'handleFilterUserChange', (e) => {
                (0, m.uo)(e, this.props.guildId);
            }),
            A(this, 'handleHeaderClick', (e) => {
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
            A(this, 'handleOutsideClick', () => {
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
            A(this, 'handleContentClick', (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            A(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            A(this, 'handleOnScroll', () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            A(this, 'handleFetchNextPage', () => {
                (0, m.OY)(this.props.guildId);
            }),
            A(this, 'handleActionFilterQueryChange', (e) => {
                this.setState({ actionFilterQuery: e });
            }),
            A(this, 'handleActionFilterQueryClear', () => {
                this.setState({ actionFilterQuery: '' });
            }),
            A(this, 'handleSetExpandedRef', (e) => {
                this._expandedRef = e;
            }),
            A(this, 'handleSetLastExpandedRef', (e) => {
                this._lastExpandedRef = e;
            });
    }
}
let B = d.ZP.connectStores([C.Z, I.Z, N.Z, f.Z, v.Z, _.default], () => {
    let e = I.Z.getGuildId(),
        t = N.Z.getGuild(e),
        n = C.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: C.Z.userIds.map((e) => _.default.getUser(e)).filter(O.lm),
        isInitialLoading: C.Z.isInitialLoading,
        isLoading: C.Z.isLoading,
        isLoadingNextPage: C.Z.isLoadingNextPage,
        showLoadMore: C.Z.groupedFetchCount > 2,
        hasError: C.Z.hasError,
        hasOlderLogs: C.Z.hasOlderLogs,
        logs: null != n && null != t ? E._$(n, t) : [],
        actionFilter: C.Z.actionFilter,
        userIdFilter: C.Z.userIdFilter,
        theme: f.Z.theme,
        hide: v.Z.enabled
    };
})(G);
