(t.r(l), t.d(l, { default: () => eh }));
var s = t(477900),
    n = t(582128),
    a = t(806163),
    r = t(499466),
    i = t(16619),
    c = t(751841),
    o = t(381991),
    d = t(503698),
    u = t.n(d),
    j = t(855986),
    p = t(534514),
    m = t(866665),
    h = t(408278),
    x = t(366605),
    g = t(95362),
    f = t(683438),
    C = t(939249),
    y = t(152367),
    b = t(834730),
    N = t(525113),
    v = t(441935),
    A = t(602991),
    k = t(588359),
    P = t(711014),
    E = t(287809),
    S = t(615890),
    I = t(260498),
    w = t(996485);
t(321073);
var O = t(313537);
function _() {
    return I.Ay.getRailProjects();
}
var G = t(434279),
    K = t(972013),
    D = t(927731),
    U = t(320448),
    z = t(847374),
    J = t(140735),
    R = t(821609),
    W = t(289873),
    F = t(682163),
    M = t(976860),
    L = t(71393),
    X = t(685105),
    B = t(55135);
function T(e) {
    let { title: l, className: t, children: a } = e,
        r = n.useId();
    return (0, s.jsxs)("section", {
        "aria-labelledby": r,
        className: t,
        children: [
            (0, s.jsx)(b.E, {
                id: r,
                variant: "body-sm/normal",
                color: "text-muted",
                className: B.D,
                role: "heading",
                "aria-level": 3,
                children: l,
            }),
            a,
        ],
    });
}
let q = "collaborating";
var H = t(738601),
    V = t(73153);
let Z = { collapsedByKey: {} },
    $ = Z;
class Y extends j.Ay.PersistedStore {
    static displayName = "ConjureProjectGroupsCollapseStore";
    static persistKey = "ConjureProjectGroupsCollapse";
    initialize(e) {
        $ = e ?? Z;
    }
    getState() {
        return $;
    }
    isCollapsed(e) {
        return $.collapsedByKey[e] ?? e === q;
    }
}
let Q = new Y(V.h, {
    CONJURE_PROJECT_GROUP_COLLAPSE_SET: function (e) {
        let { key: l, collapsed: t } = e;
        return $.collapsedByKey[l] !== t && (($ = { collapsedByKey: { ...$.collapsedByKey, [l]: t } }), !0);
    },
});
var ee = t(233470),
    el = t(652215),
    et = t(746080),
    es = t(97101),
    en = t(191850),
    ea = t(792996),
    er = t(5127);
