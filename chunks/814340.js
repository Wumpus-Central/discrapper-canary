"use strict";
n.d(t, { A: () => K });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(442433),
    h = n(390435),
    A = n(775121),
    m = n(629357),
    p = n(599677),
    g = n(12351),
    _ = n(915089),
    f = n(734057),
    x = n(458294),
    C = n(71393),
    E = n(290863),
    I = n(222823),
    N = n(309010),
    S = n(607567),
    b = n(234320),
    T = n(203982),
    v = n(975571),
    y = n(793322),
    j = n(174768),
    R = n(586068),
    O = n(826050),
    L = n(652215),
    M = n(985018),
    D = n(171814);
let G = () =>
    (0, i.jsxs)("div", {
        className: D.p$,
        children: [
            (0, i.jsx)("div", { className: D.lv, children: M.intl.string(M.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: D.PA,
                children: (0, i.jsx)(d.MzZ, {
                    href: v.A.getArticleURL(L.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: M.intl.string(M.t["4iPfEO"]),
                }),
            }),
        ],
    });
class U extends s.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = C.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(R.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: D.MD, children: null != e ? e.name : null }),
        });
    }
}
let P = o.Ay.connectStores([I.Ay, f.A], (e) => {
        let { channel: t } = e;
        return {
            unread: I.Ay.hasUnread(t.id),
            mentions: I.Ay.getMentionCount(t.id),
            isMentionLowImportance: I.Ay.getIsMentionLowImportance(t.id),
            category: f.A.getChannel(t.parent_id),
        };
    })(U),
    w = o.Ay.connectStores([S.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: S.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(U),
    k = o.Ay.connectStores([x.default], (e) => {
        let { guild: t } = e;
        return { unread: x.default.hasUnread(t.id) };
    })(R.OS),
    V = o.Ay.connectStores([I.Ay, E.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = E.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === L.clD.ONLINE) && (n = L.clD.ONLINE),
            { mentions: I.Ay.getMentionCount(t.id), status: n }
        );
    })(R.nG),
    B = o.Ay.connectStores([f.A, I.Ay, E.A], (e) => {
        let { user: t } = e,
            n = f.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? I.Ay.getMentionCount(n) : 0,
            status: E.A.getStatus(t.id),
            isMobile: E.A.isMobileOnline(t.id),
        };
    })(R.KJ);
