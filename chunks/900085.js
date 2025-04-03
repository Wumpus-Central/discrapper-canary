n.d(t, { Z: () => X }), n(411104), n(47120), n(301563), n(733860);
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
    _ = n(714338),
    f = n(212819),
    h = n(815372),
    m = n(14429),
    b = n(576855),
    g = n(313201),
    E = n(991346),
    C = n(592125),
    O = n(888369),
    y = n(430824),
    v = n(306680),
    N = n(944486),
    S = n(938475),
    x = n(483360),
    I = n(585483),
    T = n(63063),
    L = n(51596),
    P = n(823385),
    j = n(415795),
    A = n(670512),
    R = n(558631),
    w = n(981631),
    k = n(388032),
    M = n(298746);
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
function D(e) {
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
                Z(e, t, n[t]);
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
    H = () =>
        (0, i.jsxs)('div', {
            className: M.emptyState,
            children: [
                (0, i.jsx)('div', {
                    className: M.emptyStateNote,
                    children: k.NW.string(k.t.bpbATE)
                }),
                (0, i.jsx)('div', {
                    className: M.emptyStateCTA,
                    children: (0, i.jsx)(u.eee, {
                        href: T.Z.getArticleURL(w.BhN.QUICK_SWITCHER_TUTORIAL),
                        children: k.NW.string(k.t['4iPfEB'])
                    })
                })
            ]
        });
class G extends (r = o.Component) {
    render() {
        let e = y.Z.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(
            j.$W,
            U(D({}, this.props), {
                children: (0, i.jsx)('div', {
                    className: M.miscContainer,
                    children: null != e ? e.name : null
                })
            })
        );
    }
}
Z(G, 'defaultProps', { unread: !1 });
let W = c.ZP.connectStores([v.ZP, C.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: v.ZP.hasUnread(t.id),
            mentions: v.ZP.getMentionCount(t.id),
            isMentionLowImportance: v.ZP.getIsMentionLowImportance(t.id),
            category: C.Z.getChannel(t.parent_id)
        };
    })(G),
    B = c.ZP.connectStores([S.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id) throw Error('ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...');
        return { voiceStates: S.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(G),
    F = c.ZP.connectStores([O.default], (e) => {
        let { guild: t } = e;
        return { unread: O.default.hasUnread(t.id) };
    })(j.ic),
    z = c.ZP.connectStores([v.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: v.ZP.getMentionCount(t.id) };
    })(j.PZ),
    Y = c.ZP.connectStores([C.Z, v.ZP], (e) => {
        let { user: t } = e,
            n = C.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? v.ZP.getMentionCount(n) : 0 };
    })(j.n5);
