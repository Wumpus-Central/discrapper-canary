(t.r(l), t.d(l, { default: () => eh }));
var n = t(477900),
    s = t(582128),
    a = t(806163),
    r = t(499466),
    i = t(16619),
    c = t(751841),
    o = t(381991),
    d = t(503698),
    u = t.n(d),
    j = t(855986),
    p = t(534514),
    h = t(866665),
    m = t(408278),
    x = t(366605),
    g = t(95362),
    f = t(683438),
    C = t(939249),
    y = t(152367),
    b = t(834730),
    A = t(525113),
    v = t(441935),
    N = t(602991),
    k = t(588359),
    P = t(711014),
    S = t(287809),
    E = t(615890),
    I = t(260498),
    w = t(996485);
t(321073);
var _ = t(313537);
function O() {
    return I.Ay.getRailProjects();
}
var G = t(434279),
    K = t(972013),
    U = t(927731),
    z = t(140735),
    D = t(320448),
    J = t(847374),
    R = t(821609),
    W = t(289873),
    F = t(682163),
    M = t(976860),
    L = t(71393),
    X = t(685105),
    B = t(919485);
let T = "collaborating";
var q = t(738601),
    V = t(73153);
let Z = { collapsedByKey: {} },
    $ = Z;
class H extends j.Ay.PersistedStore {
    static displayName = "ConjureProjectGroupsCollapseStore";
    static persistKey = "ConjureProjectGroupsCollapse";
    initialize(e) {
        $ = e ?? Z;
    }
    getState() {
        return $;
    }
    isCollapsed(e) {
        return $.collapsedByKey[e] ?? e === T;
    }
}
let Y = new H(V.h, {
    CONJURE_PROJECT_GROUP_COLLAPSE_SET: function (e) {
        let { key: l, collapsed: t } = e;
        return $.collapsedByKey[l] !== t && (($ = { collapsedByKey: { ...$.collapsedByKey, [l]: t } }), !0);
    },
});
var Q = t(233470),
    ee = t(652215),
    el = t(746080),
    et = t(97101),
    en = t(191850),
    es = t(792996),
    ea = t(5127);
