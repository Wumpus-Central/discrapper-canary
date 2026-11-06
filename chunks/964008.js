(t.r(l), t.d(l, { default: () => eh }));
var n = t(477900),
    s = t(582128),
    a = t(806163),
    r = t(499466),
    i = t(16619),
    d = t(751841),
    c = t(381991),
    o = t(503698),
    u = t.n(o),
    j = t(855986),
    p = t(534514),
    h = t(866665),
    m = t(408278),
    x = t(366605),
    g = t(95362),
    f = t(683438),
    y = t(939249),
    C = t(152367),
    b = t(834730),
    A = t(525113),
    v = t(441935),
    N = t(602991),
    P = t(588359);
t(321073);
var k = t(711014),
    S = t(287809),
    E = t(615890),
    w = t(260498),
    I = t(996485),
    _ = t(313537);
function G() {
    let e = w.Ay.getRailProjects(),
        l = new Set(e.map((e) => e.id));
    for (let t of w.Ay.getSharedWithMeProjects()) l.has(t.id) || e.push(t);
    return e;
}
var O = t(434279),
    K = t(972013),
    U = t(927731),
    z = t(140735),
    D = t(320448),
    J = t(847374),
    R = t(821609),
    W = t(289873),
    F = t(682163),
    M = t(71393),
    L = t(685105),
    B = t(919485);
let T = "collaborating";
var X = t(738601),
    q = t(73153);
let V = { collapsedByKey: {} },
    Z = V;
class $ extends j.Ay.PersistedStore {
    static displayName = "ConjureProjectGroupsCollapseStore";
    static persistKey = "ConjureProjectGroupsCollapse";
    initialize(e) {
        Z = e ?? V;
    }
    getState() {
        return Z;
    }
    isCollapsed(e) {
        return Z.collapsedByKey[e] ?? e === T;
    }
}
let H = new $(q.h, {
    CONJURE_PROJECT_GROUP_COLLAPSE_SET: function (e) {
        let { key: l, collapsed: t } = e;
        return Z.collapsedByKey[l] !== t && ((Z = { collapsedByKey: { ...Z.collapsedByKey, [l]: t } }), !0);
    },
});
var Y = t(233470),
    Q = t(976860),
    ee = t(652215),
    el = t(746080),
    et = t(97101),
    en = t(191850),
    es = t(792996),
    ea = t(5127);
