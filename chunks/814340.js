n.d(t, { A: () => X }), n(667532);
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
    g = n(629357),
    m = n(329308),
    p = n(599677),
    _ = n(12351),
    x = n(915089),
    f = n(360619),
    E = n(734057),
    C = n(458294),
    I = n(71393),
    S = n(290863),
    b = n(222823),
    N = n(309010),
    T = n(607567),
    j = n(248465),
    v = n(234320),
    y = n(203982),
    R = n(975571),
    O = n(793322),
    L = n(174768),
    D = n(586068),
    M = n(826050),
    G = n(818039),
    U = n(652215),
    P = n(985018),
    k = n(171814);
let w = () =>
    (0, i.jsxs)("div", {
        className: k.p$,
        children: [
            (0, i.jsx)("div", { className: k.lv, children: P.intl.string(P.t.bpbATE) }),
            (0, i.jsx)("div", {
                className: k.PA,
                children: (0, i.jsx)(c.MzZ, {
                    href: R.A.getArticleURL(U.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: P.intl.string(P.t["4iPfEO"]),
                }),
            }),
        ],
    });
class V extends l.Component {
    static defaultProps = { unread: !1 };
    render() {
        let e = I.A.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(D.c3, {
            ...this.props,
            children: (0, i.jsx)("div", { className: k.MD, children: null != e ? e.name : null }),
        });
    }
}
let B = o.Ay.connectStores([b.Ay, E.A], (e) => {
        let { channel: t } = e;
        return {
            unread: b.Ay.hasUnread(t.id),
            mentions: b.Ay.getMentionCount(t.id),
            isMentionLowImportance: b.Ay.getIsMentionLowImportance(t.id),
            category: E.A.getChannel(t.parent_id),
        };
    })(V),
    H = o.Ay.connectStores([T.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: T.Ay.getVoiceStates(t.guild_id)[t.id] };
    })(V),
    F = o.Ay.connectStores([C.default], (e) => {
        let { guild: t } = e;
        return { unread: C.default.hasUnread(t.id) };
    })(D.OS),
    Y = o.Ay.connectStores([b.Ay, S.A], (e) => {
        let { channel: t } = e,
            n = null,
            i = S.A.getState().statuses;
        return (
            t.recipients?.some((e) => i[e] === U.clD.ONLINE) && (n = U.clD.ONLINE),
            { mentions: b.Ay.getMentionCount(t.id), status: n }
        );
    })(D.nG),
    W = o.Ay.connectStores([E.A, b.Ay, S.A], (e) => {
        let { user: t } = e,
            n = E.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? b.Ay.getMentionCount(n) : 0,
            status: S.A.getStatus(t.id),
            isMobile: S.A.isMobileOnline(t.id),
        };
    })(D.KJ);
