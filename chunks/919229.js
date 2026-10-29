n.d(t, { A: () => H });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    r = n(821609),
    s = n(289873),
    o = n(371169),
    u = n(17928),
    d = n(260498),
    c = n(741907),
    f = n(503698),
    m = n.n(f),
    p = n(939249),
    g = n(140735),
    h = n(995273),
    x = n(497183),
    j = n(617617),
    k = n(573163),
    v = n(245179),
    b = n(404373),
    y = n(189714),
    _ = n(722701),
    A = n(811587);
let w = [d.Ay, v.A, k.Ay, j.A, _.A];
var S = n(866665),
    N = n(248675),
    C = n(105292),
    I = n(482062);
let E = I.w5,
    P = { in_progress: N.default["Y8pS+n"], draft: N.default.CSAaT0, published: N.default.qbUdLZ };
function D(e) {
    let { status: t } = e;
    return (0, l.jsx)(S.m, {
        text: C.intl.string(P[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: I.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE, className: I.u1, itemClassName: I.pu })
                    : (0, l.jsx)("span", { className: "draft" === t ? I.K4 : I.H3 }),
        }),
    });
}
var T = n(731084),
    M = n(104317),
    L = n(886540),
    K = n(162052),
    z = n(790624);
function B(e) {
    let { projectId: t } = e,
        n = (0, u.bG)(
            [v.A],
            () => {
                let e = (0, L.Ji)(v.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, M.w)(e.steps) ??
                          (0, T.Dy)({
                              activity: v.A.getThinkingActivity(t),
                              compacting: v.A.isCompacting(t),
                              saving: v.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(i.E, {
        variant: "text-xs/normal",
        color: "none",
        className: m()(z.pG, K.Hz),
        "aria-hidden": !0,
        children: n ?? C.intl.string(N.default["Y8pS+n"]),
    });
}
let G = a.memo(function (e) {
    let t,
        n,
        { project: a, onSelect: r, selected: c = !1, renderActions: f, onContextMenu: k } = e,
        {
            status: S,
            unread: I,
            deleting: T,
        } = ((t = a.id),
        (n = (a.supported_surfaces?.length ?? 0) > 0),
        (0, u.cf)(
            w,
            () => ({
                status: (function (e) {
                    let { thinking: t, publishState: n, everPublished: l } = e;
                    return t
                        ? "in_progress"
                        : null != n && ("nothing_built" === n || "not_live" === n || "live_outdated" === n)
                          ? "draft"
                          : (null != n && (0, A.lE)(n)) || l
                            ? "published"
                            : "draft";
                })({
                    thinking: v.A.isThinking(t),
                    publishState: _.A.getPublishStatus(t)?.publishState ?? null,
                    everPublished: n,
                }),
                unread: (0, b.tz)(t) && !(0, y.j)(j.A.settings, t),
                deleting: d.Ay.isProjectDeleting(t),
            }),
            [t, n],
        )),
        M = !T && "in_progress" === S,
        L = !T && I,
        G = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(a);
    return (0, l.jsxs)("li", {
        className: m()(z.AS, { [z.Cp]: T, [z.vX]: null != f }),
        "aria-busy": T,
        children: [
            L ? (0, l.jsx)("span", { className: z.dM, "aria-hidden": !0 }) : null,
            (0, l.jsxs)(p.D, {
                className: m()(z.nM, { [z.wH]: c, [z.gy]: L }),
                "aria-current": c ? "page" : void 0,
                tabIndex: T ? -1 : void 0,
                onMouseDown: T
                    ? void 0
                    : (e) => {
                          0 === e.button && (0, o.tf)(a.id);
                      },
                onClick: T ? void 0 : () => r(a),
                onContextMenu: null == k || T ? void 0 : (e) => k(e, a),
                children: [
                    (0, l.jsxs)("span", {
                        className: z.Kk,
                        children: [
                            (0, l.jsx)(x.A, { project: a, size: "sidebar", className: E }),
                            T ? null : (0, l.jsx)(D, { status: S }),
                        ],
                    }),
                    (0, l.jsxs)("span", {
                        className: z.rf,
                        children: [
                            (0, l.jsx)(i.E, {
                                variant: "text-md/medium",
                                color: "none",
                                className: m()(z.UU, { [K.Hz]: M }),
                                children: a.name,
                            }),
                            T
                                ? (0, l.jsx)(i.E, {
                                      variant: "text-xs/normal",
                                      color: "none",
                                      className: m()(z.pG, z.sL),
                                      children: C.intl.string(N.default.Yh5pAc),
                                  })
                                : M
                                  ? (0, l.jsx)(B, { projectId: a.id })
                                  : null != G
                                    ? (0, l.jsx)(i.E, {
                                          variant: "text-xs/normal",
                                          color: "none",
                                          className: m()(z.pG, z.sL),
                                          children: (0, h.jb)(G, !1),
                                      })
                                    : null,
                        ],
                    }),
                    T
                        ? null
                        : (0, l.jsx)(g.A, {
                              children: [C.intl.string(P[S]), L ? C.intl.string(N.default["N+3Pzk"]) : null]
                                  .filter(Boolean)
                                  .join(", "),
                          }),
                ],
            }),
            null != f
                ? (0, l.jsx)("div", {
                      className: m()(z.XI, { [z.Rn]: T }),
                      children: T ? (0, l.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE }) : f(a),
                  })
                : null,
        ],
    });
});
var R = n(655074);
function H(e) {
    let t,
        n,
        f,
        m,
        {
            onSelect: p,
            query: g = "",
            guildId: h,
            selectedProjectId: x = null,
            renderProjectActions: j,
            onProjectContextMenu: k,
        } = e,
        v =
            ((t = (0, c.A)(h)),
            (n = (0, u.bG)(
                [d.Ay],
                () => (null != h ? d.Ay.getGuildProjectsFetchState(h) : d.Ay.getOwnedProjectsFetchState()),
                [h],
            )),
            (f = g.trim().toLocaleLowerCase()),
            (m = a.useMemo(() => ("" === f ? t : t.filter((e) => e.name.toLocaleLowerCase().includes(f))), [t, f]))
                .length > 0
                ? { kind: "projects", projects: m }
                : t.length > 0
                  ? { kind: "no_match" }
                  : "error" === n
                    ? { kind: "error" }
                    : "success" !== n
                      ? { kind: "loading" }
                      : { kind: "empty" });
    return "projects" === v.kind
        ? (0, l.jsx)("ul", {
              className: R.p_,
              children: v.projects.map((e) =>
                  (0, l.jsx)(
                      G,
                      { project: e, onSelect: p, selected: e.id === x, renderActions: j, onContextMenu: k },
                      e.id,
                  ),
              ),
          })
        : "no_match" === v.kind
          ? (0, l.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: R.Ie,
                children: C.intl.string(N.default.X37fkR),
            })
          : "error" === v.kind
            ? (0, l.jsxs)("div", {
                  className: R.E8,
                  children: [
                      (0, l.jsx)(i.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: C.intl.string(N.default.DJAPMO),
                      }),
                      (0, l.jsx)(r.$, {
                          variant: "secondary",
                          size: "sm",
                          text: C.intl.string(N.default["WFJ/vb"]),
                          onClick: () => (0, o.listProjects)(h),
                      }),
                  ],
              })
            : "loading" === v.kind
              ? (0, l.jsx)("div", { className: R.E8, children: (0, l.jsx)(s.y, {}) })
              : (0, l.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: R.Ie,
                    children: C.intl.string(N.default["9/5sLV"]),
                });
}
