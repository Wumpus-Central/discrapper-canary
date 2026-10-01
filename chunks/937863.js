l.d(t, { C: () => h });
var n = l(477900),
    i = l(582128),
    a = l(661531),
    s = l(980707),
    r = l(477782),
    d = l(922016),
    c = l(297264),
    o = l(834730),
    u = l(847374),
    m = l(914173);
function x(e) {
    let { navId: t, options: l, selectedId: i, label: a, onSelect: d, onClose: c } = e;
    return (0, n.jsx)(s.W, {
        navId: t,
        "aria-label": a,
        onClose: c,
        onSelect: void 0,
        children: l.map((e) =>
            (0, n.jsx)(
                r.iD,
                {
                    id: `${t}-${e.id}`,
                    group: t,
                    label: e.label,
                    checked: e.id === i,
                    action: () => {
                        (d(e.id), c());
                    },
                },
                e.id,
            ),
        ),
    });
}
function h(e) {
    let { navId: t, options: l, selectedId: s, menuLabel: r, triggerLabel: h, onSelect: f } = e,
        [g, j] = i.useState(!1),
        v = i.useRef(null),
        p = l.find((e) => e.id === s);
    return null == p
        ? null
        : (0, n.jsx)(d.Y, {
              targetElementRef: v,
              position: "bottom",
              align: "left",
              shouldShow: g,
              onRequestOpen: () => j(!0),
              onRequestClose: () => j(!1),
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, n.jsx)(x, { navId: t, options: l, selectedId: s, label: r, onSelect: f, onClose: i });
              },
              children: (e) =>
                  (0, n.jsx)(c.D, {
                      variant: "heading-sm/medium",
                      className: m.R_,
                      children: (0, n.jsxs)("button", {
                          ...e,
                          ref: v,
                          type: "button",
                          className: m.hZ,
                          "aria-haspopup": "menu",
                          "aria-label": h,
                          children: [
                              null != p.icon && (0, n.jsx)("span", { className: m.Kk, children: p.icon }),
                              (0, n.jsx)(o.E, {
                                  className: m.DD,
                                  tag: "span",
                                  variant: "heading-sm/medium",
                                  color: "text-default",
                                  children: p.label,
                              }),
                              (0, n.jsx)("span", {
                                  className: m.Kk,
                                  children: (0, n.jsx)(u.a, {
                                      size: "xs",
                                      color: a.A.colors.ICON_DEFAULT,
                                      "aria-hidden": !0,
                                  }),
                              }),
                          ],
                      }),
                  }),
          });
}
