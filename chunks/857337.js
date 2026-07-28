i.d(a, { default: () => k });
var n = i(477900),
    l = i(582128),
    e = i(17928),
    r = i(314116),
    s = i(189213),
    u = i(292666),
    o = i(834730),
    c = i(821609),
    d = i(948230),
    m = i(972786),
    f = i(818085),
    g = i(375708),
    h = i(255115);
function k(t) {
    let { projectId: a, transitionState: i, onClose: k } = t,
        x = (0, e.bG)([m.A], () => m.A.getProject(a), [a]),
        [C, y] = l.useState(x?.name ?? ""),
        [b, v] = l.useState(!1),
        [p, w] = l.useState(null),
        j = C.trim(),
        E = null != x && j !== x.name,
        H = l.useCallback(async () => {
            if (null == x || j === x.name) return !0;
            if ("" === j) return w(g.intl.string(f.default.I2hgEB)), !1;
            v(!0), w(null);
            try {
                if (!(await (0, d.oB)(a, j)).ok) return w(g.intl.string(f.default.NkPaHG)), !1;
                return y(j), !0;
            } catch {
                return w(g.intl.string(f.default.NkPaHG)), !1;
            } finally {
                v(!1);
            }
        }, [x, a, j]),
        N = l.useCallback(async () => {
            E && (await H()) && (await k());
        }, [E, k, H]),
        P = l.useCallback((t) => {
            y(t), w(null);
        }, []),
        S = l.useCallback(
            async (t) => {
                "Enter" === t.key && (t.preventDefault(), await N());
            },
            [N],
        ),
        B = l.useCallback(() => {
            null != x &&
                (0, r.A)({
                    title: g.intl.formatToPlainString(f.default.ZokHVz, { name: x.name }),
                    subtitle: g.intl.string(f.default.NmF939),
                    confirmText: g.intl.string(g.t.oyYWHE),
                    variant: "critical",
                    onConfirm: async () => {
                        if (!(await (0, d.xx)(a)).ok) throw Error(g.intl.string(f.default.tqKZCi));
                        await k();
                    },
                });
        }, [k, x, a]);
    return (0, n.jsx)(s.Modal, {
        transitionState: i,
        onClose: k,
        title: g.intl.string(g.t["3D5yo/"]),
        size: "md",
        actions: [
            { text: g.intl.string(g.t["ETE/oC"]), variant: "secondary", onClick: k, disabled: b },
            {
                text: g.intl.string(g.t["R3BPH+"]),
                variant: "primary",
                onClick: N,
                loading: b,
                disabled: !E || "" === j,
            },
        ],
        children: (0, n.jsxs)("div", {
            className: h.W0,
            children: [
                (0, n.jsx)(u.k, {
                    label: g.intl.string(f.default.Z6F624),
                    value: C,
                    onChange: P,
                    onKeyDown: S,
                    error: p,
                    maxLength: 128,
                    disabled: b,
                    fullWidth: !0,
                    autoFocus: !0,
                }),
                (0, n.jsxs)("div", {
                    className: h.aR,
                    children: [
                        (0, n.jsxs)("div", {
                            className: h.lh,
                            children: [
                                (0, n.jsx)(o.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    children: g.intl.string(f.default["KV+ICm"]),
                                }),
                                (0, n.jsx)(o.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: g.intl.string(f.default["4hUJBy"]),
                                }),
                            ],
                        }),
                        (0, n.jsx)(c.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: g.intl.string(g.t.oyYWHE),
                            onClick: B,
                        }),
                    ],
                }),
            ],
        }),
    });
}
