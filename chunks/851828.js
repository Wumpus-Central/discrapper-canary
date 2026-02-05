n.d(t, { A: () => h });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(311907),
    o = n(397927),
    d = n(73153),
    c = n(236899),
    u = n(661251),
    m = n(665646);
function h() {
    let [e, t] = s.useState(""),
        n = (0, r.bG)(
            [c.A],
            () =>
                c.A.getAllWordsSorted().map((e, t) => {
                    let [n, a] = e;
                    return { word: n, count: a, value: a, idx: t };
                }),
            [],
            r.My,
        ),
        i = s.useMemo(
            () =>
                0 === e.length
                    ? n
                    : n.filter((t) => {
                          let { word: n } = t;
                          return n.toLowerCase().startsWith(e.toLowerCase());
                      }),
            [n, e],
        ),
        h = s.useCallback(() => {
            d.h.dispatch({ type: "DEV_TOOLS_WORD_FREQUENCY_RESET" });
        }, []);
    return (0, a.jsxs)("div", {
        className: l()(u.nd, m.nd),
        children: [
            n.length > 0 &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(o.Text, {
                            variant: "text-md/semibold",
                            className: m.Gf,
                            children: ["Word Frequencies (", i.length, " unique words)"],
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            children:
                                "This is a list of the most common short words found in messages sent and received by this client. They're ignored by the mention suggestions experiment to avoid distracting suggestions. These statistics are stored locally only.",
                        }),
                        (0, a.jsxs)("div", {
                            className: m.ND,
                            children: [
                                (0, a.jsx)(o.IWV, {
                                    size: "sm",
                                    query: e,
                                    onChange: t,
                                    onClear: () => t(""),
                                    placeholder: "Filter by words starting with...",
                                }),
                                (0, a.jsx)(o.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "Clear Statistics",
                                    onClick: h,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: m.u4,
                            children: (0, a.jsx)(o.IpV, {
                                className: m.sb,
                                children: (0, a.jsxs)("div", {
                                    className: m.r6,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: l()(u.ZR, m.qd),
                                            children: [
                                                (0, a.jsx)("div", { className: m.Xd, children: "Index" }),
                                                (0, a.jsx)("div", { className: m.hH, children: "Word" }),
                                                (0, a.jsx)("div", { className: m.gR, children: "Count" }),
                                            ],
                                        }),
                                        i.map((e) => {
                                            let { word: t, value: n, idx: s } = e;
                                            return (0, a.jsxs)(
                                                "div",
                                                {
                                                    className: l()(u.jD, m.jD),
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: m.Xd,
                                                            children: (0, a.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: s + 1,
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: m.hH,
                                                            children: (0, a.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: t,
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: m.gR,
                                                            children: (0, a.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: n,
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                `${t}-${s}`,
                                            );
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            0 === n.length &&
                (0, a.jsx)("div", {
                    className: m.p$,
                    children: (0, a.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: "Load messages in a channel to see word frequency analysis.",
                    }),
                }),
            n.length > 0 &&
                0 === i.length &&
                e.length > 0 &&
                (0, a.jsx)("div", {
                    className: m.p$,
                    children: (0, a.jsxs)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children: ['No words found starting with "', e, '".'],
                    }),
                }),
        ],
    });
}