function K(e, t, n) {
    return (0, i.jsx)(
        d.m,
        { __unsupportedReactNodeAsText: n, children: (0, i.jsx)("span", { className: k.ZT, children: t }) },
        e,
    );
}
class z extends l.PureComponent {
    scrollerRef = l.createRef();
    inputRef = l.createRef();
    _listId = (0, x.Ld)();
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
        (0, O.jD)();
    }
    search(e) {
        this.setState({ query: e }), (0, O.$P)(e);
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
        this.state.mouseFocusDisabled || (0, O.wf)(this.props.results.indexOf(e));
    };
    selectResult = (e) => {
        (0, O.F6)(e, this.props.queryMode === g.rD.TEXT_CHANNEL);
    };
    handleContextMenu = (e) => {
        let t = this.props.results[this.props.selectedIndex];
        switch (t.type) {
            case g.rD.GUILD:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("68587"),
                        n.e("43600"),
                        n.e("63379"),
                        n.e("56026"),
                        n.e("16301"),
                        n.e("22191"),
                        n.e("25961"),
                        n.e("21968"),
                        n.e("35894"),
                        n.e("50796"),
                        n.e("8458"),
                        n.e("11810"),
                        n.e("39048"),
                        n.e("36290"),
                        n.e("54469"),
                        n.e("70084"),
                    ]).then(n.bind(n, 544676));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t.record, onSelect: O.jD, hideSettings: !0 });
                });
            case g.rD.TEXT_CHANNEL:
            case g.rD.VOICE_CHANNEL:
                let l = t.record,
                    s = I.A.getGuild(l.getGuildId());
                if (null == s) return;
                switch (l.type) {
                    case U.rbe.GUILD_TEXT:
                    case U.rbe.GUILD_ANNOUNCEMENT:
                    case U.rbe.GUILD_FORUM:
                    case U.rbe.GUILD_MEDIA:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(
                                n.bind(n, 370372),
                            );
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: O.jD });
                        });
                    case U.rbe.GUILD_VOICE:
                    case U.rbe.GUILD_STAGE_VOICE:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("57287"),
                                n.e("40394"),
                                n.e("30997"),
                            ]).then(n.bind(n, 698193));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: O.jD });
                        });
                    case U.rbe.ANNOUNCEMENT_THREAD:
                    case U.rbe.PUBLIC_THREAD:
                    case U.rbe.PRIVATE_THREAD:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, onSelect: O.jD });
                        });
                    case U.rbe.GUILD_STORE:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l, guild: s, onSelect: O.jD });
                        });
                    case U.rbe.GUILD_DIRECTORY:
                        return (0, u.L3)(e, async () => {
                            let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                            return (t) => (0, i.jsx)(e, { ...t, channel: l });
                        });
                }
                break;
            case g.rD.GROUP_DM:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t.record,
                            selected: N.A.getChannelId() === t.record.id,
                            onSelect: O.jD,
                        });
                });
            case g.rD.USER:
                return (0, u.L3)(e, async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(
                        n.bind(n, 668569),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, user: t.record, onSelect: O.jD });
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
                e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, O.jD)();
                return;
            case "k":
                (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, O.jD)());
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
        e.preventDefault(), (0, O.wf)(s);
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
                (0, i.jsx)(v.EG, { event: U.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(c.vN3, {
                    children: (0, i.jsx)("input", {
                        className: k.hF,
                        "aria-label": P.intl.string(P.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": l,
                        "aria-activedescendant": l ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: P.intl.string(P.t.VtvewW),
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
                ? (0, i.jsx)(w, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(c.Eie, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": P.intl.string(P.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: k.XG,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", { className: k.sN, children: e() });
    }
    focusNode(e) {
        y._.dispatch(U.jej.QUICKSWITCHER_RESULT_FOCUS, { node: e });
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
                return (0, i.jsx)(D.Y9, { children: n.record.text }, `${n.type}-${n.record.id}`);
            case g.rD.TEXT_CHANNEL:
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
            case g.rD.VOICE_CHANNEL:
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
            case g.rD.GUILD:
                return (0, i.jsx)(
                    F,
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
                    W,
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
                    Y,
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
                    D.lg,
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
                    D.N_,
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
                    D.vw,
                    {
                        focused: l >= 0 && t === l,
                        onClick: () => this.selectResult(n),
                        onMouseEnter: () => this.focusResult(n),
                        onFocus: this.focusNode,
                        onContextMenu: this.handleContextMenu,
                        navigationRecord: n.record,
                        score: s ? n.score : void 0,
                        id: this.getRowId(t),
                        children:
                            n.record.type === m.t1.SETTINGS &&
                            (0, i.jsx)("div", { className: k.MD, children: P.intl.string(P.t["3D5yo/"]) }),
                    },
                    `${n.type}-${n.record.id}`,
                );
            default:
                return null;
        }
    };
    renderProtip() {
        return (0, i.jsx)(_.A, {
            className: a()(k.PP, { [k.ov]: this.state.query.length > 0 }),
            type: _.A.Types.INLINE,
            children: P.intl.format(P.t.wukqXQ, {
                userSymbolHook: (e, t) => K(t, g.AT.USER, P.intl.string(P.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => K(t, g.AT.TEXT_CHANNEL, P.intl.string(P.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => K(t, g.AT.VOICE_CHANNEL, P.intl.string(P.t["jz+hJp"])),
                guildSymbolHook: (e, t) => K(t, g.AT.GUILD, P.intl.string(P.t.WuwCWi)),
                helpdeskArticle: R.A.getArticleURL(U.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(M.A, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(r.dWK, {
            "aria-label": P.intl.string(P.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: k.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
}
function X(e) {
    let t = (0, o.cf)([L.A], () => L.A.getProps()),
        n = (0, f.PH)(),
        s = G.A.useExperiment({ location: "QuickSwitcher" }).enabled,
        a = l.useMemo(
            () =>
                s
                    ? Object.values(n)
                          .filter((e) => null != e.url)
                          .filter((e) => null == e.predicate || e.predicate())
                    : [],
            [n, s],
        );
    return (
        l.useLayoutEffect(() => {
            if (!s) return;
            let e = a
                .map((e) => ({
                    title: "string" == typeof e.label ? e.label : "",
                    searchableTitles: e.searchableTitles ?? [],
                    path: e.url,
                }))
                .filter((e) => "" !== e.title && null != e.path);
            e.unshift({
                title: P.intl.string(P.t["3D5yo/"]),
                searchableTitles: [P.intl.string(P.t["3D5yo/"])],
                path: U.BVt.SETTINGS("account"),
            }),
                (0, j.FR)(e);
        }, [a, s]),
        (0, i.jsx)(z, { ...t, ...e })
    );
}
