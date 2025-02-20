n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
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
    N = n(951129),
    v = n(368365);
let y = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: y } = (0, b.a)(t),
        I = (0, u.p)(),
        { isBlocked: C, isIgnored: S } = (0, a.cj)(
            [m.Z],
            () => ({
                isBlocked: null != y && m.Z.isBlockedForMessage(y),
                isIgnored: null != y && m.Z.isIgnoredForMessage(y)
            }),
            [y]
        ),
        T = (0, a.e7)([g.Z], () => g.Z.can(_.Plq.MANAGE_MESSAGES, t)),
        P = f.cC.useSetting(),
        { content: j } = i.useMemo(
            () =>
                (null == y ? void 0 : y.content) != null && '' !== y.content
                    ? (0, p.ZP)(y, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: I
                      })
                    : { content: null },
            [y, I]
        ),
        A = null;
    if (l)
        A = (0, r.jsx)(s.Text, {
            className: N.messageReplacement,
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: O.NW.string(O.t.BZHld3)
        });
    else if (n) {
        if (null != y && C)
            A = (0, r.jsx)(s.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: O.NW.string(O.t['WPe+xM'])
            });
        else if (null != y && S)
            A = (0, r.jsx)(s.Text, {
                className: N.messageReplacement,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: O.NW.string(O.t.uxrh1N)
            });
        else if (null != y) {
            let { contentPlaceholder: e, renderedContent: t } = (0, h.f)(y, j, C, S, o()(N.messageContent, v.inlineFormat), {
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
    } else A = null;
    return (0, r.jsx)(c.a.Provider, {
        value: (0, d.Z)(P, T),
        children: (0, r.jsx)(s.Rny, {
            className: N.messageFocusBlock,
            children: A
        })
    });
});
