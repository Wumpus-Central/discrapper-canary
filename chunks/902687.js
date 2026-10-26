n.d(t, { A: () => T });
var l = n(477900),
    a = n(582128),
    r = n(834730),
    i = n(821609),
    s = n(289873),
    u = n(371169),
    d = n(17928),
    o = n(260498),
    c = n(281091),
    m = n(503698),
    f = n.n(m),
    h = n(939249),
    x = n(140735),
    g = n(995273),
    p = n(855793),
    j = n(497183),
    k = n(722701),
    v = n(219956),
    _ = n(731084),
    b = n(104317),
    y = n(245179),
    A = n(886540),
    N = n(248675),
    w = n(105292),
    S = n(162052),
    E = n(790624);
function C() {
    return (0, l.jsx)("span", { className: E.me, "aria-hidden": !0 });
}
function I(e) {
    let { projectId: t } = e,
        n = (0, d.bG)(
            [y.A],
            () => {
                let e = (0, A.Ji)(y.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, b.w)(e.steps) ??
                          (0, _.Dy)({
                              activity: y.A.getThinkingActivity(t),
                              compacting: y.A.isCompacting(t),
                              saving: y.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(r.E, {
        variant: "text-sm/normal",
        color: "none",
        className: f()(E.pG, S.Hz),
        children: n ?? w.intl.string(N.default["Y8pS+n"]),
    });
}
let M = a.memo(function (e) {
    let { project: t, onSelect: n, renderActions: a, onContextMenu: i } = e,
        o = (0, v.ZA)(t.id),
        c = "deleting" === o,
        m = (0, d.bG)([k.A], () => k.A.getPublishStatus(t.id)?.publishState ?? null, [t.id]),
        _ = (0, v.s9)(o, m),
        b = (0, v.yy)(t),
        y = null == i || c ? void 0 : (e) => i(e, t);
    return (0, l.jsxs)("li", {
        className: f()(E.dc, { [E.V7]: !c, [E.BI]: c }),
        "aria-busy": c,
        children: [
            (0, l.jsx)(p.Ay, { projectId: c ? null : t.id }),
            (0, l.jsxs)(h.D, {
                className: E.nM,
                tabIndex: c ? -1 : void 0,
                onMouseDown: c
                    ? void 0
                    : (e) => {
                          0 === e.button && (0, u.tf)(t.id);
                      },
                onClick: c ? void 0 : () => n(t),
                onContextMenu: y,
                children: [
                    (0, l.jsx)(j.A, { project: t, size: "card" }),
                    (0, l.jsxs)("div", {
                        className: E.rf,
                        children: [
                            (0, l.jsx)(r.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                className: E.UU,
                                children: t.name,
                            }),
                            c
                                ? (0, l.jsx)(r.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: E.pG,
                                      children: w.intl.string(N.default.Yh5pAc),
                                  })
                                : "in_progress" === o
                                  ? (0, l.jsx)(I, { projectId: t.id })
                                  : (0, l.jsxs)("div", {
                                        className: E.VJ,
                                        children: [
                                            null != b
                                                ? (0, l.jsx)(r.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: E.pG,
                                                      children: (0, g.jb)(b, !1),
                                                  })
                                                : null,
                                            _
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          null != b ? (0, l.jsx)(C, {}) : null,
                                                          (0, l.jsx)(r.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-brand",
                                                              children: w.intl.string(N.default.CSAaT0),
                                                          }),
                                                      ],
                                                  })
                                                : null,
                                        ],
                                    }),
                        ],
                    }),
                    "unread" === o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("span", { className: E.Zm, "aria-hidden": !0 }),
                                  (0, l.jsx)(x.A, { children: w.intl.string(N.default["N+3Pzk"]) }),
                              ],
                          })
                        : null,
                ],
            }),
            null != a
                ? (0, l.jsx)("div", {
                      className: f()(E.XI, { [E.Rn]: c }),
                      children: c ? (0, l.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE }) : a(t),
                  })
                : null,
        ],
    });
});
var P = n(655074);
function T(e) {
    let t,
        n,
        m,
        f,
        { onSelect: h, query: x = "", guildId: g, renderProjectActions: p, onProjectContextMenu: j } = e,
        k =
            ((t = (0, c.A)(g)),
            (n = (0, d.bG)(
                [o.Ay],
                () => (null != g ? o.Ay.getGuildProjectsFetchState(g) : o.Ay.getOwnedProjectsFetchState()),
                [g],
            )),
            (m = x.trim().toLocaleLowerCase()),
            (f = a.useMemo(() => ("" === m ? t : t.filter((e) => e.name.toLocaleLowerCase().includes(m))), [t, m]))
                .length > 0
                ? { kind: "projects", projects: f }
                : t.length > 0
                  ? { kind: "no_match" }
                  : "error" === n
                    ? { kind: "error" }
                    : "success" !== n
                      ? { kind: "loading" }
                      : { kind: "empty" });
    return "projects" === k.kind
        ? (0, l.jsx)("ul", {
              className: P.p_,
              children: k.projects.map((e) =>
                  (0, l.jsx)(M, { project: e, onSelect: h, renderActions: p, onContextMenu: j }, e.id),
              ),
          })
        : "no_match" === k.kind
          ? (0, l.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: P.Ie,
                children: w.intl.string(N.default.X37fkR),
            })
          : "error" === k.kind
            ? (0, l.jsxs)("div", {
                  className: P.E8,
                  children: [
                      (0, l.jsx)(r.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: w.intl.string(N.default.DJAPMO),
                      }),
                      (0, l.jsx)(i.$, {
                          variant: "secondary",
                          size: "sm",
                          text: w.intl.string(N.default["WFJ/vb"]),
                          onClick: () => (0, u.hF)(g),
                      }),
                  ],
              })
            : "loading" === k.kind
              ? (0, l.jsx)("div", { className: P.E8, children: (0, l.jsx)(s.y, {}) })
              : (0, l.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: P.Ie,
                    children: w.intl.string(N.default["9/5sLV"]),
                });
}