function K(e, t, n) {
    return (0, i.jsx)(
        u.ua7,
        {
            text: n,
            children: (e) =>
                (0, i.jsx)(
                    'span',
                    U(D({}, e), {
                        className: M.autocompleteQuerySymbol,
                        children: t
                    })
                )
        },
        e
    );
}
class Q extends o.PureComponent {
    componentDidMount() {
        _.Z.disable(), _.Z.enableTemp(p.u);
    }
    componentWillUnmount() {
        _.Z.disableTemp(), _.Z.enable();
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
        (0, L.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, L.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            r = t.length > 0 && '' !== n;
        return (0, i.jsx)(u.tEY, {
            children: (0, i.jsx)('input', {
                className: M.input,
                'aria-label': k.NW.string(k.t.ZvKwYW),
                ref: this.inputRef,
                type: 'text',
                role: 'combobox',
                'aria-controls': this._listId,
                'aria-expanded': r,
                'aria-activedescendant': r ? this.getRowId(e) : void 0,
                'aria-autocomplete': 'list',
                placeholder: k.NW.string(k.t.Vtvewc),
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
            ? (0, i.jsx)(H, {})
            : 0 === t.length
              ? null
              : (0, i.jsx)(u._2F, {
                    innerId: this._listId,
                    innerRole: 'listbox',
                    'aria-label': k.NW.string(k.t.Wef5Dg),
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
        I.S.dispatch(w.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return 'quick-switcher-'.concat(this._listId, '-item-').concat(e);
    }
    renderProtip() {
        return (0, i.jsx)(b.Z, {
            className: s()(M.protip, { [M.hasContent]: this.state.query.length > 0 }),
            type: b.Z.Types.INLINE,
            children: k.NW.format(k.t.wukqXV, {
                userSymbolHook: (e, t) => K(t, f.xQ.USER, k.NW.string(k.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => K(t, f.xQ.TEXT_CHANNEL, k.NW.string(k.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => K(t, f.xQ.VOICE_CHANNEL, k.NW.string(k.t['jz+hJi'])),
                guildSymbolHook: (e, t) => K(t, f.xQ.GUILD, k.NW.string(k.t.WuwCWl)),
                helpdeskArticle: T.Z.getArticleURL(w.BhN.QUICK_SWITCHER_TUTORIAL)
            })
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(A.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(u.Y0X, {
            'aria-label': k.NW.string(k.t.ZvKwYW),
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
            Z(this, 'scrollerRef', o.createRef()),
            Z(this, 'inputRef', o.createRef()),
            Z(this, '_listId', (0, g.hQ)()),
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
                this.state.mouseFocusDisabled || (0, L.tF)(this.props.results.indexOf(e));
            }),
            Z(this, 'selectResult', (e) => {
                (0, L.Se)(e, this.props.queryMode === f.h8.TEXT_CHANNEL);
            }),
            Z(this, 'handleContextMenu', (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case f.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('49286'), n.e('6850'), n.e('55666'), n.e('16114'), n.e('58227'), n.e('44088'), n.e('39149'), n.e('21881'), n.e('69760'), n.e('33213'), n.e('17071')]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(D({}, n), {
                                        guild: t.record,
                                        onSelect: L.Cp,
                                        hideSettings: !0
                                    })
                                );
                        });
                    case f.h8.TEXT_CHANNEL:
                    case f.h8.VOICE_CHANNEL:
                        let r = t.record,
                            o = y.Z.getGuild(r.getGuildId());
                        if (null == o) return;
                        switch (r.type) {
                            case w.d4z.GUILD_TEXT:
                            case w.d4z.GUILD_ANNOUNCEMENT:
                            case w.d4z.GUILD_FORUM:
                            case w.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('44011')]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(D({}, t), {
                                                channel: r,
                                                guild: o,
                                                onSelect: L.Cp
                                            })
                                        );
                                });
                            case w.d4z.GUILD_VOICE:
                            case w.d4z.GUILD_STAGE_VOICE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('18320'), n.e('83331'), n.e('81070')]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(D({}, t), {
                                                channel: r,
                                                guild: o,
                                                onSelect: L.Cp
                                            })
                                        );
                                });
                            case w.d4z.ANNOUNCEMENT_THREAD:
                            case w.d4z.PUBLIC_THREAD:
                            case w.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(D({}, t), {
                                                channel: r,
                                                onSelect: L.Cp
                                            })
                                        );
                                });
                            case w.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(D({}, t), {
                                                channel: r,
                                                guild: o,
                                                onSelect: L.Cp
                                            })
                                        );
                                });
                            case w.d4z.GUILD_DIRECTORY:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                                    return (t) => (0, i.jsx)(e, U(D({}, t), { channel: r }));
                                });
                        }
                        break;
                    case f.h8.GROUP_DM:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('53912'), n.e('2016')]).then(n.bind(n, 354741));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(D({}, n), {
                                        channel: t.record,
                                        selected: N.Z.getChannelId() === t.record.id,
                                        onSelect: L.Cp
                                    })
                                );
                        });
                    case f.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(D({}, n), {
                                        user: t.record,
                                        onSelect: L.Cp
                                    })
                                );
                        });
                }
            }),
            Z(this, 'handleKeyDown', (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: r } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let i = e.key.toLowerCase(),
                    { selectedIndex: o } = this.props;
                switch (i) {
                    case 'escape':
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search('') : (0, L.Cp)();
                        return;
                    case 'k':
                        (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, L.Cp)());
                        return;
                    case 'enter': {
                        if (-1 === o) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = r[o];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case 'arrowup':
                        o = (0, f.gJ)(f.a8.UP, o, r);
                        break;
                    case 'arrowdown':
                        o = (0, f.gJ)(f.a8.DOWN, o, r);
                        break;
                    case 'n':
                        if (!e.ctrlKey) return;
                        o = (0, f.gJ)(f.a8.DOWN, o, r);
                        break;
                    case 'p':
                        if (!e.ctrlKey) return;
                        o = (0, f.gJ)(f.a8.UP, o, r);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, L.tF)(o);
            }),
            Z(this, 'renderRow', (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: r } = this.props,
                    { showScores: o } = m.Z.getCurrentConfig({ location: '62f4be_1' }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case f.h8.HEADER:
                        return (0, i.jsx)(j.h4, { children: n.record.text }, ''.concat(n.type, '-').concat(n.record.id));
                    case f.h8.TEXT_CHANNEL:
                        return (0, i.jsx)(
                            W,
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
                    case f.h8.VOICE_CHANNEL:
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
                    case f.h8.GUILD:
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
                    case f.h8.USER:
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
                    case f.h8.GROUP_DM:
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
                    case f.h8.APPLICATION:
                        return (0, i.jsx)(
                            j.Mx,
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
                    case f.h8.LINK:
                        return (0, i.jsx)(
                            j.rU,
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
                    case f.h8.IN_APP_NAVIGATION:
                        return (0, i.jsx)(
                            j.s8,
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
                                    n.record.type === h.Ky.SETTINGS &&
                                    (0, i.jsx)('div', {
                                        className: M.miscContainer,
                                        children: k.NW.string(k.t['3D5yo6'])
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
function X(e) {
    let t = (0, c.cj)([P.Z], () => P.Z.getProps()),
        n = (0, E.Pt)(),
        r = R.Z.useExperiment({ location: 'QuickSwitcher' }).enabled,
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
                title: k.NW.string(k.t['3D5yo6']),
                searchableTitles: [k.NW.string(k.t['3D5yo6'])],
                path: w.Z5c.SETTINGS('account')
            }),
                (0, x.gF)(e);
        }, [l, r]),
        (0, i.jsx)(Q, D({}, t, e))
    );
}
