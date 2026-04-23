r.d(t, { Ay: () => X, E2: () => j });
var s = r(627968),
    i = r(64700),
    a = r(503698),
    n = r.n(a),
    o = r(271830),
    h = r(985623),
    l = r.n(h),
    _ = r(17928),
    d = r(765178),
    c = r(922016),
    u = r(187322),
    p = r(884496),
    E = r(192308),
    A = r(988665),
    S = r(955572),
    f = r(775602),
    y = r(915089),
    g = r(138298),
    R = r(761640),
    I = r(734057),
    C = r(71393),
    m = r(309010),
    T = r(625494),
    N = r(504531),
    L = r(77277),
    W = r(256796),
    b = r(517381),
    H = r(822382),
    P = r(443390),
    D = r(304578),
    O = r(616252),
    k = r(753806),
    M = r(775427),
    v = r(65600),
    F = r(145331),
    x = r(618989),
    w = r(768570),
    q = r(921242),
    Q = r(652215),
    U = r(985018),
    B = r(85486);
let j = 512,
    K = (0, y.Ld)(),
    G = l()(k.A.fetchMessages, 500);
class Y extends i.PureComponent {
    state = { focused: !1, selectedIndex: void 0 };
    _editorRef;
    _containerRef = i.createRef();
    _searchBarRef = i.createRef();
    _searchPopoutRef = i.createRef();
    constructor(e) {
        super(e), (0, H.Pe)();
    }
    componentDidMount() {
        T._.subscribe(Q.jej.PERFORM_SEARCH, this.search),
            T._.subscribe(Q.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            T._.subscribe(Q.jej.FOCUS_SEARCH, this.handleFocusSearch);
    }
    handleCutEvent = (e) => {
        if ((e.preventDefault(), null == e.clipboardData)) return;
        let { editorState: t } = this.props,
            r = t.getSelection();
        if (r.isCollapsed()) return;
        let s = N.pe(t),
            i = r.getStartOffset(),
            a = r.getEndOffset(),
            n = s.substring(i, a);
        e.clipboardData.setData("text/plain", n);
        let o = N.vE("delete", t);
        (o = this.tokenize(o)), this.setEditorState(o);
    };
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if (t !== e.editorState) {
            let e = N.pe(t),
                s = (0, H._o)(N.pe(t)),
                i = L.zZ(s, t);
            W.A.updateAutocompleteQuery({ searchContext: r, tokens: s, cursorScope: i, queryString: e }),
                null != this._editorRef && N.L9(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        T._.unsubscribe(Q.jej.PERFORM_SEARCH, this.search),
            T._.unsubscribe(Q.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            T._.unsubscribe(Q.jej.FOCUS_SEARCH, this.handleFocusSearch),
            this._editorRef?.editor?.removeEventListener?.("cut", this.handleCutEvent);
    }
    handleSetSearchQuery = (e) => {
        let { query: t, anchor: r, focus: s, performSearch: i, replace: a, searchQuerySource: n } = e,
            { editorState: o } = this.props,
            h = N.pe(o);
        " " !== t.charAt(t.length - 1) && (t += " "),
            null != r && 0 !== r && " " !== h.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
            a ? ((o = N.t7(t, o)), (r = 0)) : (o = N.le(t, o, r, s)),
            (o = N.a4(o, j)),
            (o = this.tokenize(o));
        let l = Number(r) + t.length;
        (o = N.UO(l, o)), this.setEditorState(o), i && this.search({ queryString: N.pe(o), searchQuerySource: n });
    };
    handleSelectedIndexChanged = (e) => {
        this._editorRef?.editor?.setAttribute("aria-activedescendant", null != e ? `${K}-${e}` : void 0),
            this.setState({ selectedIndex: e });
    };
    renderPopout = () =>
        (0, s.jsx)(x.A, {
            ref: this._searchPopoutRef,
            searchContext: this.props.searchContext,
            navId: K,
            onSelectedIndexChanged: this.handleSelectedIndexChanged,
        });
    tokenize(e) {
        let t = (0, H._o)(N.pe(e)).filter((e) => e.type !== A.Ay.NON_TOKEN_TYPE);
        return N.uD(t, e, D.Ay);
    }
    search = (e) => {
        let { isSearching: t } = this.props,
            { queryString: r, searchEverywhere: s, searchQuerySource: i } = e ?? {};
        if (null == r || "" === r) {
            let { editorState: e } = this.props;
            r = N.pe(e);
        }
        if (!t) {
            let e = (0, H._o)(r),
                t = (0, H.Zf)(e);
            for (let t = 0; t < e.length; t++)
                (0, H.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
            if (0 === e.length || 0 === Object.keys(t).length) return !1;
            this.props.onSearch({ queryString: r, query: t, searchEverywhere: s ?? !1, searchQuerySource: i }),
                d.O.announce(U.intl.string(U.t.pKCxWP)),
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
            { focused: s } = this.state;
        (e.preventDefault(), e.stopPropagation(), "" === N.pe(t))
            ? this.focusEditor()
            : ((t = N.a4(t, 0)),
              this.setEditorState(t),
              (0, F.iK)({ searchContext: r }),
              s || Promise.resolve().then(() => this.blurEditor()));
    };
    handleFocusSearch = (e) => {
        let { prefillCurrentChannel: t } = e;
        if (!t) return void this.focusEditor();
        let r = m.A.getChannelId(),
            s = I.A.getChannel(r);
        if (null == s) return void this.focusEditor();
        let { searchContext: i } = this.props;
        if ((s.isPrivate() && i.type !== Q.I4_.DMS) || s.isObfuscated()) return void this.focusEditor();
        let a = (0, H.Rt)(s);
        null == a
            ? this.focusEditor()
            : ((0, F.Tf)({ searchContext: i }),
              Promise.resolve().then(() => {
                  let { _editorRef: e } = this;
                  e?.focus(),
                      this.handleSetSearchQuery({
                          query: D.Ay[Q.LWr.FILTER_IN].key + `${a} `,
                          replace: !0,
                          searchQuerySource: w.Q_.SEARCH_TEXT_INPUT,
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
        this.setState({ focused: !0 }), P.A.setFocused(e, !0);
    };
    handleBlur = () => {
        let { searchContext: e } = this.props;
        P.A.setFocused(e, !1),
            this.setState({ focused: !1 }, () => {
                N.Im(this.props.editorState) && this.clearSearch();
            });
    };
    onBlur = (e) => {
        this.handleBlur();
    };
    handleOption = () => {
        let { current: e } = this._searchPopoutRef;
        return null != e && e.selectOption({ searchAutocompleteSelectAction: w.oi.KEY_PRESS });
    };
    handleReturn = (e) => (
        e.preventDefault(), this.handleOption() || this.search({ searchQuerySource: w.Q_.SEARCH_TEXT_INPUT }), "handled"
    );
    handleBeforeInput = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        return (
            N.pe(t).length >= j ||
                ((t = N.le(e, t)),
                (t = N.a4(t, j)),
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
                    (t = N.vE(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    r || this.setState({ focused: !0 }),
                    "handled"
                );
            case "transpose-characters":
            case "move-selection-to-start-of-block":
            case "move-selection-to-end-of-block":
                return (t = N.ON(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
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
            (t = N.le(e, t)),
            (t = N.a4(t, j)),
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
        O.A.updateSearchEditorState(t, e);
    };
    getPopoutRef = () => {
        let { current: e } = this._searchPopoutRef;
        return e;
    };
    handleKeyBind = (e) => {
        let { key: t, metaKey: r, shiftKey: s, ctrlKey: i } = e,
            { editorState: a, searchContext: n, keyboardModeEnabled: o } = this.props;
        if ((r || i) && "a" === t.toLowerCase()) {
            e.stopPropagation(), e.preventDefault();
            let t = N.y8(a);
            return this.setEditorState(t), this.setState({ focused: !0 }), !0;
        }
        if ("Escape" === t) {
            if ((e.stopPropagation(), e.preventDefault(), N.Im(a))) this.blurEditor();
            else {
                let e = N.Xq(a);
                O.A.updateSearchEditorState(n, e), this.setState({ focused: !0 });
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
            if (o) return;
            return e.stopPropagation(), (0, S.uS)(), !0;
        }
        if ("Home" === t || ("ArrowLeft" === t && r))
            return e.stopPropagation(), e.preventDefault(), (a = s ? N.mQ(a) : N.aB(a)), this.setEditorState(a), !0;
        if ("End" === t || ("ArrowRight" === t && r))
            return e.stopPropagation(), e.preventDefault(), (a = s ? N.Le(a) : N.Tj(a)), this.setEditorState(a), !0;
        if ("Delete" === t && r) {
            e.stopPropagation();
            let t = N.Xq(a);
            return this.setEditorState(t), !0;
        }
        if ("Backspace" === t && r) {
            e.stopPropagation(), e.preventDefault();
            let t = a.getSelection().getEndOffset();
            return (
                t > 0 && ((a = N.le("", a, 0, t)), (a = this.tokenize(a)), (a = N.aB(a))), this.setEditorState(a), !0
            );
        }
        let h = N.K6(e);
        return null != h && e.stopPropagation(), h;
    };
    renderInput(e) {
        let { editorState: t, placeholder: r } = this.props;
        return (0, s.jsx)(o.Editor, {
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
            placeholder: r ?? U.intl.string(U.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? K : void 0,
            ariaLabel: U.intl.string(U.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: r, className: i } = this.props,
            { focused: a } = this.state,
            o = N.pe(t).length > 0;
        return (0, s.jsx)(c.Y, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: c.Y.Animation.NONE,
            shouldShow: a,
            autoInvert: !1,
            children: (t, h) => {
                let { isShown: l } = h;
                return (0, s.jsx)("div", {
                    className: i,
                    ref: this._containerRef,
                    children: (0, s.jsx)("div", {
                        className: n()(B.$P, { [B.ho]: o || a, [B.in]: a }),
                        children: (0, s.jsx)(u.vN, {
                            focusTarget: { current: this._editorRef?.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, s.jsxs)(
                                "div",
                                {
                                    className: B.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(l),
                                        (0, s.jsx)(p.B, {
                                            onClear: this.handleClearSearch,
                                            hasContent: o || r,
                                            className: B.Kk,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, H.bS)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
}
function z(e) {
    let { searchContext: t, className: r } = e,
        a = (0, H.bS)(t),
        n = (0, _.bG)([f.A], () => f.A.keyboardModeEnabled),
        o = (0, _.bG)([v.A], () => v.A.getEditorState(a)),
        h = i.useMemo(() => (null != o ? o : N.e_(L.ys(D.Ay))), [o]);
    i.useEffect(() => {
        W.A.initializeAutocomplete(t);
    }, [t]);
    let l = (0, _.bG)([v.A], () => v.A.getIsSearchTokensInitialized()),
        d = i.useRef(l);
    i.useEffect(() => {
        l && d.current !== l && ((d.current = l), k.A.ensureSearchInputDecorators(t));
    }, [l, t]),
        i.useEffect(
            () => (
                g.A.setSelectedSearchContext(a),
                () => {
                    g.A.setSelectedSearchContext(null);
                }
            ),
            [a],
        );
    let { isSearching: c, hasResults: u } = (0, _.cf)([b.A], () => {
            let e = b.A.getTotalCount(a);
            return { hasResults: null != e && e > 0, isSearching: b.A.getIsFetching(a) };
        }),
        p = (0, _.bG)([R.Ay, m.A, I.A], () => {
            let e = m.A.getCurrentlySelectedChannelId(),
                t = I.A.getChannel(e);
            return R.Ay.getSection(e, t?.isDM()) === Q.YvQ.SEARCH;
        });
    i.useEffect(() => {
        P.A.setSidebarOpen(t, p);
    }, [t, p]);
    let A = (0, E.useHasModalOpen)(q.b);
    i.useEffect(() => {
        P.A.setFiltersModalOpen(t, A);
    }, [t, A]);
    let S = i.useCallback(
            (e) => {
                let { queryString: r, query: s, searchEverywhere: i, searchQuerySource: a } = e;
                P.A.refreshQueryId(t),
                    (0, F.fd)({ searchContext: t, query: s, queryString: r, searchQuerySource: a }),
                    O.A.updateSearchMode(t, Q.BBH.NEWEST),
                    G({ searchContext: t, searchQueryString: r, searchEverywhere: i, offset: 0 });
            },
            [t],
        ),
        y = (0, _.bG)([C.A, I.A], () => {
            let e = (0, H._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = C.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, H._b)(t);
            if (null != r) {
                let e = I.A.getChannel(r);
                return null == e ? null : (0, H.E3)(e);
            }
            return null;
        }),
        T = i.useMemo(
            () =>
                t.type === Q.I4_.DMS
                    ? U.intl.string(U.t.m7OrlR)
                    : null != y
                      ? U.intl.formatToPlainString(U.t.LDZtFO, { name: y })
                      : U.intl.string(U.t["5h0QOP"]),
            [t.type, y],
        );
    return (0, s.jsx)(Y, {
        className: r,
        searchContext: t,
        isSearching: c,
        editorState: h,
        hasResults: u,
        keyboardModeEnabled: n,
        onSearch: S,
        placeholder: T,
    });
}
function X(e) {
    let { className: t, guildId: r, channelId: i } = e,
        a = (0, M.J)({ guildId: r, channelId: i });
    return null == a ? null : (0, s.jsx)(z, { className: t, searchContext: a });
}
