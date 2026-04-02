"use strict";
n.d(t, { A: () => P }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(155718),
    l = n(58149),
    u = n(861382),
    c = n(522602),
    d = n(234320),
    _ = n(203982),
    f = n(355622),
    p = n(317681),
    h = n(186306),
    m = n(140177),
    E = n(323350),
    g = n(35277),
    A = n(711371),
    I = n(702483),
    T = n(337630),
    S = n(490682),
    y = n(848570),
    v = n(1228),
    N = n(919499),
    C = n(126455),
    R = n(806839),
    O = n(870748),
    b = n(2368),
    D = n(820159),
    L = n(330095),
    w = n(113796),
    M = n(652215),
    x = n(500743);
let P = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: s,
            channel: P,
            className: k,
            id: U,
            disabled: G,
            submitting: F,
            placeholder: V,
            required: B,
            textAreaPaddingClassName: H,
            onChange: j,
            onPaste: Y,
            onResize: W,
            onFocus: K,
            onBlur: $,
            onKeyDown: z,
            onKeyUp: q,
            onTab: Z,
            onEnter: X,
            onSubmit: Q,
            onSubmitFailure: J,
            maybeShowAutocomplete: ee,
            hideAutocomplete: et,
            moveSelection: en,
            spellcheckEnabled: er,
            canUseCommands: ei,
            canOnlyUseTextCommands: es,
            disableAutoFocus: ea,
            disableEnterToSubmit: eo,
            allowNewLines: el,
            "aria-owns": eu,
            "aria-expanded": ec,
            "aria-haspopup": ed,
            "aria-activedescendant": e_,
            "aria-controls": ef,
            "aria-invalid": ep,
            "aria-describedby": eh,
            "aria-labelledby": em,
            "aria-autocomplete": eE,
        } = e,
        eg = i.useRef(null),
        eA = i.useRef(null),
        eI = i.useRef(!0),
        eT = i.useRef(!0),
        eS = G || F,
        ey = i.useCallback(
            (e, t, n) => {
                let { value: r, selection: i } = n,
                    s = A.VW.richValue(e),
                    a = e.selection,
                    o = !1;
                if (void 0 !== r && r !== s) {
                    if (((e.children = r), "parent" === t && !e.previewMarkdown && e.chatInputType === f.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, b.eF)(e, P.guild_id, P.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, b.eF)(e, P.guild_id, P.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== r && r !== s && h.o.insertEntry(e, "other", !1, s, a), (o = !0);
                }
                if ((null == i || A.Ot.isValid(e, i) || (i = void 0), (o || !A.Ot.isValid(e, a)) && void 0 === i)) {
                    let t = A.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let l = null != i && !A.Ot.equals(i, a);
                if ((o && !ea && A.VW.focus(e), null != i && l)) {
                    e.selection = i;
                    let t = h.o.currentEntry(e);
                    null != t && (t.selection = i), (o = !0);
                }
                let c = p.n$(e);
                if (
                    (null != c &&
                        c[0].command.id !== u.A.getActiveCommand(P.id)?.id &&
                        h.o.withMergedEntry(e, () => {
                            (0, O.t)(e, P.id, null, !0);
                        }),
                    o)
                )
                    if ("parent" === t)
                        try {
                            (eT.current = !1), e.onChange();
                        } finally {
                            eT.current = !0;
                        }
                    else e.onChange();
            },
            [P.id, P.guild_id, ea],
        ),
        ev = i.useCallback(() => {
            eI.current = !1;
        }, []),
        eN = i.useCallback(() => {
            eI.current = !0;
        }, []),
        eC = (0, y.A)({
            channel: P,
            chatInputType: s,
            canUseCommands: ei,
            canOnlyUseTextCommands: es,
            onChangeStart: ev,
            onChangeEnd: eN,
            updateState: ey,
        }),
        eR = i.useCallback(
            (e, t) => {
                let n = p.SQ(eC, e, P.id),
                    r = p.cd(e, P.guild_id, P.id, n, t);
                return { values: n, results: r };
            },
            [P.guild_id, P.id, eC],
        ),
        eO = i.useCallback(() => {
            let e,
                t = A.VW.getNodesOfType(eC, ["timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = ei ? u.A.getActiveCommand(P.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eR(r, !1);
                e = t.values;
                let n = p
                    .O7(eC)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (r.options ?? []).find((t) => t.name === e));
                for (let e of r.options)
                    !e.required || e.name in t.values || (g.b.insertCommandOption(eC, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    g.b.selectCommandOption(eC, e.name),
                        (i = !0),
                        (0, l.zV)(M.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: r?.applicationId,
                            command_id: r?.rootCommand?.id,
                            argument_type: o.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    g.b.setNodes(eC, { error: !0 }, { at: t }), i || g.b.select(eC, A.VW.end(eC, t)), (i = !0);
            if (i) {
                _._.dispatch(M.jej.SHAKE_APP, { duration: 200, intensity: 2 }), J?.();
                return;
            }
            Q?.((0, E.WO)(A.VW.richValue(eC), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), r, e);
        }, [P.id, eC, Q, J, eR, ei]);
    (0, v.A)(t, eC, P, eO), (0, R.A)(eC, eg, W);
    let { handleKeyDown: eb, handleKeyUp: eD } = (0, N.A)({
            editor: eC,
            channel: P,
            disableEnterToSubmit: eo,
            onKeyDown: z,
            onKeyUp: q,
            onTab: Z,
            onEnter: X,
            allowNewLines: el,
            submit: eO,
            hideAutocomplete: et,
            moveSelection: en,
        }),
        { handlePaste: eL, handleGlobalPaste: ew } = (0, C.A)(eC, eS, Y),
        eM = i.useCallback(
            (e) => {
                ee?.();
            },
            [ee],
        ),
        ex = i.useCallback(
            (e) => {
                e !== eA.current ? eT.current && j?.(null, (0, E.WO)(e, { mode: "raw" }), e) : eT.current && ee();
            },
            [ee, j],
        );
    i.useLayoutEffect(() => {
        eI.current && ((eA.current = n), ey(eC, "parent", { value: n }));
    }, [eC, n, ey]),
        i.useEffect(() => {
            let e = () => {
                let e = u.A.getActiveCommand(P.id) ?? null;
                null !== e && null != e.options && eR(e, !0);
            };
            return c.A.addChangeListener(e), () => c.A.removeChangeListener(e);
        }, [P, eC, eR]);
    let eP = i.useCallback((e) => [...(0, S.A)(eC, e, P.guild_id), ...(0, I.A)(eC, e), ...(0, T.A)(eC, e)], [eC, P]),
        ek = i.useCallback(
            (e) => {
                let t = (0, D.A)(eC, e, P.id);
                return null == t && (t = (0, w.A)(eC, e)), t;
            },
            [P.id, eC],
        ),
        eU = i.useCallback((e) => (0, L.A)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: ew }),
            (0, r.jsx)("div", {
                ref: eg,
                className: a()(k, x.pC),
                children: (0, r.jsx)(m.A, {
                    id: U,
                    editor: eC,
                    channelId: P.id,
                    guildId: P.guild_id,
                    className: a()(x.gf, H),
                    placeholder: V,
                    readOnly: eS,
                    spellCheck: er,
                    autoFocus: !ea,
                    canFocus: !G,
                    onChange: ex,
                    onFocus: K,
                    onBlur: $,
                    onClick: eM,
                    onPaste: eL,
                    onKeyDown: eb,
                    onKeyUp: eD,
                    decorate: eP,
                    renderExtraElement: ek,
                    renderExtraLeaf: eU,
                    "aria-owns": eu,
                    "aria-haspopup": ed,
                    "aria-expanded": ec,
                    "aria-activedescendant": e_,
                    "aria-controls": ef,
                    "aria-labelledby": em,
                    "aria-describedby": eh,
                    "aria-invalid": ep,
                    "aria-autocomplete": eE,
                    "aria-required": B,
                }),
            }),
        ],
    });
});
