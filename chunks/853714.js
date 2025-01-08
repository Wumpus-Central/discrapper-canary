n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(995295),
    o = n(91192),
    c = n(513431),
    d = n(442837),
    u = n(481060),
    m = n(480137),
    h = n(239091),
    g = n(497321),
    x = n(724757),
    p = n(210887),
    f = n(387667),
    C = n(598077),
    v = n(592125),
    _ = n(430824),
    I = n(246946),
    N = n(594174),
    T = n(823379),
    j = n(51144),
    b = n(987707),
    S = n(999382),
    E = n(909746),
    R = n(501801),
    y = n(603784),
    A = n(981631),
    Z = n(388032),
    L = n(600216),
    D = n(670189),
    O = n(616926);
function k(e, t, n) {
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
            : (0, i.jsx)(y.Z, {
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
            k(this, 'handleHeaderClick', () => {
                let { onHeaderClick: e, log: t } = this.props;
                null == e || e(t);
            }),
            k(this, 'handleUserContextMenu', (e) => {
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
            k(this, 'handleChannelContextMenu', (e) => {
                let { log: t, guildId: r } = this.props,
                    l = _.Z.getGuild(r);
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
            k(this, 'handleTargetContextMenu', (e) => {
                let { log: t, guildId: r } = this.props;
                switch (t.targetType) {
                    case A.KFR.CHANNEL:
                    case A.KFR.CHANNEL_OVERWRITE:
                        let l = v.Z.getChannel(t.targetId),
                            a = _.Z.getGuild(r);
                        if (null != l && null != a)
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
                                    label: Z.intl.string(Z.t.rCaznZ)
                                });
                        });
                    case A.KFR.USER:
                        let s = N.default.getUser(t.targetId);
                        if (null != s && null != r)
                            return (0, h.jW)(e, async () => {
                                let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        guildId: r,
                                        user: s
                                    });
                            });
                }
                return null;
            });
    }
}
function M(e) {
    let { logs: t, guildId: n, guild: l, expandedId: a, lastExpandedId: s, scroller: c, setExpandedRef: d, setLastExpandedRef: u, onHeaderClick: m, onContentClick: h } = e,
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
                    children: t.map((e) => {
                        let t = a === e.id,
                            r = s === e.id;
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
class w extends r.PureComponent {
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
            let t = s.findDOMNode(this._lastExpandedRef);
            (0, c.k)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = s.findDOMNode(this._expandedRef);
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
                        (0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H1,
                            className: L.formTitle,
                            children: Z.intl.string(Z.t.SPWLyc)
                        }),
                        this.renderHeaderDropdowns()
                    ]
                }),
                (0, i.jsx)(u.FormDivider, { className: L.divider })
            ]
        });
    }
    renderSpinner() {
        return (0, i.jsx)(u.Spinner, { type: u.Spinner.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            { logs: r, theme: l, hide: a, isInitialLoading: s, isLoading: o, hasError: c, guildId: d, guild: m } = this.props;
        if (a) return (0, i.jsx)(g.Z, {});
        if (o || s) return this.renderSpinner();
        if (0 === r.length) {
            let e = c ? Z.intl.string(Z.t.tzkaDw) : Z.intl.string(Z.t.lNuYho),
                t = c ? Z.intl.string(Z.t.Ww5Tj4) : Z.intl.string(Z.t['RHhk+P']);
            return (0, i.jsxs)(u.EmptyState, {
                theme: l,
                className: L.empty,
                children: [
                    (0, i.jsx)(u.EmptyStateImage, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130
                    }),
                    (0, i.jsx)(u.EmptyStateText, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t
                    })
                ]
            });
        }
        return (0, i.jsx)(M, {
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
                children: (0, i.jsx)(u.AdvancedScrollerAuto, {
                    className: a()(D.customScroller, L.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, i.jsx)('div', {
                        className: L.content,
                        ref: this._contentRef,
                        children: (0, i.jsxs)(u.FocusRingScope, {
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
            k(this, '_clickedInside', !1),
            k(this, '_scrollerRef', null),
            k(this, '_expandedRef', void 0),
            k(this, '_lastExpandedRef', void 0),
            k(this, '_prevRects', this.getRects()),
            k(this, '_contentRef', r.createRef()),
            k(this, 'state', {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: ''
            }),
            k(this, 'renderActionQuickSelectItem', (e, t) => {
                var n;
                let { actionFilter: r } = this.props,
                    l = (0, f.Pw)(e.value),
                    a = (0, f.p5)(e.value),
                    s = e.value === r;
                return (0, i.jsxs)(
                    u.ComboboxItem,
                    {
                        value: e.value,
                        selectedColor: u.ComboboxItem.Colors.BRAND,
                        children: [
                            (0, i.jsx)(u.ComboboxItem.Icon, {
                                children: (0, i.jsx)(R.mp, {
                                    themeOverride: s ? A.BRd.DARK : null,
                                    actionType: l,
                                    targetType: a,
                                    action: e.value
                                })
                            }),
                            (0, i.jsx)(u.ComboboxItem.Label, { children: e.label }),
                            (0, i.jsx)(u.ComboboxItem.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            k(this, 'renderUserQuickSelectItem', (e, t) => {
                var n;
                if (e.user instanceof C.Z) {
                    let t = e.user;
                    return (0, i.jsxs)(
                        u.ComboboxItem,
                        {
                            value: t.id,
                            selectedColor: u.ComboboxItem.Colors.BRAND,
                            children: [
                                (0, i.jsx)(u.ComboboxItem.Icon, {
                                    children: (0, i.jsx)(u.Avatar, {
                                        size: u.AvatarSizes.SIZE_32,
                                        src: t.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': t.username,
                                        className: L.avatar
                                    })
                                }),
                                (0, i.jsxs)(u.ComboboxItem.Label, {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: j.ZP.getUserTag(t, { mode: 'username' })
                                        }),
                                        !t.isPomelo() &&
                                            (0, i.jsxs)(u.Text, {
                                                variant: 'text-xs/normal',
                                                className: L.discriminator,
                                                children: ['#', t.discriminator]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(u.ComboboxItem.Checkmark, {})
                            ]
                        },
                        t.id
                    );
                }
                return (0, i.jsxs)(
                    u.ComboboxItem,
                    {
                        value: e.value,
                        selectedColor: u.ComboboxItem.Colors.BRAND,
                        children: [
                            (0, i.jsx)(u.ComboboxItem.Icon, {
                                children: (0, i.jsx)(u.GroupIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 30,
                                    height: 30
                                })
                            }),
                            (0, i.jsx)(u.ComboboxItem.Label, { children: e.label }),
                            (0, i.jsx)(u.ComboboxItem.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            k(this, 'renderHeaderDropdowns', () => {
                var e, t;
                let { actionFilter: n, hide: r, userIdFilter: l, moderators: s } = this.props;
                if (r) return null;
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
                        label: Z.intl.string(Z.t.ZRFdsL),
                        valueLabel: Z.intl.string(Z.t.an9Ry8),
                        value: null
                    },
                    m = [d, ...s].map((e) => {
                        var t;
                        if (!(e instanceof C.Z)) return e;
                        return {
                            label: (t = e).username,
                            value: t.id,
                            user: t
                        };
                    }),
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
                        (0, i.jsx)(u.SearchableQuickSelect, {
                            popoutClassName: a()(L.selectFilterPopout, O.elevationBorderHigh),
                            items: m,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: h,
                            onChange: this.handleFilterUserChange,
                            label: Z.intl.string(Z.t['hxnY/v']),
                            placeholder: Z.intl.string(Z.t.pYHobG),
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        }),
                        (0, i.jsx)(u.SearchableQuickSelect, {
                            placeholder: Z.intl.string(Z.t.I288Z2),
                            label: Z.intl.string(Z.t.rautdn),
                            popoutClassName: a()(L.selectFilterPopout, O.elevationBorderLow),
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
            k(this, 'renderLoadMore', () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, i.jsx)(u.Button, {
                        color: u.Button.Colors.PRIMARY,
                        className: L.loadMore,
                        onClick: this.handleFetchNextPage,
                        children: Z.intl.string(Z.t['Q/LSXl'])
                    });
            }),
            k(this, 'handleFilterActionChange', (e) => {
                (0, m.ZX)(e, this.props.guildId);
            }),
            k(this, 'handleFilterUserChange', (e) => {
                (0, m.uo)(e, this.props.guildId);
            }),
            k(this, 'handleHeaderClick', (e) => {
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
            k(this, 'handleOutsideClick', () => {
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
            k(this, 'handleContentClick', (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            k(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            k(this, 'handleOnScroll', () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            k(this, 'handleFetchNextPage', () => {
                (0, m.OY)(this.props.guildId);
            }),
            k(this, 'handleActionFilterQueryChange', (e) => {
                this.setState({ actionFilterQuery: e });
            }),
            k(this, 'handleActionFilterQueryClear', () => {
                this.setState({ actionFilterQuery: '' });
            }),
            k(this, 'handleSetExpandedRef', (e) => {
                this._expandedRef = e;
            }),
            k(this, 'handleSetLastExpandedRef', (e) => {
                this._lastExpandedRef = e;
            });
    }
}
t.Z = d.ZP.connectStores([b.Z, S.Z, _.Z, p.Z, I.Z, N.default], () => {
    let e = S.Z.getGuildId(),
        t = _.Z.getGuild(e),
        n = b.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: b.Z.userIds.map((e) => N.default.getUser(e)).filter(T.lm),
        isInitialLoading: b.Z.isInitialLoading,
        isLoading: b.Z.isLoading,
        isLoadingNextPage: b.Z.isLoadingNextPage,
        showLoadMore: b.Z.groupedFetchCount > 2,
        hasError: b.Z.hasError,
        hasOlderLogs: b.Z.hasOlderLogs,
        logs: null != n && null != t ? E._$(n, t) : [],
        actionFilter: b.Z.actionFilter,
        userIdFilter: b.Z.userIdFilter,
        theme: p.Z.theme,
        hide: I.Z.enabled
    };
})(w);
