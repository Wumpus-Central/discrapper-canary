(s.r(l), s.d(l, { default: () => ex }));
var t = s(477900),
    n = s(582128),
    a = s(806163),
    r = s(499466),
    i = s(16619),
    c = s(751841),
    d = s(381991),
    o = s(503698),
    u = s.n(o),
    j = s(855986),
    m = s(534514),
    p = s(866665),
    h = s(408278),
    x = s(366605),
    g = s(95362),
    C = s(683438),
    f = s(939249),
    y = s(152367),
    N = s(834730),
    b = s(525113),
    v = s(441935),
    A = s(602991),
    P = s(588359),
    k = s(711014),
    S = s(287809),
    E = s(615890),
    I = s(260498),
    w = s(996485);
s(321073);
var _ = s(313537);
function O() {
    return I.Ay.getRailProjects();
}
var G = s(434279),
    K = s(972013),
    D = s(927731),
    U = s(320448),
    R = s(847374),
    z = s(140735),
    J = s(821609),
    L = s(289873),
    M = s(682163),
    W = s(976860),
    F = s(71393),
    X = s(685105),
    q = s(55135);
function B(e) {
    let { title: l, className: s, children: a } = e,
        r = n.useId();
    return (0, t.jsxs)("section", {
        "aria-labelledby": r,
        className: s,
        children: [
            (0, t.jsx)(N.E, {
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
var Z = s(738601),
    H = s(73153);
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
        let { key: l, collapsed: s } = e;
        return $.collapsedByKey[l] !== s && (($ = { collapsedByKey: { ...$.collapsedByKey, [l]: s } }), !0);
    },
});
var ee = s(233470),
    el = s(652215),
    es = s(746080),
    et = s(840091);
function en(e) {
    let { activity: l, className: s } = e;
    return "working" === l
        ? (0, t.jsx)("span", {
              className: u()(et.qS, s),
              "aria-hidden": !0,
              children: (0, t.jsx)(L.y, { type: L.t.SPINNING_CIRCLE_SIMPLE, className: et.u1, itemClassName: et.pu }),
          })
        : (0, t.jsx)("span", { className: u()(et.qS, et.Zm, s), "aria-hidden": !0 });
}
var ea = s(191850),
    er = s(792996),
    ei = s(5127);
let ec = { working: ea.default["Y8pS+n"], unread: ea.default["N+3Pzk"] };
function ed(e) {
    let { groupKey: l, title: s, guild: a, onOpen: r, projects: i, forceExpanded: c, className: d, children: o } = e,
        { collapsed: m, toggle: p } = (function (e, l) {
            let s = (0, j.bG)([Q], () => Q.isCollapsed(e)),
                [t, a] = n.useState(!1);
            t && !l && a(!1);
            let r = s && (!l || t),
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
                    let s = (0, Z.AK)(l.id);
                    if ("working" === s) return "working";
                    "unread" === s && (e = "unread");
                }
                return e;
            },
            [i],
        ),
        x = n.useId(),
        g = (0, t.jsxs)(t.Fragment, {
            children: [
                null != a
                    ? (0, t.jsx)(M.Ay, {
                          guild: a,
                          size: M.Ay.Sizes.SMOL,
                          active: !0,
                          className: ei.$t,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, t.jsx)(N.E, {
                    variant: "body-sm/medium",
                    color: "none",
                    lineClamp: 1,
                    className: ei.hv,
                    children: s,
                }),
            ],
        }),
        C = m && null != h,
        y = m ? U.ChevronSmallRightIcon : R.ChevronSmallDownIcon;
    return (0, t.jsxs)("section", {
        "aria-label": s,
        className: d,
        children: [
            (0, t.jsxs)("div", {
                role: "heading",
                "aria-level": 3,
                className: ei.x_,
                children: [
                    null != r
                        ? (0, t.jsx)(f.D, { className: u()(ei.SZ, ei.ab), onClick: r, children: g })
                        : (0, t.jsx)("span", { className: ei.SZ, children: g }),
                    C
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(en, { activity: h, className: ei.XJ }),
                                  (0, t.jsx)(z.A, { children: er.intl.string(ec[h]) }),
                              ],
                          })
                        : null,
                    (0, t.jsx)(f.D, {
                        className: ei.cH,
                        "aria-label": er.intl.formatToPlainString(m ? ea.default.bEFqlW : ea.default["+0dHt6"], {
                            name: s,
                        }),
                        "aria-expanded": !m,
                        "aria-controls": x,
                        onClick: p,
                        children: (0, t.jsx)(y, { size: "xs", color: "currentColor", className: ei.j7 }),
                    }),
                ],
            }),
            (0, t.jsx)("div", { id: x, hidden: m, children: m ? null : o }),
        ],
    });
}
function eo(e) {
    let { guildId: l, projects: s, forceExpanded: a, ...r } = e,
        i = (0, j.bG)([F.A], () => F.A.getGuild(l)),
        d = n.useCallback(() => {
            (0, W.pX)(el.BVt.CHANNEL(l, es.VV.CONJURE));
        }, [l]),
        o = n.useCallback((e) => (0, W.pX)((0, c.Oj)(l, e.id), { state: { conjureEntryPoint: "project_list" } }), [l]),
        { renderProjectActions: u, onProjectContextMenu: m } = r,
        p = n.useCallback((e) => u(e, l), [u, l]),
        h = n.useCallback((e, s) => m(e, s, l), [m, l]);
    return (0, t.jsx)(ed, {
        groupKey: l,
        title: i?.name ?? er.intl.string(ea.default["6bhivN"]),
        guild: i,
        onOpen: null != i ? d : void 0,
        projects: s,
        forceExpanded: a || s.some((e) => e.id === r.selectedProjectId),
        className: ei.uW,
        children: (0, t.jsx)(X.A, { projects: s, ...r, onSelect: o, renderProjectActions: p, onProjectContextMenu: h }),
    });
}
function eu(e) {
    let { groups: l, query: s, ...n } = e,
        a = (0, j.bG)([I.Ay], () => I.Ay.getOwnedProjectsFetchState()),
        r = "" !== s.trim(),
        { personal: i, collaborating: c, servers: d, hasProjects: o } = l;
    return 0 === i.length && 0 === c.length && 0 === d.length
        ? o
            ? (0, t.jsx)(N.E, {
                  variant: "body-sm/normal",
                  color: "text-subtle",
                  className: ei.WD,
                  children: er.intl.string(ea.default.X37fkR),
              })
            : "error" === a
              ? (0, t.jsxs)("div", {
                    className: ei.E8,
                    children: [
                        (0, t.jsx)(N.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: er.intl.string(ea.default.DJAPMO),
                        }),
                        (0, t.jsx)(J.$, {
                            variant: "secondary",
                            size: "sm",
                            text: er.intl.string(ea.default["WFJ/vb"]),
                            onClick: () => (0, ee.listProjects)(),
                        }),
                    ],
                })
              : "success" !== a
                ? (0, t.jsx)("div", { className: ei.E8, children: (0, t.jsx)(L.y, {}) })
                : null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  i.length > 0 || c.length > 0
                      ? (0, t.jsxs)(B, {
                            title: er.intl.string(ea.default.w9wAEy),
                            className: ei.uW,
                            children: [
                                (0, t.jsx)(X.A, { projects: i, ...n, hideOwner: !0 }),
                                c.length > 0
                                    ? (0, t.jsx)(ed, {
                                          groupKey: T,
                                          title: er.intl.string(ea.default.dOfCq0),
                                          projects: c,
                                          forceExpanded: r || c.some((e) => e.id === n.selectedProjectId),
                                          className: ei.mK,
                                          children: (0, t.jsx)(X.A, { projects: c, ...n }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  d.map((e) =>
                      (0, t.jsx)(eo, { guildId: e.guildId, projects: e.projects, forceExpanded: r, ...n }, e.guildId),
                  ),
              ],
          });
}
var ej = s(111582),
    em = s(101766);
function ep(e) {
    let l,
        s,
        a,
        { selectedProjectId: r, workspaceGuildId: i, onNavigate: c } = e,
        [d, o] = n.useState(""),
        U = (0, em.A)("sidebar"),
        R =
            ((l = (0, E.U)(O)),
            (s = (0, j.yK)([k.Ay], () => k.Ay.getFlattenedGuildIds())),
            (a = (0, j.bG)([S.default], () => S.default.getCurrentUser()?.id)),
            n.useMemo(
                () => ({
                    ...(function (e, l, s) {
                        let t = [],
                            n = [],
                            a = new Map(),
                            r = new Map(l.map((e, l) => [e, l]));
                        for (let l of e) {
                            let e = (0, _.fL)(l);
                            if (null == e) {
                                (l.owner_user_id === s ? t : n).push(l);
                                continue;
                            }
                            let r = a.get(e);
                            null != r ? r.push(l) : a.set(e, [l]);
                        }
                        function i(e) {
                            return r.get(e) ?? l.length;
                        }
                        let c = Array.from(a, (e) => {
                            let [l, s] = e;
                            return { guildId: l, projects: s };
                        });
                        return (
                            c.sort((e, l) => i(e.guildId) - i(l.guildId)), { personal: t, collaborating: n, servers: c }
                        );
                    })((0, w.Z)(l, d), s, a),
                    hasProjects: l.length > 0,
                }),
                [l, s, a, d],
            )),
        z = (0, j.bG)([I.Ay], () => "success" === I.Ay.getOwnedProjectsFetchState()) && !R.hasProjects,
        J = n.useCallback((e) => c(e.id, "project_list"), [c]),
        L = n.useCallback(
            (e, l) => {
                let s = l ?? (0, G.wu)(e) ?? i;
                return null != s ? (0, t.jsx)(A.S, { project: e, guildId: s }) : null;
            },
            [i],
        ),
        M = n.useCallback(
            (e, l, s) => {
                let t = s ?? (0, G.wu)(l) ?? i;
                null != t && (0, A.V)(e, l, t);
            },
            [i],
        ),
        W = n.useCallback((e) => c(e, "create"), [c]),
        F = (0, ej.A)(W),
        X = (0, j.bG)([K.A], () => K.A.isPinned()),
        q = er.intl.string(ea.default["DE7U+m"]),
        B = null == r;
    return (0, t.jsxs)("nav", {
        className: ei.pz,
        "aria-label": er.intl.string(ea.default.uk6jhJ),
        children: [
            (0, t.jsxs)("header", {
                className: ei.wx,
                children: [
                    (0, t.jsxs)("div", {
                        className: ei.DD,
                        children: [
                            (0, t.jsx)(m.D, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                className: ei.UU,
                                children: er.intl.string(ea.default.uk6jhJ),
                            }),
                            (0, t.jsx)(b.A, { className: ei.vr }),
                        ],
                    }),
                    (0, t.jsxs)("div", {
                        className: ei.$s,
                        children: [
                            (0, t.jsx)(v.A, { importing: F.importing, disabled: null == i, onClick: F.open }),
                            X
                                ? null
                                : (0, t.jsx)(p.m, {
                                      text: q,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, t.jsx)(h.K, {
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
            (0, t.jsxs)(g.Ip, {
                ref: U,
                className: ei.XG,
                fade: !0,
                children: [
                    (0, t.jsx)("div", {
                        className: ei.$P,
                        children: (0, t.jsx)(C.I, {
                            query: d,
                            onChange: o,
                            onClear: () => o(""),
                            size: "sm",
                            placeholder: er.intl.string(ea.default["2y8sUh"]),
                            "aria-label": er.intl.string(ea.default.u0kEN9),
                        }),
                    }),
                    (0, t.jsxs)(f.D, {
                        className: u()(ei.ap, ei.QI, { [ei.Xw]: B }),
                        "aria-current": B ? "page" : void 0,
                        onClick: () => c(null),
                        children: [
                            (0, t.jsx)("span", {
                                className: ei.DW,
                                children: (0, t.jsx)(y.MagicWandIcon, { size: "md", color: "currentColor" }),
                            }),
                            (0, t.jsx)(N.E, {
                                variant: "body-md/medium",
                                color: "none",
                                children: er.intl.string(ea.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, t.jsx)(eu, {
                        groups: R,
                        query: d,
                        selectedProjectId: r,
                        onSelect: J,
                        renderProjectActions: L,
                        onProjectContextMenu: M,
                    }),
                ],
            }),
            z ? (0, t.jsx)(P.A, {}) : null,
        ],
    });
}
function eh() {
    let e = (0, a.W5)({ path: c._g, exact: !0 }),
        l = (0, i.rX)("ConjureAppSidebar");
    return (0, t.jsx)(ep, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: l, onNavigate: d.A });
}
function ex() {
    return (0, r.TW)("ConjureAppSidebar") ? (0, t.jsx)(eh, {}) : null;
}
