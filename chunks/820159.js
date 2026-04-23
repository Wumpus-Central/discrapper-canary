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
    E = n(985018),
    m = n(494715);
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
                        ? E.intl.formatToPlainString(E.t.BP8N0K, { count: l })
                        : E.intl.formatToPlainString(E.t.lziVC9, { count: l })),
                    (d["data-trailing-placeholder"] = e);
            }
            return (0, r.jsx)("div", { className: m.uB, ...i, ...d, children: s });
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
        N = (0, l.bG)([_.A], () => _.A.getUpload(n, s.optionName, d.C.SlashCommand), [n, s.optionName]),
        v = s.children[s.children.length - 1],
        C = null != v && h.l5.isText(v) && v.text.endsWith("\n"),
        O = a()(m.S0, m.xP, { [m.t$]: I && A, [m.$2]: (!I || !A) && y }),
        R = i.useCallback(() => {
            h.VW.isVoid(T, s) || p.b.selectCommandOption(T, s.optionName, !0);
        }, [T, s]);
    return (
        (t =
            S === u.n4.ATTACHMENT
                ? N?.filename != null
                    ? (0, r.jsxs)("span", {
                          className: a()(m._K, m.dU),
                          contentEditable: !1,
                          children: [N.filename, g],
                      })
                    : (0, r.jsxs)("span", {
                          className: a()(m._K, m.ZI),
                          contentEditable: !1,
                          children: [E.intl.string(E.t.GRdFni), g],
                      })
                : (0, r.jsxs)("span", {
                      className: m._K,
                      children: [g, C ? (0, r.jsx)("span", { className: m.Nx, contentEditable: !1 }) : null],
                  })),
        (0, r.jsxs)("span", {
            ...f,
            className: O,
            children: [
                (0, r.jsxs)("span", {
                    className: m.gA,
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
