l.d(n, { f: () => q });
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(154283),
    u = l(670482),
    o = l(15626),
    d = l(187322),
    c = l(452027),
    g = l(17928),
    v = l(823607),
    h = l(511274),
    f = l(43990),
    m = l(922016),
    p = l(355622),
    b = l(408018),
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
    S = l(267889),
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
        className: i()(T.S0, r),
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(m.Y, {
            targetElementRef: u,
            renderPopout: d,
            position: "top",
            animation: m.Y.Animation.NONE,
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
            placeholder: r,
            readOnly: s,
            autoFocus: c,
            required: g,
            rows: v,
            pickerIntention: h,
            onChangeValue: f,
            onKeyDown: m,
            onFocus: p,
            onBlur: b,
            ariaLabelledByProp: I,
        } = e,
        A = a.useContext(o._),
        y = A?.errorMessageId != null,
        E = a.useRef(null),
        w = a.useRef(null),
        S = a.useCallback(() => n, [n]),
        P = a.useCallback((e) => [...(0, N.A)(n, e, void 0), ...(0, j.A)(n, e)], [n]);
    return (
        a.useEffect(() => {
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
                                    placeholder: r,
                                    readOnly: s,
                                    canFocus: !s,
                                    autoFocus: c,
                                    decorate: P,
                                    onChange: f,
                                    onKeyDown: m,
                                    onFocus: p,
                                    onBlur: b,
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
            minLength: r,
            maxLength: i,
            rows: o = 3,
            autosize: d = !0,
            autoFocus: g = !1,
            error: f,
            emojiPickerIntention: m = O.EmojiIntention.CHAT,
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
            let n = a.useContext(P.Ay),
                l = M.SI.useSetting(),
                [t] = a.useState(() => {
                    let t = (0, s.ie)();
                    return (
                        (t.children = (0, b.x7)(e)),
                        (t.selection = { anchor: L.K, focus: L.K }),
                        (0, E.a)({
                            editor: t,
                            chatInputType: p.oU.GENERIC_RICH_TEXTAREA,
                            channel: B,
                            canUseCommands: !1,
                            canOnlyUseTextCommands: !1,
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
        [D, V] = a.useState(n),
        [T, z] = a.useState(() => R.children.length);
    a.useImperativeHandle(
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
            hasError: U,
        } = (0, h.Y)({ validateOn: "change", error: f, value: D, minLength: r, maxLength: i }),
        X = a.useRef(D);
    X.current = D;
    let W = a.useCallback(
        (e) => {
            let n = (0, A.WO)(e, { mode: "raw" });
            n !== X.current && (V(n), F(!0), C?.(n)), d && z(e.length);
        },
        [d, C, F],
    );
    a.useEffect(() => {
        n !== X.current &&
            ((R.children = (0, b.x7)(n)),
            (R.selection = { anchor: L.K, focus: L.K }),
            R.onChange(),
            V(n),
            d && z(R.children.length));
    }, [d, n, R]);
    let Y = d ? Math.max(o, Math.min(T, 15)) : o,
        Z = null != i ? (0, t.jsx)(v.n, { value: D, maxLength: i }) : null;
    return (0, t.jsx)(c.D, {
        ...G,
        trailingAuxiliaryContent: Z,
        errorMessage: U ? H : void 0,
        children: (0, t.jsx)(K, {
            editor: R,
            toolbarVariant: I,
            placeholder: l,
            readOnly: _,
            autoFocus: g,
            required: q,
            rows: Y,
            pickerIntention: m,
            onChangeValue: W,
            onKeyDown: y,
            onFocus: j,
            onBlur: N,
            ariaLabelledByProp: w,
        }),
    });
}
