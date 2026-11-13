t.d(n, { N: () => H, w: () => z });
var i = t(477900),
    r = t(582128),
    a = t(906018),
    o = t(834730),
    s = t(911608),
    l = t(683071),
    d = t(821609),
    c = t(692768),
    u = t(95477),
    h = t(771871),
    m = t(691885),
    f = t(150934),
    k = t(140735),
    g = t(873631),
    p = t(792996);
function y(e) {
    return `native-survey-question-${e}`;
}
let w = "native-survey-page-errors";
function b(e, n) {
    let { content: t } = n,
        i =
            "questions" === t.oneofKind
                ? t.questions.questions.find((n) => {
                      let { id: t } = n;
                      return t === e.questionId;
                  })?.kind
                : void 0;
    if ("conjoint" === t.oneofKind) return p.intl.string(g.default.BrvdvV);
    if ("maxdiff" === t.oneofKind) return p.intl.string(g.default.soVhAf);
    switch (e.code) {
        case a.u2.REQUIRED:
            if (0 !== e.choiceId) return p.intl.string(g.default.vYs6bp);
            return p.intl.string(0 !== e.rowId ? g.default.LkpNt8 : g.default.S0yew2);
        case a.u2.TOO_LONG:
            return p.intl.string(g.default.UvbGfF);
        case a.u2.TOO_FEW:
        case a.u2.TOO_MANY: {
            let n = e.code === a.u2.TOO_FEW;
            if (i?.oneofKind === "rank")
                return p.intl.formatToPlainString(g.default["3ncMZW"], {
                    count: i.rank.rankTop?.value ?? i.rank.choices.length,
                });
            if (i?.oneofKind === "multiChoice") {
                let e = n ? i.multiChoice.minSelected : i.multiChoice.maxSelected;
                if (null != e)
                    return p.intl.formatToPlainString(n ? g.default.BE1zNg : g.default.WapWNF, { count: e.value });
            }
            return p.intl.string(g.default["6vETgO"]);
        }
        default:
            return p.intl.string(g.default["6vETgO"]);
    }
}
var x = t(752356);
function v(e) {
    let { question: n, hint: t, errors: r, page: a, labelId: s, errorId: l, children: d } = e,
        c = r.filter((e) => {
            let { rowId: n, choiceId: t } = e;
            return 0 === n && 0 === t;
        });
    return (0, i.jsxs)("div", {
        id: y(n.id),
        role: "group",
        className: x.b1,
        tabIndex: -1,
        "aria-labelledby": s,
        "aria-describedby": c.length > 0 ? l : void 0,
        "aria-invalid": r.length > 0 || void 0,
        children: [
            (0, i.jsxs)(o.E, {
                id: s,
                variant: "body-md/semibold",
                color: "text-strong",
                className: x.mD,
                children: [
                    (0, i.jsx)("span", { dir: "auto", children: n.text }),
                    n.required &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("span", { className: x.Zy, "aria-hidden": !0, children: "*" }),
                                (0, i.jsx)(k.A, { children: p.intl.string(g.default["9bYdRi"]) }),
                            ],
                        }),
                ],
            }),
            null != t && "" !== t && (0, i.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
            d,
            c.length > 0 &&
                (0, i.jsx)(o.E, {
                    id: l,
                    variant: "body-sm/medium",
                    color: "text-feedback-critical",
                    children: c.map((e) => b(e, a)).join(" "),
                }),
        ],
    });
}
function T(e, n, t) {
    let i = e.find((e) => {
        let { rowId: n, choiceId: i } = e;
        return (null != t.rowId && n === t.rowId) || (null != t.choiceId && 0 === n && i === t.choiceId);
    });
    return null != i ? b(i, n) : null;
}
function $(e) {
    let n,
        { question: t, body: a, answer: o, onChange: s, errors: l, page: d, labelId: c, variant: k } = e,
        y = o?.choiceIds ?? [],
        w = o?.textByChoiceId ?? {};
    function b(e) {
        if (0 === e.length) return s(null);
        let n = {};
        for (let t of e) null != w[t] && (n[t] = w[t]);
        return s({ questionId: t.id, choiceIds: e, textByChoiceId: n });
    }
    function $(e) {
        return (0, i.jsx)(
            "div",
            {
                className: "dropdown" === k ? void 0 : x.Vq,
                children: (0, i.jsx)(u.k, {
                    label: p.intl.formatToPlainString(g.default.Q2yZXD, { choice: e.text }),
                    value: w[e.id] ?? "",
                    onChange: (n) => {
                        var i;
                        let r;
                        return (
                            (i = e.id),
                            (r = { ...w }),
                            "" === n ? delete r[i] : (r[i] = n),
                            s({ questionId: t.id, choiceIds: y, textByChoiceId: r })
                        );
                    },
                    maxLength: e.textMaxLength?.value,
                    showCharacterCount: null != e.textMaxLength,
                    error: T(l, d, { choiceId: e.id }),
                    dir: "auto",
                }),
            },
            `${e.id}-text`,
        );
    }
    let O =
        "multi" === k
            ? null
            : a.choices
                  .filter((e) => {
                      let { id: n, allowText: t } = e;
                      return t && y.includes(n);
                  })
                  .map($);
    if ("single" === k)
        n = (0, i.jsx)("div", {
            className: x.R$,
            children: (0, i.jsx)(h.z, {
                "aria-labelledby": c,
                options: a.choices.map((e) => ({ name: e.text, value: e.id })),
                value: y[0] ?? null,
                onChange: (e) => b([e]),
            }),
        });
    else if ("dropdown" === k)
        n = (0, i.jsx)(m.l, {
            label: t.text,
            hideLabel: !0,
            selectionMode: "single",
            placeholder: p.intl.string(g.default["1vr4Lp"]),
            options: a.choices.map((e) => ({ id: String(e.id), label: e.text, value: e.id })),
            value: y[0] ?? null,
            onSelectionChange: (e) => b(null != e ? [e] : []),
        });
    else {
        let e = y.filter((e) => a.choices.find((n) => n.id === e)?.exclusive !== !0).length,
            t = null != a.maxSelected && e >= a.maxSelected.value;
        n = (0, i.jsx)("div", {
            className: x.ab,
            children: a.choices.map((e) => {
                let n = y.includes(e.id);
                return (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, i.jsx)(f.S, {
                                label: e.text,
                                checked: n,
                                disabled: !n && t && !e.exclusive,
                                onChange: (n) =>
                                    b(
                                        (function (e, n, t, i) {
                                            if (!i) return n.filter((e) => e !== t.id);
                                            if (t.exclusive) return [t.id];
                                            let r = new Set(
                                                e.choices
                                                    .filter((e) => {
                                                        let { exclusive: n } = e;
                                                        return n;
                                                    })
                                                    .map((e) => {
                                                        let { id: n } = e;
                                                        return n;
                                                    }),
                                            );
                                            return [...n.filter((e) => !r.has(e)), t.id];
                                        })(a, y, e, n),
                                    ),
                            }),
                            e.allowText && n && $(e),
                        ],
                    },
                    e.id,
                );
            }),
        });
    }
    return (0, i.jsxs)(v, {
        ...e,
        hint:
            "multi" === k
                ? (function (e) {
                      let { minSelected: n, maxSelected: t } = e,
                          i = n?.value,
                          r = t?.value;
                      return null != i && null != r
                          ? i === r
                              ? p.intl.formatToPlainString(g.default["i+lSRa"], { count: i })
                              : p.intl.formatToPlainString(g.default.C2Yx8b, { min: i, max: r })
                          : null != i
                            ? p.intl.formatToPlainString(g.default["i+lSRa"], { count: i })
                            : null != r
                              ? p.intl.formatToPlainString(g.default.CYgHSQ, { count: r })
                              : null;
                  })(a)
                : null,
        children: [n, O],
    });
}
function O(e) {
    let { feature: n, level: t } = e;
    return null == t
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  "" !== t.imageUrl && (0, i.jsx)("img", { className: x.SV, src: t.imageUrl, alt: t.imageAltText }),
                  (0, i.jsx)("span", {
                      dir: "auto",
                      children:
                          null != t.price && "" !== n.priceCurrency
                              ? p.intl.data.formatNumber(t.price.value, {
                                    style: "currency",
                                    currency: n.priceCurrency,
                                })
                              : t.text,
                  }),
              ],
          });
}
function B(e) {
    let { pageId: n, conjoint: t, answer: a, onChange: s } = e,
        { features: l, tasks: d, includeNoneOption: c } = t,
        [u, h] = r.useState(() => d.map(() => null)),
        m =
            null != a
                ? d.map((e, n) => a.chosenConceptIndexes[n] ?? null)
                : u.every((e) => null != e)
                  ? d.map(() => null)
                  : u;
    function f(e, t) {
        let i = d.map((n, i) => (i === e ? t : (m[i] ?? null)));
        h(i);
        let r = i.filter((e) => null != e);
        s(r.length === d.length ? { pageId: n, chosenConceptIndexes: r } : null);
    }
    return (0, i.jsxs)("div", {
        className: x.Cz,
        children: [
            "" !== t.text &&
                (0, i.jsx)(o.E, {
                    variant: "body-md/semibold",
                    color: "text-strong",
                    children: (0, i.jsx)("span", { dir: "auto", children: t.text }),
                }),
            (0, i.jsx)("div", {
                className: x.vB,
                children: d.map((e, t) => {
                    let { concepts: r } = e,
                        a = `native-survey-conjoint-${n}-${t}`,
                        s = `${a}-heading`;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: x._W,
                            role: "radiogroup",
                            "aria-labelledby": s,
                            children: [
                                (0, i.jsx)(o.E, {
                                    id: s,
                                    variant: "body-sm/semibold",
                                    color: "text-muted",
                                    children: p.intl.formatToPlainString(g.default["2Nmx89"], {
                                        current: t + 1,
                                        total: d.length,
                                    }),
                                }),
                                (0, i.jsx)("div", {
                                    className: x.W,
                                    children: r.map((e, n) => {
                                        var r;
                                        return (0, i.jsxs)(
                                            "div",
                                            {
                                                className: x.N7,
                                                children: [
                                                    ((r = e.label),
                                                    (0, i.jsx)("input", {
                                                        id: `${a}-${n}`,
                                                        className: x.UU,
                                                        type: "radio",
                                                        name: a,
                                                        checked: m[t] === n,
                                                        "aria-label": p.intl.formatToPlainString(g.default.mRwiYF, {
                                                            label: r,
                                                        }),
                                                        onChange: () => f(t, n),
                                                    })),
                                                    (0, i.jsxs)("label", {
                                                        htmlFor: `${a}-${n}`,
                                                        className: x.RM,
                                                        children: [
                                                            (0, i.jsx)(o.E, {
                                                                variant: "body-md/semibold",
                                                                color: "text-strong",
                                                                children: (0, i.jsx)("span", {
                                                                    dir: "auto",
                                                                    children: e.label,
                                                                }),
                                                            }),
                                                            l.map((n, t) =>
                                                                (0, i.jsxs)(
                                                                    "div",
                                                                    {
                                                                        children: [
                                                                            (0, i.jsx)(o.E, {
                                                                                variant: "body-xs/normal",
                                                                                color: "text-muted",
                                                                                children: (0, i.jsx)("span", {
                                                                                    dir: "auto",
                                                                                    children: n.label,
                                                                                }),
                                                                            }),
                                                                            (0, i.jsx)(O, {
                                                                                feature: n,
                                                                                level: e.levels[t],
                                                                            }),
                                                                        ],
                                                                    },
                                                                    n.id,
                                                                ),
                                                            ),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            n,
                                        );
                                    }),
                                }),
                                c &&
                                    (0, i.jsxs)("div", {
                                        className: `${x.Io} ${x.gI}`,
                                        children: [
                                            (0, i.jsx)("input", {
                                                id: `${a}-none`,
                                                className: x.UU,
                                                type: "radio",
                                                name: a,
                                                checked: -1 === m[t],
                                                onChange: () => f(t, -1),
                                            }),
                                            (0, i.jsx)("label", {
                                                htmlFor: `${a}-none`,
                                                className: x.W8,
                                                children: (0, i.jsx)(o.E, {
                                                    variant: "body-md/medium",
                                                    color: "currentColor",
                                                    children: p.intl.string(g.default.WwU3lH),
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
var j = t(503698),
    I = t.n(j);
function _(e) {
    let { name: n, label: t, checked: r, onChange: a } = e;
    return (0, i.jsxs)("label", {
        className: x.wK,
        children: [
            (0, i.jsx)("input", { className: x.aF, type: "radio", name: n, checked: r, onChange: a }),
            (0, i.jsx)(h.T, { checked: r, disabled: !1 }),
            (0, i.jsx)(k.A, { children: t }),
        ],
    });
}
function R(e) {
    let { question: n, body: t, answer: r, onChange: a, errors: s, page: l } = e,
        d = r?.rows ?? [];
    return (0, i.jsx)(v, {
        ...e,
        children: (0, i.jsx)("div", {
            className: x.wY,
            children: (0, i.jsxs)("table", {
                className: x.tp,
                children: [
                    (0, i.jsx)("thead", {
                        children: (0, i.jsxs)("tr", {
                            children: [
                                (0, i.jsx)("td", {}),
                                t.scale.map((e) =>
                                    (0, i.jsx)("th", { scope: "col", dir: "auto", children: e.text }, e.id),
                                ),
                            ],
                        }),
                    }),
                    (0, i.jsx)("tbody", {
                        children: t.rows.map((e) => {
                            let r = T(s, l, { rowId: e.id }),
                                c = `native-survey-matrix-${n.id}-row-${e.id}`,
                                u = `${c}-error`,
                                h = d.find((n) => {
                                    let { rowId: t } = n;
                                    return t === e.id;
                                })?.choiceId;
                            return (0, i.jsxs)(
                                "tr",
                                {
                                    className: I()({ [x.Xu]: null != r }),
                                    role: "radiogroup",
                                    "aria-labelledby": c,
                                    "aria-describedby": null != r ? u : void 0,
                                    children: [
                                        (0, i.jsxs)("th", {
                                            scope: "row",
                                            id: c,
                                            children: [
                                                (0, i.jsx)("span", { dir: "auto", children: e.text }),
                                                null != r &&
                                                    (0, i.jsx)(o.E, {
                                                        id: u,
                                                        variant: "body-xs/medium",
                                                        color: "text-feedback-critical",
                                                        children: r,
                                                    }),
                                            ],
                                        }),
                                        t.scale.map((r) =>
                                            (0, i.jsx)(
                                                "td",
                                                {
                                                    children: (0, i.jsx)(_, {
                                                        name: c,
                                                        checked: h === r.id,
                                                        label: p.intl.formatToPlainString(g.default.fwbD3G, {
                                                            row: e.text,
                                                            column: r.text,
                                                        }),
                                                        onChange: () => {
                                                            var i, o;
                                                            let s, l;
                                                            return (
                                                                (i = e.id),
                                                                (o = r.id),
                                                                (s = d.filter((e) => e.rowId !== i)),
                                                                (l = t.rows
                                                                    .map((e) => {
                                                                        let { id: n } = e;
                                                                        return n === i
                                                                            ? { rowId: i, choiceId: o }
                                                                            : s.find((e) => e.rowId === n);
                                                                    })
                                                                    .filter((e) => null != e)),
                                                                a({ questionId: n.id, rows: l })
                                                            );
                                                        },
                                                    }),
                                                },
                                                r.id,
                                            ),
                                        ),
                                    ],
                                },
                                e.id,
                            );
                        }),
                    }),
                ],
            }),
        }),
    });
}
let N = { mostItemId: 0, leastItemId: 0 };
function L(e) {
    let { pageId: n, maxdiff: t, answer: r, onChange: s } = e,
        { sets: l, mostLabel: d, leastLabel: c, anchorQuestionText: u } = t,
        m = l.map((e, n) => r?.picksPerSet[n] ?? N),
        f = r?.anchor ?? a.Pc.UNSPECIFIED,
        y = `native-survey-maxdiff-${n}-anchor`;
    return (0, i.jsxs)("div", {
        className: x.Cz,
        children: [
            "" !== t.text &&
                (0, i.jsx)(o.E, {
                    variant: "body-md/semibold",
                    color: "text-strong",
                    children: (0, i.jsx)("span", { dir: "auto", children: t.text }),
                }),
            (0, i.jsxs)("div", {
                className: x.vB,
                children: [
                    l.map((e, t) => {
                        let { items: r } = e,
                            a = m[t],
                            u = `native-survey-maxdiff-${n}-${t}`;
                        function h(e, i) {
                            return s({
                                pageId: n,
                                anchor: f,
                                picksPerSet: m.map((n, r) =>
                                    r === t
                                        ? "most" === e
                                            ? { mostItemId: i, leastItemId: a.leastItemId === i ? 0 : a.leastItemId }
                                            : { leastItemId: i, mostItemId: a.mostItemId === i ? 0 : a.mostItemId }
                                        : n,
                                ),
                            });
                        }
                        let y = p.intl.formatToPlainString(g.default.NcfvIH, { current: t + 1, total: l.length });
                        return (0, i.jsxs)(
                            "section",
                            {
                                className: x._W,
                                "aria-labelledby": `${u}-heading`,
                                children: [
                                    l.length > 1
                                        ? (0, i.jsx)(o.E, {
                                              id: `${u}-heading`,
                                              variant: "body-sm/semibold",
                                              color: "text-muted",
                                              children: y,
                                          })
                                        : (0, i.jsx)(k.A, { id: `${u}-heading`, children: y }),
                                    (0, i.jsx)("div", {
                                        className: x.wY,
                                        children: (0, i.jsxs)("table", {
                                            className: x.tp,
                                            children: [
                                                (0, i.jsx)("thead", {
                                                    children: (0, i.jsxs)("tr", {
                                                        children: [
                                                            (0, i.jsx)("th", {
                                                                scope: "col",
                                                                dir: "auto",
                                                                children: d,
                                                            }),
                                                            (0, i.jsx)("td", {}),
                                                            (0, i.jsx)("th", {
                                                                scope: "col",
                                                                dir: "auto",
                                                                children: c,
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, i.jsx)("tbody", {
                                                    children: r.map((e) =>
                                                        (0, i.jsxs)(
                                                            "tr",
                                                            {
                                                                children: [
                                                                    (0, i.jsx)("td", {
                                                                        children: (0, i.jsx)(_, {
                                                                            name: `${u}-most`,
                                                                            checked: a.mostItemId === e.id,
                                                                            label: p.intl.formatToPlainString(
                                                                                g.default.udbN7p,
                                                                                { side: d, item: e.text },
                                                                            ),
                                                                            onChange: () => h("most", e.id),
                                                                        }),
                                                                    }),
                                                                    (0, i.jsx)("th", {
                                                                        scope: "row",
                                                                        dir: "auto",
                                                                        children: e.text,
                                                                    }),
                                                                    (0, i.jsx)("td", {
                                                                        children: (0, i.jsx)(_, {
                                                                            name: `${u}-least`,
                                                                            checked: a.leastItemId === e.id,
                                                                            label: p.intl.formatToPlainString(
                                                                                g.default.udbN7p,
                                                                                { side: c, item: e.text },
                                                                            ),
                                                                            onChange: () => h("least", e.id),
                                                                        }),
                                                                    }),
                                                                ],
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                    "" !== u &&
                        (0, i.jsxs)("section", {
                            className: x._W,
                            children: [
                                (0, i.jsx)(o.E, {
                                    id: y,
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    children: (0, i.jsx)("span", { dir: "auto", children: u }),
                                }),
                                (0, i.jsx)("div", {
                                    className: x.R$,
                                    children: (0, i.jsx)(h.z, {
                                        "aria-labelledby": y,
                                        value: f === a.Pc.UNSPECIFIED ? null : f,
                                        options: [
                                            { name: p.intl.string(g.default["3XYsdu"]), value: a.Pc.ALL },
                                            { name: p.intl.string(g.default.LRkHAo), value: a.Pc.SOME },
                                            { name: p.intl.string(g.default.EcbOOg), value: a.Pc.NONE },
                                        ],
                                        onChange: (e) => s({ pageId: n, picksPerSet: m, anchor: e }),
                                    }),
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var W = t(126600),
    U = t(840508),
    D = t(866665),
    C = t(408278),
    E = t(772838),
    F = t(872351),
    P = t(708988),
    S = t(789645);
function K(e, n, t) {
    let i = e.filter((e) => e !== n.choiceId),
        r = null == t ? i.length : Math.min(t, i.length);
    return [...i.slice(0, r), n.choiceId, ...i.slice(r)];
}
function q(e) {
    let { icon: n, label: t, disabled: r, onClick: a } = e;
    return (0, i.jsx)(D.m, {
        text: t,
        children: (0, i.jsx)(C.K, {
            size: "sm",
            variant: "secondary",
            icon: n,
            "aria-label": t,
            disabled: r,
            onClick: a,
        }),
    });
}
function V(e) {
    let { drag: n, text: t, hintId: r } = e;
    return (0, i.jsx)("div", {
        ref: (e) => {
            n(e);
        },
        className: x.b3,
        tabIndex: 0,
        role: "button",
        "aria-roledescription": p.intl.string(g.default.jruV65),
        "aria-label": p.intl.formatToPlainString(g.default["ZEO+L0"], { choice: t }),
        "aria-describedby": r,
        children: (0, i.jsx)(E.DragIcon, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
    });
}
function G(e) {
    let { dragType: n, choice: t, index: r, count: a, full: s, hintId: l, onDrop: d, onMove: c, onRemove: u } = e,
        [{ isDragging: h }, m, f] = (0, W.i)({
            type: n,
            item: () => ({ choiceId: t.id, rankedIndex: r }),
            collect: (e) => ({ isDragging: e.isDragging() }),
        }),
        [{ dropSide: k }, y] = (0, U.H)({
            accept: n,
            canDrop: (e) => null != e.rankedIndex || !s,
            drop: (e) => d(e, r),
            collect: (e) => {
                let n = e.getItem();
                return null != n && e.isOver({ shallow: !0 }) && e.canDrop() && n.choiceId !== t.id
                    ? { dropSide: null != n.rankedIndex && n.rankedIndex < r ? "after" : "before" }
                    : { dropSide: null };
            },
        });
    return (0, i.jsxs)("li", {
        ref: (e) => {
            (y(e), f(e));
        },
        className: I()(x.IL, { [x.ho]: h, [x.ne]: "before" === k, [x.O3]: "after" === k }),
        children: [
            (0, i.jsx)(V, { drag: m, text: t.text, hintId: l }),
            (0, i.jsx)(o.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                className: x.mW,
                "aria-hidden": !0,
                children: r + 1,
            }),
            (0, i.jsx)("span", { className: x.n4, dir: "auto", children: t.text }),
            (0, i.jsx)(q, {
                icon: F.ArrowSmallUpIcon,
                label: p.intl.formatToPlainString(g.default.hTrL89, { choice: t.text }),
                disabled: 0 === r,
                onClick: () => c(r - 1),
            }),
            (0, i.jsx)(q, {
                icon: P.ArrowSmallDownIcon,
                label: p.intl.formatToPlainString(g.default.y6C60S, { choice: t.text }),
                disabled: r === a - 1,
                onClick: () => c(r + 1),
            }),
            (0, i.jsx)(q, {
                icon: S.XSmallIcon,
                label: p.intl.formatToPlainString(g.default["69lK34"], { choice: t.text }),
                onClick: u,
            }),
        ],
    });
}
function Q(e) {
    let { dragType: n, choice: t, full: r, hintId: a, onAdd: o } = e,
        [{ isDragging: s }, l, c] = (0, W.i)({
            type: n,
            item: () => ({ choiceId: t.id, rankedIndex: null }),
            collect: (e) => ({ isDragging: e.isDragging() }),
        });
    return (0, i.jsxs)("li", {
        ref: (e) => {
            c(e);
        },
        className: I()(x.IL, { [x.ho]: s }),
        children: [
            (0, i.jsx)(V, { drag: l, text: t.text, hintId: a }),
            (0, i.jsx)("span", { className: x.n4, dir: "auto", children: t.text }),
            (0, i.jsx)(d.$, {
                size: "sm",
                variant: "primary",
                text: p.intl.string(g.default.ShDjDb),
                "aria-label": p.intl.formatToPlainString(g.default.mDRZoH, { choice: t.text }),
                disabled: r,
                onClick: o,
            }),
        ],
    });
}
function X(e) {
    let { question: n, body: t, answer: r, onChange: a } = e,
        s = r?.rankedChoiceIds ?? [],
        l = t.rankTop?.value ?? t.choices.length,
        d = s.length >= l,
        c = new Map(t.choices.map((e) => [e.id, e])),
        u = t.choices.filter((e) => {
            let { id: n } = e;
            return !s.includes(n);
        }),
        h = `native-survey-rank-${n.id}`,
        m = `native-survey-rank-${n.id}-drag-hint`;
    function f(e) {
        return a(e.length > 0 ? { questionId: n.id, rankedChoiceIds: e } : null);
    }
    let [y, w] = (0, U.H)({
            accept: h,
            canDrop: (e) => null != e.rankedIndex || !d,
            drop: (e, n) => {
                n.didDrop() || f(K(s, e, null));
            },
            collect: (e) => {
                let n = e.getItem(),
                    t = null != n && null == n.rankedIndex;
                return { active: t && !d, refused: t && d && e.isOver() };
            },
        }),
        [b, T] = (0, U.H)({
            accept: h,
            canDrop: (e) => null != e.rankedIndex,
            drop: (e) => f(s.filter((n) => n !== e.choiceId)),
            collect: (e) => ({ active: e.getItem()?.rankedIndex != null }),
        }),
        $ =
            null != t.rankTop
                ? p.intl.formatToPlainString(g.default.h9Bg0P, { count: l })
                : p.intl.string(g.default["PmTEw/"]);
    return (0, i.jsxs)(v, {
        ...e,
        hint: $,
        children: [
            (0, i.jsx)(k.A, { id: m, children: p.intl.string(g.default.hARiEJ) }),
            (0, i.jsxs)("div", {
                className: x.Tm,
                children: [
                    (0, i.jsxs)("div", {
                        ref: (e) => {
                            w(e);
                        },
                        className: I()(x.QY, x.KQ, { [x.yz]: y.active, [x.eE]: y.refused }),
                        children: [
                            (0, i.jsx)(o.E, {
                                variant: "body-sm/semibold",
                                color: "text-default",
                                children: p.intl.string(g.default["kS/htE"]),
                            }),
                            0 === s.length
                                ? (0, i.jsx)(o.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      className: x.IF,
                                      children: p.intl.string(g.default["4VVMQ4"]),
                                  })
                                : (0, i.jsx)("ol", {
                                      className: x.HY,
                                      children: s.map((e, n) => {
                                          let t = c.get(e);
                                          return null == t
                                              ? null
                                              : (0, i.jsx)(
                                                    G,
                                                    {
                                                        dragType: h,
                                                        choice: t,
                                                        index: n,
                                                        count: s.length,
                                                        full: d,
                                                        hintId: m,
                                                        onDrop: (e, n) => f(K(s, e, n)),
                                                        onMove: (e) =>
                                                            f(
                                                                (function (e, n, t) {
                                                                    let i = [...e],
                                                                        [r] = i.splice(n, 1);
                                                                    return (i.splice(t, 0, r), i);
                                                                })(s, n, e),
                                                            ),
                                                        onRemove: () => f(s.filter((n) => n !== e)),
                                                    },
                                                    e,
                                                );
                                      }),
                                  }),
                            y.refused &&
                                (0, i.jsx)(o.E, {
                                    variant: "body-sm/medium",
                                    color: "text-feedback-critical",
                                    role: "status",
                                    children: p.intl.string(g.default.ZlHvgh),
                                }),
                        ],
                    }),
                    (u.length > 0 || b.active) &&
                        (0, i.jsxs)("div", {
                            ref: (e) => {
                                T(e);
                            },
                            className: I()(x.QY, x.KQ, { [x.yz]: b.active }),
                            children: [
                                (0, i.jsx)(o.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-default",
                                    children: p.intl.string(g.default["+WjZ1W"]),
                                }),
                                0 === u.length
                                    ? (0, i.jsx)(o.E, {
                                          variant: "body-sm/normal",
                                          color: "text-muted",
                                          className: x.IF,
                                          children: p.intl.string(g.default.fD9jT0),
                                      })
                                    : null,
                                u.length > 0 &&
                                    (0, i.jsx)("ul", {
                                        className: x.HY,
                                        children: u.map((e) =>
                                            (0, i.jsx)(
                                                Q,
                                                {
                                                    dragType: h,
                                                    choice: e,
                                                    full: d,
                                                    hintId: m,
                                                    onAdd: () => f([...s, e.id]),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { question: n, body: t, answer: r, onChange: a, labelId: s } = e,
        l = [];
    for (let e = t.minValue; e <= t.maxValue; e++) l.push(e);
    let d = `native-survey-scale-${n.id}`,
        c = `${d}-min`,
        u = `${d}-max`;
    return (0, i.jsx)(v, {
        ...e,
        children: (0, i.jsx)("div", {
            className: x.UD,
            children: (0, i.jsxs)("div", {
                className: x.hs,
                children: [
                    (0, i.jsx)("div", {
                        className: x.up,
                        role: "radiogroup",
                        "aria-labelledby": s,
                        children: l.map((e, s) => {
                            let h =
                                    0 === s && "" !== t.minLabel
                                        ? c
                                        : s === l.length - 1 && "" !== t.maxLabel
                                          ? u
                                          : void 0,
                                m = `${d}-${e}`;
                            return (0, i.jsxs)(
                                "div",
                                {
                                    className: x.Io,
                                    children: [
                                        (0, i.jsx)("input", {
                                            id: m,
                                            className: x.UU,
                                            type: "radio",
                                            name: d,
                                            value: e,
                                            checked: r?.value === e,
                                            "aria-describedby": h,
                                            onChange: () => a({ questionId: n.id, value: e }),
                                        }),
                                        (0, i.jsx)("label", {
                                            htmlFor: m,
                                            className: x.W8,
                                            children: (0, i.jsx)(o.E, {
                                                variant: "body-md/medium",
                                                color: "currentColor",
                                                children: e,
                                            }),
                                        }),
                                    ],
                                },
                                e,
                            );
                        }),
                    }),
                    ("" !== t.minLabel || "" !== t.maxLabel) &&
                        (0, i.jsxs)("div", {
                            className: x.YK,
                            children: [
                                (0, i.jsx)(o.E, {
                                    id: c,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: (0, i.jsx)("span", { dir: "auto", children: t.minLabel }),
                                }),
                                (0, i.jsx)(o.E, {
                                    id: u,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: (0, i.jsx)("span", { dir: "auto", children: t.maxLabel }),
                                }),
                            ],
                        }),
                ],
            }),
        }),
    });
}
t(321073);
var M = t(103557);
function Z(e) {
    let { question: n, body: t, answer: a, onChange: o, labelId: s } = e,
        l = a?.text ?? "",
        d = t.maxLength?.value,
        c = r.useRef(null);
    function h(e) {
        return o("" !== e ? { questionId: n.id, text: e } : null);
    }
    return (
        r.useLayoutEffect(() => {
            c.current?.setAttribute("dir", "auto");
        }, [t.multiline]),
        (0, i.jsx)(v, {
            ...e,
            children: t.multiline
                ? (0, i.jsx)(M.f, {
                      "aria-labelledby": s,
                      value: l,
                      onChange: h,
                      maxLength: d,
                      showCharacterCount: null != d,
                      autosize: !0,
                      rows: 4,
                      inputRef: c,
                  })
                : (0, i.jsx)(u.k, {
                      "aria-labelledby": s,
                      value: l,
                      onChange: h,
                      maxLength: d,
                      showCharacterCount: null != d,
                      dir: "auto",
                  }),
        })
    );
}
function z(e) {
    let { progress: n } = e;
    return null == n || n.pageIndex + 1 >= n.estimatedPageCount;
}
function Y(e) {
    let { question: n, answer: t, onChange: r, errors: a, page: o } = e,
        s = { question: n, errors: a, page: o, labelId: `${y(n.id)}-label`, errorId: `${y(n.id)}-error` },
        l = t?.kind,
        { kind: d } = n;
    switch (d.oneofKind) {
        case "singleChoice":
        case "dropdown":
        case "multiChoice": {
            let e =
                "singleChoice" === d.oneofKind
                    ? d.singleChoice
                    : "dropdown" === d.oneofKind
                      ? d.dropdown
                      : d.multiChoice;
            return (0, i.jsx)($, {
                ...s,
                variant: "singleChoice" === d.oneofKind ? "single" : "dropdown" === d.oneofKind ? "dropdown" : "multi",
                body: e,
                answer: l?.oneofKind === "choices" ? l.choices : void 0,
                onChange: (e) => r(null != e ? { kind: { oneofKind: "choices", choices: e } } : null),
            });
        }
        case "rank":
            return (0, i.jsx)(X, {
                ...s,
                body: d.rank,
                answer: l?.oneofKind === "ranked" ? l.ranked : void 0,
                onChange: (e) => r(null != e ? { kind: { oneofKind: "ranked", ranked: e } } : null),
            });
        case "freeText":
            return (0, i.jsx)(Z, {
                ...s,
                body: d.freeText,
                answer: l?.oneofKind === "text" ? l.text : void 0,
                onChange: (e) => r(null != e ? { kind: { oneofKind: "text", text: e } } : null),
            });
        case "scale":
            return (0, i.jsx)(A, {
                ...s,
                body: d.scale,
                answer: l?.oneofKind === "number" ? l.number : void 0,
                onChange: (e) => r(null != e ? { kind: { oneofKind: "number", number: e } } : null),
            });
        case "matrix":
            return (0, i.jsx)(R, {
                ...s,
                body: d.matrix,
                answer: l?.oneofKind === "matrix" ? l.matrix : void 0,
                onChange: (e) => r(null != e ? { kind: { oneofKind: "matrix", matrix: e } } : null),
            });
        case "info":
            return (0, i.jsx)(v, { ...s });
        case void 0:
            return null;
    }
}
function H(e) {
    let { page: n, request: t, onRequestChange: u, errors: h, onSubmit: m, submitting: f } = e,
        { content: k, pageId: v, progress: T } = n;
    if (
        (r.useEffect(() => {
            if (0 === h.length) return;
            let e = h.find((e) => {
                let { questionId: n } = e;
                return 0 !== n;
            });
            document.getElementById(null != e ? y(e.questionId) : w)?.focus();
        }, [h]),
        n.status === a.Ph.COMPLETE || n.status === a.Ph.ENDED)
    )
        return (0, i.jsx)("div", {
            className: x.MY,
            children: (0, i.jsx)(o.E, {
                variant: "body-md/normal",
                color: "text-default",
                children: (0, i.jsx)("span", { dir: "auto", children: n.endMessage }),
            }),
        });
    function $(e, n) {
        u((0, c.$s)(t, e, n));
    }
    let O = h.find((e) => {
            let { questionId: n } = e;
            return 0 === n;
        }),
        j = (0, c.uO)(t, v)?.kind,
        I = (T?.pageIndex ?? 0) + 1,
        _ = Math.max(T?.estimatedPageCount ?? 1, I),
        R = p.intl.formatToPlainString(g.default.onSd4S, { current: I, total: _ });
    return (0, i.jsxs)("div", {
        className: x.MY,
        children: [
            _ > 1 &&
                (0, i.jsx)(s.z, { value: I, minValue: 0, maxValue: _, size: "sm", "aria-label": R, valueLabel: R }),
            h.length > 0 &&
                (0, i.jsx)("div", {
                    id: w,
                    tabIndex: -1,
                    children: (0, i.jsx)(l.w, {
                        type: "critical",
                        role: "alert",
                        message:
                            null != O
                                ? "" !== O.message
                                    ? O.message
                                    : b(O, n)
                                : p.intl.formatToPlainString(g.default.HwqwCr, { count: h.length }),
                    }),
                }),
            "questions" === k.oneofKind &&
                k.questions.questions.map((e) =>
                    (0, i.jsx)(
                        Y,
                        {
                            question: e,
                            answer: (0, c.uO)(t, e.id),
                            errors: h.filter((n) => {
                                let { questionId: t } = n;
                                return t === e.id;
                            }),
                            page: n,
                            onChange: (n) => $(e.id, n),
                        },
                        e.id,
                    ),
                ),
            "conjoint" === k.oneofKind &&
                (0, i.jsx)(
                    B,
                    {
                        pageId: v,
                        conjoint: k.conjoint,
                        answer: j?.oneofKind === "conjoint" ? j.conjoint : void 0,
                        onChange: (e) => $(v, null != e ? { kind: { oneofKind: "conjoint", conjoint: e } } : null),
                    },
                    `${v}-${n.revision}`,
                ),
            "maxdiff" === k.oneofKind &&
                (0, i.jsx)(L, {
                    pageId: v,
                    maxdiff: k.maxdiff,
                    answer: j?.oneofKind === "maxdiff" ? j.maxdiff : void 0,
                    onChange: (e) => $(v, { kind: { oneofKind: "maxdiff", maxdiff: e } }),
                }),
            null != m &&
                (0, i.jsx)("div", {
                    className: x.qr,
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        text: p.intl.string(z(n) ? g.default.GyKIes : g.default["LH/X6e"]),
                        loading: f,
                        onClick: m,
                    }),
                }),
        ],
    });
}
