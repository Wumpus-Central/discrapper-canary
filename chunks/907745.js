n.d(t, {
    Ay: () => z,
    E2: () => B,
}),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(271830),
    l = n(985623),
    c = n.n(l),
    u = n(311907),
    d = n(397927),
    f = n(988665),
    p = n(955572),
    _ = n(775602),
    h = n(915089),
    m = n(138298),
    g = n(761640),
    E = n(734057),
    b = n(71393),
    y = n(309010),
    O = n(203982),
    A = n(504531),
    v = n(614690),
    S = n(256796),
    I = n(517381),
    T = n(822382),
    C = n(768278),
    N = n(408730),
    R = n(771650),
    w = n(616252),
    P = n(753806),
    D = n(775427),
    x = n(65600),
    L = n(145331),
    j = n(242182),
    M = n(768570),
    k = n(921242),
    U = n(652215),
    G = n(985018),
    V = n(607205);

function F(e, t, n) {
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
let B = 512,
    H = (0, h.Ld)(),
    Y = c()(P.A.fetchMessages, 500);
class W extends i.PureComponent {
    componentDidMount() {
        O._.subscribe(U.jej.PERFORM_SEARCH, this.search),
            O._.subscribe(U.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            O._.subscribe(U.jej.FOCUS_SEARCH, this.handleFocusSearch);
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: n } = this.props;
        if ((n !== e.searchContext && S.A.initializeAutocomplete(n), t !== e.editorState)) {
            let e = A.pe(t),
                r = (0, T._o)(A.pe(t)),
                i = v.zZ(r, t);
            S.A.updateAutocompleteQuery({
                searchContext: n,
                tokens: r,
                cursorScope: i,
                queryString: e,
            }),
                null != this._editorRef && A.L9(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        var e, t, n;
        O._.unsubscribe(U.jej.PERFORM_SEARCH, this.search),
            O._.unsubscribe(U.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            O._.unsubscribe(U.jej.FOCUS_SEARCH, this.handleFocusSearch),
            null == (n = this._editorRef) ||
                null == (t = n.editor) ||
                null == (e = t.removeEventListener) ||
                e.call(t, "cut", this.handleCutEvent);
    }
    tokenize(e) {
        let t = (0, T._o)(A.pe(e)).filter((e) => e.type !== f.Ay.NON_TOKEN_TYPE);
        return A.uD(t, e, R.Ay);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        P.A.cleanUpSearchState(e);
    }
    handlePastedFiles() {
        return "handled";
    }
    handleDroppedFiles() {
        return "handled";
    }
    handleDrop() {
        return "handled";
    }
    renderInput(e) {
        let { editorState: t, placeholder: n } = this.props;
        return (0, r.jsx)(o.Editor, {
            autoCorrect: "off",
            ref: this.setEditorRef,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            handleReturn: this.handleReturn,
            handleBeforeInput: this.handleBeforeInput,
            handleKeyCommand: this.handleKeyCommand,
            handlePastedText: this.handlePastedText,
            handlePastedFiles: this.handlePastedFiles,
            handleDroppedFiles: this.handleDroppedFiles,
            handleDrop: this.handleDrop,
            keyBindingFn: this.handleKeyBind,
            placeholder: null != n ? n : G.intl.string(G.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? H : void 0,
            ariaLabel: G.intl.string(G.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: n, className: i } = this.props,
            { focused: a } = this.state,
            o = A.pe(t).length > 0;
        return (0, r.jsx)(d.YNO, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: d.YNO.Animation.NONE,
            shouldShow: a,
            autoInvert: !1,
            children: (t, l) => {
                var c;
                let { isShown: u } = l;
                return (0, r.jsx)("div", {
                    className: i,
                    ref: this._containerRef,
                    children: (0, r.jsx)("div", {
                        className: s()(V.$P, {
                            [V.ho]: o || a,
                            [V.in]: a,
                        }),
                        children: (0, r.jsx)(d.vN3, {
                            focusTarget: {
                                current: null == (c = this._editorRef) ? void 0 : c.editor,
                            },
                            ringTarget: this._searchBarRef,
                            children: (0, r.jsxs)(
                                "div",
                                {
                                    className: V.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, r.jsx)(d.BT5, {
                                            onClear: this.handleClearSearch,
                                            hasContent: o || n,
                                            className: V.Kk,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, T.bS)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
    constructor(e) {
        super(e),
            F(this, "state", {
                focused: !1,
                selectedIndex: void 0,
            }),
            F(this, "_editorRef", void 0),
            F(this, "_containerRef", i.createRef()),
            F(this, "_searchBarRef", i.createRef()),
            F(this, "_searchPopoutRef", i.createRef()),
            F(this, "handleCutEvent", (e) => {
                if ((e.preventDefault(), null == e.clipboardData)) return;
                let { editorState: t } = this.props,
                    n = t.getSelection();
                if (n.isCollapsed()) return;
                let r = A.pe(t),
                    i = n.getStartOffset(),
                    a = n.getEndOffset(),
                    s = r.substring(i, a);
                e.clipboardData.setData("text/plain", s);
                let o = A.vE("delete", t);
                (o = this.tokenize(o)), this.setEditorState(o);
            }),
            F(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: n, focus: r, performSearch: i, replace: a, searchQuerySource: s } = e,
                    { editorState: o } = this.props,
                    l = A.pe(o);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != n && 0 !== n && " " !== l.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t),
                    a ? ((o = A.t7(t, o)), (n = 0)) : (o = A.le(t, o, n, r)),
                    (o = A.a4(o, B)),
                    (o = this.tokenize(o));
                let c = Number(n) + t.length;
                (o = A.UO(c, o)),
                    this.setEditorState(o),
                    i &&
                        this.search({
                            queryString: A.pe(o),
                            searchQuerySource: s,
                        });
            }),
            F(this, "handleSelectedIndexChanged", (e) => {
                var t, n;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(H, "-").concat(e) : void 0),
                    this.setState({
                        selectedIndex: e,
                    });
            }),
            F(this, "renderPopout", () =>
                (0, r.jsx)(j.A, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: H,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged,
                }),
            ),
            F(this, "search", (e) => {
                let { isSearching: t } = this.props,
                    { queryString: n, searchEverywhere: r, searchQuerySource: i } = null != e ? e : {};
                if (null == n || "" === n) {
                    let { editorState: e } = this.props;
                    n = A.pe(e);
                }
                if (!t) {
                    let e = (0, T._o)(n),
                        t = (0, T.Zf)(e);
                    for (let t = 0; t < e.length; t++)
                        (0, T.Zh)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    this.props.onSearch({
                        queryString: n,
                        query: t,
                        searchEverywhere: null != r && r,
                        searchQuerySource: i,
                    }),
                        d.ORC.announce(G.intl.string(G.t.pKCxWP)),
                        this.handleBlur();
                }
                return !0;
            }),
            F(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: n } = this.props,
                    { focused: r } = this.state;
                (e.preventDefault(), e.stopPropagation(), "" === A.pe(t))
                    ? this.focusEditor()
                    : ((t = A.a4(t, 0)),
                      this.setEditorState(t),
                      (0, L.iK)({
                          searchContext: n,
                      }),
                      r || Promise.resolve().then(() => this.blurEditor()));
            }),
            F(this, "handleFocusSearch", (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let n = y.A.getChannelId(),
                    r = E.A.getChannel(n),
                    i = C.A.getCurrentConfig({
                        location: "handleFocusSearch",
                    }).enabled;
                if (
                    ((null == r ? void 0 : r.isThread()) &&
                        !i &&
                        (r = E.A.getChannel(null == r ? void 0 : r.parent_id)),
                    null == r)
                )
                    return void this.focusEditor();
                let { searchContext: a } = this.props;
                if (r.isPrivate() && a.type !== U.I4_.DMS) return void this.focusEditor();
                let s = (0, T.Rt)(r);
                null == s
                    ? this.focusEditor()
                    : ((0, L.Tf)({
                          searchContext: a,
                      }),
                      Promise.resolve().then(() => {
                          let { _editorRef: e } = this;
                          null == e || e.focus(),
                              this.handleSetSearchQuery({
                                  query: R.Ay[U.LWr.FILTER_IN].key + "".concat(s, " "),
                                  replace: !0,
                                  searchQuerySource: M.Q_.SEARCH_TEXT_INPUT,
                              });
                      }));
            }),
            F(this, "focusEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            F(this, "blurEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            F(this, "setEditorRef", (e) => {
                var t, n, r, i, a, s;
                null == (n = this._editorRef) ||
                    null == (t = n.editor) ||
                    t.removeEventListener("cut", this.handleCutEvent),
                    (this._editorRef = e),
                    null == (i = this._editorRef) ||
                        null == (r = i.editor) ||
                        r.setAttribute("aria-haspopup", "listbox"),
                    null == (s = this._editorRef) ||
                        null == (a = s.editor) ||
                        a.addEventListener("cut", this.handleCutEvent);
            }),
            F(this, "onFocus", () => {
                let { searchContext: e } = this.props;
                this.setState({
                    focused: !0,
                }),
                    N.A.setFocused(e, !0);
            }),
            F(this, "handleBlur", () => {
                let { searchContext: e } = this.props;
                N.A.setFocused(e, !1),
                    this.setState(
                        {
                            focused: !1,
                        },
                        () => {
                            A.Im(this.props.editorState) && this.clearSearch();
                        },
                    );
            }),
            F(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            F(this, "handleOption", () => {
                let { current: e } = this._searchPopoutRef;
                return (
                    null != e &&
                    e.selectOption({
                        searchAutocompleteSelectAction: M.oi.KEY_PRESS,
                    })
                );
            }),
            F(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                return (
                    e.preventDefault(),
                    this.handleOption() ||
                        ((0, T.Eq)() && t
                            ? this.search({
                                  searchEverywhere: !0,
                                  searchQuerySource: M.Q_.SEARCH_TEXT_INPUT,
                              })
                            : this.search({
                                  searchQuerySource: M.Q_.SEARCH_TEXT_INPUT,
                              })),
                    "handled"
                );
            }),
            F(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    A.pe(t).length >= B ||
                        ((t = A.le(e, t)),
                        (t = A.a4(t, B)),
                        (t = this.tokenize(t)),
                        this.setEditorState(t),
                        n ||
                            this.setState({
                                focused: !0,
                            })),
                    "handled"
                );
            }),
            F(this, "handleKeyCommand", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                switch (e) {
                    case "backspace":
                    case "backspace-word":
                    case "backspace-to-start-of-line":
                    case "delete":
                    case "delete-word":
                        return (
                            (t = A.vE(e, t)),
                            (t = this.tokenize(t)),
                            this.setEditorState(t),
                            n ||
                                this.setState({
                                    focused: !0,
                                }),
                            "handled"
                        );
                    case "transpose-characters":
                    case "move-selection-to-start-of-block":
                    case "move-selection-to-end-of-block":
                        return (t = A.ON(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
                    case "split-block":
                    case "underline":
                    case "bold":
                    case "italic":
                        return "handled";
                }
                return "not-handled";
            }),
            F(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: n } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = A.le(e, t)),
                    (t = A.a4(t, B)),
                    (t = this.tokenize(t)),
                    n ||
                        this.setState({
                            focused: !0,
                        }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            F(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                w.A.updateSearchEditorState(t, e);
            }),
            F(this, "getPopoutRef", () => {
                let { current: e } = this._searchPopoutRef;
                return e;
            }),
            F(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: n, shiftKey: r, ctrlKey: i } = e,
                    { editorState: a, searchContext: s, keyboardModeEnabled: o } = this.props;
                if ((e.stopPropagation(), (n || i) && "a" === t.toLowerCase())) {
                    e.preventDefault();
                    let t = A.y8(a);
                    return (
                        this.setEditorState(t),
                        this.setState({
                            focused: !0,
                        }),
                        !0
                    );
                }
                if ("Escape" === t) {
                    if ((e.preventDefault(), A.Im(a))) this.blurEditor();
                    else {
                        let e = A.Xq(a);
                        w.A.updateSearchEditorState(s, e),
                            this.setState({
                                focused: !0,
                            });
                    }
                    return !0;
                }
                if ("ArrowUp" === t) {
                    e.preventDefault();
                    let t = this.getPopoutRef();
                    return null != t && t.focusPreviousOption(), !0;
                }
                if ("ArrowDown" === t) {
                    e.preventDefault();
                    let t = this.getPopoutRef();
                    return null != t && t.focusNextOption(), !0;
                }
                if ("Tab" === t) {
                    if (o) return;
                    return (0, p.uS)(), !0;
                }
                if ("Home" === t || ("ArrowLeft" === t && n))
                    return e.preventDefault(), (a = r ? A.mQ(a) : A.aB(a)), this.setEditorState(a), !0;
                if ("End" === t || ("ArrowRight" === t && n))
                    return e.preventDefault(), (a = r ? A.Le(a) : A.Tj(a)), this.setEditorState(a), !0;
                if (("Delete" === t || "Backspace" === t) && n) {
                    let e = A.Xq(a);
                    return this.setEditorState(e), !0;
                }
                return A.K6(e);
            }),
            (0, T.Pe)();
    }
}

function K(e) {
    let { searchContext: t, className: n } = e,
        a = (0, T.bS)(t),
        s = (0, u.bG)([_.A], () => _.A.keyboardModeEnabled),
        o = (0, u.bG)([x.A], () => x.A.getEditorState(a));
    i.useEffect(
        () => (
            m.A.setSelectedSearchContext(a),
            () => {
                m.A.setSelectedSearchContext(null);
            }
        ),
        [a],
    );
    let l = (0, u.bG)([x.A], () => x.A.getIsSearchTokensInitialized()),
        c = i.useRef(l);
    i.useEffect(() => {
        l && c.current !== l && ((c.current = l), P.A.ensureSearchInputDecorators(t));
    }, [l, t]);
    let f = i.useMemo(() => (null != o ? o : A.e_(v.ys(R.Ay))), [o]),
        { isSearching: p, hasResults: h } = (0, u.cf)([I.A], () => {
            let e = I.A.getTotalCount(a);
            return {
                hasResults: null != e && e > 0,
                isSearching: I.A.getIsFetching(a),
            };
        }),
        O = (0, u.bG)([g.Ay, y.A, E.A], () => {
            let e = y.A.getCurrentlySelectedChannelId(),
                t = E.A.getChannel(e);
            return g.Ay.getSection(e, null == t ? void 0 : t.isDM()) === U.YvQ.SEARCH;
        });
    i.useEffect(() => {
        N.A.setSidebarOpen(t, O);
    }, [t, O]);
    let S = (0, d.Ry6)(k.b);
    i.useEffect(() => {
        N.A.setFiltersModalOpen(t, S);
    }, [t, S]);
    let C = i.useCallback(
            (e) => {
                let { queryString: n, query: r, searchEverywhere: i, searchQuerySource: a } = e;
                N.A.refreshQueryId(t),
                    (0, L.fd)({
                        searchContext: t,
                        query: r,
                        queryString: n,
                        searchQuerySource: a,
                    }),
                    w.A.updateSearchMode(t, U.BBH.NEWEST),
                    Y({
                        searchContext: t,
                        searchQueryString: n,
                        searchEverywhere: i,
                        offset: 0,
                    });
            },
            [t],
        ),
        D = (0, u.bG)([b.A, E.A], () => {
            let e = (0, T._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = b.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let n = (0, T._b)(t);
            if (null != n) {
                let e = E.A.getChannel(n);
                return null == e ? null : (0, T.E3)(e);
            }
            return null;
        }),
        j = i.useMemo(() => {
            switch (t.type) {
                case U.I4_.DMS:
                    return G.intl.string(G.t.m7OrlR);
                case U.I4_.FAVORITES:
                    return G.intl.string(G.t["5h0QOP"]);
                default:
                    return G.intl.formatToPlainString(G.t.LDZtFO, {
                        name: D,
                    });
            }
        }, [t.type, D]);
    return (0, r.jsx)(W, {
        className: n,
        searchContext: t,
        isSearching: p,
        editorState: f,
        hasResults: h,
        keyboardModeEnabled: s,
        onSearch: C,
        placeholder: j,
    });
}

function z(e) {
    let { className: t, guildId: n, channelId: i } = e,
        a = (0, D.J)({
            guildId: n,
            channelId: i,
        });
    return null == a
        ? null
        : (0, r.jsx)(K, {
              className: t,
              searchContext: a,
          });
}
