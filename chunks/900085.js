n.d(t, { Z: () => H }), n(411104), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    E = n(134616),
    _ = n(714338),
    h = n(212819),
    I = n(14429),
    T = n(576855),
    C = n(313201),
    N = n(592125),
    m = n(888369),
    p = n(430824),
    S = n(306680),
    R = n(944486),
    A = n(938475),
    g = n(585483),
    O = n(63063),
    f = n(51596),
    P = n(823385),
    L = n(415795),
    D = n(670512),
    M = n(981631),
    v = n(388032),
    Z = n(956208);
function U(e, t, n) {
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
let x = () =>
    (0, l.jsxs)('div', {
        className: Z.emptyState,
        children: [
            (0, l.jsx)('div', {
                className: Z.emptyStateNote,
                children: v.intl.string(v.t.bpbATE)
            }),
            (0, l.jsx)('div', {
                className: Z.emptyStateCTA,
                children: (0, l.jsx)(u.eee, {
                    href: O.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
                    children: v.intl.string(v.t['4iPfEB'])
                })
            })
        ]
    });
class y extends (i = r.Component) {
    render() {
        let e = p.Z.getGuild(this.props.channel.guild_id);
        return (0, l.jsx)(L.$W, {
            ...this.props,
            children: (0, l.jsx)('div', {
                className: Z.miscContainer,
                children: null != e ? e.name : null
            })
        });
    }
}
U(y, 'defaultProps', { unread: !1 });
let k = c.ZP.connectStores([S.ZP, N.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: S.ZP.hasUnread(t.id),
            mentions: S.ZP.getMentionCount(t.id),
            isMentionLowImportance: S.ZP.getIsMentionLowImportance(t.id),
            category: N.Z.getChannel(t.parent_id)
        };
    })(y),
    b = c.ZP.connectStores([A.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: A.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(y),
    V = c.ZP.connectStores([m.default], (e) => {
        let { guild: t } = e;
        return { unread: m.default.hasUnread(t.id) };
    })(L.ic),
    j = c.ZP.connectStores([S.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: S.ZP.getMentionCount(t.id) };
    })(L.PZ),
    F = c.ZP.connectStores([N.Z, S.ZP], (e) => {
        let { user: t } = e,
            n = N.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? S.ZP.getMentionCount(n) : 0 };
    })(L.n5);
