n.d(t, {
    A: () => Z,
}),
    n(65821),
    n(896048),
    n(747238),
    n(667532);
var r,
    l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(158954),
    c = n(311907),
    u = n(990078),
    d = n(397927),
    p = n(442433),
    h = n(390435),
    f = n(775121),
    g = n(629357),
    m = n(329308),
    b = n(599677),
    A = n(12351),
    y = n(915089),
    _ = n(360619),
    O = n(734057),
    j = n(458294),
    v = n(71393),
    x = n(290863),
    E = n(222823),
    C = n(309010),
    S = n(607567),
    I = n(248465),
    N = n(234320),
    T = n(203982),
    P = n(975571),
    w = n(793322),
    R = n(174768),
    D = n(586068),
    M = n(826050),
    L = n(818039),
    k = n(652215),
    G = n(985018),
    U = n(171814);

function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}

function F(e, t) {
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
let H = () =>
    (0, l.jsxs)("div", {
        className: U.p$,
        children: [
            (0, l.jsx)("div", {
                className: U.lv,
                children: G.intl.string(G.t.bpbATE),
            }),
            (0, l.jsx)("div", {
                className: U.PA,
                children: (0, l.jsx)(d.MzZ, {
                    href: P.A.getArticleURL(k.MVz.QUICK_SWITCHER_TUTORIAL),
                    children: G.intl.string(G.t["4iPfEO"]),
                }),
            }),
        ],
    });
class K extends (r = i.Component) {
    render() {
        let e = v.A.getGuild(this.props.channel.guild_id);
        return (0, l.jsx)(
            D.c3,
            F(V({}, this.props), {
                children: (0, l.jsx)("div", {
                    className: U.MD,
                    children: null != e ? e.name : null,
                }),
            }),
        );
    }
}
B(K, "defaultProps", {
    unread: !1,
});
let W = c.Ay.connectStores([E.Ay, O.A], (e) => {
        let { channel: t } = e;
        return {
            unread: E.Ay.hasUnread(t.id),
            mentions: E.Ay.getMentionCount(t.id),
            isMentionLowImportance: E.Ay.getIsMentionLowImportance(t.id),
            category: O.A.getChannel(t.parent_id),
        };
    })(K),
    z = c.Ay.connectStores([S.Ay], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return {
            voiceStates: S.Ay.getVoiceStates(t.guild_id)[t.id],
        };
    })(K),
    Y = c.Ay.connectStores([j.default], (e) => {
        let { guild: t } = e;
        return {
            unread: j.default.hasUnread(t.id),
        };
    })(D.OS),
    q = c.Ay.connectStores([E.Ay, x.A], (e) => {
        var t;
        let { channel: n } = e,
            r = null,
            l = x.A.getState().statuses;
        return (
            (null == (t = n.recipients) ? void 0 : t.some((e) => l[e] === k.clD.ONLINE)) && (r = k.clD.ONLINE),
            {
                mentions: E.Ay.getMentionCount(n.id),
                status: r,
            }
        );
    })(D.nG),
    X = c.Ay.connectStores([O.A, E.Ay, x.A], (e) => {
        let { user: t } = e,
            n = O.A.getDMFromUserId(t.id);
        return {
            mentions: null != n ? E.Ay.getMentionCount(n) : 0,
            status: x.A.getStatus(t.id),
            isMobile: x.A.isMobileOnline(t.id),
        };
    })(D.KJ);

