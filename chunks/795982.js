n.d(t, {
    A: () => L,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(52133),
    l = n(827734),
    c = n(397927),
    u = n(713654),
    d = n(958340),
    f = n(384231),
    p = n(291812),
    _ = n(538355),
    h = n(699352),
    m = n(8455),
    g = n(253932),
    E = n(734057),
    b = n(540999),
    y = n(71393),
    O = n(576705),
    A = n(994500),
    v = n(287809),
    S = n(862804),
    I = n(627950),
    T = n(387408),
    C = n(427209),
    N = n(985018),
    R = n(772004);

function w() {
    return (0, r.jsxs)("div", {
        className: R.N1,
        children: [
            (0, r.jsx)(C.A, {
                size: "xs",
                className: R.nr,
                color: l.A.colors.TEXT_MUTED,
            }),
            (0, r.jsx)(a.EYj, {
                className: R.TK,
                variant: "text-sm/semibold",
                color: "text-muted",
                children: N.intl.string(N.t.ToyvLk),
            }),
        ],
    });
}

function P(e) {
    let { message: t, snapshot: n, index: u } = e,
        f = i.useMemo(() => new S.j(t, n, u), [t, n, u]),
        p = (0, s.bG)(
            [E.A, v.default, A.A, O.A, y.A, d.A],
            () => f.getForwardInfo(E.A, v.default, A.A, O.A, y.A, d.A).footerInfo,
            [f],
            o.A,
        ),
        _ = (0, s.bG)([E.A], () => {
            var e;
            return E.A.getChannel(null == (e = t.messageReference) ? void 0 : e.channel_id);
        }),
        h = i.useCallback(() => {
            (0, I.A)(t);
        }, [t]);
    return null == p
        ? null
        : (0, r.jsxs)(c.DUT, {
              className: R.xQ,
              onClick: h,
              "aria-label": p.accessibilityLabel,
              children: [
                  null != p.originIconUrl
                      ? (0, r.jsx)("img", {
                            className: R.yl,
                            src: p.originIconUrl,
                            alt: "",
                        })
                      : null,
                  null == p.originIconUrl && (null == _ ? void 0 : _.isThread())
                      ? (0, r.jsx)(D, {
                            channel: _,
                        })
                      : null,
                  (0, r.jsx)(a.EYj, {
                      className: R.PJ,
                      variant: "text-sm/medium",
                      color: "none",
                      children: "".concat(p.originLabel, "  •  ").concat(p.timestampLabel),
                  }),
                  (0, r.jsx)(c._BQ, {
                      size: "xxs",
                      color: l.A.colors.TEXT_MUTED,
                  }),
              ],
          });
}

function D(e) {
    let { channel: t } = e,
        n = (0, m.Vp)({
            location: "ForwardFooter",
        }),
        a = i.useMemo(() => (0, u.gU)(t), [t]);
    return n.enabled && null != a
        ? (0, r.jsx)(a, {
              className: R.yl,
              size: "xs",
              color: "currentColor",
          })
        : null;
}

function x(e) {
    var t;
    let { message: n, snapshot: a, index: o } = e,
        l = i.useMemo(() => (0, T.A)(n, a), [n, a]),
        c = g.hD.useSetting(),
        u = g.rs.useSetting(),
        d = c && u,
        m = (0, s.bG)([b.A], () => b.A.isDeveloper),
        y = (0, f.S)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()),
        {
            content: O,
            hasSpoilerEmbeds: A,
            hasBailedAst: v,
        } = (0, _.A)(l, {
            hideSimpleEmbedContent: d,
            isInteracting: !1,
            formatInline: !1,
            allowList: y,
            allowHeading: y,
            allowLinks: !0,
            allowDevLinks: m,
            previewLinkTarget: !0,
        }),
        S = (0, s.bG)([E.A], () => E.A.getChannel(n.channel_id)),
        I = g.hH.useSetting();
    return null == S
        ? null
        : (0, r.jsxs)(
              "div",
              {
                  className: R.kL,
                  children: [
                      (0, r.jsx)("div", {
                          className: R.hD,
                      }),
                      (0, r.jsxs)("div", {
                          className: R.Qs,
                          children: [
                              (0, r.jsx)(w, {}),
                              (0, r.jsx)(p.Ay, {
                                  message: l,
                                  content: O,
                                  compact: I,
                              }),
                              (0, h.A)({
                                  channelMessageProps: {
                                      message: l,
                                      channel: S,
                                      compact: I,
                                  },
                                  hasSpoilerEmbeds: A,
                                  hasBailedAst: v,
                                  isInteracting: !1,
                                  isMessageSnapshot: !0,
                                  renderThreadAccessory: !1,
                              }),
                              (0, r.jsx)(P, {
                                  message: n,
                                  snapshot: a,
                                  index: o,
                              }),
                          ],
                      }),
                  ],
              },
              o,
          );
}

function L(e) {
    let { message: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, n) =>
            (0, r.jsx)(
                x,
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