function H(e, t, n) {
    return (0, i.jsx)(
        c.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: D.ZT, children: t }) },
        e,
    );
}
class F extends s.PureComponent {
    scrollerRef = s.createRef();
    inputRef = s.createRef();
    _listId = (0, _.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        A.A.disable(), A.A.enableTemp(h.w);
    }
    componentWillUnmount() {
        A.A.disableTemp(), A.A.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: i } = this.state,
            { selectedIndex: s } = this.props,
            { current: l } = this.scrollerRef;
        null != l &&
            (i !== t.query
                ? l.scrollTo({ to: 0 })
                : n && s >= 0 && l.scrollToIndex({ section: 0, row: s, padding: 10 }));
    }
    close() {
        (0, y.jD)();
    }
    search(e) {
        this.setState({ query: e }), (0, y.$P)(e);
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
        this.state.mouseFocusDisabled || (0, y.wf)(this.props.results.indexOf(e));
    };
    selectResult = (e) => {
        (0, y.F6)(e, this.props.queryMode === m.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case m.rD.GUILD:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("43600"),
                        n.e("68587"),
                        n.e("63379"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("21968"),
                        n.e("35894"),
                        n.e("67231"),
                        n.e("50796"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("39048"),
                        n.e("56475"),
                        n.e("54469"),
                        n.e("57498"),
                    ]).then(n.bind(n, 544676));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: y.jD, hideSettings: !0 });
                });
            case m.rD.TEXT_CHANNEL:
            case m.rD.VOICE_CHANNEL:
                let s = t.record,
                    l = C.A.getGuild(s.getGuildId());
                if (null == l) return;
                switch (s.type) {
                    case L.rbe.GUILD_TEXT:
                    case L.rbe.GUILD_ANNOUNCEMENT:
                    case L.rbe.GUILD_FORUM:
                    case L.rbe.GUILD_MEDIA:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                                n.bind(n, 370372),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, channel: s, guild: l, onSelect: y.jD });
                        });
                    case L.rbe.GUILD_VOICE:
                    case L.rbe.GUILD_STAGE_VOICE:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("57287"),
                                n.e("40394"),
                                n.e("18159"),
                            ]).then(n.bind(n, 698193));
                            return (t) => (0, i.jsx)(e, { ...t, channel: s, guild: l, onSelect: y.jD });
                        });
                    case L.rbe.ANNOUNCEMENT_THREAD:
                    case L.rbe.PUBLIC_THREAD:
                    case L.rbe.PRIVATE_THREAD:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: s, onSelect: y.jD });
                        });
                    case L.rbe.GUILD_STORE:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: s, guild: l, onSelect: y.jD });
                        });
                    case L.rbe.GUILD_DIRECTORY:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: s });
                        });
                }
                break;
            case m.rD.GROUP_DM:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: N.A.getChannelId() === t.record.id,
                            onSelect: y.jD,
                        });
                });
            case m.rD.USER:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                        n.bind(n, 668569),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, user: t.record, onSelect: y.jD });
                });
        }
    };
    handleKeyDown = (e) => {
        let { mouseFocusDisabled: t, query: n } = this.state,
            { results: i } = this.props;
        !1 === t && this.setState({ mouseFocusDisabled: !0 });
        let s = e.key.toLowerCase(),
            { selectedIndex: l } = this.props;
        switch (s) {
            case "escape":
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, y.jD)();
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, y.jD)());
                return;
            case "enter": {
                if (-1 === l) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[l];
                null != t && this.selectResult(t);
                return;
            }
            case "arrowup":
                l = (0, m.Vv)(m.vB.UP, l, i);
                break;
            case "arrowdown":
                l = (0, m.Vv)(m.vB.DOWN, l, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                l = (0, m.Vv)(m.vB.DOWN, l, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                l = (0, m.Vv)(m.vB.UP, l, i);
                break;
            default:
                return;
        }
        e.preventDefault(), (0, y.wf)(l);
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
            s = t.length > 0 && "" !== n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(b.EG, { event: L.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(d.vN3, {
                    children: (0, i.jsx)("input", {
                        className: D.hF,
                        "aria-label": M.intl.string(M.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": s,
                        "aria-activedescendant": s ? this.getRowId(e) : void 0,
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
                ? (0, i.jsx)(G, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(d.Eie, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": M.intl.string(M.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: D.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: D.sN, children: e() });
    }
    focusNode(e) {
        T._.dispatch(L.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: s } = this.props,
            { showScores: l } = p.A.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
        switch (n.type) {
            case m.rD.HEADER:
                return (0, i.jsx)(R.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case m.rD.TEXT_CHANNEL:
                return (0, i.jsx)(
                    P,
                    {
                        id: this.getRowId(t),
                        focused: s >= 0 && t === s,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: l ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case m.rD.VOICE_CHANNEL:
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
                        score: l ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case m.rD.GUILD:
                return (0, i.jsx)(
                    k,
                    {
                        id: this.getRowId(t),
                        focused: s >= 0 && t === s,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        guild: n.record,
                        score: l ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case m.rD.USER:
                return (0, i.jsx)(
                    B,
                    {
                        id: this.getRowId(t),
                        focused: s >= 0 && t === s,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        user: n.record,
                        comparator: n.comparator,
                        score: l ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case m.rD.GROUP_DM:
                return (0, i.jsx)(
                    V,
                    {
                        id: this.getRowId(t),
                        focused: s >= 0 && t === s,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        channel: n.record,
                        score: l ? n.score : void 0,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case m.rD.APPLICATION:
                return (0, i.jsx)(
                    R.lg,
                    {
                        id: this.getRowId(t),
                        focused: s >= 0 && t === s,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        application: n.record,
                    },
                    `${n.type}-${n.record.id}`,
                );
            case m.rD.LINK:
                return (0, i.jsx)(
                    R.N_,
                    {
                        focused: s >= 0 && t === s,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        link: n.record,
                        score: l ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            case m.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    R.vw,
                    {
                        focused: s >= 0 && t === s,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        navigationRecord: n.record,
                        score: l ? n.score : void 0,
                        id: this.getRowId(t),
                    },
                    `${n.type}-${n.record.id}`,
                );
            default:
                return null;
        }
    };
    renderProtip() {
        return (0, i.jsx)(g.A, {
            className: r()(D.PP, { [D.ov]: this.state.query.length > 0 }),
            type: g.A.Types.INLINE,
            children: M.intl.format(M.t.wukqXQ, {
                userSymbolHook: (e, t) => H(t, m.AT.USER, M.intl.string(M.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => H(t, m.AT.TEXT_CHANNEL, M.intl.string(M.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => H(t, m.AT.VOICE_CHANNEL, M.intl.string(M.t["jz+hJp"])),
                guildSymbolHook: (e, t) => H(t, m.AT.GUILD, M.intl.string(M.t.WuwCWi)),
                helpdeskArticle: v.A.getArticleURL(L.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(O.A, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(a.dWK, {
            "aria-label": M.intl.string(M.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: D.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function K(e) {
    let t = (0, o.cf)([j.A], () => j.A.getProps());
    return (0, i.jsx)(F, { ...t, ...e });
}
