i.d(t, { default: () => f });
var a = i(627968),
    n = i(64700),
    s = i(397927),
    l = i(444927),
    d = i(915089),
    r = i(937773),
    o = i(770335),
    c = i(405810),
    p = i(808728),
    u = i(486020),
    m = i(515718),
    x = i(307731),
    h = i(985018),
    g = i(884073),
    j = i(230279);
function C() {
    return [{ name: h.intl.string(h.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png"] }];
}
async function b(e) {
    let t = (0, u._O)({ id: e.id, animated: !1, size: 48, forcePNG: !0 }),
        i = await fetch(t),
        a = await i.blob();
    return await (0, m.We)(a);
}
let f = function (e) {
    let { guildId: t, onUploadIcon: i, onSelectUnicodeEmoji: u, onClose: m, transitionState: f } = e,
        I = (0, d.GV)(),
        N = p.Ay.getDefaultChannel(t),
        [y, _] = n.useState("tab-id-role-icon-file-upload"),
        [k, v] = n.useState(!1),
        w = (0, l.A)(C);
    return (
        n.useEffect(() => {
            v(!1);
        }, [y]),
        (0, a.jsx)(s.EOs, {
            transitionState: f,
            "aria-labelledby": I,
            size: s.rIJ.MEDIUM,
            className: g.CR,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, a.jsxs)("div", {
                className: g.FG,
                children: [
                    (0, a.jsxs)(s.VQ0, {
                        selectedItem: y,
                        onItemSelect: _,
                        type: "top",
                        look: "grey",
                        "aria-label": "Expression Picker",
                        className: g.C$,
                        children: [
                            (0, a.jsx)(s.VQ0.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: h.intl.string(h.t.royWSB),
                            }),
                            (0, a.jsx)(s.VQ0.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: h.intl.string(h.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === y
                        ? (0, a.jsx)(s.$mQ, {
                              "data-migration-pending": !0,
                              children: (0, a.jsxs)("div", {
                                  className: g.PO,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: g.HK,
                                          children: [
                                              (0, a.jsx)("img", { src: j, alt: "sparkles" }),
                                              (0, a.jsx)("div", {
                                                  className: g.sk,
                                                  children: (0, a.jsx)(s.XGR, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: g.T3,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, a.jsx)("div", { className: g.WG, children: h.intl.string(h.t["mz++Qq"]) }),
                                      (0, a.jsx)(c.A, {
                                          onChange: (e) => {
                                              v(!1), i(e), m();
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
                                          ? (0, a.jsx)(s.Text, {
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
                    "tab-id-role-icon-emoji" === y
                        ? (0, a.jsx)(r.A, {
                              hasTabWrapper: !0,
                              closePopout: () => m(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: t } = e;
                                  t?.id != null
                                      ? t?.type === o.i.GUILD && i(await b(t))
                                      : t?.surrogates != null && u(t.defaultDiversityChild?.surrogates ?? t.surrogates),
                                      m();
                              },
                              pickerIntention: x.EmojiIntention.COMMUNITY_CONTENT,
                              channel: N,
                          })
                        : null,
                ],
            }),
        })
    );
};
