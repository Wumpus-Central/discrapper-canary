l.d(n, { f: () => F });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(719442),
    u = l(530795),
    o = l(15626),
    d = l(259678),
    c = l(452027),
    g = l(17928),
    v = l(43990),
    f = l(922016),
    h = l(281595),
    p = l(205086),
    m = l(355622),
    b = l(408018),
    A = l(186306),
    I = l(655098),
    C = l(323350),
    x = l(135261),
    y = l(35277),
    k = l(820066),
    N = l(702483),
    j = l(490682),
    E = l(683167),
    P = l(375499),
    w = l(267889),
    S = l(267102),
    R = l(363195),
    D = l(885386),
    M = l(95701),
    L = l(652215),
    T = l(551483),
    G = l(307731),
    V = l(569622),
    O = l(465410);
let z = (0, M.createChannelRecord)({ id: "1", type: L.rbe.DM });
function B(e) {
    let { editor: n, pickerIntention: l, containerClassName: r } = e,
        s = (0, g.bG)([R.A], () => R.A.theme),
        u = a.useRef(null),
        o = a.useCallback(
            (e, l) => {
                let { emoji: t, willClose: a } = e;
                null != t &&
                    (!(function (e, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            t = n.animated ? "a" : "",
                            a = n.originalName ?? n.name ?? "",
                            r = `:${n.name}:`,
                            i = null != n.id ? `<${t}:${a.replace(/:/g, "")}:${n.id}>` : null,
                            s = k.VW.areStylesDisabled(e) || null == i ? r : i;
                        A.o.withSingleEntry(e, () => {
                            y.b.insertText(e, s + (l ? " " : ""));
                        });
                    })(n, t, a),
                    k.VW.focus(n)),
                    a && l();
            },
            [n],
        ),
        d = a.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(v.N, {
                    theme: s,
                    children: (e) =>
                        (0, t.jsx)("div", {
                            className: e,
                            children: (0, t.jsx)(w.A, {
                                persistSearch: !0,
                                closePopout: n,
                                onSelectEmoji: (e) => {
                                    let { emoji: l, willClose: t } = e;
                                    return o({ emoji: l, willClose: t }, n);
                                },
                                pickerIntention: l,
                            }),
                        }),
                });
            },
            [o, l, s],
        );
    return (0, t.jsx)("div", {
        className: i()(V.S0, r),
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(f.Y, {
            targetElementRef: u,
            renderPopout: d,
            position: "top",
            animation: f.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, t.jsx)(P.A, { ...e, ref: u, active: l, tabIndex: 0, className: V.Z8 });
            },
        }),
    });
}
function H(e) {
    let { editor: n, pickerIntention: l } = e,
        [, r] = a.useState(n.selection);
    return (
        a.useEffect(() => {
            function e() {
                return r(n.selection);
            }
            return (
                n.events.addListener("onChange", e),
                () => {
                    n.events.removeListener("onChange", e);
                }
            );
        }, [n]),
        (0, t.jsxs)("div", {
            className: V.aL,
            onMouseDown: (e) => e.preventDefault(),
            children: [(0, t.jsx)(x.P, { slateEditor: n }), (0, t.jsx)(B, { editor: n, pickerIntention: l })],
        })
    );
}
function _(e) {
    let {
            editor: n,
            toolbarVariant: l,
            placeholder: r,
            readOnly: s,
            autoFocus: c,
            required: g,
            rows: v,
            pickerIntention: f,
            onChangeValue: h,
            onKeyDown: p,
            onFocus: m,
            onBlur: b,
            ariaLabelledByProp: A,
        } = e,
        C = a.useContext(o._),
        k = C?.errorMessageId != null,
        E = a.useRef(null),
        P = a.useRef(null),
        w = a.useCallback(() => n, [n]),
        S = a.useCallback((e) => [...(0, j.A)(n, e, void 0), ...(0, N.A)(n, e)], [n]);
    return (
        a.useEffect(() => {
            if ("floating" !== l) return;
            let e = P.current;
            if (null != e)
                return (
                    e.ownerDocument.addEventListener("scroll", n, { capture: !0 }),
                    () => e.ownerDocument.removeEventListener("scroll", n, { capture: !0 })
                );
            function n(n) {
                n.target.contains(e) && E.current?.hide();
            }
        }, [l]),
        (0, t.jsxs)(t.Fragment, {
            children: [
                "floating" === l && (0, t.jsx)(x.A, { ref: E, getSlateEditor: w, containerRef: P }),
                (0, t.jsx)(d.vN, {
                    children: (0, t.jsxs)("div", {
                        className: i()(V.I6, { [V.mq]: "static" === l }),
                        "data-error": k || void 0,
                        "data-disabled": s || void 0,
                        children: [
                            "static" === l && !s && (0, t.jsx)(H, { editor: n, pickerIntention: f }),
                            (0, t.jsx)("div", {
                                ref: P,
                                className: i()(V.XG, O.yL),
                                style: { "--custom-rich-text-area-rows": v },
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), y.b.resetSelectionToEditorEnd(n), u.rL.focus(n));
                                },
                                onScroll: () => E.current?.hide(),
                                children: (0, t.jsx)(I.A, {
                                    id: C?.controlId,
                                    containerClassName: V.RZ,
                                    className: V.EN,
                                    editor: n,
                                    placeholder: r,
                                    readOnly: s,
                                    canFocus: !s,
                                    autoFocus: c,
                                    decorate: S,
                                    onChange: h,
                                    onKeyDown: p,
                                    onFocus: m,
                                    onBlur: b,
                                    "aria-labelledby": A ?? C?.labelId,
                                    "aria-describedby": C?.describedById,
                                    "aria-errormessage": C?.errorMessageId,
                                    "aria-invalid": k || void 0,
                                    "aria-required": g || void 0,
                                }),
                            }),
                            "floating" === l &&
                                !s &&
                                (0, t.jsx)(B, { editor: n, pickerIntention: f, containerClassName: V.C7 }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function F(e) {
    let {
            value: n,
            placeholder: l,
            minLength: r,
            maxLength: i,
            rows: o = 3,
            autosize: d = !0,
            autoFocus: g = !1,
            error: v,
            emojiPickerIntention: f = G.EmojiIntention.CHAT,
            toolbarVariant: A = "floating",
            editorRef: I,
            onChange: x,
            onKeyDown: k,
            onFocus: N,
            onBlur: j,
            "aria-labelledby": P,
            ...w
        } = e,
        R = (function (e) {
            let n = a.useContext(S.Ay),
                l = D.SI.useSetting(),
                [t] = a.useState(() => {
                    let t = (0, s.ie)();
                    return (
                        (t.children = (0, b.x7)(e)),
                        (t.selection = { anchor: T.K, focus: T.K }),
                        (0, E.a)({
                            editor: t,
                            chatInputType: m.oU.GENERIC_RICH_TEXTAREA,
                            channel: z,
                            windowContext: n,
                            previewMarkdown: l,
                            updateState: (e, n, l) => {
                                let { value: t, selection: a } = l;
                                void 0 !== t && (e.children = t), null != a && (e.selection = a), e.onChange();
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
        [M, L] = a.useState(n),
        [V, O] = a.useState(() => R.children.length);
    a.useImperativeHandle(
        I,
        () => ({
            focus(e) {
                y.b.resetSelectionToEditorEnd(R), u.rL.toDOMNode(R, R).focus(e);
            },
            blur() {
                u.rL.toDOMNode(R, R).blur();
            },
        }),
        [R],
    );
    let { fieldProps: B } = (0, c.n)(w),
        { disabled: H, required: F } = B,
        {
            setShouldValidate: K,
            errorMessage: q,
            hasError: X,
        } = (0, h.Y)({ validateOn: "change", error: v, value: M, minLength: r, maxLength: i }),
        W = a.useRef(M);
    W.current = M;
    let Y = a.useCallback(
        (e) => {
            let n = (0, C.WO)(e, { mode: "raw" });
            n !== W.current && (L(n), K(!0), x?.(n)), d && O(e.length);
        },
        [d, x, K],
    );
    a.useEffect(() => {
        n !== W.current &&
            ((R.children = (0, b.x7)(n)),
            (R.selection = { anchor: T.K, focus: T.K }),
            R.onChange(),
            L(n),
            d && O(R.children.length));
    }, [d, n, R]);
    let U = d ? Math.max(o, Math.min(V, 15)) : o,
        $ = null != i ? (0, t.jsx)(p.n, { value: M, maxLength: i }) : null;
    return (0, t.jsx)(c.D, {
        ...B,
        trailingAuxiliaryContent: $,
        errorMessage: X ? q : void 0,
        children: (0, t.jsx)(_, {
            editor: R,
            toolbarVariant: A,
            placeholder: l,
            readOnly: H,
            autoFocus: g,
            required: F,
            rows: U,
            pickerIntention: f,
            onChangeValue: Y,
            onKeyDown: k,
            onFocus: N,
            onBlur: j,
            ariaLabelledByProp: P,
        }),
    });
}
