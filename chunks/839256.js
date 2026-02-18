t.d(a, { V: () => A });
var r = t(974111),
    n = t(294819),
    i = t(376472),
    o = t(99478),
    u = t(408713),
    l = t(400606),
    s = t(150047),
    d = t(248215),
    c = t(3388),
    m = t(723906),
    h = t(48284),
    D = t(803082),
    y = t(318192),
    p = t(64700),
    g = t(853590),
    f = t(849352),
    v = t(670184),
    b = t(73733);
function A(e, a, t) {
    let A = (0, p.useRef)(""),
        { locale: $, direction: w } = (0, g.Y)(),
        R = (0, n.k)(),
        { ariaLabel: P, ariaLabelledBy: k, ariaDescribedBy: x, focusManager: C } = r.OX.get(a),
        E = e.isPlaceholder ? "" : e.text,
        S = (0, p.useMemo)(() => a.dateFormatter.resolvedOptions(), [a.dateFormatter]),
        F = (0, f.i)({ month: "long", timeZone: S.timeZone }),
        B = (0, f.i)({ hour: "numeric", hour12: S.hour12, timeZone: S.timeZone });
    if ("month" !== e.type || e.isPlaceholder) "hour" !== e.type || e.isPlaceholder || (E = B.format(a.dateValue));
    else {
        let e = F.format(a.dateValue);
        E = e !== E ? `${E} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: V } = (0, b.y)({
            value: e.value,
            textValue: E,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: a.isDisabled,
            isReadOnly: a.isReadOnly || !e.isEditable,
            isRequired: a.isRequired,
            onIncrement: () => {
                (A.current = ""), a.increment(e.type);
            },
            onDecrement: () => {
                (A.current = ""), a.decrement(e.type);
            },
            onIncrementPage: () => {
                (A.current = ""), a.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (A.current = ""), a.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (A.current = ""), void 0 !== e.maxValue && a.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (A.current = ""), void 0 !== e.minValue && a.setSegment(e.type, e.minValue);
            },
        }),
        M = (0, p.useMemo)(() => new (0, y.d)($, { maximumFractionDigits: 0 }), [$]),
        I = () => {
            if (
                (e.text === e.placeholder && C.focusPrevious(),
                !M.isValidPartialNumber(e.text) || a.isReadOnly || e.isPlaceholder)
            )
                "dayPeriod" === e.type && a.clearSegment(e.type);
            else {
                let t = e.text.slice(0, -1),
                    r = M.parse(t);
                0 === (t = 0 === r ? "" : t).length || 0 === r ? a.clearSegment(e.type) : a.setSegment(e.type, r),
                    (A.current = t);
            }
        },
        { startsWith: T } = (0, v.U)({ sensitivity: "base" }),
        O = (0, f.i)({ hour: "numeric", hour12: !0 }),
        N = (0, p.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), O.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [O]),
        z = (0, p.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), O.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
        }, [O]),
        j = (0, f.i)({ year: "numeric", era: "narrow", timeZone: "UTC" }),
        Z = (0, p.useMemo)(() => {
            if ("era" !== e.type) return [];
            let t = (0, i.yP)(new (0, o.ng)(1, 1, 1), a.calendar),
                r = a.calendar.getEras().map((e) => {
                    let a = t.set({ year: 1, month: 1, day: 1, era: e }).toDate("UTC");
                    return { era: e, formatted: j.formatToParts(a).find((e) => "era" === e.type).value };
                }),
                n = (function (e) {
                    e.sort();
                    let a = e[0],
                        t = e[e.length - 1];
                    for (let e = 0; e < a.length; e++) if (a[e] !== t[e]) return e;
                    return 0;
                })(r.map((e) => e.formatted));
            if (n) for (let e of r) e.formatted = e.formatted.slice(n);
            return r;
        }, [j, a.calendar, e.type]),
        U = (t) => {
            if (a.isDisabled || a.isReadOnly) return;
            let r = A.current + t;
            switch (e.type) {
                case "dayPeriod":
                    if (T(N, t)) a.setSegment("dayPeriod", 0);
                    else if (T(z, t)) a.setSegment("dayPeriod", 12);
                    else break;
                    C.focusNext();
                    break;
                case "era": {
                    let e = Z.find((e) => T(e.formatted, t));
                    e && (a.setSegment("era", e.era), C.focusNext());
                    break;
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!M.isValidPartialNumber(r)) return;
                    let n = M.parse(r),
                        i = n,
                        o = 0 === e.minValue;
                    if ("hour" === e.type && a.dateFormatter.resolvedOptions().hour12) {
                        switch (a.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                n > 11 && (i = M.parse(t));
                                break;
                            case "h12":
                                (o = !1), n > 12 && (i = M.parse(t));
                        }
                        void 0 !== e.value && e.value >= 12 && n > 1 && (n += 12);
                    } else void 0 !== e.maxValue && n > e.maxValue && (i = M.parse(t));
                    if (isNaN(n)) return;
                    let u = 0 !== i || o;
                    u && a.setSegment(e.type, i),
                        void 0 !== e.maxValue && (Number(n + "0") > e.maxValue || r.length >= String(e.maxValue).length)
                            ? ((A.current = ""), u && C.focusNext())
                            : (A.current = r);
                }
            }
        },
        K = (0, p.useRef)("u" > typeof document ? document : null);
    (0, d._)(K, "selectionchange", () => {
        var e;
        let a = window.getSelection();
        (null == a ? void 0 : a.anchorNode) &&
            (null == (e = t.current) ? void 0 : e.contains(null == a ? void 0 : a.anchorNode)) &&
            a.collapse(t.current);
    });
    let L = (0, p.useRef)("");
    (0, d._)(t, "beforeinput", (r) => {
        if (t.current)
            switch ((r.preventDefault(), r.inputType)) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    M.isValidPartialNumber(e.text) && !a.isReadOnly && I();
                    break;
                case "insertCompositionText":
                    (L.current = t.current.textContent), (t.current.textContent = t.current.textContent);
                    break;
                default:
                    null != r.data && U(r.data);
            }
    }),
        (0, d._)(t, "input", (e) => {
            let { inputType: a, data: r } = e;
            "insertCompositionText" === a &&
                (t.current && (t.current.textContent = L.current), null != r && (T(N, r) || T(z, r)) && U(r));
        }),
        (0, c.N)(() => {
            let e = t.current;
            return () => {
                document.activeElement === e && (C.focusPrevious() || C.focusNext());
            };
        }, [t, C]);
    let J =
        (0, u.un)() || "timeZoneName" === e.type
            ? {
                  role: "textbox",
                  "aria-valuemax": null,
                  "aria-valuemin": null,
                  "aria-valuetext": null,
                  "aria-valuenow": null,
              }
            : {};
    e === (0, p.useMemo)(() => a.segments.find((e) => e.isEditable), [a.segments]) || a.isInvalid || (x = void 0);
    let Y = (0, m.Bi)(),
        W = !a.isDisabled && !a.isReadOnly && e.isEditable,
        G = "literal" === e.type ? "" : R.of(e.type),
        H = (0, h.b)({ "aria-label": `${G}${P ? `, ${P}` : ""}${k ? ", " : ""}`, "aria-labelledby": k });
    if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
    let _ = { caretColor: "transparent" };
    if ("rtl" === w) {
        _.unicodeBidi = "embed";
        let a = S[e.type];
        ("numeric" === a || "2-digit" === a) && (_.direction = "ltr");
    }
    return {
        segmentProps: (0, D.v)(V, H, {
            id: Y,
            ...J,
            "aria-invalid": a.isInvalid ? "true" : void 0,
            "aria-describedby": x,
            "aria-readonly": a.isReadOnly || !e.isEditable ? "true" : void 0,
            "data-placeholder": e.isPlaceholder || void 0,
            contentEditable: W,
            suppressContentEditableWarning: W,
            spellCheck: W ? "false" : void 0,
            autoCorrect: W ? "off" : void 0,
            [parseInt(p.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: W ? "next" : void 0,
            inputMode: a.isDisabled || "dayPeriod" === e.type || "era" === e.type || !W ? void 0 : "numeric",
            tabIndex: a.isDisabled ? void 0 : 0,
            onKeyDown: (e) => {
                if (
                    ("a" === e.key && ((0, u.cX)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                    !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
                )
                    switch (e.key) {
                        case "Backspace":
                        case "Delete":
                            e.preventDefault(), e.stopPropagation(), I();
                    }
            },
            onFocus: () => {
                (A.current = ""), t.current && (0, l.o)(t.current, { containingElement: (0, s.m)(t.current) });
                let e = window.getSelection();
                null == e || e.collapse(t.current);
            },
            style: _,
            onPointerDown(e) {
                e.stopPropagation();
            },
            onMouseDown(e) {
                e.stopPropagation();
            },
        }),
    };
}
