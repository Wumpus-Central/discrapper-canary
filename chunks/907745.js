r.d(t, {
    Ay: () => B,
    E2: () => q,
}),
    r(747238),
    r(812715);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(271830),
    o = r(985623),
    c = r.n(o),
    u = r(311907),
    d = r(397927),
    h = r(988665),
    p = r(955572),
    f = r(775602),
    g = r(915089),
    S = r(138298),
    E = r(761640),
    y = r(734057),
    _ = r(71393),
    m = r(309010),
    A = r(203982),
    b = r(504531),
    O = r(614690),
    R = r(256796),
    v = r(517381),
    x = r(822382),
    T = r(768278),
    I = r(408730),
    j = r(771650),
    L = r(616252),
    N = r(753806),
    C = r(775427),
    w = r(65600),
    P = r(145331),
    F = r(19801),
    k = r(768570),
    M = r(921242),
    W = r(652215),
    D = r(985018),
    H = r(607205);

function U(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let q = 512,
    z = (0, g.Ld)(),
    G = c()(N.A.fetchMessages, 500);
class K extends l.PureComponent {
    componentDidMount() {
        A._.subscribe(W.jej.PERFORM_SEARCH, this.search),
            A._.subscribe(W.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            A._.subscribe(W.jej.FOCUS_SEARCH, this.handleFocusSearch);
    }
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if ((r !== e.searchContext && R.A.initializeAutocomplete(r), t !== e.editorState)) {
            let e = b.pe(t),
                n = (0, x._o)(b.pe(t)),
                l = O.zZ(n, t);
            R.A.updateAutocompleteQuery({
                searchContext: r,
                tokens: n,
                cursorScope: l,
                queryString: e,
            }),
                null != this._editorRef && b.L9(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        var e, t, r;
        A._.unsubscribe(W.jej.PERFORM_SEARCH, this.search),
            A._.unsubscribe(W.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            A._.unsubscribe(W.jej.FOCUS_SEARCH, this.handleFocusSearch),
            null == (r = this._editorRef) ||
                null == (t = r.editor) ||
                null == (e = t.removeEventListener) ||
                e.call(t, "cut", this.handleCutEvent);
    }
    tokenize(e) {
        let t = (0, x._o)(b.pe(e)).filter((e) => e.type !== h.Ay.NON_TOKEN_TYPE);
        return b.uD(t, e, j.Ay);
    }
    clearSearch() {
        let { searchContext: e } = this.props;
        N.A.cleanUpSearchState(e);
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
        let { editorState: t, placeholder: r } = this.props;
        return (0, n.jsx)(i.Editor, {
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
            placeholder: null != r ? r : D.intl.string(D.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? z : void 0,
            ariaLabel: D.intl.string(D.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: r, className: l } = this.props,
            { focused: s } = this.state,
            i = b.pe(t).length > 0;
        return (0, n.jsx)(d.YNO, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: d.YNO.Animation.NONE,
            shouldShow: s,
            autoInvert: !1,
            children: (t, o) => {
                var c;
                let { isShown: u } = o;
                return (0, n.jsx)("div", {
                    className: l,
                    ref: this._containerRef,
                    children: (0, n.jsx)("div", {
                        className: a()(H.$P, {
                            [H.ho]: i || s,
                            [H.in]: s,
                        }),
                        children: (0, n.jsx)(d.vN3, {
                            focusTarget: {
                                current: null == (c = this._editorRef) ? void 0 : c.editor,
                            },
                            ringTarget: this._searchBarRef,
                            children: (0, n.jsxs)(
                                "div",
                                {
                                    className: H.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, n.jsx)(d.BT5, {
                                            onClear: this.handleClearSearch,
                                            hasContent: i || r,
                                            className: H.Kk,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, x.bS)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
    constructor(e) {
        super(e),
            U(this, "state", {
                focused: !1,
                selectedIndex: void 0,
            }),
            U(this, "_editorRef", void 0),
            U(this, "_containerRef", l.createRef()),
            U(this, "_searchBarRef", l.createRef()),
            U(this, "_searchPopoutRef", l.createRef()),
            U(this, "handleCutEvent", (e) => {
                if ((e.preventDefault(), null == e.clipboardData)) return;
                let { editorState: t } = this.props,
                    r = t.getSelection();
                if (r.isCollapsed()) return;
                let n = b.pe(t),
                    l = r.getStartOffset(),
                    s = r.getEndOffset(),
                    a = n.substring(l, s);
                e.clipboardData.setData("text/plain", a);
                let i = b.vE("delete", t);
                (i = this.tokenize(i)), this.setEditorState(i);
            }),
            U(this, "handleSetSearchQuery", (e) => {
                let { query: t, anchor: r, focus: n, performSearch: l, replace: s, searchQuerySource: a } = e,
                    { editorState: i } = this.props,
                    o = b.pe(i);
                " " !== t.charAt(t.length - 1) && (t += " "),
                    null != r && 0 !== r && " " !== o.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
                    s ? ((i = b.t7(t, i)), (r = 0)) : (i = b.le(t, i, r, n)),
                    (i = b.a4(i, q)),
                    (i = this.tokenize(i));
                let c = Number(r) + t.length;
                (i = b.UO(c, i)),
                    this.setEditorState(i),
                    l &&
                        this.search({
                            queryString: b.pe(i),
                            searchQuerySource: a,
                        });
            }),
            U(this, "handleSelectedIndexChanged", (e) => {
                var t, r;
                null == (r = this._editorRef) ||
                    null == (t = r.editor) ||
                    t.setAttribute("aria-activedescendant", null != e ? "".concat(z, "-").concat(e) : void 0),
                    this.setState({
                        selectedIndex: e,
                    });
            }),
            U(this, "renderPopout", () =>
                (0, n.jsx)(F.A, {
                    ref: this._searchPopoutRef,
                    searchContext: this.props.searchContext,
                    navId: z,
                    onSelectedIndexChanged: this.handleSelectedIndexChanged,
                }),
            ),
            U(this, "search", (e) => {
                let { isSearching: t } = this.props,
                    { queryString: r, searchEverywhere: n, searchQuerySource: l } = null != e ? e : {};
                if (null == r || "" === r) {
                    let { editorState: e } = this.props;
                    r = b.pe(e);
                }
                if (!t) {
                    let e = (0, x._o)(r),
                        t = (0, x.Zf)(e);
                    for (let t = 0; t < e.length; t++)
                        (0, x.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
                    if (0 === e.length || 0 === Object.keys(t).length) return !1;
                    this.props.onSearch({
                        queryString: r,
                        query: t,
                        searchEverywhere: null != n && n,
                        searchQuerySource: l,
                    }),
                        d.ORC.announce(D.intl.string(D.t.pKCxWP)),
                        this.handleBlur();
                }
                return !0;
            }),
            U(this, "handleClearSearch", (e) => {
                let { editorState: t, searchContext: r } = this.props,
                    { focused: n } = this.state;
                (e.preventDefault(), e.stopPropagation(), "" === b.pe(t))
                    ? this.focusEditor()
                    : ((t = b.a4(t, 0)),
                      this.setEditorState(t),
                      (0, P.iK)({
                          searchContext: r,
                      }),
                      n || Promise.resolve().then(() => this.blurEditor()));
            }),
            U(this, "handleFocusSearch", (e) => {
                let { prefillCurrentChannel: t } = e;
                if (!t) return void this.focusEditor();
                let r = m.A.getChannelId(),
                    n = y.A.getChannel(r),
                    l = T.A.getCurrentConfig({
                        location: "handleFocusSearch",
                    }).enabled;
                if (
                    ((null == n ? void 0 : n.isThread()) &&
                        !l &&
                        (n = y.A.getChannel(null == n ? void 0 : n.parent_id)),
                    null == n)
                )
                    return void this.focusEditor();
                let { searchContext: s } = this.props;
                if (n.isPrivate() && s.type !== W.I4_.DMS) return void this.focusEditor();
                let a = (0, x.Rt)(n);
                null == a
                    ? this.focusEditor()
                    : ((0, P.Tf)({
                          searchContext: s,
                      }),
                      Promise.resolve().then(() => {
                          let { _editorRef: e } = this;
                          null == e || e.focus(),
                              this.handleSetSearchQuery({
                                  query: j.Ay[W.LWr.FILTER_IN].key + "".concat(a, " "),
                                  replace: !0,
                                  searchQuerySource: k.Q_.SEARCH_TEXT_INPUT,
                              });
                      }));
            }),
            U(this, "focusEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.focus());
            }),
            U(this, "blurEditor", () => {
                let { _editorRef: e } = this;
                null != e && Promise.resolve().then(() => e.blur());
            }),
            U(this, "setEditorRef", (e) => {
                var t, r, n, l, s, a;
                null == (r = this._editorRef) ||
                    null == (t = r.editor) ||
                    t.removeEventListener("cut", this.handleCutEvent),
                    (this._editorRef = e),
                    null == (l = this._editorRef) ||
                        null == (n = l.editor) ||
                        n.setAttribute("aria-haspopup", "listbox"),
                    null == (a = this._editorRef) ||
                        null == (s = a.editor) ||
                        s.addEventListener("cut", this.handleCutEvent);
            }),
            U(this, "onFocus", () => {
                let { searchContext: e } = this.props;
                this.setState({
                    focused: !0,
                }),
                    I.A.setFocused(e, !0);
            }),
            U(this, "handleBlur", () => {
                let { searchContext: e } = this.props;
                I.A.setFocused(e, !1),
                    this.setState(
                        {
                            focused: !1,
                        },
                        () => {
                            b.Im(this.props.editorState) && this.clearSearch();
                        },
                    );
            }),
            U(this, "onBlur", (e) => {
                this.handleBlur();
            }),
            U(this, "handleOption", () => {
                let { current: e } = this._searchPopoutRef;
                return (
                    null != e &&
                    e.selectOption({
                        searchAutocompleteSelectAction: k.oi.KEY_PRESS,
                    })
                );
            }),
            U(this, "handleReturn", (e) => {
                let { shiftKey: t } = e;
                return (
                    e.preventDefault(),
                    this.handleOption() ||
                        ((0, x.Eq)() && t
                            ? this.search({
                                  searchEverywhere: !0,
                                  searchQuerySource: k.Q_.SEARCH_TEXT_INPUT,
                              })
                            : this.search({
                                  searchQuerySource: k.Q_.SEARCH_TEXT_INPUT,
                              })),
                    "handled"
                );
            }),
            U(this, "handleBeforeInput", (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return (
                    b.pe(t).length >= q ||
                        ((t = b.le(e, t)),
                        (t = b.a4(t, q)),
                        (t = this.tokenize(t)),
                        this.setEditorState(t),
                        r ||
                            this.setState({
                                focused: !0,
                            })),
                    "handled"
                );
            }),
            U(this, "handleKeyCommand", (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                switch (e) {
                    case "backspace":
                    case "backspace-word":
                    case "backspace-to-start-of-line":
                    case "delete":
                    case "delete-word":
                        return (
                            (t = b.vE(e, t)),
                            (t = this.tokenize(t)),
                            this.setEditorState(t),
                            r ||
                                this.setState({
                                    focused: !0,
                                }),
                            "handled"
                        );
                    case "transpose-characters":
                    case "move-selection-to-start-of-block":
                    case "move-selection-to-end-of-block":
                        return (t = b.ON(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
                    case "split-block":
                    case "underline":
                    case "bold":
                    case "italic":
                        return "handled";
                }
                return "not-handled";
            }),
            U(this, "handlePastedText", (e) => {
                let { editorState: t } = this.props,
                    { focused: r } = this.state;
                return (
                    (e = null != e ? e.replace(/\n/g, "") : ""),
                    (t = b.le(e, t)),
                    (t = b.a4(t, q)),
                    (t = this.tokenize(t)),
                    r ||
                        this.setState({
                            focused: !0,
                        }),
                    this.setEditorState(t),
                    "handled"
                );
            }),
            U(this, "setEditorState", (e) => {
                let { searchContext: t } = this.props;
                L.A.updateSearchEditorState(t, e);
            }),
            U(this, "getPopoutRef", () => {
                let { current: e } = this._searchPopoutRef;
                return e;
            }),
            U(this, "handleKeyBind", (e) => {
                let { key: t, metaKey: r, shiftKey: n, ctrlKey: l } = e,
                    { editorState: s, searchContext: a, keyboardModeEnabled: i } = this.props;
                if ((e.stopPropagation(), (r || l) && "a" === t.toLowerCase())) {
                    e.preventDefault();
                    let t = b.y8(s);
                    return (
                        this.setEditorState(t),
                        this.setState({
                            focused: !0,
                        }),
                        !0
                    );
                }
                if ("Escape" === t) {
                    if ((e.preventDefault(), b.Im(s))) this.blurEditor();
                    else {
                        let e = b.Xq(s);
                        L.A.updateSearchEditorState(a, e),
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
                    if (i) return;
                    return (0, p.uS)(), !0;
                }
                if ("Home" === t || ("ArrowLeft" === t && r))
                    return e.preventDefault(), (s = n ? b.mQ(s) : b.aB(s)), this.setEditorState(s), !0;
                if ("End" === t || ("ArrowRight" === t && r))
                    return e.preventDefault(), (s = n ? b.Le(s) : b.Tj(s)), this.setEditorState(s), !0;
                if (("Delete" === t || "Backspace" === t) && r) {
                    let e = b.Xq(s);
                    return this.setEditorState(e), !0;
                }
                return b.K6(e);
            }),
            (0, x.Pe)();
    }
}

function Q(e) {
    let { searchContext: t, className: r } = e,
        s = (0, x.bS)(t),
        a = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        i = (0, u.bG)([w.A], () => w.A.getEditorState(s));
    l.useEffect(
        () => (
            S.A.setSelectedSearchContext(s),
            () => {
                S.A.setSelectedSearchContext(null);
            }
        ),
        [s],
    );
    let o = (0, u.bG)([w.A], () => w.A.getIsSearchTokensInitialized()),
        c = l.useRef(o);
    l.useEffect(() => {
        o && c.current !== o && ((c.current = o), N.A.ensureSearchInputDecorators(t));
    }, [o, t]);
    let h = l.useMemo(() => (null != i ? i : b.e_(O.ys(j.Ay))), [i]),
        { isSearching: p, hasResults: g } = (0, u.cf)([v.A], () => {
            let e = v.A.getTotalCount(s);
            return {
                hasResults: null != e && e > 0,
                isSearching: v.A.getIsFetching(s),
            };
        }),
        A = (0, u.bG)([E.Ay, m.A, y.A], () => {
            let e = m.A.getCurrentlySelectedChannelId(),
                t = y.A.getChannel(e);
            return E.Ay.getSection(e, null == t ? void 0 : t.isDM()) === W.YvQ.SEARCH;
        });
    l.useEffect(() => {
        I.A.setSidebarOpen(t, A);
    }, [t, A]);
    let R = (0, d.Ry6)(M.b);
    l.useEffect(() => {
        I.A.setFiltersModalOpen(t, R);
    }, [t, R]);
    let T = l.useCallback(
            (e) => {
                let { queryString: r, query: n, searchEverywhere: l, searchQuerySource: s } = e;
                I.A.refreshQueryId(t),
                    (0, P.fd)({
                        searchContext: t,
                        query: n,
                        queryString: r,
                        searchQuerySource: s,
                    }),
                    L.A.updateSearchMode(t, W.BBH.NEWEST),
                    G({
                        searchContext: t,
                        searchQueryString: r,
                        searchEverywhere: l,
                        offset: 0,
                    });
            },
            [t],
        ),
        C = (0, u.bG)([_.A, y.A], () => {
            let e = (0, x._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = _.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, x._b)(t);
            if (null != r) {
                let e = y.A.getChannel(r);
                return null == e ? null : (0, x.E3)(e);
            }
            return null;
        }),
        F = l.useMemo(() => {
            switch (t.type) {
                case W.I4_.DMS:
                    return D.intl.string(D.t.m7OrlR);
                case W.I4_.FAVORITES:
                    return D.intl.string(D.t["5h0QOP"]);
                default:
                    return D.intl.formatToPlainString(D.t.LDZtFO, {
                        name: C,
                    });
            }
        }, [t.type, C]);
    return (0, n.jsx)(K, {
        className: r,
        searchContext: t,
        isSearching: p,
        editorState: h,
        hasResults: g,
        keyboardModeEnabled: a,
        onSearch: T,
        placeholder: F,
    });
}

function B(e) {
    let { className: t, guildId: r, channelId: l } = e,
        s = (0, C.J)({
            guildId: r,
            channelId: l,
        });
    return null == s
        ? null
        : (0, n.jsx)(Q, {
              className: t,
              searchContext: s,
          });
}
