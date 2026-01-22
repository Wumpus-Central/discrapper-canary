n.d(t, { A: () => k }), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(155718),
    l = n(58149),
    c = n(861382),
    u = n(522602),
    d = n(234320),
    f = n(203982),
    p = n(355622),
    _ = n(317681),
    h = n(186306),
    m = n(140177),
    g = n(323350),
    E = n(35277),
    b = n(711371),
    y = n(702483),
    O = n(337630),
    A = n(490682),
    v = n(904987),
    S = n(848570),
    I = n(1228),
    T = n(919499),
    C = n(126455),
    N = n(806839),
    R = n(870748),
    w = n(2368),
    P = n(820159),
    D = n(330095),
    x = n(192796),
    L = n(113796),
    j = n(652215),
    M = n(111925);
let k = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: a,
            channel: k,
            className: U,
            id: G,
            disabled: V,
            submitting: F,
            placeholder: B,
            required: H,
            textAreaPaddingClassName: Y,
            onChange: W,
            onPaste: K,
            onResize: z,
            onFocus: q,
            onBlur: X,
            onKeyDown: Z,
            onKeyUp: Q,
            onTab: $,
            onEnter: J,
            onSubmit: ee,
            onSubmitFailure: et,
            maybeShowAutocomplete: en,
            hideAutocomplete: er,
            moveSelection: ei,
            spellcheckEnabled: ea,
            canUseCommands: es,
            canOnlyUseTextCommands: eo,
            disableAutoFocus: el,
            disableEnterToSubmit: ec,
            allowNewLines: eu,
            isEditorIdle: ed,
            currentAutocompleteType: ef,
            "aria-owns": ep,
            "aria-expanded": e_,
            "aria-haspopup": eh,
            "aria-activedescendant": em,
            "aria-controls": eg,
            "aria-invalid": eE,
            "aria-describedby": eb,
            "aria-labelledby": ey,
            "aria-autocomplete": eO,
        } = e,
        eA = i.useRef(null),
        ev = i.useRef(null),
        eS = i.useRef(!0),
        eI = i.useRef(!0),
        eT = V || F,
        eC = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: a } = n,
                    s = b.VW.richValue(e),
                    o = e.selection,
                    l = !1;
                if (void 0 !== i && i !== s) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === p.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, w.eF)(e, k.guild_id, k.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, w.eF)(e, k.guild_id, k.id), (a = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== s && h.o.insertEntry(e, "other", !1, s, o), (l = !0);
                }
                if ((null == a || b.Ot.isValid(e, a) || (a = void 0), (l || !b.Ot.isValid(e, o)) && void 0 === a)) {
                    let t = b.VW.end(e, []);
                    a = {
                        anchor: t,
                        focus: t,
                    };
                }
                let u = null != a && !b.Ot.equals(a, o);
                if ((l && !el && b.VW.focus(e), null != a && u)) {
                    e.selection = a;
                    let t = h.o.currentEntry(e);
                    null != t && (t.selection = a), (l = !0);
                }
                let d = _.n$(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null == (r = c.A.getActiveCommand(k.id)) ? void 0 : r.id) &&
                        h.o.withMergedEntry(e, () => {
                            (0, R.t)(e, k.id, null, !0);
                        }),
                    l)
                )
                    if ("parent" === t)
                        try {
                            (eI.current = !1), e.onChange();
                        } finally {
                            eI.current = !0;
                        }
                    else e.onChange();
            },
            [k.id, k.guild_id, el],
        ),
        eN = i.useCallback(() => {
            eS.current = !1;
        }, []),
        eR = i.useCallback(() => {
            eS.current = !0;
        }, []),
        ew = (0, S.A)({
            channel: k,
            chatInputType: a,
            canUseCommands: es,
            canOnlyUseTextCommands: eo,
            onChangeStart: eN,
            onChangeEnd: eR,
            updateState: eC,
        }),
        eP = i.useCallback(
            (e, t) => {
                let n = _.SQ(ew, e, k.id),
                    r = _.cd(e, k.guild_id, k.id, n, t);
                return {
                    values: n,
                    results: r,
                };
            },
            [k.guild_id, k.id, ew],
        ),
        eD = i.useCallback(() => {
            let e,
                t = b.VW.getNodesOfType(ew, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = es ? c.A.getActiveCommand(k.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eP(r, !1);
                e = t.values;
                let n = _.O7(ew)
                    .filter((e) => !t.results[e].success)
                    .map((e) => {
                        var t;
                        return (null != (t = r.options) ? t : []).find((t) => t.name === e);
                    });
                for (let e of r.options)
                    !e.required || e.name in t.values || (E.b.insertCommandOption(ew, e), n.push(e));
                if (n.length > 0) {
                    var a, s;
                    let e = n[0];
                    E.b.selectCommandOption(ew, e.name),
                        (i = !0),
                        (0, l.zV)(j.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == r ? void 0 : r.applicationId,
                            command_id: null == r || null == (s = r.rootCommand) ? void 0 : s.id,
                            argument_type: o.n4[null != (a = null == e ? void 0 : e.type) ? a : 3],
                            is_required: null == e ? void 0 : e.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    E.b.setNodes(ew, { error: !0 }, { at: t }), i || E.b.select(ew, b.VW.end(ew, t)), (i = !0);
            if (i) {
                f._.dispatch(j.jej.SHAKE_APP, {
                    duration: 200,
                    intensity: 2,
                }),
                    null == et || et();
                return;
            }
            null == ee ||
                ee(
                    (0, g.WO)(b.VW.richValue(ew), {
                        mode: "raw",
                        ignoreTrailingEmptyNodes: !0,
                    }),
                    r,
                    e,
                );
        }, [k.id, ew, ee, et, eP, es]);
    (0, I.A)(t, ew, k, eD), (0, N.A)(ew, eA, z);
    let { handleKeyDown: ex, handleKeyUp: eL } = (0, T.A)({
            editor: ew,
            channel: k,
            disableEnterToSubmit: ec,
            onKeyDown: Z,
            onKeyUp: Q,
            onTab: $,
            onEnter: J,
            allowNewLines: eu,
            submit: eD,
            hideAutocomplete: er,
            moveSelection: ei,
        }),
        { handlePaste: ej, handleGlobalPaste: eM } = (0, C.A)(ew, eT, K),
        ek = i.useCallback(
            (e) => {
                null == en || en();
            },
            [en],
        ),
        eU = i.useCallback(
            (e) => {
                e !== ev.current
                    ? eI.current && (null == W || W(null, (0, g.WO)(e, { mode: "raw" }), e))
                    : eI.current && en();
            },
            [en, W],
        );
    i.useLayoutEffect(() => {
        eS.current && ((ev.current = n), eC(ew, "parent", { value: n }));
    }, [ew, n, eC]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null != (e = c.A.getActiveCommand(k.id)) ? e : null;
                null !== t && null != t.options && eP(t, !0);
            };
            return u.A.addChangeListener(e), () => u.A.removeChangeListener(e);
        }, [k, ew, eP]);
    let eG = i.useCallback(
            (e) => [
                ...(0, A.A)(ew, e, k.guild_id),
                ...(0, y.A)(ew, e),
                ...(0, O.A)(ew, e),
                ...(0, v.A)(ew, e, k, {
                    isIdle: ed,
                    currentAutocompleteType: ef,
                }),
            ],
            [ew, k, ed, ef],
        ),
        eV = i.useCallback(
            (e) => {
                let t = (0, P.A)(ew, e, k.id);
                return null == t && (t = (0, x.A)(ew, e)), null == t && (t = (0, L.A)(ew, e)), t;
            },
            [k.id, ew],
        ),
        eF = i.useCallback((e) => (0, D.A)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.EG, {
                event: j.jej.GLOBAL_CLIPBOARD_PASTE,
                handler: eM,
            }),
            (0, r.jsx)("div", {
                ref: eA,
                className: s()(U, M.pC),
                children: (0, r.jsx)(m.A, {
                    id: G,
                    editor: ew,
                    channelId: k.id,
                    guildId: k.guild_id,
                    className: s()(M.gf, Y),
                    placeholder: B,
                    readOnly: eT,
                    spellCheck: ea,
                    autoFocus: !el,
                    canFocus: !V,
                    onChange: eU,
                    onFocus: q,
                    onBlur: X,
                    onClick: ek,
                    onPaste: ej,
                    onKeyDown: ex,
                    onKeyUp: eL,
                    decorate: eG,
                    renderExtraElement: eV,
                    renderExtraLeaf: eF,
                    "aria-owns": ep,
                    "aria-haspopup": eh,
                    "aria-expanded": e_,
                    "aria-activedescendant": em,
                    "aria-controls": eg,
                    "aria-labelledby": ey,
                    "aria-describedby": eb,
                    "aria-invalid": eE,
                    "aria-autocomplete": eO,
                    "aria-required": H,
                }),
            }),
        ],
    });
});
