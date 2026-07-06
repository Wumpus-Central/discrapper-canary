t.d(s, { A: () => f });
var a = t(627968),
    l = t(64700),
    i = t(172218),
    n = t(534514),
    d = t(834730),
    r = t(364522),
    c = t(289873),
    o = t(503698),
    x = t.n(o),
    h = t(990078),
    m = t(778712),
    u = t(939249),
    j = t(97808),
    v = t(658675),
    b = t(854627),
    p = t(3161);
function k(e) {
    let { user: s, checked: t, onChange: i, disabled: n, tooltipConfig: r } = e,
        c = l.useRef(null),
        { avatarSrc: o, eventHandlers: k } = (0, b.A)({ userId: s?.id, size: m._3.SIZE_32 }),
        N = s.globalName ?? s.username;
    return (0, a.jsx)(h.m, {
        text: r?.isActive(s, n) ? r.text(s) : null,
        position: "top",
        anchorRef: c,
        asContainer: !0,
        children: (0, a.jsxs)(u.D, {
            className: x()(p.kL, { [p.vk]: !n }),
            onClick: function () {
                n || i(s, !t);
            },
            children: [
                (0, a.jsx)("div", {
                    className: p.dj,
                    children: (0, a.jsx)(j.eu, {
                        className: x()({ [p.SU]: n }),
                        src: o,
                        "aria-label": N,
                        size: m._3.SIZE_32,
                        ...k,
                    }),
                }),
                (0, a.jsxs)("div", {
                    className: p.QV,
                    children: [
                        (0, a.jsx)(d.E, {
                            className: p.nT,
                            color: n ? "text-muted" : "text-default",
                            variant: "text-md/semibold",
                            children: N,
                        }),
                        (0, a.jsx)(d.E, {
                            className: p.nT,
                            color: n ? "text-muted" : "text-subtle",
                            variant: "text-xs/normal",
                            children: s.username,
                        }),
                    ],
                }),
                (0, a.jsx)("div", { ref: c, className: p.kv, children: (0, a.jsx)(v.P, { checked: t, disabled: n }) }),
            ],
        }),
    });
}
var N = t(661829);
function f(e) {
    let {
            users: s,
            isUserSelected: t,
            onSelectionChange: l,
            isFetching: o,
            onFetchMore: x,
            isUserDisabled: h,
            searchQuery: m = "",
            emptySearchContent: u,
            className: j,
            tooltipConfig: v,
        } = e,
        b = (0, i.K)((e) => {
            e && !o && x?.();
        });
    return m.length > 0 && 0 === s.length && null != u
        ? (0, a.jsxs)("div", {
              className: N.t,
              children: [
                  (0, a.jsx)(n.D, { variant: "heading-md/semibold", color: "text-strong", children: u.header }),
                  (0, a.jsx)(d.E, { variant: "text-md/medium", color: "text-subtle", children: u.body }),
              ],
          })
        : (0, a.jsxs)(r.d_, {
              className: j,
              children: [
                  s.map((e) =>
                      (0, a.jsx)(
                          k,
                          { user: e, checked: t(e), disabled: !!h?.(e), onChange: l, tooltipConfig: v },
                          e.id,
                      ),
                  ),
                  o && (0, a.jsx)(c.y, {}),
                  (0, a.jsx)("div", { ref: b }),
              ],
          });
}
