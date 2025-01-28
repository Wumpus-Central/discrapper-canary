s.d(t, {
    Z: function () {
        return W;
    }
}),
    s(411104),
    s(47120);
var n,
    i = s(200651),
    r = s(192379),
    o = s(120356),
    l = s.n(o),
    a = s(873546),
    c = s(442837),
    d = s(481060),
    u = s(239091),
    h = s(134616),
    E = s(714338),
    p = s(212819),
    _ = s(14429),
    m = s(576855),
    g = s(313201),
    C = s(592125),
    N = s(888369),
    f = s(430824),
    b = s(306680),
    I = s(944486),
    R = s(938475),
    S = s(585483),
    T = s(63063),
    x = s(51596),
    y = s(823385),
    M = s(415795),
    A = s(670512),
    O = s(981631),
    P = s(388032),
    L = s(449532);
function v(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
let D = 10,
    U = () =>
        (0, i.jsxs)('div', {
            className: L.emptyState,
            children: [
                (0, i.jsx)('div', {
                    className: L.emptyStateNote,
                    children: P.intl.string(P.t.bpbATE)
                }),
                (0, i.jsx)('div', {
                    className: L.emptyStateCTA,
                    children: (0, i.jsx)(d.Anchor, {
                        href: T.Z.getArticleURL(O.BhN.QUICK_SWITCHER_TUTORIAL),
                        children: P.intl.string(P.t['4iPfEB'])
                    })
                })
            ]
        });
class Z extends (n = r.Component) {
    render() {
        let e = f.Z.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(M.$W, {
            ...this.props,
            children: (0, i.jsx)('div', {
                className: L.miscContainer,
                children: null != e ? e.name : null
            })
        });
    }
}
v(Z, 'defaultProps', { unread: !1 });
let w = c.ZP.connectStores([b.ZP, C.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: b.ZP.hasUnread(t.id),
            mentions: b.ZP.getMentionCount(t.id),
            isMentionLowImportance: b.ZP.getIsMentionLowImportance(t.id),
            category: C.Z.getChannel(t.parent_id)
        };
    })(Z),
    k = c.ZP.connectStores([R.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: R.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(Z),
    j = c.ZP.connectStores([N.default], (e) => {
        let { guild: t } = e;
        return { unread: N.default.hasUnread(t.id) };
    })(M.ic),
    H = c.ZP.connectStores([b.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: b.ZP.getMentionCount(t.id) };
    })(M.PZ),
    G = c.ZP.connectStores([C.Z, b.ZP], (e) => {
        let { user: t } = e,
            s = C.Z.getDMFromUserId(t.id);
        return { mentions: null != s ? b.ZP.getMentionCount(s) : 0 };
    })(M.n5);
function V(e, t, s) {
    return (0, i.jsx)(
        d.Tooltip,
        {
            text: s,
            children: (e) =>
                (0, i.jsx)('span', {
                    ...e,
                    className: L.autocompleteQuerySymbol,
                    children: t
                })
        },
        e
    );
}
class K extends r.PureComponent {
    componentDidMount() {
        E.Z.disable(), E.Z.enableTemp(h.u);
    }
    componentWillUnmount() {
        E.Z.disableTemp(), E.Z.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: s, query: n } = this.state,
            { selectedIndex: i } = this.props,
            { current: r } = this.scrollerRef;
        if (null != r)
            n !== t.query
                ? r.scrollTo({ to: 0 })
                : s &&
                  i >= 0 &&
                  r.scrollToIndex({
                      section: 0,
                      row: i,
                      padding: 10
                  });
    }
    close() {
        (0, x.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, x.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: s } = this.state,
            n = t.length > 0 && '' !== s;
        return (0, i.jsx)(d.FocusRing, {
            children: (0, i.jsx)('input', {
                className: L.input,
                'aria-label': P.intl.string(P.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': n,
                'aria-activedescendant': n ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: P.intl.string(P.t.Vtvewc),
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
            ? (0, i.jsx)(U, {})
            : 0 === t.length
              ? null
              : (0, i.jsx)(d.ListAuto, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': P.intl.string(P.t.Wef5Dg),
                    ref: this.scrollerRef,
                    sectionHeight: 0,
                    rowHeight: 34,
                    paddingBottom: D,
                    sections: [t.length],
                    className: L.scroller,
                    renderRow: this.renderRow,
                    renderSection: this.renderSection
                });
    }
    focusNode(e) {
        S.S.dispatch(O.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, i.jsx)(m.Z, {
            className: l()(L.protip, { [L.hasContent]: this.state.query.length > 0 }),
            type: m.Z.Types.INLINE,
            children: P.intl.format(P.t.wukqXV, {
                userSymbolHook: (e, t) => V(t, p.xQ.USER, P.intl.string(P.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => V(t, p.xQ.TEXT_CHANNEL, P.intl.string(P.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => V(t, p.xQ.VOICE_CHANNEL, P.intl.string(P.t['jz+hJi'])),
                guildSymbolHook: (e, t) => V(t, p.xQ.GUILD, P.intl.string(P.t.WuwCWl)),
                helpdeskArticle: T.Z.getArticleURL(O.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: s } = this.props;
        return t ? null : (0, i.jsx)(A.Z, { hasQuery: e.length > 0 && s.length > 0 });
    }
    render() {
        return (0, i.jsx)(d.ModalRoot, {
            'aria-label': P.intl.string(P.t.ZvKwYW),
            size: d.ModalSize.DYNAMIC,
            transitionState: this.props.transitionState,
            className: l()(L.container, a.tq && L.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, i.jsxs)('div', {
                className: l()(L.quickswitcher, a.tq && L.mobileQuickswitcher),
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'scrollerRef', r.createRef()),
            v(this, 'inputRef', r.createRef()),
            v(this, '_listId', (0, g.hQ)()),
            v(this, 'state', {
                query: this.props.query,
                mouseFocusDisabled: !0
            }),
            v(this, 'handleInputChange', () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            v(this, 'handleMouseMove', () => {
                let { mouseFocusDisabled: e } = this.state;
                if (!1 !== e) this.setState({ mouseFocusDisabled: !1 });
            }),
            v(this, 'focusResult', (e) => {
                if (!this.state.mouseFocusDisabled) (0, x.tF)(this.props.results.indexOf(e));
            }),
            v(this, 'selectResult', (e) => {
                (0, x.Se)(e, this.props.queryMode === p.h8.TEXT_CHANNEL);
            }),
            v(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case p.h8.GUILD:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([s.e('63288'), s.e('7654'), s.e('98479'), s.e('53967'), s.e('16806'), s.e('60696'), s.e('58227'), s.e('16114'), s.e('82309'), s.e('94107'), s.e('33213'), s.e('62978')]).then(s.bind(s, 545135));
                            return (s) =>
                                (0, i.jsx)(e, {
                                    ...s,
                                    guild: t.record,
                                    onSelect: x.Cp,
                                    hideSettings: !0
                                });
                        });
                    case p.h8.TEXT_CHANNEL:
                    case p.h8.VOICE_CHANNEL:
                        let n = t.record,
                            r = f.Z.getGuild(n.getGuildId());
                        if (null == r) return;
                        switch (n.type) {
                            case O.d4z.GUILD_TEXT:
                            case O.d4z.GUILD_ANNOUNCEMENT:
                            case O.d4z.GUILD_FORUM:
                            case O.d4z.GUILD_MEDIA:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await Promise.all([s.e('79695'), s.e('18320'), s.e('44011')]).then(s.bind(s, 373651));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: n,
                                            guild: r,
                                            onSelect: x.Cp
                                        });
                                });
                            case O.d4z.GUILD_VOICE:
                            case O.d4z.GUILD_STAGE_VOICE:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await Promise.all([s.e('79695'), s.e('18320'), s.e('83331'), s.e('81070')]).then(s.bind(s, 213202));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: n,
                                            guild: r,
                                            onSelect: x.Cp
                                        });
                                });
                            case O.d4z.ANNOUNCEMENT_THREAD:
                            case O.d4z.PUBLIC_THREAD:
                            case O.d4z.PRIVATE_THREAD:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await s.e('40157').then(s.bind(s, 422200));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: n,
                                            onSelect: x.Cp
                                        });
                                });
                            case O.d4z.GUILD_STORE:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await s.e('99905').then(s.bind(s, 649400));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: n,
                                            guild: r,
                                            onSelect: x.Cp
                                        });
                                });
                            case O.d4z.GUILD_DIRECTORY:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await s.e('70623').then(s.bind(s, 99334));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: n
                                        });
                                });
                        }
                        break;
                    case p.h8.GROUP_DM:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([s.e('79695'), s.e('25421')]).then(s.bind(s, 354741));
                            return (s) =>
                                (0, i.jsx)(e, {
                                    ...s,
                                    channel: t.record,
                                    selected: I.Z.getChannelId() === t.record.id,
                                    onSelect: x.Cp
                                });
                        });
                    case p.h8.USER:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([s.e('79695'), s.e('69220'), s.e('56842')]).then(s.bind(s, 881351));
                            return (s) =>
                                (0, i.jsx)(e, {
                                    ...s,
                                    user: t.record,
                                    onSelect: x.Cp
                                });
                        });
                }
            }),
            v(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: s } = this.state,
                    { results: n } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let i = e.key.toLowerCase(),
                    { selectedIndex: r } = this.props;
                switch (i) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), s.length > 0 ? this.search('') : (0, x.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, x.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === r) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = n[r];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        r = (0, p.gJ)(p.a8.UP, r, n);
                        break;
                    case 'arrowdown':
                        r = (0, p.gJ)(p.a8.DOWN, r, n);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        r = (0, p.gJ)(p.a8.DOWN, r, n);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        r = (0, p.gJ)(p.a8.UP, r, n);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, x.tF)(r);
            }),
            v(this, 'renderRow', (e) => {
                let { row: t } = e,
                    s = this.props.results[t],
                    { selectedIndex: n } = this.props,
                    { showScores: r } = _.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (s.type) {
                    case p.h8.HEADER:
                        return (0, i.jsx)(M.h4, { children: s.record.text }, ''.concat(s.type, '-').concat(s.record.id));
                    case p.h8.TEXT_CHANNEL:
                        return (0, i.jsx)(
                            w,
                            {
                                id: this.getRowId(t),
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: s.record,
                                score: r ? s.score : void 0
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    case p.h8.VOICE_CHANNEL:
                        return (0, i.jsx)(
                            k,
                            {
                                id: this.getRowId(t),
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: s.record,
                                score: r ? s.score : void 0
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    case p.h8.GUILD:
                        return (0, i.jsx)(
                            j,
                            {
                                id: this.getRowId(t),
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: s.record,
                                score: r ? s.score : void 0
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    case p.h8.USER:
                        return (0, i.jsx)(
                            G,
                            {
                                id: this.getRowId(t),
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                user: s.record,
                                comparator: s.comparator,
                                score: r ? s.score : void 0
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    case p.h8.GROUP_DM:
                        return (0, i.jsx)(
                            H,
                            {
                                id: this.getRowId(t),
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: s.record,
                                score: r ? s.score : void 0
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    case p.h8.APPLICATION:
                        return (0, i.jsx)(
                            M.Mx,
                            {
                                id: this.getRowId(t),
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                application: s.record
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    case p.h8.LINK:
                        return (0, i.jsx)(
                            M.rU,
                            {
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                link: s.record,
                                score: r ? s.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    case p.h8.IN_APP_NAVIGATION:
                        return (0, i.jsx)(
                            M.s8,
                            {
                                focused: n >= 0 && t === n,
                                onClick: () => this.selectResult(s),
                                onMouseEnter: () => this.focusResult(s),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                navigationRecord: s.record,
                                score: r ? s.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(s.type, '-').concat(s.record.id)
                        );
                    default:
                        return null;
                }
            });
    }
}
function W(e) {
    let t = (0, c.cj)([y.Z], () => y.Z.getProps());
    return (0, i.jsx)(K, {
        ...t,
        ...e
    });
}
