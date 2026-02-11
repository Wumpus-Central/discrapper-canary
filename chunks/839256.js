"use strict";
n.d(t, { V: () => y });
var r = n(974111),
    i = n(294819),
    a = n(376472),
    s = n(99478),
    o = n(408713),
    l = n(400606),
    u = n(150047),
    c = n(248215),
    d = n(3388),
    _ = n(723906),
    f = n(48284),
    h = n(803082),
    p = n(318192),
    g = n(64700),
    E = n(853590),
    A = n(849352),
    I = n(670184),
    T = n(73733);
function y(e, t, n) {
    let y = (0, g.useRef)(""),
        { locale: v, direction: C } = (0, E.Y)(),
        b = (0, i.k)(),
        { ariaLabel: N, ariaLabelledBy: R, ariaDescribedBy: O, focusManager: D } = r.OX.get(t),
        L = e.isPlaceholder ? "" : e.text,
        w = (0, g.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
        x = (0, A.i)({ month: "long", timeZone: w.timeZone }),
        P = (0, A.i)({ hour: "numeric", hour12: w.hour12, timeZone: w.timeZone });
    if ("month" !== e.type || e.isPlaceholder) "hour" !== e.type || e.isPlaceholder || (L = P.format(t.dateValue));
    else {
        let e = x.format(t.dateValue);
        L = e !== L ? `${L} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: M } = (0, T.y)({
            value: e.value,
            textValue: L,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: t.isDisabled,
            isReadOnly: t.isReadOnly || !e.isEditable,
            isRequired: t.isRequired,
            onIncrement: () => {
                (y.current = ""), t.increment(e.type);
            },
            onDecrement: () => {
                (y.current = ""), t.decrement(e.type);
            },
            onIncrementPage: () => {
                (y.current = ""), t.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (y.current = ""), t.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (y.current = ""), void 0 !== e.maxValue && t.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (y.current = ""), void 0 !== e.minValue && t.setSegment(e.type, e.minValue);
            },
        }),
        k = (0, g.useMemo)(() => new (0, p.d)(v, { maximumFractionDigits: 0 }), [v]),
        U = () => {
            if (
                (e.text === e.placeholder && D.focusPrevious(),
                !k.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder)
            )
                "dayPeriod" === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    r = k.parse(n);
                0 === (n = 0 === r ? "" : n).length || 0 === r ? t.clearSegment(e.type) : t.setSegment(e.type, r),
                    (y.current = n);
            }
        },
        G = (e) => {
            if (
                ("a" === e.key && ((0, o.cX)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
            )
                switch (e.key) {
                    case "Backspace":
                    case "Delete":
                        e.preventDefault(), e.stopPropagation(), U();
                }
        },
        { startsWith: F } = (0, I.U)({ sensitivity: "base" }),
        V = (0, A.i)({ hour: "numeric", hour12: !0 }),
        B = (0, g.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), V.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [V]),
        j = (0, g.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), V.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [V]),
        H = (0, A.i)({ year: "numeric", era: "narrow", timeZone: "UTC" }),
        Y = (0, g.useMemo)(() => {
            if ("era" !== e.type) return [];
            let n = (0, a.yP)(new (0, s.ng)(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map((e) => {
                    let t = n.set({ year: 1, month: 1, day: 1, era: e }).toDate("UTC");
                    return { era: e, formatted: H.formatToParts(t).find((e) => "era" === e.type).value };
                }),
                i = S(r.map((e) => e.formatted));
            if (i) for (let e of r) e.formatted = e.formatted.slice(i);
            return r;
        }, [H, t.calendar, e.type]),
        W = (n) => {
            if (t.isDisabled || t.isReadOnly) return;
            let r = y.current + n;
            switch (e.type) {
                case "dayPeriod":
                    if (F(B, n)) t.setSegment("dayPeriod", 0);
                    else if (F(j, n)) t.setSegment("dayPeriod", 12);
                    else break;
                    D.focusNext();
                    break;
                case "era": {
                    let e = Y.find((e) => F(e.formatted, n));
                    e && (t.setSegment("era", e.era), D.focusNext());
                    break;
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!k.isValidPartialNumber(r)) return;
                    let i = k.parse(r),
                        a = i,
                        s = 0 === e.minValue;
                    if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                i > 11 && (a = k.parse(n));
                                break;
                            case "h12":
                                (s = !1), i > 12 && (a = k.parse(n));
                        }
                        void 0 !== e.value && e.value >= 12 && i > 1 && (i += 12);
                    } else void 0 !== e.maxValue && i > e.maxValue && (a = k.parse(n));
                    if (isNaN(i)) return;
                    let o = 0 !== a || s;
                    o && t.setSegment(e.type, a),
                        void 0 !== e.maxValue && (Number(i + "0") > e.maxValue || r.length >= String(e.maxValue).length)
                            ? ((y.current = ""), o && D.focusNext())
                            : (y.current = r);
                }
            }
        },
        K = () => {
            (y.current = ""), n.current && (0, l.o)(n.current, { containingElement: (0, u.m)(n.current) });
            let e = window.getSelection();
            null == e || e.collapse(n.current);
        },
        $ = (0, g.useRef)("u" > typeof document ? document : null);
    (0, c._)($, "selectionchange", () => {
        var e;
        let t = window.getSelection();
        (null == t ? void 0 : t.anchorNode) &&
            (null == (e = n.current) ? void 0 : e.contains(null == t ? void 0 : t.anchorNode)) &&
            t.collapse(n.current);
    });
    let z = (0, g.useRef)("");
    (0, c._)(n, "beforeinput", (r) => {
        if (n.current)
            switch ((r.preventDefault(), r.inputType)) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    k.isValidPartialNumber(e.text) && !t.isReadOnly && U();
                    break;
                case "insertCompositionText":
                    (z.current = n.current.textContent), (n.current.textContent = n.current.textContent);
                    break;
                default:
                    null != r.data && W(r.data);
            }
    }),
        (0, c._)(n, "input", (e) => {
            let { inputType: t, data: r } = e;
            "insertCompositionText" === t &&
                (n.current && (n.current.textContent = z.current), null != r && (F(B, r) || F(j, r)) && W(r));
        }),
        (0, d.N)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && (D.focusPrevious() || D.focusNext());
            };
        }, [n, D]);
    let q =
        (0, o.un)() || "timeZoneName" === e.type
            ? {
                  role: "textbox",
                  "aria-valuemax": null,
                  "aria-valuemin": null,
                  "aria-valuetext": null,
                  "aria-valuenow": null,
              }
            : {};
    e === (0, g.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) || t.isInvalid || (O = void 0);
    let X = (0, _.Bi)(),
        Z = !t.isDisabled && !t.isReadOnly && e.isEditable,
        Q = "literal" === e.type ? "" : b.of(e.type),
        J = (0, f.b)({ "aria-label": `${Q}${N ? `, ${N}` : ""}${R ? ", " : ""}`, "aria-labelledby": R });
    if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
    let ee = { caretColor: "transparent" };
    if ("rtl" === C) {
        ee.unicodeBidi = "embed";
        let t = w[e.type];
        ("numeric" === t || "2-digit" === t) && (ee.direction = "ltr");
    }
    return {
        segmentProps: (0, h.v)(M, J, {
            id: X,
            ...q,
            "aria-invalid": t.isInvalid ? "true" : void 0,
            "aria-describedby": O,
            "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
            "data-placeholder": e.isPlaceholder || void 0,
            contentEditable: Z,
            suppressContentEditableWarning: Z,
            spellCheck: Z ? "false" : void 0,
            autoCorrect: Z ? "off" : void 0,
            [parseInt(g.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: Z ? "next" : void 0,
            inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !Z ? void 0 : "numeric",
            tabIndex: t.isDisabled ? void 0 : 0,
            onKeyDown: G,
            onFocus: K,
            style: ee,
            onPointerDown(e) {
                e.stopPropagation();
            },
            onMouseDown(e) {
                e.stopPropagation();
            },
        }),
    };
}
function S(e) {
    e.sort();
    let t = e[0],
        n = e[e.length - 1];
    for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
    return 0;
}
