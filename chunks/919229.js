n.d(t, { A: () => O });
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
    C = n(22231),
    N = n(661531),
    I = n(248675),
    E = n(105292),
    P = n(482062);
let T = P.w5,
    D = { in_progress: I.default["Y8pS+n"], draft: I.default.CSAaT0 };
function M(e) {
    let { status: t } = e;
    return (0, l.jsx)(S.m, {
        text: E.intl.string(D[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: P.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE, className: P.u1, itemClassName: P.pu })
                    : (0, l.jsx)(C.PencilIcon, { size: "xxs", color: N.A.colors.ICON_SUBTLE }),
        }),
    });
}
var L = n(731084),
    z = n(104317),
    B = n(886540),
    K = n(162052),
    G = n(790624);
function R(e) {
    let { projectId: t } = e,
        n = (0, u.bG)(
            [v.A],
            () => {
                let e = (0, B.Ji)(v.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, z.w)(e.steps) ??
                          (0, L.Dy)({
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
        className: m()(G.pG, K.Hz),
        "aria-hidden": !0,
        children: n ?? E.intl.string(I.default["Y8pS+n"]),
    });
}
let H = a.memo(function (e) {
    let t,
        n,
        { project: a, onSelect: r, selected: c = !1, renderActions: f, onContextMenu: k } = e,
        {
            status: S,
            unread: C,
            deleting: N,
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
        P = !N && "in_progress" === S,
        L = !N && C,
        z = N || "published" === S ? null : S,
        B = [null != z ? E.intl.string(D[z]) : null, L ? E.intl.string(I.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        H = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(a);
    return (0, l.jsxs)("li", {
        className: m()(G.AS, { [G.Cp]: N, [G.vX]: null != f }),
        "aria-busy": N,
        children: [
            L ? (0, l.jsx)("span", { className: G.dM, "aria-hidden": !0 }) : null,
            (0, l.jsxs)(p.D, {
                className: m()(G.nM, { [G.wH]: c, [G.gy]: L }),
                "aria-current": c ? "page" : void 0,
                tabIndex: N ? -1 : void 0,
                onMouseDown: N
                    ? void 0
                    : (e) => {
                          0 === e.button && (0, o.tf)(a.id);
                      },
                onClick: N ? void 0 : () => r(a),
                onContextMenu: null == k || N ? void 0 : (e) => k(e, a),
                children: [
                    (0, l.jsxs)("span", {
                        className: G.Kk,
                        children: [
                            (0, l.jsx)(x.A, { project: a, size: "sidebar", className: null != z ? T : void 0 }),
                            null != z ? (0, l.jsx)(M, { status: z }) : null,
                        ],
                    }),
                    (0, l.jsxs)("span", {
                        className: G.rf,
                        children: [
                            (0, l.jsx)(i.E, {
                                variant: "text-md/medium",
                                color: "none",
                                className: m()(G.UU, { [K.Hz]: P }),
                                children: a.name,
                            }),
                            N
                                ? (0, l.jsx)(i.E, {
                                      variant: "text-xs/normal",
                                      color: "none",
                                      className: m()(G.pG, G.sL),
                                      children: E.intl.string(I.default.Yh5pAc),
                                  })
                                : P
                                  ? (0, l.jsx)(R, { projectId: a.id })
                                  : null != H
                                    ? (0, l.jsx)(i.E, {
                                          variant: "text-xs/normal",
                                          color: "none",
                                          className: m()(G.pG, G.sL),
                                          children: (0, h.jb)(H, !1),
                                      })
                                    : null,
                        ],
                    }),
                    "" !== B ? (0, l.jsx)(g.A, { children: B }) : null,
                ],
            }),
            null != f
                ? (0, l.jsx)("div", {
                      className: m()(G.XI, { [G.Rn]: N }),
                      children: N ? (0, l.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE }) : f(a),
                  })
                : null,
        ],
    });
});
var W = n(655074);
function O(e) {
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
              className: W.p_,
              children: v.projects.map((e) =>
                  (0, l.jsx)(
                      H,
                      { project: e, onSelect: p, selected: e.id === x, renderActions: j, onContextMenu: k },
                      e.id,
                  ),
              ),
          })
        : "no_match" === v.kind
          ? (0, l.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: W.Ie,
                children: E.intl.string(I.default.X37fkR),
            })
          : "error" === v.kind
            ? (0, l.jsxs)("div", {
                  className: W.E8,
                  children: [
                      (0, l.jsx)(i.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(I.default.DJAPMO),
                      }),
                      (0, l.jsx)(r.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(I.default["WFJ/vb"]),
                          onClick: () => (0, o.listProjects)(h),
                      }),
                  ],
              })
            : "loading" === v.kind
              ? (0, l.jsx)("div", { className: W.E8, children: (0, l.jsx)(s.y, {}) })
              : (0, l.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: W.Ie,
                    children: E.intl.string(I.default["9/5sLV"]),
                });
}
