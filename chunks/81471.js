n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(95398),
    u = n(905405),
    d = n(255269),
    p = n(937889),
    f = n(267128),
    h = n(695346),
    g = n(496675),
    m = n(699516),
    b = n(868807),
    _ = n(981631),
    E = n(217702),
    O = n(388032),
    v = n(161414),
    y = n(430864);
let I = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: I } = (0, b.a)(t),
        C = (0, u.p)(),
        { isBlocked: S, isIgnored: N } = (0, o.cj)(
            [m.Z],
            () => ({
                isBlocked: null != I && m.Z.isBlockedForMessage(I),
                isIgnored: null != I && m.Z.isIgnoredForMessage(I),
            }),
            [I],
        ),
        T = (0, o.e7)([g.Z], () => g.Z.can(_.Plq.MANAGE_MESSAGES, t)),
        P = h.cC.useSetting(),
        { content: j } = i.useMemo(
            () =>
                (null == I ? void 0 : I.content) != null && "" !== I.content
                    ? (0, p.ZP)(I, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: C,
                      })
                    : { content: null },
            [I, C],
        ),
        x = null;
    if (l)
        x = (0, r.jsx)(s.Text, {
            className: v.messageReplacement,
            variant: "text-sm/normal",
            color: "text-muted",
            children: O.intl.string(O.t.BZHld3),
        });
    else if (n)
        if (null != I && S)
            x = (0, r.jsx)(s.Text, {
                className: v.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t["WPe+xM"]),
            });
        else if (null != I && N)
            x = (0, r.jsx)(s.Text, {
                className: v.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t.uxrh1N),
            });
        else if (null != I) {
            let { contentPlaceholder: e, renderedContent: t } = (0, f.f)(
                I,
                j,
                S,
                N,
                a()(v.messageContent, y.inlineFormat),
                {
                    leadingIconClass: v.messageContentIcon,
                    trailingIconClass: v.messageContentIcon,
                    iconSize: E.WW,
                },
            );
            x =
                null != t
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: v.messageContent,
                          children: t,
                      })
                    : (0, r.jsx)(s.Text, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: v.messageReplacement,
                          children: e,
                      });
        } else
            x = (0, r.jsx)(s.Text, {
                className: v.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t["0KfDxM"]),
            });
    else x = null;
    return (0, r.jsx)(c.aQ.Provider, {
        value: (0, d.Z)(P, T),
        children: (0, r.jsx)(s.Rny, {
            className: v.messageFocusBlock,
            children: x,
        }),
    });
});
