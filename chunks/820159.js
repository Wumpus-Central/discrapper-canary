"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(40672);
function g(e, t, n) {
    let { attributes: i, children: s, element: a } = t;
    switch (a.type) {
        case "applicationCommand":
            let o = c.A.getActiveCommand(n),
                l = 0,
                u = 0;
            if (null != o && o.id === a.command.id) {
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
            return (0, r.jsx)("div", { className: E.uB, ...i, ...d, children: s });
        case "applicationCommandOption":
            return (0, r.jsx)(A, { attributes: i, channelId: n, element: a, children: s });
        default:
            return null;
    }
}
let A = (e) => {
    let t,
        { channelId: n, element: s, attributes: f, children: g } = e,
        A = (0, o.f7)(),
        I = (0, o.zL)(),
        T = (0, o.RV)(),
        { optionType: S, errored: y } = (0, l.cf)(
            [c.A],
            () => ({
                optionType: c.A.getOption(n, s.optionName)?.type,
                errored: c.A.getOptionState(n, s.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, s.optionName],
        ),
        v = (0, l.bG)([_.A], () => _.A.getUpload(n, s.optionName, d.C.SlashCommand), [n, s.optionName]),
        N = s.children[s.children.length - 1],
        C = null != N && h.l5.isText(N) && N.text.endsWith("\n"),
        b = a()(E.S0, E.xP, { [E.t$]: I && A, [E.$2]: (!I || !A) && y }),
        R = i.useCallback(() => {
            h.VW.isVoid(T, s) || p.b.selectCommandOption(T, s.optionName, !0);
        }, [T, s]);
    return (
        (t =
            S === u.n4.ATTACHMENT
                ? v?.filename != null
                    ? (0, r.jsxs)("span", {
                          className: a()(E._K, E.dU),
                          contentEditable: !1,
                          children: [v.filename, g],
                      })
                    : (0, r.jsxs)("span", {
                          className: a()(E._K, E.ZI),
                          contentEditable: !1,
                          children: [m.intl.string(m.t.GRdFni), g],
                      })
                : (0, r.jsxs)("span", {
                      className: E._K,
                      children: [g, C ? (0, r.jsx)("span", { className: E.Nx, contentEditable: !1 }) : null],
                  })),
        (0, r.jsxs)("span", {
            ...f,
            className: b,
            children: [
                (0, r.jsxs)("span", {
                    className: E.gA,
                    contentEditable: !1,
                    onClick: R,
                    children: [s.optionDisplayName, "​"],
                }),
                t,
                (0, r.jsx)("span", { contentEditable: !1, children: "​" }),
            ],
        })
    );
};
