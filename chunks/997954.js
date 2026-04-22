"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(192308),
    a = n(588975),
    o = n(442433),
    c = n(975807),
    u = n(235393),
    d = n(332173),
    h = n(202803),
    m = n(365526),
    p = n(652215),
    f = n(238999),
    g = n(995257);
function _(e) {
    return {
        react(t, l, _) {
            let x = _.noStyleAndInteraction
                    ? void 0
                    : async (n) => {
                          let i = await (0, h.AN)(t.attachmentUrl);
                          e.shouldStopPropagation && n?.stopPropagation(),
                              u.A.trackLinkClicked(i),
                              e.shouldCloseDefaultModals && (0, r.closeAllModals)(),
                              (0, c.A)(i);
                      },
                A = _.noStyleAndInteraction
                    ? p.tEg
                    : (e) => {
                          (0, o.L3)(e, async () => {
                              let { default: e } = await n.e("62529").then(n.bind(n, 740024));
                              return (n) =>
                                  (0, i.jsx)(e, {
                                      ...n,
                                      attachmentUrl: t.attachmentUrl,
                                      attachmentName: t.attachmentName,
                                  });
                          });
                      };
            return (0, i.jsxs)(
                d.A,
                {
                    role: "link",
                    href: t.attachmentUrl,
                    onClick: x,
                    onContextMenu: A,
                    className: "attachmentLink",
                    children: [
                        (0, i.jsx)(a.P, { size: "xs", className: s()(g.Kk, f.K), color: "currentColor" }),
                        (0, m.t)(t, l, _),
                    ],
                },
                _.key,
            );
        },
    };
}