let ei = { working: en.default["Y8pS+n"], unread: en.default["N+3Pzk"] };
function ec(e) {
    let { groupKey: l, title: t, guild: a, onOpen: r, projects: i, forceExpanded: c, className: o, children: d } = e,
        { collapsed: p, toggle: m } = (function (e, l) {
            let t = (0, j.bG)([Q], () => Q.isCollapsed(e)),
                [s, a] = n.useState(!1);
            s && !l && a(!1);
            let r = t && (!l || s),
                i = n.useCallback(() => {
                    (V.h.dispatch({ type: "CONJURE_PROJECT_GROUP_COLLAPSE_SET", key: e, collapsed: !r }), l && a(!0));
                }, [e, r, l]);
            return { collapsed: r, toggle: i };
        })(l, c),
        h = (0, j.bG)(
            H.Nl,
            () => {
                let e = null;
                for (let l of i) {
                    let t = (0, H.AK)(l.id);
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
                    ? (0, s.jsx)(F.Ay, {
                          guild: a,
                          size: F.Ay.Sizes.SMOL,
                          active: !0,
                          className: er.$t,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, s.jsx)(b.E, {
                    variant: "body-sm/medium",
                    color: "none",
                    lineClamp: 1,
                    className: er.hv,
                    children: t,
                }),
            ],
        }),
        f = p && null != h,
        y = p ? U.ChevronSmallRightIcon : z.ChevronSmallDownIcon;
    return (0, s.jsxs)("section", {
        "aria-label": t,
        className: o,
        children: [
            (0, s.jsxs)("div", {
                role: "heading",
                "aria-level": 3,
                className: er.x_,
                children: [
                    null != r
                        ? (0, s.jsx)(C.D, { className: u()(er.SZ, er.ab), onClick: r, children: g })
                        : (0, s.jsx)("span", { className: er.SZ, children: g }),
                    f
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(es.A, { activity: h, className: er.XJ }),
                                  (0, s.jsx)(J.A, { children: ea.intl.string(ei[h]) }),
                              ],
                          })
                        : null,
                    (0, s.jsx)(C.D, {
                        className: er.cH,
                        "aria-label": ea.intl.formatToPlainString(p ? en.default.bEFqlW : en.default["+0dHt6"], {
                            name: t,
                        }),
                        "aria-expanded": !p,
                        "aria-controls": x,
                        onClick: m,
                        children: (0, s.jsx)(y, { size: "xs", color: "currentColor", className: er.j7 }),
                    }),
                ],
            }),
            (0, s.jsx)("div", { id: x, hidden: p, children: p ? null : d }),
        ],
    });
}
function eo(e) {
    let { guildId: l, projects: t, forceExpanded: a, ...r } = e,
        i = (0, j.bG)([L.A], () => L.A.getGuild(l)),
        o = n.useCallback(() => {
            (0, M.pX)(el.BVt.CHANNEL(l, et.VV.CONJURE));
        }, [l]),
        d = n.useCallback((e) => (0, M.pX)((0, c.Oj)(l, e.id), { state: { conjureEntryPoint: "project_list" } }), [l]),
        { renderProjectActions: u, onProjectContextMenu: p } = r,
        m = n.useCallback((e) => u(e, l), [u, l]),
        h = n.useCallback((e, t) => p(e, t, l), [p, l]);
    return (0, s.jsx)(ec, {
        groupKey: l,
        title: i?.name ?? ea.intl.string(en.default["6bhivN"]),
        guild: i,
        onOpen: null != i ? o : void 0,
        projects: t,
        forceExpanded: a || t.some((e) => e.id === r.selectedProjectId),
        className: er.uW,
        children: (0, s.jsx)(X.A, { projects: t, ...r, onSelect: d, renderProjectActions: m, onProjectContextMenu: h }),
    });
}
function ed(e) {
    let { groups: l, query: t, ...n } = e,
        a = (0, j.bG)([I.Ay], () => I.Ay.getOwnedProjectsFetchState()),
        r = "" !== t.trim(),
        { personal: i, collaborating: c, servers: o, hasProjects: d } = l;
    return 0 === i.length && 0 === c.length && 0 === o.length
        ? d
            ? (0, s.jsx)(b.E, {
                  variant: "body-sm/normal",
                  color: "text-subtle",
                  className: er.WD,
                  children: ea.intl.string(en.default.X37fkR),
              })
            : "error" === a
              ? (0, s.jsxs)("div", {
                    className: er.E8,
                    children: [
                        (0, s.jsx)(b.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: ea.intl.string(en.default.DJAPMO),
                        }),
                        (0, s.jsx)(R.$, {
                            variant: "secondary",
                            size: "sm",
                            text: ea.intl.string(en.default["WFJ/vb"]),
                            onClick: () => (0, ee.listProjects)(),
                        }),
                    ],
                })
              : "success" !== a
                ? (0, s.jsx)("div", { className: er.E8, children: (0, s.jsx)(W.y, {}) })
                : null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  i.length > 0 || c.length > 0
                      ? (0, s.jsxs)(T, {
                            title: ea.intl.string(en.default.w9wAEy),
                            className: er.uW,
                            children: [
                                (0, s.jsx)(X.A, { projects: i, ...n, hideOwner: !0 }),
                                c.length > 0
                                    ? (0, s.jsx)(ec, {
                                          groupKey: q,
                                          title: ea.intl.string(en.default.dOfCq0),
                                          projects: c,
                                          forceExpanded: r || c.some((e) => e.id === n.selectedProjectId),
                                          className: er.mK,
                                          children: (0, s.jsx)(X.A, { projects: c, ...n, showServer: !0 }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  o.map((e) =>
                      (0, s.jsx)(eo, { guildId: e.guildId, projects: e.projects, forceExpanded: r, ...n }, e.guildId),
                  ),
              ],
          });
}
var eu = t(111582),
    ej = t(101766);
function ep(e) {
    let l,
        t,
        a,
        { selectedProjectId: r, workspaceGuildId: i, onNavigate: c } = e,
        [o, d] = n.useState(""),
        U = (0, ej.A)("sidebar"),
        z =
            ((l = (0, S.U)(_)),
            (t = (0, j.yK)([P.Ay], () => P.Ay.getFlattenedGuildIds())),
            (a = (0, j.bG)([E.default], () => E.default.getCurrentUser()?.id)),
            n.useMemo(
                () => ({
                    ...(function (e, l, t) {
                        let s = [],
                            n = [],
                            a = new Map(),
                            r = new Map(l.map((e, l) => [e, l]));
                        for (let l of e) {
                            let e = (0, O.fL)(l);
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
                    })((0, w.Z)(l, o), t, a),
                    hasProjects: l.length > 0,
                }),
                [l, t, a, o],
            )),
        J = (0, j.bG)([I.Ay], () => "success" === I.Ay.getOwnedProjectsFetchState()) && !z.hasProjects,
        R = n.useCallback((e) => c(e.id, "project_list"), [c]),
        W = n.useCallback(
            (e, l) => {
                let t = l ?? (0, G.wu)(e) ?? i;
                return null != t ? (0, s.jsx)(A.S, { project: e, guildId: t }) : null;
            },
            [i],
        ),
        F = n.useCallback(
            (e, l, t) => {
                let s = t ?? (0, G.wu)(l) ?? i;
                null != s && (0, A.V)(e, l, s);
            },
            [i],
        ),
        M = n.useCallback((e) => c(e, "create"), [c]),
        L = (0, eu.A)(M),
        X = (0, j.bG)([K.A], () => K.A.isPinned()),
        B = ea.intl.string(en.default["DE7U+m"]),
        T = null == r;
    return (0, s.jsxs)("nav", {
        className: er.pz,
        "aria-label": ea.intl.string(en.default.uk6jhJ),
        children: [
            (0, s.jsxs)("header", {
                className: er.wx,
                children: [
                    (0, s.jsxs)("div", {
                        className: er.DD,
                        children: [
                            (0, s.jsx)(p.D, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                className: er.UU,
                                children: ea.intl.string(en.default.uk6jhJ),
                            }),
                            (0, s.jsx)(N.A, { className: er.vr }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: er.$s,
                        children: [
                            (0, s.jsx)(v.A, { importing: L.importing, disabled: null == i, onClick: L.open }),
                            X
                                ? null
                                : (0, s.jsx)(m.m, {
                                      text: B,
                                      position: "bottom",
                                      asContainer: !0,
                                      ariaHidden: !0,
                                      children: (0, s.jsx)(h.K, {
                                          icon: x.PinIcon,
                                          variant: "icon-only",
                                          size: "sm",
                                          "aria-label": B,
                                          onClick: D._,
                                      }),
                                  }),
                            L.input,
                        ],
                    }),
                ],
            }),
            (0, s.jsxs)(g.Ip, {
                ref: U,
                className: er.XG,
                fade: !0,
                children: [
                    (0, s.jsx)("div", {
                        className: er.$P,
                        children: (0, s.jsx)(f.I, {
                            query: o,
                            onChange: d,
                            onClear: () => d(""),
                            size: "sm",
                            placeholder: ea.intl.string(en.default["2y8sUh"]),
                            "aria-label": ea.intl.string(en.default.u0kEN9),
                        }),
                    }),
                    (0, s.jsxs)(C.D, {
                        className: u()(er.ap, er.QI, { [er.Xw]: T }),
                        "aria-current": T ? "page" : void 0,
                        onClick: () => c(null),
                        children: [
                            (0, s.jsx)("span", {
                                className: er.DW,
                                children: (0, s.jsx)(y.MagicWandIcon, { size: "md", color: "currentColor" }),
                            }),
                            (0, s.jsx)(b.E, {
                                variant: "body-md/medium",
                                color: "none",
                                children: ea.intl.string(en.default.koUZKY),
                            }),
                        ],
                    }),
                    (0, s.jsx)(ed, {
                        groups: z,
                        query: o,
                        selectedProjectId: r,
                        onSelect: R,
                        renderProjectActions: W,
                        onProjectContextMenu: F,
                    }),
                ],
            }),
            J ? (0, s.jsx)(k.A, {}) : null,
        ],
    });
}
function em() {
    let e = (0, a.W5)({ path: c._g, exact: !0 }),
        l = (0, i.rX)("ConjureAppSidebar");
    return (0, s.jsx)(ep, { selectedProjectId: e?.params.projectId ?? null, workspaceGuildId: l, onNavigate: o.A });
}
function eh() {
    return (0, r.TW)("ConjureAppSidebar") ? (0, s.jsx)(em, {}) : null;
}
