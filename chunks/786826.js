l.d(n, { f: () => _ });
var a = l(477900),
    t = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(719442),
    u = l(235599),
    o = l(15626),
    d = l(559106),
    c = l(452027),
    g = l(17928),
    v = l(43990),
    f = l(922016),
    h = l(281595),
    p = l(355622),
    b = l(408018),
    m = l(186306),
    A = l(655098),
    I = l(323350),
    C = l(135261),
    y = l(35277),
    k = l(820066),
    x = l(702483),
    N = l(490682),
    j = l(683167),
    P = l(375499),
    E = l(267889),
    w = l(267102),
    R = l(363195),
    S = l(885386),
    D = l(95701),
    M = l(652215),
    T = l(551483),
    G = l(307731),
    L = l(569622),
    V = l(465410),
    O = l(736541);
let z = (0, D.createChannelRecord)({ id: "1", type: M.rbe.DM });
function B(e) {
    let { editor: n, pickerIntention: l } = e,
        r = (0, g.bG)([R.A], () => R.A.theme),
        i = t.useRef(null),
        s = t.useCallback(
            (e, l) => {
                let { emoji: a, willClose: t } = e;
                (null != a &&
                    (!(function (e, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = n.animated ? "a" : "",
                            t = n.originalName ?? n.name ?? "",
                            r = `:${n.name}:`,
                            i = null != n.id ? `<${a}:${t.replace(/:/g, "")}:${n.id}>` : null,
                            s = k.VW.areStylesDisabled(e) || null == i ? r : i;
                        m.o.withSingleEntry(e, () => {
                            y.b.insertText(e, s + (l ? " " : ""));
                        });
                    })(n, a, t),
                    k.VW.focus(n)),
                    t && l());
            },
            [n],
        ),
        u = t.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, a.jsx)(v.N, {
                    theme: r,
                    children: (e) =>
                        (0, a.jsx)("div", {
                            className: e,
                            children: (0, a.jsx)(E.A, {
                                persistSearch: !0,
                                closePopout: n,
                                onSelectEmoji: (e) => {
                                    let { emoji: l, willClose: a } = e;
                                    return s({ emoji: l, willClose: a }, n);
                                },
                                pickerIntention: l,
                            }),
                        }),
                });
            },
            [s, l, r],
        );
    return (0, a.jsx)("div", {
        className: L.S0,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsx)(f.Y, {
            targetElementRef: i,
            renderPopout: u,
            position: "top",
            animation: f.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, a.jsx)(P.A, { ...e, ref: i, active: l, tabIndex: 0, className: L.Z8 });
            },
        }),
    });
}
function H(e) {
    let {
            editor: n,
            placeholder: l,
            readOnly: r,
            autoFocus: s,
            required: c,
            pickerIntention: g,
            onChangeValue: v,
            onKeyDown: f,
            onFocus: h,
            onBlur: p,
            ariaLabelledByProp: b,
        } = e,
        m = t.useContext(o._),
        I = m?.errorMessageId != null,
        k = t.useRef(null),
        j = t.useRef(null),
        P = t.useCallback(() => n, [n]),
        E = t.useCallback((e) => [...(0, N.A)(n, e, void 0), ...(0, x.A)(n, e)], [n]);
    return (
        t.useEffect(() => {
            let e = j.current;
            if (null != e)
                return (
                    e.ownerDocument.addEventListener("scroll", n, { capture: !0 }),
                    () => e.ownerDocument.removeEventListener("scroll", n, { capture: !0 })
                );
            function n(n) {
                n.target.contains(e) && k.current?.hide();
            }
        }, []),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(C.A, { ref: k, getSlateEditor: P, containerRef: j }),
                (0, a.jsx)(d.vN, {
                    children: (0, a.jsxs)("div", {
                        className: i()(L.I6, O["text-sm/normal"]),
                        "data-error": I || void 0,
                        "data-disabled": r || void 0,
                        children: [
                            (0, a.jsx)("div", {
                                ref: j,
                                className: i()(L.XG, V.yL),
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), y.b.resetSelectionToEditorEnd(n), u.rL.focus(n));
                                },
                                onScroll: () => k.current?.hide(),
                                children: (0, a.jsx)(A.A, {
                                    id: m?.controlId,
                                    containerClassName: L.RZ,
                                    className: L.EN,
                                    editor: n,
                                    placeholder: l,
                                    readOnly: r,
                                    canFocus: !r,
                                    autoFocus: s,
                                    decorate: E,
                                    onChange: v,
                                    onKeyDown: f,
                                    onFocus: h,
                                    onBlur: p,
                                    "aria-labelledby": b ?? m?.labelId,
                                    "aria-describedby": m?.describedById,
                                    "aria-errormessage": m?.errorMessageId,
                                    "aria-invalid": I || void 0,
                                    "aria-required": c || void 0,
                                }),
                            }),
                            !r && (0, a.jsx)(B, { editor: n, pickerIntention: g }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function _(e) {
    let {
            value: n,
            placeholder: l,
            minLength: r,
            maxLength: i,
            autoFocus: o = !1,
            error: d,
            emojiPickerIntention: g = G.EmojiIntention.CHAT,
            editorRef: v,
            onChange: f,
            onKeyDown: m,
            onFocus: A,
            onBlur: C,
            "aria-labelledby": k,
            ...x
        } = e,
        N = (function (e) {
            let n = t.useContext(w.Ay),
                l = S.SI.useSetting(),
                [a] = t.useState(() => {
                    let a = (0, s.ie)();
                    return (
                        (a.children = (0, b.x7)(e)),
                        (a.selection = { anchor: T.K, focus: T.K }),
                        (0, j.a)({
                            editor: a,
                            chatInputType: p.oU.GENERIC_RICH_TEXTAREA,
                            channel: z,
                            windowContext: n,
                            previewMarkdown: l,
                            updateState: (e, n, l) => {
                                let { value: a, selection: t } = l;
                                (void 0 !== a && (e.children = a), null != t && (e.selection = t), e.onChange());
                            },
                        }),
                        a
                    );
                });
            return (
                t.useLayoutEffect(() => {
                    a.onChange();
                }, [a]),
                t.useEffect(() => {
                    a.previewMarkdown !== l && ((a.previewMarkdown = l), a.onChange());
                }, [a, l]),
                a
            );
        })(n),
        [P, E] = t.useState(n);
    t.useImperativeHandle(
        v,
        () => ({
            focus(e) {
                (y.b.resetSelectionToEditorEnd(N), u.rL.toDOMNode(N, N).focus(e));
            },
            blur() {
                u.rL.toDOMNode(N, N).blur();
            },
        }),
        [N],
    );
    let { fieldProps: R } = (0, c.n)(x),
        { disabled: D, required: M } = R,
        {
            setShouldValidate: L,
            errorMessage: V,
            hasError: O,
        } = (0, h.Y)({ validateOn: "change", error: d, value: P, minLength: r, maxLength: i }),
        B = t.useRef(P);
    B.current = P;
    let _ = t.useCallback(
        (e) => {
            let n = (0, I.WO)(e, { mode: "raw" });
            n !== B.current && (E(n), L(!0), f?.(n));
        },
        [f, L],
    );
    return (
        t.useEffect(() => {
            n !== B.current &&
                ((N.children = (0, b.x7)(n)), (N.selection = { anchor: T.K, focus: T.K }), N.onChange(), E(n));
        }, [n, N]),
        (0, a.jsx)(c.D, {
            ...R,
            errorMessage: O ? V : void 0,
            children: (0, a.jsx)(H, {
                editor: N,
                placeholder: l,
                readOnly: D,
                autoFocus: o,
                required: M,
                pickerIntention: g,
                onChangeValue: _,
                onKeyDown: m,
                onFocus: A,
                onBlur: C,
                ariaLabelledByProp: k,
            }),
        })
    );
}
