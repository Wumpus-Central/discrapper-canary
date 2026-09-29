n.d(t, { A: () => en });
var i = n(477900),
    l = n(582128),
    s = n(38021),
    r = n(182707),
    a = n(796637),
    o = n(117600);
n(321073);
var d = n(17928),
    c = n(115718),
    u = n(280157),
    h = n(513520),
    A = n(130100),
    g = n(151054),
    m = n(219271),
    f = n(427358),
    p = n(734057),
    C = n(462617),
    E = n(507696);
function x(e) {
    return e.channelId;
}
function N(e) {
    return p.A.getDMFromUserId(e.otherUserId);
}
function _() {
    let e = (function () {
        let e,
            t,
            n = (0, C.A)(),
            { results: i } = (0, g.R)({ channelFilter: n, includeFrecency: !1 }),
            s =
                (l.useEffect(() => {
                    (0, h.I)();
                }, []),
                (e = (0, d.bG)([A.A], () => A.A.getChannelAffinities())),
                l.useMemo(() => e.slice().sort((e, t) => t.score - e.score), [e])),
            r =
                (l.useEffect(() => {
                    (0, m.u)();
                }, []),
                (t = (0, d.bG)([f.A], () => f.A.getUserAffinitiesMap())),
                l.useMemo(() => {
                    let e = Array(t.size),
                        n = 0;
                    return (
                        t.forEach((t) => {
                            e[n++] = t;
                        }),
                        e.sort((e, t) => t.dmProbability - e.dmProbability)
                    );
                }, [t]));
        return l.useMemo(() => {
            let e = [],
                t = new Set(),
                l = { affinities: s, getChannelId: x, index: 0 },
                a = { affinities: r, getChannelId: N, index: 0 },
                d = 0;
            function h(e) {
                for (; e.index < e.affinities.length;) {
                    let i = e.affinities[e.index];
                    if ((e.index++, null == i)) continue;
                    let l = e.getChannelId(i);
                    if (null == l) continue;
                    let s = (0, u.A)(l);
                    if (!(null == s || !(0, E.N)(s) || t.has(s.record.id)) && n(s, !1)) return s;
                }
                return null;
            }
            for (; e.length < 4;) {
                let n = e.length % 2 == 0,
                    s = h(n ? l : a);
                if (
                    (null == s && (s = h(n ? a : l)),
                    null == s &&
                        (s = (function () {
                            for (; d < i.length;) {
                                let e = i[d];
                                if ((d++, !(null == e || e.type === c.rD.HEADER || t.has(e.record.id)))) return e;
                            }
                            return null;
                        })()),
                    null == s)
                )
                    break;
                (t.add(s.record.id), e.push(s));
            }
            return e.length > 0 ? e : o.E9;
        }, [s, n, 4, i, r]);
    })();
    return (
        l.useLayoutEffect(() => {
            (0, o.CU)(e);
        }, [e]),
        null
    );
}
let S = l.memo(function () {
    let { isEligible: e, isSelected: t } = (0, o.lK)(),
        n = l.useRef(!1);
    return (l.useLayoutEffect(() => {
        if (t) {
            n.current = !0;
            return;
        }
        (n.current || !e) && ((n.current = !1), (0, o.CU)(o.E9));
    }, [e, t]),
    t)
        ? (0, i.jsx)(_, {})
        : null;
});
var I = n(192308),
    b = n(834730),
    G = n(276293),
    R = n(661531),
    j = n(983851),
    v = n(534890),
    y = n(331322),
    M = n(297264),
    T = n(93055),
    L = n(17839),
    U = n(384539),
    D = n(375708),
    O = n(27948);
