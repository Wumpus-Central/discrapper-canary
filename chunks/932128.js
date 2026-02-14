n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(47167),
    o = n(734057),
    d = n(71393),
    u = n(383501),
    c = n(994500),
    h = n(287809),
    A = n(256415),
    m = n(810412),
    p = n(129537),
    g = n(412477),
    f = n(187667),
    _ = n(651813),
    E = n(320165),
    x = n(121914),
    S = n(197043),
    I = n(919843),
    T = n(652215),
    y = n(895867),
    C = n(985018),
    v = n(141223);
function N(e) {
    let { dragStart: t, dragging: n } = e,
        [N, O] = (0, a.bG)([f.A], () => f.A.getSessionEntries()),
        b = (0, a.bG)([f.A], () => f.A.getSelectedChannelId()),
        j = (0, a.bG)([f.A], () => f.A.getVoiceChatMinimized()),
        w = (0, a.bG)([o.A], () => (null != b ? (o.A.getChannel(b) ?? null) : null), [b]);
    l.useEffect(() => {
        null == b || (null == w && (0, I.b)(b));
    }, [w, b]);
    let L = (0, a.bG)([d.A], () => (0, _.P)(w, d.A), [w]),
        R = (0, a.bG)([u.A], () => u.A.getChannelId(), []),
        D = l.useMemo(() => (null == R || 0 === O ? N : N.filter((e) => e.channelId !== R)), [N, O, R]),
        M = (0, m.Dk)(() => {
            let e = new Set();
            for (let t of (null != R && e.add(R), D)) e.add(t.channelId);
            return e;
        }, [D, R, O]),
        { shownUserIds: k, contentInventoryIds: z } = (0, a.bG)(
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
                })(M),
            [M],
        ),
        V = (0, m.Dk)(() => k, [k]),
        P = (0, m.Dk)(() => z, [z]);
    l.useEffect(() => {
        (0 !== V.size || 0 !== P.size) &&
            (0, m.Y)(T.uss.TEXT_CHAT_V3, {
                locked: A.default.isInstanceLocked(),
                shownUserIds: Array.from(V),
                liveUserIds: [],
                contentInventoryIds: Array.from(P),
            });
    }, [V, P]);
    let U = (0, a.bG)([h.default], () => (0, _.j)(w, h.default)),
        G = (0, a.bG)(
            [h.default, c.A],
            () => (null == w ? C.intl.string(y.default.uhJexs) : (0, r.m1)(w, h.default, c.A)),
            [w],
        ),
        H = (0, a.bG)([o.A], () => {
            if (null != R && null != o.A.getChannel(R)) return !0;
            if (0 === O) return !1;
            for (let e of N) if (null != o.A.getChannel(e.channelId)) return !0;
            return !1;
        }, [N, R, O]),
        Y = null != b && !(j && b === R);
    return H
        ? (0, i.jsxs)("div", {
              className: v.kL,
              children: [
                  (0, i.jsx)("nav", {
                      className: v.pz,
                      "aria-label": C.intl.string(y.default["2yFtJ1"]),
                      onMouseDown: (e) => {
                          0 === e.button && t(p.P.MOVE, e.clientX, e.clientY);
                      },
                      children: (0, i.jsxs)(s.d_W, {
                          children: [
                              null != R
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(
                                                x.g,
                                                {
                                                    channelId: R,
                                                    selectedVoiceChannelId: R,
                                                    iconVariant: x._.CHANNEL_TYPE,
                                                },
                                                `tiv-${R}`,
                                            ),
                                            D.length > 0 ? (0, i.jsx)("hr", { className: v.mF }) : null,
                                        ],
                                    })
                                  : null,
                              D.map((e) =>
                                  (0, i.jsx)(x.g, { channelId: e.channelId, selectedVoiceChannelId: R }, e.channelId),
                              ),
                          ],
                      }),
                  }),
                  Y
                      ? (0, i.jsxs)("div", {
                            className: v.oM,
                            children: [
                                (0, i.jsx)(E.A, { channel: w, user: U, guild: L, title: G, dragStart: t, dragging: n }),
                                (0, i.jsx)(S.A, { selectedChannelId: b }),
                            ],
                        })
                      : null,
              ],
          })
        : (0, i.jsx)(g.g, { emptyText: C.intl.string(y.default["xpv/t5"]), icon: s.oyn });
}
let O = l.memo(function (e) {
    let { locked: t, dragStart: n, dragging: l } = e;
    return t ? null : (0, i.jsx)(N, { dragStart: n, dragging: l });
});
