"use strict";
n.d(t, { V: () => T });
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
    p = n(803082),
    h = n(318192),
    m = n(64700),
    g = n(853590),
    E = n(849352),
    A = n(670184),
    I = n(73733);
function T(e, t, n) {
    let T = (0, m.useRef)(""),
        { locale: S, direction: v } = (0, g.Y)(),
        C = (0, i.k)(),
        { ariaLabel: b, ariaLabelledBy: N, ariaDescribedBy: R, focusManager: O } = r.OX.get(t),
        D = e.isPlaceholder ? "" : e.text,
        L = (0, m.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
        w = (0, E.i)({ month: "long", timeZone: L.timeZone }),
        x = (0, E.i)({ hour: "numeric", hour12: L.hour12, timeZone: L.timeZone });
    if ("month" !== e.type || e.isPlaceholder) "hour" !== e.type || e.isPlaceholder || (D = x.format(t.dateValue));
    else {
        let e = w.format(t.dateValue);
        D = e !== D ? `${D} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: P } = (0, I.y)({
            value: e.value,
            textValue: D,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: t.isDisabled,
            isReadOnly: t.isReadOnly || !e.isEditable,
            isRequired: t.isRequired,
            onIncrement: () => {
                (T.current = ""), t.increment(e.type);
            },
            onDecrement: () => {
                (T.current = ""), t.decrement(e.type);
            },
            onIncrementPage: () => {
                (T.current = ""), t.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (T.current = ""), t.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (T.current = ""), void 0 !== e.maxValue && t.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (T.current = ""), void 0 !== e.minValue && t.setSegment(e.type, e.minValue);
            },
        }),
        M = (0, m.useMemo)(() => new (0, h.d)(S, { maximumFractionDigits: 0 }), [S]),
        k = () => {
            if (
                (e.text === e.placeholder && O.focusPrevious(),
                !M.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder)
            )
                "dayPeriod" === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    r = M.parse(n);
                0 === (n = 0 === r ? "" : n).length || 0 === r ? t.clearSegment(e.type) : t.setSegment(e.type, r),
                    (T.current = n);
            }
        },
        U = (e) => {
            if (
                ("a" === e.key && ((0, o.cX)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
            )
                switch (e.key) {
                    case "Backspace":
                    case "Delete":
                        e.preventDefault(), e.stopPropagation(), k();
                }
        },
        { startsWith: G } = (0, A.U)({ sensitivity: "base" }),
        V = (0, E.i)({ hour: "numeric", hour12: !0 }),
        F = (0, m.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), V.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [V]),
        B = (0, m.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), V.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [V]),
        j = (0, E.i)({ year: "numeric", era: "narrow", timeZone: "UTC" }),
        H = (0, m.useMemo)(() => {
            if ("era" !== e.type) return [];
            let n = (0, a.yP)(new (0, s.ng)(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map((e) => {
                    let t = n.set({ year: 1, month: 1, day: 1, era: e }).toDate("UTC");
                    return { era: e, formatted: j.formatToParts(t).find((e) => "era" === e.type).value };
                }),
                i = y(r.map((e) => e.formatted));
            if (i) for (let e of r) e.formatted = e.formatted.slice(i);
            return r;
        }, [j, t.calendar, e.type]),
        Y = (n) => {
            if (t.isDisabled || t.isReadOnly) return;
            let r = T.current + n;
            switch (e.type) {
                case "dayPeriod":
                    if (G(F, n)) t.setSegment("dayPeriod", 0);
                    else if (G(B, n)) t.setSegment("dayPeriod", 12);
                    else break;
                    O.focusNext();
                    break;
                case "era": {
                    let e = H.find((e) => G(e.formatted, n));
                    e && (t.setSegment("era", e.era), O.focusNext());
                    break;
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!M.isValidPartialNumber(r)) return;
                    let i = M.parse(r),
                        a = i,
                        s = 0 === e.minValue;
                    if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                i > 11 && (a = M.parse(n));
                                break;
                            case "h12":
                                (s = !1), i > 12 && (a = M.parse(n));
                        }
                        void 0 !== e.value && e.value >= 12 && i > 1 && (i += 12);
                    } else void 0 !== e.maxValue && i > e.maxValue && (a = M.parse(n));
                    if (isNaN(i)) return;
                    let o = 0 !== a || s;
                    o && t.setSegment(e.type, a),
                        void 0 !== e.maxValue && (Number(i + "0") > e.maxValue || r.length >= String(e.maxValue).length)
                            ? ((T.current = ""), o && O.focusNext())
                            : (T.current = r);
                }
            }
        },
        W = () => {
            (T.current = ""), n.current && (0, l.o)(n.current, { containingElement: (0, u.m)(n.current) });
            let e = window.getSelection();
            null == e || e.collapse(n.current);
        },
        K = (0, m.useRef)("u" > typeof document ? document : null);
    (0, c._)(K, "selectionchange", () => {
        var e;
        let t = window.getSelection();
        (null == t ? void 0 : t.anchorNode) &&
            (null == (e = n.current) ? void 0 : e.contains(null == t ? void 0 : t.anchorNode)) &&
            t.collapse(n.current);
    });
    let z = (0, m.useRef)("");
    (0, c._)(n, "beforeinput", (r) => {
        if (n.current)
            switch ((r.preventDefault(), r.inputType)) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    M.isValidPartialNumber(e.text) && !t.isReadOnly && k();
                    break;
                case "insertCompositionText":
                    (z.current = n.current.textContent), (n.current.textContent = n.current.textContent);
                    break;
                default:
                    null != r.data && Y(r.data);
            }
    }),
        (0, c._)(n, "input", (e) => {
            let { inputType: t, data: r } = e;
            "insertCompositionText" === t &&
                (n.current && (n.current.textContent = z.current), null != r && (G(F, r) || G(B, r)) && Y(r));
        }),
        (0, d.N)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && (O.focusPrevious() || O.focusNext());
            };
        }, [n, O]);
    let $ =
        (0, o.un)() || "timeZoneName" === e.type
            ? {
                  role: "textbox",
                  "aria-valuemax": null,
                  "aria-valuemin": null,
                  "aria-valuetext": null,
                  "aria-valuenow": null,
              }
            : {};
    e === (0, m.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) || t.isInvalid || (R = void 0);
    let q = (0, _.Bi)(),
        Z = !t.isDisabled && !t.isReadOnly && e.isEditable,
        Q = "literal" === e.type ? "" : C.of(e.type),
        X = (0, f.b)({ "aria-label": `${Q}${b ? `, ${b}` : ""}${N ? ", " : ""}`, "aria-labelledby": N });
    if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
    let J = { caretColor: "transparent" };
    if ("rtl" === v) {
        J.unicodeBidi = "embed";
        let t = L[e.type];
        ("numeric" === t || "2-digit" === t) && (J.direction = "ltr");
    }
    return {
        segmentProps: (0, p.v)(P, X, {
            id: q,
            ...$,
            "aria-invalid": t.isInvalid ? "true" : void 0,
            "aria-describedby": R,
            "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
            "data-placeholder": e.isPlaceholder || void 0,
            contentEditable: Z,
            suppressContentEditableWarning: Z,
            spellCheck: Z ? "false" : void 0,
            autoCorrect: Z ? "off" : void 0,
            [parseInt(m.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: Z ? "next" : void 0,
            inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !Z ? void 0 : "numeric",
            tabIndex: t.isDisabled ? void 0 : 0,
            onKeyDown: U,
            onFocus: W,
            style: J,
            onPointerDown(e) {
                e.stopPropagation();
            },
            onMouseDown(e) {
                e.stopPropagation();
            },
        }),
    };
}
function y(e) {
    e.sort();
    let t = e[0],
        n = e[e.length - 1];
    for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
    return 0;
}