let er = { working: en.default["Y8pS+n"], unread: en.default["N+3Pzk"] };
function ei(e) {
    let { groupKey: l, title: t, guild: a, onOpen: r, projects: i, forceExpanded: d, className: c, children: o } = e,
        { collapsed: p, toggle: h } = (function (e, l) {
            let t = (0, j.bG)([H], () => H.isCollapsed(e)),
                [n, a] = s.useState(!1);
            n && !l && a(!1);
            let r = t && (!l || n),
                i = s.useCallback(() => {
                    (q.h.dispatch({ type: "CONJURE_PROJECT_GROUP_COLLAPSE_SET", key: e, collapsed: !r }), l && a(!0));
                }, [e, r, l]);
            return { collapsed: r, toggle: i };
        })(l, d),
        x = (0, j.bG)(
            X.Nl,
            () => {
                let e = null;
                for (let l of i) {
                    let t = (0, X.AK)(l.id);
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
        C = p && null != x;
    return (0, n.jsxs)("section", {
        "aria-label": t,
        className: c,
        children: [
            (0, n.jsxs)("div", {
                role: "heading",
                "aria-level": 3,
                className: ea.x_,
                children: [
                    null != r
                        ? (0, n.jsx)(y.D, { className: u()(ea.SZ, ea.ab), onClick: r, children: f })
                        : (0, n.jsx)("span", { className: ea.SZ, children: f }),
                    C
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
            (0, n.jsx)("div", { id: g, hidden: p, children: p ? null : o }),
        ],
    });
}
function ed(e) {
    let { guildId: l, projects: t, forceExpanded: a, ...r } = e,
        i = (0, j.bG)([M.A], () => M.A.getGuild(l)),
        d = s.useCallback(() => {
            (0, Q.pX)(ee.BVt.CHANNEL(l, el.VV.CONJURE));
        }, [l]);
    return (0, n.jsx)(ei, {
        groupKey: l,
        title: i?.name ?? es.intl.string(en.default["6bhivN"]),
        guild: i,
        onOpen: null != i ? d : void 0,
        projects: t,
        forceExpanded: a || t.some((e) => e.id === r.selectedProjectId),
        className: ea.uW,
        children: (0, n.jsx)(L.A, { projects: t, ...r, hideServer: !0 }),
    });
}
function ec(e) {
    let { groups: l, query: t, ...s } = e,
        a = (0, j.bG)([w.Ay], () => w.Ay.getOwnedProjectsFetchState()),
        r = "" !== t.trim(),
        { personal: i, collaborating: d, servers: c, hasProjects: o } = l;
    return 0 === i.length && 0 === d.length && 0 === c.length
        ? o
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
                            onClick: () => (0, Y.listProjects)(),
                        }),
                    ],
                })
              : "success" !== a
                ? (0, n.jsx)("div", { className: ea.E8, children: (0, n.jsx)(W.y, {}) })
                : null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  i.length > 0 || d.length > 0
                      ? (0, n.jsxs)(B.A, {
                            title: es.intl.string(en.default.w9wAEy),
                            className: ea.uW,
                            children: [
                                (0, n.jsx)(L.A, { projects: i, ...s }),
                                d.length > 0
                                    ? (0, n.jsx)(ei, {
                                          groupKey: T,
                                          title: es.intl.string(en.default.dOfCq0),
                                          projects: d,
                                          forceExpanded: r || d.some((e) => e.id === s.selectedProjectId),
                                          className: ea.mK,
                                          children: (0, n.jsx)(L.A, { projects: d, ...s, showServer: !0 }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  c.map((e) =>
                      (0, n.jsx)(ed, { guildId: e.guildId, projects: e.projects, forceExpanded: r, ...s }, e.guildId),
                  ),
              ],
          });
}
var eo = t(111582),
    eu = t(101766);
function ej(e) {
    let l,
        t,
        a,
        { selectedProjectId: r, workspaceGuildId: i, onNavigate: d } = e,
        [c, o] = s.useState(""),
        z = (0, eu.A)("sidebar"),
        D =
            ((l = (0, E.U)(G)),
            (t = (0, j.yK)([k.Ay], () => k.Ay.getFlattenedGuildIds())),
            (a = (0, j.bG)([S.default], () => S.default.getCurrentUser()?.id)),
            s.useMemo(
                () => ({
                    ...(function (e, l, t) {
                        let n = [],
                            s = [],
                            a = new Map();
                        for (let l of e) {
                            let e = (0, _.fL)(l);
                            if (null == e) {
                                (l.owner_user_id === t ? n : s).push(l);
                                continue;
                            }
                            let r = a.get(e);
                            null != r ? r.push(l) : a.set(e, [l]);
                        }
                        let r = new Map(l.map((e, l) => [e, l]));
                        function i(e) {
                            return r.get(e) ?? l.length;
                        }
                        let d = Array.from(a, (e) => {
                            let [l, t] = e;
                            return { guildId: l, projects: t };
                        });
                        return (
                            d.sort((e, l) => i(e.guildId) - i(l.guildId)), { personal: n, collaborating: s, servers: d }
                        );
                    })((0, I.Z)(l, c), t, a),
                    hasProjects: l.length > 0,
                }),
                [l, t, a, c],
            )),
        J = (0, j.bG)([w.Ay], () => "success" === w.Ay.getOwnedProjectsFetchState()) && !D.hasProjects,
        R = s.useCallback((e) => d(e.id, "project_list"), [d]),
        W = s.useCallback(
            (e) => {
                let l = (0, O.wu)(e) ?? i;
                return null != l ? (0, n.jsx)(N.S, { project: e, guildId: l }) : null;
            },
            [i],
        ),
        F = s.useCallback(
            (e, l) => {
                let t = (0, O.wu)(l) ?? i;
                null != t && (0, N.V)(e, l, t);
            },
            [i],
        ),
        M = s.useCallback((e) => d(e, "create"), [d]),
        L = (0, eo.A)(i, M),
        B = (0, j.bG)([K.A], () => K.A.isPinned()),
        T = es.intl.string(en.default["DE7U+m"]),
        X = null == r;
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
                            B
                                ? null
                                : (0, n.jsx)(h.m, {
                                      text: T,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, n.jsx)(m.K, {
                                          icon: x.PinIcon,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": T,
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
                            query: c,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: es.intl.string(en.default["2y8sUh"]),
                            "aria-label": es.intl.string(en.default.u0kEN9),
                        }),
                    }),
                    (0, n.jsxs)(y.D, {
                        className: u()(ea.ap, ea.QI, { [ea.Xw]: X }),
                        "aria-current": X ? "page" : void 0,
                        onClick: () => d(null),
                        children: [
                            (0, n.jsx)("span", {
                                className: ea.DW,
                                children: (0, n.jsx)(C.MagicWandIcon, { size: "md", color: "currentColor" }),
                            }),
                            (0, n.jsx)(b.E, {
                                variant: "body-md/medium",
                                color: "none",
                                children: es.intl.string(en.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, n.jsx)(ec, {
                        groups: D,
                        query: c,
                        selectedProjectId: r,
                        onSelect: R,
                        renderProjectActions: W,
                        onProjectContextMenu: F,
                    }),
                ],
            }),
            J ? (0, n.jsx)(P.A, {}) : null,
        ],
    });
}
function ep() {
    let e = (0, a.W5)({ path: d._g, exact: !0 }),
        l = (0, i.rX)("ConjureAppSidebar");
    return (0, n.jsx)(ej, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: l, onNavigate: c.A });
}
function eh() {
    return (0, r.TW)("ConjureAppSidebar") ? (0, n.jsx)(ep, {}) : null;
}
