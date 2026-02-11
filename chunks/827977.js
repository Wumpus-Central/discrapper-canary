"use strict";
n.d(t, { A: () => G }), n(321073);
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
    h = n(317681),
    p = n(186306),
    g = n(140177),
    E = n(323350),
    A = n(35277),
    I = n(711371),
    T = n(702483),
    y = n(337630),
    S = n(490682),
    v = n(904987),
    C = n(848570),
    b = n(1228),
    N = n(919499),
    R = n(126455),
    O = n(806839),
    D = n(870748),
    L = n(2368),
    w = n(820159),
    x = n(330095),
    P = n(192796),
    M = n(113796),
    k = n(652215),
    U = n(111925);
let G = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: a,
            channel: G,
            className: F,
            id: V,
            disabled: B,
            submitting: j,
            placeholder: H,
            required: Y,
            textAreaPaddingClassName: W,
            onChange: K,
            onPaste: $,
            onResize: z,
            onFocus: q,
            onBlur: X,
            onKeyDown: Z,
            onKeyUp: Q,
            onTab: J,
            onEnter: ee,
            onSubmit: et,
            onSubmitFailure: en,
            maybeShowAutocomplete: er,
            hideAutocomplete: ei,
            moveSelection: ea,
            spellcheckEnabled: es,
            canUseCommands: eo,
            canOnlyUseTextCommands: el,
            disableAutoFocus: eu,
            disableEnterToSubmit: ec,
            allowNewLines: ed,
            isEditorIdle: e_,
            currentAutocompleteType: ef,
            "aria-owns": eh,
            "aria-expanded": ep,
            "aria-haspopup": em,
            "aria-activedescendant": eg,
            "aria-controls": eE,
            "aria-invalid": eA,
            "aria-describedby": eI,
            "aria-labelledby": eT,
            "aria-autocomplete": ey,
        } = e,
        eS = i.useRef(null),
        ev = i.useRef(null),
        eC = i.useRef(!0),
        eb = i.useRef(!0),
        eN = B || j,
        eR = i.useCallback(
            (e, t, n) => {
                let { value: r, selection: i } = n,
                    a = I.VW.richValue(e),
                    s = e.selection,
                    o = !1;
                if (void 0 !== r && r !== a) {
                    if (((e.children = r), "parent" === t && !e.previewMarkdown && e.chatInputType === f.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, L.eF)(e, G.guild_id, G.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, L.eF)(e, G.guild_id, G.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== r && r !== a && p.o.insertEntry(e, "other", !1, a, s), (o = !0);
                }
                if ((null == i || I.Ot.isValid(e, i) || (i = void 0), (o || !I.Ot.isValid(e, s)) && void 0 === i)) {
                    let t = I.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let l = null != i && !I.Ot.equals(i, s);
                if ((o && !eu && I.VW.focus(e), null != i && l)) {
                    e.selection = i;
                    let t = p.o.currentEntry(e);
                    null != t && (t.selection = i), (o = !0);
                }
                let c = h.n$(e);
                if (
                    (null != c &&
                        c[0].command.id !== u.A.getActiveCommand(G.id)?.id &&
                        p.o.withMergedEntry(e, () => {
                            (0, D.t)(e, G.id, null, !0);
                        }),
                    o)
                )
                    if ("parent" === t)
                        try {
                            (eb.current = !1), e.onChange();
                        } finally {
                            eb.current = !0;
                        }
                    else e.onChange();
            },
            [G.id, G.guild_id, eu],
        ),
        eO = i.useCallback(() => {
            eC.current = !1;
        }, []),
        eD = i.useCallback(() => {
            eC.current = !0;
        }, []),
        eL = (0, C.A)({
            channel: G,
            chatInputType: a,
            canUseCommands: eo,
            canOnlyUseTextCommands: el,
            onChangeStart: eO,
            onChangeEnd: eD,
            updateState: eR,
        }),
        ew = i.useCallback(
            (e, t) => {
                let n = h.SQ(eL, e, G.id),
                    r = h.cd(e, G.guild_id, G.id, n, t);
                return { values: n, results: r };
            },
            [G.guild_id, G.id, eL],
        ),
        ex = i.useCallback(() => {
            let e,
                t = I.VW.getNodesOfType(eL, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = eo ? u.A.getActiveCommand(G.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = ew(r, !1);
                e = t.values;
                let n = h
                    .O7(eL)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (r.options ?? []).find((t) => t.name === e));
                for (let e of r.options)
                    !e.required || e.name in t.values || (A.b.insertCommandOption(eL, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    A.b.selectCommandOption(eL, e.name),
                        (i = !0),
                        (0, l.zV)(k.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: r?.applicationId,
                            command_id: r?.rootCommand?.id,
                            argument_type: o.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    A.b.setNodes(eL, { error: !0 }, { at: t }), i || A.b.select(eL, I.VW.end(eL, t)), (i = !0);
            if (i) {
                _._.dispatch(k.jej.SHAKE_APP, { duration: 200, intensity: 2 }), en?.();
                return;
            }
            et?.((0, E.WO)(I.VW.richValue(eL), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), r, e);
        }, [G.id, eL, et, en, ew, eo]);
    (0, b.A)(t, eL, G, ex), (0, O.A)(eL, eS, z);
    let { handleKeyDown: eP, handleKeyUp: eM } = (0, N.A)({
            editor: eL,
            channel: G,
            disableEnterToSubmit: ec,
            onKeyDown: Z,
            onKeyUp: Q,
            onTab: J,
            onEnter: ee,
            allowNewLines: ed,
            submit: ex,
            hideAutocomplete: ei,
            moveSelection: ea,
        }),
        { handlePaste: ek, handleGlobalPaste: eU } = (0, R.A)(eL, eN, $),
        eG = i.useCallback(
            (e) => {
                er?.();
            },
            [er],
        ),
        eF = i.useCallback(
            (e) => {
                e !== ev.current ? eb.current && K?.(null, (0, E.WO)(e, { mode: "raw" }), e) : eb.current && er();
            },
            [er, K],
        );
    i.useLayoutEffect(() => {
        eC.current && ((ev.current = n), eR(eL, "parent", { value: n }));
    }, [eL, n, eR]),
        i.useEffect(() => {
            let e = () => {
                let e = u.A.getActiveCommand(G.id) ?? null;
                null !== e && null != e.options && ew(e, !0);
            };
            return c.A.addChangeListener(e), () => c.A.removeChangeListener(e);
        }, [G, eL, ew]);
    let eV = i.useCallback(
            (e) => [
                ...(0, S.A)(eL, e, G.guild_id),
                ...(0, T.A)(eL, e),
                ...(0, y.A)(eL, e),
                ...(0, v.A)(eL, e, G, { isIdle: e_, currentAutocompleteType: ef }),
            ],
            [eL, G, e_, ef],
        ),
        eB = i.useCallback(
            (e) => {
                let t = (0, w.A)(eL, e, G.id);
                return null == t && (t = (0, P.A)(eL, e)), null == t && (t = (0, M.A)(eL, e)), t;
            },
            [G.id, eL],
        ),
        ej = i.useCallback((e) => (0, x.A)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.EG, { event: k.jej.GLOBAL_CLIPBOARD_PASTE, handler: eU }),
            (0, r.jsx)("div", {
                ref: eS,
                className: s()(F, U.pC),
                children: (0, r.jsx)(g.A, {
                    id: V,
                    editor: eL,
                    channelId: G.id,
                    guildId: G.guild_id,
                    className: s()(U.gf, W),
                    placeholder: H,
                    readOnly: eN,
                    spellCheck: es,
                    autoFocus: !eu,
                    canFocus: !B,
                    onChange: eF,
                    onFocus: q,
                    onBlur: X,
                    onClick: eG,
                    onPaste: ek,
                    onKeyDown: eP,
                    onKeyUp: eM,
                    decorate: eV,
                    renderExtraElement: eB,
                    renderExtraLeaf: ej,
                    "aria-owns": eh,
                    "aria-haspopup": em,
                    "aria-expanded": ep,
                    "aria-activedescendant": eg,
                    "aria-controls": eE,
                    "aria-labelledby": eT,
                    "aria-describedby": eI,
                    "aria-invalid": eA,
                    "aria-autocomplete": ey,
                    "aria-required": Y,
                }),
            }),
        ],
    });
});
