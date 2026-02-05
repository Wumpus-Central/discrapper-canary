"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(442433),
    l = n(975807),
    u = n(235393),
    c = n(332173),
    d = n(202803),
    _ = n(365526),
    f = n(652215),
    p = n(446440),
    h = n(800344);
function m(e) {
    return {
        react(t, i, m) {
            let g = m.noStyleAndInteraction
                    ? void 0
                    : async (n) => {
                          let r = await (0, d.AN)(t.attachmentUrl);
                          e.shouldStopPropagation && n?.stopPropagation(),
                              u.A.trackLinkClicked(r),
                              e.shouldCloseDefaultModals && (0, s.s7G)(),
                              (0, l.A)(r);
                      },
                E = m.noStyleAndInteraction
                    ? f.tEg
                    : (e) => {
                          (0, o.L3)(e, async () => {
                              let { default: e } = await n.e("62529").then(n.bind(n, 740024));
                              return (n) =>
                                  (0, r.jsx)(e, {
                                      ...n,
                                      attachmentUrl: t.attachmentUrl,
                                      attachmentName: t.attachmentName,
                                  });
                          });
                      };
            return (0, r.jsxs)(
                c.A,
                {
                    role: "link",
                    href: t.attachmentUrl,
                    onClick: g,
                    onContextMenu: E,
                    className: "attachmentLink",
                    children: [
                        (0, r.jsx)(s.PtA, { size: "xs", className: a()(h.Kk, p.K), color: "currentColor" }),
                        (0, _.t)(t, i, m),
                    ],
                },
                m.key,
            );
        },
    };
}
