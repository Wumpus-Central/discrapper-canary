n.d(t, {
    A: () => j,
});
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(554146),
    s = n(43105),
    o = n(775602),
    c = n(379848),
    d = n(832248),
    u = n(995377),
    m = n(203982),
    p = n(764231),
    h = n(881141),
    x = n(149757),
    g = n(788868),
    f = n(652215),
    b = n(49999),
    v = n(985018);

function j(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = (0, h.A)(),
        s = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        m = (0, d.A)((e) => e.isOpen),
        p = (0, u.G)();
    return s || null == l || m || p
        ? null
        : (0, a.jsx)(c.zJ, {
              contentType: i.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: {
                  cooldownDurationMs: 12096e5,
              },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  return (0, a.jsx)(_, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: r,
                      targetElementRef: n,
                      shouldShow: t === i.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}

function _(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: r, targetElementRef: i, shouldShow: o } = e,
        c = g.sp.indexOf(n),
        u = (0, x.I)(g.sp[c > 0 ? c - 1 : c], {
            ambient: !0,
        }),
        h = (0, l.useCallback)(() => {
            r(b.i.TAKE_ACTION),
                d.A.setState({
                    shouldRenderTenureLevelUp: !0,
                }),
                m._.dispatch(f.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [r]),
        j = (0, l.useCallback)(() => {
            r(b.i.USER_DISMISS);
        }, [r]),
        _ = g.VD[n],
        y = v.intl.formatToPlainString(v.t.ewkaVR, {
            timeMilestone: null == (t = (0, p.T)(_.id, _.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase(),
        }),
        A = [
            {
                text: v.intl.string(v.t.RzWDqY),
                variant: "primary",
                onClick: h,
            },
        ];
    return (0, a.jsx)(s.A, {
        targetElementRef: i,
        onRequestClose: j,
        shouldShow: o,
        caretConfig: {
            align: "center",
        },
        graphic:
            null != u
                ? {
                      type: "image",
                      src: u,
                      aspectRatio: "6/4",
                  }
                : void 0,
        size: "lg",
        title: v.intl.string(v.t.VoDxsV),
        body: y,
        actions: A,
    });
}
