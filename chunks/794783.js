"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    s = n(172218),
    a = n(534514),
    o = n(834730),
    l = n(364522),
    u = n(289873),
    c = n(503698),
    d = n.n(c),
    _ = n(990078),
    f = n(778712),
    h = n(939249),
    p = n(97808),
    E = n(658675),
    m = n(854627),
    g = n(3161);
function A(e) {
    let { user: t, checked: n, onChange: s, disabled: a, tooltipConfig: l } = e,
        u = r.useRef(null),
        { avatarSrc: c, eventHandlers: A } = (0, m.A)({ userId: t?.id, size: f._3.SIZE_32 }),
        I = t.globalName ?? t.username;
    return (0, i.jsx)(_.m, {
        text: l?.isActive(t, a) ? l.text(t) : null,
        position: "top",
        anchorRef: u,
        asContainer: !0,
        children: (0, i.jsxs)(h.D, {
            className: d()(g.kL, { [g.vk]: !a }),
            onClick: () => {
                a || s(t, !n);
            },
            children: [
                (0, i.jsx)("div", {
                    className: g.dj,
                    children: (0, i.jsx)(p.eu, {
                        className: d()({ [g.SU]: a }),
                        src: c,
                        "aria-label": I,
                        size: f._3.SIZE_32,
                        ...A,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: g.QV,
                    children: [
                        (0, i.jsx)(o.E, {
                            className: g.nT,
                            color: a ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: I,
                        }),
                        (0, i.jsx)(o.E, {
                            className: g.nT,
                            color: a ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: t.username,
                        }),
                    ],
                }),
                (0, i.jsx)("div", { ref: u, className: g.kv, children: (0, i.jsx)(E.P, { checked: n, disabled: a }) }),
            ],
        }),
    });
}
var I = n(661829);
function T(e) {
    let {
            users: t,
            isUserSelected: n,
            onSelectionChange: r,
            isFetching: c,
            onFetchMore: d,
            isUserDisabled: _,
            searchQuery: f = "",
            emptySearchContent: h,
            className: p,
            tooltipConfig: E,
        } = e,
        m = (0, s.K)((e) => {
            e && !c && d?.();
        });
    return f.length > 0 && 0 === t.length && null != h
        ? (0, i.jsxs)("div", {
              className: I.t,
              children: [
                  (0, i.jsx)(a.D, { variant: "heading-md/semibold", color: "text-strong", children: h.header }),
                  (0, i.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", children: h.body }),
              ],
          })
        : (0, i.jsxs)(l.d_, {
              className: p,
              children: [
                  t.map((e) =>
                      (0, i.jsx)(
                          A,
                          { user: e, checked: n(e), disabled: !!_?.(e), onChange: r, tooltipConfig: E },
                          e.id,
                      ),
                  ),
                  c && (0, i.jsx)(u.y, {}),
                  (0, i.jsx)("div", { ref: m }),
              ],
          });
}
