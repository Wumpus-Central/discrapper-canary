(n.d(t, { A: () => e_ }), n(321073), n(323874), n(14289), n(35956));
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(465532),
    d = n(608299),
    h = n(494921),
    m = n(155718),
    f = n(861382),
    p = n(94221),
    g = n(626584),
    x = n(274652),
    E = n(522602),
    S = n(234320),
    y = n(453771),
    A = n(741394),
    C = n(355622),
    b = n(408018),
    I = n(579940),
    v = n(734057),
    N = n(573163),
    T = n(531685),
    j = n(365971);
function k(e) {
    let t = N.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (v.A.getChannel(t) ?? null);
}
var _ = n(826745),
    R = n(442433),
    O = n(721768),
    w = n(555424),
    M = n(723702),
    L = n(677134),
    P = n(652215),
    D = n(650583);
let U = /(\t|\s)/;
class V extends i.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        (Promise.resolve().then(() => {
            let { value: e } = this.props;
            this._ref?.setSelection(e.length, e.length);
        }),
            null != f.A.getActiveCommand(this.props.channel.id) &&
                O.Gf({ channelId: this.props.channel.id, command: null, section: null }));
    }
    componentDidUpdate(e, t) {
        this.state.nextSelection !== t.nextSelection &&
            null != this._ref &&
            this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
        let e = this._ref;
        if (null == e) return { word: null, fullWord: null, isAtStart: !1 };
        let { value: t } = this.props;
        if (0 === t.trim().length) return { word: null, fullWord: null, isAtStart: !1 };
        let n = e.selectionStart,
            l = e.selectionEnd;
        for (; n > 0 && !U.test(t[n - 1]);) n--;
        let i = e.selectionEnd;
        for (; i < t.length && !U.test(t[i]);) i++;
        let r = (0, w.h3)(t.slice(n, l), t.slice(n, i));
        return { word: r.word, fullWord: r.fullWord, isAtStart: 0 === n && !r.didTrimPrefix };
    }
    focus = () => {
        let { _ref: e } = this;
        null != e && e.focus();
    };
    blur() {
        let { _ref: e } = this;
        null != e && e.blur();
    }
    submit(e) {
        return (e?.preventDefault(), this.props.onSubmit(this.props.value));
    }
    insertAutocomplete(e, t) {
        let { addSpace: n = !0, replaceFullWord: l = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { word: i, fullWord: r } = this.getCurrentWord();
        if (null == i) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let s = t.value.slice(0, t.selectionStart - i.length),
                a = l && null != r ? r.length - i.length : 0,
                o = t.value.slice(t.selectionEnd + a);
            this._insertText(e, s, o, n);
        }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = this._ref;
        if (null == l) return;
        let i = l.value.slice(0, l.selectionStart),
            r = l.value.slice(l.selectionEnd);
        this._insertText(e, i, r, n);
    }
    _insertText(e, t, n, l) {
        if (null == this._ref) return;
        l && (e += " ");
        let i = t + e + n,
            { onChange: r } = this.props;
        r?.(null, i, (0, b.x7)(i));
        let s = t.length + e.length;
        this.setState({ nextSelection: s }, () => {
            this.props.maybeShowAutocomplete();
        });
    }
    hasOpenCodeBlock() {
        let e = this._ref;
        if (null == e) return !1;
        let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
        return null != t && t.length > 0 && t.length % 2 != 0;
    }
    render() {
        let {
            value: e,
            disabled: t,
            placeholder: n,
            required: i,
            onResize: r,
            className: a,
            id: o,
            submitting: u,
            textAreaPaddingClassName: c,
            spellcheckEnabled: d,
            "aria-controls": h,
            "aria-expanded": m,
            "aria-activedescendant": f,
        } = this.props;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(S.EG, { event: P.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, l.jsx)(_.y, {
                    ref: this.handleSetRef,
                    className: s()(a, c),
                    id: o,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || u,
                    required: i,
                    onChange: this.handleOnChange,
                    onResize: r,
                    onKeyPress: this.handleKeyPress,
                    onKeyDown: this.handleKeyDown,
                    onKeyUp: this.handleKeyUp,
                    onFocus: this.props.onFocus,
                    onBlur: this.props.onBlur,
                    onPaste: this.handlePaste,
                    onClick: this.handleClick,
                    onContextMenu: this.handleContextMenu,
                    value: t ? "" : e,
                    tabIndex: 0,
                    spellCheck: d,
                    "aria-controls": h,
                    "aria-expanded": m,
                    "aria-activedescendant": f,
                    "aria-haspopup": "listbox",
                    "aria-autocomplete": "list",
                    "aria-multiline": !0,
                }),
            ],
        });
    }
    handleSetRef = (e) => {
        this._ref = e;
    };
    handleKeyPress = (e) => {
        if (
            e.key === D.dh.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return (e.preventDefault(), this.props.onSubmit(this.props.value));
    };
    handleKeyDown = (e) => {
        switch (e.which) {
            case P.Ks6.ARROW_DOWN:
                this.props.moveSelection(1) && e.preventDefault();
                break;
            case P.Ks6.N:
                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                break;
            case P.Ks6.ARROW_UP:
                this.props.moveSelection(-1) && e.preventDefault();
                break;
            case P.Ks6.P:
                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                break;
            case P.Ks6.TAB:
            case P.Ks6.ENTER:
                this.handleTabOrEnterDown(e);
        }
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
    handleTabOrEnterDown(e) {
        (e.key === D.dh.TAB && this.props.onTab()) || (e.key === D.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === D.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === D.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case D.dh.ARROW_RIGHT:
            case D.dh.ARROW_LEFT:
            case D.dh.HOME:
            case D.dh.END:
                this.props.maybeShowAutocomplete();
        }
        let { onKeyUp: t } = this.props;
        t?.(e);
    };
    handleGlobalPaste = (e) => {
        let { event: t } = e;
        this.handlePaste(t) || this.focus();
    };
    handlePaste = (e) => {
        let t = this.props.onPaste(e);
        return (t && e.preventDefault(), t);
    };
    handleClick = () => {
        this.props.maybeShowAutocomplete();
    };
    handleContextMenu = (e) => {
        M.isPlatformEmbedded &&
            (0, R.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 216603));
                    return (t) => (0, l.jsx)(e, { ...t, text: (0, L.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            l = e.currentTarget.value,
            i = n ? l : l.replace("\n", "");
        t?.(e, i, (0, b.x7)(i));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
var W = n(666860),
    F = n(997141),
    B = n(146849),
    G = n(152959),
    K = n(625494),
    H = n(317681),
    z = n(186306),
    q = n(655098),
    $ = n(323350),
    Q = n(35277),
    Z = n(820066),
    X = n(702483),
    J = n(490682);
(n(134528), n(947204));
var Y = n(917310);
let ee = new Set(["line", "blockQuote"]),
    et = [],
    en = { bold: "strong", italic: "em", underline: "u", strikethrough: "s", spoiler: "spoiler" },
    el = new WeakMap();
var ei = n(683167),
    er = n(284009),
    es = n.n(er),
    ea = n(235599),
    eo = n(407315),
    eu = n(2368),
    ec = n(551483);
function ed(e, t) {
    let n = f.A.getActiveCommand(e.id),
        l = n?.options?.find((e) => e.name === t.optionName);
    return null != l && (l.type !== m.n4.STRING || l?.choices != null || l?.autocomplete);
}
function eh(e, t, n, l) {
    let i = Z.VW.areStylesDisabled(e) || null == n ? t : n;
    z.o.withSingleEntry(e, () => {
        Q.b.insertText(e, l ? i + " " : i);
    });
}
var em = n(113001),
    ef = n(770178),
    ep = n(38405);
let eg = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function ex(e) {
    try {
        return Z.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return ((e.stack = t.stack), ep.A.captureException(e), null);
    }
}
var eE = n(870748),
    eS = n(17928),
    ey = n(31717),
    eA = n(105292),
    eC = n(106972);
let eb = (e) => {
    let t,
        { channelId: n, element: r, attributes: a, children: o } = e,
        u = (0, ea.f7)(),
        c = (0, ea.zL)(),
        d = (0, ea.RV)(),
        { optionType: h, errored: p } = (0, eS.cf)(
            [f.A],
            () => ({
                optionType: f.A.getOption(n, r.optionName)?.type,
                errored: f.A.getOptionState(n, r.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, r.optionName],
        ),
        g = (0, eS.bG)([E.A], () => E.A.getUpload(n, r.optionName, ey.C.SlashCommand), [n, r.optionName]),
        x = s()(eC.S0, eC.xP, { [eC.t$]: c && u, [eC.$2]: (!c || !u) && p }),
        S = i.useCallback(() => {
            Z.VW.isVoid(d, r) || Q.b.selectCommandOption(d, r.optionName, !0);
        }, [d, r]);
    return (
        (t =
            h === m.n4.ATTACHMENT
                ? g?.filename != null
                    ? (0, l.jsxs)("span", {
                          className: s()(eC._K, eC.dU),
                          contentEditable: !1,
                          children: [g.filename, o],
                      })
                    : (0, l.jsxs)("span", {
                          className: s()(eC._K, eC.ZI),
                          contentEditable: !1,
                          children: [eA.intl.string(eA.t.GRdFni), o],
                      })
                : (0, l.jsx)("span", { className: eC._K, children: o })),
        (0, l.jsxs)("span", {
            ...a,
            className: x,
            children: [
                (0, l.jsxs)("span", {
                    className: eC.gA,
                    contentEditable: !1,
                    onClick: S,
                    children: [r.optionDisplayName, "\u200B"],
                }),
                t,
                (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
            ],
        })
    );
};
function eI(e) {
    let { element: t, attributes: n, children: i } = e,
        r = (0, ea.f7)(),
        a = (0, ea.zL)(),
        o = s()(eC.S0, eC.xP, eC.Bz, { [eC.t$]: a && r, [eC.$2]: t.error }),
        u = (0, l.jsx)("span", { className: eC._K, children: i });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: eC.gA, contentEditable: !1, children: ["@game", "\u200B"] }),
            u,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
function ev(e) {
    let { element: t, attributes: n, children: i } = e,
        r = (0, ea.f7)(),
        a = (0, ea.zL)(),
        o = s()(eC.S0, eC.xP, eC.Bz, { [eC.t$]: a && r, [eC.$2]: t.error }),
        u = t.children[t.children.length - 1],
        c = null != u && Z.l5.isText(u) && u.text.endsWith("\n"),
        d = (0, l.jsxs)("span", {
            className: eC._K,
            children: [i, c ? (0, l.jsx)("span", { className: eC.Nx, contentEditable: !1 }) : null],
        });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: eC.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
            d,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
var eN = n(183531);
function eT(e) {
    let t,
        n,
        r,
        a,
        o,
        u,
        { ref: c, ...d } = e,
        {
            value: h,
            type: p,
            channel: g,
            className: x,
            id: y,
            disabled: A,
            submitting: b,
            placeholder: I,
            required: v,
            textAreaPaddingClassName: N,
            onChange: T,
            onPaste: j,
            onResize: k,
            onFocus: _,
            onBlur: R,
            onKeyDown: O,
            onKeyUp: M,
            onTab: L,
            onEnter: U,
            onSpace: V,
            onSubmit: er,
            onSubmitFailure: ep,
            maybeShowAutocomplete: eS,
            hideAutocomplete: ey,
            moveSelection: eT,
            spellcheckEnabled: ej,
            canUseCommands: ek,
            disableAutoFocus: e_,
            disableEnterToSubmit: eR,
            allowNewLines: eO,
            "aria-owns": ew,
            "aria-expanded": eM,
            "aria-haspopup": eL,
            "aria-activedescendant": eP,
            "aria-controls": eD,
            "aria-invalid": eU,
            "aria-describedby": eV,
            "aria-labelledby": eW,
            "aria-autocomplete": eF,
        } = d,
        eB = i.useRef(null),
        eG = i.useRef(null),
        eK = i.useRef(!0),
        eH = i.useRef(!0),
        ez = A || b,
        eq = i.useCallback(
            (e, t, n) => {
                let { value: l, selection: i } = n,
                    r = Z.VW.richValue(e),
                    s = e.selection,
                    a = !1;
                if (void 0 !== l && l !== r) {
                    if (((e.children = l), "parent" === t && !e.previewMarkdown && e.chatInputType === C.oU.EDIT)) {
                        try {
                            ((e.previewMarkdown = !0), (0, eu.eF)(e, g.guild_id, g.id));
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        ((0, eu.eF)(e, g.guild_id, g.id), (i = void 0));
                    }
                    ("undo" !== t && void 0 !== l && l !== r && z.o.insertEntry(e, "other", !1, r, s), (a = !0));
                }
                if ((null == i || Z.Ot.isValid(e, i) || (i = void 0), (a || !Z.Ot.isValid(e, s)) && void 0 === i)) {
                    let t = Z.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let o = null != i && !Z.Ot.equals(i, s);
                if (null != i && o) {
                    e.selection = i;
                    let t = z.o.currentEntry(e);
                    (null != t && (t.selection = i), (a = !0));
                }
                let u = H.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== f.A.getActiveCommand(g.id)?.id &&
                        z.o.withMergedEntry(e, () => {
                            (0, eE.t)(e, g.id, null, !0);
                        }),
                    a)
                )
                    if ("parent" === t)
                        try {
                            ((eH.current = !1), e.onChange());
                        } finally {
                            eH.current = !0;
                        }
                    else e.onChange();
            },
            [g.id, g.guild_id],
        ),
        e$ = i.useCallback(() => {
            eK.current = !1;
        }, []),
        eQ = i.useCallback(() => {
            eK.current = !0;
        }, []),
        eZ = (0, ei.A)({ channel: g, chatInputType: p, onChangeStart: e$, onChangeEnd: eQ, updateState: eq }),
        eX = i.useCallback(
            (e, t) => {
                let n = H.SQ(eZ, e, g.id),
                    l = H.cd(e, g.guild_id, g.id, n, t);
                return { values: n, results: l };
            },
            [g.guild_id, g.id, eZ],
        ),
        eJ = i.useCallback(() => {
            let e,
                t = Z.VW.getNodesOfType(eZ, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                l = ek ? f.A.getActiveCommand(g.id) : null,
                i = !1;
            if (null != l && null != l.options) {
                let t = eX(l, !1);
                e = t.values;
                let n = H.O7(eZ)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (l.options ?? []).find((t) => t.name === e));
                for (let e of l.options)
                    !e.required || e.name in t.values || (Q.b.insertCommandOption(eZ, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    (Q.b.selectCommandOption(eZ, e.name),
                        (i = !0),
                        (0, W.zV)(P.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: l?.applicationId,
                            command_id: l?.rootCommand?.id,
                            argument_type: m.n4[e?.type ?? 3],
                            is_required: e?.required,
                        }));
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    (Q.b.setNodes(eZ, { error: !0 }, { at: t }), i || Q.b.select(eZ, Z.VW.end(eZ, t)), (i = !0));
            if (i) {
                (K._.dispatch(P.jej.SHAKE_APP, { duration: 200, intensity: 2 }), ep?.());
                return;
            }
            er?.((0, $.WO)(Z.VW.richValue(eZ), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), l, e);
        }, [g.id, eZ, er, ep, eX, ek]);
    (i.useImperativeHandle(
        c,
        () => ({
            getSlateEditor: () => eZ,
            submit(e) {
                (e?.preventDefault(), eJ());
            },
            focus() {
                Z.VW.focus(eZ);
            },
            blur() {
                ea.rL.blur(eZ);
            },
            getCurrentWord() {
                let e = eZ.selection;
                if (null == e || !Z.Ot.isValid(eZ, e) || Z.ZF.isExpanded(e) || (0, eo.Q9)(eZ))
                    return { word: null, isAtStart: !1 };
                let [t, n] = Z.VW.node(eZ, Z.PW.parent(e.anchor.path)),
                    [l, i] = Z.VW.node(eZ, e.anchor.path),
                    r = e.anchor.offset;
                if (!Z.PW.hasPrevious(i) && Z.l5.isText(l)) {
                    let e = l.text.substring(0, r);
                    if (Z.AS.isType(t, "applicationCommand") && r < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let s = "",
                    a = !1;
                for (;;) {
                    if (--r < 0) {
                        if (!Z.PW.hasPrevious(i)) {
                            a = !0;
                            break;
                        }
                        [l, i] = Z.VW.node(eZ, Z.PW.previous(i));
                    }
                    if (!Z.l5.isText(l)) break;
                    let e = l.text[r];
                    if (ec.ug.test(e)) break;
                    s = e + s;
                }
                let o = s,
                    u = e.anchor.offset,
                    [c] = Z.VW.node(eZ, e.anchor.path);
                for (; Z.l5.isText(c) && !(u >= c.text.length);) {
                    let e = c.text[u];
                    if (ec.ug.test(e)) break;
                    ((o += e), u++);
                }
                let d = (0, w.h3)(s, o);
                return {
                    word: d.word,
                    fullWord: d.fullWord,
                    isAtStart: !d.didTrimPrefix && a && Z.PW.isFirstEditorBlock(n),
                };
            },
            getFirstText: () => Z.VW.getFirstText(eZ)?.text ?? "",
            getCurrentCommandOption() {
                let e = H.M3(eZ);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = H.M3(eZ);
                if (null == e) return [];
                let t = f.A.getActiveCommand(g.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : H.FV(eZ, n, e[0], g.id);
            },
            getCommandOptionValues() {
                let e = f.A.getActiveCommand(g.id);
                return null == e ? {} : H.SQ(eZ, e, g.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                z.o.withSingleEntry(eZ, () => {
                    let l = H.M3(eZ),
                        i = null != l && ed(g, l[0]);
                    if (
                        (null != t && i && (Q.b.removeInlineChildren(eZ, l), (n = !1)), eh(eZ, e, t, n), null != t && i)
                    ) {
                        let e = H.n$(eZ);
                        if (((l = Z.cv.updateElement(eZ, l)), null != e)) {
                            let t = Z.cv.markdown(e[0], g.guild_id);
                            (0, eu.lE)(eZ, l, g.id, t) && (l = Z.cv.updateElement(eZ, l));
                        }
                        (H.ke(eZ, g.guild_id, g.id, Z.cv.updateElement(eZ, l), !1), Q.b.selectNextCommandOption(eZ));
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: l = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                z.o.withSingleEntry(eZ, () => {
                    let i = H.M3(eZ),
                        r = null != i && ed(g, i[0]);
                    if (r) (Q.b.removeInlineChildren(eZ, i), (n = !1));
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        (null != e &&
                            e.length > 0 &&
                            Q.b.delete(eZ, { distance: e.length, unit: "character", reverse: !0 }),
                            l &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                Q.b.delete(eZ, { distance: t.length - e.length, unit: "character" }));
                    }
                    (eh(eZ, e, t, n), r && Q.b.selectNextCommandOption(eZ));
                });
            },
            insertInlineAutocompleteInput(e) {
                z.o.withSingleEntry(eZ, () => {
                    let { word: t } = this.getCurrentWord();
                    (null != t &&
                        t.length > 0 &&
                        Q.b.delete(eZ, { distance: t.length, unit: "character", reverse: !0 }),
                        Q.b.insertNodes(eZ, [{ type: e, children: [{ text: "" }] }]));
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                z.o.withSingleEntry(eZ, () => {
                    var t, l, i;
                    let r = Z.VW.getSelectedParentOfType(eZ, [e]);
                    (es()(null != r, `Cannot replace inline input of type ${e} when none is selected`),
                        Q.b.removeNodes(eZ, { at: r[1] }),
                        (t = eZ),
                        (l = n),
                        (i = !0),
                        z.o.withSingleEntry(t, () => {
                            Q.b.insertText(t, i ? l + " " : l);
                        }));
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                z.o.withSingleEntry(eZ, () => {
                    let e = t.animated ? "a" : "",
                        l = t.originalName ?? t.name ?? "";
                    eh(eZ, `:${t.name}:`, null != t.id ? `<${e}:${l.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eZ, g, eJ],
    ),
        (t = i.useRef(null)),
        (n = i.useRef(null)),
        (r = i.useRef(null)),
        i.useLayoutEffect(() => {
            ((n.current = ex(eZ)),
                null == n.current &&
                    null == r.current &&
                    (r.current = setTimeout(() => {
                        n.current = ex(eZ);
                    }, 100)));
        }, [eZ]),
        i.useEffect(() => {
            let e = r.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (a = i.useCallback(() => {
            let e = n.current;
            if (null == e) return;
            let l = e.offsetHeight;
            t.current !== l && (null != eB.current && (eB.current.style.height = `${l}px`), (t.current = l), k?.(l));
        }, [eB, k])),
        (0, ef.g)(n, a, [a, eZ, k], eg),
        i.useLayoutEffect(() => {
            let e = ea.rL.findDocumentOrShadowRoot(eZ).defaultView;
            if (e?.ResizeObserver == null) return;
            let n = ex(eZ);
            null != n && ((t.current = n.offsetHeight), k?.(t.current));
        }, [eB, eZ, k]));
    let { handleKeyDown: eY, handleKeyUp: e0 } = (function (e) {
            let {
                editor: t,
                channel: n,
                disableEnterToSubmit: l,
                onKeyDown: r,
                onKeyUp: s,
                onTab: a,
                onEnter: o,
                onSpace: u,
                allowNewLines: c,
                submit: d,
                hideAutocomplete: h,
                moveSelection: m,
            } = e;
            return {
                handleKeyDown: i.useCallback(
                    (e) => {
                        switch (e.which) {
                            case P.Ks6.ARROW_UP:
                                if (m(-1)) return void e.preventDefault();
                                break;
                            case P.Ks6.ARROW_DOWN:
                                if (m(1)) return void e.preventDefault();
                                break;
                            case P.Ks6.P:
                                if ((0, em.j)(e, { ctrl: !0 }) && m(-1)) return void e.preventDefault();
                                break;
                            case P.Ks6.N:
                                if ((0, em.j)(e, { ctrl: !0 }) && m(1)) return void e.preventDefault();
                                break;
                            case P.Ks6.ESCAPE:
                                h?.();
                                break;
                            case P.Ks6.TAB:
                                if ((0, em.j)(e, {}) && a?.()) {
                                    (e.preventDefault(), e.stopPropagation());
                                    return;
                                }
                                if (null != f.A.getActiveCommand(n.id)) {
                                    (e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? Q.b.selectPreviousCommandOption(t)
                                            : Q.b.selectNextCommandOption(t));
                                    return;
                                }
                                break;
                            case P.Ks6.ENTER:
                                if ((0, em.j)(e, {}) && o?.(e)) {
                                    (e.preventDefault(), e.stopPropagation());
                                    return;
                                }
                                break;
                            case P.Ks6.SPACE:
                                if ((0, em.j)(e, {}) && u?.()) {
                                    (e.preventDefault(), e.stopPropagation());
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            (e.preventDefault(), e.stopPropagation());
                            return;
                        }
                        (e.key !== D.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (l && !e.ctrlKey) || (0, eo.Q9)(t)) && c) ||
                            (e.preventDefault(), e.stopPropagation(), d()),
                            r?.(e));
                    },
                    [c, n.id, l, t, h, m, o, r, u, a, d],
                ),
                handleKeyUp: i.useCallback(
                    (e) => {
                        s?.(e);
                    },
                    [s],
                ),
            };
        })({
            editor: eZ,
            channel: g,
            disableEnterToSubmit: eR,
            onKeyDown: O,
            onKeyUp: M,
            onTab: L,
            onEnter: U,
            onSpace: V,
            allowNewLines: eO,
            submit: eJ,
            hideAutocomplete: ey,
            moveSelection: eT,
        }),
        { handlePaste: e1, handleGlobalPaste: e2 } =
            ((o = i.useCallback(
                (e) => {
                    if (ez) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = j(e);
                    return (t && (e.preventDefault(), e.stopPropagation()), t);
                },
                [ez, j],
            )),
            (u = i.useCallback(
                (e) => {
                    let { event: t } = e;
                    o(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eZ.insertData(t.clipboardData), Z.VW.focus(eZ)));
                },
                [eZ, o],
            )),
            { handlePaste: o, handleGlobalPaste: u }),
        e5 = i.useCallback(
            (e) => {
                eS?.();
            },
            [eS],
        ),
        e8 = i.useCallback(
            (e) => {
                e !== eG.current ? eH.current && T?.(null, (0, $.WO)(e, { mode: "raw" }), e) : eH.current && eS();
            },
            [eS, T],
        );
    (i.useLayoutEffect(() => {
        eK.current && ((eG.current = h), eq(eZ, "parent", { value: h }));
    }, [eZ, h, eq]),
        i.useEffect(() => {
            function e() {
                let e = f.A.getActiveCommand(g.id) ?? null;
                null !== e && null != e.options && eX(e, !0);
            }
            return (E.A.addChangeListener(e), () => E.A.removeChangeListener(e));
        }, [g, eZ, eX]));
    let e3 = (0, B.I2)({ location: "SlateChannelTextArea" }).enabled,
        e6 = (0, G.n)(e3),
        e7 = (0, F.j)({ formatInline: !1 }),
        e4 = i.useCallback(
            (e) => [
                ...(e3
                    ? e6
                        ? (function (e, t, n) {
                              if (Z.VW.areStylesDisabled(e)) return [];
                              let [l, i] = t;
                              if (1 !== i.length || !Z.AS.isInTypes(l, ee)) return et;
                              let r = el.get(e.children);
                              (null == r || r.syntax !== n) &&
                                  ((r = {
                                      syntax: n,
                                      blocks: (function (e, t) {
                                          let n = e.map(() => null),
                                              l = [[]];
                                          for (let t = 0; t < e.length; t++) {
                                              let n = e[t];
                                              Z.AS.isInTypes(n, ee) ? l[l.length - 1].push([n, t]) : l.push([]);
                                          }
                                          for (let e of l)
                                              e.length > 0 &&
                                                  (function (e, t, n) {
                                                      let l,
                                                          i = t.map((e) => {
                                                              let [t] = e;
                                                              return Z.cv.serializeMarkdownChildren(t);
                                                          }),
                                                          r = i.map((e) => e.join(""));
                                                      try {
                                                          l = (0, Y.IS)(r.join("\n"), n);
                                                      } catch {
                                                          return;
                                                      }
                                                      let s = (function (e) {
                                                              let t = [];
                                                              function n(e, n) {
                                                                  let l = t.at(-1);
                                                                  if (
                                                                      null != l &&
                                                                      l.start + l.text.length === e.span.start &&
                                                                      l.attributes.join() === n.join()
                                                                  ) {
                                                                      l.text += e.text;
                                                                      return;
                                                                  }
                                                                  t.push({
                                                                      text: e.text,
                                                                      start: e.span.start,
                                                                      attributes: n,
                                                                      data: void 0,
                                                                  });
                                                              }
                                                              function l(e, t, l) {
                                                                  let [i, r] =
                                                                      "open" === t
                                                                          ? ["syntaxBefore", "before_"]
                                                                          : ["syntaxAfter", "after_"];
                                                                  n(e, [i, ...l.map((e) => `${r}${e}`)]);
                                                              }
                                                              return (
                                                                  !(function e(t, i) {
                                                                      let { kind: r } = t,
                                                                          s = i;
                                                                      switch (r.type) {
                                                                          case "modifier":
                                                                              s = [...i, en[r.value.kind]];
                                                                              break;
                                                                          case "code":
                                                                              s = [...i, "inlineCode"];
                                                                              break;
                                                                          case "link":
                                                                              s = [...i, "link"];
                                                                              break;
                                                                          case "small":
                                                                              s = [...i, "subtext"];
                                                                      }
                                                                      let a = !1,
                                                                          o = !1;
                                                                      for (let i = 0; i < t.children.length; i++) {
                                                                          let u = t.children[i];
                                                                          if ("node" === u.type) {
                                                                              (e(u, s), (o = !1));
                                                                              continue;
                                                                          }
                                                                          switch (
                                                                              ("whitespace" !== u.kind.type && (o = !1),
                                                                              u.kind.type)
                                                                          ) {
                                                                              case "delimiter":
                                                                                  l(u, u.kind.value.side, s);
                                                                                  break;
                                                                              case "code_delimiter":
                                                                                  l(u, 0 === i ? "open" : "close", s);
                                                                                  break;
                                                                              case "escape":
                                                                                  l(u, "open", []);
                                                                                  break;
                                                                              case "code_fence":
                                                                                  n(u, ["codeBlockSyntax"]);
                                                                                  break;
                                                                              case "language":
                                                                                  n(u, ["codeBlockLang"]);
                                                                                  break;
                                                                              case "code_content":
                                                                                  n(
                                                                                      u,
                                                                                      "code_block" === r.type
                                                                                          ? ["codeBlockText"]
                                                                                          : s,
                                                                                  );
                                                                                  break;
                                                                              case "small_marker":
                                                                                  (l(u, "open", s), (o = !0));
                                                                                  break;
                                                                              case "link_open":
                                                                                  l(u, "open", s);
                                                                                  break;
                                                                              case "link_close":
                                                                                  (l(u, "close", s), (a = !0));
                                                                                  break;
                                                                              case "destination_open":
                                                                              case "destination_close":
                                                                              case "title":
                                                                                  l(u, "close", s);
                                                                                  break;
                                                                              case "url":
                                                                                  a ? l(u, "close", s) : n(u, s);
                                                                                  break;
                                                                              case "whitespace":
                                                                                  o
                                                                                      ? l(u, "open", s)
                                                                                      : a
                                                                                        ? l(u, "close", s)
                                                                                        : n(u, s);
                                                                                  break;
                                                                              case "line_ending":
                                                                              case "indent":
                                                                              case "quote_prefix":
                                                                              case "list_marker":
                                                                              case "heading_marker":
                                                                                  n(u, []);
                                                                                  break;
                                                                              default:
                                                                                  n(u, s);
                                                                          }
                                                                      }
                                                                  })(e, []),
                                                                  t
                                                              );
                                                          })(l),
                                                          a = 0,
                                                          o = 0;
                                                      for (let n = 0; n < t.length; n++) {
                                                          let l = o + r[n].length,
                                                              f = [];
                                                          for (; a < s.length && s[a].start < l;) {
                                                              var u, c, d, h, m;
                                                              let e = s[a],
                                                                  t = e.start + e.text.length,
                                                                  n = Math.max(e.start, o),
                                                                  i = Math.min(t, l);
                                                              if (
                                                                  (i > n &&
                                                                      ((u = e),
                                                                      (c = n),
                                                                      (d = i),
                                                                      (h = o),
                                                                      (m = l),
                                                                      !u.attributes.includes("codeBlockText") ||
                                                                          c !== h ||
                                                                          d !== m) &&
                                                                      f.push({
                                                                          ...e,
                                                                          text: e.text.slice(n - e.start, i - e.start),
                                                                          start: n - o,
                                                                      }),
                                                                  t > l)
                                                              )
                                                                  break;
                                                              a++;
                                                          }
                                                          ((e[t[n][1]] = { serializedChildren: i[n], entries: f }),
                                                              (o = l + 1));
                                                      }
                                                  })(n, e, t);
                                          return n;
                                      })(e.children, n),
                                  }),
                                  el.set(e.children, r));
                              let s = r.blocks[i[0]];
                              return null == s ? et : (0, J.B)(e, i, s.serializedChildren, s.entries);
                          })(eZ, e, e7)
                        : []
                    : (0, J.A)(eZ, e, g.guild_id)),
                ...(0, X.A)(eZ, e),
                ...(function (e, t) {
                    if (Z.VW.areStylesDisabled(e)) return [];
                    let [n, l] = t,
                        i = [];
                    if (!Z.l5.isText(n)) return i;
                    let [r] = Z.VW.node(e, Z.PW.parent(l));
                    return (
                        Z.AS.isType(r, "applicationCommand") &&
                            n === r.children[0] &&
                            i.push({
                                anchor: { path: l, offset: 0 },
                                focus: { path: l, offset: 0 + r.command.displayName.length + 1 },
                                commandName: !0,
                            }),
                        i
                    );
                })(eZ, e),
            ],
            [eZ, g, e3, e6, e7],
        ),
        e9 = i.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: i, children: r, element: s } = t;
                    switch (s.type) {
                        case "applicationCommand":
                            let a = f.A.getActiveCommand(n),
                                o = 0,
                                u = 0;
                            if (null != a && a.id === s.command.id) {
                                let t = H.O7(e);
                                for (let e of a.options ?? []) t.includes(e.name) ? u++ : o++;
                            }
                            let c = {};
                            if (o > 0) {
                                let e;
                                ((e =
                                    u > 0
                                        ? eA.intl.formatToPlainString(eA.t.BP8N0K, { count: o })
                                        : eA.intl.formatToPlainString(eA.t.lziVC9, { count: o })),
                                    (c["data-trailing-placeholder"] = e));
                            }
                            return (0, l.jsx)("div", { className: eC.uB, ...i, ...c, children: r });
                        case "applicationCommandOption":
                            return (0, l.jsx)(eb, { attributes: i, channelId: n, element: s, children: r });
                        default:
                            return null;
                    }
                })(eZ, e, g.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "gameMentionInput" === i.type
                                ? (0, l.jsx)(eI, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "timestampMentionInput" === i.type
                                ? (0, l.jsx)(ev, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [g.id, eZ],
        ),
        te = i.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: i, text: r } = e;
                    if (i.commandName) {
                        let e = s()(eC.p6, { [eC.BI]: "" === r.text });
                        return (0, l.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.EG, { event: P.jej.GLOBAL_CLIPBOARD_PASTE, handler: e2 }),
            (0, l.jsx)("div", {
                ref: eB,
                className: s()(x, eN.pC),
                children: (0, l.jsx)(q.A, {
                    id: y,
                    editor: eZ,
                    channelId: g.id,
                    guildId: g.guild_id,
                    className: s()(eN.gf, N),
                    placeholder: I,
                    readOnly: ez,
                    spellCheck: ej,
                    autoFocus: !e_,
                    canFocus: !A,
                    onChange: e8,
                    onFocus: _,
                    onBlur: R,
                    onClick: e5,
                    onPaste: e1,
                    onKeyDown: eY,
                    onKeyUp: e0,
                    decorate: e4,
                    renderExtraElement: e9,
                    renderExtraLeaf: te,
                    "aria-owns": ew,
                    "aria-haspopup": eL,
                    "aria-expanded": eM,
                    "aria-activedescendant": eP,
                    "aria-controls": eD,
                    "aria-labelledby": eW,
                    "aria-describedby": eV,
                    "aria-invalid": eU,
                    "aria-autocomplete": eF,
                    "aria-required": v,
                }),
            }),
        ],
    });
}
var ej = n(495088);
new g.A("ChannelEditor.tsx");
let ek = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class e_ extends i.Component {
    ref = i.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    _emptyRichValue = (0, b.x7)("");
    constructor(e) {
        (super(e),
            (this._unsubscribe = I.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: I.Y0.getState() }));
    }
    _getEditorWindow() {
        let e = this.ref?.current?.getSlateEditor?.()?.windowContext?.renderWindow;
        if (null == this._cachedEditorWindow || this._cachedEditorWindow !== e) {
            if (null != this._cachedEditorWindow && null == e) return null;
            this._cachedEditorWindow = e ?? window;
        }
        return this._cachedEditorWindow;
    }
    componentDidMount() {
        (this.props.focused && requestAnimationFrame(() => this.focus()),
            document.addEventListener("selectionchange", this.handleSelectionChange),
            window.addEventListener("beforeunload", this.handleBeforeUnload),
            (this._initTimeoutId = setTimeout(() => {
                this._getEditorWindow();
            }, 1e3)));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            let e;
            ((e = this.props.useSlate ? this.props.textValue : (0, $.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, b.x7)(e)));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        (this.saveCurrentText(),
            this._unsubscribe?.(),
            window.removeEventListener("beforeunload", this.handleBeforeUnload),
            document.removeEventListener("selectionchange", this.handleSelectionChange),
            (this._focusBlurQueue = null),
            (this._unsubscribe = null),
            (this._cachedEditorWindow = null),
            null != this._initTimeoutId && clearTimeout(this._initTimeoutId));
    }
    handleSelectionChange = () => {
        this.props.focused && this.props.onSelectionChanged(document.getSelection?.()?.toString());
    };
    focus = () => {
        this._focusBlurQueue?.then(() => {
            this.setState({ focused: !0 }, () => {
                let e = this.ref.current;
                null != e && e.focus();
            });
        });
    };
    blur() {
        let e = this.ref.current;
        null != e && e.blur();
    }
    submit(e) {
        this.ref.current?.submit(e);
    }
    insertEmoji(e) {
        let { emoji: t, willClose: n } = e,
            l = this.ref.current;
        null != t && null != l && (l.insertEmoji({ emoji: t, addSpace: n }), n && this.focus());
    }
    insertGIF(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && ("" === t || t.endsWith(" ") || n.insertText(" ", void 0, !1), n.insertText(e.url));
    }
    insertSound(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e &&
            null != n &&
            (t.endsWith(" ") || n.insertText(" ", void 0, !1),
            n.insertText(`<sound:${e.guildId}:${e.soundId}>`, void 0, !0));
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        (this.setState({ focused: !0, submitting: !1 }), c.A.saveDraft(e.id, "", t.drafts.type));
    }
    getCurrentWord() {
        let e = this.ref.current;
        return e?.getCurrentWord() ?? { word: null, isAtStart: !1 };
    }
    insertAutocomplete(e, t, n) {
        let l = this.ref.current;
        return l?.insertAutocomplete(e, t, n);
    }
    insertInlineAutocompleteElement(e) {
        let t = this.ref.current;
        return t?.insertInlineAutocompleteInput(e);
    }
    replaceInlineAutocompleteInput(e, t, n) {
        let l = this.ref.current;
        return l?.replaceInlineAutocompleteInput(e, t, n);
    }
    getCurrentCommandOption() {
        let e = this.ref.current;
        return e?.getCurrentCommandOption?.() ?? null;
    }
    getCurrentCommandOptionValue() {
        let e = this.ref.current;
        return e?.getCurrentCommandOptionValue?.() ?? [];
    }
    getCommandOptionValues() {
        let e = this.ref.current;
        return e?.getCommandOptionValues?.() ?? {};
    }
    getFirstText() {
        let e = this.ref.current;
        return e?.getFirstText() ?? null;
    }
    getSlateEditor() {
        let e = this.ref.current;
        return e?.getSlateEditor?.() ?? null;
    }
    fixFocus(e) {
        e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.ref.current?.insertText(e, t, n);
    }
    saveCurrentText = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                { type: n, channel: l } = e.props;
            n.drafts.autoSave && (t && e.saveCurrentTextThrottled.cancel(), e.handleSaveCurrentText(l.id));
        };
    })();
    handleBeforeUnload = () => this.saveCurrentText();
    saveCurrentTextThrottled = o().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: l } = this.props;
        return e && !n ? (l ? "" : eA.intl.string(eA.t.IYKTTc)) : t;
    }
    handleEnter = (e) => this.props.onEnter?.(e);
    handleTab = () => this.props.onTab?.();
    handleSpace = () => this.props.onSpace?.();
    handleMoveSelection = (e) => this.props.onMoveSelection?.(e);
    maybeShowAutocomplete = () => this.props.onMaybeShowAutocomplete?.();
    hideAutocomplete = () => this.props.onHideAutocomplete?.();
    render() {
        let {
                textValue: e,
                richValue: t,
                disabled: n,
                onChange: i,
                onKeyDown: r,
                onResize: a,
                onSubmit: o,
                onSubmitFailure: c,
                channel: d,
                type: h,
                useSlate: m,
                spellcheckEnabled: f,
                useNewSlashCommands: p,
                canOnlyUseTextCommands: g,
                className: x,
                id: E,
                required: y,
                maxCharacterCount: A,
                allowNewLines: b,
                "aria-describedby": I,
                "aria-labelledby": v,
                accessibilityLabel: N,
                showValueWhenDisabled: T,
            } = this.props,
            { submitting: j, popup: k } = this.state,
            _ = {
                channel: d,
                className: s()(x, ej.Tg, { [ej.w5]: m, [ej.Rr]: n || j }),
                id: E,
                placeholder: this.getPlaceholder(),
                required: y,
                accessibilityLabel: N,
                disabled: n || !1,
                submitting: j,
                isEdit: h === C.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                onSpace: this.handleSpace,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: b,
                onChange: i,
                onResize: a,
                onKeyDown: r,
                onSubmit: o,
                textAreaPaddingClassName: s()({
                    [ej.H$]: h === C.oU.CREATE_FORUM_POST,
                    [ej.g_]: h === C.oU.CUSTOM_GIFT,
                    [ej.Yg]: h === C.oU.USER_PROFILE,
                    [ej.$$]: h === C.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: f,
                useNewSlashCommands: p,
                disableAutoFocus: u.Fr || (h.disableAutoFocus ?? !1),
                disableEnterToSubmit: h.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": k.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== k.id || void 0,
                "aria-activedescendant": k.activeDescendant ?? void 0,
                "aria-invalid": e.length > A,
                "aria-describedby": I,
                "aria-labelledby": v,
                "aria-autocomplete": "list",
            },
            R = m
                ? (0, l.jsx)(eT, {
                      ref: this.ref,
                      ..._,
                      type: h,
                      value: n && !T ? this._emptyRichValue : t,
                      canUseCommands: h.commands?.enabled,
                      canOnlyUseTextCommands: g,
                      onSubmitFailure: c,
                  })
                : (0, l.jsx)(V, { ref: this.ref, ..._, value: n && !T ? "" : e });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(S.EG, { event: P.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, l.jsx)(S.EG, { event: P.jej.CLEAR_TEXT, handler: this.handleClearText }),
                R,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        let { textValue: t } = this.props,
            n = (0, p.I)(f.A.getActiveCommand(e), t);
        c.A.saveDraft(e, t, this.props.type.drafts.type, n);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, b.x7)(""));
    };
    handleInsertText = (e) => {
        let { plainText: t, rawText: n, addSpace: l = !1 } = e;
        this.props.disabled || (this.appendText(t, n, l), this.focus());
    };
    handleFocus = (e) => {
        let { onFocus: t } = this.props,
            { focused: n } = this.state;
        (t?.(e), n || this.setState({ focused: !0 }));
    };
    handleBlur = (e) => {
        let { onBlur: t } = this.props,
            { focused: n } = this.state;
        (t?.(e), n && this.setState({ focused: !1 }));
    };
    handlePaste = (e) => {
        let t,
            n = e.target?.ownerDocument?.defaultView,
            {
                channel: l,
                canPasteFiles: i,
                uploadPromptCharacterCount: r,
                promptToUpload: s,
                maxCharacterCount: a,
                type: o,
            } = this.props,
            u =
                null != n
                    ? (function (e) {
                          if (null == e) return null;
                          let t = (0, j.Q2)(e);
                          return null == t ? null : k(t);
                      })(n)
                    : null,
            c = null == (t = T.A.getFocusedWindowId()) ? null : k(t),
            p = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, j.Q2)(e);
                return n === (0, j.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (u ?? c ?? l)
                : l;
        if (null == s || (!p.isPrivate() && !i) || (p.isPrivate() && p.isManaged())) return !1;
        let { files: g, errors: S } = (function (e, t) {
            let n = [],
                l = [],
                i = null,
                r = null,
                s = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        s.push({ item: t, error: "is_directory" });
                        continue;
                    }
                    let i = t.getAsFile();
                    if (null == i) continue;
                    null != i.path && i.path.length > 0 ? n.push(i) : l.push(i);
                } else
                    "string" === t.kind &&
                        ("text/plain" === t.type && null == i
                            ? (i = t)
                            : "text/html" === t.type && null == r && (r = t));
            if (n.length > 0) return { files: n, errors: s };
            if (l.length > 0) {
                if (1 === l.length && "image/png" === l[0].type && null != r) {
                    let t = l[0],
                        n =
                            (function (e) {
                                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                if (null != t) {
                                    let e;
                                    try {
                                        let { pathname: n } = new URL(t.src);
                                        null != n && n.length > 0 && (e = (0, A.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(r.type)) ?? t.name;
                    return { files: [(0, y.VE)(t, n, t.type)], errors: s };
                }
                return { files: l, errors: s };
            }
            if (null != i && null != t) {
                let n = e.getData(i.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, y.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: s };
                }
            }
            return { files: [], errors: s };
        })(e.clipboardData, o.uploadLongMessages ? (r ?? a) : null);
        return (ek(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === g.length)
            ? (null != S &&
                  S.length > 0 &&
                  (0, h.openUploadError)({ title: eA.intl.string(eA.t.azO1Pe), help: eA.intl.string(eA.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              !(function (e) {
                  if (null == s) return;
                  let t = f.A.getActiveCommand(p.id);
                  if (null == t) return s(e, p, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = o.drafts.commandType ?? o.drafts.type,
                      l = null,
                      i = f.A.getActiveOption(p.id);
                  null !=
                      (l =
                          i?.type === m.n4.ATTACHMENT
                              ? i
                              : t.options?.find((e) => {
                                    if (e.type === m.n4.ATTACHMENT) return null == E.A.getUpload(p.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: p.id,
                          id: l.name,
                          draftType: n,
                          file: { id: l.name, platform: x.x.WEB, file: e[0] },
                      });
              })(g),
              this.focus(),
              !0);
    };
}
