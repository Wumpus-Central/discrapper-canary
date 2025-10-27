n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(95398),
    u = n(905405),
    d = n(255269),
    p = n(937889),
    f = n(267128),
    h = n(695346),
    m = n(496675),
    g = n(699516),
    _ = n(868807),
    b = n(981631),
    E = n(217702),
    O = n(388032),
    I = n(161414),
    v = n(430864);
let y = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: y } = (0, _.a)(t),
        C = (0, u.p)(),
        { isBlocked: S, isIgnored: T } = (0, s.cj)(
            [g.Z],
            () => ({
                isBlocked: null != y && g.Z.isBlockedForMessage(y),
                isIgnored: null != y && g.Z.isIgnoredForMessage(y),
            }),
            [y],
        ),
        N = (0, s.e7)([m.Z], () => m.Z.can(b.Plq.MANAGE_MESSAGES, t)),
        j = h.cC.useSetting(),
        { content: P } = i.useMemo(
            () =>
                (null == y ? void 0 : y.content) != null && "" !== y.content
                    ? (0, p.ZP)(y, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                          shouldFilterKeywords: C,
                      })
                    : { content: null },
            [y, C],
        ),
        x = null;
    if (l)
        x = (0, r.jsx)(o.Text, {
            className: I.messageReplacement,
            variant: "text-sm/normal",
            color: "text-muted",
            children: O.intl.string(O.t.BZHld2),
        });
    else if (n)
        if (null != y && S)
            x = (0, r.jsx)(o.Text, {
                className: I.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t["WPe+xL"]),
            });
        else if (null != y && T)
            x = (0, r.jsx)(o.Text, {
                className: I.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t.uxrh1O),
            });
        else if (null != y) {
            let { contentPlaceholder: e, renderedContent: t } = (0, f.f)(
                y,
                P,
                S,
                T,
                a()(I.messageContent, v.inlineFormat),
                {
                    leadingIconClass: I.messageContentIcon,
                    trailingIconClass: I.messageContentIcon,
                    iconSize: E.WW,
                },
            );
            x =
                null != t
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: I.messageContent,
                          children: t,
                      })
                    : (0, r.jsx)(o.Text, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: I.messageReplacement,
                          children: e,
                      });
        } else
            x = (0, r.jsx)(o.Text, {
                className: I.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: O.intl.string(O.t["0KfDxM"]),
            });
    else x = null;
    return (0, r.jsx)(c.aQ.Provider, {
        value: (0, d.Z)(j, N),
        children: (0, r.jsx)(o.Rny, {
            className: I.messageFocusBlock,
            children: x,
        }),
    });
});
