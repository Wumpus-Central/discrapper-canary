i.d(e, { h: () => I });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    a = i.n(r),
    l = i(17928),
    c = i(844222),
    d = i(778712),
    o = i(97808),
    m = i(834730),
    u = i(821609),
    p = i(534890),
    A = i(289873),
    g = i(90517),
    R = i(772707),
    h = i(308528),
    x = i(854627),
    C = i(830543),
    E = i(174459),
    f = i(975571),
    v = i(427262),
    j = i(326084),
    _ = i(851746),
    b = i(652215),
    k = i(375708),
    N = i(37576);
function S(t) {
    let { recipient: e, status: i, onClose: n } = t,
        { avatarSrc: r, eventHandlers: l } = (0, x.A)({ userId: e?.id, size: d._3.SIZE_56 }),
        c = v.Ay.getName(e),
        A = i === j.o.FAIL;
    return (0, s.jsxs)("div", {
        className: N.w4,
        children: [
            (0, s.jsx)(o.eu, { imageClassName: a()({ [N.jN]: A }), src: r, "aria-label": c, size: d._3.SIZE_32, ...l }),
            A
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(m.E, {
                              className: N.E0,
                              variant: "text-md/medium",
                              color: "text-strong",
                              children: c,
                          }),
                          (0, s.jsx)(m.E, {
                              variant: "text-md/medium",
                              className: N.nT,
                              color: "text-strong",
                              children: k.intl.format(k.t.RO3T4B, { userName: c }),
                          }),
                      ],
                  })
                : (0, s.jsx)(m.E, { variant: "text-md/medium", className: N.Pm, color: "text-strong", children: c }),
            (0, s.jsx)(u.$, {
                variant: "secondary",
                size: "sm",
                text: k.intl.string(k.t["g33r/P"]),
                icon: p.ChatIcon,
                onClick: () => {
                    var t;
                    return ((t = e.id), void ((0, C.default)(), h.A.openPrivateChannel({ recipientIds: t }), n()));
                },
            }),
        ],
    });
}
function I(t) {
    let { transitionState: e, results: i, onClose: r, isReminderConfirmation: a, showRecipientList: d = !0 } = t,
        o = (0, l.bG)([_.A], () => _.A.getReferralsRemaining());
    E.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let { reducedMotion: m } = n.useContext(c.C);
    return null === o
        ? (0, s.jsx)(A.y, {})
        : (0, s.jsx)(R.k, {
              graphic: m.enabled
                  ? {
                        src: "https://cdn.discordapp.com/assets/content/7d3bb543f57192ba573ca7c515ef59c9cf5c285538f43508ccd8e10637ccd902.svg",
                        type: "image",
                    }
                  : { rive: g.l, type: "rive" },
              gradientColor: "nitro-pink",
              title:
                  0 === i.filter((t) => t.status === j.o.SUCCESS).length
                      ? k.intl.string(k.t["7VBEue"])
                      : !0 === a
                        ? k.intl.string(k.t.GP5lbq)
                        : k.intl.string(k.t.tKCltd),
              subtitle:
                  !0 === a
                      ? k.intl.format(k.t["4gJJfD"], { helpdeskArticle: f.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) })
                      : k.intl.format(k.t.AwGSWl, { helpdeskArticle: f.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) }),
              onClose: r,
              transitionState: e,
              children: d
                  ? (0, s.jsx)("div", {
                        className: N.Hz,
                        children: i.map((t) =>
                            (0, s.jsx)(S, { recipient: t.recipient, status: t.status, onClose: r }, t.recipient.id),
                        ),
                    })
                  : null,
          });
}
