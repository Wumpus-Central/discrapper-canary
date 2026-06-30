l.d(n, { f: () => q });
var t = l(627968),
    r = l(64700),
    a = l(503698),
    i = l.n(a),
    s = l(154283),
    u = l(670482),
    o = l(15626),
    d = l(187322),
    c = l(452027),
    g = l(17928),
    v = l(823607),
    h = l(511274),
    f = l(43990),
    p = l(922016),
    b = l(355622),
    m = l(408018),
    I = l(186306),
    x = l(655098),
    A = l(323350),
    C = l(135261),
    k = l(35277),
    y = l(820066),
    j = l(702483),
    N = l(490682),
    E = l(739181),
    w = l(375499),
    S = l(334295),
    P = l(267102),
    R = l(363195),
    M = l(885386),
    D = l(95701),
    V = l(652215),
    L = l(551483),
    O = l(307731),
    T = l(898525),
    z = l(457845);
let B = (0, D.createChannelRecord)({ id: "1", type: V.rbe.DM });
function G(e) {
    let { editor: n, pickerIntention: l, containerClassName: a } = e,
        s = (0, g.bG)([R.A], () => R.A.theme),
        u = r.useRef(null),
        o = r.useCallback(
            (e, l) => {
                let { emoji: t, willClose: r } = e;
                null != t &&
                    (!(function (e, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            t = n.animated ? "a" : "",
                            r = n.originalName ?? n.name ?? "",
                            a = `:${n.name}:`,
                            i = null != n.id ? `<${t}:${r.replace(/:/g, "")}:${n.id}>` : null,
                            s = y.VW.areStylesDisabled(e) || null == i ? a : i;
                        I.o.withSingleEntry(e, () => {
                            k.b.insertText(e, s + (l ? " " : ""));
                        });
                    })(n, t, r),
                    y.VW.focus(n)),
                    r && l();
            },
            [n],
        ),
        d = r.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(f.N, {
                    theme: s,
                    children: (e) =>
                        (0, t.jsx)("div", {
                            className: e,
                            children: (0, t.jsx)(S.A, {
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
        className: i()(T.S0, a),
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(p.Y, {
            targetElementRef: u,
            renderPopout: d,
            position: "top",
            animation: p.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, t.jsx)(w.A, { ...e, ref: u, active: l, tabIndex: 0, className: T.Z8 });
            },
        }),
    });
}
function _(e) {
    let { editor: n, pickerIntention: l } = e,
        [, a] = r.useState(n.selection);
    return (
        r.useEffect(() => {
            function e() {
                return a(n.selection);
            }
            return (
                n.events.addListener("onChange", e),
                () => {
                    n.events.removeListener("onChange", e);
                }
            );
        }, [n]),
        (0, t.jsxs)("div", {
            className: T.aL,
            onMouseDown: (e) => e.preventDefault(),
            children: [(0, t.jsx)(C.P, { slateEditor: n }), (0, t.jsx)(G, { editor: n, pickerIntention: l })],
        })
    );
}
function K(e) {
    let {
            editor: n,
            toolbarVariant: l,
            placeholder: a,
            readOnly: s,
            autoFocus: c,
            required: g,
            rows: v,
            pickerIntention: h,
            onChangeValue: f,
            onKeyDown: p,
            onFocus: b,
            onBlur: m,
            ariaLabelledByProp: I,
        } = e,
        A = r.useContext(o._),
        y = A?.errorMessageId != null,
        E = r.useRef(null),
        w = r.useRef(null),
        S = r.useCallback(() => n, [n]),
        P = r.useCallback((e) => [...(0, N.A)(n, e, void 0), ...(0, j.A)(n, e)], [n]);
    return (
        r.useEffect(() => {
            if ("floating" !== l) return;
            let e = w.current;
            if (null == e) return;
            let n = (n) => {
                n.target.contains(e) && E.current?.hide();
            };
            return (
                e.ownerDocument.addEventListener("scroll", n, { capture: !0 }),
                () => e.ownerDocument.removeEventListener("scroll", n, { capture: !0 })
            );
        }, [l]),
        (0, t.jsxs)(t.Fragment, {
            children: [
                "floating" === l && (0, t.jsx)(C.A, { ref: E, getSlateEditor: S, containerRef: w }),
                (0, t.jsx)(d.vN, {
                    children: (0, t.jsxs)("div", {
                        className: i()(T.I6, { [T.mq]: "static" === l }),
                        "data-error": y || void 0,
                        "data-disabled": s || void 0,
                        children: [
                            "static" === l && !s && (0, t.jsx)(_, { editor: n, pickerIntention: h }),
                            (0, t.jsx)("div", {
                                ref: w,
                                className: i()(T.XG, z.yL),
                                style: { "--custom-rich-text-area-rows": v },
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), k.b.resetSelectionToEditorEnd(n), u.rL.focus(n));
                                },
                                onScroll: () => E.current?.hide(),
                                children: (0, t.jsx)(x.A, {
                                    id: A?.controlId,
                                    containerClassName: T.RZ,
                                    className: T.EN,
                                    editor: n,
                                    placeholder: a,
                                    readOnly: s,
                                    canFocus: !s,
                                    autoFocus: c,
                                    decorate: P,
                                    onChange: f,
                                    onKeyDown: p,
                                    onFocus: b,
                                    onBlur: m,
                                    "aria-labelledby": I ?? A?.labelId,
                                    "aria-describedby": A?.describedById,
                                    "aria-errormessage": A?.errorMessageId,
                                    "aria-invalid": y || void 0,
                                    "aria-required": g || void 0,
                                }),
                            }),
                            "floating" === l &&
                                !s &&
                                (0, t.jsx)(G, { editor: n, pickerIntention: h, containerClassName: T.C7 }),
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
            minLength: a,
            maxLength: i,
            rows: o = 3,
            autosize: d = !0,
            autoFocus: g = !1,
            error: f,
            emojiPickerIntention: p = O.EmojiIntention.CHAT,
            toolbarVariant: I = "floating",
            editorRef: x,
            onChange: C,
            onKeyDown: y,
            onFocus: j,
            onBlur: N,
            "aria-labelledby": w,
            ...S
        } = e,
        R = (function (e) {
            let n = r.useContext(P.Ay),
                l = M.SI.useSetting(),
                [t] = r.useState(() => {
                    let t = (0, s.ie)();
                    return (
                        (t.children = (0, m.x7)(e)),
                        (t.selection = { anchor: L.K, focus: L.K }),
                        (0, E.a)({
                            editor: t,
                            chatInputType: b.oU.GENERIC_RICH_TEXTAREA,
                            channel: B,
                            windowContext: n,
                            previewMarkdown: l,
                            updateState: (e, n, l) => {
                                let { value: t, selection: r } = l;
                                void 0 !== t && (e.children = t), null != r && (e.selection = r), e.onChange();
                            },
                        }),
                        t
                    );
                });
            return (
                r.useLayoutEffect(() => {
                    t.onChange();
                }, [t]),
                r.useEffect(() => {
                    t.previewMarkdown !== l && ((t.previewMarkdown = l), t.onChange());
                }, [t, l]),
                t
            );
        })(n),
        [D, V] = r.useState(n),
        [T, z] = r.useState(() => R.children.length);
    r.useImperativeHandle(
        x,
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
    let { fieldProps: G } = (0, c.n)(S),
        { disabled: _, required: q } = G,
        {
            setShouldValidate: F,
            errorMessage: H,
            hasError: X,
        } = (0, h.Y)({ validateOn: "change", error: f, value: D, minLength: a, maxLength: i }),
        W = r.useRef(D);
    W.current = D;
    let Y = r.useCallback(
        (e) => {
            let n = (0, A.WO)(e, { mode: "raw" });
            n !== W.current && (V(n), F(!0), C?.(n)), d && z(e.length);
        },
        [d, C, F],
    );
    r.useEffect(() => {
        n !== W.current &&
            ((R.children = (0, m.x7)(n)),
            (R.selection = { anchor: L.K, focus: L.K }),
            R.onChange(),
            V(n),
            d && z(R.children.length));
    }, [d, n, R]);
    let U = d ? Math.max(o, Math.min(T, 15)) : o,
        Z = null != i ? (0, t.jsx)(v.n, { value: D, maxLength: i }) : null;
    return (0, t.jsx)(c.D, {
        ...G,
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
            onFocus: j,
            onBlur: N,
            ariaLabelledByProp: w,
        }),
    });
}
