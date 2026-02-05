"use strict";
n.d(t, { A: () => U }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(323350),
    E = n(35277),
    A = n(711371),
    I = n(702483),
    T = n(337630),
    y = n(490682),
    S = n(904987),
    v = n(848570),
    C = n(1228),
    b = n(919499),
    N = n(126455),
    R = n(806839),
    O = n(870748),
    D = n(2368),
    L = n(820159),
    w = n(330095),
    x = n(192796),
    P = n(113796),
    M = n(652215),
    k = n(111925);
let U = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: a,
            channel: U,
            className: G,
            id: V,
            disabled: F,
            submitting: B,
            placeholder: j,
            required: H,
            textAreaPaddingClassName: Y,
            onChange: W,
            onPaste: K,
            onResize: z,
            onFocus: $,
            onBlur: q,
            onKeyDown: Z,
            onKeyUp: Q,
            onTab: X,
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
            disableEnterToSubmit: eu,
            allowNewLines: ec,
            isEditorIdle: ed,
            currentAutocompleteType: e_,
            "aria-owns": ef,
            "aria-expanded": ep,
            "aria-haspopup": eh,
            "aria-activedescendant": em,
            "aria-controls": eg,
            "aria-invalid": eE,
            "aria-describedby": eA,
            "aria-labelledby": eI,
            "aria-autocomplete": eT,
        } = e,
        ey = i.useRef(null),
        eS = i.useRef(null),
        ev = i.useRef(!0),
        eC = i.useRef(!0),
        eb = F || B,
        eN = i.useCallback(
            (e, t, n) => {
                let { value: r, selection: i } = n,
                    a = A.VW.richValue(e),
                    s = e.selection,
                    o = !1;
                if (void 0 !== r && r !== a) {
                    if (((e.children = r), "parent" === t && !e.previewMarkdown && e.chatInputType === f.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, D.eF)(e, U.guild_id, U.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, D.eF)(e, U.guild_id, U.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== r && r !== a && h.o.insertEntry(e, "other", !1, a, s), (o = !0);
                }
                if ((null == i || A.Ot.isValid(e, i) || (i = void 0), (o || !A.Ot.isValid(e, s)) && void 0 === i)) {
                    let t = A.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let l = null != i && !A.Ot.equals(i, s);
                if ((o && !el && A.VW.focus(e), null != i && l)) {
                    e.selection = i;
                    let t = h.o.currentEntry(e);
                    null != t && (t.selection = i), (o = !0);
                }
                let c = p.n$(e);
                if (
                    (null != c &&
                        c[0].command.id !== u.A.getActiveCommand(U.id)?.id &&
                        h.o.withMergedEntry(e, () => {
                            (0, O.t)(e, U.id, null, !0);
                        }),
                    o)
                )
                    if ("parent" === t)
                        try {
                            (eC.current = !1), e.onChange();
                        } finally {
                            eC.current = !0;
                        }
                    else e.onChange();
            },
            [U.id, U.guild_id, el],
        ),
        eR = i.useCallback(() => {
            ev.current = !1;
        }, []),
        eO = i.useCallback(() => {
            ev.current = !0;
        }, []),
        eD = (0, v.A)({
            channel: U,
            chatInputType: a,
            canUseCommands: es,
            canOnlyUseTextCommands: eo,
            onChangeStart: eR,
            onChangeEnd: eO,
            updateState: eN,
        }),
        eL = i.useCallback(
            (e, t) => {
                let n = p.SQ(eD, e, U.id),
                    r = p.cd(e, U.guild_id, U.id, n, t);
                return { values: n, results: r };
            },
            [U.guild_id, U.id, eD],
        ),
        ew = i.useCallback(() => {
            let e,
                t = A.VW.getNodesOfType(eD, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = es ? u.A.getActiveCommand(U.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eL(r, !1);
                e = t.values;
                let n = p
                    .O7(eD)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (r.options ?? []).find((t) => t.name === e));
                for (let e of r.options)
                    !e.required || e.name in t.values || (E.b.insertCommandOption(eD, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    E.b.selectCommandOption(eD, e.name),
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
                    E.b.setNodes(eD, { error: !0 }, { at: t }), i || E.b.select(eD, A.VW.end(eD, t)), (i = !0);
            if (i) {
                _._.dispatch(M.jej.SHAKE_APP, { duration: 200, intensity: 2 }), et?.();
                return;
            }
            ee?.((0, g.WO)(A.VW.richValue(eD), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), r, e);
        }, [U.id, eD, ee, et, eL, es]);
    (0, C.A)(t, eD, U, ew), (0, R.A)(eD, ey, z);
    let { handleKeyDown: ex, handleKeyUp: eP } = (0, b.A)({
            editor: eD,
            channel: U,
            disableEnterToSubmit: eu,
            onKeyDown: Z,
            onKeyUp: Q,
            onTab: X,
            onEnter: J,
            allowNewLines: ec,
            submit: ew,
            hideAutocomplete: er,
            moveSelection: ei,
        }),
        { handlePaste: eM, handleGlobalPaste: ek } = (0, N.A)(eD, eb, K),
        eU = i.useCallback(
            (e) => {
                en?.();
            },
            [en],
        ),
        eG = i.useCallback(
            (e) => {
                e !== eS.current ? eC.current && W?.(null, (0, g.WO)(e, { mode: "raw" }), e) : eC.current && en();
            },
            [en, W],
        );
    i.useLayoutEffect(() => {
        ev.current && ((eS.current = n), eN(eD, "parent", { value: n }));
    }, [eD, n, eN]),
        i.useEffect(() => {
            let e = () => {
                let e = u.A.getActiveCommand(U.id) ?? null;
                null !== e && null != e.options && eL(e, !0);
            };
            return c.A.addChangeListener(e), () => c.A.removeChangeListener(e);
        }, [U, eD, eL]);
    let eV = i.useCallback(
            (e) => [
                ...(0, y.A)(eD, e, U.guild_id),
                ...(0, I.A)(eD, e),
                ...(0, T.A)(eD, e),
                ...(0, S.A)(eD, e, U, { isIdle: ed, currentAutocompleteType: e_ }),
            ],
            [eD, U, ed, e_],
        ),
        eF = i.useCallback(
            (e) => {
                let t = (0, L.A)(eD, e, U.id);
                return null == t && (t = (0, x.A)(eD, e)), null == t && (t = (0, P.A)(eD, e)), t;
            },
            [U.id, eD],
        ),
        eB = i.useCallback((e) => (0, w.A)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: ek }),
            (0, r.jsx)("div", {
                ref: ey,
                className: s()(G, k.pC),
                children: (0, r.jsx)(m.A, {
                    id: V,
                    editor: eD,
                    channelId: U.id,
                    guildId: U.guild_id,
                    className: s()(k.gf, Y),
                    placeholder: j,
                    readOnly: eb,
                    spellCheck: ea,
                    autoFocus: !el,
                    canFocus: !F,
                    onChange: eG,
                    onFocus: $,
                    onBlur: q,
                    onClick: eU,
                    onPaste: eM,
                    onKeyDown: ex,
                    onKeyUp: eP,
                    decorate: eV,
                    renderExtraElement: eF,
                    renderExtraLeaf: eB,
                    "aria-owns": ef,
                    "aria-haspopup": eh,
                    "aria-expanded": ep,
                    "aria-activedescendant": em,
                    "aria-controls": eg,
                    "aria-labelledby": eI,
                    "aria-describedby": eA,
                    "aria-invalid": eE,
                    "aria-autocomplete": eT,
                    "aria-required": H,
                }),
            }),
        ],
    });
});
