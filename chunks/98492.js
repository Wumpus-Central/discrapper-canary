(t.r(n), t.d(n, { default: () => $ }));
var l = t(477900),
    i = t(582128),
    s = t(333007),
    a = t(806163),
    d = t(991690),
    r = t(192308),
    c = t(821609),
    u = t(627363),
    o = t(828936),
    h = t(631828),
    f = t(855986),
    p = t(138399),
    g = t(91242),
    A = t(672929),
    w = t(20465),
    m = t(249288),
    j = t(251363);
function x(e, n) {
    let [t, l] = i.useState(null);
    return (
        i.useEffect(() => {
            if (!n) return;
            function t() {
                let n = (function (e) {
                    if (null == e) return null;
                    let n = e.getBoundingClientRect();
                    return n.width < 1 || n.height < 1
                        ? null
                        : { left: n.left, top: n.top, width: n.width, height: n.height };
                })((0, j.ow)(null, e));
                l((e) =>
                    (
                        null == e || null == n
                            ? e === n
                            : e.left === n.left && e.top === n.top && e.width === n.width && e.height === n.height
                    )
                        ? e
                        : n,
                );
            }
            t();
            let i = window.setInterval(t, 250);
            return (
                window.addEventListener("resize", t),
                () => {
                    (window.clearInterval(i), window.removeEventListener("resize", t));
                }
            );
        }, [n, e]),
        n ? t : null
    );
}
var I = t(717519);
function C(e) {
    let { channelId: n, applicationId: t, surface: a, onOpenChat: d } = e,
        c = (0, A.A)(t, a),
        u = c?.id ?? null,
        o = (0, f.bG)([g.A], () => null != u && g.A.isFrameVisible(u), [u]),
        h = (0, f.bG)([m.A], () => m.A.getToastsEnabled(n), [n]),
        j = o && h,
        C = (0, r.Rv)(),
        E = x(u, j),
        v = i.useCallback(
            (e) => {
                (d(), p.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
            },
            [d],
        );
    return !j || null == E || C
        ? null
        : (0, s.createPortal)(
              (0, l.jsx)("div", {
                  className: I.T,
                  style: { top: E.top, left: E.left, width: E.width, height: E.height / 2 },
                  children: (0, l.jsx)("div", {
                      className: I.f,
                      children: (0, l.jsx)(w.A, { channelId: n, onToastClick: v }),
                  }),
              }),
              document.body,
          );
}
var E = t(144399),
    v = t(73153),
    N = t(483510),
    b = t(799704),
    S = t(218461),
    k = t(240666),
    L = t(513845),
    y = t(522265),
    R = t(104299),
    _ = t(246338),
    P = t(343030),
    U = t(150861),
    z = t(11411),
    G = t(378859),
    T = t(111518),
    M = t(130745),
    D = t(486020),
    Z = t(165610);
let O = new Set();
var V = t(792996),
    Y = t(728846);
function F(e) {
    let { applicationId: n, frameId: t } = e,
        a = x(t, !0),
        d = (0, r.Rv)(),
        c = i.useCallback(() => (0, L.R2)(n), [n]);
    return null == a || d
        ? null
        : (0, s.createPortal)(
              (0, l.jsx)("div", {
                  className: Y.DK,
                  style: { top: a.top, left: a.left, width: a.width },
                  children: (0, l.jsx)(E.x, { onReload: c }),
              }),
              document.body,
          );
}
function H(e) {
    let { applicationId: n, channel: t, showChatToasts: i, surface: s } = e,
        { frame: a, state: d } = (0, T.A)({ applicationId: n, surface: s });
    ((0, k.A)(n, s), (0, M.A)(t.id));
    let r = (0, o.l)(a?.id);
    switch (d) {
        case T.n.Launched:
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z.A, { frameId: a.id, level: P.A.WithinAppContent, className: Y.Z7 }),
                    r ? (0, l.jsx)(F, { applicationId: n, frameId: a.id }) : null,
                    i
                        ? (0, l.jsx)(C, {
                              channelId: t.id,
                              applicationId: n,
                              surface: s,
                              onOpenChat: () => (0, N.ci)(t.getGuildId(), t.id),
                          })
                        : null,
                ],
            });
        case T.n.RenderingElsewhere:
            return (0, l.jsx)(G.A, { className: Y.wk, description: V.intl.string(V.t["2KIDX+"]) });
        case T.n.NoApplication:
            return (0, l.jsx)(G.A, { className: Y.wk, description: V.intl.string(V.t.izggZO) });
        case T.n.DoesNotSupportSurface:
            return (0, l.jsx)(G.A, { className: Y.wk, description: V.intl.string(V.t["iUWcU/"]) });
        case T.n.Error:
            return (0, l.jsx)(G.A, {
                className: Y.wk,
                heading: V.intl.string(V.t.VquUff),
                error: V.intl.string(V.t["Sd9D/R"]),
            });
        case T.n.AwaitingLaunch:
        case T.n.Loading:
            return (0, l.jsx)(G.j, { className: Y.wk });
    }
}
function K(e) {
    let { applicationId: n, onLaunch: t } = e,
        { data: i } = (0, u.YY)(n);
    return (0, l.jsx)(G.A, {
        className: Y.wk,
        icon:
            i?.icon != null
                ? (0, l.jsx)("img", {
                      alt: "",
                      src: D.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 64 }),
                      className: Y.Z2,
                  })
                : i?.conjureProjectId != null
                  ? (0, l.jsx)(R.A, {
                        applicationId: i.id,
                        name: i.name,
                        glyphSize: (0, y.w)(64).glyphSize,
                        className: Y.Z2,
                    })
                  : null,
        heading: i?.name,
        action: (0, l.jsx)(c.$, { text: V.intl.string(V.t.PPYvuv), onClick: t }),
    });
}
function W(e) {
    let { applicationId: n, channel: t } = e,
        s = i.useMemo(() => ({ type: d.U.APP_CHANNEL, channelId: t.id, guildId: t.guild_id }), [t.id, t.guild_id]),
        r = (0, a.zy)().state?.appChannelClosed ?? !1,
        { isClosed: c, launch: u } = (function (e) {
            let { applicationId: n, surface: t, shouldStartClosed: l } = e,
                s = (0, Z.VA)(n, t),
                a = (0, A.A)(n, t),
                [d, r] = i.useState(null);
            return (
                d?.frameId !== s
                    ? r({ frameId: s, hasLaunched: !1, isClosed: null == a && (O.has(s) || l()) })
                    : (0, Z.x1)(a) && !d.hasLaunched
                      ? r({ ...d, hasLaunched: !0 })
                      : null == a && d.hasLaunched && !d.isClosed && r({ ...d, isClosed: !0 }),
                i.useEffect(() => {
                    d?.hasLaunched === !0 && (d.isClosed ? O.add(d.frameId) : O.delete(d.frameId));
                }, [d]),
                {
                    isClosed: d?.frameId === s && d.isClosed,
                    launch: function () {
                        r((e) => (null != e ? { ...e, hasLaunched: !1, isClosed: !1 } : e));
                    },
                }
            );
        })({ applicationId: n, surface: s, shouldStartClosed: () => r });
    return c ? (0, l.jsx)(K, { applicationId: n, onLaunch: u }) : (0, l.jsx)(H, { ...e, surface: s });
}
function $(e) {
    let n,
        t,
        s,
        a,
        { channel: d } = e,
        r = (0, h.a)(d),
        c = d.application_id ?? r;
    (0, U.A)(d);
    let u = (0, _.w$)(d, "AppChannel"),
        o =
            ((n = d.id),
            (t = (0, N.HP)(n)),
            (s = (0, f.bG)([S.Ay], () => S.Ay.hasUnread(n) || S.Ay.wasUnreadOnSelect(n), [n])),
            (a = i.useRef(!0)),
            i.useEffect(() => {
                a.current = !0;
            }, [n]),
            i.useEffect(() => {
                u &&
                    s &&
                    a.current &&
                    ((a.current = !1), null == b.Ay.getSidebarState(n) && (0, N.ci)(d.getGuildId(), n));
            }, [u, s, d, n]),
            i.useEffect(() => {
                function e(e) {
                    e.channelId === n && (a.current = !1);
                }
                return (v.h.subscribe("MESSAGE_CREATE", e), () => v.h.unsubscribe("MESSAGE_CREATE", e));
            }, [n]),
            t);
    return null == c
        ? (0, l.jsx)(G.A, {
              className: Y.wk,
              heading: V.intl.string(V.t.tU5fiM),
              description: V.intl.string(V.t.E94mJf),
          })
        : (0, l.jsx)(W, { applicationId: c, channel: d, showChatToasts: u && !o });
}
