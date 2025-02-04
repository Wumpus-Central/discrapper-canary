n.d(t, { Z: () => B }), n(411104), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    _ = n(134616),
    E = n(714338),
    h = n(212819),
    p = n(14429),
    I = n(576855),
    m = n(313201),
    T = n(592125),
    C = n(888369),
    N = n(430824),
    g = n(306680),
    S = n(944486),
    f = n(938475),
    R = n(585483),
    A = n(63063),
    O = n(51596),
    L = n(823385),
    P = n(415795),
    x = n(670512),
    b = n(981631),
    D = n(388032),
    M = n(449532);
function v(e, t, n) {
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
let U = () =>
    (0, l.jsxs)('div', {
        className: M.emptyState,
        children: [
            (0, l.jsx)('div', {
                className: M.emptyStateNote,
                children: D.intl.string(D.t.bpbATE)
            }),
            (0, l.jsx)('div', {
                className: M.emptyStateCTA,
                children: (0, l.jsx)(d.eee, {
                    href: A.Z.getArticleURL(b.BhN.QUICK_SWITCHER_TUTORIAL),
                    children: D.intl.string(D.t['4iPfEB'])
                })
            })
        ]
    });
class y extends (i = r.Component) {
    render() {
        let e = N.Z.getGuild(this.props.channel.guild_id);
        return (0, l.jsx)(P.$W, {
            ...this.props,
            children: (0, l.jsx)('div', {
                className: M.miscContainer,
                children: null != e ? e.name : null
            })
        });
    }
}
v(y, 'defaultProps', { unread: !1 });
let k = c.ZP.connectStores([g.ZP, T.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: g.ZP.hasUnread(t.id),
            mentions: g.ZP.getMentionCount(t.id),
            isMentionLowImportance: g.ZP.getIsMentionLowImportance(t.id),
            category: T.Z.getChannel(t.parent_id)
        };
    })(y),
    Z = c.ZP.connectStores([f.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: f.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(y),
    V = c.ZP.connectStores([C.default], (e) => {
        let { guild: t } = e;
        return { unread: C.default.hasUnread(t.id) };
    })(P.ic),
    j = c.ZP.connectStores([g.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: g.ZP.getMentionCount(t.id) };
    })(P.PZ),
    w = c.ZP.connectStores([T.Z, g.ZP], (e) => {
        let { user: t } = e,
            n = T.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? g.ZP.getMentionCount(n) : 0 };
    })(P.n5);
