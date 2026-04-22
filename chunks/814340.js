n.d(t, { A: () => K });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(224640),
    o = n(311907),
    d = n(990078),
    c = n(349288),
    u = n(187322),
    h = n(475825),
    A = n(442433),
    _ = n(390435),
    m = n(775121),
    g = n(629357),
    p = n(599677),
    f = n(12351),
    E = n(915089),
    x = n(734057),
    I = n(458294),
    C = n(71393),
    b = n(290863),
    N = n(222823),
    S = n(309010),
    v = n(607567),
    T = n(234320),
    y = n(203982),
    R = n(975571),
    j = n(793322),
    L = n(174768),
    O = n(586068),
    G = n(826050),
    D = n(652215),
    M = n(985018),
    U = n(781303);
let P = () =>
    (0, i.jsxs)("div", {
        className: U.p$,
        children: [
            (0, i.jsx)("div", { className: U.lv, children: M.intl.string(M.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: U.PA,
                children: (0, i.jsx)(c.Anchor, {
                    href: R.A.getArticleURL(D.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: M.intl.string(M.t["4iPfEO"]),
                }),
            }),
        ],
    });
class w extends l.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = C.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(O.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: U.MD, children: null != e ? e.name : null }),
        });
    }
}
let k = o.Ay.connectStores([N.Ay, x.A], (e) => {
        let { channel: t } = e;
        return {
            unread: N.Ay.hasUnread(t.id),
            mentions: N.Ay.getMentionCount(t.id),
            isMentionLowImportance: N.Ay.getIsMentionLowImportance(t.id),
            category: x.A.getChannel(t.parent_id),
        };
    })(w),
    V = o.Ay.connectStores([v.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: v.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(w),
    B = o.Ay.connectStores([I.default], (e) => {
        let { guild: t } = e;
        return { unread: I.default.hasUnread(t.id) };
    })(O.OS),
    H = o.Ay.connectStores([N.Ay, b.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = b.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === D.clD.ONLINE) && (n = D.clD.ONLINE),
            { mentions: N.Ay.getMentionCount(t.id), status: n }
        );
    })(O.nG),
    F = o.Ay.connectStores([x.A, N.Ay, b.A], (e) => {
        let { user: t } = e,
            n = x.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? N.Ay.getMentionCount(n) : 0,
            status: b.A.getStatus(t.id),
            isMobile: b.A.isMobileOnline(t.id),
        };
    })(O.KJ);
