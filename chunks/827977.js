"use strict";
n.d(t, { A: () => x }), n(321073);
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
    E = n(140177),
    m = n(323350),
    g = n(35277),
    A = n(711371),
    I = n(702483),
    T = n(337630),
    S = n(490682),
    y = n(848570),
    N = n(1228),
    v = n(919499),
    C = n(126455),
    O = n(806839),
    R = n(870748),
    b = n(2368),
    D = n(820159),
    L = n(330095),
    w = n(113796),
    M = n(652215),
    P = n(471910);
let x = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: s,
            channel: x,
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
            onTab: X,
            onEnter: Q,
            onSubmit: Z,
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
            "aria-labelledby": eE,
            "aria-autocomplete": em,
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
                            (e.previewMarkdown = !0), (0, b.eF)(e, x.guild_id, x.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, b.eF)(e, x.guild_id, x.id), (i = void 0);
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
                        c[0].command.id !== u.A.getActiveCommand(x.id)?.id &&
                        h.o.withMergedEntry(e, () => {
                            (0, R.t)(e, x.id, null, !0);
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
            [x.id, x.guild_id, ea],
        ),
        eN = i.useCallback(() => {
            eI.current = !1;
        }, []),
        ev = i.useCallback(() => {
            eI.current = !0;
        }, []),
        eC = (0, y.A)({
            channel: x,
            chatInputType: s,
            canUseCommands: ei,
            canOnlyUseTextCommands: es,
            onChangeStart: eN,
            onChangeEnd: ev,
            updateState: ey,
        }),
        eO = i.useCallback(
            (e, t) => {
                let n = p.SQ(eC, e, x.id),
                    r = p.cd(e, x.guild_id, x.id, n, t);
                return { values: n, results: r };
            },
            [x.guild_id, x.id, eC],
        ),
        eR = i.useCallback(() => {
            let e,
                t = A.VW.getNodesOfType(eC, ["timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = ei ? u.A.getActiveCommand(x.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eO(r, !1);
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
            Z?.((0, m.WO)(A.VW.richValue(eC), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), r, e);
        }, [x.id, eC, Z, J, eO, ei]);
    (0, N.A)(t, eC, x, eR), (0, O.A)(eC, eg, W);
    let { handleKeyDown: eb, handleKeyUp: eD } = (0, v.A)({
            editor: eC,
            channel: x,
            disableEnterToSubmit: eo,
            onKeyDown: z,
            onKeyUp: q,
            onTab: X,
            onEnter: Q,
            allowNewLines: el,
            submit: eR,
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
        eP = i.useCallback(
            (e) => {
                e !== eA.current ? eT.current && j?.(null, (0, m.WO)(e, { mode: "raw" }), e) : eT.current && ee();
            },
            [ee, j],
        );
    i.useLayoutEffect(() => {
        eI.current && ((eA.current = n), ey(eC, "parent", { value: n }));
    }, [eC, n, ey]),
        i.useEffect(() => {
            let e = () => {
                let e = u.A.getActiveCommand(x.id) ?? null;
                null !== e && null != e.options && eO(e, !0);
            };
            return c.A.addChangeListener(e), () => c.A.removeChangeListener(e);
        }, [x, eC, eO]);
    let ex = i.useCallback((e) => [...(0, S.A)(eC, e, x.guild_id), ...(0, I.A)(eC, e), ...(0, T.A)(eC, e)], [eC, x]),
        ek = i.useCallback(
            (e) => {
                let t = (0, D.A)(eC, e, x.id);
                return null == t && (t = (0, w.A)(eC, e)), t;
            },
            [x.id, eC],
        ),
        eU = i.useCallback((e) => (0, L.A)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: ew }),
            (0, r.jsx)("div", {
                ref: eg,
                className: a()(k, P.pC),
                children: (0, r.jsx)(E.A, {
                    id: U,
                    editor: eC,
                    channelId: x.id,
                    guildId: x.guild_id,
                    className: a()(P.gf, H),
                    placeholder: V,
                    readOnly: eS,
                    spellCheck: er,
                    autoFocus: !ea,
                    canFocus: !G,
                    onChange: eP,
                    onFocus: K,
                    onBlur: $,
                    onClick: eM,
                    onPaste: eL,
                    onKeyDown: eb,
                    onKeyUp: eD,
                    decorate: ex,
                    renderExtraElement: ek,
                    renderExtraLeaf: eU,
                    "aria-owns": eu,
                    "aria-haspopup": ed,
                    "aria-expanded": ec,
                    "aria-activedescendant": e_,
                    "aria-controls": ef,
                    "aria-labelledby": eE,
                    "aria-describedby": eh,
                    "aria-invalid": ep,
                    "aria-autocomplete": em,
                    "aria-required": B,
                }),
            }),
        ],
    });
});
