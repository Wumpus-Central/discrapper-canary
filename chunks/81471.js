n.d(t, { Z: () => T });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(95398),
    d = n(905405),
    u = n(255269),
    h = n(937889),
    m = n(267128),
    p = n(695346),
    g = n(496675),
    _ = n(699516),
    f = n(868807),
    E = n(981631),
    I = n(217702),
    C = n(388032),
    v = n(560006),
    N = n(665162);
let T = l.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: r, message: T } = (0, f.a)(t),
        S = (0, d.p)(),
        { isBlocked: Z, isIgnored: x } = (0, s.cj)(
            [_.Z],
            () => ({
                isBlocked: null != T && _.Z.isBlockedForMessage(T),
                isIgnored: null != T && _.Z.isIgnoredForMessage(T)
            }),
            [T]
        ),
        A = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_MESSAGES, t)),
        b = p.cC.useSetting(),
        { content: L } = l.useMemo(
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
    if (r)
        y = (0, i.jsx)(o.Text, {
            className: v.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: C.intl.string(C.t.BZHld3)
        });
    else if (n) {
        if (null != T && Z)
            y = (0, i.jsx)(o.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['WPe+xM'])
            });
        else if (null != T && x)
            y = (0, i.jsx)(o.Text, {
                className: v.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t.uxrh1N)
            });
        else if (null != T) {
            let { contentPlaceholder: e, renderedContent: t } = (0, m.f)(T, L, Z, x, a()(v.messageContent, N.inlineFormat), {
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
        value: (0, u.Z)(b, A),
        children: (0, i.jsx)(o.Rny, {
            className: v.messageFocusBlock,
            children: y
        })
    });
});
