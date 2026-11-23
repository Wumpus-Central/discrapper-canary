var t = r(477900),
    a = r(582128),
    l = r(503698),
    o = r.n(l),
    i = r(719442),
    s = r(235599),
    c = r(855986),
    u = r(43990),
    d = r(265872),
    h = r(15626),
    f = r(559106),
    p = r(452027),
    v = r(281595),
    b = r(355622),
    m = r(408018),
    g = r(186306),
    x = r(787564),
    E = r(323350),
    C = r(135261),
    j = r(35277),
    y = r(339200),
    w = r(702483),
    I = r(490682),
    N = r(68059),
    k = r(375499),
    S = r(863576),
    D = r(267102),
    A = r(413599),
    M = r(253932),
    R = r(95701),
    L = r(652215),
    T = r(551483),
    O = r(307731),
    F = r(569622),
    K = r(465410),
    _ = r(736541);
let B = (0, R.createChannelRecord)({ id: "1", type: L.rbe.DM });
function $(e) {
    let { editor: n, pickerIntention: r } = e,
        l = (0, c.bG)([A.A], () => A.A.theme),
        o = a.useRef(null),
        i = a.useCallback(
            (e, r) => {
                let { emoji: t, willClose: a } = e;
                (null != t &&
                    (!(function (e, n) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            t = n.animated ? "a" : "",
                            a = n.originalName ?? n.name ?? "",
                            l = `:${n.name}:`,
                            o = null != n.id ? `<${t}:${a.replace(/:/g, "")}:${n.id}>` : null,
                            i = y.VW.areStylesDisabled(e) || null == o ? l : o;
                        g.o.withSingleEntry(e, () => {
                            j.b.insertText(e, i + (r ? " " : ""));
                        });
                    })(n, t, a),
                    y.VW.focus(n)),
                    a && r());
            },
            [n],
        ),
        s = a.useCallback(
            (e) => {
                let { closePopout: n } = e;
                return (0, t.jsx)(u.N, {
                    theme: l,
                    children: (e) =>
                        (0, t.jsx)("div", {
                            className: e,
                            children: (0, t.jsx)(S.default, {
                                persistSearch: !0,
                                closePopout: n,
                                onSelectEmoji: (e) => {
                                    let { emoji: r, willClose: t } = e;
                                    return i({ emoji: r, willClose: t }, n);
                                },
                                pickerIntention: r,
                            }),
                        }),
                });
            },
            [i, r, l],
        );
    return (0, t.jsx)("div", {
        className: F.S0,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, t.jsx)(d.Y, {
            targetElementRef: o,
            renderPopout: s,
            position: "top",
            animation: d.Y.Animation.NONE,
            align: "right",
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, t.jsx)(k.A, { ...e, ref: o, active: r, tabIndex: 0, className: F.Z8 });
            },
        }),
    });
}
function G(e) {
    let {
            editor: n,
            placeholder: r,
            readOnly: l,
            autoFocus: i,
            required: c,
            pickerIntention: u,
            onChangeValue: d,
            onKeyDown: p,
            onFocus: v,
            onBlur: b,
            ariaLabelledByProp: m,
        } = e,
        g = a.useContext(h._),
        E = g?.errorMessageId != null,
        y = a.useRef(null),
        N = a.useRef(null),
        k = a.useCallback(() => n, [n]),
        S = a.useCallback((e) => [...(0, I.A)(n, e, void 0), ...(0, w.A)(n, e)], [n]);
    return (
        a.useEffect(() => {
            let e = N.current;
            if (null != e)
                return (
                    e.ownerDocument.addEventListener("scroll", n, { capture: !0 }),
                    () => e.ownerDocument.removeEventListener("scroll", n, { capture: !0 })
                );
            function n(n) {
                n.target.contains(e) && y.current?.hide();
            }
        }, []),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(C.A, { ref: y, getSlateEditor: k, containerRef: N }),
                (0, t.jsx)(f.vN, {
                    children: (0, t.jsxs)("div", {
                        className: o()(F.I6, _["body-sm/normal"]),
                        "data-error": E || void 0,
                        "data-disabled": l || void 0,
                        children: [
                            (0, t.jsx)("div", {
                                ref: N,
                                className: o()(F.XG, K.yL),
                                onMouseDown: (e) => {
                                    e.target === e.currentTarget &&
                                        (e.preventDefault(), j.b.resetSelectionToEditorEnd(n), s.rL.focus(n));
                                },
                                onScroll: () => y.current?.hide(),
                                children: (0, t.jsx)(x.A, {
                                    id: g?.controlId,
                                    containerClassName: F.RZ,
                                    className: F.EN,
                                    editor: n,
                                    placeholder: r,
                                    readOnly: l,
                                    canFocus: !l,
                                    autoFocus: i,
                                    decorate: S,
                                    onChange: d,
                                    onKeyDown: p,
                                    onFocus: v,
                                    onBlur: b,
                                    "aria-labelledby": m ?? g?.labelId,
                                    "aria-describedby": g?.describedById,
                                    "aria-errormessage": g?.errorMessageId,
                                    "aria-invalid": E || void 0,
                                    "aria-required": c || void 0,
                                }),
                            }),
                            !l && (0, t.jsx)($, { editor: n, pickerIntention: u }),
                        ],
                    }),
                }),
            ],
        })
    );
}
r.d(
    n,
    {},
    {
        f: function (e) {
            let {
                    value: n,
                    placeholder: r,
                    minLength: l,
                    maxLength: o,
                    autoFocus: c = !1,
                    error: u,
                    emojiPickerIntention: d = O.EmojiIntention.CHAT,
                    editorRef: h,
                    onChange: f,
                    onKeyDown: g,
                    onFocus: x,
                    onBlur: C,
                    "aria-labelledby": y,
                    ...w
                } = e,
                I = (function (e) {
                    let n = a.useContext(D.Ay),
                        r = M.SI.useSetting(),
                        [t] = a.useState(() => {
                            let t = (0, i.ie)();
                            return (
                                (t.children = (0, m.x7)(e)),
                                (t.selection = { anchor: T.K, focus: T.K }),
                                (0, N.a)({
                                    editor: t,
                                    chatInputType: b.oU.GENERIC_RICH_TEXTAREA,
                                    channel: B,
                                    windowContext: n,
                                    previewMarkdown: r,
                                    updateState: (e, n, r) => {
                                        let { value: t, selection: a } = r;
                                        (void 0 !== t && (e.children = t),
                                            null != a && (e.selection = a),
                                            e.onChange());
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
                            t.previewMarkdown !== r && ((t.previewMarkdown = r), t.onChange());
                        }, [t, r]),
                        t
                    );
                })(n),
                [k, S] = a.useState(n);
            a.useImperativeHandle(
                h,
                () => ({
                    focus(e) {
                        (j.b.resetSelectionToEditorEnd(I), s.rL.toDOMNode(I, I).focus(e));
                    },
                    blur() {
                        s.rL.toDOMNode(I, I).blur();
                    },
                }),
                [I],
            );
            let { fieldProps: A } = (0, p.n)(w),
                { disabled: R, required: L } = A,
                {
                    setShouldValidate: F,
                    errorMessage: K,
                    hasError: _,
                } = (0, v.Y)({ validateOn: "change", error: u, value: k, minLength: l, maxLength: o }),
                $ = a.useRef(k);
            $.current = k;
            let H = a.useCallback(
                (e) => {
                    let n = (0, E.WO)(e, { mode: "raw" });
                    n !== $.current && (S(n), F(!0), f?.(n));
                },
                [f, F],
            );
            return (
                a.useEffect(() => {
                    n !== $.current &&
                        ((I.children = (0, m.x7)(n)), (I.selection = { anchor: T.K, focus: T.K }), I.onChange(), S(n));
                }, [n, I]),
                (0, t.jsx)(p.D, {
                    ...A,
                    errorMessage: _ ? K : void 0,
                    children: (0, t.jsx)(G, {
                        editor: I,
                        placeholder: r,
                        readOnly: R,
                        autoFocus: c,
                        required: L,
                        pickerIntention: d,
                        onChangeValue: H,
                        onKeyDown: g,
                        onFocus: x,
                        onBlur: C,
                        ariaLabelledByProp: y,
                    }),
                })
            );
        },
    },
);
