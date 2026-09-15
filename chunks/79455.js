(r.d(t, { nY: () => m, dL: () => _ }), r(321073));
var n = r(582128),
    a = r(21574);
let i = Symbol.for("pass");
var l = r(707373),
    u = r(597807),
    s = r(944181);
function o(e) {
    let t = e;
    for (; null != t && t !== document.body;) {
        if (t?.getAttribute("aria-hidden") === "true") return !0;
        t = t.parentElement;
    }
    return !1;
}
let c = Array.from(s.aria.keys()),
    d = c.map((e) => `[${e}]`).join(", "),
    f = new Set(s.roles.keys()),
    h = [
        {
            id: "alt-text",
            selector: 'img, [role="img"]',
            tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
            metadata: { description: "Images must have alternative text.", help: "" },
            check: function (e) {
                return "" === (0, l.D0)(e)
                    ? ("IMG" === e.tagName && e.hasAttribute("alt")) || o(e) || !(0, u.z)(e)
                        ? i
                        : "Image has no alternative text"
                    : i;
            },
        },
        {
            id: "aria-allowed-attributes",
            selector: d,
            tags: ["wcag2a", "wcag412"],
            metadata: {
                description: "Only use supported ARIA attributes",
                help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page.",
            },
            check: function (e) {
                let t = (0, l.Lw)(e),
                    r = s.roles.get(t);
                if (null == r) return i;
                for (let n of c)
                    if (e.hasAttribute(n) && !r.props.hasOwnProperty(n)) {
                        if ("aria-expanded" === n && e.hasAttribute("aria-controls")) continue;
                        if (!(0, u.z)(e)) return i;
                        return `'${t}' does not support the ${n} attribute`;
                    }
                return i;
            },
        },
        {
            id: "aria-attribute-valid-value",
            selector: d,
            tags: [],
            metadata: { description: "ARIA attributes must use valid values", help: "" },
            check: function (e) {
                let t = (function (e) {
                    for (let y of c)
                        if (e.hasAttribute(y)) {
                            let c = e.getAttribute(y),
                                $ = s.aria.get(y);
                            switch ($.type) {
                                case "string":
                                    return i;
                                case "id":
                                    return (
                                        (t = y),
                                        (r = c),
                                        null == document.getElementById(r)
                                            ? `${t} references #${r} which does not exist`
                                            : i
                                    );
                                case "idlist":
                                    var t,
                                        r,
                                        n,
                                        a,
                                        l,
                                        u,
                                        o,
                                        d,
                                        f,
                                        h = y,
                                        m = c,
                                        b = e;
                                    if (
                                        ("aria-controls" === h &&
                                            ("false" === b.getAttribute("aria-expanded") ||
                                                "false" === b.getAttribute("aria-selected"))) ||
                                        ("aria-owns" === h && "false" === b.getAttribute("aria-expanded"))
                                    )
                                        return i;
                                    for (let e of m.split(" "))
                                        if (null == document.getElementById(e))
                                            return `${h} references #${m} which does not exist`;
                                    return i;
                                case "integer":
                                    return (
                                        (n = y),
                                        String(parseInt((a = c), 10)) !== a
                                            ? `${n} requires an integer but got ${a}`
                                            : i
                                    );
                                case "number":
                                    return (
                                        (l = y), isFinite((u = c)) ? i : `${l} requires a numeric value but got ${u}`
                                    );
                                case "boolean":
                                    return (
                                        (o = y),
                                        (d = c),
                                        (f = $),
                                        "true" === d || "false" === d || ("" === d && !0 === f.allowundefined)
                                            ? i
                                            : `${o} must be either "true" or "false"`
                                    );
                                case "token":
                                    return (function (e, t, r) {
                                        let n = (function (e) {
                                            switch (e) {
                                                case "true":
                                                    return !0;
                                                case "false":
                                                    return !1;
                                                default:
                                                    return e;
                                            }
                                        })(t);
                                        return r.values?.includes(n)
                                            ? i
                                            : `${e} was ${t} but must be: ${r.values?.join(", ")}`;
                                    })(y, c, $);
                                case "tokenlist":
                                    var g = y,
                                        p = c,
                                        v = $;
                                    for (let e of p.split(" "))
                                        if (!v.values?.includes(e))
                                            return `${g} included ${p} but is restricted to: ${v.values?.join(", ")}`;
                                    return i;
                                case "tristate":
                                    var w = y,
                                        A = c;
                                    switch (A) {
                                        case "true":
                                        case "false":
                                        case "mixed":
                                            return i;
                                        default:
                                            return `${w} must be "true", "false", or "mixed" not ${A}`;
                                    }
                            }
                        }
                    return i;
                })(e);
                return t !== i && (o(e) || !(0, u.z)(e)) ? i : t;
            },
        },
        {
            id: "aria-valid-roles",
            selector: "[role]",
            tags: ["wcag2a", "wcag412"],
            metadata: {
                description: "ARIA roles used must conform to valid values",
                help: "Ensures all elements with a role attribute use a valid value",
            },
            check: function (e) {
                for (let t of e.getAttribute("role").split(" "))
                    if (!f.has(t)) return `Role '${t}' is not a valid ARIA role`;
                return i;
            },
        },
        {
            id: "button-name",
            selector: 'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
            tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
            metadata: { description: "Ensures buttons have discernible text", help: "" },
            check: function (e) {
                return "" !== (0, l.D0)(e) || o(e) || !(0, u.z)(e) ? i : "button's accessible name is empty.";
            },
        },
        {
            id: "nested-interactive",
            selector: `button, a, ${Array.from(s.roles.entries())
                .reduce((e, t) => {
                    let [r, n] = t;
                    return (!0 === n.childrenPresentational && e.push(`[role="${r}"]`), e);
                }, [])
                .join(", ")}`,
            tags: [],
            metadata: {
                description: "Interactive controls must not be nested",
                help: "Nested focusable elements are inaccessible to screen readers",
            },
            check: function (e) {
                return !(function (e) {
                    let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
                        r = t.nextNode();
                    for (; null !== r;) {
                        if (
                            r !== e &&
                            (function (e) {
                                switch (e.nodeName) {
                                    case "IFRAME":
                                    case "EMBED":
                                    case "DETAILS":
                                    case "LABEL":
                                        return !0;
                                    case "INPUT":
                                        return "hidden" !== e.getAttribute("type");
                                }
                                switch ((0, l.Lw)(e)) {
                                    case "link":
                                        return e.hasAttribute("href");
                                    case "audio":
                                        return e.hasAttribute("controls");
                                    case "img":
                                        return e.hasAttribute("usemap");
                                    case "button":
                                        return !0;
                                    default:
                                        return !1;
                                }
                            })(r)
                        )
                            return !1;
                        r = t.nextNode();
                    }
                    return !0;
                })(e) && (0, u.z)(e)
                    ? "Nested interactive element"
                    : i;
            },
        },
        {
            id: "input-label",
            selector:
                'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
            tags: ["wcag2a", "wcag131", "wcag412", "section508", "section508.22.a", "ACT"],
            metadata: {
                description: "Form inputs require a label",
                help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby.",
            },
            check: function (e) {
                return "" === (0, l.D0)(e) ? (o(e) || !(0, u.z)(e) ? i : "Form input has no label") : i;
            },
        },
        {
            id: "target-size",
            selector: 'a, button, input, [role="button"], [role="link"]',
            tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
            metadata: {
                description: "Below minimum target size",
                help: "Interactive elements must meet a minimum target size of 24px by 24px.",
            },
            check: function (e) {
                if ("inline" === getComputedStyle(e).display) return i;
                let t = e.getBoundingClientRect();
                return t.width >= 24 && t.height >= 24 ? i : "Element is smaller than the minimum target size.";
            },
        },
    ],
    m = "data-accessibility-violation",
    b = "function" == typeof navigator?.scheduling?.isInputPending,
    g = null,
    p = null,
    v = 0,
    w = 0,
    A = null,
    y = { hash: 0, violations: new Map() },
    $ = () => {},
    x = document.body;
