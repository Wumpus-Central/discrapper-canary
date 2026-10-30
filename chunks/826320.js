n.d(t, { A: () => ee });
var i = n(477900),
    l = n(582128),
    s = n(38021),
    r = n(760401),
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
var I = n(834730),
    b = n(276293),
    j = n(661531),
    G = n(983851),
    v = n(534890),
    R = n(331322),
    y = n(297264),
    T = n(17839),
    M = n(656223),
    L = n(105292),
    U = n(27948);
function D() {
    let e = l.useCallback(() => {
        (0, T.A)({ source: "favorites_empty_sidebar" });
    }, []);
    return (0, i.jsx)(I.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: L.intl.format(M.default.LyZZLX, { onClick: e }),
    });
}
function O() {
    return (0, i.jsxs)("div", {
        className: U.v0,
        "aria-hidden": "true",
        children: [
            (0, i.jsxs)("div", {
                className: U._f,
                children: [
                    (0, i.jsx)(b.N, { size: "xs", color: j.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: U.D_ }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: U._f,
                children: [
                    (0, i.jsx)(G.H, { size: "xs", color: j.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: U.VG }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: U._f,
                children: [
                    (0, i.jsx)(v.ChatIcon, { size: "xs", color: j.A.colors.ICON_MUTED }),
                    (0, i.jsx)("div", { className: U.D_ }),
                ],
            }),
        ],
    });
}
function P() {
    let e = (0, o.fj)();
    return (0, i.jsxs)(R.B, {
        gap: 8,
        children: [
            e ? (0, i.jsx)("div", { className: U.yF }) : null,
            (0, i.jsxs)(R.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, i.jsx)(y.D, { variant: "heading-md/semibold", children: L.intl.string(M.default["1n0TGE"]) }),
                    (0, i.jsx)(D, {}),
                ],
            }),
            e
                ? null
                : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { className: U.yF }), (0, i.jsx)(O, {})] }),
        ],
    });
}
var w = n(866665),
    V = n(939249),
    H = n(789645),
    k = n(821609),
    B = n(47167),
    F = n(485947),
    z = n(61916),
    K = n(223863),
    W = n(994500),
    Y = n(287809),
    X = n(427262),
    q = n(16236);
async function J(e) {
    let t = await (0, K.pk)(e);
    null != t && (await (0, q.nR)({ channelIds: [t], categoryName: L.intl.string(L.t.OGiMXJ), source: "suggestions" }));
}
var Z = n(487470);
function $(e) {
    let { withDivider: t = !1 } = e,
        n = (0, o.Z0)(),
        l = (0, o.aj)();
    return 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: Z.kL,
                      children: [
                          (0, i.jsxs)("div", {
                              className: Z.wx,
                              children: [
                                  (0, i.jsx)(F.A, { className: Z.TK, children: L.intl.string(M.default.oHWnLy) }),
                                  (0, i.jsx)(w.m, {
                                      text: L.intl.string(L.t.WAI6xu),
                                      children: (0, i.jsx)(V.D, {
                                          className: Z.r,
                                          onClick: l,
                                          role: "button",
                                          "aria-label": L.intl.string(M.default.F3dWTe),
                                          children: (0, i.jsx)(H.P, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: Z.CB,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: Z.p_,
                              role: "list",
                              children: n.map((e, t) =>
                                  (0, i.jsx)(
                                      z.N,
                                      {
                                          result: e,
                                          trailing: (0, i.jsx)(k.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: L.intl.string(L.t.OYkgVk),
                                              "aria-label": L.intl.formatToPlainString(M.default.Hevebj, {
                                                  name:
                                                      e.type === c.rD.USER
                                                          ? X.Ay.getName(e.record)
                                                          : (0, B.m1)(e.record, Y.default, W.A),
                                              }),
                                              onClick: () => J((0, K.hY)(e)),
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
                  t ? (0, i.jsx)("div", { className: U.yF }) : null,
              ],
          });
}
var Q = n(906659);
function ee(e) {
    let { guildChannels: t, shouldShowEmptyState: n, hasNoChannels: l } = (0, a.D)(),
        { density: o } = (0, s.wR)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S, {}),
            n
                ? (0, i.jsxs)("div", { className: Q.XG, children: [(0, i.jsx)($, {}), (0, i.jsx)(P, {})] })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: Z._I, children: (0, i.jsx)($, { withDivider: !l }) }),
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
