n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(674180),
    d = n(584825),
    u = n(289393),
    g = n(727843),
    m = n(14263),
    p = n(783454),
    f = n(388032),
    h = n(605041),
    x = n(654321);
function b(e) {
    var t;
    let { onDeleteEditState: l } = e,
        { editStateId: b, guildId: j, groupListingId: _ } = (0, g.N)(),
        v = (0, a.e7)([u.Z], () => u.Z.getSubscriptionListing(b)),
        C = null == v ? void 0 : v.id,
        O = (0, m.Z)(j),
        y = i.useMemo(() => {
            var e;
            return null != O && null != v && (null != (e = O[v.role_id]) ? e : 0);
        }, [O, v]),
        N = 0 === y,
        E = null == C,
        I = null != (t = null == v ? void 0 : v.archived) && t,
        { error: S, deleteSubscriptionListing: T, submitting: P } = (0, d.r4)(),
        { error: w, archiveSubscriptionListing: Z, submitting: R } = (0, d._1)(),
        { allowSelfRemoveMonetization: D } = (0, c.gX)(j);
    return null == v
        ? null
        : (0, r.jsx)(p.Z, {
              title: f.intl.string(f.t["7Si8Ul"]),
              children: (0, r.jsxs)(o.Kqy, {
                  gap: 16,
                  children: [
                      null !== S &&
                          (0, r.jsx)(o.Wn, {
                              messageType: o.QYI.ERROR,
                              children: f.intl.string(f.t["9k8H//"]),
                          }),
                      null !== w &&
                          (0, r.jsx)(o.Wn, {
                              messageType: o.QYI.ERROR,
                              children: f.intl.string(f.t.up8gUl),
                          }),
                      I
                          ? (0, r.jsxs)(o.hjN, {
                                title: f.intl.string(f.t["2D14T0"]),
                                disabled: !D,
                                children: [
                                    (0, r.jsx)(o.R94, {
                                        type: o.R94.Types.DESCRIPTION,
                                        className: h.formDescription,
                                        disabled: !D,
                                        children: f.intl.string(f.t.Y4KjUF),
                                    }),
                                    (0, r.jsxs)(o.Kqy, {
                                        gap: 16,
                                        children: [
                                            !N &&
                                                (0, r.jsx)(o.Text, {
                                                    variant: "text-sm/normal",
                                                    className: x.warning,
                                                    children: f.intl.formatToPlainString(f.t.ABeonZ, {
                                                        listingMemberCount: y,
                                                    }),
                                                }),
                                            (0, r.jsx)(o.zxk, {
                                                variant: "critical-primary",
                                                onClick: () => {
                                                    let e = async () => {
                                                        (E ||
                                                            (s()(null != _, "group listing doesnt exist"),
                                                            s()(null != C, "subscription listing doesnt exist"),
                                                            await T(j, _, C))) &&
                                                            (null == l || l());
                                                    };
                                                    (0, o.ZDy)(async () => {
                                                        let { Modal: t } = await Promise.resolve().then(
                                                            n.bind(n, 793030),
                                                        );
                                                        return (n) =>
                                                            (0, r.jsx)(t, {
                                                                title: f.intl.string(f.t["8ZRTsr"]),
                                                                onClose: n.onClose,
                                                                transitionState: n.transitionState,
                                                                actions: [
                                                                    {
                                                                        text: f.intl.string(f.t["ETE/oK"]),
                                                                        variant: "secondary",
                                                                        onClick: () => n.onClose(),
                                                                    },
                                                                    {
                                                                        text: f.intl.string(f.t.GMtG6u),
                                                                        variant: "critical-primary",
                                                                        onClick: async () => {
                                                                            await e(), n.onClose();
                                                                        },
                                                                    },
                                                                ],
                                                                children: (0, r.jsx)(o.Text, {
                                                                    variant: "text-md/normal",
                                                                    children: f.intl.string(f.t.Y4KjUF),
                                                                }),
                                                            });
                                                    });
                                                },
                                                loading: P,
                                                disabled: !D || !N,
                                                text: f.intl.string(f.t.GMtG6u),
                                            }),
                                        ],
                                    }),
                                ],
                            })
                          : (0, r.jsxs)(o.hjN, {
                                title: f.intl.string(f.t["MS/4U1"]),
                                disabled: !D,
                                children: [
                                    (0, r.jsx)(o.R94, {
                                        type: o.R94.Types.DESCRIPTION,
                                        className: h.formDescription,
                                        disabled: !D,
                                        children: f.intl.string(f.t["5/Jeg4"]),
                                    }),
                                    (0, r.jsx)(o.zxk, {
                                        variant: "critical-primary",
                                        onClick: () => {
                                            s()(null != _, "group listing doesnt exist"),
                                                s()(null != C, "subscription listing doesnt exist"),
                                                (0, o.ZDy)(async () => {
                                                    let { Modal: e } = await Promise.resolve().then(n.bind(n, 793030));
                                                    return (t) =>
                                                        (0, r.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            title: f.intl.string(f.t["8ZRTsr"]),
                                                            onClose: t.onClose,
                                                            actions: [
                                                                {
                                                                    text: f.intl.string(f.t["ETE/oK"]),
                                                                    variant: "secondary",
                                                                    onClick: () => t.onClose(),
                                                                },
                                                                {
                                                                    text: f.intl.string(f.t.RL0wjo),
                                                                    variant: "critical-primary",
                                                                    onClick: async () => {
                                                                        await Z(j, _, C), t.onClose();
                                                                    },
                                                                },
                                                            ],
                                                            children: (0, r.jsx)(o.Text, {
                                                                variant: "text-md/normal",
                                                                children: f.intl.string(f.t["5/Jeg4"]),
                                                            }),
                                                        });
                                                });
                                        },
                                        loading: R,
                                        disabled: !D,
                                        text: f.intl.string(f.t.RL0wjo),
                                    }),
                                ],
                            }),
                  ],
              }),
          });
}