function P() {
    let e = l.useCallback(() => {
        let { hasAccess: e } = (0, T.ad)();
        e
            ? (0, L.A)({ source: "favorites_empty_sidebar" })
            : (0, I.openModalLazy)(async () => {
                  let { default: e } = await n.e("307476").then(n.bind(n, 777023));
                  return (t) => (0, i.jsx)(e, { ...t, source: "favorites_empty_sidebar" });
              });
    }, []);
    return (0, i.jsx)(b.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: D.intl.format(U.default.LyZZLX, { onClick: e }),
    });
}
function V() {
    return (0, i.jsxs)("div", {
        className: O.v0,
        "aria-hidden": "true",
        children: [
            (0, i.jsxs)("div", {
                className: O._f,
                children: [
                    (0, i.jsx)(G.N, { size: "xs", color: R.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: O.D_ }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: O._f,
                children: [
                    (0, i.jsx)(j.H, { size: "xs", color: R.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: O.VG }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: O._f,
                children: [
                    (0, i.jsx)(v.ChatIcon, { size: "xs", color: R.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: O.D_ }),
                ],
            }),
        ],
    });
}
function w() {
    let e = (0, o.fj)();
    return (0, i.jsxs)(y.B, {
        gap: 8,
        children: [
            e ? (0, i.jsx)("div", { className: O.yF }) : null,
            (0, i.jsxs)(y.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, i.jsx)(M.D, { variant: "heading-md/semibold", children: D.intl.string(U.default["1n0TGE"]) }),
                    (0, i.jsx)(P, {}),
                ],
            }),
            e
                ? null
                : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { className: O.yF }), (0, i.jsx)(V, {})] }),
        ],
    });
}
var H = n(866665),
    B = n(939249),
    k = n(789645),
    F = n(821609),
    K = n(47167),
    z = n(485947),
    W = n(61916),
    Y = n(446244),
    X = n(994500),
    q = n(287809),
    Z = n(427262),
    J = n(16236);
async function $(e) {
    let t = await (0, Y.pk)(e);
    null != t && (await (0, J.nR)({ channelIds: [t], categoryName: D.intl.string(D.t.OGiMXJ), source: "suggestions" }));
}
var Q = n(487470);
function ee(e) {
    let { withDivider: t = !1 } = e,
        n = (0, o.Z0)(),
        l = (0, o.aj)();
    return 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: Q.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: Q.wx,
                              children: [
                                  (0, i.jsx)(z.A, { className: Q.TK, children: D.intl.string(U.default.oHWnLy) }),
                                  (0, i.jsx)(H.m, {
                                      text: D.intl.string(D.t.WAI6xu),
                                      children: (0, i.jsx)(B.D, {
                                          className: Q.r,
                                          onClick: l,
                                          role: "button",
                                          "aria-label": D.intl.string(U.default.F3dWTe),
                                          children: (0, i.jsx)(k.P, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: Q.CB,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: Q.p_,
                              role: "list",
                              children: n.map((e, t) =>
                                  (0, i.jsx)(
                                      W.N,
                                      {
                                          result: e,
                                          trailing: (0, i.jsx)(F.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: D.intl.string(D.t.OYkgVk),
                                              "aria-label": D.intl.formatToPlainString(U.default.Hevebj, {
                                                  name:
                                                      e.type === c.rD.USER
                                                          ? Z.Ay.getName(e.record)
                                                          : (0, K.m1)(e.record, q.default, X.A),
                                              }),
                                              onClick: () => $((0, Y.hY)(e)),
                                          }),
                                          "aria-posinset": t + 1,
                                          "aria-setsize": n.length,
                                      },
                                      `${e.type}-${e.record.id}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  t ? (0, i.jsx)("div", { className: O.yF }) : null,
              ],
          });
}
var et = n(906659);
function en(e) {
    let { guildChannels: t, shouldShowEmptyState: n, hasNoChannels: l } = (0, a.D)(),
        { density: o } = (0, s.wR)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {}),
            n
                ? (0, i.jsxs)("div", { className: et.XG, children: [(0, i.jsx)(ee, {}), (0, i.jsx)(w, {})] })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: Q._I, children: (0, i.jsx)(ee, { withDivider: !l }) }),
                          (0, i.jsx)(r.i, {
                              ...e,
                              guildChannels: t,
                              guildChannelsVersion: 0,
                              withGuildIcon: !1,
                              density: o,
                          }),
                      ],
                  }),
        ],
    });
}
