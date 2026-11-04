n.d(t, { A: () => en });
var i = n(477900),
    l = n(582128),
    s = n(38021),
    r = n(236094),
    a = n(796637),
    o = n(117600);
n(321073);
var d = n(17928),
    c = n(115718),
    u = n(280157),
    h = n(513520),
    m = n(130100),
    g = n(151054),
    A = n(175452),
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
                (e = (0, d.bG)([m.A], () => m.A.getChannelAffinities())),
                l.useMemo(() => e.slice().sort((e, t) => t.score - e.score), [e])),
            r =
                (l.useEffect(() => {
                    (0, A.u)();
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
var I = n(403010),
    b = n(181079),
    j = n(518195),
    v = n(834730),
    G = n(276293),
    y = n(661531),
    R = n(983851),
    M = n(534890),
    T = n(331322),
    L = n(534514),
    U = n(17839),
    D = n(760658),
    P = n(105292),
    O = n(27948);
function w() {
    let e = l.useCallback(() => {
        (0, U.A)({ source: "favorites_empty_sidebar" });
    }, []);
    return (0, i.jsx)(v.E, {
        variant: "body-sm/medium",
        color: "text-muted",
        children: P.intl.format(D.default.LyZZLX, { onClick: e }),
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
                    (0, i.jsx)(G.N, { size: "xs", color: y.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: O.D_ }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: O._f,
                children: [
                    (0, i.jsx)(R.H, { size: "xs", color: y.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: O.VG }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: O._f,
                children: [
                    (0, i.jsx)(M.ChatIcon, { size: "xs", color: y.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: O.D_ }),
                ],
            }),
        ],
    });
}
function H() {
    let e = (0, o.fj)();
    return (0, i.jsxs)(T.B, {
        gap: 8,
        children: [
            e ? (0, i.jsx)("div", { className: O.yF }) : null,
            (0, i.jsxs)(T.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, i.jsx)(L.D, { variant: "heading-sm/semibold", children: P.intl.string(D.default["1n0TGE"]) }),
                    (0, i.jsx)(w, {}),
                ],
            }),
            e
                ? null
                : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { className: O.yF }), (0, i.jsx)(V, {})] }),
        ],
    });
}
var k = n(866665),
    B = n(939249),
    F = n(789645),
    z = n(821609),
    K = n(47167),
    W = n(485947),
    Y = n(61916),
    X = n(223863),
    J = n(994500),
    q = n(287809),
    Z = n(427262);
async function $(e) {
    let t = await (0, X.pk)(e);
    null != t && (await (0, j.nR)({ channelIds: [t], categoryName: P.intl.string(P.t.OGiMXJ), source: "suggestions" }));
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
                                  (0, i.jsx)(W.A, { className: Q.TK, children: P.intl.string(D.default.oHWnLy) }),
                                  (0, i.jsx)(k.m, {
                                      text: P.intl.string(P.t.WAI6xu),
                                      children: (0, i.jsx)(B.D, {
                                          className: Q.r,
                                          onClick: l,
                                          role: "button",
                                          "aria-label": P.intl.string(D.default.F3dWTe),
                                          children: (0, i.jsx)(F.P, {
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
                                      Y.N,
                                      {
                                          result: e,
                                          trailing: (0, i.jsx)(z.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: P.intl.string(P.t.OYkgVk),
                                              "aria-label": P.intl.formatToPlainString(D.default.Hevebj, {
                                                  name:
                                                      e.type === c.rD.USER
                                                          ? Z.Ay.getName(e.record)
                                                          : (0, K.m1)(e.record, q.default, J.A),
                                              }),
                                              onClick: () => $((0, X.hY)(e)),
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
    let t,
        n,
        { guildChannels: o, shouldShowEmptyState: c, hasNoChannels: u } = (0, a.D)(),
        { density: h } = (0, s.wR)();
    return (
        (t = (0, d.bG)([I.A], () => I.A.isConnected())),
        (n = (0, d.bG)([b.A], () => b.A.pruneInactiveThreads)),
        l.useEffect(() => {
            t && n && e();
            async function e() {
                try {
                    await (0, j.Nz)();
                } catch {
                    return;
                }
            }
        }, [t, n]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S, {}),
                c
                    ? (0, i.jsxs)("div", { className: et.XG, children: [(0, i.jsx)(ee, {}), (0, i.jsx)(H, {})] })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: Q._I, children: (0, i.jsx)(ee, { withDivider: !u }) }),
                              (0, i.jsx)(r.i, {
                                  ...e,
                                  guildChannels: o,
                                  guildChannelsVersion: 0,
                                  withGuildIcon: !1,
                                  density: h,
                              }),
                          ],
                      }),
            ],
        })
    );
}
