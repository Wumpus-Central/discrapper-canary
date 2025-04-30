n.d(t, { Z: () => v });
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
    y = n(391587),
    I = n(73433);
let v = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: v } = (0, b.a)(t),
        C = (0, u.p)(),
        { isBlocked: S, isIgnored: N } = (0, o.cj)(
            [m.Z],
            () => ({
                isBlocked: null != v && m.Z.isBlockedForMessage(v),
                isIgnored: null != v && m.Z.isIgnoredForMessage(v)
            }),
            [v]
        ),
        T = (0, o.e7)([g.Z], () => g.Z.can(_.Plq.MANAGE_MESSAGES, t)),
        P = f.cC.useSetting(),
        { content: j } = i.useMemo(
            () =>
                (null == v ? void 0 : v.content) != null && '' !== v.content
                    ? (0, p.ZP)(v, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: C
                      })
                    : { content: null },
            [v, C]
        ),
        A = null;
    if (l)
        A = (0, r.jsx)(s.Text, {
            className: y.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: O.intl.string(O.t.BZHld3)
        });
    else if (n)
        if (null != v && S)
            A = (0, r.jsx)(s.Text, {
                className: y.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: O.intl.string(O.t['WPe+xM'])
            });
        else if (null != v && N)
            A = (0, r.jsx)(s.Text, {
                className: y.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: O.intl.string(O.t.uxrh1N)
            });
        else if (null != v) {
            let { contentPlaceholder: e, renderedContent: t } = (0, h.f)(v, j, S, N, a()(y.messageContent, I.inlineFormat), {
                leadingIconClass: y.messageContentIcon,
                trailingIconClass: y.messageContentIcon,
                iconSize: E.WW
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
                children: O.intl.string(O.t['0KfDxM'])
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
