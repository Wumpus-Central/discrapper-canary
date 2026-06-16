l.d(n, { f: () => H });
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(154283),
    o = l(670482),
    u = l(15626),
    d = l(187322),
    c = l(452027),
    g = l(17928),
    v = l(823607),
    h = l(511274),
    f = l(43990),
    p = l(922016),
    m = l(355622),
    b = l(408018),
    x = l(186306),
    I = l(655098),
    C = l(323350),
    A = l(135261),
    k = l(35277),
    y = l(820066),
    j = l(702483),
    N = l(490682),
    E = l(739181),
    w = l(375499),
    S = l(267889),
    R = l(267102),
    P = l(363195),
    D = l(885386),
    V = l(95701),
    M = l(652215),
    L = l(551483),
    T = l(307731),
    O = l(898525),
    _ = l(457845);
let z = (0, V.createChannelRecord)({ id: "1", type: M.rbe.DM });
function B(e) {
    let { editor: n, pickerIntention: l, containerClassName: r } = e,
        s = (0, g.bG)([P.A], () => P.A.theme),
        o = a.useRef(null),
        u = a.useCallback(
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
                        x.o.withSingleEntry(e, () => {
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
                                    return u({ emoji: l, willClose: t }, n);
                                },
                                pickerIntention: l,
                            }),
                        }),
                });
            },
            [u, l, s],
        );
    return (0, t.jsx)("div", {
        className: i()(O.S0, r),
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(p.Y, {
            targetElementRef: o,
            renderPopout: d,
            position: "top",
            animation: p.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, t.jsx)(w.A, { ...e, ref: o, active: l, tabIndex: 0, className: O.Z8 });
            },
        }),
    });
}
function G(e) {
    let { editor: n, pickerIntention: l } = e,
        [, r] = a.useState(n.selection);
    return (
        a.useEffect(() => {
            let e = () => r(n.selection);
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
            children: [(0, t.jsx)(A.P, { slateEditor: n }), (0, t.jsx)(B, { editor: n, pickerIntention: l })],
        })
    );
}
function q(e) {
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
            ariaLabelledByProp: x,
        } = e,
        C = a.useContext(u._),
        y = C?.errorMessageId != null,
        E = a.useRef(null),
        w = a.useRef(null),
        S = a.useCallback(() => n, [n]),
        R = a.useCallback((e) => [...(0, N.A)(n, e, void 0), ...(0, j.A)(n, e)], [n]);
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
                "floating" === l && (0, t.jsx)(A.A, { ref: E, getSlateEditor: S, containerRef: w }),
                (0, t.jsx)(d.vN, {
                    children: (0, t.jsxs)("div", {
                        className: i()(O.I6, { [O.mq]: "static" === l }),
                        "data-error": y || void 0,
                        "data-disabled": s || void 0,
                        children: [
                            "static" === l && !s && (0, t.jsx)(G, { editor: n, pickerIntention: h }),
                            (0, t.jsx)("div", {
                                ref: w,
                                className: i()(O.XG, _.yL),
                                style: { "--custom-rich-text-area-rows": v },
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), k.b.resetSelectionToEditorEnd(n), o.rL.focus(n));
                                },
                                onScroll: () => E.current?.hide(),
                                children: (0, t.jsx)(I.A, {
                                    id: C?.controlId,
                                    containerClassName: O.RZ,
                                    className: O.EN,
                                    editor: n,
                                    placeholder: r,
                                    readOnly: s,
                                    canFocus: !s,
                                    autoFocus: c,
                                    decorate: R,
                                    onChange: f,
                                    onKeyDown: p,
                                    onFocus: m,
                                    onBlur: b,
                                    "aria-labelledby": x ?? C?.labelId,
                                    "aria-describedby": C?.describedById,
                                    "aria-errormessage": C?.errorMessageId,
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
function H(e) {
    let {
            value: n,
            placeholder: l,
            minLength: r,
            maxLength: i,
            rows: u = 3,
            autosize: d = !0,
            autoFocus: g = !1,
            error: f,
            emojiPickerIntention: p = T.EmojiIntention.CHAT,
            toolbarVariant: x = "floating",
            editorRef: I,
            onChange: A,
            onKeyDown: y,
            onFocus: j,
            onBlur: N,
            "aria-labelledby": w,
            ...S
        } = e,
        P = (function (e) {
            let n = a.useContext(R.Ay),
                l = D.SI.useSetting(),
                [t] = a.useState(() => {
                    let t = (0, s.ie)();
                    return (
                        (t.children = (0, b.x7)(e)),
                        (t.selection = { anchor: L.K, focus: L.K }),
                        (0, E.a)({
                            editor: t,
                            chatInputType: m.oU.GENERIC_RICH_TEXTAREA,
                            channel: z,
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
        [V, M] = a.useState(n),
        [O, _] = a.useState(() => P.children.length);
    a.useImperativeHandle(
        I,
        () => ({
            focus(e) {
                k.b.resetSelectionToEditorEnd(P), o.rL.toDOMNode(P, P).focus(e);
            },
            blur() {
                o.rL.toDOMNode(P, P).blur();
            },
        }),
        [P],
    );
    let { fieldProps: B } = (0, c.n)(S),
        { disabled: G, required: H } = B,
        {
            setShouldValidate: K,
            errorMessage: F,
            hasError: X,
        } = (0, h.Y)({ validateOn: "change", error: f, value: V, minLength: r, maxLength: i }),
        U = a.useRef(V);
    U.current = V;
    let W = a.useCallback(
        (e) => {
            let n = (0, C.WO)(e, { mode: "raw" });
            n !== U.current && (M(n), K(!0), A?.(n)), d && _(e.length);
        },
        [d, A, K],
    );
    a.useEffect(() => {
        n !== U.current &&
            ((P.children = (0, b.x7)(n)),
            (P.selection = { anchor: L.K, focus: L.K }),
            P.onChange(),
            M(n),
            d && _(P.children.length));
    }, [d, n, P]);
    let Y = d ? Math.max(u, Math.min(O, 15)) : u,
        Z = null != i ? (0, t.jsx)(v.n, { value: V, maxLength: i }) : null;
    return (0, t.jsx)(c.D, {
        ...B,
        trailingAuxiliaryContent: Z,
        errorMessage: X ? F : void 0,
        children: (0, t.jsx)(q, {
            editor: P,
            toolbarVariant: x,
            placeholder: l,
            readOnly: G,
            autoFocus: g,
            required: H,
            rows: Y,
            pickerIntention: p,
            onChangeValue: W,
            onKeyDown: y,
            onFocus: j,
            onBlur: N,
            ariaLabelledByProp: w,
        }),
    });
}
