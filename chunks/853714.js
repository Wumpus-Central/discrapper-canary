n.d(t, { Z: () => U }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(995295),
    o = n(91192),
    c = n(374470),
    d = n(442837),
    u = n(481060),
    m = n(480137),
    h = n(239091),
    g = n(497321),
    x = n(724757),
    p = n(210887),
    _ = n(387667),
    C = n(598077),
    f = n(592125),
    v = n(430824),
    N = n(246946),
    j = n(594174),
    I = n(823379),
    E = n(51144),
    b = n(987707),
    T = n(999382),
    S = n(909746),
    R = n(501801),
    Z = n(603784),
    y = n(981631),
    A = n(388032),
    L = n(783184),
    D = n(76604),
    k = n(801919);
function O(e, t, n) {
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
class P extends r.PureComponent {
    render() {
        let { onHeaderClick: e, guildId: t, guild: n, ...r } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(Z.Z, {
                  ...r,
                  guildId: t,
                  guild: n,
                  onHeaderClick: this.handleHeaderClick,
                  onUserContextMenu: this.handleUserContextMenu,
                  onChannelContextMenu: this.handleChannelContextMenu,
                  onTargetContextMenu: this.handleTargetContextMenu
              });
    }
    constructor(...e) {
        super(...e),
            O(this, 'handleHeaderClick', () => {
                let { onHeaderClick: e, log: t } = this.props;
                null == e || e(t);
            }),
            O(this, 'handleUserContextMenu', (e) => {
                let { log: t, guildId: r } = this.props,
                    { user: l } = t;
                null != l &&
                    null != r &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: r,
                                user: l
                            });
                    });
            }),
            O(this, 'handleChannelContextMenu', (e) => {
                let { log: t, guildId: r } = this.props,
                    l = v.Z.getGuild(r);
                null != t.options.channel &&
                    'string' != typeof t.options.channel &&
                    null != l &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                        return (n) =>
                            null != t.options.channel
                                ? (0, i.jsx)(e, {
                                      ...n,
                                      channel: t.options.channel
                                  })
                                : null;
                    });
            }),
            O(this, 'handleTargetContextMenu', (e) => {
                let { log: t, guildId: r } = this.props;
                switch (t.targetType) {
                    case y.KFR.CHANNEL:
                    case y.KFR.CHANNEL_OVERWRITE:
                        let l = f.Z.getChannel(t.targetId),
                            s = v.Z.getGuild(r);
                        if (null != l && null != s)
                            return (0, h.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        channel: l
                                    });
                            });
                        return (0, h.jW)(e, async () => {
                            let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    id: t.targetId,
                                    label: A.intl.string(A.t.rCaznZ)
                                });
                        });
                    case y.KFR.USER:
                        let a = j.default.getUser(t.targetId);
                        if (null != a && null != r)
                            return (0, h.jW)(e, async () => {
                                let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        guildId: r,
                                        user: a
                                    });
                            });
                }
                return null;
            });
    }
}
function w(e) {
    let { logs: t, guildId: n, guild: l, expandedId: s, lastExpandedId: a, scroller: c, setExpandedRef: d, setLastExpandedRef: u, onHeaderClick: m, onContentClick: h } = e,
        g = r.useRef(c);
    r.useEffect(() => {
        g.current = c;
    }, [c]);
    let p = (0, x.Z)('audit-log', g);
    return (0, i.jsx)(o.bG, {
        navigator: p,
        children: (0, i.jsx)(o.SJ, {
            children: (e) => {
                let { ref: r, ...o } = e;
                return (0, i.jsx)('div', {
                    ref: r,
                    ...o,
                    className: L.list,
                    children: t.map((e) => {
                        let t = s === e.id,
                            r = a === e.id;
                        return (0, i.jsx)(
                            P,
                            {
                                guildId: n,
                                guild: l,
                                ref: t ? d : r ? u : null,
                                className: L.row,
                                onHeaderClick: m,
                                onContentClick: h,
                                log: e,
                                expanded: t
                            },
                            e.id
                        );
                    })
                });
            }
        })
    });
}
class M extends r.PureComponent {
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
        let i = n.expanded.height - t.lastExpanded.height,
            r = e.getScrollerState().scrollTop - i;
        e.scrollTo({ to: r });
    }
    getRects() {
        let e = {
            lastExpanded: null,
            expanded: null
        };
        if (null != this._lastExpandedRef) {
            let t = a.findDOMNode(this._lastExpandedRef);
            (0, c.k)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = a.findDOMNode(this._expandedRef);
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
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: L.customHeader,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            tag: u.RB0.H1,
                            className: L.formTitle,
                            children: A.intl.string(A.t.SPWLyc)
                        }),
                        this.renderHeaderDropdowns()
                    ]
                }),
                (0, i.jsx)(u.$i$, { className: L.divider })
            ]
        });
    }
    renderSpinner() {
        return (0, i.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            { logs: r, theme: l, hide: s, isInitialLoading: a, isLoading: o, hasError: c, guildId: d, guild: m } = this.props;
        if (s) return (0, i.jsx)(g.Z, {});
        if (o || a) return this.renderSpinner();
        if (0 === r.length) {
            let e = c ? A.intl.string(A.t.tzkaDw) : A.intl.string(A.t.lNuYho),
                t = c ? A.intl.string(A.t.Ww5Tj4) : A.intl.string(A.t['RHhk+P']);
            return (0, i.jsxs)(u.ubH, {
                theme: l,
                className: L.empty,
                children: [
                    (0, i.jsx)(u.oxh, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130
                    }),
                    (0, i.jsx)(u.OZU, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t
                    })
                ]
            });
        }
        return (0, i.jsx)(w, {
            logs: r,
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
        return (0, i.jsx)('div', {
            className: D.customColumn,
            children: (0, i.jsx)('div', {
                className: D.customContainer,
                children: (0, i.jsx)(u.yWw, {
                    className: s()(D.customScroller, L.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, i.jsx)('div', {
                        className: L.content,
                        ref: this._contentRef,
                        children: (0, i.jsxs)(u.JcV, {
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
            O(this, '_clickedInside', !1),
            O(this, '_scrollerRef', null),
            O(this, '_expandedRef', void 0),
            O(this, '_lastExpandedRef', void 0),
            O(this, '_prevRects', this.getRects()),
            O(this, '_contentRef', r.createRef()),
            O(this, 'state', {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: ''
            }),
            O(this, 'renderActionQuickSelectItem', (e, t) => {
                var n;
                let { actionFilter: r } = this.props,
                    l = (0, _.Pw)(e.value),
                    s = (0, _.p5)(e.value),
                    a = e.value === r;
                return (0, i.jsxs)(
                    u.lo1,
                    {
                        value: e.value,
                        selectedColor: u.lo1.Colors.BRAND,
                        children: [
                            (0, i.jsx)(u.lo1.Icon, {
                                children: (0, i.jsx)(R.mp, {
                                    themeOverride: a ? y.BRd.DARK : null,
                                    actionType: l,
                                    targetType: s,
                                    action: e.value
                                })
                            }),
                            (0, i.jsx)(u.lo1.Label, { children: e.label }),
                            (0, i.jsx)(u.lo1.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            O(this, 'renderUserQuickSelectItem', (e, t) => {
                var n;
                if (e.user instanceof C.Z) {
                    let t = e.user;
                    return (0, i.jsxs)(
                        u.lo1,
                        {
                            value: t.id,
                            selectedColor: u.lo1.Colors.BRAND,
                            children: [
                                (0, i.jsx)(u.lo1.Icon, {
                                    children: (0, i.jsx)(u.qEK, {
                                        size: u.EFr.SIZE_32,
                                        src: t.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': t.username,
                                        className: L.avatar
                                    })
                                }),
                                (0, i.jsxs)(u.lo1.Label, {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: E.ZP.getUserTag(t, { mode: 'username' })
                                        }),
                                        !t.isPomelo() &&
                                            (0, i.jsxs)(u.Text, {
                                                variant: 'text-xs/normal',
                                                className: L.discriminator,
                                                children: ['#', t.discriminator]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(u.lo1.Checkmark, {})
                            ]
                        },
                        t.id
                    );
                }
                return (0, i.jsxs)(
                    u.lo1,
                    {
                        value: e.value,
                        selectedColor: u.lo1.Colors.BRAND,
                        children: [
                            (0, i.jsx)(u.lo1.Icon, {
                                children: (0, i.jsx)(u.BFJ, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 30,
                                    height: 30
                                })
                            }),
                            (0, i.jsx)(u.lo1.Label, { children: e.label }),
                            (0, i.jsx)(u.lo1.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            O(this, 'renderHeaderDropdowns', () => {
                var e, t;
                let { actionFilter: n, hide: r, userIdFilter: l, moderators: a } = this.props;
                if (r) return null;
                let o = S.Iv(),
                    c =
                        null !==
                            (e = o.find((e) => {
                                let { value: t } = e;
                                return n === t;
                            })) && void 0 !== e
                            ? e
                            : o[0],
                    d = {
                        label: A.intl.string(A.t.ZRFdsL),
                        valueLabel: A.intl.string(A.t.an9Ry8),
                        value: null
                    },
                    m = [d, ...a].map((e) =>
                        e instanceof C.Z
                            ? {
                                  label: e.username,
                                  value: e.id,
                                  user: e
                              }
                            : e
                    ),
                    h =
                        null !==
                            (t = m.find((e) => {
                                let { value: t } = e;
                                return t === l;
                            })) && void 0 !== t
                            ? t
                            : d;
                return (0, i.jsxs)('div', {
                    className: L.quickSelect,
                    children: [
                        (0, i.jsx)(u.EFH, {
                            popoutClassName: s()(L.selectFilterPopout, k.elevationBorderHigh),
                            items: m,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: h,
                            onChange: this.handleFilterUserChange,
                            label: A.intl.string(A.t['hxnY/v']),
                            placeholder: A.intl.string(A.t.pYHobG),
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        }),
                        (0, i.jsx)(u.EFH, {
                            placeholder: A.intl.string(A.t.I288Z2),
                            label: A.intl.string(A.t.rautdn),
                            popoutClassName: s()(L.selectFilterPopout, k.elevationBorderLow),
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
            O(this, 'renderLoadMore', () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, i.jsx)(u.zxk, {
                        color: u.zxk.Colors.PRIMARY,
                        className: L.loadMore,
                        onClick: this.handleFetchNextPage,
                        children: A.intl.string(A.t['Q/LSXl'])
                    });
            }),
            O(this, 'handleFilterActionChange', (e) => {
                (0, m.ZX)(e, this.props.guildId);
            }),
            O(this, 'handleFilterUserChange', (e) => {
                (0, m.uo)(e, this.props.guildId);
            }),
            O(this, 'handleHeaderClick', (e) => {
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
            O(this, 'handleOutsideClick', () => {
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
            O(this, 'handleContentClick', (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            O(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            O(this, 'handleOnScroll', () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            O(this, 'handleFetchNextPage', () => {
                (0, m.OY)(this.props.guildId);
            }),
            O(this, 'handleActionFilterQueryChange', (e) => {
                this.setState({ actionFilterQuery: e });
            }),
            O(this, 'handleActionFilterQueryClear', () => {
                this.setState({ actionFilterQuery: '' });
            }),
            O(this, 'handleSetExpandedRef', (e) => {
                this._expandedRef = e;
            }),
            O(this, 'handleSetLastExpandedRef', (e) => {
                this._lastExpandedRef = e;
            });
    }
}
let U = d.ZP.connectStores([b.Z, T.Z, v.Z, p.Z, N.Z, j.default], () => {
    let e = T.Z.getGuildId(),
        t = v.Z.getGuild(e),
        n = b.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: b.Z.userIds.map((e) => j.default.getUser(e)).filter(I.lm),
        isInitialLoading: b.Z.isInitialLoading,
        isLoading: b.Z.isLoading,
        isLoadingNextPage: b.Z.isLoadingNextPage,
        showLoadMore: b.Z.groupedFetchCount > 2,
        hasError: b.Z.hasError,
        hasOlderLogs: b.Z.hasOlderLogs,
        logs: null != n && null != t ? S._$(n, t) : [],
        actionFilter: b.Z.actionFilter,
        userIdFilter: b.Z.userIdFilter,
        theme: p.Z.theme,
        hide: N.Z.enabled
    };
})(M);
