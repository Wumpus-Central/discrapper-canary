n.d(t, { Z: () => K }), n(411104), n(47120), n(733860);
var i,
    r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    _ = n(134616),
    E = n(714338),
    h = n(212819),
    I = n(815372),
    m = n(14429),
    p = n(576855),
    C = n(313201),
    T = n(991346),
    N = n(592125),
    g = n(888369),
    S = n(430824),
    R = n(306680),
    f = n(944486),
    A = n(938475),
    O = n(483360),
    L = n(585483),
    b = n(63063),
    P = n(51596),
    D = n(823385),
    M = n(415795),
    x = n(670512),
    y = n(558631),
    v = n(981631),
    k = n(388032),
    U = n(902726);
function Z(e, t, n) {
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
let V = () =>
    (0, r.jsxs)('div', {
        className: U.emptyState,
        children: [
            (0, r.jsx)('div', {
                className: U.emptyStateNote,
                children: k.intl.string(k.t.bpbATE)
            }),
            (0, r.jsx)('div', {
                className: U.emptyStateCTA,
                children: (0, r.jsx)(d.eee, {
                    href: b.Z.getArticleURL(v.BhN.QUICK_SWITCHER_TUTORIAL),
                    children: k.intl.string(k.t['4iPfEB'])
                })
            })
        ]
    });
class j extends (i = l.Component) {
    render() {
        let e = S.Z.getGuild(this.props.channel.guild_id);
        return (0, r.jsx)(M.$W, {
            ...this.props,
            children: (0, r.jsx)('div', {
                className: U.miscContainer,
                children: null != e ? e.name : null
            })
        });
    }
}
Z(j, 'defaultProps', { unread: !1 });
let w = c.ZP.connectStores([R.ZP, N.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: R.ZP.hasUnread(t.id),
            mentions: R.ZP.getMentionCount(t.id),
            isMentionLowImportance: R.ZP.getIsMentionLowImportance(t.id),
            category: N.Z.getChannel(t.parent_id)
        };
    })(j),
    F = c.ZP.connectStores([A.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: A.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(j),
    G = c.ZP.connectStores([g.default], (e) => {
        let { guild: t } = e;
        return { unread: g.default.hasUnread(t.id) };
    })(M.ic),
    B = c.ZP.connectStores([R.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: R.ZP.getMentionCount(t.id) };
    })(M.PZ),
    H = c.ZP.connectStores([N.Z, R.ZP], (e) => {
        let { user: t } = e,
            n = N.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? R.ZP.getMentionCount(n) : 0 };
    })(M.n5);
