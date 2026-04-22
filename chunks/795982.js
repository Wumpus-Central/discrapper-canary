n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    a = n(834730),
    s = n(311907),
    r = n(52133),
    o = n(827734),
    d = n(939249),
    c = n(320448),
    u = n(713654),
    m = n(958340),
    _ = n(384231),
    h = n(291812),
    p = n(538355),
    g = n(699352),
    A = n(8455),
    f = n(253932),
    x = n(734057),
    C = n(540999),
    E = n(71393),
    I = n(576705),
    v = n(994500),
    b = n(287809),
    T = n(862804),
    S = n(627950),
    y = n(387408),
    N = n(427209),
    j = n(985018),
    L = n(24759);
function R() {
    return (0, i.jsxs)("div", {
        className: L.N1,
        children: [
            (0, i.jsx)(N.A, { size: "xs", className: L.nr, color: o.A.colors.TEXT_MUTED }),
            (0, i.jsx)(a.E, {
                className: L.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: j.intl.string(j.t.ToyvLk),
            }),
        ],
    });
}
function P(e) {
    let { message: t, snapshot: n, index: u } = e,
        _ = l.useMemo(() => new T.j(t, n, u), [t, n, u]),
        h = (0, s.bG)(
            [x.A, b.default, v.A, I.A, E.A, m.A],
            () => _.getForwardInfo(x.A, b.default, v.A, I.A, E.A, m.A).footerInfo,
            [_],
            r.A,
        ),
        p = (0, s.bG)([x.A], () => x.A.getChannel(t.messageReference?.channel_id)),
        g = l.useCallback(() => {
            (0, S.A)(t);
        }, [t]);
    return null == h
        ? null
        : (0, i.jsxs)(d.D, {
              className: L.xQ,
              onClick: g,
              "aria-label": h.accessibilityLabel,
              children: [
                  null != h.originIconUrl
                      ? (0, i.jsx)("img", { className: L.yl, src: h.originIconUrl, alt: "" })
                      : null,
                  null == h.originIconUrl && p?.isThread() ? (0, i.jsx)(w, { channel: p }) : null,
                  (0, i.jsx)(a.E, {
                      className: L.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${h.originLabel}  •  ${h.timestampLabel}`,
                  }),
                  (0, i.jsx)(c._, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function w(e) {
    let { channel: t } = e,
        n = (0, A.Vp)({ location: "ForwardFooter" }),
        a = l.useMemo(() => (0, u.gU)(t), [t]);
    return n.enabled && null != a ? (0, i.jsx)(a, { className: L.yl, size: "xs", color: "currentColor" }) : null;
}
function D(e) {
    let { message: t, snapshot: n, index: a } = e,
        r = l.useMemo(() => (0, y.A)(t, n), [t, n]),
        o = f.hD.useSetting(),
        d = f.rs.useSetting(),
        c = (0, s.bG)([C.A], () => C.A.isDeveloper),
        u = (0, _.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        {
            content: m,
            hasSpoilerEmbeds: A,
            hasBailedAst: E,
        } = (0, p.A)(r, {
            hideSimpleEmbedContent: o && d,
            formatInline: !1,
            allowList: u,
            allowHeading: u,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
        }),
        I = (0, s.bG)([x.A], () => x.A.getChannel(t.channel_id)),
        v = f.hH.useSetting();
    return null == I
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: L.kL,
                  children: [
                      (0, i.jsx)("div", { className: L.hD }),
                      (0, i.jsxs)("div", {
                          className: L.Qs,
                          children: [
                              (0, i.jsx)(R, {}),
                              (0, i.jsx)(h.Ay, { message: r, content: m, compact: v }),
                              (0, g.A)({
                                  channelMessageProps: { message: r, channel: I, compact: v },
                                  hasSpoilerEmbeds: A,
                                  hasBailedAst: E,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, i.jsx)(P, { message: t, snapshot: n, index: a }),
                          ],
                      }),
                  ],
              },
              a,
          );
}
function k(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(D, { message: t, snapshot: e, index: n }, n)),
    });
}
