a.d(l, { P: () => M, default: () => A });
var t = a(477900),
    n = a(582128),
    s = a(855986),
    r = a(834730),
    o = a(320448),
    d = a(847374),
    c = a(939249),
    i = a(738188),
    u = a(430993),
    x = a(821609),
    m = a(364840),
    h = a(224640),
    j = a(20742),
    y = a(990779),
    b = a(488412),
    p = a(667931),
    k = a(311540);
let v = { collapsed: new Set(), revealed: new Set() };
var f = a(296032),
    g = a(872892);
function N(e) {
    return `conjure-perf-trace-${e}`;
}
function $(e) {
    let { start: l, end: a, extent: n, barClass: s, duration: o } = e,
        d = (l / n) * 100,
        c = ((a - l) / n) * 100;
    return (0, t.jsxs)("div", {
        className: g.c1,
        style: { "--custom-conjure-perf-trace-left": String(d), "--custom-conjure-perf-trace-width": String(c) },
        children: [
            (0, t.jsx)("div", { className: s }),
            (0, t.jsx)(r.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${g.p0} ${d + c > 85 ? g.EU : g.jh}`,
                children: o,
            }),
        ],
    });
}
function E(e) {
    let l,
        { node: a, extent: s, collapsed: u, selected: x, onSelect: m, onToggle: h, onExpandSubtree: j } = e,
        y = a.children.length > 0,
        p = u ? o.ChevronSmallRightIcon : d.ChevronSmallDownIcon,
        k = n.useCallback(
            (e) => {
                (e.shiftKey && j(a.key), m(a.key));
            },
            [a.key, j, m],
        ),
        v = n.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? j(a.key) : h(a.key));
            },
            [a.key, j, h],
        );
    return (0, t.jsxs)(c.D, {
        tag: "div",
        role: "treeitem",
        id: N(a.key),
        tabIndex: -1,
        "aria-level": a.depth + 1,
        "aria-expanded": y ? !u : void 0,
        "aria-selected": x,
        className: `${g.$y} ${x ? g.wQ : ""}`,
        onClick: k,
        children: [
            (0, t.jsxs)("div", {
                className: g.So,
                style: { "--custom-conjure-perf-trace-depth": String(a.depth) },
                children: [
                    y
                        ? (0, t.jsx)(c.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: g.ai,
                              onClick: v,
                              children: (0, t.jsx)(p, { size: "xs", color: "currentColor" }),
                          })
                        : (0, t.jsx)("span", { className: g.YJ }),
                    (0, t.jsx)(r.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: g.U9,
                        children: a.descendants > 0 ? a.descendants : "",
                    }),
                    (0, t.jsx)("span", { className: `${g.nf} ${f.o[a.category]}` }),
                    (0, t.jsx)(r.E, {
                        variant: "body-sm/semibold",
                        color: "text-strong",
                        className: g.eu,
                        children: a.service,
                    }),
                    (0, t.jsx)(r.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: g.MQ,
                        children: a.operation,
                    }),
                    a.count > 1
                        ? (0, t.jsx)(r.E, {
                              variant: "body-xs/semibold",
                              color: "text-default",
                              className: g.qS,
                              children: `\xd7${a.count}`,
                          })
                        : null,
                    a.failed ? (0, t.jsx)(i.WarningIcon, { size: "xs", color: "currentColor", className: g.ik }) : null,
                ],
            }),
            (0, t.jsx)($, {
                start: a.start,
                end: a.end,
                extent: s,
                barClass:
                    ((l = a.marker ? `${g.M0} ${g.Mx}` : g.M0),
                    a.failed ? `${l} ${g.Nh}` : a.running ? `${l} ${g.rF}` : `${l} ${f.o[a.category]}`),
                duration: (0, b.n2)(a),
            }),
        ],
    });
}
function S(e) {
    let { row: l, extent: a, selected: n, onReveal: s } = e;
    return (0, t.jsxs)(c.D, {
        tag: "div",
        role: "treeitem",
        id: N(l.key),
        tabIndex: -1,
        "aria-level": l.depth + 1,
        "aria-expanded": !1,
        "aria-selected": n,
        className: `${g.$y} ${n ? g.wQ : ""}`,
        onClick: () => s(l.parentKey),
        children: [
            (0, t.jsxs)("div", {
                className: g.So,
                style: { "--custom-conjure-perf-trace-depth": String(l.depth) },
                children: [
                    (0, t.jsx)("span", {
                        className: g.ai,
                        children: (0, t.jsx)(o.ChevronSmallRightIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, t.jsx)("span", { className: g.U9 }),
                    (0, t.jsx)("span", { className: `${g.nf} ${g.dL}` }),
                    (0, t.jsx)(r.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        className: g.MQ,
                        children: (0, b.oX)(l),
                    }),
                ],
            }),
            (0, t.jsx)($, {
                start: l.start,
                end: l.end,
                extent: a,
                barClass: `${g.M0} ${g.ab} ${g.dL}`,
                duration: (0, b.Zy)(l.totalMs),
            }),
        ],
    });
}
function C(e) {
    let { node: l } = e;
    return null == l
        ? (0, t.jsx)(r.E, {
              variant: "body-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, t.jsxs)("div", {
              className: g._0,
              children: [
                  (0, t.jsxs)("div", {
                      className: g.TQ,
                      children: [
                          (0, t.jsx)("span", { className: `${g.nf} ${f.o[l.category]}` }),
                          (0, t.jsx)(r.E, { variant: "body-sm/semibold", color: "text-strong", children: l.service }),
                          (0, t.jsx)(r.E, { variant: "body-sm/normal", color: "text-default", children: l.operation }),
                      ],
                  }),
                  (0, b.qL)(l).map((e) => {
                      let { title: l, rows: a } = e;
                      return (0, t.jsxs)(
                          n.Fragment,
                          {
                              children: [
                                  null == l
                                      ? null
                                      : (0, t.jsx)(r.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-strong",
                                            className: g.xd,
                                            children: l,
                                        }),
                                  a.map((e) => {
                                      let { label: l, value: a, block: s } = e;
                                      return (0, t.jsxs)(
                                          n.Fragment,
                                          {
                                              children: [
                                                  (0, t.jsx)(r.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "text-muted",
                                                      children: l,
                                                  }),
                                                  s
                                                      ? (0, t.jsx)(r.E, {
                                                            variant: "mono-md/bold",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: g.vl,
                                                            children: a,
                                                        })
                                                      : (0, t.jsx)(r.E, {
                                                            variant: "body-xs/normal",
                                                            color: "text-default",
                                                            tabularNumbers: !0,
                                                            selectable: !0,
                                                            children: a,
                                                        }),
                                              ],
                                          },
                                          l,
                                      );
                                  }),
                              ],
                          },
                          l ?? "timing",
                      );
                  }),
              ],
          });
}
function w(e) {
    let { trace: l } = e,
        a = n.useMemo(() => (0, k.k)(l), [l]);
    return (0, t.jsx)(f.A, { stats: a });
}
function I(e) {
    let { trace: l } = e,
        a = (function (e) {
            let l = n.useMemo(() => (null == e ? null : (0, p.TK)(e)), [e]),
                [a, t] = n.useState(() => (null == l ? v : (0, p.hB)(l))),
                [s, r] = n.useState(null),
                o = n.useRef(null == l ? new Set() : (0, p.x7)(l));
            n.useEffect(() => {
                if (null == l) return;
                let e = o.current;
                ((o.current = (0, p.x7)(l)), t((a) => (0, p._0)(a, l, e)));
            }, [l]);
            let d = n.useMemo(() => (null == l ? [] : (0, p.wu)(l, a)), [l, a]),
                c = n.useCallback(
                    (e) => {
                        let a = null == l ? null : (0, p.IE)(l, e);
                        null != a && t((e) => (0, p.TN)(e, a));
                    },
                    [l],
                ),
                i = n.useCallback((e) => {
                    t((l) => ({ ...l, revealed: new Set(l.revealed).add(e) }));
                }, []),
                u = n.useCallback(
                    (e) => {
                        let a = null == l ? null : (0, p.IE)(l, e);
                        null != a && t((e) => (0, p.H$)(e, a));
                    },
                    [l],
                ),
                x = n.useCallback(() => {
                    null != l && t((0, p.vH)(l));
                }, [l]),
                m = n.useCallback(() => {
                    null != l && t((0, p.rQ)(l));
                }, [l]),
                h = n.useCallback(() => {
                    null != l && t((0, p.hB)(l));
                }, [l]),
                j = d.find((e) => e.key === s);
            return {
                rows: d,
                collapsed: a.collapsed,
                selectedKey: s,
                selected: j?.kind === "node" ? j.node : null,
                toggle: c,
                reveal: i,
                expandSubtree: u,
                select: r,
                expandAll: x,
                collapseAll: m,
                reset: h,
            };
        })(l),
        { rows: s, collapsed: o, selected: d, selectedKey: c, select: i, toggle: h, reveal: j, expandSubtree: y } = a,
        k = (0, p.dj)(l),
        f = n.useMemo(() => (0, p.nF)(k), [k]),
        $ = f.length > 1 ? ((f[1] - f[0]) / k) * 100 : 100,
        I = n.useCallback(
            (e) => {
                let l,
                    a = s.findIndex((e) => e.key === c),
                    t = s[a];
                if ("ArrowDown" === e.key) l = s[Math.min(s.length - 1, a + 1)];
                else if ("ArrowUp" === e.key) l = s[Math.max(0, a - 1)];
                else if (null == t) return;
                else if ("smaller" === t.kind && ("ArrowRight" === e.key || "Enter" === e.key)) j(t.parentKey);
                else if ("node" === t.kind && "ArrowRight" === e.key && e.shiftKey) y(t.key);
                else if ("node" === t.kind && "ArrowRight" === e.key && o.has(t.key)) h(t.key);
                else {
                    if ("node" !== t.kind || "ArrowLeft" !== e.key || !(t.node.children.length > 0) || o.has(t.key))
                        return;
                    h(t.key);
                }
                (e.preventDefault(),
                    null != l && (i(l.key), document.getElementById(N(l.key))?.scrollIntoView({ block: "nearest" })));
            },
            [o, y, j, s, i, c, h],
        );
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(u.c, {
                children: [
                    (0, t.jsxs)("div", {
                        className: g.z,
                        children: [
                            (0, t.jsx)(r.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: (0, b.LK)(l),
                            }),
                            (0, t.jsx)(r.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: (0, b.Tl)(l),
                            }),
                            null == l.started_by
                                ? null
                                : (0, t.jsx)(r.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${l.started_by.trace_name}`,
                                  }),
                            0 === l.dropped
                                ? null
                                : (0, t.jsx)(r.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${(0, b.xo)(l.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, t.jsx)(w, { trace: l }),
                    (0, t.jsxs)("div", {
                        className: g.KE,
                        children: [
                            (0, t.jsx)(x.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: a.reset }),
                            (0, t.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: a.expandAll,
                            }),
                            (0, t.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: a.collapseAll,
                            }),
                            (0, t.jsx)(r.E, {
                                variant: "body-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, t.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == c ? void 0 : N(c),
                        className: g.Zu,
                        style: { "--custom-conjure-perf-trace-step": String($) },
                        onKeyDown: I,
                        children: [
                            (0, t.jsxs)("div", {
                                className: g.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, t.jsx)("div", {
                                        className: g.So,
                                        children: (0, t.jsx)(r.E, {
                                            variant: "body-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: g.c1,
                                        children: f.map((e) =>
                                            (0, t.jsx)(
                                                r.E,
                                                {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${g.io} ${(e / k) * 100 > 85 ? g.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / k) * 100),
                                                    },
                                                    children: (0, b.$Q)(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            s.map((e) =>
                                "node" === e.kind
                                    ? (0, t.jsx)(
                                          E,
                                          {
                                              node: e.node,
                                              extent: k,
                                              collapsed: o.has(e.key),
                                              selected: e.key === c,
                                              onSelect: i,
                                              onToggle: h,
                                              onExpandSubtree: y,
                                          },
                                          e.key,
                                      )
                                    : (0, t.jsx)(S, { row: e, extent: k, selected: e.key === c, onReveal: j }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, t.jsx)(m.j, { children: (0, t.jsx)(C, { node: d }) }),
        ],
    });
}
function M(e) {
    let { transitionState: l, onClose: a, trace: n } = e,
        s = n?.name ?? "Perf Trace";
    return (0, t.jsxs)(h.d, {
        transitionState: l,
        onClose: a,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, t.jsx)(j.rQ, { title: s }),
            null == n
                ? (0, t.jsx)(u.c, {
                      children: (0, t.jsx)(r.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, t.jsx)(I, { trace: n }),
        ],
    });
}
function A(e) {
    let { projectId: l, traceId: a, ...n } = e,
        r = (0, s.bG)([y.A], () => y.A.getTimingTrace(l, a), [l, a]);
    return (0, t.jsx)(M, { ...n, trace: r });
}
