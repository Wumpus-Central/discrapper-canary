n.d(t, { Z: () => Q }), n(415506), n(388685), n(35282), n(290780);
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    c = n(257465),
    u = n(481060),
    d = n(239091),
    p = n(134616),
    f = n(714338),
    h = n(212819),
    g = n(815372),
    m = n(14429),
    b = n(576855),
    O = n(313201),
    y = n(991346),
    _ = n(592125),
    j = n(888369),
    v = n(430824),
    x = n(158776),
    C = n(306680),
    E = n(944486),
    S = n(938475),
    P = n(483360),
    I = n(459273),
    N = n(585483),
    Z = n(63063),
    w = n(51596),
    T = n(823385),
    A = n(415795),
    R = n(670512),
    D = n(558631),
    L = n(981631),
    M = n(388032),
    k = n(712198);
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
function G(e) {
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
function B(e, t) {
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
        className: k.emptyState,
        children: [
            (0, i.jsx)("div", {
                className: k.emptyStateNote,
                children: M.intl.string(M.t.bpbATE),
            }),
            (0, i.jsx)("div", {
                className: k.emptyStateCTA,
                children: (0, i.jsx)(u.eee, {
                    href: Z.Z.getArticleURL(L.BhN.QUICK_SWITCHER_TUTORIAL),
                    children: M.intl.string(M.t["4iPfEB"]),
                }),
            }),
        ],
    });
