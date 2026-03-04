n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(311907),
    s = n(52133),
    o = n(827734),
    d = n(397927),
    c = n(713654),
    u = n(958340),
    _ = n(384231),
    m = n(291812),
    h = n(112758),
    p = n(754459),
    g = n(538355),
    A = n(699352),
    x = n(8455),
    f = n(253932),
    C = n(734057),
    E = n(540999),
    I = n(71393),
    b = n(576705),
    T = n(994500),
    v = n(287809),
    S = n(862804),
    y = n(627950),
    N = n(387408),
    j = n(427209),
    L = n(381941),
    R = n(985018),
    P = n(772004);
function M() {
    return (0, i.jsxs)("div", {
        className: P.N1,
        children: [
            (0, i.jsx)(j.A, { size: "xs", className: P.nr, color: o.A.colors.TEXT_MUTED }),
            (0, i.jsx)(r.EYj, {
                className: P.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: R.intl.string(R.t.ToyvLk),
            }),
        ],
    });
}
function w(e) {
    let { message: t, snapshot: n, index: c } = e,
        _ = l.useMemo(() => new S.j(t, n, c), [t, n, c]),
        m = (0, a.bG)(
            [C.A, v.default, T.A, b.A, I.A, u.A],
            () => _.getForwardInfo(C.A, v.default, T.A, b.A, I.A, u.A).footerInfo,
            [_],
            s.A,
        ),
        h = (0, a.bG)([C.A], () => C.A.getChannel(t.messageReference?.channel_id)),
        p = l.useCallback(() => {
            (0, y.A)(t);
        }, [t]);
    return null == m
        ? null
        : (0, i.jsxs)(d.DUT, {
              className: P.xQ,
              onClick: p,
              "aria-label": m.accessibilityLabel,
              children: [
                  null != m.originIconUrl
                      ? (0, i.jsx)("img", { className: P.yl, src: m.originIconUrl, alt: "" })
                      : null,
                  null == m.originIconUrl && h?.isThread() ? (0, i.jsx)(D, { channel: h }) : null,
                  (0, i.jsx)(r.EYj, {
                      className: P.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${m.originLabel}  •  ${m.timestampLabel}`,
                  }),
                  (0, i.jsx)(d._BQ, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function D(e) {
    let { channel: t } = e,
        n = (0, x.Vp)({ location: "ForwardFooter" }),
        r = l.useMemo(() => (0, c.gU)(t), [t]);
    return n.enabled && null != r ? (0, i.jsx)(r, { className: P.yl, size: "xs", color: "currentColor" }) : null;
}
function O(e) {
    let { message: t, snapshot: n, index: r } = e,
        s = l.useMemo(() => (0, N.A)(t, n), [t, n]),
        o = f.hD.useSetting(),
        d = f.rs.useSetting(),
        c = (0, a.bG)([E.A], () => E.A.isDeveloper),
        u = (0, _.S)((s.editedTimestamp ?? s.timestamp).valueOf()),
        {
            content: x,
            hasSpoilerEmbeds: I,
            hasBailedAst: b,
        } = (0, g.A)(s, {
            hideSimpleEmbedContent: o && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: u,
            allowHeading: u,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
        }),
        T = (0, a.bG)([C.A], () => C.A.getChannel(t.channel_id)),
        v = f.hH.useSetting(),
        { setPopout: S } = (0, p.A)(s.id, L.Fd),
        y = (0, h.VL)(s, T ?? { id: t.channel_id }, S);
    return null == T
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: P.kL,
                  children: [
                      (0, i.jsx)("div", { className: P.hD }),
                      (0, i.jsxs)("div", {
                          className: P.Qs,
                          children: [
                              (0, i.jsx)(M, {}),
                              (0, i.jsx)(m.Ay, { message: s, content: x, compact: v }),
                              (0, A.A)({
                                  channelMessageProps: { message: s, channel: T, compact: v },
                                  hasSpoilerEmbeds: I,
                                  hasBailedAst: b,
                                  handleContextMenu: y,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, i.jsx)(w, { message: t, snapshot: n, index: r }),
                          ],
                      }),
                  ],
              },
              r,
          );
}
function k(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(O, { message: t, snapshot: e, index: n }, n)),
    });
}
