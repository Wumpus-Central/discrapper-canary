n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(52133),
    o = n(827734),
    c = n(397927),
    u = n(713654),
    d = n(958340),
    p = n(384231),
    m = n(291812),
    f = n(538355),
    g = n(699352),
    h = n(8455),
    _ = n(253932),
    b = n(734057),
    A = n(540999),
    y = n(71393),
    v = n(576705),
    x = n(994500),
    O = n(287809),
    E = n(862804),
    j = n(627950),
    C = n(387408),
    I = n(427209),
    S = n(985018),
    T = n(772004);

function N() {
    return (0, r.jsxs)("div", {
        className: T.N1,
        children: [
            (0, r.jsx)(I.A, {
                size: "xs",
                className: T.nr,
                color: o.A.colors.TEXT_MUTED,
            }),
            (0, r.jsx)(l.EYj, {
                className: T.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: S.intl.string(S.t.ToyvLk),
            }),
        ],
    });
}

function P(e) {
    let { message: t, snapshot: n, index: u } = e,
        p = i.useMemo(() => new E.j(t, n, u), [t, n, u]),
        m = (0, a.bG)(
            [b.A, O.default, x.A, v.A, y.A, d.A],
            () => p.getForwardInfo(b.A, O.default, x.A, v.A, y.A, d.A).footerInfo,
            [p],
            s.A,
        ),
        f = (0, a.bG)([b.A], () => {
            var e;
            return b.A.getChannel(null == (e = t.messageReference) ? void 0 : e.channel_id);
        }),
        g = i.useCallback(() => {
            (0, j.A)(t);
        }, [t]);
    return null == m
        ? null
        : (0, r.jsxs)(c.DUT, {
              className: T.xQ,
              onClick: g,
              "aria-label": m.accessibilityLabel,
              children: [
                  null != m.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: T.yl,
                            src: m.originIconUrl,
                            alt: "",
                        })
                      : null,
                  null == m.originIconUrl && (null == f ? void 0 : f.isThread())
                      ? (0, r.jsx)(w, {
                            channel: f,
                        })
                      : null,
                  (0, r.jsx)(l.EYj, {
                      className: T.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(m.originLabel, "  •  ").concat(m.timestampLabel),
                  }),
                  (0, r.jsx)(c._BQ, {
                      size: "xxs",
                      color: o.A.colors.TEXT_MUTED,
                  }),
              ],
          });
}

function w(e) {
    let { channel: t } = e,
        n = (0, h.Vp)({
            location: "ForwardFooter",
        }),
        l = i.useMemo(() => (0, u.gU)(t), [t]);
    return n.enabled && null != l
        ? (0, r.jsx)(l, {
              className: T.yl,
              size: "xs",
              color: "currentColor",
          })
        : null;
}

function R(e) {
    var t;
    let { message: n, snapshot: l, index: s } = e,
        o = i.useMemo(() => (0, C.A)(n, l), [n, l]),
        c = _.hD.useSetting(),
        u = _.rs.useSetting(),
        d = (0, a.bG)([A.A], () => A.A.isDeveloper),
        h = (0, p.S)((null != (t = o.editedTimestamp) ? t : o.timestamp).valueOf()),
        {
            content: y,
            hasSpoilerEmbeds: v,
            hasBailedAst: x,
        } = (0, f.A)(o, {
            hideSimpleEmbedContent: c && u,
            isInteracting: !1,
            formatInline: !1,
            allowList: h,
            allowHeading: h,
            allowLinks: !0,
            allowDevLinks: d,
            previewLinkTarget: !0,
        }),
        O = (0, a.bG)([b.A], () => b.A.getChannel(n.channel_id)),
        E = _.hH.useSetting();
    return null == O
        ? null
        : (0, r.jsxs)(
              "div",
              {
                  className: T.kL,
                  children: [
                      (0, r.jsx)("div", {
                          className: T.hD,
                      }),
                      (0, r.jsxs)("div", {
                          className: T.Qs,
                          children: [
                              (0, r.jsx)(N, {}),
                              (0, r.jsx)(m.Ay, {
                                  message: o,
                                  content: y,
                                  compact: E,
                              }),
                              (0, g.A)({
                                  channelMessageProps: {
                                      message: o,
                                      channel: O,
                                      compact: E,
                                  },
                                  hasSpoilerEmbeds: v,
                                  hasBailedAst: x,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, r.jsx)(P, {
                                  message: n,
                                  snapshot: l,
                                  index: s,
                              }),
                          ],
                      }),
                  ],
              },
              s,
          );
}

function D(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                R,
                {
                    message: t,
                    snapshot: e,
                    index: n,
                },
                n,
            ),
        ),
    });
}
