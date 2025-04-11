n.d(t, { Z: () => Q }), n(415506), n(388685), n(35282), n(290780);
var r,
    i = n(200651),
    o = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    p = n(134616),
    h = n(714338),
    _ = n(212819),
    f = n(815372),
    m = n(14429),
    b = n(576855),
    g = n(313201),
    E = n(991346),
    O = n(592125),
    y = n(888369),
    C = n(430824),
    S = n(306680),
    N = n(944486),
    v = n(938475),
    T = n(483360),
    I = n(585483),
    x = n(63063),
    P = n(51596),
    A = n(823385),
    R = n(415795),
    w = n(670512),
    j = n(558631),
    k = n(981631),
    L = n(388032),
    M = n(298746);
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
function Z(e) {
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
function U(e, t) {
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
let V = { bottom: 10 },
    W = () =>
        (0, i.jsxs)('div', {
            className: M.emptyState,
            children: [
                (0, i.jsx)('div', {
                    className: M.emptyStateNote,
                    children: L.NW.string(L.t.bpbATE)
                }),
                (0, i.jsx)('div', {
                    className: M.emptyStateCTA,
                    children: (0, i.jsx)(u.eee, {
                        href: x.Z.getArticleURL(k.BhN.QUICK_SWITCHER_TUTORIAL),
                        children: L.NW.string(L.t['4iPfEB'])
                    })
                })
            ]
        });
class G extends (r = o.Component) {
    render() {
        let e = C.Z.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(
            R.$W,
            U(Z({}, this.props), {
                children: (0, i.jsx)('div', {
                    className: M.miscContainer,
                    children: null != e ? e.name : null
                })
            })
        );
    }
}
D(G, 'defaultProps', { unread: !1 });
let H = c.ZP.connectStores([S.ZP, O.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: S.ZP.hasUnread(t.id),
            mentions: S.ZP.getMentionCount(t.id),
            isMentionLowImportance: S.ZP.getIsMentionLowImportance(t.id),
            category: O.Z.getChannel(t.parent_id)
        };
    })(G),
    B = c.ZP.connectStores([v.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: v.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(G),
    F = c.ZP.connectStores([y.default], (e) => {
        let { guild: t } = e;
        return { unread: y.default.hasUnread(t.id) };
    })(R.ic),
    z = c.ZP.connectStores([S.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: S.ZP.getMentionCount(t.id) };
    })(R.PZ),
    Y = c.ZP.connectStores([O.Z, S.ZP], (e) => {
        let { user: t } = e,
            n = O.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? S.ZP.getMentionCount(n) : 0 };
    })(R.n5);
function K(e, t, n) {
    return (0, i.jsx)(
        u.ua7,
        {
            text: n,
            children: (e) =>
                (0, i.jsx)(
                    'span',
                    U(Z({}, e), {
                        className: M.autocompleteQuerySymbol,
                        children: t
                    })
                )
        },
        e
    );
}
class X extends o.PureComponent {
    componentDidMount() {
        h.Z.disable(), h.Z.enableTemp(p.u);
    }
    componentWillUnmount() {
        h.Z.disableTemp(), h.Z.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: r } = this.state,
            { selectedIndex: i } = this.props,
            { current: o } = this.scrollerRef;
        null != o &&
            (r !== t.query
                ? o.scrollTo({ to: 0 })
                : n &&
                  i >= 0 &&
                  o.scrollToIndex({
                      section: 0,
                      row: i,
                      padding: 10
                  }));
    }
    close() {
        (0, P.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, P.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            r = t.length > 0 && '' !== n;
        return (0, i.jsx)(u.tEY, {
            children: (0, i.jsx)('input', {
                className: M.input,
                'aria-label': L.NW.string(L.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': r,
                'aria-activedescendant': r ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: L.NW.string(L.t.Vtvewc),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                value: this.state.query,
                spellCheck: !1,
                autoFocus: !0
            })
        });
    }
    renderSection() {
        return null;
    }
    renderResults() {
        let { query: e } = this.state,
            { results: t } = this.props;
        return 0 === t.length && e.length > 0
            ? (0, i.jsx)(W, {})
            : 0 === t.length
              ? null
              : (0, i.jsx)(u._2F, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': L.NW.string(L.t.Wef5Dg),
                    ref: this.scrollerRef,
                    sectionHeight: 0,
                    rowHeight: 34,
                    paddingBottom: V.bottom,
                    sections: [t.length],
                    className: M.scroller,
                    renderRow: this.renderRow,
                    renderSection: this.renderSection
                });
    }
    focusNode(e) {
        I.S.dispatch(k.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, i.jsx)(b.Z, {
            className: s()(M.protip, { [M.hasContent]: this.state.query.length > 0 }),
            type: b.Z.Types.INLINE,
            children: L.NW.format(L.t.wukqXV, {
                userSymbolHook: (e, t) => K(t, _.xQ.USER, L.NW.string(L.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => K(t, _.xQ.TEXT_CHANNEL, L.NW.string(L.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => K(t, _.xQ.VOICE_CHANNEL, L.NW.string(L.t['jz+hJi'])),
                guildSymbolHook: (e, t) => K(t, _.xQ.GUILD, L.NW.string(L.t.WuwCWl)),
                helpdeskArticle: x.Z.getArticleURL(k.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(w.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(u.Y0X, {
            'aria-label': L.NW.string(L.t.ZvKwYW),
            size: u.CgR.DYNAMIC,
            transitionState: this.props.transitionState,
            className: s()(M.container, a.tq && M.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, i.jsxs)('div', {
                className: s()(M.quickswitcher, a.tq && M.mobileQuickswitcher),
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            D(this, 'scrollerRef', o.createRef()),
            D(this, 'inputRef', o.createRef()),
            D(this, '_listId', (0, g.hQ)()),
            D(this, 'state', {
                query: this.props.query,
                mouseFocusDisabled: !0
            }),
            D(this, 'handleInputChange', () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            D(this, 'handleMouseMove', () => {
                let { mouseFocusDisabled: e } = this.state;
                !1 !== e && this.setState({ mouseFocusDisabled: !1 });
            }),
            D(this, 'focusResult', (e) => {
                this.state.mouseFocusDisabled || (0, P.tF)(this.props.results.indexOf(e));
            }),
            D(this, 'selectResult', (e) => {
                (0, P.Se)(e, this.props.queryMode === _.h8.TEXT_CHANNEL);
            }),
            D(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case _.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('49286'), n.e('32652'), n.e('60696'), n.e('58227'), n.e('54408'), n.e('33472'), n.e('56534'), n.e('69760'), n.e('33213'), n.e('16890')]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(Z({}, n), {
                                        guild: t.record,
                                        onSelect: P.Cp,
                                        hideSettings: !0
                                    })
                                );
                        });
                    case _.h8.TEXT_CHANNEL:
                    case _.h8.VOICE_CHANNEL:
                        let r = t.record,
                            o = C.Z.getGuild(r.getGuildId());
                        if (null == o) return;
                        switch (r.type) {
                            case k.d4z.GUILD_TEXT:
                            case k.d4z.GUILD_ANNOUNCEMENT:
                            case k.d4z.GUILD_FORUM:
                            case k.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(Z({}, t), {
                                                channel: r,
                                                guild: o,
                                                onSelect: P.Cp
                                            })
                                        );
                                });
                            case k.d4z.GUILD_VOICE:
                            case k.d4z.GUILD_STAGE_VOICE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(Z({}, t), {
                                                channel: r,
                                                guild: o,
                                                onSelect: P.Cp
                                            })
                                        );
                                });
                            case k.d4z.ANNOUNCEMENT_THREAD:
                            case k.d4z.PUBLIC_THREAD:
                            case k.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(Z({}, t), {
                                                channel: r,
                                                onSelect: P.Cp
                                            })
                                        );
                                });
                            case k.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(Z({}, t), {
                                                channel: r,
                                                guild: o,
                                                onSelect: P.Cp
                                            })
                                        );
                                });
                            case k.d4z.GUILD_DIRECTORY:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                                    return (t) => (0, i.jsx)(e, U(Z({}, t), { channel: r }));
                                });
                        }
                        break;
                    case _.h8.GROUP_DM:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('2016')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(Z({}, n), {
                                        channel: t.record,
                                        selected: N.Z.getChannelId() === t.record.id,
                                        onSelect: P.Cp
                                    })
                                );
                        });
                    case _.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(Z({}, n), {
                                        user: t.record,
                                        onSelect: P.Cp
                                    })
                                );
                        });
                }
            }),
            D(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: r } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let i = e.key.toLowerCase(),
                    { selectedIndex: o } = this.props;
                switch (i) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, P.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, P.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === o) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = r[o];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        o = (0, _.gJ)(_.a8.UP, o, r);
                        break;
                    case 'arrowdown':
                        o = (0, _.gJ)(_.a8.DOWN, o, r);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        o = (0, _.gJ)(_.a8.DOWN, o, r);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        o = (0, _.gJ)(_.a8.UP, o, r);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, P.tF)(o);
            }),
            D(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: r } = this.props,
                    { showScores: o } = m.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case _.h8.HEADER:
                        return (0, i.jsx)(R.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
                    case _.h8.TEXT_CHANNEL:
                        return (0, i.jsx)(
                            H,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: o ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case _.h8.VOICE_CHANNEL:
                        return (0, i.jsx)(
                            B,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: o ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case _.h8.GUILD:
                        return (0, i.jsx)(
                            F,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: n.record,
                                score: o ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case _.h8.USER:
                        return (0, i.jsx)(
                            Y,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                user: n.record,
                                comparator: n.comparator,
                                score: o ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case _.h8.GROUP_DM:
                        return (0, i.jsx)(
                            z,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: o ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case _.h8.APPLICATION:
                        return (0, i.jsx)(
                            R.Mx,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                application: n.record
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case _.h8.LINK:
                        return (0, i.jsx)(
                            R.rU,
                            {
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                link: n.record,
                                score: o ? n.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case _.h8.IN_APP_NAVIGATION:
                        return (0, i.jsx)(
                            R.s8,
                            {
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                navigationRecord: n.record,
                                score: o ? n.score : void 0,
                                id: this.getRowId(t),
                                children:
                                    n.record.type === f.Ky.SETTINGS &&
                                    (0, i.jsx)('div', {
                                        className: M.miscContainer,
                                        children: L.NW.string(L.t['3D5yo6'])
                                    })
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    default:
                        return null;
                }
            });
    }
}
function Q(e) {
    let t = (0, c.cj)([A.Z], () => A.Z.getProps()),
        n = (0, E.Pt)(),
        r = j.Z.useExperiment({ location: 'QuickSwitcher' }).enabled,
        l = o.useMemo(
            () =>
                r
                    ? Object.values(n)
                          .filter((e) => null != e.url)
                          .filter((e) => null == e.predicate || e.predicate())
                    : [],
            [n, r]
        );
    return (
        o.useLayoutEffect(() => {
            if (!r) return;
            let e = l
                .map((e) => {
                    var t;
                    return {
                        title: 'string' == typeof e.label ? e.label : '',
                        searchableTitles: null != (t = e.searchableTitles) ? t : [],
                        path: e.url
                    };
                })
                .filter((e) => '' !== e.title && null != e.path);
            e.unshift({
                title: L.NW.string(L.t['3D5yo6']),
                searchableTitles: [L.NW.string(L.t['3D5yo6'])],
                path: k.Z5c.SETTINGS('account')
            }),
                (0, T.gF)(e);
        }, [l, r]),
        (0, i.jsx)(X, Z({}, t, e))
    );
}