function k() {
    ((v = 0), (w = 0), (A = null), (y = { hash: 0, violations: new Map() }));
}
function I() {
    p = requestIdleCallback(N);
}
function E() {
    ((A = null), (w = 0), v < h.length - 1 ? ((v += 1), I()) : ($(y), k()));
}
function N() {
    let e = h[v];
    if (
        (null == A && (A = null != e.selector ? Array.from(x.querySelectorAll(e.selector)) : e.select(x)),
        0 === A.length)
    )
        return E();
    let t = performance.now() + 16,
        r = { includeContinuous: !0 };
    for (; w < A.length && !(navigator.scheduling.isInputPending(r) || performance.now() >= t);) {
        let t = A[w++],
            r = e.check(t);
        if (r !== i) {
            let n = (0, a.h)(t),
                i = L(
                    `${r}_${e.id}_${
                        null == n
                            ? (function (e) {
                                  let t = "",
                                      r = e;
                                  for (; null != r;) ((t += r.className), (r = r.parentElement));
                                  return L(t);
                              })(t)
                            : n.join("\n")
                    }`,
                );
            y.hash = L(`${y.hash}${i}`);
            let l = i.toString(),
                u = `${e.id}_${i}`,
                s = y.violations.get(e.id) ?? { rule: e, instances: new Map() },
                o = s.instances.get(u) ?? [],
                c = { element: t, message: r, trace: n ?? [], hash: l };
            (o.push(c), s.instances.set(u, o), y.violations.set(e.id, s));
        }
    }
    if (w < A.length - 1) return I();
    E();
}
let M = (e) => {
    0 !== e.filter((e) => "attributes" !== e.type || e.attributeName !== m).length &&
        (k(),
        null != g && (clearTimeout(g), (g = null)),
        null != p && (clearTimeout(p), (p = null)),
        (g = setTimeout(I, 250)));
};
function _(e, t) {
    let r = (0, n.useRef)(t);
    ((0, n.useLayoutEffect)(() => {
        r.current = t;
    }),
        (0, n.useLayoutEffect)(() => {
            if (b && null != e) {
                let t;
                (($ = r.current), (x = e));
                let n = ((t = new MutationObserver(M)).observe(e, { attributes: !0, childList: !0, subtree: !0 }), t);
                return () => {
                    (($ = () => {}), n.disconnect());
                };
            }
        }, [e]));
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = 0xdeadbeef ^ t,
        n = 0x41c6ce57 ^ t;
    for (let t = 0, a; t < e.length; t++)
        ((r = Math.imul(r ^ (a = e.charCodeAt(t)), 0x9e3779b1)), (n = Math.imul(n ^ a, 0x5f356495)));
    return (
        (r = Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^ Math.imul(n ^ (n >>> 13), 0xc2b2ae35)),
        0x100000000 * (2097151 & (n = Math.imul(n ^ (n >>> 16), 0x85ebca6b) ^ Math.imul(r ^ (r >>> 13), 0xc2b2ae35))) +
            (r >>> 0)
    );
}
