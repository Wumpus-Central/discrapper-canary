r.d(t, { Ay: () => z, E2: () => P });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(271830),
    o = r(985623),
    c = r.n(o),
    u = r(311907),
    d = r(397927),
    h = r(988665),
    _ = r(955572),
    f = r(775602),
    S = r(915089),
    E = r(138298),
    g = r(761640),
    p = r(734057),
    A = r(71393),
    m = r(309010),
    R = r(203982),
    y = r(504531),
    x = r(614690),
    T = r(256796),
    I = r(517381),
    b = r(822382),
    L = r(408730),
    C = r(771650),
    N = r(616252),
    v = r(753806),
    F = r(775427),
    O = r(65600),
    k = r(145331),
    j = r(242182),
    M = r(768570),
    W = r(921242),
    w = r(652215),
    D = r(985018),
    H = r(534207);
let P = 512,
    U = (0, S.Ld)(),
    q = c()(v.A.fetchMessages, 500);
class $ extends s.PureComponent {
    state = { focused: !1, selectedIndex: void 0 };
    _editorRef;
    _containerRef = s.createRef();
    _searchBarRef = s.createRef();
    _searchPopoutRef = s.createRef();
    constructor(e) {
        super(e), (0, b.Pe)();
    }
    componentDidMount() {
        R._.subscribe(w.jej.PERFORM_SEARCH, this.search),
            R._.subscribe(w.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            R._.subscribe(w.jej.FOCUS_SEARCH, this.handleFocusSearch);
    }
    handleCutEvent = (e) => {
        if ((e.preventDefault(), null == e.clipboardData)) return;
        let { editorState: t } = this.props,
            r = t.getSelection();
        if (r.isCollapsed()) return;
        let n = y.pe(t),
            s = r.getStartOffset(),
            l = r.getEndOffset(),
            a = n.substring(s, l);
        e.clipboardData.setData("text/plain", a);
        let i = y.vE("delete", t);
        (i = this.tokenize(i)), this.setEditorState(i);
    };
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if (t !== e.editorState) {
            let e = y.pe(t),
                n = (0, b._o)(y.pe(t)),
                s = x.zZ(n, t);
            T.A.updateAutocompleteQuery({ searchContext: r, tokens: n, cursorScope: s, queryString: e }),
                null != this._editorRef && y.L9(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        R._.unsubscribe(w.jej.PERFORM_SEARCH, this.search),
            R._.unsubscribe(w.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            R._.unsubscribe(w.jej.FOCUS_SEARCH, this.handleFocusSearch),
            this._editorRef?.editor?.removeEventListener?.("cut", this.handleCutEvent);
    }
    handleSetSearchQuery = (e) => {
        let { query: t, anchor: r, focus: n, performSearch: s, replace: l, searchQuerySource: a } = e,
            { editorState: i } = this.props,
            o = y.pe(i);
        " " !== t.charAt(t.length - 1) && (t += " "),
            null != r && 0 !== r && " " !== o.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
            l ? ((i = y.t7(t, i)), (r = 0)) : (i = y.le(t, i, r, n)),
            (i = y.a4(i, P)),
            (i = this.tokenize(i));
        let c = Number(r) + t.length;
        (i = y.UO(c, i)), this.setEditorState(i), s && this.search({ queryString: y.pe(i), searchQuerySource: a });
    };
    handleSelectedIndexChanged = (e) => {
        this._editorRef?.editor?.setAttribute("aria-activedescendant", null != e ? `${U}-${e}` : void 0),
            this.setState({ selectedIndex: e });
    };
    renderPopout = () =>
        (0, n.jsx)(j.A, {
            ref: this._searchPopoutRef,
            searchContext: this.props.searchContext,
            navId: U,
            onSelectedIndexChanged: this.handleSelectedIndexChanged,
        });
    tokenize(e) {
        let t = (0, b._o)(y.pe(e)).filter((e) => e.type !== h.Ay.NON_TOKEN_TYPE);
        return y.uD(t, e, C.Ay);
    }
    search = (e) => {
        let { isSearching: t } = this.props,
            { queryString: r, searchEverywhere: n, searchQuerySource: s } = e ?? {};
        if (null == r || "" === r) {
            let { editorState: e } = this.props;
            r = y.pe(e);
        }
        if (!t) {
            let e = (0, b._o)(r),
                t = (0, b.Zf)(e);
            for (let t = 0; t < e.length; t++)
                (0, b.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
            if (0 === e.length || 0 === Object.keys(t).length) return !1;
            this.props.onSearch({ queryString: r, query: t, searchEverywhere: n ?? !1, searchQuerySource: s }),
                d.ORC.announce(D.intl.string(D.t.pKCxWP)),
                this.handleBlur();
        }
        return !0;
    };
    clearSearch() {
        let { searchContext: e } = this.props;
        v.A.cleanUpSearchState(e);
    }
    handleClearSearch = (e) => {
        let { editorState: t, searchContext: r } = this.props,
            { focused: n } = this.state;
        (e.preventDefault(), e.stopPropagation(), "" === y.pe(t))
            ? this.focusEditor()
            : ((t = y.a4(t, 0)),
              this.setEditorState(t),
              (0, k.iK)({ searchContext: r }),
              n || Promise.resolve().then(() => this.blurEditor()));
    };
    handleFocusSearch = (e) => {
        let { prefillCurrentChannel: t } = e;
        if (!t) return void this.focusEditor();
        let r = m.A.getChannelId(),
            n = p.A.getChannel(r);
        if (null == n) return void this.focusEditor();
        let { searchContext: s } = this.props;
        if ((n.isPrivate() && s.type !== w.I4_.DMS) || n.isObfuscated()) return void this.focusEditor();
        let l = (0, b.Rt)(n);
        null == l
            ? this.focusEditor()
            : ((0, k.Tf)({ searchContext: s }),
              Promise.resolve().then(() => {
                  let { _editorRef: e } = this;
                  e?.focus(),
                      this.handleSetSearchQuery({
                          query: C.Ay[w.LWr.FILTER_IN].key + `${l} `,
                          replace: !0,
                          searchQuerySource: M.Q_.SEARCH_TEXT_INPUT,
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
        this.setState({ focused: !0 }), L.A.setFocused(e, !0);
    };
    handleBlur = () => {
        let { searchContext: e } = this.props;
        L.A.setFocused(e, !1),
            this.setState({ focused: !1 }, () => {
                y.Im(this.props.editorState) && this.clearSearch();
            });
    };
    onBlur = (e) => {
        this.handleBlur();
    };
    handleOption = () => {
        let { current: e } = this._searchPopoutRef;
        return null != e && e.selectOption({ searchAutocompleteSelectAction: M.oi.KEY_PRESS });
    };
    handleReturn = (e) => {
        let { shiftKey: t } = e;
        return (
            e.preventDefault(),
            this.handleOption() ||
                ((0, b.Eq)() && t
                    ? this.search({ searchEverywhere: !0, searchQuerySource: M.Q_.SEARCH_TEXT_INPUT })
                    : this.search({ searchQuerySource: M.Q_.SEARCH_TEXT_INPUT })),
            "handled"
        );
    };
    handleBeforeInput = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        return (
            y.pe(t).length >= P ||
                ((t = y.le(e, t)),
                (t = y.a4(t, P)),
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
                    (t = y.vE(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    r || this.setState({ focused: !0 }),
                    "handled"
                );
            case "transpose-characters":
            case "move-selection-to-start-of-block":
            case "move-selection-to-end-of-block":
                return (t = y.ON(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
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
            (t = y.le(e, t)),
            (t = y.a4(t, P)),
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
        N.A.updateSearchEditorState(t, e);
    };
    getPopoutRef = () => {
        let { current: e } = this._searchPopoutRef;
        return e;
    };
    handleKeyBind = (e) => {
        let { key: t, metaKey: r, shiftKey: n, ctrlKey: s } = e,
            { editorState: l, searchContext: a, keyboardModeEnabled: i } = this.props;
        if ((e.stopPropagation(), (r || s) && "a" === t.toLowerCase())) {
            e.preventDefault();
            let t = y.y8(l);
            return this.setEditorState(t), this.setState({ focused: !0 }), !0;
        }
        if ("Escape" === t) {
            if ((e.preventDefault(), y.Im(l))) this.blurEditor();
            else {
                let e = y.Xq(l);
                N.A.updateSearchEditorState(a, e), this.setState({ focused: !0 });
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
            return (0, _.uS)(), !0;
        }
        if ("Home" === t || ("ArrowLeft" === t && r))
            return e.preventDefault(), (l = n ? y.mQ(l) : y.aB(l)), this.setEditorState(l), !0;
        if ("End" === t || ("ArrowRight" === t && r))
            return e.preventDefault(), (l = n ? y.Le(l) : y.Tj(l)), this.setEditorState(l), !0;
        if (("Delete" === t || "Backspace" === t) && r) {
            let e = y.Xq(l);
            return this.setEditorState(e), !0;
        }
        return y.K6(e);
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
            placeholder: r ?? D.intl.string(D.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? U : void 0,
            ariaLabel: D.intl.string(D.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: r, className: s } = this.props,
            { focused: l } = this.state,
            i = y.pe(t).length > 0;
        return (0, n.jsx)(d.YNO, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: d.YNO.Animation.NONE,
            shouldShow: l,
            autoInvert: !1,
            children: (t, o) => {
                let { isShown: c } = o;
                return (0, n.jsx)("div", {
                    className: s,
                    ref: this._containerRef,
                    children: (0, n.jsx)("div", {
                        className: a()(H.$P, { [H.ho]: i || l, [H.in]: l }),
                        children: (0, n.jsx)(d.vN3, {
                            focusTarget: { current: this._editorRef?.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, n.jsxs)(
                                "div",
                                {
                                    className: H.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(c),
                                        (0, n.jsx)(d.BT5, {
                                            onClear: this.handleClearSearch,
                                            hasContent: i || r,
                                            className: H.Kk,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, b.bS)(e),
                            ),
                        }),
                    }),
                });
            },
        });
    }
}
function Q(e) {
    let { searchContext: t, className: r } = e,
        l = (0, b.bS)(t),
        a = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled),
        i = (0, u.bG)([O.A], () => O.A.getEditorState(l)),
        o = s.useMemo(() => (null != i ? i : y.e_(x.ys(C.Ay))), [i]);
    s.useEffect(() => {
        T.A.initializeAutocomplete(t);
    }, [t]);
    let c = (0, u.bG)([O.A], () => O.A.getIsSearchTokensInitialized()),
        h = s.useRef(c);
    s.useEffect(() => {
        c && h.current !== c && ((h.current = c), v.A.ensureSearchInputDecorators(t));
    }, [c, t]),
        s.useEffect(
            () => (
                E.A.setSelectedSearchContext(l),
                () => {
                    E.A.setSelectedSearchContext(null);
                }
            ),
            [l],
        );
    let { isSearching: _, hasResults: S } = (0, u.cf)([I.A], () => {
            let e = I.A.getTotalCount(l);
            return { hasResults: null != e && e > 0, isSearching: I.A.getIsFetching(l) };
        }),
        R = (0, u.bG)([g.Ay, m.A, p.A], () => {
            let e = m.A.getCurrentlySelectedChannelId(),
                t = p.A.getChannel(e);
            return g.Ay.getSection(e, t?.isDM()) === w.YvQ.SEARCH;
        });
    s.useEffect(() => {
        L.A.setSidebarOpen(t, R);
    }, [t, R]);
    let F = (0, d.Ry6)(W.b);
    s.useEffect(() => {
        L.A.setFiltersModalOpen(t, F);
    }, [t, F]);
    let j = s.useCallback(
            (e) => {
                let { queryString: r, query: n, searchEverywhere: s, searchQuerySource: l } = e;
                L.A.refreshQueryId(t),
                    (0, k.fd)({ searchContext: t, query: n, queryString: r, searchQuerySource: l }),
                    N.A.updateSearchMode(t, w.BBH.NEWEST),
                    q({ searchContext: t, searchQueryString: r, searchEverywhere: s, offset: 0 });
            },
            [t],
        ),
        M = (0, u.bG)([A.A, p.A], () => {
            let e = (0, b._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = A.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, b._b)(t);
            if (null != r) {
                let e = p.A.getChannel(r);
                return null == e ? null : (0, b.E3)(e);
            }
            return null;
        }),
        H = s.useMemo(() => {
            switch (t.type) {
                case w.I4_.DMS:
                    return D.intl.string(D.t.m7OrlR);
                case w.I4_.FAVORITES:
                    return D.intl.string(D.t["5h0QOP"]);
                default:
                    return D.intl.formatToPlainString(D.t.LDZtFO, { name: M });
            }
        }, [t.type, M]);
    return (0, n.jsx)($, {
        className: r,
        searchContext: t,
        isSearching: _,
        editorState: o,
        hasResults: S,
        keyboardModeEnabled: a,
        onSearch: j,
        placeholder: H,
    });
}
function z(e) {
    let { className: t, guildId: r, channelId: s } = e,
        l = (0, F.J)({ guildId: r, channelId: s });
    return null == l ? null : (0, n.jsx)(Q, { className: t, searchContext: l });
}
