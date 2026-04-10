r.d(t, { Ay: () => z, E2: () => P });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    i = r(271830),
    o = r(985623),
    u = r.n(o),
    c = r(311907),
    h = r(397927),
    d = r(988665),
    _ = r(955572),
    S = r(775602),
    E = r(915089),
    f = r(138298),
    p = r(761640),
    g = r(734057),
    A = r(71393),
    y = r(309010),
    R = r(203982),
    T = r(504531),
    I = r(614690),
    m = r(256796),
    L = r(517381),
    x = r(822382),
    C = r(408730),
    N = r(771650),
    b = r(616252),
    F = r(753806),
    v = r(775427),
    O = r(65600),
    W = r(145331),
    k = r(242182),
    M = r(768570),
    H = r(921242),
    w = r(652215),
    j = r(985018),
    D = r(429566);
let P = 512,
    U = (0, E.Ld)(),
    $ = u()(F.A.fetchMessages, 500);
class q extends s.PureComponent {
    state = { focused: !1, selectedIndex: void 0 };
    _editorRef;
    _containerRef = s.createRef();
    _searchBarRef = s.createRef();
    _searchPopoutRef = s.createRef();
    constructor(e) {
        super(e), (0, x.Pe)();
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
        let n = T.pe(t),
            s = r.getStartOffset(),
            l = r.getEndOffset(),
            a = n.substring(s, l);
        e.clipboardData.setData("text/plain", a);
        let i = T.vE("delete", t);
        (i = this.tokenize(i)), this.setEditorState(i);
    };
    componentDidUpdate(e) {
        let { editorState: t, searchContext: r } = this.props;
        if (t !== e.editorState) {
            let e = T.pe(t),
                n = (0, x._o)(T.pe(t)),
                s = I.zZ(n, t);
            m.A.updateAutocompleteQuery({ searchContext: r, tokens: n, cursorScope: s, queryString: e }),
                null != this._editorRef && T.L9(this._editorRef.editor);
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
            o = T.pe(i);
        " " !== t.charAt(t.length - 1) && (t += " "),
            null != r && 0 !== r && " " !== o.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t),
            l ? ((i = T.t7(t, i)), (r = 0)) : (i = T.le(t, i, r, n)),
            (i = T.a4(i, P)),
            (i = this.tokenize(i));
        let u = Number(r) + t.length;
        (i = T.UO(u, i)), this.setEditorState(i), s && this.search({ queryString: T.pe(i), searchQuerySource: a });
    };
    handleSelectedIndexChanged = (e) => {
        this._editorRef?.editor?.setAttribute("aria-activedescendant", null != e ? `${U}-${e}` : void 0),
            this.setState({ selectedIndex: e });
    };
    renderPopout = () =>
        (0, n.jsx)(k.A, {
            ref: this._searchPopoutRef,
            searchContext: this.props.searchContext,
            navId: U,
            onSelectedIndexChanged: this.handleSelectedIndexChanged,
        });
    tokenize(e) {
        let t = (0, x._o)(T.pe(e)).filter((e) => e.type !== d.Ay.NON_TOKEN_TYPE);
        return T.uD(t, e, N.Ay);
    }
    search = (e) => {
        let { isSearching: t } = this.props,
            { queryString: r, searchEverywhere: n, searchQuerySource: s } = e ?? {};
        if (null == r || "" === r) {
            let { editorState: e } = this.props;
            r = T.pe(e);
        }
        if (!t) {
            let e = (0, x._o)(r),
                t = (0, x.Zf)(e);
            for (let t = 0; t < e.length; t++)
                (0, x.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
            if (0 === e.length || 0 === Object.keys(t).length) return !1;
            this.props.onSearch({ queryString: r, query: t, searchEverywhere: n ?? !1, searchQuerySource: s }),
                h.ORC.announce(j.intl.string(j.t.pKCxWP)),
                this.handleBlur();
        }
        return !0;
    };
    clearSearch() {
        let { searchContext: e } = this.props;
        F.A.cleanUpSearchState(e);
    }
    handleClearSearch = (e) => {
        let { editorState: t, searchContext: r } = this.props,
            { focused: n } = this.state;
        (e.preventDefault(), e.stopPropagation(), "" === T.pe(t))
            ? this.focusEditor()
            : ((t = T.a4(t, 0)),
              this.setEditorState(t),
              (0, W.iK)({ searchContext: r }),
              n || Promise.resolve().then(() => this.blurEditor()));
    };
    handleFocusSearch = (e) => {
        let { prefillCurrentChannel: t } = e;
        if (!t) return void this.focusEditor();
        let r = y.A.getChannelId(),
            n = g.A.getChannel(r);
        if (null == n) return void this.focusEditor();
        let { searchContext: s } = this.props;
        if ((n.isPrivate() && s.type !== w.I4_.DMS) || n.isObfuscated()) return void this.focusEditor();
        let l = (0, x.Rt)(n);
        null == l
            ? this.focusEditor()
            : ((0, W.Tf)({ searchContext: s }),
              Promise.resolve().then(() => {
                  let { _editorRef: e } = this;
                  e?.focus(),
                      this.handleSetSearchQuery({
                          query: N.Ay[w.LWr.FILTER_IN].key + `${l} `,
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
        this.setState({ focused: !0 }), C.A.setFocused(e, !0);
    };
    handleBlur = () => {
        let { searchContext: e } = this.props;
        C.A.setFocused(e, !1),
            this.setState({ focused: !1 }, () => {
                T.Im(this.props.editorState) && this.clearSearch();
            });
    };
    onBlur = (e) => {
        this.handleBlur();
    };
    handleOption = () => {
        let { current: e } = this._searchPopoutRef;
        return null != e && e.selectOption({ searchAutocompleteSelectAction: M.oi.KEY_PRESS });
    };
    handleReturn = (e) => (
        e.preventDefault(), this.handleOption() || this.search({ searchQuerySource: M.Q_.SEARCH_TEXT_INPUT }), "handled"
    );
    handleBeforeInput = (e) => {
        let { editorState: t } = this.props,
            { focused: r } = this.state;
        return (
            T.pe(t).length >= P ||
                ((t = T.le(e, t)),
                (t = T.a4(t, P)),
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
                    (t = T.vE(e, t)),
                    (t = this.tokenize(t)),
                    this.setEditorState(t),
                    r || this.setState({ focused: !0 }),
                    "handled"
                );
            case "transpose-characters":
            case "move-selection-to-start-of-block":
            case "move-selection-to-end-of-block":
                return (t = T.ON(e, t)), (t = this.tokenize(t)), this.setEditorState(t), "handled";
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
            (t = T.le(e, t)),
            (t = T.a4(t, P)),
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
        b.A.updateSearchEditorState(t, e);
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
            let t = T.y8(l);
            return this.setEditorState(t), this.setState({ focused: !0 }), !0;
        }
        if ("Escape" === t) {
            if ((e.stopPropagation(), e.preventDefault(), T.Im(l))) this.blurEditor();
            else {
                let e = T.Xq(l);
                b.A.updateSearchEditorState(a, e), this.setState({ focused: !0 });
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
            return e.stopPropagation(), (0, _.uS)(), !0;
        }
        if ("Home" === t || ("ArrowLeft" === t && r))
            return e.stopPropagation(), e.preventDefault(), (l = n ? T.mQ(l) : T.aB(l)), this.setEditorState(l), !0;
        if ("End" === t || ("ArrowRight" === t && r))
            return e.stopPropagation(), e.preventDefault(), (l = n ? T.Le(l) : T.Tj(l)), this.setEditorState(l), !0;
        if ("Delete" === t && r) {
            e.stopPropagation();
            let t = T.Xq(l);
            return this.setEditorState(t), !0;
        }
        if ("Backspace" === t && r) {
            e.stopPropagation(), e.preventDefault();
            let t = l.getSelection().getEndOffset();
            return (
                t > 0 && ((l = T.le("", l, 0, t)), (l = this.tokenize(l)), (l = T.aB(l))), this.setEditorState(l), !0
            );
        }
        let o = T.K6(e);
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
            placeholder: r ?? j.intl.string(j.t["5h0QOP"]),
            editorState: t,
            onChange: this.setEditorState,
            role: "combobox",
            ariaExpanded: e,
            ariaControls: e ? U : void 0,
            ariaLabel: j.intl.string(j.t["5h0QOP"]),
            ariaAutoComplete: "list",
        });
    }
    render() {
        let { searchContext: e, editorState: t, hasResults: r, className: s } = this.props,
            { focused: l } = this.state,
            i = T.pe(t).length > 0;
        return (0, n.jsx)(h.YNO, {
            targetElementRef: this._containerRef,
            renderPopout: this.renderPopout,
            position: "bottom",
            animation: h.YNO.Animation.NONE,
            shouldShow: l,
            autoInvert: !1,
            children: (t, o) => {
                let { isShown: u } = o;
                return (0, n.jsx)("div", {
                    className: s,
                    ref: this._containerRef,
                    children: (0, n.jsx)("div", {
                        className: a()(D.$P, { [D.ho]: i || l, [D.in]: l }),
                        children: (0, n.jsx)(h.vN3, {
                            focusTarget: { current: this._editorRef?.editor },
                            ringTarget: this._searchBarRef,
                            children: (0, n.jsxs)(
                                "div",
                                {
                                    className: D.ON,
                                    ref: this._searchBarRef,
                                    children: [
                                        this.renderInput(u),
                                        (0, n.jsx)(h.BT5, {
                                            onClear: this.handleClearSearch,
                                            hasContent: i || r,
                                            className: D.Kk,
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
}
function Q(e) {
    let { searchContext: t, className: r } = e,
        l = (0, x.bS)(t),
        a = (0, c.bG)([S.A], () => S.A.keyboardModeEnabled),
        i = (0, c.bG)([O.A], () => O.A.getEditorState(l)),
        o = s.useMemo(() => (null != i ? i : T.e_(I.ys(N.Ay))), [i]);
    s.useEffect(() => {
        m.A.initializeAutocomplete(t);
    }, [t]);
    let u = (0, c.bG)([O.A], () => O.A.getIsSearchTokensInitialized()),
        d = s.useRef(u);
    s.useEffect(() => {
        u && d.current !== u && ((d.current = u), F.A.ensureSearchInputDecorators(t));
    }, [u, t]),
        s.useEffect(
            () => (
                f.A.setSelectedSearchContext(l),
                () => {
                    f.A.setSelectedSearchContext(null);
                }
            ),
            [l],
        );
    let { isSearching: _, hasResults: E } = (0, c.cf)([L.A], () => {
            let e = L.A.getTotalCount(l);
            return { hasResults: null != e && e > 0, isSearching: L.A.getIsFetching(l) };
        }),
        R = (0, c.bG)([p.Ay, y.A, g.A], () => {
            let e = y.A.getCurrentlySelectedChannelId(),
                t = g.A.getChannel(e);
            return p.Ay.getSection(e, t?.isDM()) === w.YvQ.SEARCH;
        });
    s.useEffect(() => {
        C.A.setSidebarOpen(t, R);
    }, [t, R]);
    let v = (0, h.Ry6)(H.b);
    s.useEffect(() => {
        C.A.setFiltersModalOpen(t, v);
    }, [t, v]);
    let k = s.useCallback(
            (e) => {
                let { queryString: r, query: n, searchEverywhere: s, searchQuerySource: l } = e;
                C.A.refreshQueryId(t),
                    (0, W.fd)({ searchContext: t, query: n, queryString: r, searchQuerySource: l }),
                    b.A.updateSearchMode(t, w.BBH.NEWEST),
                    $({ searchContext: t, searchQueryString: r, searchEverywhere: s, offset: 0 });
            },
            [t],
        ),
        M = (0, c.bG)([A.A, g.A], () => {
            let e = (0, x._B)(t) ? t.guildId : null;
            if (null != e) {
                let t = A.A.getGuild(e);
                return null == t ? null : t.name;
            }
            let r = (0, x._b)(t);
            if (null != r) {
                let e = g.A.getChannel(r);
                return null == e ? null : (0, x.E3)(e);
            }
            return null;
        }),
        D = s.useMemo(
            () =>
                t.type === w.I4_.DMS
                    ? j.intl.string(j.t.m7OrlR)
                    : null != M
                      ? j.intl.formatToPlainString(j.t.LDZtFO, { name: M })
                      : j.intl.string(j.t["5h0QOP"]),
            [t.type, M],
        );
    return (0, n.jsx)(q, {
        className: r,
        searchContext: t,
        isSearching: _,
        editorState: o,
        hasResults: E,
        keyboardModeEnabled: a,
        onSearch: k,
        placeholder: D,
    });
}
function z(e) {
    let { className: t, guildId: r, channelId: s } = e,
        l = (0, v.J)({ guildId: r, channelId: s });
    return null == l ? null : (0, n.jsx)(Q, { className: t, searchContext: l });
}
