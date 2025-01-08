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
    N = n(560006),
    v = n(665162);
let S = r.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: S } = (0, _.a)(t),
        T = (0, d.p)(),
        { isBlocked: b, isIgnored: A } = (0, s.cj)(
            [f.Z],
            () => ({
                isBlocked: null != S && f.Z.isBlockedForMessage(S),
                isIgnored: null != S && f.Z.isIgnoredForMessage(S)
            }),
            [S]
        ),
        Z = (0, s.e7)([g.Z], () => g.Z.can(E.Plq.MANAGE_MESSAGES, t)),
        x = p.cC.useSetting(),
        { content: L } = r.useMemo(
            () =>
                (null == S ? void 0 : S.content) != null && '' !== S.content
                    ? (0, h.ZP)(S, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: T
                      })
                    : { content: null },
            [S, T]
        ),
        P = null;
    if (l)
        P = (0, i.jsx)(o.Text, {
            className: N.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: C.intl.string(C.t.BZHld3)
        });
    else if (n) {
        if (null != S && b)
            P = (0, i.jsx)(o.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['WPe+xM'])
            });
        else if (null != S && A)
            P = (0, i.jsx)(o.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t.uxrh1N)
            });
        else if (null != S) {
            let { contentPlaceholder: e, renderedContent: t } = (0, m.f)(S, L, b, A, a()(N.messageContent, v.inlineFormat), {
                leadingIconClass: N.messageContentIcon,
                trailingIconClass: N.messageContentIcon,
                iconSize: I.WW
            });
            P =
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
            P = (0, i.jsx)(o.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: C.intl.string(C.t['0KfDxM'])
            });
    } else P = null;
    return (0, i.jsx)(c.a.Provider, {
        value: (0, u.Z)(x, Z),
        children: (0, i.jsx)(o.FocusBlock, {
            className: N.messageFocusBlock,
            children: P
        })
    });
});
t.Z = S;
