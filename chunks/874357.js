t.d(s, { HN: () => S, _x: () => f, _W: () => L });
var n = t(627968),
    l = t(64700),
    a = t(503698),
    i = t.n(a),
    r = t(460905),
    o = t(990078),
    c = t(939249),
    m = t(834730),
    u = t(565645),
    d = t(763754),
    h = t(930101),
    x = t(516287),
    N = t(888675),
    C = t(649963),
    j = t(486020),
    A = t(625494),
    g = t(17928),
    p = t(159273);
let E = /^<(a?):(\w+):(\d+)>/;
function I(e) {
    let s = l.useMemo(() => E.exec(e)?.[3], [e]);
    return (0, g.bG)([p.Ay], () => (null == s ? null : p.Ay.getCustomEmojiById(s)));
}
var v = t(652215),
    M = t(375708),
    _ = t(93072);
function S(e) {
    let { message: s, rendered: t } = e;
    return null == I(s.content)
        ? M.intl.format(M.t.k6Jc9Y, { username: null, usernameHook: () => null })
        : M.intl.format(M.t.IihHB0, { emojiPreview: t, emojiName: null, username: null, usernameHook: () => null });
}
function f(e) {
    let { message: s, className: t } = e,
        [a, r] = l.useState(!1),
        d = s.getChannelId(),
        h = I(s.content),
        x = l.useCallback(() => {
            null != h && (0, C.BB)(d, s.id, { id: h.id, name: h.name }, C.qN.MESSAGE);
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
                  className: i()(t, _.qx),
                  onClick: x,
                  onMouseEnter: () => {
                      r(!0);
                  },
                  onMouseLeave: () => {
                      r(!1);
                  },
                  children: (0, n.jsx)(m.E, {
                      variant: "text-sm/semibold",
                      color: "text-subtle",
                      className: _.Ic,
                      children: M.intl.format(M.t.z5Rnl8, {
                          renderedEmoji: (0, n.jsx)(u.A, {
                              emojiName: h.name,
                              size: "default",
                              emojiId: h.id,
                              animated: h.animated,
                              isInteracting: a,
                              channelId: d,
                              messageId: s.id,
                              className: _.ti,
                          }),
                      }),
                  }),
              }),
          });
}
function L(e) {
    let { message: s, compact: t, usernameHook: a } = e,
        i = s.content,
        [o, u] = l.useState(!1),
        C = (0, d.Ay)(s),
        g = a(C),
        p = I(i),
        E = l.useCallback(() => {
            null != p &&
                A._.dispatchToLastSubscribed(v.jej.INSERT_TEXT, { plainText: `:${p.name}:`, rawText: i, addSpace: !0 });
        }, [p, i]),
        S = l.useMemo(
            () =>
                null == p
                    ? null
                    : {
                          src: j.Ay.getEmojiURL({ id: p.id, animated: p.animated, size: 48 }),
                          emojiId: p.id,
                          name: `:${p.name}:`,
                          animated: p.animated,
                      },
            [p],
        );
    return (0, n.jsx)(x.x, {
        value: o,
        children: (0, n.jsx)(N.A, {
            iconNode: (0, n.jsx)(r.n, { size: "refresh_sm", color: "currentColor" }),
            iconContainerClassName: _.zc,
            timestamp: s.timestamp,
            compact: t,
            contentClassName: _.Qs,
            children: (0, n.jsx)("span", {
                children:
                    null == p || null == S
                        ? M.intl.format(M.t.k6Jc9Y, { username: C.nick, usernameHook: g })
                        : M.intl.format(M.t.IihHB0, {
                              username: C.nick,
                              usernameHook: g,
                              emojiPreview: (0, n.jsx)(h.X, { node: S }),
                              emojiName: (0, n.jsx)(c.D, {
                                  className: _.hX,
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