function J(e, t, n) {
    return (0, l.jsx)(
        u.m,
        {
            __unsupportedReactNodeAsText: n,
            children: (0, l.jsx)("span", {
                className: U.ZT,
                children: t,
            }),
        },
        e,
    );
}
class Q extends i.PureComponent {
    componentDidMount() {
        f.A.disable(), f.A.enableTemp(h.w);
    }
    componentWillUnmount() {
        f.A.disableTemp(), f.A.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: r } = this.state,
            { selectedIndex: l } = this.props,
            { current: i } = this.scrollerRef;
        null != i &&
            (r !== t.query
                ? i.scrollTo({
                      to: 0,
                  })
                : n &&
                  l >= 0 &&
                  i.scrollToIndex({
                      section: 0,
                      row: l,
                      padding: 10,
                  }));
    }
    close() {
        (0, w.jD)();
    }
    search(e) {
        this.setState({
            query: e,
        }),
            (0, w.$P)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            r = t.length > 0 && "" !== n;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(N.EG, {
                    event: k.jej.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste,
                }),
                (0, l.jsx)(d.vN3, {
                    children: (0, l.jsx)("input", {
                        className: U.hF,
                        "aria-label": G.intl.string(G.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": r,
                        "aria-activedescendant": r ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: G.intl.string(G.t.VtvewW),
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
                ? (0, l.jsx)(H, {})
                : 0 === t.length
                  ? null
                  : (0, l.jsx)(d.Eie, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": G.intl.string(G.t.Wef5Do),
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
        return (0, l.jsx)("div", {
            className: U.sN,
            children: e(),
        });
    }
    focusNode(e) {
        T._.dispatch(k.jej.QUICKSWITCHER_RESULT_FOCUS, {
            node: e,
        });
    }
    getRowId(e) {
        return "quick-switcher-".concat(this._listId, "-item-").concat(e);
    }
    renderProtip() {
        return (0, l.jsx)(A.A, {
            className: a()(U.PP, {
                [U.ov]: this.state.query.length > 0,
            }),
            type: A.A.Types.INLINE,
            children: G.intl.format(G.t.wukqXQ, {
                userSymbolHook: (e, t) => J(t, g.AT.USER, G.intl.string(G.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => J(t, g.AT.TEXT_CHANNEL, G.intl.string(G.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => J(t, g.AT.VOICE_CHANNEL, G.intl.string(G.t["jz+hJp"])),
                guildSymbolHook: (e, t) => J(t, g.AT.GUILD, G.intl.string(G.t.WuwCWi)),
                helpdeskArticle: P.A.getArticleURL(k.MVz.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t
            ? null
            : (0, l.jsx)(M.A, {
                  hasQuery: e.length > 0 && n.length > 0,
              });
    }
    render() {
        return (0, l.jsx)(o.dWK, {
            "aria-label": G.intl.string(G.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, l.jsxs)("div", {
                className: U.rs,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            B(this, "scrollerRef", i.createRef()),
            B(this, "inputRef", i.createRef()),
            B(this, "_listId", (0, y.Ld)()),
            B(this, "state", {
                query: this.props.query,
                mouseFocusDisabled: !0,
            }),
            B(this, "handleInputChange", () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            B(this, "handleMouseMove", () => {
                let { mouseFocusDisabled: e } = this.state;
                !1 !== e &&
                    this.setState({
                        mouseFocusDisabled: !1,
                    });
            }),
            B(this, "focusResult", (e) => {
                this.state.mouseFocusDisabled || (0, w.wf)(this.props.results.indexOf(e));
            }),
            B(this, "selectResult", (e) => {
                (0, w.F6)(e, this.props.queryMode === g.rD.TEXT_CHANNEL);
            }),
            B(this, "handleContextMenu", (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case g.rD.GUILD:
                        return (0, p.L3)(e, async () => {
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
                                n.e("11810"),
                                n.e("8458"),
                                n.e("39048"),
                                n.e("36290"),
                                n.e("59735"),
                                n.e("54469"),
                                n.e("70084"),
                            ]).then(n.bind(n, 544676));
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    F(V({}, n), {
                                        guild: t.record,
                                        onSelect: w.jD,
                                        hideSettings: !0,
                                    }),
                                );
                        });
                    case g.rD.TEXT_CHANNEL:
                    case g.rD.VOICE_CHANNEL:
                        let r = t.record,
                            i = v.A.getGuild(r.getGuildId());
                        if (null == i) return;
                        switch (r.type) {
                            case k.rbe.GUILD_TEXT:
                            case k.rbe.GUILD_ANNOUNCEMENT:
                            case k.rbe.GUILD_FORUM:
                            case k.rbe.GUILD_MEDIA:
                                return (0, p.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("97262"),
                                        n.e("57287"),
                                        n.e("77666"),
                                    ]).then(n.bind(n, 370372));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            F(V({}, t), {
                                                channel: r,
                                                guild: i,
                                                onSelect: w.jD,
                                            }),
                                        );
                                });
                            case k.rbe.GUILD_VOICE:
                            case k.rbe.GUILD_STAGE_VOICE:
                                return (0, p.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("97262"),
                                        n.e("57287"),
                                        n.e("40394"),
                                        n.e("53378"),
                                    ]).then(n.bind(n, 698193));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            F(V({}, t), {
                                                channel: r,
                                                guild: i,
                                                onSelect: w.jD,
                                            }),
                                        );
                                });
                            case k.rbe.ANNOUNCEMENT_THREAD:
                            case k.rbe.PUBLIC_THREAD:
                            case k.rbe.PRIVATE_THREAD:
                                return (0, p.L3)(e, async () => {
                                    let { default: e } = await n.e("33").then(n.bind(n, 44536));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            F(V({}, t), {
                                                channel: r,
                                                onSelect: w.jD,
                                            }),
                                        );
                                });
                            case k.rbe.GUILD_STORE:
                                return (0, p.L3)(e, async () => {
                                    let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            F(V({}, t), {
                                                channel: r,
                                                guild: i,
                                                onSelect: w.jD,
                                            }),
                                        );
                                });
                            case k.rbe.GUILD_DIRECTORY:
                                return (0, p.L3)(e, async () => {
                                    let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            F(V({}, t), {
                                                channel: r,
                                            }),
                                        );
                                });
                        }
                        break;
                    case g.rD.GROUP_DM:
                        return (0, p.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    F(V({}, n), {
                                        channel: t.record,
                                        selected: C.A.getChannelId() === t.record.id,
                                        onSelect: w.jD,
                                    }),
                                );
                        });
                    case g.rD.USER:
                        return (0, p.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) =>
                                (0, l.jsx)(
                                    e,
                                    F(V({}, n), {
                                        user: t.record,
                                        onSelect: w.jD,
                                    }),
                                );
                        });
                }
            }),
            B(this, "handleKeyDown", (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: r } = this.props;
                !1 === t &&
                    this.setState({
                        mouseFocusDisabled: !0,
                    });
                let l = e.key.toLowerCase(),
                    { selectedIndex: i } = this.props;
                switch (l) {
                    case "escape":
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, w.jD)();
                        return;
                    case "k":
                        (!0 === e.ctrlKey || !0 === e.metaKey) &&
                            (e.preventDefault(), e.stopPropagation(), (0, w.jD)());
                        return;
                    case "enter": {
                        if (-1 === i) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = r[i];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case "arrowup":
                        i = (0, g.Vv)(g.vB.UP, i, r);
                        break;
                    case "arrowdown":
                        i = (0, g.Vv)(g.vB.DOWN, i, r);
                        break;
                    case "n":
                        if (!e.ctrlKey) return;
                        i = (0, g.Vv)(g.vB.DOWN, i, r);
                        break;
                    case "p":
                        if (!e.ctrlKey) return;
                        i = (0, g.Vv)(g.vB.UP, i, r);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, w.wf)(i);
            }),
            B(this, "handleGlobalPaste", (e) => {
                var t, n;
                let { event: r } = e,
                    l = null == (t = r.clipboardData) ? void 0 : t.getData("text");
                null != l &&
                    (r.preventDefault(),
                    r.stopPropagation(),
                    this.search(this.state.query + l),
                    null == (n = this.inputRef.current) || n.focus());
            }),
            B(this, "renderRow", (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: r } = this.props,
                    { showScores: i } = b.A.getCurrentConfig(
                        {
                            location: "62f4be_1",
                        },
                        {
                            autoTrackExposure: !1,
                        },
                    );
                switch (n.type) {
                    case g.rD.HEADER:
                        return (0, l.jsx)(
                            D.Y9,
                            {
                                children: n.record.text,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.TEXT_CHANNEL:
                        return (0, l.jsx)(
                            W,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: i ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.VOICE_CHANNEL:
                        return (0, l.jsx)(
                            z,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: i ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.GUILD:
                        return (0, l.jsx)(
                            Y,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: n.record,
                                score: i ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.USER:
                        return (0, l.jsx)(
                            X,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                user: n.record,
                                comparator: n.comparator,
                                score: i ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.GROUP_DM:
                        return (0, l.jsx)(
                            q,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: i ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.APPLICATION:
                        return (0, l.jsx)(
                            D.lg,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                application: n.record,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.LINK:
                        return (0, l.jsx)(
                            D.N_,
                            {
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                link: n.record,
                                score: i ? n.score : void 0,
                                id: this.getRowId(t),
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.rD.IN_APP_NAVIGATION:
                        return (0, l.jsx)(
                            D.vw,
                            {
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                navigationRecord: n.record,
                                score: i ? n.score : void 0,
                                id: this.getRowId(t),
                                children:
                                    n.record.type === m.t1.SETTINGS &&
                                    (0, l.jsx)("div", {
                                        className: U.MD,
                                        children: G.intl.string(G.t["3D5yo/"]),
                                    }),
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    default:
                        return null;
                }
            });
    }
}

function Z(e) {
    let t = (0, c.cf)([R.A], () => R.A.getProps()),
        n = (0, _.PH)(),
        r = L.A.useExperiment({
            location: "QuickSwitcher",
        }).enabled,
        s = i.useMemo(
            () =>
                r
                    ? Object.values(n)
                          .filter((e) => null != e.url)
                          .filter((e) => null == e.predicate || e.predicate())
                    : [],
            [n, r],
        );
    return (
        i.useLayoutEffect(() => {
            if (!r) return;
            let e = s
                .map((e) => {
                    var t;
                    return {
                        title: "string" == typeof e.label ? e.label : "",
                        searchableTitles: null != (t = e.searchableTitles) ? t : [],
                        path: e.url,
                    };
                })
                .filter((e) => "" !== e.title && null != e.path);
            e.unshift({
                title: G.intl.string(G.t["3D5yo/"]),
                searchableTitles: [G.intl.string(G.t["3D5yo/"])],
                path: k.BVt.SETTINGS("account"),
            }),
                (0, I.FR)(e);
        }, [s, r]),
        (0, l.jsx)(Q, V({}, t, e))
    );
}
