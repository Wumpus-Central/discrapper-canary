"use strict";
n.d(t, { A: () => U }), n(321073);
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
    y = n(904987),
    v = n(848570),
    N = n(1228),
    C = n(919499),
    b = n(126455),
    R = n(806839),
    O = n(870748),
    D = n(2368),
    L = n(820159),
    w = n(330095),
    x = n(192796),
    M = n(113796),
    P = n(652215),
    k = n(111925);
let U = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: s,
            channel: U,
            className: G,
            id: F,
            disabled: V,
            submitting: B,
            placeholder: H,
            required: j,
            textAreaPaddingClassName: Y,
            onChange: W,
            onPaste: K,
            onResize: z,
            onFocus: $,
            onBlur: q,
            onKeyDown: Z,
            onKeyUp: X,
            onTab: Q,
            onEnter: J,
            onSubmit: ee,
            onSubmitFailure: et,
            maybeShowAutocomplete: en,
            hideAutocomplete: er,
            moveSelection: ei,
            spellcheckEnabled: es,
            canUseCommands: ea,
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
            "aria-controls": eE,
            "aria-invalid": eg,
            "aria-describedby": eA,
            "aria-labelledby": eI,
            "aria-autocomplete": eT,
        } = e,
        eS = i.useRef(null),
        ey = i.useRef(null),
        ev = i.useRef(!0),
        eN = i.useRef(!0),
        eC = V || B,
        eb = i.useCallback(
            (e, t, n) => {
                let { value: r, selection: i } = n,
                    s = A.VW.richValue(e),
                    a = e.selection,
                    o = !1;
                if (void 0 !== r && r !== s) {
                    if (((e.children = r), "parent" === t && !e.previewMarkdown && e.chatInputType === f.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, D.eF)(e, U.guild_id, U.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, D.eF)(e, U.guild_id, U.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== r && r !== s && h.o.insertEntry(e, "other", !1, s, a), (o = !0);
                }
                if ((null == i || A.Ot.isValid(e, i) || (i = void 0), (o || !A.Ot.isValid(e, a)) && void 0 === i)) {
                    let t = A.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let l = null != i && !A.Ot.equals(i, a);
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
                            (eN.current = !1), e.onChange();
                        } finally {
                            eN.current = !0;
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
            chatInputType: s,
            canUseCommands: ea,
            canOnlyUseTextCommands: eo,
            onChangeStart: eR,
            onChangeEnd: eO,
            updateState: eb,
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
                r = ea ? u.A.getActiveCommand(U.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eL(r, !1);
                e = t.values;
                let n = p
                    .O7(eD)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (r.options ?? []).find((t) => t.name === e));
                for (let e of r.options)
                    !e.required || e.name in t.values || (g.b.insertCommandOption(eD, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    g.b.selectCommandOption(eD, e.name),
                        (i = !0),
                        (0, l.zV)(P.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: r?.applicationId,
                            command_id: r?.rootCommand?.id,
                            argument_type: o.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    g.b.setNodes(eD, { error: !0 }, { at: t }), i || g.b.select(eD, A.VW.end(eD, t)), (i = !0);
            if (i) {
                _._.dispatch(P.jej.SHAKE_APP, { duration: 200, intensity: 2 }), et?.();
                return;
            }
            ee?.((0, E.WO)(A.VW.richValue(eD), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), r, e);
        }, [U.id, eD, ee, et, eL, ea]);
    (0, N.A)(t, eD, U, ew), (0, R.A)(eD, eS, z);
    let { handleKeyDown: ex, handleKeyUp: eM } = (0, C.A)({
            editor: eD,
            channel: U,
            disableEnterToSubmit: eu,
            onKeyDown: Z,
            onKeyUp: X,
            onTab: Q,
            onEnter: J,
            allowNewLines: ec,
            submit: ew,
            hideAutocomplete: er,
            moveSelection: ei,
        }),
        { handlePaste: eP, handleGlobalPaste: ek } = (0, b.A)(eD, eC, K),
        eU = i.useCallback(
            (e) => {
                en?.();
            },
            [en],
        ),
        eG = i.useCallback(
            (e) => {
                e !== ey.current ? eN.current && W?.(null, (0, E.WO)(e, { mode: "raw" }), e) : eN.current && en();
            },
            [en, W],
        );
    i.useLayoutEffect(() => {
        ev.current && ((ey.current = n), eb(eD, "parent", { value: n }));
    }, [eD, n, eb]),
        i.useEffect(() => {
            let e = () => {
                let e = u.A.getActiveCommand(U.id) ?? null;
                null !== e && null != e.options && eL(e, !0);
            };
            return c.A.addChangeListener(e), () => c.A.removeChangeListener(e);
        }, [U, eD, eL]);
    let eF = i.useCallback(
            (e) => [
                ...(0, S.A)(eD, e, U.guild_id),
                ...(0, I.A)(eD, e),
                ...(0, T.A)(eD, e),
                ...(0, y.A)(eD, e, U, { isIdle: ed, currentAutocompleteType: e_ }),
            ],
            [eD, U, ed, e_],
        ),
        eV = i.useCallback(
            (e) => {
                let t = (0, L.A)(eD, e, U.id);
                return null == t && (t = (0, x.A)(eD, e)), null == t && (t = (0, M.A)(eD, e)), t;
            },
            [U.id, eD],
        ),
        eB = i.useCallback((e) => (0, w.A)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.EG, { event: P.jej.GLOBAL_CLIPBOARD_PASTE, handler: ek }),
            (0, r.jsx)("div", {
                ref: eS,
                className: a()(G, k.pC),
                children: (0, r.jsx)(m.A, {
                    id: F,
                    editor: eD,
                    channelId: U.id,
                    guildId: U.guild_id,
                    className: a()(k.gf, Y),
                    placeholder: H,
                    readOnly: eC,
                    spellCheck: es,
                    autoFocus: !el,
                    canFocus: !V,
                    onChange: eG,
                    onFocus: $,
                    onBlur: q,
                    onClick: eU,
                    onPaste: eP,
                    onKeyDown: ex,
                    onKeyUp: eM,
                    decorate: eF,
                    renderExtraElement: eV,
                    renderExtraLeaf: eB,
                    "aria-owns": ef,
                    "aria-haspopup": eh,
                    "aria-expanded": ep,
                    "aria-activedescendant": em,
                    "aria-controls": eE,
                    "aria-labelledby": eI,
                    "aria-describedby": eA,
                    "aria-invalid": eg,
                    "aria-autocomplete": eT,
                    "aria-required": j,
                }),
            }),
        ],
    });
});
