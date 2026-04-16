n.d(t, { A: () => M });
var i = n(627968),
    a = n(64700),
    l = n(158954),
    s = n(311907),
    r = n(52133),
    o = n(827734),
    d = n(397927),
    c = n(713654),
    u = n(958340),
    _ = n(384231),
    m = n(291812),
    h = n(538355),
    p = n(699352),
    g = n(8455),
    A = n(253932),
    x = n(734057),
    f = n(540999),
    C = n(71393),
    E = n(576705),
    I = n(994500),
    v = n(287809),
    b = n(862804),
    T = n(627950),
    y = n(387408),
    S = n(427209),
    N = n(985018),
    j = n(460135);
function L() {
    return (0, i.jsxs)("div", {
        className: j.N1,
        children: [
            (0, i.jsx)(S.A, { size: "xs", className: j.nr, color: o.A.colors.TEXT_MUTED }),
            (0, i.jsx)(l.EYj, {
                className: j.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: N.intl.string(N.t.ToyvLk),
            }),
        ],
    });
}
function R(e) {
    let { message: t, snapshot: n, index: c } = e,
        _ = a.useMemo(() => new b.j(t, n, c), [t, n, c]),
        m = (0, s.bG)(
            [x.A, v.default, I.A, E.A, C.A, u.A],
            () => _.getForwardInfo(x.A, v.default, I.A, E.A, C.A, u.A).footerInfo,
            [_],
            r.A,
        ),
        h = (0, s.bG)([x.A], () => x.A.getChannel(t.messageReference?.channel_id)),
        p = a.useCallback(() => {
            (0, T.A)(t);
        }, [t]);
    return null == m
        ? null
        : (0, i.jsxs)(d.DUT, {
              className: j.xQ,
              onClick: p,
              "aria-label": m.accessibilityLabel,
              children: [
                  null != m.originIconUrl
                      ? (0, i.jsx)("img", { className: j.yl, src: m.originIconUrl, alt: "" })
                      : null,
                  null == m.originIconUrl && h?.isThread() ? (0, i.jsx)(P, { channel: h }) : null,
                  (0, i.jsx)(l.EYj, {
                      className: j.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${m.originLabel}  •  ${m.timestampLabel}`,
                  }),
                  (0, i.jsx)(d._BQ, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function P(e) {
    let { channel: t } = e,
        n = (0, g.Vp)({ location: "ForwardFooter" }),
        l = a.useMemo(() => (0, c.gU)(t), [t]);
    return n.enabled && null != l ? (0, i.jsx)(l, { className: j.yl, size: "xs", color: "currentColor" }) : null;
}
function w(e) {
    let { message: t, snapshot: n, index: l } = e,
        r = a.useMemo(() => (0, y.A)(t, n), [t, n]),
        o = A.hD.useSetting(),
        d = A.rs.useSetting(),
        c = (0, s.bG)([f.A], () => f.A.isDeveloper),
        u = (0, _.S)((r.editedTimestamp ?? r.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: C,
            hasBailedAst: E,
        } = (0, h.A)(r, {
            hideSimpleEmbedContent: o && d,
            formatInline: !1,
            allowList: u,
            allowHeading: u,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
        }),
        I = (0, s.bG)([x.A], () => x.A.getChannel(t.channel_id)),
        v = A.hH.useSetting();
    return null == I
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: j.kL,
                  children: [
                      (0, i.jsx)("div", { className: j.hD }),
                      (0, i.jsxs)("div", {
                          className: j.Qs,
                          children: [
                              (0, i.jsx)(L, {}),
                              (0, i.jsx)(m.Ay, { message: r, content: g, compact: v }),
                              (0, p.A)({
                                  channelMessageProps: { message: r, channel: I, compact: v },
                                  hasSpoilerEmbeds: C,
                                  hasBailedAst: E,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, i.jsx)(R, { message: t, snapshot: n, index: l }),
                          ],
                      }),
                  ],
              },
              l,
          );
}
function M(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(w, { message: t, snapshot: e, index: n }, n)),
    });
}
