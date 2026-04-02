n.d(t, { A: () => K });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(158954),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(442433),
    h = n(390435),
    A = n(775121),
    _ = n(629357),
    m = n(599677),
    g = n(12351),
    p = n(915089),
    f = n(734057),
    x = n(458294),
    E = n(71393),
    I = n(290863),
    C = n(222823),
    N = n(309010),
    T = n(607567),
    S = n(234320),
    b = n(203982),
    y = n(975571),
    v = n(793322),
    j = n(174768),
    R = n(586068),
    O = n(826050),
    L = n(652215),
    M = n(985018),
    D = n(992928);
let U = () =>
    (0, i.jsxs)("div", {
        className: D.p$,
        children: [
            (0, i.jsx)("div", { className: D.lv, children: M.intl.string(M.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: D.PA,
                children: (0, i.jsx)(c.MzZ, {
                    href: y.A.getArticleURL(L.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: M.intl.string(M.t["4iPfEO"]),
                }),
            }),
        ],
    });
class G extends l.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = E.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(R.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: D.MD, children: null != e ? e.name : null }),
        });
    }
}
let P = o.Ay.connectStores([C.Ay, f.A], (e) => {
        let { channel: t } = e;
        return {
            unread: C.Ay.hasUnread(t.id),
            mentions: C.Ay.getMentionCount(t.id),
            isMentionLowImportance: C.Ay.getIsMentionLowImportance(t.id),
            category: f.A.getChannel(t.parent_id),
        };
    })(G),
    k = o.Ay.connectStores([T.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: T.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(G),
    w = o.Ay.connectStores([x.default], (e) => {
        let { guild: t } = e;
        return { unread: x.default.hasUnread(t.id) };
    })(R.OS),
    B = o.Ay.connectStores([C.Ay, I.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = I.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === L.clD.ONLINE) && (n = L.clD.ONLINE),
            { mentions: C.Ay.getMentionCount(t.id), status: n }
        );
    })(R.nG),
    V = o.Ay.connectStores([f.A, C.Ay, I.A], (e) => {
        let { user: t } = e,
            n = f.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? C.Ay.getMentionCount(n) : 0,
            status: I.A.getStatus(t.id),
            isMobile: I.A.isMobileOnline(t.id),
        };
    })(R.KJ);
