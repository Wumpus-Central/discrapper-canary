t.d(s, { HN: () => _, _x: () => T, _W: () => S });
var a = t(627968),
    l = t(64700),
    n = t(503698),
    i = t.n(n),
    r = t(460905),
    o = t(990078),
    c = t(939249),
    m = t(834730),
    d = t(565645),
    u = t(763754),
    h = t(930101),
    g = t(516287),
    x = t(888675),
    A = t(649963),
    N = t(486020),
    p = t(625494),
    j = t(17928),
    C = t(159273);
let v = /^<(a?):(\w+):(\d+)>/;
function E(e) {
    let s = l.useMemo(() => v.exec(e)?.[3], [e]);
    return (0, j.bG)([C.Ay], () => (null == s ? null : C.Ay.getCustomEmojiById(s)));
}
var I = t(652215),
    M = t(985018),
    f = t(93072);
function _(e) {
    let { message: s, rendered: t } = e;
    return null == E(s.content)
        ? M.intl.format(M.t.k6Jc9Y, { username: null, usernameHook: () => null })
        : M.intl.format(M.t.IihHB0, { emojiPreview: t, emojiName: null, username: null, usernameHook: () => null });
}
function T(e) {
    let { message: s, className: t } = e,
        [n, r] = l.useState(!1),
        u = s.getChannelId(),
        h = E(s.content),
        g = l.useCallback(() => {
            null != h && (0, A.BB)(u, s.id, { id: h.id, name: h.name }, A.qN.MESSAGE);
        }, [u, h, s.id]);
    return null == h
        ? null
        : (0, a.jsx)(o.m, {
              asContainer: !0,
              "aria-label": !1,
              __unsupportedReactNodeAsText: (0, a.jsx)(d.A, {
                  emojiName: h.name,
                  size: "jumbo",
                  emojiId: h.id,
                  animated: h.animated,
                  isInteracting: !0,
                  channelId: u,
                  messageId: s.id,
              }),
              children: (0, a.jsx)(c.D, {
                  className: i()(t, f.qx),
                  onClick: g,
                  onMouseEnter: () => {
                      r(!0);
                  },
                  onMouseLeave: () => {
                      r(!1);
                  },
                  children: (0, a.jsx)(m.E, {
                      variant: "text-sm/semibold",
                      color: "text-subtle",
                      className: f.Ic,
                      children: M.intl.format(M.t.z5Rnl8, {
                          renderedEmoji: (0, a.jsx)(d.A, {
                              emojiName: h.name,
                              size: "default",
                              emojiId: h.id,
                              animated: h.animated,
                              isInteracting: n,
                              channelId: u,
                              messageId: s.id,
                              className: f.ti,
                          }),
                      }),
                  }),
              }),
          });
}
function S(e) {
    let { message: s, compact: t, usernameHook: n } = e,
        i = s.content,
        [o, d] = l.useState(!1),
        A = (0, u.Ay)(s),
        j = n(A),
        C = E(i),
        v = l.useCallback(() => {
            null != C &&
                p._.dispatchToLastSubscribed(I.jej.INSERT_TEXT, { plainText: `:${C.name}:`, rawText: i, addSpace: !0 });
        }, [C, i]),
        _ = l.useMemo(
            () =>
                null == C
                    ? null
                    : {
                          src: N.Ay.getEmojiURL({ id: C.id, animated: C.animated, size: 48 }),
                          emojiId: C.id,
                          name: `:${C.name}:`,
                          animated: C.animated,
                      },
            [C],
        );
    return (0, a.jsx)(g.x, {
        value: o,
        children: (0, a.jsx)(x.A, {
            iconNode: (0, a.jsx)(r.n, { size: "refresh_sm", color: "currentColor" }),
            iconContainerClassName: f.zc,
            timestamp: s.timestamp,
            compact: t,
            contentClassName: f.Qs,
            children: (0, a.jsx)("span", {
                children:
                    null == C || null == _
                        ? M.intl.format(M.t.k6Jc9Y, { username: A.nick, usernameHook: j })
                        : M.intl.format(M.t.IihHB0, {
                              username: A.nick,
                              usernameHook: j,
                              emojiPreview: (0, a.jsx)(h.X, { node: _ }),
                              emojiName: (0, a.jsx)(c.D, {
                                  className: f.hX,
                                  tag: "span",
                                  onClick: v,
                                  onMouseEnter: () => d(!0),
                                  onMouseLeave: () => d(!1),
                                  children: (0, a.jsx)(m.E, {
                                      tag: "span",
                                      variant: "text-md/medium",
                                      color: "text-strong",
                                      children: `:${C.name}:`,
                                  }),
                              }),
                          }),
            }),
        }),
    });
}
