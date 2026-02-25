n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(47167),
    o = n(734057),
    d = n(71393),
    u = n(383501),
    c = n(994500),
    h = n(287809),
    g = n(256415),
    m = n(810412),
    p = n(1193),
    A = n(129537),
    x = n(412477),
    E = n(651813),
    f = n(320165),
    S = n(121914),
    I = n(197043),
    T = n(919843),
    v = n(652215),
    C = n(822889),
    j = n(985018),
    y = n(902877);
function w(e) {
    let { dragStart: t, dragging: n } = e,
        [w, O] = (0, l.bG)([p.A], () => p.A.getSessionEntries()),
        _ = (0, l.bG)([p.A], () => p.A.getSelectedChannelId()),
        N = (0, l.bG)([p.A], () => p.A.getVoiceChatMinimized()),
        b = (0, l.bG)([o.A], () => (null != _ ? (o.A.getChannel(_) ?? null) : null), [_]);
    s.useEffect(() => {
        null == _ || (null == b && (0, T.b)(_));
    }, [b, _]);
    let R = (0, l.bG)([d.A], () => (0, E.P)(b, d.A), [b]),
        M = (0, l.bG)([u.A], () => u.A.getChannelId(), []),
        L = s.useMemo(() => (null == M || 0 === O ? w : w.filter((e) => e.channelId !== M)), [w, O, M]),
        z = (0, m.Dk)(() => {
            let e = new Set();
            for (let t of (null != M && e.add(M), L)) e.add(t.channelId);
            return e;
        }, [L, M, O]),
        { shownUserIds: D, contentInventoryIds: k } = (0, l.bG)(
            [],
            () =>
                (function (e) {
                    let t = new Set(),
                        n = new Set();
                    for (let i of e) {
                        let e = o.A.getChannel(i) ?? null;
                        if (null != e) {
                            if (e.isDM()) {
                                let n = e.getRecipientId?.() ?? null;
                                null != n && t.add(n);
                                continue;
                            }
                            if (e.isMultiUserDM()) {
                                for (let n of e.recipients ?? []) t.add(n);
                                continue;
                            }
                            n.add(i);
                        }
                    }
                    return { shownUserIds: t, contentInventoryIds: n };
                })(z),
            [z],
        ),
        P = (0, m.Dk)(() => D, [D]),
        G = (0, m.Dk)(() => k, [k]);
    s.useEffect(() => {
        (0 !== P.size || 0 !== G.size) &&
            (0, m.Y)(v.uss.TEXT_CHAT_V3, {
                locked: g.default.isInstanceLocked(),
                shownUserIds: Array.from(P),
                liveUserIds: [],
                contentInventoryIds: Array.from(G),
            });
    }, [P, G]);
    let V = (0, l.bG)([h.default], () => (0, E.j)(b, h.default)),
        U = (0, l.bG)(
            [h.default, c.A],
            () => (null == b ? j.intl.string(C.default.uhJexs) : (0, a.m1)(b, h.default, c.A)),
            [b],
        ),
        H = (0, l.bG)([o.A], () => {
            if (null != M && null != o.A.getChannel(M)) return !0;
            if (0 === O) return !1;
            for (let e of w) if (null != o.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [w, M, O]),
        Y = null != _ && !(N && _ === M);
    return H
        ? (0, i.jsxs)("div", {
              className: y.kL,
              children: [
                  (0, i.jsx)("nav", {
                      className: y.pz,
                      "aria-label": j.intl.string(C.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(A.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, i.jsxs)(r.d_W, {
                          children: [
                              null != M
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(
                                                S.g,
                                                {
                                                    channelId: M,
                                                    selectedVoiceChannelId: M,
                                                    iconVariant: S._.CHANNEL_TYPE,
                                                },
                                                `tiv-${M}`,
                                            ),
                                            L.length > 0 ? (0, i.jsx)("hr", { className: y.mF }) : null,
                                        ],
                                    })
                                  : null,
                              L.map((e) =>
                                  (0, i.jsx)(S.g, { channelId: e.channelId, selectedVoiceChannelId: M }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  Y
                      ? (0, i.jsxs)("div", {
                            className: y.oM,
                            children: [
                                (0, i.jsx)(f.A, { channel: b, user: V, guild: R, title: U, dragStart: t, dragging: n }),
                                (0, i.jsx)(I.A, { selectedChannelId: _ }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, i.jsx)(x.g, { emptyText: j.intl.string(C.default["xpv/t5"]), icon: r.oyn });
}
let O = s.memo(function (e) {
    let { locked: t, dragStart: n, dragging: s } = e;
    return t ? null : (0, i.jsx)(w, { dragStart: n, dragging: s });
});
