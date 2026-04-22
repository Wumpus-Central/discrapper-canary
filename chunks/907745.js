r.d(t, { Ay: () => Y, E2: () => Q });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(271830),
    o = r(985623),
    u = r.n(o),
    c = r(311907),
    h = r(765178),
    d = r(265872),
    _ = r(187322),
    E = r(884496),
    S = r(192308),
    f = r(988665),
    p = r(955572),
    g = r(775602),
    A = r(915089),
    y = r(138298),
    R = r(761640),
    m = r(734057),
    I = r(71393),
    T = r(309010),
    L = r(203982),
    x = r(504531),
    b = r(614690),
    N = r(256796),
    C = r(517381),
    F = r(822382),
    v = r(408730),
    O = r(771650),
    W = r(616252),
    k = r(753806),
    M = r(775427),
    w = r(65600),
    H = r(145331),
    j = r(242182),
    D = r(768570),
    P = r(921242),
    U = r(652215),
    $ = r(985018),
    q = r(673134);
let Q = 512,
    z = (0, A.Ld)(),
    B = u()(k.A.fetchMessages, 500);
class K extends s.PureComponent {
    state = { focused: !1, selectedIndex: void 0 };
    _editorRef;
    _containerRef = s.createRef();
    _searchBarRef = s.createRef();
    _searchPopoutRef = s.createRef();
    constructor(e) {
        super(e), (0, F.Pe)();
    }
    componentDidMount() {
        L._.subscribe(U.jej.PERFORM_SEARCH, this.search),
            L._.subscribe(U.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            L._.subscribe(U.jej.FOCUS_SEARCH, this.handleFocusSearch);
    }
    handleCutEvent = (e) => {
        if ((e.preventDefault(), null == e.clipboardData)) return;
        let { editorState: t } = this.props,
            r = t.getSelection();
        if (r.isCollapsed()) return;
        let n = x.pe(t),
            s = r.getStartOffset(),
            l = r.getEndOffset(),
            a = n.substring(s, l);
        e.clipboardData.setData("text/plain", a);
        let i = x.vE("delete", t);
        (i = this.tokenize(i)), this.setEditorState(i);
    };
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if (t !== e.editorState) {
            let e = x.pe(t),
                n = (0, F._o)(x.pe(t)),
                s = b.zZ(n, t);
            N.A.updateAutocompleteQuery({ searchContext: r, tokens: n, cursorScope: s, queryString: e }),
                null != this._editorRef && x.L9(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        L._.unsubscribe(U.jej.PERFORM_SEARCH, this.search),
            L._.unsubscribe(U.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            L._.unsubscribe(U.jej.FOCUS_SEARCH, this.handleFocusSearch),
            this._editorRef?.editor?.removeEventListener?.("cut", this.handleCutEvent);
    }
    handleSetSearchQuery = (e) => {
        let { query: t, anchor: r, focus: n, performSearch: s, replace: l, searchQuerySource: a } = e,
            { editorState: i } = this.props,
            o = x.pe(i);
        " " !== t.charAt(t.length - 1) && (t += " "),
            null != r && 0 !== r && " " !== o.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
            l ? ((i = x.t7(t, i)), (r = 0)) : (i = x.le(t, i, r, n)),
            (i = x.a4(i, Q)),
            (i = this.tokenize(i));
        let u = Number(r) + t.length;
        (i = x.UO(u, i)), this.setEditorState(i), s && this.search({ queryString: x.pe(i), searchQuerySource: a });
    };
    handleSelectedIndexChanged = (e) => {
        this._editorRef?.editor?.setAttribute("aria-activedescendant", null != e ? `${z}-${e}` : void 0),
            this.setState({ selectedIndex: e });
    };
    renderPopout = () =>
        (0, n.jsx)(j.A, {
            ref: this._searchPopoutRef,
            searchContext: this.props.searchContext,
            navId: z,
            onSelectedIndexChanged: this.handleSelectedIndexChanged,
        });
    tokenize(e) {
        let t = (0, F._o)(x.pe(e)).filter((e) => e.type !== f.Ay.NON_TOKEN_TYPE);
        return x.uD(t, e, O.Ay);
    }
    search = (e) => {
        let { isSearching: t } = this.props,
            { queryString: r, searchEverywhere: n, searchQuerySource: s } = e ?? {};
        if (null == r || "" === r) {
            let { editorState: e } = this.props;
            r = x.pe(e);
        }
        if (!t) {
            let e = (0, F._o)(r),
                t = (0, F.Zf)(e);
            for (let t = 0; t < e.length; t++)
                (0, F.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
            if (0 === e.length || 0 === Object.keys(t).length) return !1;
            this.props.onSearch({ queryString: r, query: t, searchEverywhere: n ?? !1, searchQuerySource: s }),
                h.O.announce($.intl.string($.t.pKCxWP)),
                this.handleBlur();
        }
        return !0;
    };
    clearSearch() {
        let { searchContext: e } = this.props;
        k.A.cleanUpSearchState(e);
    }
    handleClearSearch = (e) => {
        let { editorState: t, searchContext: r } = this.props,
            { focused: n } = this.state;
        (e.preventDefault(), e.stopPropagation(), "" === x.pe(t))
            ? this.focusEditor()
            : ((t = x.a4(t, 0)),
              this.setEditorState(t),
              (0, H.iK)({ searchContext: r }),
              n || Promise.resolve().then(() => this.blurEditor()));
    };
    handleFocusSearch = (e) => {
        let { prefillCurrentChannel: t } = e;
        if (!t) return void this.focusEditor();
        let r = T.A.getChannelId(),
            n = m.A.getChannel(r);
        if (null == n) return void this.focusEditor();
        let { searchContext: s } = this.props;
        if ((n.isPrivate() && s.type !== U.I4_.DMS) || n.isObfuscated()) return void this.focusEditor();
        let l = (0, F.Rt)(n);
        null == l
            ? this.focusEditor()
            : ((0, H.Tf)({ searchContext: s }),
              Promise.resolve().then(() => {
                  let { _editorRef: e } = this;
                  e?.focus(),
                      this.handleSetSearchQuery({
                          query: O.Ay[U.LWr.FILTER_IN].key + `${l} `,
                          replace: !0,
                          searchQuerySource: D.Q_.SEARCH_TEXT_INPUT,
                      });
              }));
    };
    focusEditor = () => {
        let { _editorRef: e } = this;
        null != e && Promise.resolve().then(() => e.focus());
    };
    blurEditor = () => {
        let { _editorRef: e } = this;
        null != e && Promise.resolve().then(() => e.blur());
    };
    setEditorRef = (e) => {
        this._editorRef?.editor?.removeEventListener("cut", this.handleCutEvent),
            (this._editorRef = e),
            this._editorRef?.editor?.setAttribute("aria-haspopup", "listbox"),
            this._editorRef?.editor?.addEventListener("cut", this.handleCutEvent);
    };
    onFocus = () => {
        let { searchContext: e } = this.props;
        this.setState({ focused: !0 }), v.A.setFocused(e, !0);
    };
    handleBlur = () => {
        let { searchContext: e } = this.props;
        v.A.setFocused(e, !1),
            this.setState({ focused: !1 }, () => {
                x.Im(this.props.editorState) && this.clearSearch();
            });
    };
    onBlur = (e) => {
        this.handleBlur();
    };
    handleOption = () => {
        let { current: e } = this._searchPopoutRef;
        return null != e && e.selectOption({ searchAutocompleteSelectAction: D.oi.KEY_PRESS });
    };
    handleReturn = (e) => (
        e.preventDefault(), this.handleOption() || this.search({ searchQuerySource: D.Q_.SEARCH_TEXT_INPUT }), "handled"
    );
    handleBeforeInput = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        return (
            x.pe(t).length >= Q ||
                ((t = x.le(e, t)),
                (t = x.a4(t, Q)),
                (t = this.tokenize(t)),
                this.setEditorState(t),
                r || this.setState({ focused: !0 })),
            "handled"
        );
    };
    handleKeyCommand = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        switch (e) {
            case "backspace":
            case "backspace-word":
            case "backspace-to-start-of-line":
            case "delete":
            case "delete-word":
                return (
                    (t = x.vE(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    r || this.setState({ focused: !0 }),
                    "handled"
                );
            case "transpose-characters":
            case "move-selection-to-start-of-block":
            case "move-selection-to-end-of-block":
                return (t = x.ON(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
            case "split-block":
            case "underline":
            case "bold":
            case "italic":
                return "handled";
        }
        return "not-handled";
    };
    handlePastedText = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        return (
            (e = null != e ? e.replace(/\n/g, "") : ""),
            (t = x.le(e, t)),
            (t = x.a4(t, Q)),
            (t = this.tokenize(t)),
            r || this.setState({ focused: !0 }),
            this.setEditorState(t),
            "handled"
        );
    };
    handlePastedFiles() {
        return "handled";
    }
    handleDroppedFiles() {
        return "handled";
    }
    handleDrop() {
        return "handled";
    }
    setEditorState = (e) => {
        let { searchContext: t } = this.props;
        W.A.updateSearchEditorState(t, e);
    };
    getPopoutRef = () => {
        let { current: e } = this._searchPopoutRef;
        return e;
    };
    handleKeyBind = (e) => {
        let { key: t, metaKey: r, shiftKey: n, ctrlKey: s } = e,
            { editorState: l, searchContext: a, keyboardModeEnabled: i } = this.props;
        if ((r || s) && "a" === t.toLowerCase()) {
            e.stopPropagation(), e.preventDefault();
            let t = x.y8(l);
            return this.setEditorState(t), this.setState({ focused: !0 }), !0;
        }
        if ("Escape" === t) {
            if ((e.stopPropagation(), e.preventDefault(), x.Im(l))) this.blurEditor();
            else {
                let e = x.Xq(l);
                W.A.updateSearchEditorState(a, e), this.setState({ focused: !0 });
            }
            return !0;
        }
        if ("ArrowUp" === t) {
            e.stopPropagation(), e.preventDefault();
            let t = this.getPopoutRef();
            return null != t && t.focusPreviousOption(), !0;
        }
        if ("ArrowDown" === t) {
            e.stopPropagation(), e.preventDefault();
            let t = this.getPopoutRef();
            return null != t && t.focusNextOption(), !0;
        }
        if ("Tab" === t) {
            if (i) return;
            return e.stopPropagation(), (0, p.uS)(), !0;
        }
        if ("Home" === t || ("ArrowLeft" === t && r))
            return e.stopPropagation(), e.preventDefault(), (l = n ? x.mQ(l) : x.aB(l)), this.setEditorState(l), !0;
        if ("End" === t || ("ArrowRight" === t && r))
            return e.stopPropagation(), e.preventDefault(), (l = n ? x.Le(l) : x.Tj(l)), this.setEditorState(l), !0;
        if ("Delete" === t && r) {
            e.stopPropagation();
            let t = x.Xq(l);
            return this.setEditorState(t), !0;
        }
        if ("Backspace" === t && r) {
            e.stopPropagation(), e.preventDefault();
            let t = l.getSelection().getEndOffset();
            return (
                t > 0 && ((l = x.le("", l, 0, t)), (l = this.tokenize(l)), (l = x.aB(l))), this.setEditorState(l), !0
            );
        }
        let o = x.K6(e);
        return null != o && e.stopPropagation(), o;
    };
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
            placeholder: r ?? $.intl.string($.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? z : void 0,
            ariaLabel: $.intl.string($.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: r, className: s } = this.props,
            { focused: l } = this.state,
            i = x.pe(t).length > 0;
        return (0, n.jsx)(d.Y, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: d.Y.Animation.NONE,
            shouldShow: l,
            autoInvert: !1,
            children: (t, o) => {
                let { isShown: u } = o;
                return (0, n.jsx)("div", {
                    className: s,
                    ref: this._containerRef,
                    children: (0, n.jsx)("div", {
                        className: a()(q.$P, { [q.ho]: i || l, [q.in]: l }),
                        children: (0, n.jsx)(_.vN, {
                            focusTarget: { current: this._editorRef?.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, n.jsxs)(
                                "div",
                                {
                                    className: q.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, n.jsx)(E.B, {
                                            onClear: this.handleClearSearch,
                                            hasContent: i || r,
                                            className: q.Kk,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, F.bS)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
}
function G(e) {
    let { searchContext: t, className: r } = e,
        l = (0, F.bS)(t),
        a = (0, c.bG)([g.A], () => g.A.keyboardModeEnabled),
        i = (0, c.bG)([w.A], () => w.A.getEditorState(l)),
        o = s.useMemo(() => (null != i ? i : x.e_(b.ys(O.Ay))), [i]);
    s.useEffect(() => {
        N.A.initializeAutocomplete(t);
    }, [t]);
    let u = (0, c.bG)([w.A], () => w.A.getIsSearchTokensInitialized()),
        h = s.useRef(u);
    s.useEffect(() => {
        u && h.current !== u && ((h.current = u), k.A.ensureSearchInputDecorators(t));
    }, [u, t]),
        s.useEffect(
            () => (
                y.A.setSelectedSearchContext(l),
                () => {
                    y.A.setSelectedSearchContext(null);
                }
            ),
            [l],
        );
    let { isSearching: d, hasResults: _ } = (0, c.cf)([C.A], () => {
            let e = C.A.getTotalCount(l);
            return { hasResults: null != e && e > 0, isSearching: C.A.getIsFetching(l) };
        }),
        E = (0, c.bG)([R.Ay, T.A, m.A], () => {
            let e = T.A.getCurrentlySelectedChannelId(),
                t = m.A.getChannel(e);
            return R.Ay.getSection(e, t?.isDM()) === U.YvQ.SEARCH;
        });
    s.useEffect(() => {
        v.A.setSidebarOpen(t, E);
    }, [t, E]);
    let f = (0, S.useHasModalOpen)(P.b);
    s.useEffect(() => {
        v.A.setFiltersModalOpen(t, f);
    }, [t, f]);
    let p = s.useCallback(
            (e) => {
                let { queryString: r, query: n, searchEverywhere: s, searchQuerySource: l } = e;
                v.A.refreshQueryId(t),
                    (0, H.fd)({ searchContext: t, query: n, queryString: r, searchQuerySource: l }),
                    W.A.updateSearchMode(t, U.BBH.NEWEST),
                    B({ searchContext: t, searchQueryString: r, searchEverywhere: s, offset: 0 });
            },
            [t],
        ),
        A = (0, c.bG)([I.A, m.A], () => {
            let e = (0, F._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = I.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, F._b)(t);
            if (null != r) {
                let e = m.A.getChannel(r);
                return null == e ? null : (0, F.E3)(e);
            }
            return null;
        }),
        L = s.useMemo(
            () =>
                t.type === U.I4_.DMS
                    ? $.intl.string($.t.m7OrlR)
                    : null != A
                      ? $.intl.formatToPlainString($.t.LDZtFO, { name: A })
                      : $.intl.string($.t["5h0QOP"]),
            [t.type, A],
        );
    return (0, n.jsx)(K, {
        className: r,
        searchContext: t,
        isSearching: d,
        editorState: o,
        hasResults: _,
        keyboardModeEnabled: a,
        onSearch: p,
        placeholder: L,
    });
}
function Y(e) {
    let { className: t, guildId: r, channelId: s } = e,
        l = (0, M.J)({ guildId: r, channelId: s });
    return null == l ? null : (0, n.jsx)(G, { className: t, searchContext: l });
}
