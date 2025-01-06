n.d(t, {
    Z: function () {
        return W;
    }
}),
    n(411104),
    n(47120);
var s,
    i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    h = n(134616),
    E = n(714338),
    p = n(212819),
    _ = n(14429),
    m = n(576855),
    C = n(313201),
    g = n(592125),
    f = n(888369),
    N = n(430824),
    b = n(306680),
    R = n(944486),
    I = n(938475),
    T = n(585483),
    S = n(63063),
    O = n(51596),
    A = n(823385),
    x = n(415795),
    y = n(670512),
    M = n(981631),
    P = n(388032),
    L = n(449532);
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
let D = 10,
    Z = () =>
        (0, i.jsxs)('div', {
            className: L.emptyState,
            children: [
                (0, i.jsx)('div', {
                    className: L.emptyStateNote,
                    children: P.intl.string(P.t.bpbATE)
                }),
                (0, i.jsx)('div', {
                    className: L.emptyStateCTA,
                    children: (0, i.jsx)(u.Anchor, {
                        href: S.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
                        children: P.intl.string(P.t['4iPfEB'])
                    })
                })
            ]
        });
class U extends (s = r.Component) {
    render() {
        let e = N.Z.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(x.$W, {
            ...this.props,
            children: (0, i.jsx)('div', {
                className: L.miscContainer,
                children: null != e ? e.name : null
            })
        });
    }
}
v(U, 'defaultProps', { unread: !1 });
let w = c.ZP.connectStores([b.ZP, g.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: b.ZP.hasUnread(t.id),
            mentions: b.ZP.getMentionCount(t.id),
            isMentionLowImportance: b.ZP.getIsMentionLowImportance(t.id),
            category: g.Z.getChannel(t.parent_id)
        };
    })(U),
    k = c.ZP.connectStores([I.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: I.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(U),
    j = c.ZP.connectStores([f.default], (e) => {
        let { guild: t } = e;
        return { unread: f.default.hasUnread(t.id) };
    })(x.ic),
    H = c.ZP.connectStores([b.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: b.ZP.getMentionCount(t.id) };
    })(x.PZ),
    V = c.ZP.connectStores([g.Z, b.ZP], (e) => {
        let { user: t } = e,
            n = g.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? b.ZP.getMentionCount(n) : 0 };
    })(x.n5);
