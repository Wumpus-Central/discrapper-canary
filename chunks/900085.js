n.d(t, { Z: () => q }), n(415506), n(388685), n(35282), n(290780);
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
    h = n(714338),
    f = n(212819),
    g = n(815372),
    m = n(14429),
    b = n(576855),
    O = n(313201),
    y = n(991346),
    _ = n(592125),
    j = n(888369),
    v = n(430824),
    x = n(306680),
    C = n(944486),
    E = n(938475),
    S = n(483360),
    P = n(585483),
    I = n(63063),
    N = n(51596),
    w = n(823385),
    Z = n(415795),
    T = n(670512),
    A = n(558631),
    R = n(981631),
    D = n(388032),
    M = n(712198);
function L(e, t, n) {
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
function k(e) {
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
                L(e, t, n[t]);
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
let G = () =>
    (0, i.jsxs)("div", {
        className: M.emptyState,
        children: [
            (0, i.jsx)("div", {
                className: M.emptyStateNote,
                children: D.intl.string(D.t.bpbATE),
            }),
            (0, i.jsx)("div", {
                className: M.emptyStateCTA,
                children: (0, i.jsx)(u.eee, {
                    href: I.Z.getArticleURL(R.BhN.QUICK_SWITCHER_TUTORIAL),
                    children: D.intl.string(D.t["4iPfEB"]),
                }),
            }),
        ],
    });
class B extends (r = l.Component) {
    render() {
        let e = v.Z.getGuild(this.props.channel.guild_id);
        return (0, i.jsx)(
            Z.$W,
            U(k({}, this.props), {
                children: (0, i.jsx)("div", {
                    className: M.miscContainer,
                    children: null != e ? e.name : null,
                }),
            }),
        );
    }
}
L(B, "defaultProps", { unread: !1 });
let F = s.ZP.connectStores([x.ZP, _.Z], (e) => {
        let { channel: t } = e;
        return {
            unread: x.ZP.hasUnread(t.id),
            mentions: x.ZP.getMentionCount(t.id),
            isMentionLowImportance: x.ZP.getIsMentionLowImportance(t.id),
            category: _.Z.getChannel(t.parent_id),
        };
    })(B),
    V = s.ZP.connectStores([E.ZP], (e) => {
        let { channel: t } = e;
        if (null == t.guild_id)
            throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
        return { voiceStates: E.ZP.getVoiceStates(t.guild_id)[t.id] };
    })(B),
    H = s.ZP.connectStores([j.default], (e) => {
        let { guild: t } = e;
        return { unread: j.default.hasUnread(t.id) };
    })(Z.ic),
    z = s.ZP.connectStores([x.ZP], (e) => {
        let { channel: t } = e;
        return { mentions: x.ZP.getMentionCount(t.id) };
    })(Z.PZ),
    W = s.ZP.connectStores([_.Z, x.ZP], (e) => {
        let { user: t } = e,
            n = _.Z.getDMFromUserId(t.id);
        return { mentions: null != n ? x.ZP.getMentionCount(n) : 0 };
    })(Z.n5);
function K(e, t, n) {
    return (0, i.jsx)(
        u.ua7,
        {
            text: n,
            children: (e) =>
                (0, i.jsx)(
                    "span",
                    U(k({}, e), {
                        className: M.autocompleteQuerySymbol,
                        children: t,
                    }),
                ),
        },
        e,
    );
}
class Y extends l.PureComponent {
    componentDidMount() {
        h.Z.disable(), h.Z.enableTemp(p.u);
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
        (0, N.Cp)();
    }
    search(e) {
        this.setState({ query: e }), (0, N.yC)(e);
    }
    renderInput() {
        let { selectedIndex: e, results: t } = this.props,
            { query: n } = this.state,
            r = t.length > 0 && "" !== n;
        return (0, i.jsx)(u.tEY, {
            children: (0, i.jsx)("input", {
                className: M.input,
                "aria-label": D.intl.string(D.t.ZvKwYW),
                ref: this.inputRef,
                type: "text",
                role: "combobox",
                "aria-controls": this._listId,
                "aria-expanded": r,
                "aria-activedescendant": r ? this.getRowId(e) : void 0,
                "aria-autocomplete": "list",
                placeholder: D.intl.string(D.t.Vtvewc),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                value: this.state.query,
                spellCheck: !1,
                autoFocus: !0,
            }),
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
                  : (0, i.jsx)(u._2F, {
                        innerId: this._listId,
                        innerRole: "listbox",
                        "aria-label": D.intl.string(D.t.Wef5Dg),
                        ref: this.scrollerRef,
                        sectionHeight: 0,
                        rowHeight: 34,
                        paddingBottom: 10,
                        sections: [t.length],
                        className: M.scroller,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                    });
        };
        return (0, i.jsx)("div", {
            className: M.resultsArea,
            children: e(),
        });
    }
    focusNode(e) {
        P.S.dispatch(R.CkL.QUICKSWITCHER_RESULT_FOCUS, { node: e });
    }
    getRowId(e) {
        return "quick-switcher-".concat(this._listId, "-item-").concat(e);
    }
    renderProtip() {
        return (0, i.jsx)(b.Z, {
            className: a()(M.protip, { [M.hasContent]: this.state.query.length > 0 }),
            type: b.Z.Types.INLINE,
            children: D.intl.format(D.t.wukqXV, {
                userSymbolHook: (e, t) => K(t, f.xQ.USER, D.intl.string(D.t.GQRCGh)),
                textChannelSymbolHook: (e, t) => K(t, f.xQ.TEXT_CHANNEL, D.intl.string(D.t.wrwhub)),
                voiceChannelSymbolHook: (e, t) => K(t, f.xQ.VOICE_CHANNEL, D.intl.string(D.t["jz+hJi"])),
                guildSymbolHook: (e, t) => K(t, f.xQ.GUILD, D.intl.string(D.t.WuwCWl)),
                helpdeskArticle: I.Z.getArticleURL(R.BhN.QUICK_SWITCHER_TUTORIAL),
            }),
        });
    }
    renderTutorial() {
        let { query: e } = this.state,
            { seenTutorial: t, results: n } = this.props;
        return t ? null : (0, i.jsx)(T.Z, { hasQuery: e.length > 0 && n.length > 0 });
    }
    render() {
        return (0, i.jsx)(c.I, {
            "aria-label": D.intl.string(D.t.ZvKwYW),
            size: "lg",
            transitionState: this.props.transitionState,
            onClose: this.props.onClose,
            children: (0, i.jsxs)("div", {
                className: M.quickswitcher,
                onMouseMove: this.handleMouseMove,
                children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            L(this, "scrollerRef", l.createRef()),
            L(this, "inputRef", l.createRef()),
            L(this, "_listId", (0, O.hQ)()),
            L(this, "state", {
                query: this.props.query,
                mouseFocusDisabled: !0,
            }),
            L(this, "handleInputChange", () => {
                let { current: e } = this.inputRef;
                null != e && this.search(e.value);
            }),
            L(this, "handleMouseMove", () => {
                let { mouseFocusDisabled: e } = this.state;
                !1 !== e && this.setState({ mouseFocusDisabled: !1 });
            }),
            L(this, "focusResult", (e) => {
                this.state.mouseFocusDisabled || (0, N.tF)(this.props.results.indexOf(e));
            }),
            L(this, "selectResult", (e) => {
                (0, N.Se)(e, this.props.queryMode === f.h8.TEXT_CHANNEL);
            }),
            L(this, "handleContextMenu", (e) => {
                let t = this.props.results[this.props.selectedIndex];
                switch (t.type) {
                    case f.h8.GUILD:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([
                                n.e("1806"),
                                n.e("36599"),
                                n.e("60962"),
                                n.e("58175"),
                                n.e("7654"),
                                n.e("44156"),
                                n.e("47463"),
                                n.e("6850"),
                                n.e("58227"),
                                n.e("54408"),
                                n.e("42926"),
                                n.e("52721"),
                                n.e("56534"),
                                n.e("87154"),
                                n.e("33213"),
                                n.e("35237"),
                            ]).then(n.bind(n, 545135));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(k({}, n), {
                                        guild: t.record,
                                        onSelect: N.Cp,
                                        hideSettings: !0,
                                    }),
                                );
                        });
                    case f.h8.TEXT_CHANNEL:
                    case f.h8.VOICE_CHANNEL:
                        let r = t.record,
                            l = v.Z.getGuild(r.getGuildId());
                        if (null == l) return;
                        switch (r.type) {
                            case R.d4z.GUILD_TEXT:
                            case R.d4z.GUILD_ANNOUNCEMENT:
                            case R.d4z.GUILD_FORUM:
                            case R.d4z.GUILD_MEDIA:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("79695"),
                                        n.e("18320"),
                                        n.e("44011"),
                                    ]).then(n.bind(n, 373651));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(k({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: N.Cp,
                                            }),
                                        );
                                });
                            case R.d4z.GUILD_VOICE:
                            case R.d4z.GUILD_STAGE_VOICE:
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
                                            U(k({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: N.Cp,
                                            }),
                                        );
                                });
                            case R.d4z.ANNOUNCEMENT_THREAD:
                            case R.d4z.PUBLIC_THREAD:
                            case R.d4z.PRIVATE_THREAD:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(k({}, t), {
                                                channel: r,
                                                onSelect: N.Cp,
                                            }),
                                        );
                                });
                            case R.d4z.GUILD_STORE:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e("99905").then(n.bind(n, 649400));
                                    return (t) =>
                                        (0, i.jsx)(
                                            e,
                                            U(k({}, t), {
                                                channel: r,
                                                guild: l,
                                                onSelect: N.Cp,
                                            }),
                                        );
                                });
                            case R.d4z.GUILD_DIRECTORY:
                                return (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e("70623").then(n.bind(n, 99334));
                                    return (t) => (0, i.jsx)(e, U(k({}, t), { channel: r }));
                                });
                        }
                        break;
                    case f.h8.GROUP_DM:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("57789"), n.e("81239")]).then(
                                n.bind(n, 354741),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(k({}, n), {
                                        channel: t.record,
                                        selected: C.Z.getChannelId() === t.record.id,
                                        onSelect: N.Cp,
                                    }),
                                );
                        });
                    case f.h8.USER:
                        return (0, d.jW)(e, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("69220")]).then(
                                n.bind(n, 881351),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    U(k({}, n), {
                                        user: t.record,
                                        onSelect: N.Cp,
                                    }),
                                );
                        });
                }
            }),
            L(this, "handleKeyDown", (e) => {
                let { mouseFocusDisabled: t, query: n } = this.state,
                    { results: r } = this.props;
                !1 === t && this.setState({ mouseFocusDisabled: !0 });
                let i = e.key.toLowerCase(),
                    { selectedIndex: l } = this.props;
                switch (i) {
                    case "escape":
                        e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, N.Cp)();
                        return;
                    case "k":
                        (!0 === e.ctrlKey || !0 === e.metaKey) &&
                            (e.preventDefault(), e.stopPropagation(), (0, N.Cp)());
                        return;
                    case "enter": {
                        if (-1 === l) return;
                        if ((e.preventDefault(), e.altKey)) return this.handleContextMenu(e);
                        let t = r[l];
                        null != t && this.selectResult(t);
                        return;
                    }
                    case "arrowup":
                        l = (0, f.gJ)(f.a8.UP, l, r);
                        break;
                    case "arrowdown":
                        l = (0, f.gJ)(f.a8.DOWN, l, r);
                        break;
                    case "n":
                        if (!e.ctrlKey) return;
                        l = (0, f.gJ)(f.a8.DOWN, l, r);
                        break;
                    case "p":
                        if (!e.ctrlKey) return;
                        l = (0, f.gJ)(f.a8.UP, l, r);
                        break;
                    default:
                        return;
                }
                e.preventDefault(), (0, N.tF)(l);
            }),
            L(this, "renderRow", (e) => {
                let { row: t } = e,
                    n = this.props.results[t],
                    { selectedIndex: r } = this.props,
                    { showScores: l } = m.Z.getCurrentConfig({ location: "62f4be_1" }, { autoTrackExposure: !1 });
                switch (n.type) {
                    case f.h8.HEADER:
                        return (0, i.jsx)(
                            Z.h4,
                            { children: n.record.text },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case f.h8.TEXT_CHANNEL:
                        return (0, i.jsx)(
                            F,
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
                    case f.h8.VOICE_CHANNEL:
                        return (0, i.jsx)(
                            V,
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
                    case f.h8.GUILD:
                        return (0, i.jsx)(
                            H,
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
                    case f.h8.USER:
                        return (0, i.jsx)(
                            W,
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
                                score: l ? n.score : void 0,
                            },
                            "".concat(n.type, "-").concat(n.record.id),
                        );
                    case f.h8.APPLICATION:
                        return (0, i.jsx)(
                            Z.Mx,
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
                    case f.h8.LINK:
                        return (0, i.jsx)(
                            Z.rU,
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
                    case f.h8.IN_APP_NAVIGATION:
                        return (0, i.jsx)(
                            Z.s8,
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
                                        className: M.miscContainer,
                                        children: D.intl.string(D.t["3D5yo6"]),
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
function q(e) {
    let t = (0, s.cj)([w.Z], () => w.Z.getProps()),
        n = (0, y.Pt)(),
        r = A.Z.useExperiment({ location: "QuickSwitcher" }).enabled,
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
                title: D.intl.string(D.t["3D5yo6"]),
                searchableTitles: [D.intl.string(D.t["3D5yo6"])],
                path: R.Z5c.SETTINGS("account"),
            }),
                (0, S.gF)(e);
        }, [o, r]),
        (0, i.jsx)(Y, k({}, t, e))
    );
}
