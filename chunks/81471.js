n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(95398),
    u = n(905405),
    d = n(255269),
    p = n(937889),
    h = n(267128),
    f = n(695346),
    g = n(496675),
    m = n(699516),
    b = n(868807),
    _ = n(981631),
    O = n(217702),
    E = n(388032),
    y = n(391587),
    v = n(73433);
let I = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: I } = (0, b.a)(t),
        C = (0, u.p)(),
        { isBlocked: S, isIgnored: N } = (0, o.cj)(
            [m.Z],
            () => ({
                isBlocked: null != I && m.Z.isBlockedForMessage(I),
                isIgnored: null != I && m.Z.isIgnoredForMessage(I)
            }),
            [I]
        ),
        T = (0, o.e7)([g.Z], () => g.Z.can(_.Plq.MANAGE_MESSAGES, t)),
        P = f.cC.useSetting(),
        { content: j } = i.useMemo(
            () =>
                (null == I ? void 0 : I.content) != null && '' !== I.content
                    ? (0, p.ZP)(I, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: C
                      })
                    : { content: null },
            [I, C]
        ),
        A = null;
    if (l)
        A = (0, r.jsx)(s.Text, {
            className: y.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: E.intl.string(E.t.BZHld3)
        });
    else if (n)
        if (null != I && S)
            A = (0, r.jsx)(s.Text, {
                className: y.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: E.intl.string(E.t['WPe+xM'])
            });
        else if (null != I && N)
            A = (0, r.jsx)(s.Text, {
                className: y.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: E.intl.string(E.t.uxrh1N)
            });
        else if (null != I) {
            let { contentPlaceholder: e, renderedContent: t } = (0, h.f)(I, j, S, N, a()(y.messageContent, v.inlineFormat), {
                leadingIconClass: y.messageContentIcon,
                trailingIconClass: y.messageContentIcon,
                iconSize: O.WW
            });
            A =
                null != t
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: y.messageContent,
                          children: t
                      })
                    : (0, r.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: y.messageReplacement,
                          children: e
                      });
        } else
            A = (0, r.jsx)(s.Text, {
                className: y.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: E.intl.string(E.t['0KfDxM'])
            });
    else A = null;
    return (0, r.jsx)(c.aQ.Provider, {
        value: (0, d.Z)(P, T),
        children: (0, r.jsx)(s.Rny, {
            className: y.messageFocusBlock,
            children: A
        })
    });
});
