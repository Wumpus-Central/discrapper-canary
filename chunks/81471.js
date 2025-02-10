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
    N = n(5989),
    v = n(642367);
let T = l.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: r, message: T } = (0, f.a)(t),
        S = (0, d.p)(),
        { isBlocked: Z, isIgnored: A } = (0, s.cj)(
            [_.Z],
            () => ({
                isBlocked: null != T && _.Z.isBlockedForMessage(T),
                isIgnored: null != T && _.Z.isIgnoredForMessage(T)
            }),
            [T]
        ),
        b = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_MESSAGES, t)),
        x = p.cC.useSetting(),
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
            className: N.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: C.intl.string(C.t.BZHld3)
        });
    else if (n) {
        if (null != T && Z)
            y = (0, i.jsx)(o.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['WPe+xM'])
            });
        else if (null != T && A)
            y = (0, i.jsx)(o.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t.uxrh1N)
            });
        else if (null != T) {
            let { contentPlaceholder: e, renderedContent: t } = (0, m.f)(T, L, Z, A, a()(N.messageContent, v.inlineFormat), {
                leadingIconClass: N.messageContentIcon,
                trailingIconClass: N.messageContentIcon,
                iconSize: I.WW
            });
            y =
                null != t
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.messageContent,
                          children: t
                      })
                    : (0, i.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.messageReplacement,
                          children: e
                      });
        } else
            y = (0, i.jsx)(o.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['0KfDxM'])
            });
    } else y = null;
    return (0, i.jsx)(c.a.Provider, {
        value: (0, u.Z)(x, b),
        children: (0, i.jsx)(o.Rny, {
            className: N.messageFocusBlock,
            children: y
        })
    });
});
