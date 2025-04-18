n.d(t, { Z: () => I });
var r = n(200651),
    i = n(192379),
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
    E = n(217702),
    O = n(388032),
    N = n(391587),
    y = n(73433);
let I = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: I } = (0, b.a)(t),
        v = (0, u.p)(),
        { isBlocked: C, isIgnored: S } = (0, o.cj)(
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
                          shouldFilterKeywords: v
                      })
                    : { content: null },
            [I, v]
        ),
        A = null;
    if (l)
        A = (0, r.jsx)(s.Text, {
            className: N.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: O.NW.string(O.t.BZHld3)
        });
    else if (n)
        if (null != I && C)
            A = (0, r.jsx)(s.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: O.NW.string(O.t['WPe+xM'])
            });
        else if (null != I && S)
            A = (0, r.jsx)(s.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: O.NW.string(O.t.uxrh1N)
            });
        else if (null != I) {
            let { contentPlaceholder: e, renderedContent: t } = (0, h.f)(I, j, C, S, a()(N.messageContent, y.inlineFormat), {
                leadingIconClass: N.messageContentIcon,
                trailingIconClass: N.messageContentIcon,
                iconSize: E.WW
            });
            A =
                null != t
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.messageContent,
                          children: t
                      })
                    : (0, r.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-sm/normal',
                          color: 'text-muted',
                          className: N.messageReplacement,
                          children: e
                      });
        } else
            A = (0, r.jsx)(s.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: O.NW.string(O.t['0KfDxM'])
            });
    else A = null;
    return (0, r.jsx)(c.aQ.Provider, {
        value: (0, d.Z)(P, T),
        children: (0, r.jsx)(s.Rny, {
            className: N.messageFocusBlock,
            children: A
        })
    });
});
