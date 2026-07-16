l.d(n, { f: () => q });
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(719442),
    u = l(253018),
    o = l(15626),
    d = l(187322),
    c = l(452027),
    g = l(17928),
    v = l(823607),
    h = l(511274),
    f = l(43990),
    p = l(922016),
    m = l(355622),
    b = l(408018),
    I = l(186306),
    A = l(655098),
    x = l(323350),
    C = l(135261),
    k = l(35277),
    y = l(820066),
    N = l(702483),
    j = l(490682),
    E = l(739181),
    w = l(375499),
    P = l(334295),
    S = l(267102),
    R = l(363195),
    D = l(885386),
    M = l(95701),
    V = l(652215),
    G = l(551483),
    L = l(307731),
    O = l(898525),
    T = l(457845);
let z = (0, M.createChannelRecord)({ id: "1", type: V.rbe.DM });
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
                            s = y.VW.areStylesDisabled(e) || null == i ? r : i;
                        I.o.withSingleEntry(e, () => {
                            k.b.insertText(e, s + (l ? " " : ""));
                        });
                    })(n, t, a),
                    y.VW.focus(n)),
                    a && l();
            },
            [n],
        ),
        d = a.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(f.N, {
                    theme: s,
                    children: (e) =>
                        (0, t.jsx)("div", {
                            className: e,
                            children: (0, t.jsx)(P.A, {
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
        className: i()(O.S0, r),
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(p.Y, {
            targetElementRef: u,
            renderPopout: d,
            position: "top",
            animation: p.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, t.jsx)(w.A, { ...e, ref: u, active: l, tabIndex: 0, className: O.Z8 });
            },
        }),
    });
}
function _(e) {
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
            className: O.aL,
            onMouseDown: (e) => e.preventDefault(),
            children: [(0, t.jsx)(C.P, { slateEditor: n }), (0, t.jsx)(B, { editor: n, pickerIntention: l })],
        })
    );
}
function K(e) {
    let {
            editor: n,
            toolbarVariant: l,
            placeholder: r,
            readOnly: s,
            autoFocus: c,
            required: g,
            rows: v,
            pickerIntention: h,
            onChangeValue: f,
            onKeyDown: p,
            onFocus: m,
            onBlur: b,
            ariaLabelledByProp: I,
        } = e,
        x = a.useContext(o._),
        y = x?.errorMessageId != null,
        E = a.useRef(null),
        w = a.useRef(null),
        P = a.useCallback(() => n, [n]),
        S = a.useCallback((e) => [...(0, j.A)(n, e, void 0), ...(0, N.A)(n, e)], [n]);
    return (
        a.useEffect(() => {
            if ("floating" !== l) return;
            let e = w.current;
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
                "floating" === l && (0, t.jsx)(C.A, { ref: E, getSlateEditor: P, containerRef: w }),
                (0, t.jsx)(d.vN, {
                    children: (0, t.jsxs)("div", {
                        className: i()(O.I6, { [O.mq]: "static" === l }),
                        "data-error": y || void 0,
                        "data-disabled": s || void 0,
                        children: [
                            "static" === l && !s && (0, t.jsx)(_, { editor: n, pickerIntention: h }),
                            (0, t.jsx)("div", {
                                ref: w,
                                className: i()(O.XG, T.yL),
                                style: { "--custom-rich-text-area-rows": v },
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), k.b.resetSelectionToEditorEnd(n), u.rL.focus(n));
                                },
                                onScroll: () => E.current?.hide(),
                                children: (0, t.jsx)(A.A, {
                                    id: x?.controlId,
                                    containerClassName: O.RZ,
                                    className: O.EN,
                                    editor: n,
                                    placeholder: r,
                                    readOnly: s,
                                    canFocus: !s,
                                    autoFocus: c,
                                    decorate: S,
                                    onChange: f,
                                    onKeyDown: p,
                                    onFocus: m,
                                    onBlur: b,
                                    "aria-labelledby": I ?? x?.labelId,
                                    "aria-describedby": x?.describedById,
                                    "aria-errormessage": x?.errorMessageId,
                                    "aria-invalid": y || void 0,
                                    "aria-required": g || void 0,
                                }),
                            }),
                            "floating" === l &&
                                !s &&
                                (0, t.jsx)(B, { editor: n, pickerIntention: h, containerClassName: O.C7 }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function q(e) {
    let {
            value: n,
            placeholder: l,
            minLength: r,
            maxLength: i,
            rows: o = 3,
            autosize: d = !0,
            autoFocus: g = !1,
            error: f,
            emojiPickerIntention: p = L.EmojiIntention.CHAT,
            toolbarVariant: I = "floating",
            editorRef: A,
            onChange: C,
            onKeyDown: y,
            onFocus: N,
            onBlur: j,
            "aria-labelledby": w,
            ...P
        } = e,
        R = (function (e) {
            let n = a.useContext(S.Ay),
                l = D.SI.useSetting(),
                [t] = a.useState(() => {
                    let t = (0, s.ie)();
                    return (
                        (t.children = (0, b.x7)(e)),
                        (t.selection = { anchor: G.K, focus: G.K }),
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
        [M, V] = a.useState(n),
        [O, T] = a.useState(() => R.children.length);
    a.useImperativeHandle(
        A,
        () => ({
            focus(e) {
                k.b.resetSelectionToEditorEnd(R), u.rL.toDOMNode(R, R).focus(e);
            },
            blur() {
                u.rL.toDOMNode(R, R).blur();
            },
        }),
        [R],
    );
    let { fieldProps: B } = (0, c.n)(P),
        { disabled: _, required: q } = B,
        {
            setShouldValidate: F,
            errorMessage: H,
            hasError: X,
        } = (0, h.Y)({ validateOn: "change", error: f, value: M, minLength: r, maxLength: i }),
        W = a.useRef(M);
    W.current = M;
    let Y = a.useCallback(
        (e) => {
            let n = (0, x.WO)(e, { mode: "raw" });
            n !== W.current && (V(n), F(!0), C?.(n)), d && T(e.length);
        },
        [d, C, F],
    );
    a.useEffect(() => {
        n !== W.current &&
            ((R.children = (0, b.x7)(n)),
            (R.selection = { anchor: G.K, focus: G.K }),
            R.onChange(),
            V(n),
            d && T(R.children.length));
    }, [d, n, R]);
    let U = d ? Math.max(o, Math.min(O, 15)) : o,
        Z = null != i ? (0, t.jsx)(v.n, { value: M, maxLength: i }) : null;
    return (0, t.jsx)(c.D, {
        ...B,
        trailingAuxiliaryContent: Z,
        errorMessage: X ? H : void 0,
        children: (0, t.jsx)(K, {
            editor: R,
            toolbarVariant: I,
            placeholder: l,
            readOnly: _,
            autoFocus: g,
            required: q,
            rows: U,
            pickerIntention: p,
            onChangeValue: Y,
            onKeyDown: y,
            onFocus: N,
            onBlur: j,
            ariaLabelledByProp: w,
        }),
    });
}
