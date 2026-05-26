t.d(s, { HN: () => _, _x: () => k, _W: () => L });
var n = t(627968),
    a = t(64700),
    l = t(503698),
    i = t.n(l),
    r = t(460905),
    o = t(990078),
    c = t(939249),
    m = t(834730),
    u = t(565645),
    d = t(763754),
    h = t(930101),
    g = t(516287),
    x = t(888675),
    N = t(649963),
    C = t(486020),
    j = t(625494),
    A = t(17928),
    p = t(159273);
let E = /^<(a?):(\w+):(\d+)>/;
function I(e) {
    let s = a.useMemo(() => E.exec(e)?.[3], [e]);
    return (0, A.bG)([p.Ay], () => (null == s ? null : p.Ay.getCustomEmojiById(s)));
}
var v = t(652215),
    M = t(375708),
    S = t(93072);
function _(e) {
    let { message: s, rendered: t } = e;
    return null == I(s.content)
        ? M.intl.format(M.t.k6Jc9Y, { username: null, usernameHook: () => null })
        : M.intl.format(M.t.IihHB0, { emojiPreview: t, emojiName: null, username: null, usernameHook: () => null });
}
function k(e) {
    let { message: s, className: t } = e,
        [l, r] = a.useState(!1),
        d = s.getChannelId(),
        h = I(s.content),
        g = a.useCallback(() => {
            null != h && (0, N.BB)(d, s.id, { id: h.id, name: h.name }, N.qN.MESSAGE);
        }, [d, h, s.id]);
    return null == h
        ? null
        : (0, n.jsx)(o.m, {
              asContainer: !0,
              "aria-label": !1,
              __unsupportedReactNodeAsText: (0, n.jsx)(u.A, {
                  emojiName: h.name,
                  size: "jumbo",
                  emojiId: h.id,
                  animated: h.animated,
                  isInteracting: !0,
                  channelId: d,
                  messageId: s.id,
              }),
              children: (0, n.jsx)(c.D, {
                  className: i()(t, S.qx),
                  onClick: g,
                  onMouseEnter: () => {
                      r(!0);
                  },
                  onMouseLeave: () => {
                      r(!1);
                  },
                  children: (0, n.jsx)(m.E, {
                      variant: "text-sm/semibold",
                      color: "text-subtle",
                      className: S.Ic,
                      children: M.intl.format(M.t.z5Rnl8, {
                          renderedEmoji: (0, n.jsx)(u.A, {
                              emojiName: h.name,
                              size: "default",
                              emojiId: h.id,
                              animated: h.animated,
                              isInteracting: l,
                              channelId: d,
                              messageId: s.id,
                              className: S.ti,
                          }),
                      }),
                  }),
              }),
          });
}
function L(e) {
    let { message: s, compact: t, usernameHook: l } = e,
        i = s.content,
        [o, u] = a.useState(!1),
        N = (0, d.Ay)(s),
        A = l(N),
        p = I(i),
        E = a.useCallback(() => {
            null != p &&
                j._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, { plainText: `:${p.name}:`, rawText: i, addSpace: !0 });
        }, [p, i]),
        _ = a.useMemo(
            () =>
                null == p
                    ? null
                    : {
                          src: C.Ay.getEmojiURL({ id: p.id, animated: p.animated, size: 48 }),
                          emojiId: p.id,
                          name: `:${p.name}:`,
                          animated: p.animated,
                      },
            [p],
        );
    return (0, n.jsx)(g.x, {
        value: o,
        children: (0, n.jsx)(x.A, {
            iconNode: (0, n.jsx)(r.n, { size: "refresh_sm", color: "currentColor" }),
            iconContainerClassName: S.zc,
            timestamp: s.timestamp,
            compact: t,
            contentClassName: S.Qs,
            children: (0, n.jsx)("span", {
                children:
                    null == p || null == _
                        ? M.intl.format(M.t.k6Jc9Y, { username: N.nick, usernameHook: A })
                        : M.intl.format(M.t.IihHB0, {
                              username: N.nick,
                              usernameHook: A,
                              emojiPreview: (0, n.jsx)(h.X, { node: _ }),
                              emojiName: (0, n.jsx)(c.D, {
                                  className: S.hX,
                                  tag: "span",
                                  onClick: E,
                                  onMouseEnter: () => u(!0),
                                  onMouseLeave: () => u(!1),
                                  children: (0, n.jsx)(m.E, {
                                      tag: "span",
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: `:${p.name}:`,
                                  }),
                              }),
                          }),
            }),
        }),
    });
}
