"use strict";
n.d(t, { A: () => A });
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
    h = n(35277),
    p = n(711371),
    g = n(985018),
    E = n(40672);
function A(e, t, n) {
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
                        ? g.intl.formatToPlainString(g.t.BP8N0K, { count: l })
                        : g.intl.formatToPlainString(g.t.lziVC9, { count: l })),
                    (d["data-trailing-placeholder"] = e);
            }
            return (0, r.jsx)("div", { className: E.uB, ...i, ...d, children: a });
        case "applicationCommandOption":
            return (0, r.jsx)(I, { attributes: i, channelId: n, element: s, children: a });
        default:
            return null;
    }
}
let I = (e) => {
    let t,
        { channelId: n, element: a, attributes: f, children: A } = e,
        I = (0, o.f7)(),
        T = (0, o.zL)(),
        y = (0, o.RV)(),
        { optionType: S, errored: v } = (0, l.cf)(
            [c.A],
            () => ({
                optionType: c.A.getOption(n, a.optionName)?.type,
                errored: c.A.getOptionState(n, a.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, a.optionName],
        ),
        C = (0, l.bG)([_.A], () => _.A.getUpload(n, a.optionName, d.C.SlashCommand), [n, a.optionName]),
        b = a.children[a.children.length - 1],
        N = null != b && p.l5.isText(b) && b.text.endsWith("\n"),
        R = s()(E.S0, E.xP, { [E.t$]: T && I, [E.$2]: (!T || !I) && v }),
        O = i.useCallback(() => {
            p.VW.isVoid(y, a) || h.b.selectCommandOption(y, a.optionName, !0);
        }, [y, a]);
    return (
        (t =
            S === u.n4.ATTACHMENT
                ? C?.filename != null
                    ? (0, r.jsxs)("span", {
                          className: s()(E._K, E.dU),
                          contentEditable: !1,
                          children: [C.filename, A],
                      })
                    : (0, r.jsxs)("span", {
                          className: s()(E._K, E.ZI),
                          contentEditable: !1,
                          children: [g.intl.string(g.t.GRdFni), A],
                      })
                : (0, r.jsxs)("span", {
                      className: E._K,
                      children: [A, N ? (0, r.jsx)("span", { className: E.Nx, contentEditable: !1 }) : null],
                  })),
        (0, r.jsxs)("span", {
            ...f,
            className: R,
            children: [
                (0, r.jsxs)("span", {
                    className: E.gA,
                    contentEditable: !1,
                    onClick: O,
                    children: [a.optionDisplayName, "​"],
                }),
                t,
                (0, r.jsx)("span", { contentEditable: !1, children: "​" }),
            ],
        })
    );
};