function W(e, t, n) {
    return (0, i.jsx)(
        d.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: U.ZT, children: t }) },
        e,
    );
}
class Y extends l.PureComponent {
    scrollerRef = l.createRef();
    inputRef = l.createRef();
    _listId = (0, E.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        m.A.disable(), m.A.enableTemp(_.w);
    }
    componentWillUnmount() {
        m.A.disableTemp(), m.A.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: l } = this.props,
            { current: s } = this.scrollerRef;
        null != s &&
            (i !== t.query
                ? s.scrollTo({ to: 0 })
                : n && l >= 0 && s.scrollToIndex({ section: 0, row: l, padding: 10 }));
    }
    close() {
        (0, j.jD)();
    }
    search(e) {
        this.setState({ query: e }), (0, j.$P)(e);
    }
    handleInputChange = () => {
        let { current: e } = this.inputRef;
        null != e && this.search(e.value);
    };
    handleMouseMove = () => {
        let { mouseFocusDisabled: e } = this.state;
        !1 !== e && this.setState({ mouseFocusDisabled: !1 });
    };
    focusResult = (e) => {
        this.state.mouseFocusDisabled || (0, j.wf)(this.props.results.indexOf(e));
    };
    selectResult = (e) => {
        (0, j.F6)(e, this.props.queryMode === g.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case g.rD.GUILD:
                return (0, A.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("49681"),
                        n.e("96382"),
                        n.e("20044"),
                        n.e("28136"),
                        n.e("82486"),
                        n.e("43600"),
                        n.e("77602"),
                        n.e("68587"),
                        n.e("86546"),
                        n.e("15373"),
                        n.e("63379"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("13334"),
                        n.e("25961"),
                        n.e("2736"),
                        n.e("13848"),
                        n.e("47810"),
                        n.e("54828"),
                        n.e("94683"),
                        n.e("50796"),
                        n.e("8458"),
                        n.e("94253"),
                        n.e("11810"),
                        n.e("72756"),
                        n.e("13337"),
                        n.e("54469"),
                        n.e("94886"),
                    ]).then(n.bind(n, 544676));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: j.jD, hideSettings: !0 });
                });
            case g.rD.TEXT_CHANNEL:
            case g.rD.VOICE_CHANNEL:
                let l = t.record,
                    s = C.A.getGuild(l.getGuildId());
                if (null == s) return;
                switch (l.type) {
                    case D.rbe.GUILD_TEXT:
                    case D.rbe.GUILD_ANNOUNCEMENT:
                    case D.rbe.GUILD_FORUM:
                    case D.rbe.GUILD_MEDIA:
                        return (0, A.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("2381"), n.e("77666")]).then(
                                n.bind(n, 370372),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: j.jD });
                        });
                    case D.rbe.GUILD_VOICE:
                    case D.rbe.GUILD_STAGE_VOICE:
                        return (0, A.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("2381"),
                                n.e("40394"),
                                n.e("53378"),
                            ]).then(n.bind(n, 698193));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: j.jD });
                        });
                    case D.rbe.ANNOUNCEMENT_THREAD:
                    case D.rbe.PUBLIC_THREAD:
                    case D.rbe.PRIVATE_THREAD:
                        return (0, A.L3)(e, async () => {
                            let { default: e } = await n.e("22414").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, onSelect: j.jD });
                        });
                    case D.rbe.GUILD_STORE:
                        return (0, A.L3)(e, async () => {
                            let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: j.jD });
                        });
                    case D.rbe.GUILD_DIRECTORY:
                        return (0, A.L3)(e, async () => {
                            let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l });
                        });
                }
                break;
            case g.rD.GROUP_DM:
                return (0, A.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: S.A.getChannelId() === t.record.id,
                            onSelect: j.jD,
                        });
                });
            case g.rD.USER:
                return (0, A.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(
                        n.bind(n, 668569),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, user: t.record, onSelect: j.jD });
                });
        }
    };
    handleKeyDown = (e) => {
        let { mouseFocusDisabled: t, query: n } = this.state,
            { results: i } = this.props;
        !1 === t && this.setState({ mouseFocusDisabled: !0 });
        let l = e.key.toLowerCase(),
            { selectedIndex: s } = this.props;
        switch (l) {
            case "escape":
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, j.jD)();
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, j.jD)());
                return;
            case "enter": {
                if (-1 === s) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[s];
                null != t && this.selectResult(t);
                return;
            }
            case "arrowup":
                s = (0, g.Vv)(g.vB.UP, s, i);
                break;
            case "arrowdown":
                s = (0, g.Vv)(g.vB.DOWN, s, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                s = (0, g.Vv)(g.vB.DOWN, s, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                s = (0, g.Vv)(g.vB.UP, s, i);
                break;
            default:
                return;
        }
        e.preventDefault(), (0, j.wf)(s);
    };
    handleGlobalPaste = (e) => {
        let { event: t } = e,
            n = t.clipboardData?.getData("text");
        null != n &&
            (t.preventDefault(),
            t.stopPropagation(),
            this.search(this.state.query + n),
            this.inputRef.current?.focus());
    };
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            l = t.length > 0 && "" !== n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.EG, { event: D.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(u.vN, {
                    children: (0, i.jsx)("input", {
                        className: U.hF,
                        "aria-label": M.intl.string(M.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": l,
                        "aria-activedescendant": l ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: M.intl.string(M.t.VtvewW),
                        onChange: this.handleInputChange,
                        onKeyDown: this.handleKeyDown,
                        value: this.state.query,
                        spellCheck: !1,
                        autoFocus: !0,
                    }),
                }),
            ],
        });
    }
    renderSection() {
        return null;
    }
    renderResults() {
        let e = () => {
            let { query: e } = this.state,
                { results: t } = this.props;
            return 0 === t.length && e.length > 0
                ? (0, i.jsx)(P, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(h.Ei, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": M.intl.string(M.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: U.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: U.sN, children: e() });
    }
    focusNode(e) {
        y._.dispatch(D.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: l } = this.props,
            { showScores: s } = p.A.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
        switch (n.type) {
            case g.rD.HEADER:
                return (0, i.jsx)(O.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case g.rD.TEXT_CHANNEL:
                return (0, i.jsx)(
                    k,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.VOICE_CHANNEL:
                return (0, i.jsx)(
                    V,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.GUILD:
                return (0, i.jsx)(
                    B,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.USER:
                return (0, i.jsx)(
                    F,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        user: n.record,
                        comparator: n.comparator,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.GROUP_DM:
                return (0, i.jsx)(
                    H,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: s ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.APPLICATION:
                return (0, i.jsx)(
                    O.lg,
                    {
                        id: this.getRowId(t),
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        application: n.record,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.LINK:
                return (0, i.jsx)(
                    O.N_,
                    {
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        link: n.record,
                        score: s ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            case g.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    O.vw,
                    {
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        navigationRecord: n.record,
                        score: s ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            default:
                return null;
        }
    };
    renderProtip() {
        return (0, i.jsx)(f.A, {
            className: a()(U.PP, { [U.ov]: this.state.query.length > 0 }),
            type: f.A.Types.INLINE,
            children: M.intl.format(M.t.wukqXQ, {
                userSymbolHook: (e, t) => W(t, g.AT.USER, M.intl.string(M.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => W(t, g.AT.TEXT_CHANNEL, M.intl.string(M.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => W(t, g.AT.VOICE_CHANNEL, M.intl.string(M.t["jz+hJp"])),
                guildSymbolHook: (e, t) => W(t, g.AT.GUILD, M.intl.string(M.t.WuwCWi)),
                helpdeskArticle: R.A.getArticleURL(D.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(G.A, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(r.d, {
            "aria-label": M.intl.string(M.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: U.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function K(e) {
    let t = (0, o.cf)([L.A], () => L.A.getProps());
    return (0, i.jsx)(Y, { ...t, ...e });
}