let er = { working: en.default["Y8pS+n"], unread: en.default["N+3Pzk"] };
function ei(e) {
    let { groupKey: l, title: t, guild: a, onOpen: r, projects: i, forceExpanded: c, className: o, children: d } = e,
        { collapsed: p, toggle: h } = (function (e, l) {
            let t = (0, j.bG)([Y], () => Y.isCollapsed(e)),
                [n, a] = s.useState(!1);
            n && !l && a(!1);
            let r = t && (!l || n),
                i = s.useCallback(() => {
                    (V.h.dispatch({ type: "CONJURE_PROJECT_GROUP_COLLAPSE_SET", key: e, collapsed: !r }), l && a(!0));
                }, [e, r, l]);
            return { collapsed: r, toggle: i };
        })(l, c),
        x = (0, j.bG)(
            q.Nl,
            () => {
                let e = null;
                for (let l of i) {
                    let t = (0, q.AK)(l.id);
                    if ("working" === t) return "working";
                    "unread" === t && (e = "unread");
                }
                return e;
            },
            [i],
        ),
        g = s.useId(),
        f = (0, n.jsxs)(n.Fragment, {
            children: [
                null != a
                    ? (0, n.jsx)(F.Ay, {
                          guild: a,
                          size: F.Ay.Sizes.SMOL,
                          active: !0,
                          className: ea.$t,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, n.jsx)(b.E, {
                    variant: "body-sm/medium",
                    color: "none",
                    lineClamp: 1,
                    className: ea.hv,
                    children: t,
                }),
            ],
        }),
        y = p && null != x;
    return (0, n.jsxs)("section", {
        "aria-label": t,
        className: o,
        children: [
            (0, n.jsxs)("div", {
                role: "heading",
                "aria-level": 3,
                className: ea.x_,
                children: [
                    null != r
                        ? (0, n.jsx)(C.D, { className: u()(ea.SZ, ea.ab), onClick: r, children: f })
                        : (0, n.jsx)("span", { className: ea.SZ, children: f }),
                    y
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(et.A, { activity: x, className: ea.XJ }),
                                  (0, n.jsx)(z.A, { children: es.intl.string(er[x]) }),
                              ],
                          })
                        : null,
                    (0, n.jsx)(m.K, {
                        icon: p ? D.ChevronSmallRightIcon : J.ChevronSmallDownIcon,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": es.intl.formatToPlainString(p ? en.default.bEFqlW : en.default["+0dHt6"], {
                            name: t,
                        }),
                        "aria-expanded": !p,
                        "aria-controls": g,
                        onClick: h,
                    }),
                ],
            }),
            (0, n.jsx)("div", { id: g, hidden: p, children: p ? null : d }),
        ],
    });
}
function ec(e) {
    let { guildId: l, projects: t, forceExpanded: a, ...r } = e,
        i = (0, j.bG)([L.A], () => L.A.getGuild(l)),
        o = s.useCallback(() => {
            (0, M.pX)(ee.BVt.CHANNEL(l, el.VV.CONJURE));
        }, [l]),
        d = s.useCallback((e) => (0, M.pX)((0, c.Oj)(l, e.id), { state: { conjureEntryPoint: "project_list" } }), [l]),
        { renderProjectActions: u, onProjectContextMenu: p } = r,
        h = s.useCallback((e) => u(e, l), [u, l]),
        m = s.useCallback((e, t) => p(e, t, l), [p, l]);
    return (0, n.jsx)(ei, {
        groupKey: l,
        title: i?.name ?? es.intl.string(en.default["6bhivN"]),
        guild: i,
        onOpen: null != i ? o : void 0,
        projects: t,
        forceExpanded: a || t.some((e) => e.id === r.selectedProjectId),
        className: ea.uW,
        children: (0, n.jsx)(X.A, {
            projects: t,
            ...r,
            onSelect: d,
            renderProjectActions: h,
            onProjectContextMenu: m,
            hideServer: !0,
        }),
    });
}
function eo(e) {
    let { groups: l, query: t, ...s } = e,
        a = (0, j.bG)([I.Ay], () => I.Ay.getOwnedProjectsFetchState()),
        r = "" !== t.trim(),
        { personal: i, collaborating: c, servers: o, hasProjects: d } = l;
    return 0 === i.length && 0 === c.length && 0 === o.length
        ? d
            ? (0, n.jsx)(b.E, {
                  variant: "body-sm/normal",
                  color: "text-subtle",
                  className: ea.WD,
                  children: es.intl.string(en.default.X37fkR),
              })
            : "error" === a
              ? (0, n.jsxs)("div", {
                    className: ea.E8,
                    children: [
                        (0, n.jsx)(b.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: es.intl.string(en.default.DJAPMO),
                        }),
                        (0, n.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: es.intl.string(en.default["WFJ/vb"]),
                            onClick: () => (0, Q.listProjects)(),
                        }),
                    ],
                })
              : "success" !== a
                ? (0, n.jsx)("div", { className: ea.E8, children: (0, n.jsx)(W.y, {}) })
                : null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  i.length > 0 || c.length > 0
                      ? (0, n.jsxs)(B.A, {
                            title: es.intl.string(en.default.w9wAEy),
                            className: ea.uW,
                            children: [
                                (0, n.jsx)(X.A, { projects: i, ...s }),
                                c.length > 0
                                    ? (0, n.jsx)(ei, {
                                          groupKey: T,
                                          title: es.intl.string(en.default.dOfCq0),
                                          projects: c,
                                          forceExpanded: r || c.some((e) => e.id === s.selectedProjectId),
                                          className: ea.mK,
                                          children: (0, n.jsx)(X.A, { projects: c, ...s, showServer: !0 }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  o.map((e) =>
                      (0, n.jsx)(ec, { guildId: e.guildId, projects: e.projects, forceExpanded: r, ...s }, e.guildId),
                  ),
              ],
          });
}
var ed = t(111582),
    eu = t(101766);
function ej(e) {
    let l,
        t,
        a,
        { selectedProjectId: r, workspaceGuildId: i, onNavigate: c } = e,
        [o, d] = s.useState(""),
        z = (0, eu.A)("sidebar"),
        D =
            ((l = (0, E.U)(O)),
            (t = (0, j.yK)([P.Ay], () => P.Ay.getFlattenedGuildIds())),
            (a = (0, j.bG)([S.default], () => S.default.getCurrentUser()?.id)),
            s.useMemo(
                () => ({
                    ...(function (e, l, t) {
                        let n = [],
                            s = [],
                            a = new Map(),
                            r = new Map(l.map((e, l) => [e, l]));
                        for (let l of e) {
                            let e = (0, _.fL)(l);
                            if (null == e) {
                                (l.owner_user_id === t ? n : s).push(l);
                                continue;
                            }
                            let r = a.get(e);
                            null != r ? r.push(l) : a.set(e, [l]);
                        }
                        function i(e) {
                            return r.get(e) ?? l.length;
                        }
                        let c = Array.from(a, (e) => {
                            let [l, t] = e;
                            return { guildId: l, projects: t };
                        });
                        return (
                            c.sort((e, l) => i(e.guildId) - i(l.guildId)), { personal: n, collaborating: s, servers: c }
                        );
                    })((0, w.Z)(l, o), t, a),
                    hasProjects: l.length > 0,
                }),
                [l, t, a, o],
            )),
        J = (0, j.bG)([I.Ay], () => "success" === I.Ay.getOwnedProjectsFetchState()) && !D.hasProjects,
        R = s.useCallback((e) => c(e.id, "project_list"), [c]),
        W = s.useCallback(
            (e, l) => {
                let t = l ?? (0, G.wu)(e) ?? i;
                return null != t ? (0, n.jsx)(N.S, { project: e, guildId: t }) : null;
            },
            [i],
        ),
        F = s.useCallback(
            (e, l, t) => {
                let n = t ?? (0, G.wu)(l) ?? i;
                null != n && (0, N.V)(e, l, n);
            },
            [i],
        ),
        M = s.useCallback((e) => c(e, "create"), [c]),
        L = (0, ed.A)(M),
        X = (0, j.bG)([K.A], () => K.A.isPinned()),
        B = es.intl.string(en.default["DE7U+m"]),
        T = null == r;
    return (0, n.jsxs)("nav", {
        className: ea.pz,
        "aria-label": es.intl.string(en.default.uk6jhJ),
        children: [
            (0, n.jsxs)("header", {
                className: ea.wx,
                children: [
                    (0, n.jsxs)("div", {
                        className: ea.DD,
                        children: [
                            (0, n.jsx)(p.D, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                className: ea.UU,
                                children: es.intl.string(en.default.uk6jhJ),
                            }),
                            (0, n.jsx)(A.A, { className: ea.vr }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: ea.$s,
                        children: [
                            (0, n.jsx)(v.A, { importing: L.importing, disabled: null == i, onClick: L.open }),
                            X
                                ? null
                                : (0, n.jsx)(h.m, {
                                      text: B,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, n.jsx)(m.K, {
                                          icon: x.PinIcon,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": B,
                                          onClick: U._,
                                      }),
                                  }),
                            L.input,
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)(g.Ip, {
                ref: z,
                className: ea.XG,
                fade: !0,
                children: [
                    (0, n.jsx)("div", {
                        className: ea.$P,
                        children: (0, n.jsx)(f.I, {
                            query: o,
                            onChange: d,
                            onClear: () => d(""),
                            size: "sm",
                            placeholder: es.intl.string(en.default["2y8sUh"]),
                            "aria-label": es.intl.string(en.default.u0kEN9),
                        }),
                    }),
                    (0, n.jsxs)(C.D, {
                        className: u()(ea.ap, ea.QI, { [ea.Xw]: T }),
                        "aria-current": T ? "page" : void 0,
                        onClick: () => c(null),
                        children: [
                            (0, n.jsx)("span", {
                                className: ea.DW,
                                children: (0, n.jsx)(y.MagicWandIcon, { size: "md", color: "currentColor" }),
                            }),
                            (0, n.jsx)(b.E, {
                                variant: "body-md/medium",
                                color: "none",
                                children: es.intl.string(en.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, n.jsx)(eo, {
                        groups: D,
                        query: o,
                        selectedProjectId: r,
                        onSelect: R,
                        renderProjectActions: W,
                        onProjectContextMenu: F,
                    }),
                ],
            }),
            J ? (0, n.jsx)(k.A, {}) : null,
        ],
    });
}
function ep() {
    let e = (0, a.W5)({ path: c._g, exact: !0 }),
        l = (0, i.rX)("ConjureAppSidebar");
    return (0, n.jsx)(ej, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: l, onNavigate: o.A });
}
function eh() {
    return (0, r.TW)("ConjureAppSidebar") ? (0, n.jsx)(ep, {}) : null;
}
