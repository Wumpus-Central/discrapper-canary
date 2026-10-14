l.d(n, { f: () => H });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(719442),
    u = l(235599),
    o = l(17928),
    d = l(43990),
    c = l(922016),
    g = l(15626),
    v = l(559106),
    f = l(452027),
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
    E = l(660484),
    R = l(267102),
    w = l(363195),
    S = l(885386),
    D = l(95701),
    M = l(652215),
    T = l(551483),
    G = l(307731),
    L = l(569622),
    O = l(465410),
    V = l(736541);
let z = (0, D.createChannelRecord)({ id: "1", type: M.rbe.DM });
function B(e) {
    let { editor: n, pickerIntention: l } = e,
        r = (0, o.bG)([w.A], () => w.A.theme),
        i = a.useRef(null),
        s = a.useCallback(
            (e, l) => {
                let { emoji: t, willClose: a } = e;
                (null != t &&
                    (!(function (e, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            t = n.animated ? "a" : "",
                            a = n.originalName ?? n.name ?? "",
                            r = `:${n.name}:`,
                            i = null != n.id ? `<${t}:${a.replace(/:/g, "")}:${n.id}>` : null,
                            s = k.VW.areStylesDisabled(e) || null == i ? r : i;
                        m.o.withSingleEntry(e, () => {
                            y.b.insertText(e, s + (l ? " " : ""));
                        });
                    })(n, t, a),
                    k.VW.focus(n)),
                    a && l());
            },
            [n],
        ),
        u = a.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(d.N, {
                    theme: r,
                    children: (e) =>
                        (0, t.jsx)("div", {
                            className: e,
                            children: (0, t.jsx)(E.A, {
                                persistSearch: !0,
                                closePopout: n,
                                onSelectEmoji: (e) => {
                                    let { emoji: l, willClose: t } = e;
                                    return s({ emoji: l, willClose: t }, n);
                                },
                                pickerIntention: l,
                            }),
                        }),
                });
            },
            [s, l, r],
        );
    return (0, t.jsx)("div", {
        className: L.S0,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(c.Y, {
            targetElementRef: i,
            renderPopout: u,
            position: "top",
            animation: c.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, t.jsx)(P.A, { ...e, ref: i, active: l, tabIndex: 0, className: L.Z8 });
            },
        }),
    });
}
function F(e) {
    let {
            editor: n,
            placeholder: l,
            readOnly: r,
            autoFocus: s,
            required: o,
            pickerIntention: d,
            onChangeValue: c,
            onKeyDown: f,
            onFocus: h,
            onBlur: p,
            ariaLabelledByProp: b,
        } = e,
        m = a.useContext(g._),
        I = m?.errorMessageId != null,
        k = a.useRef(null),
        j = a.useRef(null),
        P = a.useCallback(() => n, [n]),
        E = a.useCallback((e) => [...(0, N.A)(n, e, void 0), ...(0, x.A)(n, e)], [n]);
    return (
        a.useEffect(() => {
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
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(C.A, { ref: k, getSlateEditor: P, containerRef: j }),
                (0, t.jsx)(v.vN, {
                    children: (0, t.jsxs)("div", {
                        className: i()(L.I6, V["text-sm/normal"]),
                        "data-error": I || void 0,
                        "data-disabled": r || void 0,
                        children: [
                            (0, t.jsx)("div", {
                                ref: j,
                                className: i()(L.XG, O.yL),
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), y.b.resetSelectionToEditorEnd(n), u.rL.focus(n));
                                },
                                onScroll: () => k.current?.hide(),
                                children: (0, t.jsx)(A.A, {
                                    id: m?.controlId,
                                    containerClassName: L.RZ,
                                    className: L.EN,
                                    editor: n,
                                    placeholder: l,
                                    readOnly: r,
                                    canFocus: !r,
                                    autoFocus: s,
                                    decorate: E,
                                    onChange: c,
                                    onKeyDown: f,
                                    onFocus: h,
                                    onBlur: p,
                                    "aria-labelledby": b ?? m?.labelId,
                                    "aria-describedby": m?.describedById,
                                    "aria-errormessage": m?.errorMessageId,
                                    "aria-invalid": I || void 0,
                                    "aria-required": o || void 0,
                                }),
                            }),
                            !r && (0, t.jsx)(B, { editor: n, pickerIntention: d }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function H(e) {
    let {
            value: n,
            placeholder: l,
            minLength: r,
            maxLength: i,
            autoFocus: o = !1,
            error: d,
            emojiPickerIntention: c = G.EmojiIntention.CHAT,
            editorRef: g,
            onChange: v,
            onKeyDown: m,
            onFocus: A,
            onBlur: C,
            "aria-labelledby": k,
            ...x
        } = e,
        N = (function (e) {
            let n = a.useContext(R.Ay),
                l = S.SI.useSetting(),
                [t] = a.useState(() => {
                    let t = (0, s.ie)();
                    return (
                        (t.children = (0, b.x7)(e)),
                        (t.selection = { anchor: T.K, focus: T.K }),
                        (0, j.a)({
                            editor: t,
                            chatInputType: p.oU.GENERIC_RICH_TEXTAREA,
                            channel: z,
                            windowContext: n,
                            previewMarkdown: l,
                            updateState: (e, n, l) => {
                                let { value: t, selection: a } = l;
                                (void 0 !== t && (e.children = t), null != a && (e.selection = a), e.onChange());
                            },
                        }),
                        t
                    );
                });
            return (
                a.useLayoutEffect(() => {
                    t.onChange();
                }, [t]),
                a.useEffect(() => {
                    t.previewMarkdown !== l && ((t.previewMarkdown = l), t.onChange());
                }, [t, l]),
                t
            );
        })(n),
        [P, E] = a.useState(n);
    a.useImperativeHandle(
        g,
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
    let { fieldProps: w } = (0, f.n)(x),
        { disabled: D, required: M } = w,
        {
            setShouldValidate: L,
            errorMessage: O,
            hasError: V,
        } = (0, h.Y)({ validateOn: "change", error: d, value: P, minLength: r, maxLength: i }),
        B = a.useRef(P);
    B.current = P;
    let H = a.useCallback(
        (e) => {
            let n = (0, I.WO)(e, { mode: "raw" });
            n !== B.current && (E(n), L(!0), v?.(n));
        },
        [v, L],
    );
    return (
        a.useEffect(() => {
            n !== B.current &&
                ((N.children = (0, b.x7)(n)), (N.selection = { anchor: T.K, focus: T.K }), N.onChange(), E(n));
        }, [n, N]),
        (0, t.jsx)(f.D, {
            ...w,
            errorMessage: V ? O : void 0,
            children: (0, t.jsx)(F, {
                editor: N,
                placeholder: l,
                readOnly: D,
                autoFocus: o,
                required: M,
                pickerIntention: c,
                onChangeValue: H,
                onKeyDown: m,
                onFocus: A,
                onBlur: C,
                ariaLabelledByProp: k,
            }),
        })
    );
}