function G(e, t, n) {
    return (0, l.jsx)(
        d.ua7,
        {
            text: n,
            children: (e) =>
                (0, l.jsx)('span', {
                    ...e,
                    className: M.autocompleteQuerySymbol,
                    children: t
                })
        },
        e
    );
}
class F extends r.PureComponent {
    componentDidMount() {
        E.Z.disable(), E.Z.enableTemp(_.u);
    }
    componentWillUnmount() {
        E.Z.disableTemp(), E.Z.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: l } = this.props,
            { current: r } = this.scrollerRef;
        null != r &&
            (i !== t.query
                ? r.scrollTo({ to: 0 })
                : n &&
                  l >= 0 &&
                  r.scrollToIndex({
                      section: 0,
                      row: l,
                      padding: 10
                  }));
    }
    close() {
        (0, O.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, O.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            i = t.length > 0 && '' !== n;
        return (0, l.jsx)(d.tEY, {
            children: (0, l.jsx)('input', {
                className: M.input,
                'aria-label': D.intl.string(D.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': i,
                'aria-activedescendant': i ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: D.intl.string(D.t.Vtvewc),
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
            ? (0, l.jsx)(U, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(d._2F, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': D.intl.string(D.t.Wef5Dg),
                    ref: this.scrollerRef,
                    sectionHeight: 0,
                    rowHeight: 34,
                    paddingBottom: 10,
                    sections: [t.length],
                    className: M.scroller,
                    renderRow: this.renderRow,
                    renderSection: this.renderSection
                });
    }
    focusNode(e) {
        R.S.dispatch(b.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, l.jsx)(I.Z, {
            className: o()(M.protip, { [M.hasContent]: this.state.query.length > 0 }),
            type: I.Z.Types.INLINE,
            children: D.intl.format(D.t.wukqXV, {
                userSymbolHook: (e, t) => G(t, h.xQ.USER, D.intl.string(D.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => G(t, h.xQ.TEXT_CHANNEL, D.intl.string(D.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => G(t, h.xQ.VOICE_CHANNEL, D.intl.string(D.t['jz+hJi'])),
                guildSymbolHook: (e, t) => G(t, h.xQ.GUILD, D.intl.string(D.t.WuwCWl)),
                helpdeskArticle: A.Z.getArticleURL(b.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, l.jsx)(x.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, l.jsx)(d.Y0X, {
            'aria-label': D.intl.string(D.t.ZvKwYW),
            size: d.CgR.DYNAMIC,
            transitionState: this.props.transitionState,
            className: o()(M.container, a.tq && M.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)('div', {
                className: o()(M.quickswitcher, a.tq && M.mobileQuickswitcher),
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'scrollerRef', r.createRef()),
            v(this, 'inputRef', r.createRef()),
            v(this, '_listId', (0, m.hQ)()),
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
                !1 !== e && this.setState({ mouseFocusDisabled: !1 });
            }),
            v(this, 'focusResult', (e) => {
                !this.state.mouseFocusDisabled && (0, O.tF)(this.props.results.indexOf(e));
            }),
            v(this, 'selectResult', (e) => {
                (0, O.Se)(e, this.props.queryMode === h.h8.TEXT_CHANNEL);
            }),
            v(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case h.h8.GUILD:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('53967'), n.e('16806'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('66593'), n.e('94107'), n.e('33213'), n.e('34503')]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    guild: t.record,
                                    onSelect: O.Cp,
                                    hideSettings: !0
                                });
                        });
                    case h.h8.TEXT_CHANNEL:
                    case h.h8.VOICE_CHANNEL:
                        let i = t.record,
                            r = N.Z.getGuild(i.getGuildId());
                        if (null == r) return;
                        switch (i.type) {
                            case b.d4z.GUILD_TEXT:
                            case b.d4z.GUILD_ANNOUNCEMENT:
                            case b.d4z.GUILD_FORUM:
                            case b.d4z.GUILD_MEDIA:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: O.Cp
                                        });
                                });
                            case b.d4z.GUILD_VOICE:
                            case b.d4z.GUILD_STAGE_VOICE:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: O.Cp
                                        });
                                });
                            case b.d4z.ANNOUNCEMENT_THREAD:
                            case b.d4z.PUBLIC_THREAD:
                            case b.d4z.PRIVATE_THREAD:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            onSelect: O.Cp
                                        });
                                });
                            case b.d4z.GUILD_STORE:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: O.Cp
                                        });
                                });
                            case b.d4z.GUILD_DIRECTORY:
                                return (0, u.jW)(e, async () => {
                                    let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i
                                        });
                                });
                        }
                        break;
                    case h.h8.GROUP_DM:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    channel: t.record,
                                    selected: S.Z.getChannelId() === t.record.id,
                                    onSelect: O.Cp
                                });
                        });
                    case h.h8.USER:
                        return (0, u.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: t.record,
                                    onSelect: O.Cp
                                });
                        });
                }
            }),
            v(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: i } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let l = e.key.toLowerCase(),
                    { selectedIndex: r } = this.props;
                switch (l) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, O.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, O.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === r) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = i[r];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        r = (0, h.gJ)(h.a8.UP, r, i);
                        break;
                    case 'arrowdown':
                        r = (0, h.gJ)(h.a8.DOWN, r, i);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        r = (0, h.gJ)(h.a8.DOWN, r, i);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        r = (0, h.gJ)(h.a8.UP, r, i);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, O.tF)(r);
            }),
            v(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: i } = this.props,
                    { showScores: r } = p.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case h.h8.HEADER:
                        return (0, l.jsx)(P.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
                    case h.h8.TEXT_CHANNEL:
                        return (0, l.jsx)(
                            k,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.VOICE_CHANNEL:
                        return (0, l.jsx)(
                            Z,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.GUILD:
                        return (0, l.jsx)(
                            V,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.USER:
                        return (0, l.jsx)(
                            w,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                user: n.record,
                                comparator: n.comparator,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.GROUP_DM:
                        return (0, l.jsx)(
                            j,
                            {
                                id: this.getRowId(t),
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.APPLICATION:
                        return (0, l.jsx)(
                            P.Mx,
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
                        return (0, l.jsx)(
                            P.rU,
                            {
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                link: n.record,
                                score: r ? n.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case h.h8.IN_APP_NAVIGATION:
                        return (0, l.jsx)(
                            P.s8,
                            {
                                focused: i >= 0 && t === i,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                navigationRecord: n.record,
                                score: r ? n.score : void 0,
                                id: this.getRowId(t)
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    default:
                        return null;
                }
            });
    }
}
function B(e) {
    let t = (0, c.cj)([L.Z], () => L.Z.getProps());
    return (0, l.jsx)(F, {
        ...t,
        ...e
    });
}
