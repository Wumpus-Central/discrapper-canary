"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(192308),
    o = n(588975),
    l = n(442433),
    u = n(975807),
    c = n(235393),
    d = n(332173),
    _ = n(202803),
    f = n(365526),
    p = n(652215),
    h = n(238999),
    E = n(995257);
function m(e) {
    return {
        react(t, i, m) {
            let g = m.noStyleAndInteraction
                    ? void 0
                    : async (n) => {
                          let r = await (0, _.AN)(t.attachmentUrl);
                          e.shouldStopPropagation && n?.stopPropagation(),
                              c.A.trackLinkClicked(r),
                              e.shouldCloseDefaultModals && (0, a.closeAllModals)(),
                              (0, u.A)(r);
                      },
                A = m.noStyleAndInteraction
                    ? p.tEg
                    : (e) => {
                          (0, l.L3)(e, async () => {
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
                d.A,
                {
                    role: "link",
                    href: t.attachmentUrl,
                    onClick: g,
                    onContextMenu: A,
                    className: "attachmentLink",
                    children: [
                        (0, r.jsx)(o.P, { size: "xs", className: s()(E.Kk, h.K), color: "currentColor" }),
                        (0, f.t)(t, i, m),
                    ],
                },
                m.key,
            );
        },
    };
}
