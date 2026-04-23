s.d(t, { A: () => N });
var i = s(627968),
    a = s(64700),
    l = s(172218),
    r = s(534514),
    n = s(834730),
    c = s(364522),
    d = s(289873),
    u = s(503698),
    o = s.n(u),
    m = s(990078),
    f = s(778712),
    _ = s(939249),
    h = s(97808),
    x = s(658675),
    p = s(854627),
    b = s(3161);
function g(e) {
    let { user: t, checked: s, onChange: l, disabled: r, tooltipConfig: c } = e,
        d = a.useRef(null),
        { avatarSrc: u, eventHandlers: g } = (0, p.A)({ userId: t?.id, size: f._3.SIZE_32 }),
        v = t.globalName ?? t.username;
    return (0, i.jsx)(m.m, {
        text: c?.isActive(t, r) ? c.text(t) : null,
        position: "top",
        anchorRef: d,
        asContainer: !0,
        children: (0, i.jsxs)(_.D, {
            className: o()(b.kL, { [b.vk]: !r }),
            onClick: () => {
                r || l(t, !s);
            },
            children: [
                (0, i.jsx)("div", {
                    className: b.dj,
                    children: (0, i.jsx)(h.eu, {
                        className: o()({ [b.SU]: r }),
                        src: u,
                        "aria-label": v,
                        size: f._3.SIZE_32,
                        ...g,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: b.QV,
                    children: [
                        (0, i.jsx)(n.E, {
                            className: b.nT,
                            color: r ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: v,
                        }),
                        (0, i.jsx)(n.E, {
                            className: b.nT,
                            color: r ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: t.username,
                        }),
                    ],
                }),
                (0, i.jsx)("div", { ref: d, className: b.kv, children: (0, i.jsx)(x.P, { checked: s, disabled: r }) }),
            ],
        }),
    });
}
var v = s(661829);
function N(e) {
    let {
            users: t,
            isUserSelected: s,
            onSelectionChange: a,
            isFetching: u,
            onFetchMore: o,
            isUserDisabled: m,
            searchQuery: f = "",
            emptySearchContent: _,
            className: h,
            tooltipConfig: x,
        } = e,
        p = (0, l.K)((e) => {
            e && !u && o?.();
        });
    return f.length > 0 && 0 === t.length && null != _
        ? (0, i.jsxs)("div", {
              className: v.t,
              children: [
                  (0, i.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: _.header }),
                  (0, i.jsx)(n.E, { variant: "text-md/medium", color: "text-subtle", children: _.body }),
              ],
          })
        : (0, i.jsxs)(c.d_, {
              className: h,
              children: [
                  t.map((e) =>
                      (0, i.jsx)(
                          g,
                          { user: e, checked: s(e), disabled: !!m?.(e), onChange: a, tooltipConfig: x },
                          e.id,
                      ),
                  ),
                  u && (0, i.jsx)(d.y, {}),
                  (0, i.jsx)("div", { ref: p }),
              ],
          });
}
