i.d(a, { default: () => f });
var e = i(477900),
    l = i(582128),
    n = i(17928),
    s = i(189213),
    r = i(95477),
    u = i(948230),
    d = i(972786),
    o = i(818085),
    c = i(375708);
function f(t) {
    let { projectId: a, transitionState: i, onClose: f } = t,
        h = (0, n.bG)([d.A], () => d.A.getProject(a), [a]),
        [b, g] = l.useState(h?.name ?? ""),
        [k, p] = l.useState(!1),
        [C, m] = l.useState(null),
        v = b.trim(),
        x = null != h && v !== h.name,
        y = l.useCallback((t) => {
            g(t), m(null);
        }, []),
        S = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null != h && x)) {
                    if ("" === v) return void m(c.intl.string(o.default.I2hgEB));
                    p(!0), m(null);
                    try {
                        if (!(await (0, u.oB)(a, v)).ok) return void m(c.intl.string(o.default.NkPaHG));
                        await f();
                    } catch {
                        m(c.intl.string(o.default.NkPaHG));
                    } finally {
                        p(!1);
                    }
                }
            },
            [x, f, h, a, v],
        );
    return (0, e.jsx)("form", {
        onSubmit: S,
        children: (0, e.jsx)(s.Modal, {
            transitionState: i,
            onClose: f,
            title: c.intl.string(o.default["X+MWsC"]),
            size: "md",
            actions: [
                { text: c.intl.string(c.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: k },
                {
                    text: c.intl.string(c.t["R3BPH+"]),
                    variant: "primary",
                    type: "submit",
                    onClick: S,
                    loading: k,
                    disabled: !x || "" === v,
                },
            ],
            children: (0, e.jsx)(r.k, {
                label: c.intl.string(o.default.u9UpIx),
                hideLabel: !0,
                value: b,
                onChange: y,
                error: C,
                maxLength: 128,
                disabled: k,
                fullWidth: !0,
                autoFocus: !0,
            }),
        }),
    });
}
