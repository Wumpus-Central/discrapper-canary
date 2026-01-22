n.d(t, {
    A: () => j,
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(554146),
    s = n(43105),
    o = n(775602),
    c = n(379848),
    d = n(832248),
    u = n(186111),
    m = n(203982),
    p = n(764231),
    h = n(881141),
    f = n(149757),
    x = n(788868),
    b = n(652215),
    g = n(49999),
    v = n(985018);

function j(e) {
    let { groupName: t, targetElementRef: n } = e,
        l = (0, h.A)(),
        s = (0, i.bG)([o.A], () => o.A.useReducedMotion),
        m = (0, d.A)((e) => e.isOpen),
        p = (0, i.bG)([u.A], () => u.A.getLayers().includes(b.zgK.USER_SETTINGS));
    return s || null == l || m || p
        ? null
        : (0, a.jsx)(c.zJ, {
              contentType: r.M.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: {
                  cooldownDurationMs: 12096e5,
              },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: i } = e;
                  return (0, a.jsx)(y, {
                      recentlyLeveledTenureBadge: l,
                      markAsDismissed: i,
                      targetElementRef: n,
                      shouldShow: t === r.M.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}

function y(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: i, targetElementRef: r, shouldShow: o } = e,
        c = x.sp.indexOf(n),
        u = (0, f.I)(x.sp[c > 0 ? c - 1 : c], {
            ambient: !0,
        }),
        h = (0, l.useCallback)(() => {
            i(g.i.TAKE_ACTION),
                d.A.setState({
                    shouldRenderTenureLevelUp: !0,
                }),
                m._.dispatch(b.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [i]),
        j = (0, l.useCallback)(() => {
            i(g.i.USER_DISMISS);
        }, [i]),
        y = x.VD[n],
        _ = v.intl.formatToPlainString(v.t.ewkaVR, {
            timeMilestone: null == (t = (0, p.T)(y.id, y.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase(),
        }),
        A = [
            {
                text: v.intl.string(v.t.RzWDqY),
                variant: "primary",
                onClick: h,
            },
        ];
    return (0, a.jsx)(s.A, {
        targetElementRef: r,
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
        body: _,
        actions: A,
    });
}
