var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(95398),
    d = n(905405),
    u = n(255269),
    h = n(937889),
    m = n(267128),
    p = n(695346),
    g = n(496675),
    f = n(699516),
    _ = n(868807),
    E = n(981631),
    I = n(217702),
    C = n(388032),
    v = n(560006),
    N = n(665162);
let T = r.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: T } = (0, _.a)(t),
        S = (0, d.p)(),
        { isBlocked: b, isIgnored: A } = (0, s.cj)(
            [f.Z],
            () => ({
                isBlocked: null != T && f.Z.isBlockedForMessage(T),
                isIgnored: null != T && f.Z.isIgnoredForMessage(T)
            }),
            [T]
        ),
        Z = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_MESSAGES, t)),
        x = p.cC.useSetting(),
        { content: L } = r.useMemo(
            () =>
                (null == T ? void 0 : T.content) != null && '' !== T.content
                    ? (0, h.ZP)(T, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: S
                      })
                    : { content: null },
            [T, S]
        ),
        y = null;
    if (l)
        y = (0, i.jsx)(o.Text, {
            className: v.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: C.intl.string(C.t.BZHld3)
        });
    else if (n) {
        if (null != T && b)
            y = (0, i.jsx)(o.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['WPe+xM'])
            });
        else if (null != T && A)
            y = (0, i.jsx)(o.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t.uxrh1N)
            });
        else if (null != T) {
            let { contentPlaceholder: e, renderedContent: t } = (0, m.f)(T, L, b, A, a()(v.messageContent, N.inlineFormat), {
                leadingIconClass: v.messageContentIcon,
                trailingIconClass: v.messageContentIcon,
                iconSize: I.WW
            });
            y =
                null != t
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: v.messageContent,
                          children: t
                      })
                    : (0, i.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: v.messageReplacement,
                          children: e
                      });
        } else
            y = (0, i.jsx)(o.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['0KfDxM'])
            });
    } else y = null;
    return (0, i.jsx)(c.a.Provider, {
        value: (0, u.Z)(x, Z),
        children: (0, i.jsx)(o.FocusBlock, {
            className: v.messageFocusBlock,
            children: y
        })
    });
});
t.Z = T;
