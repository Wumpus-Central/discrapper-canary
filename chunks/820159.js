"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(253018),
    l = n(311907),
    u = n(155718),
    c = n(861382),
    d = n(31717),
    _ = n(522602),
    f = n(317681),
    p = n(35277),
    h = n(711371),
    m = n(985018),
    g = n(562650);
function E(e, t, n) {
    let { attributes: i, children: a, element: s } = t;
    switch (s.type) {
        case "applicationCommand":
            let o = c.A.getActiveCommand(n),
                l = 0,
                u = 0;
            if (null != o && o.id === s.command.id) {
                let t = f.O7(e);
                for (let e of o.options ?? []) t.includes(e.name) ? u++ : l++;
            }
            let d = {};
            if (l > 0) {
                let e;
                (e =
                    u > 0
                        ? m.intl.formatToPlainString(m.t.BP8N0K, { count: l })
                        : m.intl.formatToPlainString(m.t.lziVC9, { count: l })),
                    (d["data-trailing-placeholder"] = e);
            }
            return (0, r.jsx)("div", { className: g.uB, ...i, ...d, children: a });
        case "applicationCommandOption":
            return (0, r.jsx)(A, { attributes: i, channelId: n, element: s, children: a });
        default:
            return null;
    }
}
let A = (e) => {
    let t,
        { channelId: n, element: a, attributes: f, children: E } = e,
        A = (0, o.f7)(),
        I = (0, o.zL)(),
        T = (0, o.RV)(),
        { optionType: y, errored: S } = (0, l.cf)(
            [c.A],
            () => ({
                optionType: c.A.getOption(n, a.optionName)?.type,
                errored: c.A.getOptionState(n, a.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, a.optionName],
        ),
        v = (0, l.bG)([_.A], () => _.A.getUpload(n, a.optionName, d.C.SlashCommand), [n, a.optionName]),
        C = a.children[a.children.length - 1],
        b = null != C && h.l5.isText(C) && C.text.endsWith("\n"),
        N = s()(g.S0, g.xP, { [g.t$]: I && A, [g.$2]: (!I || !A) && S }),
        R = i.useCallback(() => {
            h.VW.isVoid(T, a) || p.b.selectCommandOption(T, a.optionName, !0);
        }, [T, a]);
    return (
        (t =
            y === u.n4.ATTACHMENT
                ? v?.filename != null
                    ? (0, r.jsxs)("span", {
                          className: s()(g._K, g.dU),
                          contentEditable: !1,
                          children: [v.filename, E],
                      })
                    : (0, r.jsxs)("span", {
                          className: s()(g._K, g.ZI),
                          contentEditable: !1,
                          children: [m.intl.string(m.t.GRdFni), E],
                      })
                : (0, r.jsxs)("span", {
                      className: g._K,
                      children: [E, b ? (0, r.jsx)("span", { className: g.Nx, contentEditable: !1 }) : null],
                  })),
        (0, r.jsxs)("span", {
            ...f,
            className: N,
            children: [
                (0, r.jsxs)("span", {
                    className: g.gA,
                    contentEditable: !1,
                    onClick: R,
                    children: [a.optionDisplayName, "​"],
                }),
                t,
                (0, r.jsx)("span", { contentEditable: !1, children: "​" }),
            ],
        })
    );
};
