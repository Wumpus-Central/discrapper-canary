n.d(t, { A: () => ee });
var l = n(477900),
    i = n(582128),
    s = n(38021),
    r = n(912289),
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
            { results: l } = (0, g.R)({ channelFilter: n, includeFrecency: !1 }),
            s =
                (i.useEffect(() => {
                    (0, h.I)();
                }, []),
                (e = (0, d.bG)([m.A], () => m.A.getChannelAffinities())),
                i.useMemo(() => e.slice().sort((e, t) => t.score - e.score), [e])),
            r =
                (i.useEffect(() => {
                    (0, A.u)();
                }, []),
                (t = (0, d.bG)([f.A], () => f.A.getUserAffinitiesMap())),
                i.useMemo(() => {
                    let e = Array(t.size),
                        n = 0;
                    return (
                        t.forEach((t) => {
                            e[n++] = t;
                        }),
                        e.sort((e, t) => t.dmProbability - e.dmProbability)
                    );
                }, [t]));
        return i.useMemo(() => {
            let e = [],
                t = new Set(),
                i = { affinities: s, getChannelId: x, index: 0 },
                a = { affinities: r, getChannelId: N, index: 0 },
                d = 0;
            function h(e) {
                for (; e.index < e.affinities.length;) {
                    let l = e.affinities[e.index];
                    if ((e.index++, null == l)) continue;
                    let i = e.getChannelId(l);
                    if (null == i) continue;
                    let s = (0, u.A)(i);
                    if (!(null == s || !(0, E.N)(s) || t.has(s.record.id)) && n(s, !1)) return s;
                }
                return null;
            }
            for (; e.length < 4;) {
                let n = e.length % 2 == 0,
                    s = h(n ? i : a);
                if (
                    (null == s && (s = h(n ? a : i)),
                    null == s &&
                        (s = (function () {
                            for (; d < l.length;) {
                                let e = l[d];
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
        }, [s, n, 4, l, r]);
    })();
    return (
        i.useLayoutEffect(() => {
            (0, o.CU)(e);
        }, [e]),
        null
    );
}
let S = i.memo(function () {
    let { isEligible: e, isSelected: t } = (0, o.lK)(),
        n = i.useRef(!1);
    return (i.useLayoutEffect(() => {
        if (t) {
            n.current = !0;
            return;
        }
        (n.current || !e) && ((n.current = !1), (0, o.CU)(o.E9));
    }, [e, t]),
    t)
        ? (0, l.jsx)(_, {})
        : null;
});
var I = n(834730),
    b = n(276293),
    j = n(661531),
    v = n(983851),
    G = n(534890),
    R = n(331322),
    y = n(297264),
    L = n(17839),
    T = n(384539),
    M = n(105292),
    U = n(27948);
function D() {
    let e = i.useCallback(() => {
        (0, L.A)({ source: "favorites_empty_sidebar" });
    }, []);
    return (0, l.jsx)(I.E, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: M.intl.format(T.default.LyZZLX, { onClick: e }),
    });
}
function P() {
    return (0, l.jsxs)("div", {
        className: U.v0,
        "aria-hidden": "true",
        children: [
            (0, l.jsxs)("div", {
                className: U._f,
                children: [
                    (0, l.jsx)(b.N, { size: "xs", color: j.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: U.D_ }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: U._f,
                children: [
                    (0, l.jsx)(v.H, { size: "xs", color: j.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: U.VG }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: U._f,
                children: [
                    (0, l.jsx)(G.ChatIcon, { size: "xs", color: j.A.colors.ICON_MUTED }),
                    (0, l.jsx)("div", { className: U.D_ }),
                ],
            }),
        ],
    });
}
function O() {
    let e = (0, o.fj)();
    return (0, l.jsxs)(R.B, {
        gap: 8,
        children: [
            e ? (0, l.jsx)("div", { className: U.yF }) : null,
            (0, l.jsxs)(R.B, {
                gap: 8,
                padding: { top: 16, right: 16, bottom: 0, left: 16 },
                fullWidth: !1,
                children: [
                    (0, l.jsx)(y.D, { variant: "heading-md/semibold", children: M.intl.string(T.default["1n0TGE"]) }),
                    (0, l.jsx)(D, {}),
                ],
            }),
            e
                ? null
                : (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: U.yF }), (0, l.jsx)(P, {})] }),
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
    K = n(446244),
    W = n(994500),
    Y = n(287809),
    X = n(427262),
    q = n(16236);
async function J(e) {
    let t = await (0, K.pk)(e);
    null != t && (await (0, q.nR)({ channelIds: [t], categoryName: M.intl.string(M.t.OGiMXJ), source: "suggestions" }));
}
var Z = n(487470);
function $(e) {
    let { withDivider: t = !1 } = e,
        n = (0, o.Z0)(),
        i = (0, o.aj)();
    return 0 === n.length
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: Z.kL,
                      children: [
                          (0, l.jsxs)("div", {
                              className: Z.wx,
                              children: [
                                  (0, l.jsx)(F.A, { className: Z.TK, children: M.intl.string(T.default.oHWnLy) }),
                                  (0, l.jsx)(w.m, {
                                      text: M.intl.string(M.t.WAI6xu),
                                      children: (0, l.jsx)(V.D, {
                                          className: Z.r,
                                          onClick: i,
                                          role: "button",
                                          "aria-label": M.intl.string(T.default.F3dWTe),
                                          children: (0, l.jsx)(H.P, {
                                              size: "xs",
                                              color: "currentColor",
                                              className: Z.CB,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: Z.p_,
                              role: "list",
                              children: n.map((e, t) =>
                                  (0, l.jsx)(
                                      z.N,
                                      {
                                          result: e,
                                          trailing: (0, l.jsx)(k.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: M.intl.string(M.t.OYkgVk),
                                              "aria-label": M.intl.formatToPlainString(T.default.Hevebj, {
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
                  t ? (0, l.jsx)("div", { className: U.yF }) : null,
              ],
          });
}
var Q = n(906659);
function ee(e) {
    let { guildChannels: t, shouldShowEmptyState: n, hasNoChannels: i } = (0, a.D)(),
        { density: o } = (0, s.wR)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S, {}),
            n
                ? (0, l.jsxs)("div", { className: Q.XG, children: [(0, l.jsx)($, {}), (0, l.jsx)(O, {})] })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("div", { className: Z._I, children: (0, l.jsx)($, { withDivider: !i }) }),
                          (0, l.jsx)(r.i, {
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
