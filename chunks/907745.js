r.d(t, { Ay: () => z, E2: () => P });
var s = r(627968),
    n = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(271830),
    o = r(985623),
    u = r.n(o),
    c = r(311907),
    d = r(397927),
    h = r(988665),
    _ = r(955572),
    E = r(775602),
    S = r(915089),
    f = r(138298),
    g = r(761640),
    A = r(734057),
    p = r(71393),
    R = r(309010),
    m = r(203982),
    y = r(504531),
    T = r(614690),
    I = r(256796),
    x = r(517381),
    L = r(822382),
    b = r(408730),
    N = r(771650),
    C = r(616252),
    v = r(753806),
    F = r(775427),
    O = r(65600),
    j = r(145331),
    k = r(242182),
    W = r(768570),
    M = r(921242),
    w = r(652215),
    D = r(985018),
    H = r(534207);
let P = 512,
    U = (0, S.Ld)(),
    q = u()(v.A.fetchMessages, 500);
class $ extends n.PureComponent {
    state = { focused: !1, selectedIndex: void 0 };
    _editorRef;
    _containerRef = n.createRef();
    _searchBarRef = n.createRef();
    _searchPopoutRef = n.createRef();
    constructor(e) {
        super(e), (0, L.Pe)();
    }
    componentDidMount() {
        m._.subscribe(w.jej.PERFORM_SEARCH, this.search),
            m._.subscribe(w.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            m._.subscribe(w.jej.FOCUS_SEARCH, this.handleFocusSearch);
    }
    handleCutEvent = (e) => {
        if ((e.preventDefault(), null == e.clipboardData)) return;
        let { editorState: t } = this.props,
            r = t.getSelection();
        if (r.isCollapsed()) return;
        let s = y.pe(t),
            n = r.getStartOffset(),
            l = r.getEndOffset(),
            a = s.substring(n, l);
        e.clipboardData.setData("text/plain", a);
        let i = y.vE("delete", t);
        (i = this.tokenize(i)), this.setEditorState(i);
    };
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if (t !== e.editorState) {
            let e = y.pe(t),
                s = (0, L._o)(y.pe(t)),
                n = T.zZ(s, t);
            I.A.updateAutocompleteQuery({ searchContext: r, tokens: s, cursorScope: n, queryString: e }),
                null != this._editorRef && y.L9(this._editorRef.editor);
        }
    }
    componentWillUnmount() {
        m._.unsubscribe(w.jej.PERFORM_SEARCH, this.search),
            m._.unsubscribe(w.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery),
            m._.unsubscribe(w.jej.FOCUS_SEARCH, this.handleFocusSearch),
            this._editorRef?.editor?.removeEventListener?.("cut", this.handleCutEvent);
    }
    handleSetSearchQuery = (e) => {
        let { query: t, anchor: r, focus: s, performSearch: n, replace: l, searchQuerySource: a } = e,
            { editorState: i } = this.props,
            o = y.pe(i);
        " " !== t.charAt(t.length - 1) && (t += " "),
            null != r && 0 !== r && " " !== o.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
            l ? ((i = y.t7(t, i)), (r = 0)) : (i = y.le(t, i, r, s)),
            (i = y.a4(i, P)),
            (i = this.tokenize(i));
        let u = Number(r) + t.length;
        (i = y.UO(u, i)), this.setEditorState(i), n && this.search({ queryString: y.pe(i), searchQuerySource: a });
    };
    handleSelectedIndexChanged = (e) => {
        this._editorRef?.editor?.setAttribute("aria-activedescendant", null != e ? `${U}-${e}` : void 0),
            this.setState({ selectedIndex: e });
    };
    renderPopout = () =>
        (0, s.jsx)(k.A, {
            ref: this._searchPopoutRef,
            searchContext: this.props.searchContext,
            navId: U,
            onSelectedIndexChanged: this.handleSelectedIndexChanged,
        });
    tokenize(e) {
        let t = (0, L._o)(y.pe(e)).filter((e) => e.type !== h.Ay.NON_TOKEN_TYPE);
        return y.uD(t, e, N.Ay);
    }
    search = (e) => {
        let { isSearching: t } = this.props,
            { queryString: r, searchEverywhere: s, searchQuerySource: n } = e ?? {};
        if (null == r || "" === r) {
            let { editorState: e } = this.props;
            r = y.pe(e);
        }
        if (!t) {
            let e = (0, L._o)(r),
                t = (0, L.Zf)(e);
            for (let t = 0; t < e.length; t++)
                (0, L.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
            if (0 === e.length || 0 === Object.keys(t).length) return !1;
            this.props.onSearch({ queryString: r, query: t, searchEverywhere: s ?? !1, searchQuerySource: n }),
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
            { focused: s } = this.state;
        (e.preventDefault(), e.stopPropagation(), "" === y.pe(t))
            ? this.focusEditor()
            : ((t = y.a4(t, 0)),
              this.setEditorState(t),
              (0, j.iK)({ searchContext: r }),
              s || Promise.resolve().then(() => this.blurEditor()));
    };
    handleFocusSearch = (e) => {
        let { prefillCurrentChannel: t } = e;
        if (!t) return void this.focusEditor();
        let r = R.A.getChannelId(),
            s = A.A.getChannel(r);
        if (null == s) return void this.focusEditor();
        let { searchContext: n } = this.props;
        if ((s.isPrivate() && n.type !== w.I4_.DMS) || s.isObfuscated()) return void this.focusEditor();
        let l = (0, L.Rt)(s);
        null == l
            ? this.focusEditor()
            : ((0, j.Tf)({ searchContext: n }),
              Promise.resolve().then(() => {
                  let { _editorRef: e } = this;
                  e?.focus(),
                      this.handleSetSearchQuery({
                          query: N.Ay[w.LWr.FILTER_IN].key + `${l} `,
                          replace: !0,
                          searchQuerySource: W.Q_.SEARCH_TEXT_INPUT,
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
        this.setState({ focused: !0 }), b.A.setFocused(e, !0);
    };
    handleBlur = () => {
        let { searchContext: e } = this.props;
        b.A.setFocused(e, !1),
            this.setState({ focused: !1 }, () => {
                y.Im(this.props.editorState) && this.clearSearch();
            });
    };
    onBlur = (e) => {
        this.handleBlur();
    };
    handleOption = () => {
        let { current: e } = this._searchPopoutRef;
        return null != e && e.selectOption({ searchAutocompleteSelectAction: W.oi.KEY_PRESS });
    };
    handleReturn = (e) => {
        let { shiftKey: t } = e;
        return (
            e.preventDefault(),
            this.handleOption() ||
                ((0, L.Eq)() && t
                    ? this.search({ searchEverywhere: !0, searchQuerySource: W.Q_.SEARCH_TEXT_INPUT })
                    : this.search({ searchQuerySource: W.Q_.SEARCH_TEXT_INPUT })),
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
        C.A.updateSearchEditorState(t, e);
    };
    getPopoutRef = () => {
        let { current: e } = this._searchPopoutRef;
        return e;
    };
    handleKeyBind = (e) => {
        let { key: t, metaKey: r, shiftKey: s, ctrlKey: n } = e,
            { editorState: l, searchContext: a, keyboardModeEnabled: i } = this.props;
        if ((e.stopPropagation(), (r || n) && "a" === t.toLowerCase())) {
            e.preventDefault();
            let t = y.y8(l);
            return this.setEditorState(t), this.setState({ focused: !0 }), !0;
        }
        if ("Escape" === t) {
            if ((e.preventDefault(), y.Im(l))) this.blurEditor();
            else {
                let e = y.Xq(l);
                C.A.updateSearchEditorState(a, e), this.setState({ focused: !0 });
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
            return e.preventDefault(), (l = s ? y.mQ(l) : y.aB(l)), this.setEditorState(l), !0;
        if ("End" === t || ("ArrowRight" === t && r))
            return e.preventDefault(), (l = s ? y.Le(l) : y.Tj(l)), this.setEditorState(l), !0;
        if (("Delete" === t || "Backspace" === t) && r) {
            let e = y.Xq(l);
            return this.setEditorState(e), !0;
        }
        return y.K6(e);
    };
    renderInput(e) {
        let { editorState: t, placeholder: r } = this.props;
        return (0, s.jsx)(i.Editor, {
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
        let { searchContext: e, editorState: t, hasResults: r, className: n } = this.props,
            { focused: l } = this.state,
            i = y.pe(t).length > 0;
        return (0, s.jsx)(d.YNO, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: d.YNO.Animation.NONE,
            shouldShow: l,
            autoInvert: !1,
            children: (t, o) => {
                let { isShown: u } = o;
                return (0, s.jsx)("div", {
                    className: n,
                    ref: this._containerRef,
                    children: (0, s.jsx)("div", {
                        className: a()(H.$P, { [H.ho]: i || l, [H.in]: l }),
                        children: (0, s.jsx)(d.vN3, {
                            focusTarget: { current: this._editorRef?.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, s.jsxs)(
                                "div",
                                {
                                    className: H.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, s.jsx)(d.BT5, {
                                            onClear: this.handleClearSearch,
                                            hasContent: i || r,
                                            className: H.Kk,
                                            isLoading: !1,
                                        }),
                                    ],
                                },
                                (0, L.bS)(e),
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
        l = (0, L.bS)(t),
        a = (0, c.bG)([E.A], () => E.A.keyboardModeEnabled),
        i = (0, c.bG)([O.A], () => O.A.getEditorState(l)),
        o = n.useMemo(() => (null != i ? i : y.e_(T.ys(N.Ay))), [i]);
    n.useEffect(() => {
        I.A.initializeAutocomplete(t);
    }, [t]);
    let u = (0, c.bG)([O.A], () => O.A.getIsSearchTokensInitialized()),
        h = n.useRef(u);
    n.useEffect(() => {
        u && h.current !== u && ((h.current = u), v.A.ensureSearchInputDecorators(t));
    }, [u, t]),
        n.useEffect(
            () => (
                f.A.setSelectedSearchContext(l),
                () => {
                    f.A.setSelectedSearchContext(null);
                }
            ),
            [l],
        );
    let { isSearching: _, hasResults: S } = (0, c.cf)([x.A], () => {
            let e = x.A.getTotalCount(l);
            return { hasResults: null != e && e > 0, isSearching: x.A.getIsFetching(l) };
        }),
        m = (0, c.bG)([g.Ay, R.A, A.A], () => {
            let e = R.A.getCurrentlySelectedChannelId(),
                t = A.A.getChannel(e);
            return g.Ay.getSection(e, t?.isDM()) === w.YvQ.SEARCH;
        });
    n.useEffect(() => {
        b.A.setSidebarOpen(t, m);
    }, [t, m]);
    let F = (0, d.Ry6)(M.b);
    n.useEffect(() => {
        b.A.setFiltersModalOpen(t, F);
    }, [t, F]);
    let k = n.useCallback(
            (e) => {
                let { queryString: r, query: s, searchEverywhere: n, searchQuerySource: l } = e;
                b.A.refreshQueryId(t),
                    (0, j.fd)({ searchContext: t, query: s, queryString: r, searchQuerySource: l }),
                    C.A.updateSearchMode(t, w.BBH.NEWEST),
                    q({ searchContext: t, searchQueryString: r, searchEverywhere: n, offset: 0 });
            },
            [t],
        ),
        W = (0, c.bG)([p.A, A.A], () => {
            let e = (0, L._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = p.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, L._b)(t);
            if (null != r) {
                let e = A.A.getChannel(r);
                return null == e ? null : (0, L.E3)(e);
            }
            return null;
        }),
        H = n.useMemo(() => {
            switch (t.type) {
                case w.I4_.DMS:
                    return D.intl.string(D.t.m7OrlR);
                case w.I4_.FAVORITES:
                    return D.intl.string(D.t["5h0QOP"]);
                default:
                    return D.intl.formatToPlainString(D.t.LDZtFO, { name: W });
            }
        }, [t.type, W]);
    return (0, s.jsx)($, {
        className: r,
        searchContext: t,
        isSearching: _,
        editorState: o,
        hasResults: S,
        keyboardModeEnabled: a,
        onSearch: k,
        placeholder: H,
    });
}
function z(e) {
    let { className: t, guildId: r, channelId: n } = e,
        l = (0, F.J)({ guildId: r, channelId: n });
    return null == l ? null : (0, s.jsx)(Q, { className: t, searchContext: l });
}
