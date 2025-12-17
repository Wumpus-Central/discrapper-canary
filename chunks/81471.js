n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(255269),
    u = n(937889),
    d = n(267128),
    p = n(411405),
    f = n(695346),
    g = n(496675),
    h = n(699516),
    m = n(868807),
    b = n(981631),
    _ = n(217702),
    E = n(388032),
    O = n(326730),
    v = n(960324);
let y = i.memo(function (e) {
    let { channel: t } = e,
        { loaded: n, error: l, message: y } = (0, m.a)(t),
        { isBlocked: I, isIgnored: C } = (0, o.cj)(
            [h.Z],
            () => ({
                isBlocked: null != y && h.Z.isBlockedForMessage(y),
                isIgnored: null != y && h.Z.isIgnoredForMessage(y),
            }),
            [y],
        ),
        S = (0, o.e7)([g.Z], () => g.Z.can(b.Plq.MANAGE_MESSAGES, t)),
        T = f.cC.useSetting(),
        { content: N } = i.useMemo(
            () =>
                (null == y ? void 0 : y.content) != null && "" !== y.content
                    ? (0, u.ZP)(y, {
                          formatInline: !0,
                          noStyleAndInteraction: !0,
                      })
                    : { content: null },
            [y],
        ),
        j = null;
    if (l)
        j = (0, r.jsx)(s.Text, {
            className: O.messageReplacement,
            variant: "text-sm/normal",
            color: "text-muted",
            children: E.intl.string(E.t.BZHld2),
        });
    else if (n)
        if (null != y && I)
            j = (0, r.jsx)(s.Text, {
                className: O.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(E.t["WPe+xL"]),
            });
        else if (null != y && C)
            j = (0, r.jsx)(s.Text, {
                className: O.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(E.t.uxrh1O),
            });
        else if (null != y) {
            let { contentPlaceholder: e, renderedContent: t } = (0, d.f)(
                y,
                N,
                I,
                C,
                a()(O.messageContent, v.inlineFormat),
                {
                    leadingIconClass: O.messageContentIcon,
                    trailingIconClass: O.messageContentIcon,
                    iconSize: _.WW,
                },
            );
            j =
                null != t
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: O.messageContent,
                          children: t,
                      })
                    : (0, r.jsx)(s.Text, {
                          tag: "span",
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: O.messageReplacement,
                          children: e,
                      });
        } else
            j = (0, r.jsx)(s.Text, {
                className: O.messageReplacement,
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(E.t["0KfDxM"]),
            });
    else j = null;
    return (0, r.jsx)(p.aQ.Provider, {
        value: (0, c.Z)(T, S),
        children: (0, r.jsx)(s.Rny, {
            className: O.messageFocusBlock,
            children: j,
        }),
    });
});
