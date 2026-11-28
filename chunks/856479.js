(t.r(l), t.d(l, { default: () => ex }));
var s = t(477900),
    n = t(582128),
    a = t(806163),
    r = t(499466),
    i = t(16619),
    c = t(751841),
    d = t(381991),
    o = t(503698),
    u = t.n(o),
    j = t(855986),
    m = t(534514),
    p = t(866665),
    h = t(408278),
    x = t(366605),
    g = t(95362),
    C = t(683438),
    f = t(939249),
    y = t(152367),
    N = t(834730),
    b = t(525113),
    v = t(441935),
    A = t(602991),
    P = t(588359),
    k = t(711014),
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
    D = t(927731),
    U = t(320448),
    R = t(847374),
    z = t(140735),
    J = t(821609),
    L = t(289873),
    M = t(682163),
    W = t(976860),
    F = t(71393),
    X = t(685105),
    q = t(55135);
function B(e) {
    let { title: l, className: t, children: a } = e,
        r = n.useId();
    return (0, s.jsxs)("section", {
        "aria-labelledby": r,
        className: t,
        children: [
            (0, s.jsx)(N.E, {
                id: r,
                variant: "body-sm/normal",
                color: "text-muted",
                className: q.D,
                role: "heading",
                "aria-level": 3,
                children: l,
            }),
            a,
        ],
    });
}
let T = "collaborating";
var Z = t(738601),
    H = t(73153);
let V = { collapsedByKey: {} },
    $ = V;
class Y extends j.Ay.PersistedStore {
    static displayName = "ConjureProjectGroupsCollapseStore";
    static persistKey = "ConjureProjectGroupsCollapse";
    initialize(e) {
        $ = e ?? V;
    }
    getState() {
        return $;
    }
    isCollapsed(e) {
        return $.collapsedByKey[e] ?? e === T;
    }
}
let Q = new Y(H.h, {
    CONJURE_PROJECT_GROUP_COLLAPSE_SET: function (e) {
        let { key: l, collapsed: t } = e;
        return $.collapsedByKey[l] !== t && (($ = { collapsedByKey: { ...$.collapsedByKey, [l]: t } }), !0);
    },
});
var ee = t(233470),
    el = t(652215),
    et = t(746080),
    es = t(840091);
function en(e) {
    let { activity: l, className: t } = e;
    return "working" === l
        ? (0, s.jsx)("span", {
              className: u()(es.qS, t),
              "aria-hidden": !0,
              children: (0, s.jsx)(L.y, { type: L.t.SPINNING_CIRCLE_SIMPLE, className: es.u1, itemClassName: es.pu }),
          })
        : (0, s.jsx)("span", { className: u()(es.qS, es.Zm, t), "aria-hidden": !0 });
}
var ea = t(258576),
    er = t(792996),
    ei = t(5127);
