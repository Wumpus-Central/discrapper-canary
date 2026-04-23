n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(404778),
    a = n(834730),
    r = n(282956),
    o = n(573648),
    d = n(997509),
    c = n(447066),
    u = n(780765),
    m = n(836803);
function g(e) {
    let {
            integrations: t,
            editedIntegration: n,
            guild: g,
            platformType: h,
            labelText: x,
            descriptionText: p,
            helpText: A,
            errors: b,
            canNavigate: f,
        } = e,
        _ = o.A.get(h),
        j = l.useCallback(
            async (e) => {
                f() && (await d.A.enableIntegration(g.id, e.type, e.id), r.A.startEditingIntegration(e.id));
            },
            [f, g.id],
        ),
        N = l.useCallback(
            (e) => {
                f() && (e.id === n?.id && r.A.stopEditingIntegration(), d.A.disableIntegration(g.id, e.id));
            },
            [f, n, g.id],
        ),
        v = l.useCallback(
            (e) => {
                f() && (e === n?.id ? r.A.stopEditingIntegration() : r.A.startEditingIntegration(e));
            },
            [f, n],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.A, {
                name: x,
                icon: _?.icon.whiteSVG,
                iconBackgroundColor: _?.color,
                iconClassName: m.tV,
                description: p,
                isHeader: !0,
            }),
            (0, i.jsx)(s.c, { className: m.zN }),
            "message" in b &&
                (0, i.jsx)(a.E, {
                    className: m.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/normal",
                    children: b.message,
                }),
            t.map((e) =>
                (0, i.jsx)(
                    u.A,
                    {
                        integration: e,
                        editedIntegration: n,
                        guild: g,
                        isExpanded: n?.id === e.id,
                        onEnable: j,
                        onDisable: N,
                        onToggleExpand: () => v(e.id),
                    },
                    e.id,
                ),
            ),
            (0, i.jsx)(a.E, { className: m.BK, color: "text-muted", variant: "text-sm/normal", children: A }),
        ],
    });
}
