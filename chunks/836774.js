a.d(i, {
    default: () => v,
}),
    a(896048);
var t = a(627968),
    s = a(64700),
    l = a(397927),
    n = a(444927),
    r = a(915089),
    d = a(937773),
    c = a(770335),
    o = a(405810),
    u = a(808728),
    m = a(486020),
    p = a(515718),
    b = a(307731),
    f = a(985018),
    x = a(510272),
    h = a(230279);

function g() {
    return [
        {
            name: f.intl.string(f.t["Sp2NF+"]),
            extensions: ["jpg", "jpeg", "png"],
        },
    ];
}
async function j(e) {
    let i = (0, m._O)({
            id: e.id,
            animated: !1,
            size: 48,
            forcePNG: !0,
        }),
        a = await fetch(i),
        t = await a.blob();
    return await (0, p.We)(t);
}
let v = function (e) {
    let { guildId: i, onUploadIcon: a, onSelectUnicodeEmoji: m, onClose: p, transitionState: v } = e,
        C = (0, r.GV)(),
        N = u.Ay.getDefaultChannel(i),
        [y, k] = s.useState("tab-id-role-icon-file-upload"),
        [I, _] = s.useState(!1),
        w = (0, n.A)(g);
    return (
        s.useEffect(() => {
            _(!1);
        }, [y]),
        (0, t.jsx)(l.EOs, {
            transitionState: v,
            "aria-labelledby": C,
            size: l.rIJ.MEDIUM,
            className: x.CR,
            parentComponent: "CustomRoleIconUploadModal",
            "data-migration-pending": !0,
            children: (0, t.jsxs)("div", {
                className: x.FG,
                children: [
                    (0, t.jsxs)(l.VQ0, {
                        selectedItem: y,
                        onItemSelect: k,
                        type: "top",
                        look: "grey",
                        "aria-label": "Expression Picker",
                        className: x.C$,
                        children: [
                            (0, t.jsx)(l.VQ0.Item, {
                                id: "tab-id-role-icon-file-upload",
                                children: f.intl.string(f.t.royWSB),
                            }),
                            (0, t.jsx)(l.VQ0.Item, {
                                id: "tab-id-role-icon-emoji",
                                children: f.intl.string(f.t["/Ny2wZ"]),
                            }),
                        ],
                    }),
                    "tab-id-role-icon-file-upload" === y
                        ? (0, t.jsx)(l.$mQ, {
                              "data-migration-pending": !0,
                              children: (0, t.jsxs)("div", {
                                  className: x.PO,
                                  children: [
                                      (0, t.jsxs)("div", {
                                          className: x.HK,
                                          children: [
                                              (0, t.jsx)("img", {
                                                  src: h,
                                                  alt: "sparkles",
                                              }),
                                              (0, t.jsx)("div", {
                                                  className: x.sk,
                                                  children: (0, t.jsx)(l.XGR, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: x.T3,
                                                  }),
                                              }),
                                          ],
                                      }),
                                      (0, t.jsx)("div", {
                                          className: x.WG,
                                          children: f.intl.string(f.t["mz++Qq"]),
                                      }),
                                      (0, t.jsx)(o.A, {
                                          onChange: (e) => {
                                              _(!1), a(e), p();
                                          },
                                          onFileSizeError: () => {
                                              _(!0);
                                          },
                                          maxFileSizeBytes: 256e3,
                                          filters: w,
                                          text: f.intl.string(f.t.sdCQY4),
                                          size: "md",
                                          variant: "primary",
                                      }),
                                      I
                                          ? (0, t.jsx)(l.Text, {
                                                className: x.Qw,
                                                color: "text-feedback-critical",
                                                variant: "text-sm/normal",
                                                children: f.intl.string(f.t.HFyKsa),
                                            })
                                          : null,
                                  ],
                              }),
                          })
                        : null,
                    "tab-id-role-icon-emoji" === y
                        ? (0, t.jsx)(d.A, {
                              hasTabWrapper: !0,
                              closePopout: () => p(),
                              onSelectEmoji: async (e) => {
                                  let { emoji: i } = e;
                                  if ((null == i ? void 0 : i.id) != null)
                                      (null == i ? void 0 : i.type) === c.i.GUILD && a(await j(i));
                                  else if ((null == i ? void 0 : i.surrogates) != null) {
                                      var t, s;
                                      m(
                                          null != (t = null == (s = i.defaultDiversityChild) ? void 0 : s.surrogates)
                                              ? t
                                              : i.surrogates,
                                      );
                                  }
                                  p();
                              },
                              pickerIntention: b.b_.COMMUNITY_CONTENT,
                              channel: N,
                          })
                        : null,
                ],
            }),
        })
    );
};