function W(e, t, n) {
    return (0, r.jsx)(
        d.ua7,
        {
            text: n,
            children: (e) =>
                (0, r.jsx)('span', {
                    ...e,
                    className: U.autocompleteQuerySymbol,
                    children: t
                })
        },
        e
    );
}
class Y extends l.PureComponent {
    componentDidMount() {
        E.Z.disable(), E.Z.enableTemp(_.u);
    }
    componentWillUnmount() {
        E.Z.disableTemp(), E.Z.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: r } = this.props,
            { current: l } = this.scrollerRef;
        null != l &&
            (i !== t.query
                ? l.scrollTo({ to: 0 })
                : n &&
                  r >= 0 &&
                  l.scrollToIndex({
                      section: 0,
                      row: r,
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
            i = t.length > 0 && '' !== n;
        return (0, r.jsx)(d.tEY, {
            children: (0, r.jsx)('input', {
                className: U.input,
                'aria-label': k.intl.string(k.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': i,
                'aria-activedescendant': i ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: k.intl.string(k.t.Vtvewc),
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
            ? (0, r.jsx)(V, {})
            : 0 === t.length
              ? null
              : (0, r.jsx)(d._2F, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': k.intl.string(k.t.Wef5Dg),
                    ref: this.scrollerRef,
                    sectionHeight: 0,
                    rowHeight: 34,
                    paddingBottom: 10,
                    sections: [t.length],
                    className: U.scroller,
                    renderRow: this.renderRow,
                    renderSection: this.renderSection
                });
    }
    focusNode(e) {
        L.S.dispatch(v.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, r.jsx)(p.Z, {
            className: a()(U.protip, { [U.hasContent]: this.state.query.length > 0 }),
            type: p.Z.Types.INLINE,
            children: k.intl.format(k.t.wukqXV, {
                userSymbolHook: (e, t) => W(t, h.xQ.USER, k.intl.string(k.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => W(t, h.xQ.TEXT_CHANNEL, k.intl.string(k.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => W(t, h.xQ.VOICE_CHANNEL, k.intl.string(k.t['jz+hJi'])),
                guildSymbolHook: (e, t) => W(t, h.xQ.GUILD, k.intl.string(k.t.WuwCWl)),
                helpdeskArticle: b.Z.getArticleURL(v.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, r.jsx)(x.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, r.jsx)(d.Y0X, {
            'aria-label': k.intl.string(k.t.ZvKwYW),
            size: d.CgR.DYNAMIC,
            transitionState: this.props.transitionState,
            className: a()(U.container, o.tq && U.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, r.jsxs)('div', {
                className: a()(U.quickswitcher, o.tq && U.mobileQuickswitcher),
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'scrollerRef', l.createRef()),
            Z(this, 'inputRef', l.createRef()),
            Z(this, '_listId', (0, C.hQ)()),
            Z(this, 'state', {
                query: this.props.query,
                mouseFocusDisabled: !0
            }),
            Z(this, 'handleInputChange', () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            Z(this, 'handleMouseMove', () => {
                let { mouseFocusDisabled: e } = this.state;
                !1 !== e && this.setState({ mouseFocusDisabled: !1 });
            }),
            Z(this, 'focusResult', (e) => {
                !this.state.mouseFocusDisabled && (0, P.tF)(this.props.results.indexOf(e));
            }),
            Z(this, 'selectResult', (e) => {
                (0, P.Se)(e, this.props.queryMode === h.h8.TEXT_CHANNEL);
            }),
            Z(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case h.h8.GUILD:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('63104'), n.e('6850'), n.e('16114'), n.e('58227'), n.e('54408'), n.e('11684'), n.e('21881'), n.e('33213'), n.e('9737')]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    guild: t.record,
                                    onSelect: P.Cp,
                                    hideSettings: !0
                                });
                        });
                    case h.h8.TEXT_CHANNEL:
                    case h.h8.VOICE_CHANNEL:
                        let i = t.record,
                            l = S.Z.getGuild(i.getGuildId());
                        if (null == l) return;
                        switch (i.type) {
                            case v.d4z.GUILD_TEXT:
                            case v.d4z.GUILD_ANNOUNCEMENT:
                            case v.d4z.GUILD_FORUM:
                            case v.d4z.GUILD_MEDIA:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, r.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: l,
                                            onSelect: P.Cp
                                        });
                                });
                            case v.d4z.GUILD_VOICE:
                            case v.d4z.GUILD_STAGE_VOICE:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, r.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: l,
                                            onSelect: P.Cp
                                        });
                                });
                            case v.d4z.ANNOUNCEMENT_THREAD:
                            case v.d4z.PUBLIC_THREAD:
                            case v.d4z.PRIVATE_THREAD:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await n.e('78650').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, r.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            onSelect: P.Cp
                                        });
                                });
                            case v.d4z.GUILD_STORE:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, r.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: l,
                                            onSelect: P.Cp
                                        });
                                });
                            case v.d4z.GUILD_DIRECTORY:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                                    return (t) =>
                                        (0, r.jsx)(e, {
                                            ...t,
                                            channel: i
                                        });
                                });
                        }
                        break;
                    case h.h8.GROUP_DM:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('25421'), n.e('23352')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    channel: t.record,
                                    selected: f.Z.getChannelId() === t.record.id,
                                    onSelect: P.Cp
                                });
                        });
                    case h.h8.USER:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('4616')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, r.jsx)(e, {
                                    ...n,
                                    user: t.record,
                                    onSelect: P.Cp
                                });
                        });
                }
            }),
            Z(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: i } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let r = e.key.toLowerCase(),
                    { selectedIndex: l } = this.props;
                switch (r) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, P.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, P.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === l) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = i[l];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        l = (0, h.gJ)(h.a8.UP, l, i);
                        break;
                    case 'arrowdown':
                        l = (0, h.gJ)(h.a8.DOWN, l, i);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        l = (0, h.gJ)(h.a8.DOWN, l, i);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        l = (0, h.gJ)(h.a8.UP, l, i);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, P.tF)(l);
            }),
            Z(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: i } = this.props,
                    { showScores: l } = m.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case h.h8.HEADER:
                        return (0, r.jsx)(M.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
                    case h.h8.TEXT_CHANNEL:
                        return (0, r.jsx)(
                            w,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: l ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.VOICE_CHANNEL:
                        return (0, r.jsx)(
                            F,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: l ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.GUILD:
                        return (0, r.jsx)(
                            G,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: n.record,
                                score: l ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.USER:
                        return (0, r.jsx)(
                            H,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                user: n.record,
                                comparator: n.comparator,
                                score: l ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.GROUP_DM:
                        return (0, r.jsx)(
                            B,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: l ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.APPLICATION:
                        return (0, r.jsx)(
                            M.Mx,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                application: n.record
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.LINK:
                        return (0, r.jsx)(
                            M.rU,
                            {
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                link: n.record,
                                score: l ? n.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.IN_APP_NAVIGATION:
                        return (0, r.jsx)(
                            M.s8,
                            {
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                navigationRecord: n.record,
                                score: l ? n.score : void 0,
                                id: this.getRowId(t),
                                children:
                                    n.record.type === I.Ky.SETTINGS &&
                                    (0, r.jsx)('div', {
                                        className: U.miscContainer,
                                        children: k.intl.string(k.t['3D5yo6'])
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
function K(e) {
    let t = (0, c.cj)([D.Z], () => D.Z.getProps()),
        n = (0, T.Pt)(),
        i = y.Z.useExperiment({ location: 'QuickSwitcher' }).enabled,
        s = l.useMemo(
            () =>
                i
                    ? Object.values(n)
                          .filter((e) => null != e.url)
                          .filter((e) => null == e.predicate || e.predicate())
                    : [],
            [n, i]
        );
    return (
        l.useLayoutEffect(() => {
            if (!i) return;
            let e = s
                .map((e) => {
                    var t;
                    return {
                        title: 'string' == typeof e.label ? e.label : '',
                        searchableTitles: null !== (t = e.searchableTitles) && void 0 !== t ? t : [],
                        path: e.url
                    };
                })
                .filter((e) => '' !== e.title && null != e.path);
            e.unshift({
                title: k.intl.string(k.t['3D5yo6']),
                searchableTitles: [k.intl.string(k.t['3D5yo6'])],
                path: v.Z5c.SETTINGS('account')
            }),
                (0, O.gF)(e);
        }, [s, i]),
        (0, r.jsx)(Y, {
            ...t,
            ...e
        })
    );
}
