n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(52133),
    o = n(827734),
    d = n(397927),
    c = n(713654),
    u = n(958340),
    m = n(384231),
    _ = n(291812),
    h = n(538355),
    p = n(699352),
    g = n(8455),
    A = n(253932),
    f = n(734057),
    x = n(540999),
    E = n(71393),
    C = n(576705),
    I = n(994500),
    T = n(287809),
    v = n(862804),
    N = n(627950),
    S = n(387408),
    b = n(427209),
    y = n(985018),
    j = n(772004);
function R() {
    return (0, i.jsxs)("div", {
        className: j.N1,
        children: [
            (0, i.jsx)(b.A, { size: "xs", className: j.nr, color: o.A.colors.TEXT_MUTED }),
            (0, i.jsx)(a.EYj, {
                className: j.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: y.intl.string(y.t.ToyvLk),
            }),
        ],
    });
}
function L(e) {
    let { message: t, snapshot: n, index: c } = e,
        m = l.useMemo(() => new v.j(t, n, c), [t, n, c]),
        _ = (0, r.bG)(
            [f.A, T.default, I.A, C.A, E.A, u.A],
            () => m.getForwardInfo(f.A, T.default, I.A, C.A, E.A, u.A).footerInfo,
            [m],
            s.A,
        ),
        h = (0, r.bG)([f.A], () => f.A.getChannel(t.messageReference?.channel_id)),
        p = l.useCallback(() => {
            (0, N.A)(t);
        }, [t]);
    return null == _
        ? null
        : (0, i.jsxs)(d.DUT, {
              className: j.xQ,
              onClick: p,
              "aria-label": _.accessibilityLabel,
              children: [
                  null != _.originIconUrl
                      ? (0, i.jsx)("img", { className: j.yl, src: _.originIconUrl, alt: "" })
                      : null,
                  null == _.originIconUrl && h?.isThread() ? (0, i.jsx)(M, { channel: h }) : null,
                  (0, i.jsx)(a.EYj, {
                      className: j.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: `${_.originLabel}  •  ${_.timestampLabel}`,
                  }),
                  (0, i.jsx)(d._BQ, { size: "xxs", color: o.A.colors.TEXT_MUTED }),
              ],
          });
}
function M(e) {
    let { channel: t } = e,
        n = (0, g.Vp)({ location: "ForwardFooter" }),
        a = l.useMemo(() => (0, c.gU)(t), [t]);
    return n.enabled && null != a ? (0, i.jsx)(a, { className: j.yl, size: "xs", color: "currentColor" }) : null;
}
function O(e) {
    let { message: t, snapshot: n, index: a } = e,
        s = l.useMemo(() => (0, S.A)(t, n), [t, n]),
        o = A.hD.useSetting(),
        d = A.rs.useSetting(),
        c = (0, r.bG)([x.A], () => x.A.isDeveloper),
        u = (0, m.S)((s.editedTimestamp ?? s.timestamp).valueOf()),
        {
            content: g,
            hasSpoilerEmbeds: E,
            hasBailedAst: C,
        } = (0, h.A)(s, {
            hideSimpleEmbedContent: o && d,
            isInteracting: !1,
            formatInline: !1,
            allowList: u,
            allowHeading: u,
            allowLinks: !0,
            allowDevLinks: c,
            previewLinkTarget: !0,
        }),
        I = (0, r.bG)([f.A], () => f.A.getChannel(t.channel_id)),
        T = A.hH.useSetting();
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
                              (0, i.jsx)(R, {}),
                              (0, i.jsx)(_.Ay, { message: s, content: g, compact: T }),
                              (0, p.A)({
                                  channelMessageProps: { message: s, channel: I, compact: T },
                                  hasSpoilerEmbeds: E,
                                  hasBailedAst: C,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, i.jsx)(L, { message: t, snapshot: n, index: a }),
                          ],
                      }),
                  ],
              },
              a,
          );
}
function P(e) {
    let { message: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, n) => (0, i.jsx)(O, { message: t, snapshot: e, index: n }, n)),
    });
}
