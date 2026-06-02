l.d(n, { f: () => F });
var a = l(627968),
    t = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(154283),
    o = l(670482),
    d = l(15626),
    u = l(187322),
    c = l(452027),
    v = l(17928),
    g = l(823607),
    h = l(511274),
    f = l(43990),
    m = l(922016),
    p = l(355622),
    b = l(408018),
    x = l(186306),
    C = l(655098),
    I = l(323350),
    y = l(135261),
    k = l(35277),
    A = l(820066),
    j = l(702483),
    N = l(490682),
    w = l(739181),
    E = l(375499),
    S = l(267889),
    D = l(267102),
    R = l(363195),
    L = l(885386),
    M = l(95701),
    P = l(652215),
    O = l(551483),
    V = l(307731),
    T = l(898525),
    B = l(457845);
let _ = (0, M.createChannelRecord)({ id: "1", type: P.rbe.DM });
function z(e) {
    let { editor: n, pickerIntention: l, containerClassName: r } = e,
        s = (0, v.bG)([R.A], () => R.A.theme),
        o = t.useRef(null),
        d = t.useCallback(
            (e, l) => {
                let { emoji: a, willClose: t } = e;
                null != a &&
                    (!(function (e, n) {
                        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = n.animated ? "a" : "",
                            t = n.originalName ?? n.name ?? "",
                            r = `:${n.name}:`,
                            i = null != n.id ? `<${a}:${t.replace(/:/g, "")}:${n.id}>` : null,
                            s = A.VW.areStylesDisabled(e) || null == i ? r : i;
                        x.o.withSingleEntry(e, () => {
                            k.b.insertText(e, s + (l ? " " : ""));
                        });
                    })(n, a, t),
                    A.VW.focus(n)),
                    t && l();
            },
            [n],
        ),
        u = t.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, a.jsx)(f.N, {
                    theme: s,
                    children: (e) =>
                        (0, a.jsx)("div", {
                            className: e,
                            children: (0, a.jsx)(S.A, {
                                persistSearch: !0,
                                closePopout: n,
                                onSelectEmoji: (e) => {
                                    let { emoji: l, willClose: a } = e;
                                    return d({ emoji: l, willClose: a }, n);
                                },
                                pickerIntention: l,
                            }),
                        }),
                });
            },
            [d, l, s],
        );
    return (0, a.jsx)("div", {
        className: i()(T.S0, r),
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsx)(m.Y, {
            targetElementRef: o,
            renderPopout: u,
            position: "top",
            animation: m.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, a.jsx)(E.A, { ...e, ref: o, active: l, tabIndex: 0, className: T.Z8 });
            },
        }),
    });
}
function H(e) {
    let { editor: n, pickerIntention: l } = e,
        [, r] = t.useState(n.selection);
    return (
        t.useEffect(() => {
            let e = () => r(n.selection);
            return (
                n.events.addListener("onChange", e),
                () => {
                    n.events.removeListener("onChange", e);
                }
            );
        }, [n]),
        (0, a.jsxs)("div", {
            className: T.aL,
            onMouseDown: (e) => e.preventDefault(),
            children: [(0, a.jsx)(y.P, { slateEditor: n }), (0, a.jsx)(z, { editor: n, pickerIntention: l })],
        })
    );
}
function G(e) {
    let {
            editor: n,
            toolbarVariant: l,
            placeholder: r,
            readOnly: s,
            autoFocus: c,
            required: v,
            rows: g,
            pickerIntention: h,
            onChangeValue: f,
            onKeyDown: m,
            onFocus: p,
            onBlur: b,
            ariaLabelledByProp: x,
        } = e,
        I = t.useContext(d._),
        A = I?.errorMessageId != null,
        w = t.useRef(null),
        E = t.useRef(null),
        S = t.useCallback(() => n, [n]),
        D = t.useCallback((e) => [...(0, N.A)(n, e, void 0), ...(0, j.A)(n, e)], [n]);
    return (
        t.useEffect(() => {
            if ("floating" !== l) return;
            let e = E.current;
            if (null == e) return;
            let n = (n) => {
                n.target.contains(e) && w.current?.hide();
            };
            return (
                e.ownerDocument.addEventListener("scroll", n, { capture: !0 }),
                () => e.ownerDocument.removeEventListener("scroll", n, { capture: !0 })
            );
        }, [l]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                "floating" === l && (0, a.jsx)(y.A, { ref: w, getSlateEditor: S, containerRef: E }),
                (0, a.jsx)(u.vN, {
                    children: (0, a.jsxs)("div", {
                        className: i()(T.I6, { [T.mq]: "static" === l }),
                        "data-error": A || void 0,
                        "data-disabled": s || void 0,
                        children: [
                            "static" === l && !s && (0, a.jsx)(H, { editor: n, pickerIntention: h }),
                            (0, a.jsx)("div", {
                                ref: E,
                                className: i()(T.XG, B.yL),
                                style: { "--custom-rich-text-area-rows": g },
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), k.b.resetSelectionToEditorEnd(n), o.rL.focus(n));
                                },
                                onScroll: () => w.current?.hide(),
                                children: (0, a.jsx)(C.A, {
                                    id: I?.controlId,
                                    containerClassName: T.RZ,
                                    className: T.EN,
                                    editor: n,
                                    placeholder: r,
                                    readOnly: s,
                                    canFocus: !s,
                                    autoFocus: c,
                                    decorate: D,
                                    onChange: f,
                                    onKeyDown: m,
                                    onFocus: p,
                                    onBlur: b,
                                    "aria-labelledby": x ?? I?.labelId,
                                    "aria-describedby": I?.describedById,
                                    "aria-errormessage": I?.errorMessageId,
                                    "aria-invalid": A || void 0,
                                    "aria-required": v || void 0,
                                }),
                            }),
                            "floating" === l &&
                                !s &&
                                (0, a.jsx)(z, { editor: n, pickerIntention: h, containerClassName: T.C7 }),
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
            rows: d = 3,
            autosize: u = !0,
            autoFocus: v = !1,
            error: f,
            emojiPickerIntention: m = V.EmojiIntention.CHAT,
            toolbarVariant: x = "floating",
            editorRef: C,
            onChange: y,
            onKeyDown: A,
            onFocus: j,
            onBlur: N,
            "aria-labelledby": E,
            ...S
        } = e,
        R = (function (e) {
            let n = t.useContext(D.Ay),
                l = L.SI.useSetting(),
                [a] = t.useState(() => {
                    let a = (0, s.ie)();
                    return (
                        (a.children = (0, b.x7)(e)),
                        (a.selection = { anchor: O.K, focus: O.K }),
                        (0, w.a)({
                            editor: a,
                            chatInputType: p.oU.GENERIC_RICH_TEXTAREA,
                            channel: _,
                            canUseCommands: !1,
                            canOnlyUseTextCommands: !1,
                            windowContext: n,
                            previewMarkdown: l,
                            updateState: (e, n, l) => {
                                let { value: a, selection: t } = l;
                                void 0 !== a && (e.children = a), null != t && (e.selection = t), e.onChange();
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
        [M, P] = t.useState(n),
        [T, B] = t.useState(() => R.children.length);
    t.useImperativeHandle(
        C,
        () => ({
            focus(e) {
                k.b.resetSelectionToEditorEnd(R), o.rL.toDOMNode(R, R).focus(e);
            },
            blur() {
                o.rL.toDOMNode(R, R).blur();
            },
        }),
        [R],
    );
    let { fieldProps: z } = (0, c.n)(S),
        { disabled: H, required: F } = z,
        {
            setShouldValidate: K,
            errorMessage: q,
            hasError: U,
        } = (0, h.Y)({ validateOn: "change", error: f, value: M, minLength: r, maxLength: i }),
        Y = t.useRef(M);
    Y.current = M;
    let W = t.useCallback(
        (e) => {
            let n = (0, I.WO)(e, { mode: "raw" });
            n !== Y.current && (P(n), K(!0), y?.(n)), u && B(e.length);
        },
        [u, y, K],
    );
    t.useEffect(() => {
        n !== Y.current &&
            ((R.children = (0, b.x7)(n)),
            (R.selection = { anchor: O.K, focus: O.K }),
            R.onChange(),
            P(n),
            u && B(R.children.length));
    }, [u, n, R]);
    let X = u ? Math.max(d, Math.min(T, 15)) : d,
        Z = null != i ? (0, a.jsx)(g.n, { value: M, maxLength: i }) : null;
    return (0, a.jsx)(c.D, {
        ...z,
        trailingAuxiliaryContent: Z,
        errorMessage: U ? q : void 0,
        children: (0, a.jsx)(G, {
            editor: R,
            toolbarVariant: x,
            placeholder: l,
            readOnly: H,
            autoFocus: v,
            required: F,
            rows: X,
            pickerIntention: m,
            onChangeValue: W,
            onKeyDown: A,
            onFocus: j,
            onBlur: N,
            ariaLabelledByProp: E,
        }),
    });
}
