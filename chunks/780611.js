(n.r(t), n.d(t, { default: () => D }));
var i = n(477900),
    s = n(582128),
    l = n(991690),
    r = n(333007),
    a = n(17928),
    u = n(192308),
    c = n(148494),
    d = n(281969),
    o = n(672929),
    A = n(20465),
    h = n(249288),
    p = n(251363),
    f = n(717519);
function g(e) {
    let t,
        { channelId: n, applicationId: l, surface: g, onOpenChat: E } = e,
        w = (0, o.A)(l, g),
        C = w?.id ?? null,
        N =
            ((t = s.useCallback((e) => d.A.subscribe(e), [])),
            s.useSyncExternalStore(t, () => null != C && d.A.isFrameVisible(C))),
        O = (0, a.bG)([h.A], () => h.A.getToastsEnabled(n), [n]),
        _ = N && O,
        b = (0, u.useHasAnyModalOpen)(),
        [I, S] = s.useState(null);
    s.useEffect(() => {
        if (!_) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })((0, p.o)(null, C));
            S((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [_, C]);
    let j = s.useCallback(
        (e) => {
            (E(), c.A.jumpToMessage({ channelId: e.channel_id, messageId: e.id, flash: !0 }));
        },
        [E],
    );
    return !_ || null == I || b
        ? null
        : (0, r.createPortal)(
              (0, i.jsx)("div", {
                  className: f.T,
                  style: { top: I.top, left: I.left, width: I.width, height: I.height / 2 },
                  children: (0, i.jsx)("div", {
                      className: f.f,
                      children: (0, i.jsx)(A.A, { channelId: n, onToastClick: j }),
                  }),
              }),
              document.body,
          );
}
var E = n(73153),
    w = n(334738),
    C = n(334105),
    N = n(761640),
    O = n(573163),
    _ = n(927813);
let b = { lastAutoOpenedAt: null },
    I = b;
class S extends a.Ay.PersistedStore {
    static displayName = "ConjureChatAutoOpenStore";
    static persistKey = "VibegrationsChatAutoOpen";
    initialize(e) {
        I = e ?? b;
    }
    getState() {
        return I;
    }
    canAutoOpen(e) {
        return null == I.lastAutoOpenedAt || e - I.lastAutoOpenedAt >= _.A.Millis.DAY;
    }
}
let j = new S(E.h, {
    LOGOUT: function () {
        if (null == I.lastAutoOpenedAt) return !1;
        I = b;
    },
    CONJURE_APP_CHANNEL_CHAT_AUTO_OPENED: function (e) {
        let { timestamp: t } = e;
        I = { lastAutoOpenedAt: t };
    },
});
var m = n(652215),
    y = n(246338),
    T = n(343030),
    x = n(150861),
    U = n(317608),
    v = n(378859),
    R = n(206600),
    L = n(375708),
    M = n(728846);
function P(e) {
    let { applicationId: t, channel: n, showChatToasts: r } = e,
        a = s.useMemo(() => ({ type: l.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id }), [n.id, n.guild_id]),
        { frame: u, state: c } = (0, R.A)({ applicationId: t, surface: a });
    switch (c) {
        case R.n.Launched:
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(U.A, { frameId: u.id, level: T.A.WithinAppContent, className: M.Z }),
                    r
                        ? (0, i.jsx)(g, {
                              channelId: n.id,
                              applicationId: t,
                              surface: a,
                              onOpenChat: () => (0, C.fJ)(n.getGuildId(), n.id),
                          })
                        : null,
                ],
            });
        case R.n.RenderingElsewhere:
            return (0, i.jsx)(v.A, { className: M.w, description: L.intl.string(L.t["2KIDX+"]) });
        case R.n.NoApplication:
            return (0, i.jsx)(v.A, { className: M.w, description: L.intl.string(L.t.izggZO) });
        case R.n.DoesNotSupportSurface:
            return (0, i.jsx)(v.A, { className: M.w, description: L.intl.string(L.t["iUWcU/"]) });
        case R.n.Error:
            return (0, i.jsx)(v.A, {
                className: M.w,
                heading: L.intl.string(L.t.VquUff),
                error: L.intl.string(L.t["Sd9D/R"]),
            });
        case R.n.AwaitingLaunch:
        case R.n.Loading:
            return (0, i.jsx)(v.j, { className: M.w });
    }
}
function D(e) {
    let t,
        n,
        l,
        r,
        u,
        c,
        d,
        { channel: o } = e,
        A = o.application_id;
    (0, x.A)(o);
    let h = (0, y.w$)(o, "AppChannel"),
        p =
            ((t = o.id),
            (n = (0, C.cz)(t)),
            (l = (0, a.bG)([O.Ay], () => O.Ay.hasUnread(t) || O.Ay.wasUnreadOnSelect(t), [t])),
            (r = s.useRef(!1)),
            (u = s.useRef(!1)),
            (c = s.useRef(!0)),
            s.useEffect(() => {
                ((r.current = !1), (u.current = !1), (c.current = !0));
            }, [t]),
            (d = s.useRef(n)),
            s.useEffect(() => {
                let e = d.current;
                ((d.current = n),
                    !h ||
                        !e ||
                        n ||
                        ((r.current = !0),
                        !(O.Ay.getMentionCount(t) > 0) &&
                            O.Ay.hasUnread(t) &&
                            (0, w.ack)(
                                t,
                                {
                                    section: m.JJy.CHANNEL,
                                    object: m.ZSU.ACK_VIBEGRATIONS_CHAT_CLOSED,
                                    objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                                },
                                !0,
                                !0,
                            )));
            }, [h, n, t]),
            s.useEffect(() => {
                if (h && l && c.current) {
                    if (
                        ((c.current = !1), !r.current && null == N.Ay.getSidebarState(t)) &&
                        !u.current &&
                        j.canAutoOpen(Date.now())
                    ) {
                        var e;
                        ((u.current = !0),
                            (e = Date.now()),
                            E.h.dispatch({ type: "CONJURE_APP_CHANNEL_CHAT_AUTO_OPENED", channelId: t, timestamp: e }),
                            (0, C.fJ)(o.getGuildId(), t));
                    }
                }
            }, [h, l, o, t]),
            s.useEffect(() => {
                function e(e) {
                    e.channelId === t && (c.current = !1);
                }
                return (E.h.subscribe("MESSAGE_CREATE", e), () => E.h.unsubscribe("MESSAGE_CREATE", e));
            }, [t]),
            n);
    return null == A
        ? (0, i.jsx)(v.A, {
              className: M.w,
              heading: L.intl.string(L.t.tU5fiM),
              description: L.intl.string(L.t.E94mJf),
          })
        : (0, i.jsx)(P, { applicationId: A, channel: o, showChatToasts: h && !p });
}
