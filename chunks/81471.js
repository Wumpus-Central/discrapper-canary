n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(905405),
    u = n(255269),
    d = n(937889),
    p = n(267128),
    f = n(411405),
    h = n(695346),
    g = n(496675),
    m = n(699516),
    _ = n(868807),
    b = n(981631),
    E = n(217702),
    O = n(388032),
    y = n(161414),
    v = n(430864);
let I = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: I } = (0, _.a)(t),
        C = (0, c.p)(),
        { isBlocked: S, isIgnored: T } = (0, s.cj)(
            [m.Z],
            () => ({
                isBlocked: null != I && m.Z.isBlockedForMessage(I),
                isIgnored: null != I && m.Z.isIgnoredForMessage(I),
            }),
            [I],
        ),
        N = (0, s.e7)([g.Z], () => g.Z.can(b.Plq.MANAGE_MESSAGES, t)),
        j = h.cC.useSetting(),
        { content: P } = i.useMemo(
            () =>
                (null == I ? void 0 : I.content) != null && "" !== I.content
                    ? (0, d.ZP)(I, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: C,
                      })
                    : { content: null },
            [I, C],
        ),
        x = null;
    if (l)
        x = (0, r.jsx)(o.Text, {
            className: y.messageReplacement,
            variant: "text-sm/normal",
            color: "text-muted",
            children: O.intl.string(O.t.BZHld2),
        });
    else if (n)
        if (null != I && S)
            x = (0, r.jsx)(o.Text, {
                className: y.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t["WPe+xL"]),
            });
        else if (null != I && T)
            x = (0, r.jsx)(o.Text, {
                className: y.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t.uxrh1O),
            });
        else if (null != I) {
            let { contentPlaceholder: e, renderedContent: t } = (0, p.f)(
                I,
                P,
                S,
                T,
                a()(y.messageContent, v.inlineFormat),
                {
                    leadingIconClass: y.messageContentIcon,
                    trailingIconClass: y.messageContentIcon,
                    iconSize: E.WW,
                },
            );
            x =
                null != t
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: y.messageContent,
                          children: t,
                      })
                    : (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: y.messageReplacement,
                          children: e,
                      });
        } else
            x = (0, r.jsx)(o.Text, {
                className: y.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t["0KfDxM"]),
            });
    else x = null;
    return (0, r.jsx)(f.aQ.Provider, {
        value: (0, u.Z)(j, N),
        children: (0, r.jsx)(o.Rny, {
            className: y.messageFocusBlock,
            children: x,
        }),
    });
});
