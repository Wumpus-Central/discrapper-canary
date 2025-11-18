n.d(t, { Z: () => J }), n(415506), n(388685), n(35282), n(290780);
var r,
    i = n(54381),
    l = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    p = n(239091),
    f = n(134616),
    h = n(714338),
    g = n(212819),
    m = n(815372),
    b = n(14429),
    _ = n(576855),
    y = n(313201),
    O = n(991346),
    v = n(592125),
    j = n(888369),
    x = n(430824),
    C = n(158776),
    E = n(306680),
    S = n(944486),
    I = n(938475),
    P = n(483360),
    N = n(459273),
    Z = n(585483),
    w = n(63063),
    T = n(51596),
    A = n(823385),
    R = n(415795),
    D = n(670512),
    L = n(558631),
    M = n(981631),
    k = n(388032),
    G = n(227129);
function U(e, t, n) {
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
function B(e) {
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
                U(e, t, n[t]);
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
let V = () =>
    (0, i.jsxs)("div", {
        className: G.emptyState,
        children: [
            (0, i.jsx)("div", {
                className: G.emptyStateNote,
                children: k.intl.string(k.t.bpbATE),
            }),
            (0, i.jsx)("div", {
                className: G.emptyStateCTA,
                children: (0, i.jsx)(d.Anchor, {
                    href: w.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
                    children: k.intl.string(k.t["4iPfEO"]),
                }),
            }),
        ],
    });
class H extends (r = l.Component) {
    render() {
        let e = x.Z.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(
            R.$W,
            F(B({}, this.props), {
                children: (0, i.jsx)("div", {
                    className: G.miscContainer,
                    children: null != e ? e.name : null,
                }),
            }),
        );
    }
}
U(H, "defaultProps", { unread: !1 });
let z = c.ZP.connectStores([E.ZP, v.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: E.ZP.hasUnread(t.id),
            mentions: E.ZP.getMentionCount(t.id),
            isMentionLowImportance: E.ZP.getIsMentionLowImportance(t.id),
            category: v.Z.getChannel(t.parent_id),
        };
    })(H),
    W = c.ZP.connectStores([I.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: I.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(H),
    K = c.ZP.connectStores([j.default], (e) => {
        let { guild: t } = e;
        return { unread: j.default.hasUnread(t.id) };
    })(R.ic),
    Y = c.ZP.connectStores([E.ZP, C.Z], (e) => {
        var t;
        let { channel: n } = e,
            r = null,
            i = C.Z.getState().statuses;
        return (
            (null == (t = n.recipients) ? void 0 : t.some((e) => i[e] === M.Skl.ONLINE)) && (r = M.Skl.ONLINE),
            {
                mentions: E.ZP.getMentionCount(n.id),
                status: r,
            }
        );
    })(R.PZ),
    q = c.ZP.connectStores([v.Z, E.ZP, C.Z], (e) => {
        let { user: t } = e,
            n = v.Z.getDMFromUserId(t.id);
        return {
            mentions: null != n ? E.ZP.getMentionCount(n) : 0,
            status: C.Z.getStatus(t.id),
            isMobile: C.Z.isMobileOnline(t.id),
        };
    })(R.n5);
function X(e, t, n) {
    return (0, i.jsx)(
        u.u,
        {
            __unsupportedReactNodeAsText: n,
            children: (0, i.jsx)("span", {
                className: G.autocompleteQuerySymbol,
                children: t,
            }),
        },
        e,
    );
}
class Q extends l.PureComponent {
    componentDidMount() {
        h.Z.disable(), h.Z.enableTemp(f.u);
    }
    componentWillUnmount() {
        h.Z.disableTemp(), h.Z.enable();
    }
    componentDidUpdate(e, t) {
        let { mouseFocusDisabled: n, query: r } = this.state,
            { selectedIndex: i } = this.props,
            { current: l } = this.scrollerRef;
        null != l &&
            (r !== t.query
                ? l.scrollTo({ to: 0 })
                : n &&
                  i >= 0 &&
                  l.scrollToIndex({
                      section: 0,
                      row: i,
                      padding: 10,
                  }));
    }
    close() {
        (0, T.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, T.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            r = t.length > 0 && "" !== n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.d9, {
                    event: M.CkL.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste,
                }),
                (0, i.jsx)(d.tEY, {
                    children: (0, i.jsx)("input", {
                        className: G.input,
                        "aria-label": k.intl.string(k.t.ZvKwYa),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": r,
                        "aria-activedescendant": r ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: k.intl.string(k.t.VtvewW),
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
                ? (0, i.jsx)(V, {})
                : 0 === t.length
                  ? null
                  : (0, i.jsx)(d._2F, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": k.intl.string(k.t.Wef5Do),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: G.scroller,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", {
            className: G.resultsArea,
            children: e(),
        });
    }
    focusNode(e) {
        Z.S.dispatch(M.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return "quick-switcher-".concat(this._listId, "-item-").concat(e);
    }
    renderProtip() {
        return (0, i.jsx)(_.Z, {
            className: a()(G.protip, { [G.hasContent]: this.state.query.length > 0 }),
            type: _.Z.Types.INLINE,
            children: k.intl.format(k.t.wukqXQ, {
                userSymbolHook: (e, t) => X(t, g.xQ.USER, k.intl.string(k.t.GQRCGn)),
                textChannelSymbolHook: (e, t) => X(t, g.xQ.TEXT_CHANNEL, k.intl.string(k.t.wrwhuZ)),
                voiceChannelSymbolHook: (e, t) => X(t, g.xQ.VOICE_CHANNEL, k.intl.string(k.t["jz+hJp"])),
                guildSymbolHook: (e, t) => X(t, g.xQ.GUILD, k.intl.string(k.t.WuwCWi)),
                helpdeskArticle: w.Z.getArticleURL(M.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(D.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(s.IX, {
            "aria-label": k.intl.string(k.t.ZvKwYa),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: G.quickswitcher,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            U(this, "scrollerRef", l.createRef()),
            U(this, "inputRef", l.createRef()),
            U(this, "_listId", (0, y.hQ)()),
            U(this, "state", {
                query: this.props.query,
                mouseFocusDisabled: !0,
            }),
            U(this, "handleInputChange", () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            U(this, "handleMouseMove", () => {
                let { mouseFocusDisabled: e } = this.state;
                !1 !== e && this.setState({ mouseFocusDisabled: !1 });
            }),
            U(this, "focusResult", (e) => {
                this.state.mouseFocusDisabled || (0, T.tF)(this.props.results.indexOf(e));
            }),
            U(this, "selectResult", (e) => {
                (0, T.Se)(e, this.props.queryMode === g.h8.TEXT_CHANNEL);
            }),
            U(this, "handleContextMenu", (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case g.h8.GUILD:
                        return (0, p.jW)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("70363"),
                                n.e("36599"),
                                n.e("7654"),
                                n.e("76692"),
                                n.e("8271"),
                                n.e("15851"),
                                n.e("51453"),
                                n.e("845"),
                                n.e("99063"),
                                n.e("6850"),
                                n.e("58227"),
                                n.e("44686"),
                                n.e("32923"),
                                n.e("22516"),
                                n.e("87154"),
                                n.e("33213"),
                                n.e("8209"),
                            ]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    F(B({}, n), {
                                        guild: t.record,
                                        onSelect: T.Cp,
                                        hideSettings: !0,
                                    }),
                                );
                        });
                    case g.h8.TEXT_CHANNEL:
                    case g.h8.VOICE_CHANNEL:
                        let r = t.record,
                            l = x.Z.getGuild(r.getGuildId());
                        if (null == l) return;
                        switch (r.type) {
                            case M.d4z.GUILD_TEXT:
                            case M.d4z.GUILD_ANNOUNCEMENT:
                            case M.d4z.GUILD_FORUM:
                            case M.d4z.GUILD_MEDIA:
                                return (0, p.jW)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("79695"),
                                        n.e("18320"),
                                        n.e("44011"),
                                    ]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            F(B({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: T.Cp,
                                            }),
                                        );
                                });
                            case M.d4z.GUILD_VOICE:
                            case M.d4z.GUILD_STAGE_VOICE:
                                return (0, p.jW)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("79695"),
                                        n.e("18320"),
                                        n.e("83331"),
                                        n.e("81070"),
                                    ]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            F(B({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: T.Cp,
                                            }),
                                        );
                                });
                            case M.d4z.ANNOUNCEMENT_THREAD:
                            case M.d4z.PUBLIC_THREAD:
                            case M.d4z.PRIVATE_THREAD:
                                return (0, p.jW)(e, async () => {
                                    let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            F(B({}, t), {
                                                channel: r,
                                                onSelect: T.Cp,
                                            }),
                                        );
                                });
                            case M.d4z.GUILD_STORE:
                                return (0, p.jW)(e, async () => {
                                    let { default: e } = await n.e("99905").then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            F(B({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: T.Cp,
                                            }),
                                        );
                                });
                            case M.d4z.GUILD_DIRECTORY:
                                return (0, p.jW)(e, async () => {
                                    let { default: e } = await n.e("70623").then(n.bind(n, 99334));
                                    return (t) => (0, i.jsx)(e, F(B({}, t), { channel: r }));
                                });
                        }
                        break;
                    case g.h8.GROUP_DM:
                        return (0, p.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("25421")]).then(
                                n.bind(n, 354741),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    F(B({}, n), {
                                        channel: t.record,
                                        selected: S.Z.getChannelId() === t.record.id,
                                        onSelect: T.Cp,
                                    }),
                                );
                        });
                    case g.h8.USER:
                        return (0, p.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("73444")]).then(
                                n.bind(n, 881351),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    F(B({}, n), {
                                        user: t.record,
                                        onSelect: T.Cp,
                                    }),
                                );
                        });
                }
            }),
            U(this, "handleKeyDown", (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: r } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let i = e.key.toLowerCase(),
                    { selectedIndex: l } = this.props;
                switch (i) {
                    case "escape":
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, T.Cp)();
                        return;
                    case "k":
                        (!0 === e.ctrlKey || !0 === e.metaKey) &&
                            (e.preventDefault(), e.stopPropagation(), (0, T.Cp)());
                        return;
                    case "enter": {
                        if (-1 === l) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = r[l];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case "arrowup":
                        l = (0, g.gJ)(g.a8.UP, l, r);
                        break;
                    case "arrowdown":
                        l = (0, g.gJ)(g.a8.DOWN, l, r);
                        break;
                    case "n":
                        if (!e.ctrlKey) return;
                        l = (0, g.gJ)(g.a8.DOWN, l, r);
                        break;
                    case "p":
                        if (!e.ctrlKey) return;
                        l = (0, g.gJ)(g.a8.UP, l, r);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, T.tF)(l);
            }),
            U(this, "handleGlobalPaste", (e) => {
                var t, n;
                let { event: r } = e,
                    i = null == (t = r.clipboardData) ? void 0 : t.getData("text");
                null != i &&
                    (r.preventDefault(),
                    r.stopPropagation(),
                    this.search(this.state.query + i),
                    null == (n = this.inputRef.current) || n.focus());
            }),
            U(this, "renderRow", (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: r } = this.props,
                    { showScores: l } = b.Z.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case g.h8.HEADER:
                        return (0, i.jsx)(
                            R.h4,
                            { children: n.record.text },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.h8.TEXT_CHANNEL:
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
                                score: l ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.h8.VOICE_CHANNEL:
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
                                score: l ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.h8.GUILD:
                        return (0, i.jsx)(
                            K,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                guild: n.record,
                                score: l ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.h8.USER:
                        return (0, i.jsx)(
                            q,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                user: n.record,
                                comparator: n.comparator,
                                score: l ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.h8.GROUP_DM:
                        return (0, i.jsx)(
                            Y,
                            {
                                id: this.getRowId(t),
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                channel: n.record,
                                score: l ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.h8.APPLICATION:
                        return (0, i.jsx)(
                            R.Mx,
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
                    case g.h8.LINK:
                        return (0, i.jsx)(
                            R.rU,
                            {
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                link: n.record,
                                score: l ? n.score : void 0,
                                id: this.getRowId(t),
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case g.h8.IN_APP_NAVIGATION:
                        return (0, i.jsx)(
                            R.s8,
                            {
                                focused: r >= 0 && t === r,
                                onClick: () => this.selectResult(n),
                                onMouseEnter: () => this.focusResult(n),
                                onFocus: this.focusNode,
                                onContextMenu: this.handleContextMenu,
                                navigationRecord: n.record,
                                score: l ? n.score : void 0,
                                id: this.getRowId(t),
                                children:
                                    n.record.type === m.Ky.SETTINGS &&
                                    (0, i.jsx)("div", {
                                        className: G.miscContainer,
                                        children: k.intl.string(k.t["3D5yo/"]),
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
function J(e) {
    let t = (0, c.cj)([A.Z], () => A.Z.getProps()),
        n = (0, O.Pt)(),
        r = L.Z.useExperiment({ location: "QuickSwitcher" }).enabled,
        o = l.useMemo(
            () =>
                r
                    ? Object.values(n)
                          .filter((e) => null != e.url)
                          .filter((e) => null == e.predicate || e.predicate())
                    : [],
            [n, r],
        );
    return (
        l.useLayoutEffect(() => {
            if (!r) return;
            let e = o
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
                title: k.intl.string(k.t["3D5yo/"]),
                searchableTitles: [k.intl.string(k.t["3D5yo/"])],
                path: M.Z5c.SETTINGS("account"),
            }),
                (0, P.gF)(e);
        }, [o, r]),
        (0, i.jsx)(Q, B({}, t, e))
    );
}