function G(e, t, n) {
    return (0, i.jsx)(
        u.Tooltip,
        {
            text: n,
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
        let { mouseFocusDisabled: n, query: s } = this.state,
            { selectedIndex: i } = this.props,
            { current: r } = this.scrollerRef;
        if (null != r)
            s !== t.query
                ? r.scrollTo({ to: 0 })
                : n &&
                  i >= 0 &&
                  r.scrollToIndex({
                      section: 0,
                      row: i,
                      padding: 10
                  });
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
            s = t.length > 0 && '' !== n;
        return (0, i.jsx)(u.FocusRing, {
            children: (0, i.jsx)('input', {
                className: L.input,
                'aria-label': P.intl.string(P.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': s,
                'aria-activedescendant': s ? this.getRowId(e) : void 0,
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
            ? (0, i.jsx)(Z, {})
            : 0 === t.length
              ? null
              : (0, i.jsx)(u.ListAuto, {
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
        T.S.dispatch(M.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, i.jsx)(m.Z, {
            className: l()(L.protip, { [L.hasContent]: this.state.query.length > 0 }),
            type: m.Z.Types.INLINE,
            children: P.intl.format(P.t.wukqXV, {
                userSymbolHook: (e, t) => G(t, p.xQ.USER, P.intl.string(P.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => G(t, p.xQ.TEXT_CHANNEL, P.intl.string(P.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => G(t, p.xQ.VOICE_CHANNEL, P.intl.string(P.t['jz+hJi'])),
                guildSymbolHook: (e, t) => G(t, p.xQ.GUILD, P.intl.string(P.t.WuwCWl)),
                helpdeskArticle: S.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(y.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(u.ModalRoot, {
            'aria-label': P.intl.string(P.t.ZvKwYW),
            size: u.ModalSize.DYNAMIC,
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
            v(this, '_listId', (0, C.hQ)()),
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
                if (!this.state.mouseFocusDisabled) (0, O.tF)(this.props.results.indexOf(e));
            }),
            v(this, 'selectResult', (e) => {
                (0, O.Se)(e, this.props.queryMode === p.h8.TEXT_CHANNEL);
            }),
            v(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case p.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('15669'), n.e('7654'), n.e('89029'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('53967'), n.e('4604'), n.e('21881'), n.e('33213'), n.e('22179')]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guild: t.record,
                                    onSelect: O.Cp,
                                    hideSettings: !0
                                });
                        });
                    case p.h8.TEXT_CHANNEL:
                    case p.h8.VOICE_CHANNEL:
                        let s = t.record,
                            r = N.Z.getGuild(s.getGuildId());
                        if (null == r) return;
                        switch (s.type) {
                            case M.d4z.GUILD_TEXT:
                            case M.d4z.GUILD_ANNOUNCEMENT:
                            case M.d4z.GUILD_FORUM:
                            case M.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('54310')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: s,
                                            guild: r,
                                            onSelect: O.Cp
                                        });
                                });
                            case M.d4z.GUILD_VOICE:
                            case M.d4z.GUILD_STAGE_VOICE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: s,
                                            guild: r,
                                            onSelect: O.Cp
                                        });
                                });
                            case M.d4z.ANNOUNCEMENT_THREAD:
                            case M.d4z.PUBLIC_THREAD:
                            case M.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: s,
                                            onSelect: O.Cp
                                        });
                                });
                            case M.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: s,
                                            guild: r,
                                            onSelect: O.Cp
                                        });
                                });
                            case M.d4z.GUILD_DIRECTORY:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            channel: s
                                        });
                                });
                        }
                        break;
                    case p.h8.GROUP_DM:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    channel: t.record,
                                    selected: R.Z.getChannelId() === t.record.id,
                                    onSelect: O.Cp
                                });
                        });
                    case p.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t.record,
                                    onSelect: O.Cp
                                });
                        });
                }
            }),
            v(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: s } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let i = e.key.toLowerCase(),
                    { selectedIndex: r } = this.props;
                switch (i) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, O.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, O.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === r) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = s[r];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        r = (0, p.gJ)(p.a8.UP, r, s);
                        break;
                    case 'arrowdown':
                        r = (0, p.gJ)(p.a8.DOWN, r, s);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        r = (0, p.gJ)(p.a8.DOWN, r, s);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        r = (0, p.gJ)(p.a8.UP, r, s);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, O.tF)(r);
            }),
            v(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: s } = this.props,
                    { showScores: r } = _.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case p.h8.HEADER:
                        return (0, i.jsx)(x.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
                    case p.h8.TEXT_CHANNEL:
                        return (0, i.jsx)(
                            w,
                            {
                                id: this.getRowId(t),
                                focused: s >= 0 && t === s,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case p.h8.VOICE_CHANNEL:
                        return (0, i.jsx)(
                            k,
                            {
                                id: this.getRowId(t),
                                focused: s >= 0 && t === s,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case p.h8.GUILD:
                        return (0, i.jsx)(
                            j,
                            {
                                id: this.getRowId(t),
                                focused: s >= 0 && t === s,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case p.h8.USER:
                        return (0, i.jsx)(
                            V,
                            {
                                id: this.getRowId(t),
                                focused: s >= 0 && t === s,
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
                    case p.h8.GROUP_DM:
                        return (0, i.jsx)(
                            H,
                            {
                                id: this.getRowId(t),
                                focused: s >= 0 && t === s,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: r ? n.score : void 0
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case p.h8.APPLICATION:
                        return (0, i.jsx)(
                            x.Mx,
                            {
                                id: this.getRowId(t),
                                focused: s >= 0 && t === s,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                application: n.record
                            },
                            ''.concat(n.type, '-').concat(n.record.id)
                        );
                    case p.h8.LINK:
                        return (0, i.jsx)(
                            x.rU,
                            {
                                focused: s >= 0 && t === s,
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
                    case p.h8.IN_APP_NAVIGATION:
                        return (0, i.jsx)(
                            x.s8,
                            {
                                focused: s >= 0 && t === s,
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
function W(e) {
    let t = (0, c.cj)([A.Z], () => A.Z.getProps());
    return (0, i.jsx)(K, {
        ...t,
        ...e
    });
}
