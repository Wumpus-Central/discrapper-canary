t.d(s, { A: () => N });
var a = t(627968),
    l = t(64700),
    i = t(172218),
    n = t(534514),
    r = t(834730),
    d = t(364522),
    c = t(289873),
    o = t(503698),
    u = t.n(o),
    x = t(990078),
    m = t(778712),
    h = t(939249),
    j = t(97808),
    v = t(658675),
    f = t(854627),
    b = t(3161);
function p(e) {
    let { user: s, checked: t, onChange: i, disabled: n, tooltipConfig: d } = e,
        c = l.useRef(null),
        { avatarSrc: o, eventHandlers: p } = (0, f.A)({ userId: s?.id, size: m._3.SIZE_32 }),
        k = s.globalName ?? s.username;
    return (0, a.jsx)(x.m, {
        text: d?.isActive(s, n) ? d.text(s) : null,
        position: "top",
        anchorRef: c,
        asContainer: !0,
        children: (0, a.jsxs)(h.D, {
            className: u()(b.kL, { [b.vk]: !n }),
            onClick: function () {
                n || i(s, !t);
            },
            children: [
                (0, a.jsx)("div", {
                    className: b.dj,
                    children: (0, a.jsx)(j.eu, {
                        className: u()({ [b.SU]: n }),
                        src: o,
                        "aria-label": k,
                        size: m._3.SIZE_32,
                        ...p,
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: b.QV,
                    children: [
                        (0, a.jsx)(r.E, {
                            className: b.nT,
                            color: n ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: k,
                        }),
                        (0, a.jsx)(r.E, {
                            className: b.nT,
                            color: n ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: s.username,
                        }),
                    ],
                }),
                (0, a.jsx)("div", { ref: c, className: b.kv, children: (0, a.jsx)(v.P, { checked: t, disabled: n }) }),
            ],
        }),
    });
}
var k = t(661829);
function N(e) {
    let {
            users: s,
            isUserSelected: t,
            onSelectionChange: l,
            isFetching: o,
            onFetchMore: u,
            isUserDisabled: x,
            searchQuery: m = "",
            emptySearchContent: h,
            className: j,
            tooltipConfig: v,
        } = e,
        f = (0, i.K)((e) => {
            e && !o && u?.();
        });
    return m.length > 0 && 0 === s.length && null != h
        ? (0, a.jsxs)("div", {
              className: k.t,
              children: [
                  (0, a.jsx)(n.D, { variant: "heading-md/semibold", color: "text-strong", children: h.header }),
                  (0, a.jsx)(r.E, { variant: "text-md/medium", color: "text-subtle", children: h.body }),
              ],
          })
        : (0, a.jsxs)(d.d_, {
              className: j,
              children: [
                  s.map((e) =>
                      (0, a.jsx)(
                          p,
                          { user: e, checked: t(e), disabled: !!x?.(e), onChange: l, tooltipConfig: v },
                          e.id,
                      ),
                  ),
                  o && (0, a.jsx)(c.y, {}),
                  (0, a.jsx)("div", { ref: f }),
              ],
          });
}
