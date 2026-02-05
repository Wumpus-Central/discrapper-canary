a.d(t, { default: () => f });
var i = a(627968),
    n = a(64700),
    s = a(397927),
    l = a(444927),
    d = a(915089),
    r = a(937773),
    o = a(770335),
    c = a(405810),
    p = a(808728),
    u = a(486020),
    m = a(515718),
    x = a(307731),
    h = a(985018),
    g = a(510272),
    j = a(230279);
function C() {
    return [{ name: h.intl.string(h.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png"] }];
}
async function b(e) {
    let t = (0, u._O)({ id: e.id, animated: !1, size: 48, forcePNG: !0 }),
        a = await fetch(t),
        i = await a.blob();
    return await (0, m.We)(i);
}
let f = function (e) {
    let { guildId: t, onUploadIcon: a, onSelectUnicodeEmoji: u, onClose: m, transitionState: f } = e,
        I = (0, d.GV)(),
        N = p.Ay.getDefaultChannel(t),
        [_, y] = n.useState("tab-id-role-icon-file-upload"),
        [k, v] = n.useState(!1),
        w = (0, l.A)(C);
    return (
        n.useEffect(() => {
            v(!1);
        }, [_]),
        (0, i.jsx)(s.EOs, {
            transitionState: f,
            "aria-labelledby": I,
            size: s.rIJ.MEDIUM,
            className: g.CR,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, i.jsxs)("div", {
                className: g.FG,
                children: [
                    (0, i.jsxs)(s.VQ0, {
                        selectedItem: _,
                        onItemSelect: y,
                        type: "top",
                        look: "grey",
                        "aria-label": "Expression Picker",
                        className: g.C$,
                        children: [
                            (0, i.jsx)(s.VQ0.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: h.intl.string(h.t.royWSB),
                            }),
                            (0, i.jsx)(s.VQ0.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: h.intl.string(h.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === _
                        ? (0, i.jsx)(s.$mQ, {
                              "data-migration-pending": !0,
                              children: (0, i.jsxs)("div", {
                                  className: g.PO,
                                  children: [
                                      (0, i.jsxs)("div", {
                                          className: g.HK,
                                          children: [
                                              (0, i.jsx)("img", { src: j, alt: "sparkles" }),
                                              (0, i.jsx)("div", {
                                                  className: g.sk,
                                                  children: (0, i.jsx)(s.XGR, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: g.T3,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", { className: g.WG, children: h.intl.string(h.t["mz++Qq"]) }),
                                      (0, i.jsx)(c.A, {
                                          onChange: (e) => {
                                              v(!1), a(e), m();
                                          },
                                          onFileSizeError: () => {
                                              v(!0);
                                          },
                                          maxFileSizeBytes: 256e3,
                                          filters: w,
                                          text: h.intl.string(h.t.sdCQY4),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      k
                                          ? (0, i.jsx)(s.Text, {
                                                className: g.Qw,
                                                color: "text-feedback-critical",
                                                variant: "text-sm/normal",
                                                children: h.intl.string(h.t.HFyKsa),
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    "tab-id-role-icon-emoji" === _
                        ? (0, i.jsx)(r.A, {
                              hasTabWrapper: !0,
                              closePopout: () => m(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: t } = e;
                                  t?.id != null
                                      ? t?.type === o.i.GUILD && a(await b(t))
                                      : t?.surrogates != null && u(t.defaultDiversityChild?.surrogates ?? t.surrogates),
                                      m();
                              },
                              pickerIntention: x.b_.COMMUNITY_CONTENT,
                              channel: N,
                          })
                        : null,
                ],
            }),
        })
    );
};