function G(e, t, n) {
    return (0, l.jsx)(
        u.ua7,
        {
            text: n,
            children: (e) =>
                (0, l.jsx)('span', {
                    ...e,
                    className: Z.autocompleteQuerySymbol,
                    children: t
                })
        },
        e
    );
}
class w extends r.PureComponent {
    componentDidMount() {
        _.Z.disable(), _.Z.enableTemp(E.u);
    }
    componentWillUnmount() {
        _.Z.disableTemp(), _.Z.enable();
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
        (0, f.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, f.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            i = t.length > 0 && '' !== n;
        return (0, l.jsx)(u.tEY, {
            children: (0, l.jsx)('input', {
                className: Z.input,
                'aria-label': v.intl.string(v.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': i,
                'aria-activedescendant': i ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: v.intl.string(v.t.Vtvewc),
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
            ? (0, l.jsx)(x, {})
            : 0 === t.length
              ? null
              : (0, l.jsx)(u._2F, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': v.intl.string(v.t.Wef5Dg),
                    ref: this.scrollerRef,
                    sectionHeight: 0,
                    rowHeight: 34,
                    paddingBottom: 10,
                    sections: [t.length],
                    className: Z.scroller,
                    renderRow: this.renderRow,
                    renderSection: this.renderSection
                });
    }
    focusNode(e) {
        g.S.dispatch(M.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, l.jsx)(T.Z, {
            className: a()(Z.protip, { [Z.hasContent]: this.state.query.length > 0 }),
            type: T.Z.Types.INLINE,
            children: v.intl.format(v.t.wukqXV, {
                userSymbolHook: (e, t) => G(t, h.xQ.USER, v.intl.string(v.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => G(t, h.xQ.TEXT_CHANNEL, v.intl.string(v.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => G(t, h.xQ.VOICE_CHANNEL, v.intl.string(v.t['jz+hJi'])),
                guildSymbolHook: (e, t) => G(t, h.xQ.GUILD, v.intl.string(v.t.WuwCWl)),
                helpdeskArticle: O.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, l.jsx)(D.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, l.jsx)(u.Y0X, {
            'aria-label': v.intl.string(v.t.ZvKwYW),
            size: u.CgR.DYNAMIC,
            transitionState: this.props.transitionState,
            className: a()(Z.container, o.tq && Z.mobileContainer),
            fullscreenOnMobile: !1,
            children: (0, l.jsxs)('div', {
                className: a()(Z.quickswitcher, o.tq && Z.mobileQuickswitcher),
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'scrollerRef', r.createRef()),
            U(this, 'inputRef', r.createRef()),
            U(this, '_listId', (0, C.hQ)()),
            U(this, 'state', {
                query: this.props.query,
                mouseFocusDisabled: !0
            }),
            U(this, 'handleInputChange', () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            U(this, 'handleMouseMove', () => {
                let { mouseFocusDisabled: e } = this.state;
                !1 !== e && this.setState({ mouseFocusDisabled: !1 });
            }),
            U(this, 'focusResult', (e) => {
                !this.state.mouseFocusDisabled && (0, f.tF)(this.props.results.indexOf(e));
            }),
            U(this, 'selectResult', (e) => {
                (0, f.Se)(e, this.props.queryMode === h.h8.TEXT_CHANNEL);
            }),
            U(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case h.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('33053'), n.e('17298'), n.e('78258'), n.e('7654'), n.e('44156'), n.e('20364'), n.e('6850'), n.e('58227'), n.e('16114'), n.e('54408'), n.e('35217'), n.e('21881'), n.e('33213'), n.e('36026')]).then(n.bind(n, 963279));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    guild: t.record,
                                    onSelect: f.Cp,
                                    hideSettings: !0
                                });
                        });
                    case h.h8.TEXT_CHANNEL:
                    case h.h8.VOICE_CHANNEL:
                        let i = t.record,
                            r = p.Z.getGuild(i.getGuildId());
                        if (null == r) return;
                        switch (i.type) {
                            case M.d4z.GUILD_TEXT:
                            case M.d4z.GUILD_ANNOUNCEMENT:
                            case M.d4z.GUILD_FORUM:
                            case M.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: f.Cp
                                        });
                                });
                            case M.d4z.GUILD_VOICE:
                            case M.d4z.GUILD_STAGE_VOICE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: f.Cp
                                        });
                                });
                            case M.d4z.ANNOUNCEMENT_THREAD:
                            case M.d4z.PUBLIC_THREAD:
                            case M.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('78650').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            onSelect: f.Cp
                                        });
                                });
                            case M.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, l.jsx)(e, {
                                            ...t,
                                            channel: i,
                                            guild: r,
                                            onSelect: f.Cp
                                        });
                                });
                            case M.d4z.GUILD_DIRECTORY:
                                return (0, d.jW)(e, async () => {
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
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('25421'), n.e('40979')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    channel: t.record,
                                    selected: R.Z.getChannelId() === t.record.id,
                                    onSelect: f.Cp
                                });
                        });
                    case h.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('18509')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, l.jsx)(e, {
                                    ...n,
                                    user: t.record,
                                    onSelect: f.Cp
                                });
                        });
                }
            }),
            U(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: i } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let l = e.key.toLowerCase(),
                    { selectedIndex: r } = this.props;
                switch (l) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, f.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, f.Cp)());
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
                e.preventDefault(), (0, f.tF)(r);
            }),
            U(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: i } = this.props,
                    { showScores: r } = I.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case h.h8.HEADER:
                        return (0, l.jsx)(L.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
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
                            b,
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
                            F,
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
                            L.Mx,
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
                            L.rU,
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
                            L.s8,
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
function H(e) {
    let t = (0, c.cj)([P.Z], () => P.Z.getProps());
    return (0, l.jsx)(w, {
        ...t,
        ...e
    });
}