class F extends (r = l.Component) {
    render() {
        let e = v.Z.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(
            A.$W,
            B(G({}, this.props), {
                children: (0, i.jsx)("div", {
                    className: k.miscContainer,
                    children: null != e ? e.name : null,
                }),
            }),
        );
    }
}
U(F, "defaultProps", { unread: !1 });
let H = s.ZP.connectStores([C.ZP, _.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: C.ZP.hasUnread(t.id),
            mentions: C.ZP.getMentionCount(t.id),
            isMentionLowImportance: C.ZP.getIsMentionLowImportance(t.id),
            category: _.Z.getChannel(t.parent_id),
        };
    })(F),
    z = s.ZP.connectStores([S.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: S.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(F),
    W = s.ZP.connectStores([j.default], (e) => {
        let { guild: t } = e;
        return { unread: j.default.hasUnread(t.id) };
    })(A.ic),
    K = s.ZP.connectStores([C.ZP, x.Z], (e) => {
        var t;
        let { channel: n } = e,
            r = null,
            i = x.Z.getState().statuses;
        return (
            (null == (t = n.recipients) ? void 0 : t.some((e) => i[e] === L.Skl.ONLINE)) && (r = L.Skl.ONLINE),
            {
                mentions: C.ZP.getMentionCount(n.id),
                status: r,
            }
        );
    })(A.PZ),
    Y = s.ZP.connectStores([_.Z, C.ZP, x.Z], (e) => {
        let { user: t } = e,
            n = _.Z.getDMFromUserId(t.id);
        return {
            mentions: null != n ? C.ZP.getMentionCount(n) : 0,
            status: x.Z.getStatus(t.id),
            isMobile: x.Z.isMobileOnline(t.id),
        };
    })(A.n5);
function q(e, t, n) {
    return (0, i.jsx)(
        u.ua7,
        {
            text: n,
            children: (e) =>
                (0, i.jsx)(
                    "span",
                    B(G({}, e), {
                        className: k.autocompleteQuerySymbol,
                        children: t,
                    }),
                ),
        },
        e,
    );
}
class X extends l.PureComponent {
    componentDidMount() {
        f.Z.disable(), f.Z.enableTemp(p.u);
    }
    componentWillUnmount() {
        f.Z.disableTemp(), f.Z.enable();
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
        (0, w.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, w.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            r = t.length > 0 && "" !== n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.d9, {
                    event: L.CkL.GLOBAL_CLIPBOARD_PASTE,
                    handler: this.handleGlobalPaste,
                }),
                (0, i.jsx)(u.tEY, {
                    children: (0, i.jsx)("input", {
                        className: k.input,
                        "aria-label": M.intl.string(M.t.ZvKwYW),
                        ref: this.inputRef,
                        type: "text",
                        role: "combobox",
                        "aria-controls": this._listId,
                        "aria-expanded": r,
                        "aria-activedescendant": r ? this.getRowId(e) : void 0,
                        "aria-autocomplete": "list",
                        placeholder: M.intl.string(M.t.Vtvewc),
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
                  : (0, i.jsx)(u._2F, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": M.intl.string(M.t.Wef5Dg),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: k.scroller,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", {
            className: k.resultsArea,
            children: e(),
        });
    }
    focusNode(e) {
        N.S.dispatch(L.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return "quick-switcher-".concat(this._listId, "-item-").concat(e);
    }
    renderProtip() {
        return (0, i.jsx)(b.Z, {
            className: a()(k.protip, { [k.hasContent]: this.state.query.length > 0 }),
            type: b.Z.Types.INLINE,
            children: M.intl.format(M.t.wukqXV, {
                userSymbolHook: (e, t) => q(t, h.xQ.USER, M.intl.string(M.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => q(t, h.xQ.TEXT_CHANNEL, M.intl.string(M.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => q(t, h.xQ.VOICE_CHANNEL, M.intl.string(M.t["jz+hJi"])),
                guildSymbolHook: (e, t) => q(t, h.xQ.GUILD, M.intl.string(M.t.WuwCWl)),
                helpdeskArticle: Z.Z.getArticleURL(L.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(R.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(c.I, {
            "aria-label": M.intl.string(M.t.ZvKwYW),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: k.quickswitcher,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            U(this, "scrollerRef", l.createRef()),
            U(this, "inputRef", l.createRef()),
            U(this, "_listId", (0, O.hQ)()),
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
                this.state.mouseFocusDisabled || (0, w.tF)(this.props.results.indexOf(e));
            }),
            U(this, "selectResult", (e) => {
                (0, w.Se)(e, this.props.queryMode === h.h8.TEXT_CHANNEL);
            }),
            U(this, "handleContextMenu", (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case h.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("1806"),
                                n.e("36599"),
                                n.e("60962"),
                                n.e("58175"),
                                n.e("55616"),
                                n.e("8271"),
                                n.e("15851"),
                                n.e("51453"),
                                n.e("7654"),
                                n.e("845"),
                                n.e("47463"),
                                n.e("6850"),
                                n.e("58227"),
                                n.e("54408"),
                                n.e("90746"),
                                n.e("8106"),
                                n.e("56534"),
                                n.e("87154"),
                                n.e("33213"),
                                n.e("63933"),
                            ]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    B(G({}, n), {
                                        guild: t.record,
                                        onSelect: w.Cp,
                                        hideSettings: !0,
                                    }),
                                );
                        });
                    case h.h8.TEXT_CHANNEL:
                    case h.h8.VOICE_CHANNEL:
                        let r = t.record,
                            l = v.Z.getGuild(r.getGuildId());
                        if (null == l) return;
                        switch (r.type) {
                            case L.d4z.GUILD_TEXT:
                            case L.d4z.GUILD_ANNOUNCEMENT:
                            case L.d4z.GUILD_FORUM:
                            case L.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("79695"),
                                        n.e("18320"),
                                        n.e("44011"),
                                    ]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            B(G({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: w.Cp,
                                            }),
                                        );
                                });
                            case L.d4z.GUILD_VOICE:
                            case L.d4z.GUILD_STAGE_VOICE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("79695"),
                                        n.e("18320"),
                                        n.e("83331"),
                                        n.e("81070"),
                                    ]).then(n.bind(n, 213202));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            B(G({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: w.Cp,
                                            }),
                                        );
                                });
                            case L.d4z.ANNOUNCEMENT_THREAD:
                            case L.d4z.PUBLIC_THREAD:
                            case L.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            B(G({}, t), {
                                                channel: r,
                                                onSelect: w.Cp,
                                            }),
                                        );
                                });
                            case L.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e("99905").then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            B(G({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: w.Cp,
                                            }),
                                        );
                                });
                            case L.d4z.GUILD_DIRECTORY:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e("70623").then(n.bind(n, 99334));
                                    return (t) => (0, i.jsx)(e, B(G({}, t), { channel: r }));
                                });
                        }
                        break;
                    case h.h8.GROUP_DM:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("22981")]).then(
                                n.bind(n, 354741),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    B(G({}, n), {
                                        channel: t.record,
                                        selected: E.Z.getChannelId() === t.record.id,
                                        onSelect: w.Cp,
                                    }),
                                );
                        });
                    case h.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("69220")]).then(
                                n.bind(n, 881351),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    B(G({}, n), {
                                        user: t.record,
                                        onSelect: w.Cp,
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
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, w.Cp)();
                        return;
                    case "k":
                        (!0 === e.ctrlKey || !0 === e.metaKey) &&
                            (e.preventDefault(), e.stopPropagation(), (0, w.Cp)());
                        return;
                    case "enter": {
                        if (-1 === l) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = r[l];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case "arrowup":
                        l = (0, h.gJ)(h.a8.UP, l, r);
                        break;
                    case "arrowdown":
                        l = (0, h.gJ)(h.a8.DOWN, l, r);
                        break;
                    case "n":
                        if (!e.ctrlKey) return;
                        l = (0, h.gJ)(h.a8.DOWN, l, r);
                        break;
                    case "p":
                        if (!e.ctrlKey) return;
                        l = (0, h.gJ)(h.a8.UP, l, r);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, w.tF)(l);
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
                    { showScores: l } = m.Z.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case h.h8.HEADER:
                        return (0, i.jsx)(
                            A.h4,
                            { children: n.record.text },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case h.h8.TEXT_CHANNEL:
                        return (0, i.jsx)(
                            H,
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
                    case h.h8.VOICE_CHANNEL:
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
                    case h.h8.GUILD:
                        return (0, i.jsx)(
                            W,
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
                    case h.h8.USER:
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
                                score: l ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case h.h8.GROUP_DM:
                        return (0, i.jsx)(
                            K,
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
                    case h.h8.APPLICATION:
                        return (0, i.jsx)(
                            A.Mx,
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
                    case h.h8.LINK:
                        return (0, i.jsx)(
                            A.rU,
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
                    case h.h8.IN_APP_NAVIGATION:
                        return (0, i.jsx)(
                            A.s8,
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
                                    n.record.type === g.Ky.SETTINGS &&
                                    (0, i.jsx)("div", {
                                        className: k.miscContainer,
                                        children: M.intl.string(M.t["3D5yo6"]),
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
function Q(e) {
    let t = (0, s.cj)([T.Z], () => T.Z.getProps()),
        n = (0, y.Pt)(),
        r = D.Z.useExperiment({ location: "QuickSwitcher" }).enabled,
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
                title: M.intl.string(M.t["3D5yo6"]),
                searchableTitles: [M.intl.string(M.t["3D5yo6"])],
                path: L.Z5c.SETTINGS("account"),
            }),
                (0, P.gF)(e);
        }, [o, r]),
        (0, i.jsx)(X, G({}, t, e))
    );
}