let ec = { working: ea.default["Y8pS+n"], unread: ea.default["N+3Pzk"] };
function ed(e) {
    let { groupKey: l, title: t, guild: a, onOpen: r, projects: i, forceExpanded: c, className: d, children: o } = e,
        { collapsed: m, toggle: p } = (function (e, l) {
            let t = (0, j.bG)([Q], () => Q.isCollapsed(e)),
                [s, a] = n.useState(!1);
            s && !l && a(!1);
            let r = t && (!l || s),
                i = n.useCallback(() => {
                    (H.h.dispatch({ type: "CONJURE_PROJECT_GROUP_COLLAPSE_SET", key: e, collapsed: !r }), l && a(!0));
                }, [e, r, l]);
            return { collapsed: r, toggle: i };
        })(l, c),
        h = (0, j.bG)(
            Z.Nl,
            () => {
                let e = null;
                for (let l of i) {
                    let t = (0, Z.AK)(l.id);
                    if ("working" === t) return "working";
                    "unread" === t && (e = "unread");
                }
                return e;
            },
            [i],
        ),
        x = n.useId(),
        g = (0, s.jsxs)(s.Fragment, {
            children: [
                null != a
                    ? (0, s.jsx)(M.Ay, {
                          guild: a,
                          size: M.Ay.Sizes.SMOL,
                          active: !0,
                          className: ei.$t,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, s.jsx)(N.E, {
                    variant: "body-sm/medium",
                    color: "none",
                    lineClamp: 1,
                    className: ei.hv,
                    children: t,
                }),
            ],
        }),
        C = m && null != h,
        y = m ? U.ChevronSmallRightIcon : R.ChevronSmallDownIcon;
    return (0, s.jsxs)("section", {
        "aria-label": t,
        className: d,
        children: [
            (0, s.jsxs)("div", {
                role: "heading",
                "aria-level": 3,
                className: ei.x_,
                children: [
                    null != r
                        ? (0, s.jsx)(f.D, { className: u()(ei.SZ, ei.ab), onClick: r, children: g })
                        : (0, s.jsx)("span", { className: ei.SZ, children: g }),
                    C
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(en, { activity: h, className: ei.XJ }),
                                  (0, s.jsx)(z.A, { children: er.intl.string(ec[h]) }),
                              ],
                          })
                        : null,
                    (0, s.jsx)(f.D, {
                        className: ei.cH,
                        "aria-label": er.intl.formatToPlainString(m ? ea.default.bEFqlW : ea.default["+0dHt6"], {
                            name: t,
                        }),
                        "aria-expanded": !m,
                        "aria-controls": x,
                        onClick: p,
                        children: (0, s.jsx)(y, { size: "xs", color: "currentColor", className: ei.j7 }),
                    }),
                ],
            }),
            (0, s.jsx)("div", { id: x, hidden: m, children: m ? null : o }),
        ],
    });
}
function eo(e) {
    let { guildId: l, projects: t, forceExpanded: a, ...r } = e,
        i = (0, j.bG)([F.A], () => F.A.getGuild(l)),
        d = n.useCallback(() => {
            let e;
            return ((e = et.VV.CONJURE), void (0, W.pX)(el.BVt.CHANNEL(l, e)));
        }, [l]),
        o = n.useCallback((e) => (0, W.pX)((0, c.Oj)(l, e.id), { state: { conjureEntryPoint: "project_list" } }), [l]),
        { renderProjectActions: u, onProjectContextMenu: m } = r,
        p = n.useCallback((e) => u(e, l), [u, l]),
        h = n.useCallback((e, t) => m(e, t, l), [m, l]);
    return (0, s.jsx)(ed, {
        groupKey: l,
        title: i?.name ?? er.intl.string(ea.default["6bhivN"]),
        guild: i,
        onOpen: null != i ? d : void 0,
        projects: t,
        forceExpanded: a || t.some((e) => e.id === r.selectedProjectId),
        className: ei.uW,
        children: (0, s.jsx)(X.A, { projects: t, ...r, onSelect: o, renderProjectActions: p, onProjectContextMenu: h }),
    });
}
function eu(e) {
    let { groups: l, query: t, ...n } = e,
        a = (0, j.bG)([I.Ay], () => I.Ay.getOwnedProjectsFetchState()),
        r = "" !== t.trim(),
        { personal: i, collaborating: c, servers: d, hasProjects: o } = l;
    return 0 === i.length && 0 === c.length && 0 === d.length
        ? o
            ? (0, s.jsx)(N.E, {
                  variant: "body-sm/normal",
                  color: "text-subtle",
                  className: ei.WD,
                  children: er.intl.string(ea.default.X37fkR),
              })
            : "error" === a
              ? (0, s.jsxs)("div", {
                    className: ei.E8,
                    children: [
                        (0, s.jsx)(N.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: er.intl.string(ea.default.DJAPMO),
                        }),
                        (0, s.jsx)(J.$, {
                            variant: "secondary",
                            size: "sm",
                            text: er.intl.string(ea.default["WFJ/vb"]),
                            onClick: () => (0, ee.listProjects)(),
                        }),
                    ],
                })
              : "success" !== a
                ? (0, s.jsx)("div", { className: ei.E8, children: (0, s.jsx)(L.y, {}) })
                : null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  i.length > 0 || c.length > 0
                      ? (0, s.jsxs)(B, {
                            title: er.intl.string(ea.default.w9wAEy),
                            className: ei.uW,
                            children: [
                                (0, s.jsx)(X.A, { projects: i, ...n, hideOwner: !0 }),
                                c.length > 0
                                    ? (0, s.jsx)(ed, {
                                          groupKey: T,
                                          title: er.intl.string(ea.default.dOfCq0),
                                          projects: c,
                                          forceExpanded: r || c.some((e) => e.id === n.selectedProjectId),
                                          className: ei.mK,
                                          children: (0, s.jsx)(X.A, { projects: c, ...n }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  d.map((e) =>
                      (0, s.jsx)(eo, { guildId: e.guildId, projects: e.projects, forceExpanded: r, ...n }, e.guildId),
                  ),
              ],
          });
}
var ej = t(111582),
    em = t(101766);
function ep(e) {
    let l,
        t,
        a,
        { selectedProjectId: r, workspaceGuildId: i, onNavigate: c } = e,
        [d, o] = n.useState(""),
        U = (0, em.A)("sidebar"),
        R =
            ((l = (0, E.U)(O)),
            (t = (0, j.yK)([k.Ay], () => k.Ay.getFlattenedGuildIds())),
            (a = (0, j.bG)([S.default], () => S.default.getCurrentUser()?.id)),
            n.useMemo(
                () => ({
                    ...(function (e, l, t) {
                        let s = [],
                            n = [],
                            a = new Map(),
                            r = new Map(l.map((e, l) => [e, l]));
                        for (let l of e) {
                            let e = (0, _.fL)(l);
                            if (null == e) {
                                (l.owner_user_id === t ? s : n).push(l);
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
                            c.sort((e, l) => i(e.guildId) - i(l.guildId)), { personal: s, collaborating: n, servers: c }
                        );
                    })((0, w.Z)(l, d), t, a),
                    hasProjects: l.length > 0,
                }),
                [l, t, a, d],
            )),
        z = (0, j.bG)([I.Ay], () => "success" === I.Ay.getOwnedProjectsFetchState()) && !R.hasProjects,
        J = n.useCallback((e) => c(e.id, "project_list"), [c]),
        L = n.useCallback(
            (e, l) => {
                let t = l ?? (0, G.wu)(e) ?? i;
                return null != t ? (0, s.jsx)(A.S, { project: e, guildId: t }) : null;
            },
            [i],
        ),
        M = n.useCallback(
            (e, l, t) => {
                let s = t ?? (0, G.wu)(l) ?? i;
                null != s && (0, A.V)(e, l, s);
            },
            [i],
        ),
        W = n.useCallback((e) => c(e, "create"), [c]),
        F = (0, ej.A)(W),
        X = (0, j.bG)([K.A], () => K.A.isPinned()),
        q = er.intl.string(ea.default["DE7U+m"]),
        B = null == r;
    return (0, s.jsxs)("nav", {
        className: ei.pz,
        "aria-label": er.intl.string(ea.default.uk6jhJ),
        children: [
            (0, s.jsxs)("header", {
                className: ei.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: ei.DD,
                        children: [
                            (0, s.jsx)(m.D, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                className: ei.UU,
                                children: er.intl.string(ea.default.uk6jhJ),
                            }),
                            (0, s.jsx)(b.A, { className: ei.vr }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: ei.$s,
                        children: [
                            (0, s.jsx)(v.A, { importing: F.importing, disabled: null == i, onClick: F.open }),
                            X
                                ? null
                                : (0, s.jsx)(p.m, {
                                      text: q,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, s.jsx)(h.K, {
                                          icon: x.PinIcon,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": q,
                                          onClick: D._,
                                      }),
                                  }),
                            F.input,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(g.Ip, {
                ref: U,
                className: ei.XG,
                fade: !0,
                children: [
                    (0, s.jsx)("div", {
                        className: ei.$P,
                        children: (0, s.jsx)(C.I, {
                            query: d,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: er.intl.string(ea.default["2y8sUh"]),
                            "aria-label": er.intl.string(ea.default.u0kEN9),
                        }),
                    }),
                    (0, s.jsxs)(f.D, {
                        className: u()(ei.ap, ei.QI, { [ei.Xw]: B }),
                        "aria-current": B ? "page" : void 0,
                        onClick: () => c(null),
                        children: [
                            (0, s.jsx)("span", {
                                className: ei.DW,
                                children: (0, s.jsx)(y.MagicWandIcon, { size: "md", color: "currentColor" }),
                            }),
                            (0, s.jsx)(N.E, {
                                variant: "body-md/medium",
                                color: "none",
                                children: er.intl.string(ea.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, s.jsx)(eu, {
                        groups: R,
                        query: d,
                        selectedProjectId: r,
                        onSelect: J,
                        renderProjectActions: L,
                        onProjectContextMenu: M,
                    }),
                ],
            }),
            z ? (0, s.jsx)(P.A, {}) : null,
        ],
    });
}
function eh() {
    let e = (0, a.W5)({ path: c._g, exact: !0 }),
        l = (0, i.rX)("ConjureAppSidebar");
    return (0, s.jsx)(ep, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: l, onNavigate: d.A });
}
function ex() {
    return (0, r.TW)("ConjureAppSidebar") ? (0, s.jsx)(eh, {}) : null;
}