function H(e, t, n) {
    return (0, i.jsx)(
        d.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: D.ZT, children: t }) },
        e,
    );
}
class F extends l.PureComponent {
    scrollerRef = l.createRef();
    inputRef = l.createRef();
    _listId = (0, p.Ld)();
    state = { query: this.props.query, mouseFocusDisabled: !0 };
    componentDidMount() {
        A.A.disable(), A.A.enableTemp(h.w);
    }
    componentWillUnmount() {
        A.A.disableTemp(), A.A.enable();
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
        (0, v.jD)();
    }
    search(e) {
        this.setState({ query: e }), (0, v.$P)(e);
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
        this.state.mouseFocusDisabled || (0, v.wf)(this.props.results.indexOf(e));
    };
    selectResult = (e) => {
        (0, v.F6)(e, this.props.queryMode === _.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case _.rD.GUILD:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("43600"),
                        n.e("68587"),
                        n.e("63379"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("33144"),
                        n.e("35894"),
                        n.e("50796"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("4260"),
                        n.e("30453"),
                        n.e("56475"),
                        n.e("54469"),
                        n.e("70522"),
                    ]).then(n.bind(n, 544676));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: v.jD, hideSettings: !0 });
                });
            case _.rD.TEXT_CHANNEL:
            case _.rD.VOICE_CHANNEL:
                let l = t.record,
                    s = E.A.getGuild(l.getGuildId());
                if (null == s) return;
                switch (l.type) {
                    case L.rbe.GUILD_TEXT:
                    case L.rbe.GUILD_ANNOUNCEMENT:
                    case L.rbe.GUILD_FORUM:
                    case L.rbe.GUILD_MEDIA:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                                n.bind(n, 370372),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: v.jD });
                        });
                    case L.rbe.GUILD_VOICE:
                    case L.rbe.GUILD_STAGE_VOICE:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("57287"),
                                n.e("40394"),
                                n.e("30997"),
                            ]).then(n.bind(n, 698193));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: v.jD });
                        });
                    case L.rbe.ANNOUNCEMENT_THREAD:
                    case L.rbe.PUBLIC_THREAD:
                    case L.rbe.PRIVATE_THREAD:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, onSelect: v.jD });
                        });
                    case L.rbe.GUILD_STORE:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: v.jD });
                        });
                    case L.rbe.GUILD_DIRECTORY:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l });
                        });
                }
                break;
            case _.rD.GROUP_DM:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: N.A.getChannelId() === t.record.id,
                            onSelect: v.jD,
                        });
                });
            case _.rD.USER:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("84821")]).then(
                        n.bind(n, 668569),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, user: t.record, onSelect: v.jD });
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
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, v.jD)();
                return;
            case "k":
            case "t":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, v.jD)());
                return;
            case "enter": {
                if (-1 === s) return;
                if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                let t = i[s];
                null != t && this.selectResult(t);
                return;
            }
            case "arrowup":
                s = (0, _.Vv)(_.vB.UP, s, i);
                break;
            case "arrowdown":
                s = (0, _.Vv)(_.vB.DOWN, s, i);
                break;
            case "n":
                if (!e.ctrlKey) return;
                s = (0, _.Vv)(_.vB.DOWN, s, i);
                break;
            case "p":
                if (!e.ctrlKey) return;
                s = (0, _.Vv)(_.vB.UP, s, i);
                break;
            default:
                return;
        }
        e.preventDefault(), (0, v.wf)(s);
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
                (0, i.jsx)(S.EG, { event: L.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(c.vN3, {
                    children: (0, i.jsx)("input", {
                        className: D.hF,
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
                ? (0, i.jsx)(U, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(c.Eie, {
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
        b._.dispatch(L.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return `quick-switcher-${this._listId}-item-${e}`;
    }
    renderRow = (e) => {
        let { row: t } = e,
            n = this.props.results[t],
            { selectedIndex: l } = this.props,
            { showScores: s } = m.A.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
        switch (n.type) {
            case _.rD.HEADER:
                return (0, i.jsx)(R.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case _.rD.TEXT_CHANNEL:
                return (0, i.jsx)(
                    P,
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
            case _.rD.VOICE_CHANNEL:
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
            case _.rD.GUILD:
                return (0, i.jsx)(
                    w,
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
            case _.rD.USER:
                return (0, i.jsx)(
                    V,
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
            case _.rD.GROUP_DM:
                return (0, i.jsx)(
                    B,
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
            case _.rD.APPLICATION:
                return (0, i.jsx)(
                    R.lg,
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
            case _.rD.LINK:
                return (0, i.jsx)(
                    R.N_,
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
            case _.rD.IN_APP_NAVIGATION:
                return (0, i.jsx)(
                    R.vw,
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
        return (0, i.jsx)(g.A, {
            className: a()(D.PP, { [D.ov]: this.state.query.length > 0 }),
            type: g.A.Types.INLINE,
            children: M.intl.format(M.t.wukqXQ, {
                userSymbolHook: (e, t) => H(t, _.AT.USER, M.intl.string(M.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => H(t, _.AT.TEXT_CHANNEL, M.intl.string(M.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => H(t, _.AT.VOICE_CHANNEL, M.intl.string(M.t["jz+hJp"])),
                guildSymbolHook: (e, t) => H(t, _.AT.GUILD, M.intl.string(M.t.WuwCWi)),
                helpdeskArticle: y.A.getArticleURL(L.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(O.A, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(r.dWK, {
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
