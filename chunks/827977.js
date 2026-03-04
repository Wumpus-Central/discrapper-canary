"use strict";
n.d(t, { A: () => k }), n(321073);
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
    w = n(192796),
    M = n(113796),
    x = n(652215),
    P = n(111925);
let k = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: s,
            channel: k,
            className: U,
            id: G,
            disabled: F,
            submitting: V,
            placeholder: B,
            required: H,
            textAreaPaddingClassName: j,
            onChange: Y,
            onPaste: W,
            onResize: K,
            onFocus: $,
            onBlur: z,
            onKeyDown: q,
            onKeyUp: Z,
            onTab: X,
            onEnter: Q,
            onSubmit: J,
            onSubmitFailure: ee,
            maybeShowAutocomplete: et,
            hideAutocomplete: en,
            moveSelection: er,
            spellcheckEnabled: ei,
            canUseCommands: es,
            canOnlyUseTextCommands: ea,
            disableAutoFocus: eo,
            disableEnterToSubmit: el,
            allowNewLines: eu,
            "aria-owns": ec,
            "aria-expanded": ed,
            "aria-haspopup": e_,
            "aria-activedescendant": ef,
            "aria-controls": ep,
            "aria-invalid": eh,
            "aria-describedby": em,
            "aria-labelledby": eE,
            "aria-autocomplete": eg,
        } = e,
        eA = i.useRef(null),
        eI = i.useRef(null),
        eT = i.useRef(!0),
        eS = i.useRef(!0),
        ey = F || V,
        ev = i.useCallback(
            (e, t, n) => {
                let { value: r, selection: i } = n,
                    s = A.VW.richValue(e),
                    a = e.selection,
                    o = !1;
                if (void 0 !== r && r !== s) {
                    if (((e.children = r), "parent" === t && !e.previewMarkdown && e.chatInputType === f.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, b.eF)(e, k.guild_id, k.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, b.eF)(e, k.guild_id, k.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== r && r !== s && h.o.insertEntry(e, "other", !1, s, a), (o = !0);
                }
                if ((null == i || A.Ot.isValid(e, i) || (i = void 0), (o || !A.Ot.isValid(e, a)) && void 0 === i)) {
                    let t = A.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let l = null != i && !A.Ot.equals(i, a);
                if ((o && !eo && A.VW.focus(e), null != i && l)) {
                    e.selection = i;
                    let t = h.o.currentEntry(e);
                    null != t && (t.selection = i), (o = !0);
                }
                let c = p.n$(e);
                if (
                    (null != c &&
                        c[0].command.id !== u.A.getActiveCommand(k.id)?.id &&
                        h.o.withMergedEntry(e, () => {
                            (0, O.t)(e, k.id, null, !0);
                        }),
                    o)
                )
                    if ("parent" === t)
                        try {
                            (eS.current = !1), e.onChange();
                        } finally {
                            eS.current = !0;
                        }
                    else e.onChange();
            },
            [k.id, k.guild_id, eo],
        ),
        eN = i.useCallback(() => {
            eT.current = !1;
        }, []),
        eC = i.useCallback(() => {
            eT.current = !0;
        }, []),
        eR = (0, y.A)({
            channel: k,
            chatInputType: s,
            canUseCommands: es,
            canOnlyUseTextCommands: ea,
            onChangeStart: eN,
            onChangeEnd: eC,
            updateState: ev,
        }),
        eO = i.useCallback(
            (e, t) => {
                let n = p.SQ(eR, e, k.id),
                    r = p.cd(e, k.guild_id, k.id, n, t);
                return { values: n, results: r };
            },
            [k.guild_id, k.id, eR],
        ),
        eb = i.useCallback(() => {
            let e,
                t = A.VW.getNodesOfType(eR, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = es ? u.A.getActiveCommand(k.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eO(r, !1);
                e = t.values;
                let n = p
                    .O7(eR)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (r.options ?? []).find((t) => t.name === e));
                for (let e of r.options)
                    !e.required || e.name in t.values || (g.b.insertCommandOption(eR, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    g.b.selectCommandOption(eR, e.name),
                        (i = !0),
                        (0, l.zV)(x.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: r?.applicationId,
                            command_id: r?.rootCommand?.id,
                            argument_type: o.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    g.b.setNodes(eR, { error: !0 }, { at: t }), i || g.b.select(eR, A.VW.end(eR, t)), (i = !0);
            if (i) {
                _._.dispatch(x.jej.SHAKE_APP, { duration: 200, intensity: 2 }), ee?.();
                return;
            }
            J?.((0, E.WO)(A.VW.richValue(eR), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), r, e);
        }, [k.id, eR, J, ee, eO, es]);
    (0, v.A)(t, eR, k, eb), (0, R.A)(eR, eA, K);
    let { handleKeyDown: eD, handleKeyUp: eL } = (0, N.A)({
            editor: eR,
            channel: k,
            disableEnterToSubmit: el,
            onKeyDown: q,
            onKeyUp: Z,
            onTab: X,
            onEnter: Q,
            allowNewLines: eu,
            submit: eb,
            hideAutocomplete: en,
            moveSelection: er,
        }),
        { handlePaste: ew, handleGlobalPaste: eM } = (0, C.A)(eR, ey, W),
        ex = i.useCallback(
            (e) => {
                et?.();
            },
            [et],
        ),
        eP = i.useCallback(
            (e) => {
                e !== eI.current ? eS.current && Y?.(null, (0, E.WO)(e, { mode: "raw" }), e) : eS.current && et();
            },
            [et, Y],
        );
    i.useLayoutEffect(() => {
        eT.current && ((eI.current = n), ev(eR, "parent", { value: n }));
    }, [eR, n, ev]),
        i.useEffect(() => {
            let e = () => {
                let e = u.A.getActiveCommand(k.id) ?? null;
                null !== e && null != e.options && eO(e, !0);
            };
            return c.A.addChangeListener(e), () => c.A.removeChangeListener(e);
        }, [k, eR, eO]);
    let ek = i.useCallback((e) => [...(0, S.A)(eR, e, k.guild_id), ...(0, I.A)(eR, e), ...(0, T.A)(eR, e)], [eR, k]),
        eU = i.useCallback(
            (e) => {
                let t = (0, D.A)(eR, e, k.id);
                return null == t && (t = (0, w.A)(eR, e)), null == t && (t = (0, M.A)(eR, e)), t;
            },
            [k.id, eR],
        ),
        eG = i.useCallback((e) => (0, L.A)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.EG, { event: x.jej.GLOBAL_CLIPBOARD_PASTE, handler: eM }),
            (0, r.jsx)("div", {
                ref: eA,
                className: a()(U, P.pC),
                children: (0, r.jsx)(m.A, {
                    id: G,
                    editor: eR,
                    channelId: k.id,
                    guildId: k.guild_id,
                    className: a()(P.gf, j),
                    placeholder: B,
                    readOnly: ey,
                    spellCheck: ei,
                    autoFocus: !eo,
                    canFocus: !F,
                    onChange: eP,
                    onFocus: $,
                    onBlur: z,
                    onClick: ex,
                    onPaste: ew,
                    onKeyDown: eD,
                    onKeyUp: eL,
                    decorate: ek,
                    renderExtraElement: eU,
                    renderExtraLeaf: eG,
                    "aria-owns": ec,
                    "aria-haspopup": e_,
                    "aria-expanded": ed,
                    "aria-activedescendant": ef,
                    "aria-controls": ep,
                    "aria-labelledby": eE,
                    "aria-describedby": em,
                    "aria-invalid": eh,
                    "aria-autocomplete": eg,
                    "aria-required": H,
                }),
            }),
        ],
    });
});
